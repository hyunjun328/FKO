# UFC 공식 선수 프로필에서 전적과 신체 정보만 자동 수집한다.
from __future__ import annotations

from datetime import datetime, timezone
from concurrent.futures import ThreadPoolExecutor, as_completed
import json
from pathlib import Path
import re

import requests
from bs4 import BeautifulSoup


ROOT = Path(__file__).resolve().parents[1]
OUTPUT_FILE = ROOT / "app/data/official-profile-status.ts"
SOURCE_FILES = [
    ROOT / "app/data/fighters.ts",
    ROOT / "app/data/legend-profiles.ts",
    ROOT / "app/data/archive.ts",
]
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
    metrics: dict[str, int] = {}
    for stat in soup.select(".hero-profile__stat"):
        label = " ".join((stat.select_one(".hero-profile__stat-text") or soup.new_tag("span")).get_text(" ", strip=True).split()).casefold()
        value = " ".join((stat.select_one(".hero-profile__stat-numb") or soup.new_tag("span")).get_text(" ", strip=True).split())
        if not value.isdigit():
            continue
        if "knockout" in label or "녹아웃" in label:
            metrics["knockoutWins"] = int(value)
        elif "submission" in label or "서브미션" in label:
            metrics["submissionWins"] = int(value)
        elif "first round" in label or "1 라운드" in label:
            metrics["firstRoundFinishes"] = int(value)
    division = " ".join((soup.select_one(".hero-profile__division-title") or soup.new_tag("span")).get_text(" ", strip=True).split())
    return name, {
        "record": "-".join(record.groups()),
        "heightCm": height,
        "reachCm": reach,
        "division": division,
        "status": status,
        "checkedAt": datetime.now(timezone.utc).date().isoformat(),
        "sourceUrl": url,
        **metrics,
    }


def fetch_profile(url: str) -> tuple[str, dict[str, object]] | None:
    response = requests.get(url, headers={"User-Agent": "FightCalendarKorea/0.1"}, timeout=40)
    response.raise_for_status()
    return profile_from_page(response.text, url)


def previous_entries() -> dict[str, dict[str, object]]:
    if not OUTPUT_FILE.exists():
        return {}
    match = re.search(r"OFFICIAL_PROFILE_STATUS[^=]*=\s*(\{.*\});\s*$", OUTPUT_FILE.read_text(encoding="utf-8"), re.S)
    return json.loads(match.group(1)) if match else {}


def main() -> int:
    urls = sorted({url for source in SOURCE_FILES for url in URL_PATTERN.findall(source.read_text(encoding="utf-8"))})
    profiles = previous_entries()
    collected = 0
    with ThreadPoolExecutor(max_workers=4) as executor:
        futures = {executor.submit(fetch_profile, url): url for url in urls}
        for future in as_completed(futures):
            url = futures[future]
            try:
                parsed = future.result()
                if parsed:
                    name, profile = parsed
                    profiles[name] = {key: value for key, value in profile.items() if value not in (None, "")}
                    collected += 1
            except requests.RequestException as error:
                print(f"Skipped {url}: {error}")
            except Exception as error:
                print(f"Skipped {url}: {error}")
    if not collected:
        raise RuntimeError("No UFC athlete profiles were collected")
    OUTPUT_FILE.write_text(
        "// UFC 공식 선수 프로필에서 자동 수집한 전적과 신체 정보를 제공한다.\n"
        "export type OfficialProfileStatus = { record?: string; heightCm?: number; reachCm?: number; division?: string; status?: string; knockoutWins?: number; submissionWins?: number; firstRoundFinishes?: number; checkedAt: string; sourceUrl: string };\n\n"
        f"export const OFFICIAL_PROFILE_STATUS: Record<string, OfficialProfileStatus> = {json.dumps(profiles, ensure_ascii=False, indent=2, sort_keys=True)};\n",
        encoding="utf-8",
    )
    print(f"Collected {collected}/{len(urls)} UFC athlete profiles.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
