# UFC 공식 선수 프로필에서 전적과 신체 정보만 자동 수집한다.
from __future__ import annotations

from datetime import datetime, timezone
import json
from pathlib import Path
import re

import requests
from bs4 import BeautifulSoup


ROOT = Path(__file__).resolve().parents[1]
OUTPUT_FILE = ROOT / "app/data/official-profile-status.ts"
SOURCE_FILES = [ROOT / "app/data/fighters.ts", ROOT / "app/data/legend-profiles.ts"]
URL_PATTERN = re.compile(r"https://(?:www\.|kr\.)?ufc\.com/athlete/[a-z0-9-]+", re.I)


def inches_to_cm(value: str) -> int | None:
    match = re.search(r"(\d+(?:\.\d+)?)", value)
    return round(float(match.group(1)) * 2.54) if match else None


def profile_from_page(html: str, url: str) -> tuple[str, dict[str, object]] | None:
    soup = BeautifulSoup(html, "html.parser")
    name = " ".join((soup.select_one(".hero-profile__name") or soup.new_tag("span")).get_text(" ", strip=True).split())
    record_text = " ".join((soup.select_one(".hero-profile__division-body") or soup.new_tag("span")).get_text(" ", strip=True).split())
    record = re.search(r"(\d+)-(\d+)-(\d+)", record_text)
    if not name or not record:
        return None
    fields = {}
    for field in soup.select(".c-bio__field"):
        label = " ".join((field.select_one(".c-bio__label") or soup.new_tag("span")).get_text(" ", strip=True).split()).casefold()
        value = " ".join((field.select_one(".c-bio__text") or soup.new_tag("span")).get_text(" ", strip=True).split())
        fields[label] = value
    height = next((inches_to_cm(value) for label, value in fields.items() if "height" in label or "높이" in label), None)
    reach = next((inches_to_cm(value) for label, value in fields.items() if "reach" in label or "리치" in label), None)
    status = next((value for label, value in fields.items() if "status" in label or "상태" in label), "")
    return name, {"record": "-".join(record.groups()), "heightCm": height, "reachCm": reach, "status": status, "checkedAt": datetime.now(timezone.utc).date().isoformat(), "sourceUrl": url}


def previous_entries() -> dict[str, dict[str, object]]:
    if not OUTPUT_FILE.exists():
        return {}
    match = re.search(r"OFFICIAL_PROFILE_STATUS[^=]*=\s*(\{.*\});\s*$", OUTPUT_FILE.read_text(encoding="utf-8"), re.S)
    return json.loads(match.group(1)) if match else {}


def main() -> int:
    urls = sorted({url for source in SOURCE_FILES for url in URL_PATTERN.findall(source.read_text(encoding="utf-8"))})
    profiles = previous_entries()
    session = requests.Session()
    session.headers["User-Agent"] = "FightCalendarKorea/0.1"
    collected = 0
    for url in urls:
        try:
            response = session.get(url, timeout=40)
            response.raise_for_status()
            parsed = profile_from_page(response.text, url)
            if parsed:
                name, profile = parsed
                profiles[name] = {key: value for key, value in profile.items() if value not in (None, "")}
                collected += 1
        except requests.RequestException as error:
            print(f"Skipped {url}: {error}")
    if not collected:
        raise RuntimeError("No UFC athlete profiles were collected")
    OUTPUT_FILE.write_text(
        "// UFC 공식 선수 프로필에서 자동 수집한 전적과 신체 정보를 제공한다.\n"
        "export type OfficialProfileStatus = { record?: string; heightCm?: number; reachCm?: number; status?: string; checkedAt: string; sourceUrl: string };\n\n"
        f"export const OFFICIAL_PROFILE_STATUS: Record<string, OfficialProfileStatus> = {json.dumps(profiles, ensure_ascii=False, indent=2, sort_keys=True)};\n",
        encoding="utf-8",
    )
    print(f"Collected {collected}/{len(urls)} UFC athlete profiles.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
