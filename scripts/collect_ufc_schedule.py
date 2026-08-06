# UFCStats 공개 예정 대회 목록을 직접 수집해 화면 보조 데이터로 저장한다.
from __future__ import annotations

from datetime import datetime, timezone
import json
from pathlib import Path
import re
from urllib.request import Request, urlopen

from bs4 import BeautifulSoup

try:
    from .collect_ufc_results import clean_html, find_completed_events
except ImportError:
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


def find_official_upcoming_events(html: str, now: datetime | None = None) -> list[dict[str, str]]:
    soup = BeautifulSoup(html, "html.parser")
    current = now
    events: list[dict[str, str]] = []
    seen_urls: set[str] = set()

    for card in soup.select("article.c-card-event--result"):
        timestamp = card.select_one("[data-main-card-timestamp]")
        value = timestamp.get("data-main-card-timestamp", "") if timestamp else ""
        if not value.isdigit():
            continue
        start = datetime.fromtimestamp(int(value), timezone.utc)
        if card.select_one('a[href*="/event/"][href*="#"]'):
            continue
        if current and start <= current:
            continue
        link = card.select_one('a[href*="/event/"]')
        title = card.select_one(".c-card-event--result__headline")
        if not link or not title:
            continue
        href = link.get("href", "")
        if not href or href in seen_urls:
            continue
        seen_urls.add(href)
        events.append(
            {
                "title": title.get_text(" ", strip=True),
                "date": start.date().isoformat(),
                "url": f"https://www.ufc.com{href}" if href.startswith("/") else href,
            }
        )

    return events


def find_official_event_bouts(html: str) -> list[dict[str, str]]:
    soup = BeautifulSoup(html, "html.parser")
    bouts: list[dict[str, str]] = []
    fights = soup.select(".view-display-id-entity_view_1 .c-listing-fight") or soup.select(
        ".c-listing-fight"
    )
    for index, fight in enumerate(fights):
        left = fight.select_one(".c-listing-fight__corner-name--red")
        right = fight.select_one(".c-listing-fight__corner-name--blue")
        division = fight.select_one(".c-listing-fight__class-text")
        if not left or not right or not division:
            continue
        left_name = left.get_text(" ", strip=True)
        right_name = right.get_text(" ", strip=True)
        if not left_name or not right_name:
            continue
        weight = re.sub(r"\s+Bout$", "", division.get_text(" ", strip=True))
        bouts.append({
            "left": left_name,
            "leftKo": left_name,
            "right": right_name,
            "rightKo": right_name,
            "weight": weight or "체급 확인 중",
            "section": "main" if index == 0 else "announced",
        })
    return bouts


def official_event_details() -> dict[str, dict[str, object]]:
    soup = BeautifulSoup(fetch(UFC_EVENTS_URL), "html.parser")
    details: dict[str, dict[str, object]] = {}
    for card in soup.select("article.c-card-event--result"):
        if card.select_one('a[href*="/event/"][href*="#"]'):
            continue
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
            card = fight.get("data-fight-card", "").casefold()
            bouts.append({
                "left": left,
                "leftKo": left,
                "right": right,
                "rightKo": right,
                "weight": "체급 확인 중",
                "section": "main" if card == "main" else "prelims" if "prelim" in card else "announced",
            })
        if not start_utc:
            continue
        source_url = f"https://www.ufc.com{href}" if href.startswith("/") else href
        bouts = find_official_event_bouts(fetch(source_url))
        details[start_utc[:10]] = {
            "title": title.get_text(" ", strip=True) if title else "",
            "sourceUrl": source_url,
            "startUtc": start_utc,
            "venue": location.get_text(" ", strip=True) if location else "",
            "bouts": bouts,
        }
    return details


def build_payload(events: list[dict[str, str]], details: dict[str, dict[str, object]]) -> list[dict[str, object]]:
    scheduled = {
        event["date"]: {
            "title": event["title"],
            "date": event["date"],
            "sourceUrl": event["url"],
        }
        for event in events
    }
    for event_date, detail in details.items():
        existing = scheduled.get(event_date, {})
        title = detail.get("title") or existing.get("title")
        source_url = detail.get("sourceUrl") or existing.get("sourceUrl")
        if not title or not source_url:
            continue
        scheduled[event_date] = {
            **existing,
            "title": title,
            "date": event_date,
            "sourceUrl": source_url,
            **{key: value for key, value in detail.items() if value},
        }
    return [
        {
            "id": f"ufcstats-{event['date']}-{slug(str(event['title']))}",
            **event,
        }
        for _, event in sorted(scheduled.items())
    ]


def write_events(events: list[dict[str, str]]) -> None:
    payload = build_payload(events, official_event_details())
    OUTPUT_FILE.write_text(
        "// 직접 수집한 UFC 예정 대회 목록을 화면 일정에 보조 데이터로 제공한다.\n"
        "export type AutoScheduledBout = { left: string; leftKo: string; right: string; rightKo: string; weight: string; section: \"main\" | \"prelims\" | \"announced\" };\n"
        "export type AutoScheduledEvent = { id: string; title: string; date: string; sourceUrl: string; subtitle?: string; startUtc?: string; venue?: string; city?: string; bouts?: AutoScheduledBout[] };\n\n"
        f"export const AUTO_SCHEDULED_EVENTS: AutoScheduledEvent[] = {json.dumps(payload, ensure_ascii=False, indent=2)};\n",
        encoding="utf-8",
    )


def main() -> int:
    events = find_official_upcoming_events(fetch(UFC_EVENTS_URL))
    if not events:
        events = find_completed_events(fetch(UPCOMING_EVENTS_URL))
    write_events(events)
    print(f"Collected {len(events)} upcoming UFC events.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
