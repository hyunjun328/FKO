# 위키미디어 일정 수집기의 표 파싱과 날짜 필터를 검증하는 테스트
import unittest
from datetime import date, datetime, timezone

from scripts.collect_wikipedia import find_scheduled_events
from scripts.collect_ufc_results import (
    find_bout_results,
    find_completed_events,
    find_sherdog_bout_results,
    match_sherdog_event,
)
from scripts.collect_ufc_schedule import find_official_event_bouts, find_official_upcoming_events
from scripts.collect_ufc_schedule import build_payload


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

    def test_reads_upcoming_events_from_official_ufc_cards(self) -> None:
        html = '''
        <article class="c-card-event--result">
          <h3 class="c-card-event--result__headline">Gamrot vs Salkilld</h3>
          <div data-main-card-timestamp="1786233600"></div>
          <a href="/event/ufc-fight-night-august-08-2026">Event details</a>
        </article>
        <article class="c-card-event--result">
          <h3 class="c-card-event--result__headline">Past card</h3>
          <div data-main-card-timestamp="1784995200"></div>
          <a href="/event/past-card#1321">Summary</a>
        </article>
        '''

        self.assertEqual(
            find_official_upcoming_events(html, datetime(2026, 8, 1, tzinfo=timezone.utc)),
            [{
                "title": "Gamrot vs Salkilld",
                "date": "2026-08-09",
                "url": "https://www.ufc.com/event/ufc-fight-night-august-08-2026",
            }],
        )

    def test_reads_bouts_from_official_ufc_event_cards(self) -> None:
        html = '''
        <div class="c-listing-fight">
          <div class="c-listing-fight__class-text">Lightweight Bout</div>
          <div class="c-listing-fight__corner-name--red">Mateusz Gamrot</div>
          <div class="c-listing-fight__corner-name--blue">Quillan Salkilld</div>
        </div>
        <div class="c-listing-fight">
          <div class="c-listing-fight__class-text">Light Heavyweight Bout</div>
          <div class="c-listing-fight__corner-name--red">Diyar Nurgozhay</div>
          <div class="c-listing-fight__corner-name--blue">Bruno Lopes</div>
        </div>
        '''

        self.assertEqual(
            find_official_event_bouts(html),
            [
                {
                    "left": "Mateusz Gamrot", "leftKo": "Mateusz Gamrot",
                    "right": "Quillan Salkilld", "rightKo": "Quillan Salkilld",
                    "weight": "Lightweight", "section": "main",
                },
                {
                    "left": "Diyar Nurgozhay", "leftKo": "Diyar Nurgozhay",
                    "right": "Bruno Lopes", "rightKo": "Bruno Lopes",
                    "weight": "Light Heavyweight", "section": "announced",
                },
            ],
        )

    def test_keeps_official_events_when_ufcstats_has_no_upcoming_rows(self) -> None:
        payload = build_payload([], {
            "2026-08-08": {
                "title": "UFC Fight Night: Gamrot vs Salkilld",
                "sourceUrl": "https://www.ufc.com/event/ufc-fight-night-august-08-2026",
                "startUtc": "2026-08-08T21:00:00Z",
            },
        })

        self.assertEqual(payload, [{
            "id": "ufcstats-2026-08-08-ufc-fight-night-gamrot-vs-salkilld",
            "title": "UFC Fight Night: Gamrot vs Salkilld",
            "date": "2026-08-08",
            "sourceUrl": "https://www.ufc.com/event/ufc-fight-night-august-08-2026",
            "startUtc": "2026-08-08T21:00:00Z",
        }])

    def test_reads_result_fields_from_their_table_cells(self) -> None:
        html = '''
        <tr class="b-fight-details__table-row">
          <td><i class="b-fight-details__person-status">W</i><i class="b-fight-details__person-status">L</i></td>
          <td><a>Winner Name</a><a>Loser Name</a></td><td>0</td><td>0</td><td>0</td><td>0</td><td>Lightweight</td>
          <td>KO/TKO</td><td>3</td><td>2:17</td>
        </tr>
        '''

        self.assertEqual(
            find_bout_results(html),
            [{"winner": "Winner Name", "loser": "Loser Name", "method": "KO/TKO", "round": 3, "time": "2:17"}],
        )

    def test_reads_sherdog_results_when_ufcstats_is_unavailable(self) -> None:
        html = '''
        <div itemprop="subEvent">
          <div itemprop="performer"><span itemprop="name">Quillan Salkilld</span><span class="final_result win">win</span></div>
          <div itemprop="performer"><span itemprop="name">Mateusz Gamrot</span><span class="final_result loss">loss</span></div>
          <table class="fight_card_resume"><tr>
            <td><em>Method</em><br/>Submission (Rear-Naked Choke)</td>
            <td><em>Round</em><br/>1</td><td><em>Time</em><br/>4:25</td>
          </tr></table>
        </div>
        '''
        event = {"subtitle": "Gamrot vs Salkilld"}
        candidate = match_sherdog_event(event, [{
            "title": "UFC Fight Night 284 - Gamrot vs. Salkilld",
            "url": "https://www.sherdog.com/events/example",
        }])

        self.assertEqual(candidate["url"], "https://www.sherdog.com/events/example")
        self.assertEqual(find_sherdog_bout_results(html), [{
            "winner": "Quillan Salkilld", "loser": "Mateusz Gamrot",
            "method": "Submission (Rear-Naked Choke)", "round": 1, "time": "4:25",
        }])


if __name__ == "__main__":
    unittest.main()
