# UFCStats 공개 경기 기록에서 완료 대회 결과를 수집해 화면 데이터로 저장한다.
from __future__ import annotations

from datetime import datetime, timezone
import json
from pathlib import Path
import re
from urllib.request import Request, urlopen

from bs4 import BeautifulSoup


COMPLETED_EVENTS_URL = "http://ufcstats.com/statistics/events/completed?page=all"
SHERDOG_UFC_EVENTS_URL = "https://www.sherdog.com/organizations/Ultimate-Fighting-Championship-UFC-2"
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
        cells = re.findall(r"<td[^>]*>(.*?)</td>", row, re.DOTALL)
        if len(cells) < 3:
            continue
        statuses = re.findall(r"b-fight-details__person-status[^>]*>\s*([^<]+)", cells[0])
        names = [clean_html(name) for name in re.findall(r"<a[^>]*>(.*?)</a>", cells[1], re.DOTALL)]
        if len(names) < 2 or len(statuses) < 2:
            continue
        winner_index = next((index for index, status in enumerate(statuses[:2]) if status.strip() == "W"), None)
        loser_index = next((index for index, status in enumerate(statuses[:2]) if status.strip() == "L"), None)
        method = clean_html(cells[-3]) or "Official result"
        round_value = clean_html(cells[-2])
        time_value = clean_html(cells[-1])
        bouts.append(
            {
                "winner": names[winner_index] if winner_index is not None else None,
                "loser": names[loser_index] if loser_index is not None else None,
                "method": method,
                "round": int(round_value) if round_value.isdigit() else None,
                "time": time_value if re.fullmatch(r"\d{1,2}:\d{2}", time_value) else None,
            }
        )
    return bouts


def find_sherdog_events(html: str) -> list[dict[str, str]]:
    soup = BeautifulSoup(html, "html.parser")
    events: list[dict[str, str]] = []
    seen: set[str] = set()
    for link in soup.select('a[href*="/events/"]'):
        href = link.get("href", "")
        title = link.get_text(" ", strip=True)
        if not href or not title or href in seen:
            continue
        seen.add(href)
        events.append({
            "title": title,
            "url": f"https://www.sherdog.com{href}" if href.startswith("/") else href,
        })
    return events


def find_sherdog_bout_results(html: str) -> list[dict[str, object]]:
    soup = BeautifulSoup(html, "html.parser")
    bouts: list[dict[str, object]] = []
    for fight in soup.select('[itemprop="subEvent"]'):
        fighters = fight.select('[itemprop="performer"]')
        if len(fighters) != 2:
            continue
        names = [
            fighter.select_one('[itemprop="name"]').get_text(" ", strip=True)
            if fighter.select_one('[itemprop="name"]')
            else ""
            for fighter in fighters
        ]
        outcomes = [
            fighter.select_one(".final_result").get_text(" ", strip=True).casefold()
            if fighter.select_one(".final_result")
            else ""
            for fighter in fighters
        ]
        if not all(names) or "win" not in outcomes or "loss" not in outcomes:
            continue
        details = {}
        for cell in fight.select("table.fight_card_resume td"):
            label = cell.select_one("em")
            if not label:
                continue
            key = label.get_text(" ", strip=True).casefold()
            details[key] = cell.get_text(" ", strip=True).replace(
                label.get_text(" ", strip=True), "", 1
            ).strip()
        result_cells = fight.select("td")
        result_method = fight.select_one("td.winby b")
        if result_method:
            details["method"] = result_method.get_text(" ", strip=True)
            if len(result_cells) >= 2:
                details["round"] = result_cells[-2].get_text(" ", strip=True)
                details["time"] = result_cells[-1].get_text(" ", strip=True)
        round_value = details.get("round", "")
        time_value = details.get("time", "")
        bouts.append({
            "winner": names[outcomes.index("win")],
            "loser": names[outcomes.index("loss")],
            "method": details.get("method") or "Official result",
            "round": int(round_value) if round_value.isdigit() else None,
            "time": time_value if re.fullmatch(r"\d{1,2}:\d{2}", time_value) else None,
        })
    return bouts


def scheduled_events(source: str) -> list[dict[str, str]]:
    pattern = re.compile(
        r'id: "(?P<id>[^"]+)"(?:(?!\n  \{).)*?subtitle: "(?P<subtitle>[^"]+)"(?:(?!\n  \{).)*?startUtc: "(?P<start>[^"]+)"',
        re.DOTALL,
    )
    return [match.groupdict() for match in pattern.finditer(source)]


def event_terms(event: dict[str, str]) -> list[str]:
    fighters = re.split(r"\s+vs\.?\s+", event["subtitle"], flags=re.IGNORECASE)
    return [
        normalize(part.split()[-1])
        for part in fighters
        if part.strip()
    ]


def match_event(event: dict[str, str], completed: list[dict[str, str]]) -> dict[str, str] | None:
    terms = event_terms(event)
    event_date = datetime.fromisoformat(event["start"].replace("Z", "+00:00")).date().isoformat()
    for candidate in completed:
        title = normalize(candidate["title"])
        if candidate["date"] == event_date and terms and all(term in title for term in terms):
            return candidate
    return None


def match_sherdog_event(event: dict[str, str], candidates: list[dict[str, str]]) -> dict[str, str] | None:
    terms = event_terms(event)
    for candidate in candidates:
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
    sherdog_events = find_sherdog_events(fetch(SHERDOG_UFC_EVENTS_URL))
    results: list[dict[str, object]] = []
    for event in scheduled_events(source):
        candidate = match_event(event, completed)
        bouts = find_bout_results(fetch(candidate["url"])) if candidate else []
        source_url = candidate["url"] if candidate else ""
        if not bouts:
            sherdog_candidate = match_sherdog_event(event, sherdog_events)
            if sherdog_candidate:
                bouts = find_sherdog_bout_results(fetch(sherdog_candidate["url"]))
                source_url = sherdog_candidate["url"]
        if not bouts:
            continue
        results.append({
            "eventId": event["id"], "completed": True, "sourceUrl": source_url,
            "verifiedAt": datetime.now(timezone.utc).isoformat(), "bouts": bouts,
        })
    write_results(results, OUTPUT_FILE)
    print(f"Collected {len(results)} completed UFC event results.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
