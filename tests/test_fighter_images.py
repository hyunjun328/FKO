# 선수 사진 대상 추출과 생성된 출처 데이터의 무결성을 검증한다.
import json
import unittest
from pathlib import Path

from scripts.collect_fighter_images import (
    ALLOWED_LICENSE_PREFIXES,
    COMMONS_FILE_OVERRIDES,
    OUTPUT_DATA,
    OUTPUT_DIR,
    QUALITY_REJECTED_FIGHTERS,
    is_matching_file_name,
    is_matching_title,
    requested_fighters,
)


class FighterImageCollectorTest(unittest.TestCase):
    def test_rejects_unrelated_search_results(self) -> None:
        self.assertTrue(is_matching_title("Uros Medic", "Uroš Medić"))
        self.assertTrue(is_matching_title("Sean Brady", "Sean Brady (fighter)"))
        self.assertFalse(is_matching_title("Diego Lopes", "Brian Ortega"))
        self.assertFalse(is_matching_title("Johnny Walker", "Dominick Reyes"))

    def test_accepts_only_file_names_containing_every_fighter_token(self) -> None:
        self.assertTrue(
            is_matching_file_name(
                "Alexander Volkanovski",
                "File:Alexander Volkanovski at UFC 232.jpg",
            )
        )
        self.assertFalse(
            is_matching_file_name("Diego Lopes", "File:Brian Ortega UFC 306.jpg")
        )

    def test_extracts_every_requested_surface(self) -> None:
        targets = requested_fighters()

        self.assertGreaterEqual(len(targets), 223)
        self.assertIn("Uros Medic", targets)
        self.assertIn("Dooho Choi", targets)
        self.assertIn("Islam Makhachev", targets)
        self.assertIn("Conor McGregor", targets)
        self.assertIn("event-card", targets["Uros Medic"])
        self.assertIn("main-card", targets["Uros Medic"])
        self.assertIn("korean", targets["Dooho Choi"])
        self.assertIn("ranking", targets["Islam Makhachev"])
        self.assertIn("featured", targets["Conor McGregor"])
        self.assertIn("archive", targets["Anderson Silva"])
        self.assertEqual(
            set(COMMONS_FILE_OVERRIDES),
            {
                "Conor McGregor",
                "Khabib Nurmagomedov",
                "Georges St-Pierre",
                "Amanda Nunes",
            },
        )

    def test_generated_images_have_local_files_and_reuse_metadata(self) -> None:
        targets = requested_fighters()
        images = json.loads(OUTPUT_DATA.read_text(encoding="utf-8"))

        self.assertGreaterEqual(len(images), 70)
        self.assertEqual(set(images) & QUALITY_REJECTED_FIGHTERS, set())
        for name, image in images.items():
            with self.subTest(name=name):
                self.assertIn(name, targets)
                self.assertEqual(image["groups"], sorted(targets[name]))
                self.assertTrue(
                    image["license"].startswith(ALLOWED_LICENSE_PREFIXES)
                )
                self.assertTrue(image["sourceUrl"].startswith("https://"))
                self.assertTrue(image["licenseUrl"].startswith("https://"))
                self.assertTrue(
                    image["wikidataId"] is None
                    or image["wikidataId"].startswith("Q")
                )
                local_path = OUTPUT_DIR.parent / image["src"].lstrip("/")
                self.assertTrue(local_path.is_file())
                self.assertGreater(local_path.stat().st_size, 500)


if __name__ == "__main__":
    unittest.main()
