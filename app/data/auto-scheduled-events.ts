// 직접 수집한 UFC 예정 대회 목록을 화면 일정에 보조 데이터로 제공한다.
export type AutoScheduledBout = { left: string; leftKo: string; right: string; rightKo: string; weight: string; section: "main" | "prelims" | "announced" };
export type AutoScheduledEvent = { id: string; title: string; date: string; sourceUrl: string; subtitle?: string; startUtc?: string; prelimsUtc?: string; venue?: string; city?: string; bouts?: AutoScheduledBout[] };

export const AUTO_SCHEDULED_EVENTS: AutoScheduledEvent[] = [
  {
    "id": "ufcstats-2026-12-05-adesanya-vs-magomedov",
    "title": "Adesanya vs Magomedov",
    "date": "2026-12-05",
    "sourceUrl": "https://www.ufc.com/event/ufc-fight-night-december-05-2026",
    "startUtc": "2026-12-05T18:00:00Z",
    "prelimsUtc": "2026-12-05T15:00:00Z",
    "venue": "The Venue Riyadh Saudi Arabia",
    "bouts": [
      {
        "left": "Israel Adesanya",
        "leftKo": "Israel Adesanya",
        "right": "Shara Magomedov",
        "rightKo": "Shara Magomedov",
        "weight": "Middleweight",
        "section": "main"
      },
      {
        "left": "Ian Machado Garry",
        "leftKo": "Ian Machado Garry",
        "right": "Yaroslav Amosov",
        "rightKo": "Yaroslav Amosov",
        "weight": "Welterweight",
        "section": "announced"
      },
      {
        "left": "Serghei Spivac",
        "leftKo": "Serghei Spivac",
        "right": "Mario Pinto",
        "rightKo": "Mario Pinto",
        "weight": "Heavyweight",
        "section": "announced"
      },
      {
        "left": "Levan Chokheli",
        "leftKo": "Levan Chokheli",
        "right": "Islam Dulatov",
        "rightKo": "Islam Dulatov",
        "weight": "Welterweight",
        "section": "announced"
      },
      {
        "left": "Mairon Santos",
        "leftKo": "Mairon Santos",
        "right": "Akbar Abdullaev",
        "rightKo": "Akbar Abdullaev",
        "weight": "Lightweight",
        "section": "announced"
      },
      {
        "left": "Magomed Tuchalov",
        "leftKo": "Magomed Tuchalov",
        "right": "Ion Cutelaba",
        "rightKo": "Ion Cutelaba",
        "weight": "Light Heavyweight",
        "section": "announced"
      }
    ]
  },
  {
    "id": "ufcstats-2026-12-13-oliveira-vs-lopes",
    "title": "Oliveira vs Lopes",
    "date": "2026-12-13",
    "sourceUrl": "https://www.ufc.com/event/ufc-335",
    "startUtc": "2026-12-13T02:00:00Z",
    "prelimsUtc": "2026-12-13T00:00:00Z",
    "venue": "T-Mobile Arena Las Vegas , NV United States",
    "bouts": [
      {
        "left": "Charles Oliveira",
        "leftKo": "Charles Oliveira",
        "right": "Diego Lopes",
        "rightKo": "Diego Lopes",
        "weight": "Lightweight",
        "section": "main"
      },
      {
        "left": "Alex Pereira",
        "leftKo": "Alex Pereira",
        "right": "Sergei Pavlovich",
        "rightKo": "Sergei Pavlovich",
        "weight": "Heavyweight",
        "section": "announced"
      },
      {
        "left": "Brandon Moreno",
        "leftKo": "Brandon Moreno",
        "right": "Charles Johnson",
        "rightKo": "Charles Johnson",
        "weight": "Flyweight",
        "section": "announced"
      },
      {
        "left": "Kyler Phillips",
        "leftKo": "Kyler Phillips",
        "right": "Ethyn Ewing",
        "rightKo": "Ethyn Ewing",
        "weight": "Bantamweight",
        "section": "announced"
      },
      {
        "left": "Damian Pinas",
        "leftKo": "Damian Pinas",
        "right": "Baisangur Susurkaev",
        "rightKo": "Baisangur Susurkaev",
        "weight": "Middleweight",
        "section": "announced"
      }
    ]
  },
  {
    "id": "ufcstats-2027-01-17-rodriguez-vs-garcia",
    "title": "Rodriguez vs Garcia",
    "date": "2027-01-17",
    "sourceUrl": "https://www.ufc.com/event/ufc-fight-night-january-16-2027",
    "startUtc": "2027-01-17T01:00:00Z",
    "prelimsUtc": "2027-01-16T22:00:00Z",
    "venue": "American Airlines Center Dallas , TX United States",
    "bouts": [
      {
        "left": "Yair Rodriguez",
        "leftKo": "Yair Rodriguez",
        "right": "Steve Garcia",
        "rightKo": "Steve Garcia",
        "weight": "Featherweight",
        "section": "main"
      },
      {
        "left": "Daniel Rodriguez",
        "leftKo": "Daniel Rodriguez",
        "right": "Roberto Soldić",
        "rightKo": "Roberto Soldić",
        "weight": "Welterweight",
        "section": "announced"
      },
      {
        "left": "Geoff Neal",
        "leftKo": "Geoff Neal",
        "right": "Chris Curtis",
        "rightKo": "Chris Curtis",
        "weight": "Welterweight",
        "section": "announced"
      },
      {
        "left": "Chidi Njokuani",
        "leftKo": "Chidi Njokuani",
        "right": "Ignacio Bahamondes",
        "rightKo": "Ignacio Bahamondes",
        "weight": "Welterweight",
        "section": "announced"
      },
      {
        "left": "Ryan Spann",
        "leftKo": "Ryan Spann",
        "right": "Louie Sutherland",
        "rightKo": "Louie Sutherland",
        "weight": "Heavyweight",
        "section": "announced"
      },
      {
        "left": "Kennedy Nzechukwu",
        "leftKo": "Kennedy Nzechukwu",
        "right": "Elisha Ellison",
        "rightKo": "Elisha Ellison",
        "weight": "Heavyweight",
        "section": "announced"
      },
      {
        "left": "Gilbert Urbina",
        "leftKo": "Gilbert Urbina",
        "right": "Robert Valentin",
        "rightKo": "Robert Valentin",
        "weight": "Middleweight",
        "section": "announced"
      },
      {
        "left": "Alden Coria",
        "leftKo": "Alden Coria",
        "right": "Michael Aljarouj",
        "rightKo": "Michael Aljarouj",
        "weight": "Flyweight",
        "section": "announced"
      },
      {
        "left": "Diego Ferreira",
        "leftKo": "Diego Ferreira",
        "right": "MarQuel Mederos",
        "rightKo": "MarQuel Mederos",
        "weight": "Lightweight",
        "section": "announced"
      },
      {
        "left": "Magomed Zaynukov",
        "leftKo": "Magomed Zaynukov",
        "right": "Piero Guaylupo",
        "rightKo": "Piero Guaylupo",
        "weight": "Lightweight",
        "section": "announced"
      },
      {
        "left": "John Garza",
        "leftKo": "John Garza",
        "right": "Toshiomi Kazama",
        "rightKo": "Toshiomi Kazama",
        "weight": "Bantamweight",
        "section": "announced"
      },
      {
        "left": "Steven Asplund",
        "leftKo": "Steven Asplund",
        "right": "Gokhan Saricam",
        "rightKo": "Gokhan Saricam",
        "weight": "Heavyweight",
        "section": "announced"
      },
      {
        "left": "Sam Hughes",
        "leftKo": "Sam Hughes",
        "right": "Karolina Kowalkiewicz",
        "rightKo": "Karolina Kowalkiewicz",
        "weight": "Women's Strawweight",
        "section": "announced"
      }
    ]
  },
  {
    "id": "ufcstats-2027-01-24-bonfim-vs-brady",
    "title": "Bonfim vs Brady",
    "date": "2027-01-24",
    "sourceUrl": "https://www.ufc.com/event/ufc-fight-night-january-23-2027",
    "startUtc": "2027-01-24T01:00:00Z",
    "prelimsUtc": "2027-01-23T22:00:00Z",
    "venue": "Meta APEX Las Vegas , NV United States",
    "bouts": [
      {
        "left": "Gabriel Bonfim",
        "leftKo": "Gabriel Bonfim",
        "right": "Sean Brady",
        "rightKo": "Sean Brady",
        "weight": "Welterweight",
        "section": "main"
      }
    ]
  },
  {
    "id": "ufcstats-2027-01-31-van-vs-kape",
    "title": "Van vs Kape",
    "date": "2027-01-31",
    "sourceUrl": "https://www.ufc.com/event/ufc-336",
    "startUtc": "2027-01-31T02:00:00Z",
    "prelimsUtc": "2027-01-31T00:00:00Z",
    "venue": "Scotiabank Arena Toronto ON Canada",
    "bouts": [
      {
        "left": "Joshua Van",
        "leftKo": "Joshua Van",
        "right": "Manel Kape",
        "rightKo": "Manel Kape",
        "weight": "Flyweight Title",
        "section": "main"
      },
      {
        "left": "Carlos Prates",
        "leftKo": "Carlos Prates",
        "right": "Michael Morales",
        "rightKo": "Michael Morales",
        "weight": "Welterweight Interim Title",
        "section": "announced"
      },
      {
        "left": "Lance Gibson Jr.",
        "leftKo": "Lance Gibson Jr.",
        "right": "Michael Johnson",
        "rightKo": "Michael Johnson",
        "weight": "Lightweight",
        "section": "announced"
      },
      {
        "left": "Serhiy Sidey",
        "leftKo": "Serhiy Sidey",
        "right": "Louis Lee Scott",
        "rightKo": "Louis Lee Scott",
        "weight": "Bantamweight",
        "section": "announced"
      },
      {
        "left": "Cam Nelson",
        "leftKo": "Cam Nelson",
        "right": "Sean Clancy Jr.",
        "rightKo": "Sean Clancy Jr.",
        "weight": "Welterweight",
        "section": "announced"
      }
    ]
  },
  {
    "id": "ufcstats-2027-02-06-salkilld-vs-saint-denis",
    "title": "Salkilld vs Saint Denis",
    "date": "2027-02-06",
    "sourceUrl": "https://www.ufc.com/event/ufc-fight-night-february-06-2027",
    "startUtc": "2027-02-06T22:00:00Z",
    "prelimsUtc": "2027-02-06T20:00:00Z",
    "venue": "Afterpay Arena Sydney Olympic Park NSW Australia",
    "bouts": [
      {
        "left": "Quillan Salkilld",
        "leftKo": "Quillan Salkilld",
        "right": "Benoît Saint Denis",
        "rightKo": "Benoît Saint Denis",
        "weight": "Lightweight",
        "section": "main"
      },
      {
        "left": "Bogdan Guskov",
        "leftKo": "Bogdan Guskov",
        "right": "Robert Whittaker",
        "rightKo": "Robert Whittaker",
        "weight": "Light Heavyweight",
        "section": "announced"
      },
      {
        "left": "Jonathan Micallef",
        "leftKo": "Jonathan Micallef",
        "right": "Sam Patterson",
        "rightKo": "Sam Patterson",
        "weight": "Welterweight",
        "section": "announced"
      },
      {
        "left": "Marwan Rahiki",
        "leftKo": "Marwan Rahiki",
        "right": "JooSang Yoo",
        "rightKo": "JooSang Yoo",
        "weight": "Featherweight",
        "section": "announced"
      },
      {
        "left": "Kaan Ofli",
        "leftKo": "Kaan Ofli",
        "right": "Joanderson Brito",
        "rightKo": "Joanderson Brito",
        "weight": "Featherweight",
        "section": "announced"
      }
    ]
  },
  {
    "id": "ufcstats-2027-02-13-pyfer-vs-nickal",
    "title": "Pyfer vs Nickal",
    "date": "2027-02-13",
    "sourceUrl": "https://www.ufc.com/event/ufc-fight-night-february-13-2027",
    "startUtc": "2027-02-13T22:00:00Z",
    "prelimsUtc": "2027-02-13T20:00:00Z",
    "venue": "Rocket Arena Cleveland , OH United States",
    "bouts": [
      {
        "left": "Joe Pyfer",
        "leftKo": "Joe Pyfer",
        "right": "Bo Nickal",
        "rightKo": "Bo Nickal",
        "weight": "Middleweight",
        "section": "main"
      }
    ]
  }
];
