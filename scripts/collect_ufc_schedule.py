# UFCStats 공개 예정 대회 목록을 직접 수집해 화면 보조 데이터로 저장한다.
from __future__ import annotations

from datetime import datetime
import json
from pathlib import Path
import re
from urllib.request import Request, urlopen

from collect_ufc_results import clean_html, find_completed_events


UPCOMING_EVENTS_URL = "http://ufcstats.com/statistics/events/upcoming?page=all"
USER_AGENT = "FightCalendarKorea/0.1 (schedule collector)"
OUTPUT_FILE = Path(__file__).resolve().parents[1] / "app/data/auto-scheduled-events.ts"


def slug(value: str) -> str:
    normalized = re.sub(r"[^a-z0-9]+", "-", value.casefold()).strip("-")
    return normalized or "ufc-event"


def fetch(url: str) -> str:
    request = Request(url, headers={"User-Agent": USER_AGENT})
    with urlopen(request, timeout=30) as response:
        return response.read().decode("utf-8", errors="replace")


def write_events(events: list[dict[str, str]]) -> None:
    payload = [
        {
            "id": f"ufcstats-{event['date']}-{slug(event['title'])}",
            "title": event["title"],
            "date": event["date"],
            "sourceUrl": event["url"],
        }
        for event in events
    ]
    OUTPUT_FILE.write_text(
        "// 직접 수집한 UFC 예정 대회 목록을 화면 일정에 보조 데이터로 제공한다.\n"
        "export type AutoScheduledEvent = { id: string; title: string; date: string; sourceUrl: string };\n\n"
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
