# UFCStats 공개 경기 기록에서 완료 대회 결과를 수집해 화면 데이터로 저장한다.
from __future__ import annotations

from datetime import datetime, timezone
import json
from pathlib import Path
import re
from urllib.request import Request, urlopen


COMPLETED_EVENTS_URL = "http://ufcstats.com/statistics/events/completed?page=all"
USER_AGENT = "FightCalendarKorea/0.1 (event result collector)"
ROOT = Path(__file__).resolve().parents[1]
EVENTS_FILE = ROOT / "app/data/events.ts"
OUTPUT_FILE = ROOT / "app/data/event-results.ts"


def clean_html(value: str) -> str:
    return re.sub(r"\s+", " ", re.sub(r"<[^>]+>", " ", value)).strip()


def normalize(value: str) -> str:
    return re.sub(r"[^a-z0-9]", "", value.casefold())


def fetch(url: str) -> str:
    request = Request(url, headers={"User-Agent": USER_AGENT})
    with urlopen(request, timeout=30) as response:
        return response.read().decode("utf-8", errors="replace")


def find_completed_events(html: str) -> list[dict[str, str]]:
    events: list[dict[str, str]] = []
    pattern = re.compile(
        r'<a[^>]+href="(?P<url>https?://ufcstats\.com/event-details/[^"]+)"[^>]*>(?P<body>.*?)</a>',
        re.DOTALL,
    )
    for match in pattern.finditer(html):
        text = clean_html(match.group("body"))
        date = re.search(r"([A-Z][a-z]+ \d{1,2}, \d{4})", text)
        if not date:
            continue
        events.append(
            {
                "title": text[: date.start()].strip(),
                "date": datetime.strptime(date.group(1), "%B %d, %Y").date().isoformat(),
                "url": match.group("url"),
            }
        )
    return events


def find_bout_results(html: str) -> list[dict[str, object]]:
    bouts: list[dict[str, object]] = []
    rows = re.findall(r"<tr[^>]*b-fight-details__table-row[^>]*>(.*?)</tr>", html, re.DOTALL)
    for row in rows:
        statuses = re.findall(r"b-fight-details__person-status[^>]*>\s*([^<]+)", row)
        names = [clean_html(name) for name in re.findall(r"b-fight-details__person-name[^>]*>(.*?)</a>", row, re.DOTALL)]
        if len(names) < 2 or len(statuses) < 2:
            continue
        winner_index = next((index for index, status in enumerate(statuses[:2]) if status.strip() == "W"), None)
        loser_index = next((index for index, status in enumerate(statuses[:2]) if status.strip() == "L"), None)
        text = clean_html(row)
        method = next((value for value in ("KO/TKO", "Submission", "Decision", "Draw", "NC") if value.casefold() in text.casefold()), "Official result")
        round_match = re.search(r"\b([1-5])\b", text)
        time_match = re.search(r"\b(\d{1,2}:\d{2})\b", text)
        bouts.append(
            {
                "winner": names[winner_index] if winner_index is not None else None,
                "loser": names[loser_index] if loser_index is not None else None,
                "method": method,
                "round": int(round_match.group(1)) if round_match else None,
                "time": time_match.group(1) if time_match else None,
            }
        )
    return bouts


def scheduled_events(source: str) -> list[dict[str, str]]:
    pattern = re.compile(
        r'id: "(?P<id>[^"]+)"(?:(?!\n  \{).)*?subtitle: "(?P<subtitle>[^"]+)"(?:(?!\n  \{).)*?startUtc: "(?P<start>[^"]+)"',
        re.DOTALL,
    )
    return [match.groupdict() for match in pattern.finditer(source)]


def match_event(event: dict[str, str], completed: list[dict[str, str]]) -> dict[str, str] | None:
    fighters = re.split(r"\s+vs\.?\s+", event["subtitle"], flags=re.IGNORECASE)
    terms = [
        normalize(part.split()[-1])
        for part in fighters
        if part.strip()
    ]
    for candidate in completed:
        title = normalize(candidate["title"])
        if terms and all(term in title for term in terms):
            return candidate
    return None


def write_results(results: list[dict[str, object]], output: Path) -> None:
    payload = json.dumps(results, ensure_ascii=False, indent=2)
    output.write_text(
        "// 자동 수집한 완료 UFC 대회의 경기 결과를 화면에 제공한다.\n"
        "export type EventResult = {\n"
        "  eventId: string; completed: true; sourceUrl: string; verifiedAt: string;\n"
        "  bouts: Array<{ winner: string | null; loser: string | null; method: string; round: number | null; time: string | null }>;\n"
        "};\n\n"
        f"export const EVENT_RESULTS: EventResult[] = {payload};\n",
        encoding="utf-8",
    )


def main() -> int:
    source = EVENTS_FILE.read_text(encoding="utf-8")
    completed = find_completed_events(fetch(COMPLETED_EVENTS_URL))
    results: list[dict[str, object]] = []
    for event in scheduled_events(source):
        candidate = match_event(event, completed)
        if not candidate:
            continue
        bouts = find_bout_results(fetch(candidate["url"]))
        if not bouts:
            continue
        results.append({
            "eventId": event["id"], "completed": True, "sourceUrl": candidate["url"],
            "verifiedAt": datetime.now(timezone.utc).isoformat(), "bouts": bouts,
        })
    write_results(results, OUTPUT_FILE)
    print(f"Collected {len(results)} completed UFC event results.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
