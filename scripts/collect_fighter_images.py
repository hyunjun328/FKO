# 메인카드·한국 선수·랭킹 선수의 Commons 사진과 라이선스를 수집한다.
from __future__ import annotations

import argparse
from difflib import SequenceMatcher
import html
import io
import json
import re
import sys
import time
import unicodedata
from pathlib import Path

import requests
from PIL import Image, ImageOps


ROOT = Path(__file__).resolve().parents[1]
OUTPUT_DIR = ROOT / "public" / "fighters"
OUTPUT_DATA = ROOT / "app" / "data" / "fighter-images.json"
WIKIPEDIA_API = "https://en.wikipedia.org/w/api.php"
WIKIDATA_API = "https://www.wikidata.org/w/api.php"
COMMONS_API = "https://commons.wikimedia.org/w/api.php"
USER_AGENT = "FKO-Fighter-Image-Collector/1.0 (https://github.com/hyunjun328/FKO)"

PAGE_ALIASES = {
    "Uros Medic": "Uroš Medić",
    "JunYong Park": "Park Jun-yong",
    "Dooho Choi": "Choi Doo-ho",
    "SeokHyeon Ko": "Ko Seok-hyun",
    "HyunSung Park": "Park Hyun-sung",
    "JeongYeong Lee": "Lee Jeong-yeong",
    "JooSang Yoo": "Yoo Joo-sang",
    "Chan Sung Jung": "The Korean Zombie",
    "Dong Hyun Kim": "Dong Hyun Kim (fighter)",
    "Kyung Ho Kang": "Kang Kyung-ho",
    "Da Woon Jung": "Jung Da-un",
    "Hyun Gyu Lim": "Lim Hyun-gyu",
    "Dongi Yang": "Yang Dong-i",
    "Lone’er Kavanagh": "Lone'er Kavanagh",
    "Benoît Saint Denis": "Benoît Saint-Denis",
}

ALLOWED_LICENSE_PREFIXES = (
    "CC BY",
    "CC0",
    "Public domain",
    "PDM",
)

QUALITY_REJECTED_FIGHTERS = {
    "Alexandre Pantoja",
    "Angela Hill",
    "Beneil Dariush",
    "Brendan Allen",
    "Caio Borralho",
    "Carlos Prates",
    "Curtis Blaydes",
    "Dan Hooker",
    "Deiveson Figueiredo",
    "Dustin Jacoby",
    "Edgar Chairez",
    "Gabriel Bonfim",
    "Gillian Robertson",
    "Josh Hokit",
    "Mackenzie Dern",
    "Manon Fiorot",
    "Norma Dumont",
    "Nursulton Ruziboev",
    "Rafael Fiziev",
    "Sean Brady",
    "Zhang Weili",
}


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser()
    parser.add_argument("--limit", type=int, default=0)
    return parser.parse_args()


def requested_fighters() -> dict[str, set[str]]:
    rankings = (ROOT / "app" / "data" / "rankings.ts").read_text(encoding="utf-8")
    events = (ROOT / "app" / "data" / "events.ts").read_text(encoding="utf-8")
    fighters = (ROOT / "app" / "data" / "fighters.ts").read_text(encoding="utf-8")

    targets: dict[str, set[str]] = {}

    def add(name: str, group: str) -> None:
        targets.setdefault(name, set()).add(group)

    for name in re.findall(r'champion: "([^"]+)"', rankings):
        add(name, "ranking")
    for block in re.findall(
        r"(?:media|meta): ranked\((.*?)\n    \),",
        rankings,
        flags=re.DOTALL,
    ):
        for name in re.findall(r'"([^"]+)"', block):
            add(name, "ranking")

    for line in events.splitlines():
        if 'section: "main"' not in line:
            continue
        match = re.search(r'left: "([^"]+)".*right: "([^"]+)"', line)
        if match:
            add(match.group(1), "main-card")
            add(match.group(2), "main-card")

    korean_lists = fighters.split("export const FIGHTER_PROFILES", 1)[0]
    for name in re.findall(r'name: "([^"]+)"', korean_lists):
        add(name, "korean")

    return dict(sorted(targets.items()))


def api_json(
    session: requests.Session,
    url: str,
    params: dict[str, str | int],
) -> dict:
    for attempt in range(3):
        response = session.get(url, params=params, timeout=30)
        if response.status_code == 429:
            time.sleep(2**attempt)
            continue
        response.raise_for_status()
        return response.json()
    raise RuntimeError(f"API rate limit: {url}")


def wikipedia_item(
    session: requests.Session,
    fighter_name: str,
) -> str | None:
    title = PAGE_ALIASES.get(fighter_name, fighter_name)
    data = api_json(
        session,
        WIKIPEDIA_API,
        {
            "action": "query",
            "format": "json",
            "formatversion": 2,
            "redirects": 1,
            "prop": "pageprops|description",
            "titles": title,
        },
    )
    pages = data.get("query", {}).get("pages", [])
    if pages and not pages[0].get("missing"):
        description = pages[0].get("description", "").lower()
        if is_fighter_description(description):
            return pages[0].get("pageprops", {}).get("wikibase_item")

    search = api_json(
        session,
        WIKIPEDIA_API,
        {
            "action": "query",
            "format": "json",
            "formatversion": 2,
            "generator": "search",
            "gsrsearch": f'"{fighter_name}" mixed martial artist',
            "gsrlimit": 3,
            "prop": "pageprops|description",
        },
    )
    pages = sorted(
        search.get("query", {}).get("pages", []),
        key=lambda page: page.get("index", 999),
    )
    for page in pages:
        description = page.get("description", "").lower()
        if is_fighter_description(description) and is_matching_title(
            fighter_name,
            page.get("title", ""),
        ):
            return page.get("pageprops", {}).get("wikibase_item")
    return None


def is_fighter_description(description: str) -> bool:
    return any(
        term in description
        for term in ("mixed martial", "martial artist", "ufc fighter")
    )


def normalize_title(value: str) -> str:
    normalized = unicodedata.normalize("NFKD", value)
    ascii_value = normalized.encode("ascii", "ignore").decode("ascii").lower()
    return re.sub(r"[^a-z0-9]+", " ", ascii_value).strip()


def is_matching_title(fighter_name: str, page_title: str) -> bool:
    expected = normalize_title(PAGE_ALIASES.get(fighter_name, fighter_name))
    candidate = normalize_title(re.sub(r"\s*\([^)]*\)\s*$", "", page_title))
    return SequenceMatcher(None, expected, candidate).ratio() >= 0.82


def commons_file(session: requests.Session, qid: str) -> dict | None:
    entity_data = api_json(
        session,
        WIKIDATA_API,
        {
            "action": "wbgetentities",
            "format": "json",
            "ids": qid,
            "props": "claims",
        },
    )
    claims = entity_data.get("entities", {}).get(qid, {}).get("claims", {})
    image_claims = claims.get("P18", [])
    if not image_claims:
        return None
    filename = (
        image_claims[0]
        .get("mainsnak", {})
        .get("datavalue", {})
        .get("value")
    )
    if not filename:
        return None

    file_data = api_json(
        session,
        COMMONS_API,
        {
            "action": "query",
            "format": "json",
            "formatversion": 2,
            "prop": "imageinfo",
            "titles": f"File:{filename}",
            "iiprop": "url|extmetadata",
            "iiurlwidth": 360,
        },
    )
    pages = file_data.get("query", {}).get("pages", [])
    if not pages or "imageinfo" not in pages[0]:
        return None

    info = pages[0]["imageinfo"][0]
    metadata = info.get("extmetadata", {})
    license_name = metadata_value(metadata, "LicenseShortName")
    if not license_name.startswith(ALLOWED_LICENSE_PREFIXES):
        return None

    return {
        "downloadUrl": info.get("thumburl") or info.get("url"),
        "sourceUrl": info.get("descriptionurl"),
        "author": clean_credit(
            metadata_value(metadata, "Artist")
            or metadata_value(metadata, "Credit")
            or "Wikimedia Commons contributor"
        ),
        "license": license_name,
        "licenseUrl": normalize_url(
            metadata_value(metadata, "LicenseUrl") or info.get("descriptionurl")
        ),
        "file": filename,
    }


def metadata_value(metadata: dict, key: str) -> str:
    return str(metadata.get(key, {}).get("value", "")).strip()


def clean_credit(value: str) -> str:
    text = re.sub(r"<[^>]+>", " ", html.unescape(value))
    text = re.sub(r"\s+", " ", text).strip()
    return text[:240]


def normalize_url(value: str) -> str:
    return re.sub(r"^http://", "https://", value)


def slugify(name: str) -> str:
    normalized = unicodedata.normalize("NFKD", name)
    ascii_name = normalized.encode("ascii", "ignore").decode("ascii").lower()
    return re.sub(r"[^a-z0-9]+", "-", ascii_name).strip("-")


def save_webp(session: requests.Session, url: str, destination: Path) -> None:
    response = session.get(url, timeout=45)
    response.raise_for_status()
    with Image.open(io.BytesIO(response.content)) as source:
        image = ImageOps.exif_transpose(source).convert("RGB")
        image.thumbnail((360, 360), Image.Resampling.LANCZOS)
        image.save(destination, "WEBP", quality=78, method=6)


def main() -> None:
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8")
        sys.stderr.reconfigure(encoding="utf-8")

    args = parse_args()
    fighters = requested_fighters()
    if args.limit:
        fighters = dict(list(fighters.items())[: args.limit])

    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    if not args.limit:
        for old_image in OUTPUT_DIR.glob("*.webp"):
            old_image.unlink()
    session = requests.Session()
    session.headers.update({"User-Agent": USER_AGENT})
    result: dict[str, dict] = {}
    misses: list[str] = []
    quality_rejected: list[str] = []

    for index, (name, groups) in enumerate(fighters.items(), start=1):
        try:
            qid = wikipedia_item(session, name)
            image = commons_file(session, qid) if qid else None
            if not image or not image["downloadUrl"]:
                misses.append(name)
                print(f"[{index}/{len(fighters)}] miss {name}", flush=True)
                continue
            if name in QUALITY_REJECTED_FIGHTERS:
                quality_rejected.append(name)
                print(f"[{index}/{len(fighters)}] reject {name}", flush=True)
                continue

            filename = f"{slugify(name)}.webp"
            destination = OUTPUT_DIR / filename
            save_webp(session, image.pop("downloadUrl"), destination)
            result[name] = {
                "src": f"/fighters/{filename}",
                "groups": sorted(groups),
                "wikidataId": qid,
                **image,
            }
            print(f"[{index}/{len(fighters)}] ok   {name}", flush=True)
        except (requests.RequestException, OSError, RuntimeError, ValueError) as exc:
            misses.append(name)
            print(f"[{index}/{len(fighters)}] error {name}: {exc}", flush=True)
        time.sleep(0.03)

    OUTPUT_DATA.write_text(
        json.dumps(result, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )
    report = {
        "requested": len(fighters),
        "collected": len(result),
        "missing": misses,
        "qualityRejected": quality_rejected,
    }
    (OUTPUT_DIR / "collection-report.json").write_text(
        json.dumps(report, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )
    print(
        f"Collected {len(result)}/{len(fighters)} photos; "
        f"{len(misses) + len(quality_rejected)} fallbacks.",
        flush=True,
    )


if __name__ == "__main__":
    main()
