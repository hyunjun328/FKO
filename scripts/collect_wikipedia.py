# 위키미디어 공개 API에서 UFC 예정 대회를 수집해 검수 파일로 저장하는 도구
from __future__ import annotations

import argparse
from datetime import date, datetime, timezone
from html.parser import HTMLParser
import json
from pathlib import Path
import re
from urllib.parse import urlencode
from urllib.request import Request, urlopen


API_URL = "https://en.wikipedia.org/w/api.php"
DEFAULT_PAGE = "2026_in_UFC"
USER_AGENT = "FightCalendarKorea/0.1 (schedule review collector)"


class WikiTableParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__()
        self.tables: list[list[list[str]]] = []
        self._table: list[list[str]] | None = None
        self._row: list[str] | None = None
        self._cell: list[str] | None = None

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        if tag == "table":
            self._table = []
        elif tag == "tr" and self._table is not None:
            self._row = []
        elif tag in {"th", "td"} and self._row is not None:
            self._cell = []
        elif tag == "br" and self._cell is not None:
            self._cell.append(" ")

    def handle_data(self, data: str) -> None:
        if self._cell is not None:
            self._cell.append(data)

    def handle_endtag(self, tag: str) -> None:
        if tag in {"th", "td"} and self._cell is not None and self._row is not None:
            value = re.sub(r"\s+", " ", "".join(self._cell)).strip()
            value = re.sub(r"\[\d+\]", "", value).strip()
            self._row.append(value)
            self._cell = None
        elif tag == "tr" and self._row is not None and self._table is not None:
            if self._row:
                self._table.append(self._row)
            self._row = None
        elif tag == "table" and self._table is not None:
            if self._table:
                self.tables.append(self._table)
            self._table = None


def parse_date(raw: str) -> str | None:
    normalized = re.sub(r"\[[^\]]+\]", "", raw).strip()
    for pattern in ("%B %d, %Y", "%b %d, %Y", "%Y-%m-%d"):
        try:
            return datetime.strptime(normalized, pattern).date().isoformat()
        except ValueError:
            continue
    return None


def find_scheduled_events(html: str, today: date) -> list[dict[str, str]]:
    parser = WikiTableParser()
    parser.feed(html)
    events: list[dict[str, str]] = []

    for table in parser.tables:
        if not table:
            continue
        headers = [value.casefold() for value in table[0]]
        required = {"event", "date", "venue", "city", "country"}
        positions = {
            name: next(
                (index for index, header in enumerate(headers) if name in header),
                None,
            )
            for name in required
        }
        if any(index is None for index in positions.values()):
            continue

        indexes = {name: int(index) for name, index in positions.items() if index is not None}
        last_index = max(indexes.values())
        for row in table[1:]:
            if len(row) <= last_index:
                continue
            event_date = parse_date(row[indexes["date"]])
            if event_date is None or date.fromisoformat(event_date) < today:
                continue
            title = row[indexes["event"]].strip()
            if not title:
                continue
            events.append(
                {
                    "title": title,
                    "date": event_date,
                    "venue": row[indexes["venue"]].strip(),
                    "city": row[indexes["city"]].strip(),
                    "country": row[indexes["country"]].strip(),
                }
            )
    return sorted(events, key=lambda event: (event["date"], event["title"]))


def fetch_page_html(page: str) -> str:
    query = urlencode(
        {
            "action": "parse",
            "page": page,
            "prop": "text",
            "format": "json",
            "formatversion": "2",
        }
    )
    request = Request(f"{API_URL}?{query}", headers={"User-Agent": USER_AGENT})
    with urlopen(request, timeout=30) as response:
        payload = json.load(response)
    return payload["parse"]["text"]


def write_review_file(events: list[dict[str, str]], output: Path, page: str) -> None:
    payload = {
        "source": f"https://en.wikipedia.org/wiki/{page}",
        "license": "CC BY-SA 4.0",
        "collectedAt": datetime.now(timezone.utc).isoformat(),
        "reviewRequired": True,
        "events": events,
    }
    output.parent.mkdir(parents=True, exist_ok=True)
    output.write_text(
        json.dumps(payload, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--page", default=DEFAULT_PAGE)
    parser.add_argument(
        "--output",
        type=Path,
        default=Path("review/pending-events.json"),
    )
    parser.add_argument("--today", type=date.fromisoformat, default=date.today())
    args = parser.parse_args()

    events = find_scheduled_events(fetch_page_html(args.page), args.today)
    write_review_file(events, args.output, args.page)
    print(f"{len(events)}개 예정 대회를 {args.output}에 저장했습니다.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
