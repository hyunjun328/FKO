# UFC 공식 랭킹 페이지를 읽어 체급별과 P4P 순위 스냅샷을 생성한다.
from __future__ import annotations

from datetime import datetime, timezone
import json
from pathlib import Path

import requests
from bs4 import BeautifulSoup


URL = "https://www.ufc.com/rankings"
OUTPUT_FILE = Path(__file__).resolve().parents[1] / "app/data/official-ranking-snapshot.ts"
DIVISION_IDS = {
    "flyweight": "flyweight", "플라이급": "flyweight",
    "bantamweight": "bantamweight", "밴텀급": "bantamweight",
    "featherweight": "featherweight", "페더급": "featherweight",
    "lightweight": "lightweight", "라이트급": "lightweight",
    "welterweight": "welterweight", "웰터급": "welterweight",
    "middleweight": "middleweight", "미들급": "middleweight",
    "light heavyweight": "light-heavyweight", "라이트헤비급": "light-heavyweight",
    "heavyweight": "heavyweight", "헤비급": "heavyweight",
    "women's strawweight": "womens-strawweight", "여성 스트로급": "womens-strawweight",
    "women's flyweight": "womens-flyweight", "여성 플라이급": "womens-flyweight",
    "women's bantamweight": "womens-bantamweight", "여성 밴텀급": "womens-bantamweight",
}


def text(node) -> str:
    return " ".join(node.get_text(" ", strip=True).split()) if node else ""


def names_in(group) -> list[str]:
    names: list[str] = []
    for row in group.select("tbody tr"):
        name = text(row.select_one(".views-field-title a"))
        if name and name not in names:
            names.append(name)
    return names


def main() -> int:
    response = requests.get(URL, headers={"User-Agent": "FightCalendarKorea/0.1"}, timeout=45)
    response.raise_for_status()
    soup = BeautifulSoup(response.text, "html.parser")
    divisions: dict[str, dict[str, object]] = {}
    mens_p4p: list[str] = []
    womens_p4p: list[str] = []
    for group in soup.select(".view-grouping"):
        heading = text(group.select_one(".view-grouping-header")).casefold()
        entries = names_in(group)
        champion = text(group.select_one(".rankings--athlete--champion h5 a, .rankings--athlete--champion h5"))
        if "pound-for-pound" in heading or "파운드 포 파운드" in heading:
            if "women" in heading or "여성" in heading:
                womens_p4p = entries
            else:
                mens_p4p = entries
            continue
        division_id = next(
            (DIVISION_IDS[key] for key in sorted(DIVISION_IDS, key=len, reverse=True) if key in heading),
            None,
        )
        if division_id and entries:
            divisions[division_id] = {"champion": champion, "entries": entries}
    if len(divisions) < 8 or not mens_p4p or not womens_p4p:
        raise RuntimeError("UFC rankings page did not contain enough ranking groups")
    payload = {
        "checkedAt": datetime.now(timezone.utc).date().isoformat(),
        "divisions": divisions,
        "mensP4p": mens_p4p,
        "womensP4p": womens_p4p,
    }
    OUTPUT_FILE.write_text(
        "// UFC 공식 랭킹 페이지에서 자동 수집한 체급별·P4P 스냅샷을 제공한다.\n"
        "export type OfficialRankingSnapshot = { checkedAt: string; divisions: Record<string, { champion?: string; entries: string[] }>; mensP4p: string[]; womensP4p: string[] };\n\n"
        f"export const OFFICIAL_RANKING_SNAPSHOT: OfficialRankingSnapshot = {json.dumps(payload, ensure_ascii=False, indent=2)};\n",
        encoding="utf-8",
    )
    print(f"Collected {len(divisions)} UFC divisions and {len(mens_p4p) + len(womens_p4p)} P4P entries.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
