# Fight Matrix 공개 순위에서 남성 8체급 1~50위 스냅샷을 생성한다.
from __future__ import annotations

import concurrent.futures
import html
import re
from datetime import UTC, datetime
from pathlib import Path

import requests
from bs4 import BeautifulSoup


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "app" / "data" / "fightmatrix-rankings.ts"
BASE_URL = "https://www.fightmatrix.com/mma-ranks"
DIVISIONS = {
    "flyweight": "flyweight",
    "bantamweight": "bantamweight",
    "featherweight": "featherweight",
    "lightweight": "lightweight",
    "welterweight": "welterweight",
    "middleweight": "middleweight",
    "light-heavyweight": "light-heavyweight",
    "heavyweight": "heavyweight-265-lbs",
}
HEADERS = {"User-Agent": "FKO-Ranking-Collector/1.0 (https://github.com/hyunjun328/FKO)"}


def fetch_page(division_id: str, slug: str, page: int) -> tuple[str, list[dict[str, object]]]:
    suffix = "" if page == 1 else f"?PageNum={page}"
    url = f"{BASE_URL}/{slug}/{suffix}"
    response = requests.get(url, headers=HEADERS, timeout=90)
    response.raise_for_status()
    soup = BeautifulSoup(response.text, "html.parser")
    entries: list[dict[str, object]] = []
    for row in soup.select("tr.rankRowX"):
        cells = row.find_all("td", recursive=False)
        if not cells:
            continue
        rank_text = cells[0].get_text(" ", strip=True)
        match = re.match(r"(\d+)", rank_text)
        link = row.select_one("a.sherLink strong")
        record = row.select_one("a.sherLink").find_next("td") if row.select_one("a.sherLink") else None
        if not match or not link or not record:
            continue
        entries.append(
            {
                "rank": int(match.group(1)),
                "name": html.unescape(link.get_text(" ", strip=True)),
                "record": record.get_text(" ", strip=True),
                "sourceUrl": url,
            }
        )
    return division_id, entries


def ts_string(value: str) -> str:
    return value.replace("\\", "\\\\").replace('"', '\\"')


def main() -> None:
    jobs = [(division_id, slug, page) for division_id, slug in DIVISIONS.items() for page in (1, 2)]
    collected: dict[str, list[dict[str, object]]] = {division_id: [] for division_id in DIVISIONS}
    with concurrent.futures.ThreadPoolExecutor(max_workers=4) as executor:
        for division_id, entries in executor.map(lambda job: fetch_page(*job), jobs):
            collected[division_id].extend(entries)
    for entries in collected.values():
        entries.sort(key=lambda entry: int(entry["rank"]))
        if len(entries) != 50 or [entry["rank"] for entry in entries] != list(range(1, 51)):
            raise RuntimeError("Fight Matrix 1~50위 데이터를 완전하게 수집하지 못했습니다.")
    checked_at = datetime.now(UTC).date().isoformat()
    lines = [
        "// Fight Matrix 공개 랭킹의 남성 8체급 1~50위 스냅샷을 제공한다.",
        "export type FightMatrixRankingEntry = {",
        "  rank: number;",
        "  name: string;",
        "  record: string;",
        "  sourceUrl: string;",
        "};",
        "",
        f'export const FIGHT_MATRIX_RANKING_CHECKED_AT = "{checked_at}";',
        "",
        "export const FIGHT_MATRIX_RANKINGS: Record<string, FightMatrixRankingEntry[]> = {",
    ]
    for division_id, entries in collected.items():
        lines.append(f'  "{division_id}": [')
        for entry in entries:
            lines.append(
                '    { rank: %d, name: "%s", record: "%s", sourceUrl: "%s" },'
                % (entry["rank"], ts_string(str(entry["name"])), ts_string(str(entry["record"])), entry["sourceUrl"])
            )
        lines.append("  ],")
    lines.extend(["};", ""])
    OUTPUT.write_text("\n".join(lines), encoding="utf-8")
    print(f"Saved {sum(len(entries) for entries in collected.values())} entries to {OUTPUT}")


if __name__ == "__main__":
    main()
