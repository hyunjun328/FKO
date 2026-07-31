# 위키미디어 일정 수집기의 표 파싱과 날짜 필터를 검증하는 테스트
import unittest
from datetime import date

from scripts.collect_wikipedia import find_scheduled_events
from scripts.collect_ufc_results import find_completed_events


class CollectorTest(unittest.TestCase):
    def test_finds_only_upcoming_event_rows(self) -> None:
        html = """
        <table class="wikitable">
          <tr><th>Event</th><th>Date</th><th>Venue</th><th>City</th><th>Country</th></tr>
          <tr><td>Past UFC</td><td>July 1, 2026</td><td>Arena A</td><td>City A</td><td>Korea</td></tr>
          <tr><td>Future UFC</td><td>August 1, 2026</td><td>Arena B</td><td>City B</td><td>Japan[12]</td></tr>
        </table>
        """

        events = find_scheduled_events(html, date(2026, 7, 29))

        self.assertEqual(
            events,
            [
                {
                    "title": "Future UFC",
                    "date": "2026-08-01",
                    "venue": "Arena B",
                    "city": "City B",
                    "country": "Japan",
                }
            ],
        )

    def test_reads_completed_ufcstats_event_rows(self) -> None:
        html = '''
        <a href="http://ufcstats.com/event-details/abc"><span>UFC 300: Pereira vs. Hill</span><span>April 13, 2024</span></a>
        '''

        self.assertEqual(
            find_completed_events(html),
            [{
                "title": "UFC 300: Pereira vs. Hill",
                "date": "2024-04-13",
                "url": "http://ufcstats.com/event-details/abc",
            }],
        )


if __name__ == "__main__":
    unittest.main()
