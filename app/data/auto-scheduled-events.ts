// 직접 수집한 UFC 예정 대회 목록을 화면 일정에 보조 데이터로 제공한다.
export type AutoScheduledBout = { left: string; leftKo: string; right: string; rightKo: string; weight: string; section: "main" | "prelims" | "announced" };
export type AutoScheduledEvent = { id: string; title: string; date: string; sourceUrl: string; subtitle?: string; startUtc?: string; prelimsUtc?: string; venue?: string; city?: string; bouts?: AutoScheduledBout[] };

export const AUTO_SCHEDULED_EVENTS: AutoScheduledEvent[] = [
  {
    "id": "ufcstats-2026-10-24-volkanovski-vs-evloev",
    "title": "Volkanovski vs Evloev",
    "date": "2026-10-24",
    "sourceUrl": "https://www.ufc.com/event/ufc-333",
    "startUtc": "2026-10-24T18:00:00Z",
    "prelimsUtc": "2026-10-24T16:00:00Z",
    "venue": "Etihad Arena Abu Dhabi United Arab Emirates",
    "bouts": [
      {
        "left": "Alexander Volkanovski",
        "leftKo": "Alexander Volkanovski",
        "right": "Movsar Evloev",
        "rightKo": "Movsar Evloev",
        "weight": "Featherweight Title",
        "section": "main"
      },
      {
        "left": "Petr Yan",
        "leftKo": "Petr Yan",
        "right": "Merab Dvalishvili",
        "rightKo": "Merab Dvalishvili",
        "weight": "Bantamweight Title",
        "section": "announced"
      },
      {
        "left": "Lone’er Kavanagh",
        "leftKo": "Lone’er Kavanagh",
        "right": "Ramazan Temirov",
        "rightKo": "Ramazan Temirov",
        "weight": "Flyweight",
        "section": "announced"
      },
      {
        "left": "Alexander Volkov",
        "leftKo": "Alexander Volkov",
        "right": "Rizvan Kuniev",
        "rightKo": "Rizvan Kuniev",
        "weight": "Heavyweight",
        "section": "announced"
      },
      {
        "left": "Aaron Pico",
        "leftKo": "Aaron Pico",
        "right": "Losene Keita",
        "rightKo": "Losene Keita",
        "weight": "Featherweight",
        "section": "announced"
      }
    ]
  },
  {
    "id": "ufcstats-2026-11-01-moicano-vs-nolan",
    "title": "Moicano vs Nolan",
    "date": "2026-11-01",
    "sourceUrl": "https://www.ufc.com/event/ufc-fight-night-october-31-2026",
    "startUtc": "2026-11-01T00:00:00Z",
    "prelimsUtc": "2026-10-31T21:00:00Z",
    "venue": "Meta APEX Las Vegas , NV United States",
    "bouts": [
      {
        "left": "Renato Moicano",
        "leftKo": "Renato Moicano",
        "right": "Tom Nolan",
        "rightKo": "Tom Nolan",
        "weight": "Lightweight",
        "section": "main"
      },
      {
        "left": "Randy Brown",
        "leftKo": "Randy Brown",
        "right": "Carlos Leal",
        "rightKo": "Carlos Leal",
        "weight": "Welterweight",
        "section": "announced"
      },
      {
        "left": "Yana Santos",
        "leftKo": "Yana Santos",
        "right": "Luana Santos",
        "rightKo": "Luana Santos",
        "weight": "Women's Bantamweight",
        "section": "announced"
      },
      {
        "left": "Jean-Paul Lebosnoyani",
        "leftKo": "Jean-Paul Lebosnoyani",
        "right": "Farman Hasanov",
        "rightKo": "Farman Hasanov",
        "weight": "Welterweight",
        "section": "announced"
      }
    ]
  },
  {
    "id": "ufcstats-2026-11-08-bonfim-vs-brady",
    "title": "Bonfim vs Brady",
    "date": "2026-11-08",
    "sourceUrl": "https://www.ufc.com/event/ufc-fight-night-november-07-2026",
    "startUtc": "2026-11-08T01:00:00Z",
    "prelimsUtc": "2026-11-07T22:00:00Z",
    "venue": "Meta APEX Las Vegas , NV United States",
    "bouts": [
      {
        "left": "Gabriel Bonfim",
        "leftKo": "Gabriel Bonfim",
        "right": "Sean Brady",
        "rightKo": "Sean Brady",
        "weight": "Welterweight",
        "section": "main"
      },
      {
        "left": "Tatiana Suarez",
        "leftKo": "Tatiana Suarez",
        "right": "Virna Jandiroba",
        "rightKo": "Virna Jandiroba",
        "weight": "Women's Strawweight",
        "section": "announced"
      },
      {
        "left": "Davey Grant",
        "leftKo": "Davey Grant",
        "right": "Elijah Smith",
        "rightKo": "Elijah Smith",
        "weight": "Bantamweight",
        "section": "announced"
      },
      {
        "left": "Seokhyeon Ko",
        "leftKo": "Seokhyeon Ko",
        "right": "Wellington Turman",
        "rightKo": "Wellington Turman",
        "weight": "Welterweight",
        "section": "announced"
      },
      {
        "left": "Billy Elekana",
        "leftKo": "Billy Elekana",
        "right": "Lucas Fernando",
        "rightKo": "Lucas Fernando",
        "weight": "Light Heavyweight",
        "section": "announced"
      },
      {
        "left": "Mantas Kondratavičius",
        "leftKo": "Mantas Kondratavičius",
        "right": "Wes Schultz",
        "rightKo": "Wes Schultz",
        "weight": "Middleweight",
        "section": "announced"
      }
    ]
  },
  {
    "id": "ufcstats-2026-11-15-gane-vs-hokit",
    "title": "Gane vs Hokit",
    "date": "2026-11-15",
    "sourceUrl": "https://www.ufc.com/event/ufc-334",
    "startUtc": "2026-11-15T02:00:00Z",
    "prelimsUtc": "2026-11-15T00:00:00Z",
    "venue": "Madison Square Garden New York , NY United States",
    "bouts": [
      {
        "left": "Ciryl Gane",
        "leftKo": "Ciryl Gane",
        "right": "Josh Hokit",
        "rightKo": "Josh Hokit",
        "weight": "Heavyweight Title",
        "section": "main"
      },
      {
        "left": "Kayla Harrison",
        "leftKo": "Kayla Harrison",
        "right": "Amanda Nunes",
        "rightKo": "Amanda Nunes",
        "weight": "Women's Bantamweight Title",
        "section": "announced"
      },
      {
        "left": "Caio Borralho",
        "leftKo": "Caio Borralho",
        "right": "Yousri Belgaroui",
        "rightKo": "Yousri Belgaroui",
        "weight": "Middleweight",
        "section": "announced"
      },
      {
        "left": "Uroš Medić",
        "leftKo": "Uroš Medić",
        "right": "Kevin Holland",
        "rightKo": "Kevin Holland",
        "weight": "Welterweight",
        "section": "announced"
      },
      {
        "left": "Bilal Hasan",
        "leftKo": "Bilal Hasan",
        "right": "Luis Gurule",
        "rightKo": "Luis Gurule",
        "weight": "Flyweight",
        "section": "announced"
      }
    ]
  },
  {
    "id": "ufcstats-2026-11-21-prochazka-vs-stirling",
    "title": "Prochazka vs Stirling",
    "date": "2026-11-21",
    "sourceUrl": "https://www.ufc.com/event/ufc-fight-night-november-21-2026",
    "startUtc": "2026-11-21T18:00:00Z",
    "prelimsUtc": "2026-11-21T15:00:00Z",
    "venue": "ABHA Arena Doha Qatar",
    "bouts": [
      {
        "left": "Jiří Procházka",
        "leftKo": "Jiří Procházka",
        "right": "Navajo Stirling",
        "rightKo": "Navajo Stirling",
        "weight": "Light Heavyweight",
        "section": "main"
      },
      {
        "left": "Aljamain Sterling",
        "leftKo": "Aljamain Sterling",
        "right": "Kevin Vallejos",
        "rightKo": "Kevin Vallejos",
        "weight": "Featherweight",
        "section": "announced"
      },
      {
        "left": "Dan Hooker",
        "leftKo": "Dan Hooker",
        "right": "Brian Ortega",
        "rightKo": "Brian Ortega",
        "weight": "Lightweight",
        "section": "announced"
      },
      {
        "left": "Jared Cannonier",
        "leftKo": "Jared Cannonier",
        "right": "Ikram Aliskerov",
        "rightKo": "Ikram Aliskerov",
        "weight": "Middleweight",
        "section": "announced"
      },
      {
        "left": "Shamil Gaziev",
        "leftKo": "Shamil Gaziev",
        "right": "Tallison Teixeira",
        "rightKo": "Tallison Teixeira",
        "weight": "Heavyweight",
        "section": "announced"
      },
      {
        "left": "Jake Matthews",
        "leftKo": "Jake Matthews",
        "right": "Tahir Abdullayev",
        "rightKo": "Tahir Abdullayev",
        "weight": "Welterweight",
        "section": "announced"
      },
      {
        "left": "Aleksandre Topuria",
        "leftKo": "Aleksandre Topuria",
        "right": "Santiago Luna",
        "rightKo": "Santiago Luna",
        "weight": "Bantamweight",
        "section": "announced"
      },
      {
        "left": "Asu Almabayev",
        "leftKo": "Asu Almabayev",
        "right": "Kyoji Horiguchi",
        "rightKo": "Kyoji Horiguchi",
        "weight": "Flyweight",
        "section": "announced"
      },
      {
        "left": "Amir Albazi",
        "leftKo": "Amir Albazi",
        "right": "Alessandro Costa",
        "rightKo": "Alessandro Costa",
        "weight": "Flyweight",
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
        "left": "Sergei Pavlovich",
        "leftKo": "Sergei Pavlovich",
        "right": "Alex Pereira",
        "rightKo": "Alex Pereira",
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
        "left": "Quentin Pasley",
        "leftKo": "Quentin Pasley",
        "right": "Junior Tafa",
        "rightKo": "Junior Tafa",
        "weight": "Light Heavyweight",
        "section": "announced"
      },
      {
        "left": "Joe Pyfer",
        "leftKo": "Joe Pyfer",
        "right": "Bo Nickal",
        "rightKo": "Bo Nickal",
        "weight": "Middleweight",
        "section": "announced"
      }
    ]
  },
  {
    "id": "ufcstats-2027-02-06-tbd-vs-tbd",
    "title": "TBD vs TBD",
    "date": "2027-02-06",
    "sourceUrl": "https://www.ufc.com/event/ufc-fight-night-february-06-2027",
    "startUtc": "2027-02-06T22:00:00Z",
    "prelimsUtc": "2027-02-06T20:00:00Z",
    "venue": "Afterpay Arena Sydney Olympic Park NSW Australia"
  }
];
