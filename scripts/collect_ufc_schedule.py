# UFCStats 공개 예정 대회 목록을 직접 수집해 화면 보조 데이터로 저장한다.
from __future__ import annotations

from datetime import datetime, timezone
import json
from pathlib import Path
import re
from urllib.request import Request, urlopen

from bs4 import BeautifulSoup

from collect_ufc_results import clean_html, find_completed_events


UPCOMING_EVENTS_URL = "http://ufcstats.com/statistics/events/upcoming?page=all"
UFC_EVENTS_URL = "https://www.ufc.com/events"
USER_AGENT = "FightCalendarKorea/0.1 (schedule collector)"
OUTPUT_FILE = Path(__file__).resolve().parents[1] / "app/data/auto-scheduled-events.ts"


def slug(value: str) -> str:
    normalized = re.sub(r"[^a-z0-9]+", "-", value.casefold()).strip("-")
    return normalized or "ufc-event"


def fetch(url: str) -> str:
    request = Request(url, headers={"User-Agent": USER_AGENT})
    with urlopen(request, timeout=30) as response:
        return response.read().decode("utf-8", errors="replace")


def official_event_details() -> dict[str, dict[str, object]]:
    soup = BeautifulSoup(fetch(UFC_EVENTS_URL), "html.parser")
    details: dict[str, dict[str, object]] = {}
    for card in soup.select("article.c-card-event--result"):
        link = card.select_one('a[href*="/event/"]')
        if not link:
            continue
        href = link.get("href", "")
        timestamp = card.select_one("[data-main-card-timestamp]")
        start_utc = ""
        if timestamp and timestamp.get("data-main-card-timestamp", "").isdigit():
            start_utc = datetime.fromtimestamp(int(timestamp["data-main-card-timestamp"]), timezone.utc).isoformat().replace("+00:00", "Z")
        title = card.select_one(".c-card-event--result__headline")
        location = card.select_one(".c-card-event--result__location")
        bouts = []
        for fight in card.select("[data-fight-label]"):
            label = " ".join(fight.get("data-fight-label", "").split())
            if " vs " not in label:
                continue
            left, right = (part.strip() for part in label.split(" vs ", 1))
            bouts.append({"left": left, "leftKo": left, "right": right, "rightKo": right, "weight": "체급 확인 중", "section": "main" if fight.get("data-fight-card") == "main" else "announced"})
        if not start_utc:
            continue
        details[start_utc[:10]] = {
            "title": title.get_text(" ", strip=True) if title else "",
            "sourceUrl": f"https://www.ufc.com{href}" if href.startswith("/") else href,
            "startUtc": start_utc,
            "venue": location.get_text(" ", strip=True) if location else "",
            "bouts": bouts,
        }
    return details


def write_events(events: list[dict[str, str]]) -> None:
    details = official_event_details()
    payload = [
        {
            "id": f"ufcstats-{event['date']}-{slug(event['title'])}",
            "title": event["title"],
            "date": event["date"],
            "sourceUrl": event["url"],
            **{key: value for key, value in details.get(event["date"], {}).items() if value},
        }
        for event in events
    ]
    OUTPUT_FILE.write_text(
        "// 직접 수집한 UFC 예정 대회 목록을 화면 일정에 보조 데이터로 제공한다.\n"
        "export type AutoScheduledBout = { left: string; leftKo: string; right: string; rightKo: string; weight: string; section: \"main\" | \"announced\" };\n"
        "export type AutoScheduledEvent = { id: string; title: string; date: string; sourceUrl: string; subtitle?: string; startUtc?: string; venue?: string; city?: string; bouts?: AutoScheduledBout[] };\n\n"
        f"export const AUTO_SCHEDULED_EVENTS: AutoScheduledEvent[] = {json.dumps(payload, ensure_ascii=False, indent=2)};\n",
        encoding="utf-8",
    )


def main() -> int:
    events = find_completed_events(fetch(UPCOMING_EVENTS_URL))
    write_events(events)
    print(f"Collected {len(events)} upcoming UFC events.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
