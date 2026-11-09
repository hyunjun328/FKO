// 직접 수집한 UFC 예정 대회 목록을 화면 일정에 보조 데이터로 제공한다.
export type AutoScheduledBout = { left: string; leftKo: string; right: string; rightKo: string; weight: string; section: "main" | "prelims" | "announced" };
export type AutoScheduledEvent = { id: string; title: string; date: string; sourceUrl: string; subtitle?: string; startUtc?: string; prelimsUtc?: string; venue?: string; city?: string; bouts?: AutoScheduledBout[] };

export const AUTO_SCHEDULED_EVENTS: AutoScheduledEvent[] = [
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
        "left": "Kyoji Horiguchi",
        "leftKo": "Kyoji Horiguchi",
        "right": "Asu Almabayev",
        "rightKo": "Asu Almabayev",
        "weight": "Flyweight",
        "section": "announced"
      },
      {
        "left": "Jared Cannonier",
        "leftKo": "Jared Cannonier",
        "right": "Ikram Aliskerov",
        "rightKo": "Ikram Aliskerov",
        "weight": "Middleweight",
        "section": "announced"
      }
    ]
  },
  {
    "id": "ufcstats-2026-12-05-adesanya-vs-magomedov",
    "title": "Adesanya vs Magomedov",
    "date": "2026-12-05",
    "sourceUrl": "https://www.ufc.com/event/ufc-fight-night-december-05-2026",
    "startUtc": "2026-12-05T18:00:00Z",
    "prelimsUtc": "2026-12-05T15:00:00Z",
    "venue": "Venue TBD Riyadh Saudi Arabia",
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
      },
      {
        "left": "Bruno Silva",
        "leftKo": "Bruno Silva",
        "right": "Jafel Filho",
        "rightKo": "Jafel Filho",
        "weight": "Flyweight",
        "section": "announced"
      },
      {
        "left": "Uran Satybaldiev",
        "leftKo": "Uran Satybaldiev",
        "right": "Ivan Gnizditskiy",
        "rightKo": "Ivan Gnizditskiy",
        "weight": "Light Heavyweight",
        "section": "announced"
      },
      {
        "left": "Marco Tulio",
        "leftKo": "Marco Tulio",
        "right": "JunYong Park",
        "rightKo": "JunYong Park",
        "weight": "Middleweight",
        "section": "announced"
      },
      {
        "left": "Pavel Andrusca",
        "leftKo": "Pavel Andrusca",
        "right": "Mahammadali Osmanli",
        "rightKo": "Mahammadali Osmanli",
        "weight": "Bantamweight",
        "section": "announced"
      },
      {
        "left": "Modestino Rodrigues",
        "leftKo": "Modestino Rodrigues",
        "right": "Matthieu Duclos",
        "rightKo": "Matthieu Duclos",
        "weight": "Middleweight",
        "section": "announced"
      },
      {
        "left": "Abdul Hussein",
        "leftKo": "Abdul Hussein",
        "right": "Hecher Sosa",
        "rightKo": "Hecher Sosa",
        "weight": "Bantamweight",
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
    "id": "ufcstats-2027-01-17-tbd-vs-tbd",
    "title": "TBD vs TBD",
    "date": "2027-01-17",
    "sourceUrl": "https://www.ufc.com/event/ufc-fight-night-january-16-2027",
    "startUtc": "2027-01-17T01:00:00Z",
    "prelimsUtc": "2027-01-16T22:00:00Z",
    "venue": "American Airlines Center Dallas , TX United States"
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
  }
];
