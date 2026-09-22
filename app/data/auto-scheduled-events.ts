// 직접 수집한 UFC 예정 대회 목록을 화면 일정에 보조 데이터로 제공한다.
export type AutoScheduledBout = { left: string; leftKo: string; right: string; rightKo: string; weight: string; section: "main" | "prelims" | "announced" };
export type AutoScheduledEvent = { id: string; title: string; date: string; sourceUrl: string; subtitle?: string; startUtc?: string; prelimsUtc?: string; venue?: string; city?: string; bouts?: AutoScheduledBout[] };

export const AUTO_SCHEDULED_EVENTS: AutoScheduledEvent[] = [
  {
    "id": "ufcstats-2026-09-27-rosas-jr-vs-barcelos",
    "title": "Rosas Jr. vs Barcelos",
    "date": "2026-09-27",
    "sourceUrl": "https://www.ufc.com/event/ufc-fight-night-september-26-2026",
    "startUtc": "2026-09-27T00:00:00Z",
    "prelimsUtc": "2026-09-26T21:00:00Z",
    "venue": "Meta APEX Las Vegas , NV United States",
    "bouts": [
      {
        "left": "Raul Rosas Jr.",
        "leftKo": "Raul Rosas Jr.",
        "right": "Raoni Barcelos",
        "rightKo": "Raoni Barcelos",
        "weight": "Bantamweight",
        "section": "main"
      },
      {
        "left": "Rodolfo Vieira",
        "leftKo": "Rodolfo Vieira",
        "right": "Robert Bryczek",
        "rightKo": "Robert Bryczek",
        "weight": "Middleweight",
        "section": "announced"
      },
      {
        "left": "Mehemmedeli Osmanli",
        "leftKo": "Mehemmedeli Osmanli",
        "right": "Ilimbek Akylbek",
        "rightKo": "Ilimbek Akylbek",
        "weight": "Bantamweight",
        "section": "announced"
      },
      {
        "left": "Melissa Amaya",
        "leftKo": "Melissa Amaya",
        "right": "Tina Black",
        "rightKo": "Tina Black",
        "weight": "Women's Strawweight",
        "section": "announced"
      },
      {
        "left": "Brady Hiestand",
        "leftKo": "Brady Hiestand",
        "right": "Rinya Nakamura",
        "rightKo": "Rinya Nakamura",
        "weight": "Bantamweight",
        "section": "announced"
      }
    ]
  },
  {
    "id": "ufcstats-2026-10-04-silva-vs-wang",
    "title": "Silva vs Wang",
    "date": "2026-10-04",
    "sourceUrl": "https://www.ufc.com/event/ufc-332",
    "startUtc": "2026-10-04T00:00:00Z",
    "prelimsUtc": "2026-10-03T22:00:00Z",
    "venue": "Delta Center Salt Lake City , UT United States",
    "bouts": [
      {
        "left": "Natalia Silva",
        "leftKo": "Natalia Silva",
        "right": "Wang Cong",
        "rightKo": "Wang Cong",
        "weight": "Women's Flyweight Title",
        "section": "main"
      },
      {
        "left": "Deiveson Figueiredo",
        "leftKo": "Deiveson Figueiredo",
        "right": "Payton Talbott",
        "rightKo": "Payton Talbott",
        "weight": "Bantamweight",
        "section": "announced"
      },
      {
        "left": "King Green",
        "leftKo": "King Green",
        "right": "Esteban Ribovics",
        "rightKo": "Esteban Ribovics",
        "weight": "Lightweight",
        "section": "announced"
      },
      {
        "left": "Roberto Soldic",
        "leftKo": "Roberto Soldic",
        "right": "Khaos Williams",
        "rightKo": "Khaos Williams",
        "weight": "Welterweight",
        "section": "announced"
      },
      {
        "left": "Ateba Gautier",
        "leftKo": "Ateba Gautier",
        "right": "Roman Kopylov",
        "rightKo": "Roman Kopylov",
        "weight": "Middleweight",
        "section": "announced"
      }
    ]
  },
  {
    "id": "ufcstats-2026-10-11-allen-vs-duncan",
    "title": "Allen vs Duncan",
    "date": "2026-10-11",
    "sourceUrl": "https://www.ufc.com/event/ufc-fight-night-october-10-2026",
    "startUtc": "2026-10-11T00:00:00Z",
    "prelimsUtc": "2026-10-10T21:00:00Z",
    "venue": "Meta APEX Las Vegas , NV United States",
    "bouts": [
      {
        "left": "Brendan Allen",
        "leftKo": "Brendan Allen",
        "right": "Christian Leroy Duncan",
        "rightKo": "Christian Leroy Duncan",
        "weight": "Middleweight",
        "section": "main"
      }
    ]
  },
  {
    "id": "ufcstats-2026-10-18-buckley-vs-malott",
    "title": "Buckley vs Malott",
    "date": "2026-10-18",
    "sourceUrl": "https://www.ufc.com/event/ufc-fight-night-october-17-2026",
    "startUtc": "2026-10-18T00:00:00Z",
    "prelimsUtc": "2026-10-17T21:00:00Z",
    "venue": "Rogers Place Edmonton AB Canada",
    "bouts": [
      {
        "left": "Joaquin Buckley",
        "leftKo": "Joaquin Buckley",
        "right": "Mike Malott",
        "rightKo": "Mike Malott",
        "weight": "Welterweight",
        "section": "main"
      },
      {
        "left": "Erin Blanchfield",
        "leftKo": "Erin Blanchfield",
        "right": "Jasmine Jasudavicius",
        "rightKo": "Jasmine Jasudavicius",
        "weight": "Women's Flyweight",
        "section": "announced"
      },
      {
        "left": "Marc-Andre Barriault",
        "leftKo": "Marc-Andre Barriault",
        "right": "Kyle Daukaus",
        "rightKo": "Kyle Daukaus",
        "weight": "Middleweight",
        "section": "announced"
      },
      {
        "left": "Louis Jourdain",
        "leftKo": "Louis Jourdain",
        "right": "Timmy Cuamba",
        "rightKo": "Timmy Cuamba",
        "weight": "Bantamweight",
        "section": "announced"
      },
      {
        "left": "Mandel Nallo",
        "leftKo": "Mandel Nallo",
        "right": "Nate Landwehr",
        "rightKo": "Nate Landwehr",
        "weight": "Lightweight",
        "section": "announced"
      }
    ]
  },
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
        "left": "Arnold Allen",
        "leftKo": "Arnold Allen",
        "right": "Aaron Pico",
        "rightKo": "Aaron Pico",
        "weight": "Featherweight",
        "section": "announced"
      },
      {
        "left": "Azamat Murzakanov",
        "leftKo": "Azamat Murzakanov",
        "right": "Dominick Reyes",
        "rightKo": "Dominick Reyes",
        "weight": "Light Heavyweight",
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
        "left": "Nikita Krylov",
        "leftKo": "Nikita Krylov",
        "right": "Abdul Rakhman Yakhyaev",
        "rightKo": "Abdul Rakhman Yakhyaev",
        "weight": "Light Heavyweight",
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
        "left": "Abus Magomedov",
        "leftKo": "Abus Magomedov",
        "right": "Cam Rowston",
        "rightKo": "Cam Rowston",
        "weight": "Middleweight",
        "section": "announced"
      },
      {
        "left": "Grant Dawson",
        "leftKo": "Grant Dawson",
        "right": "Nurullo Aliev",
        "rightKo": "Nurullo Aliev",
        "weight": "Lightweight",
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
        "left": "Lucia Szabova",
        "leftKo": "Lucia Szabova",
        "right": "Tainara Lisboa",
        "rightKo": "Tainara Lisboa",
        "weight": "Women's Flyweight",
        "section": "announced"
      },
      {
        "left": "Nick Klein",
        "leftKo": "Nick Klein",
        "right": "Joseph Kropschot",
        "rightKo": "Joseph Kropschot",
        "weight": "Middleweight",
        "section": "announced"
      }
    ]
  },
  {
    "id": "ufcstats-2026-11-07-bonfim-vs-brady",
    "title": "Bonfim vs Brady",
    "date": "2026-11-07",
    "sourceUrl": "https://www.ufc.com/event/ufc-fight-night-november-07-2026",
    "startUtc": "2026-11-07T22:00:00Z",
    "prelimsUtc": "2026-11-07T20:00:00Z",
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
      },
      {
        "left": "Drew Dober",
        "leftKo": "Drew Dober",
        "right": "Chris Duncan",
        "rightKo": "Chris Duncan",
        "weight": "Lightweight",
        "section": "announced"
      },
      {
        "left": "Stephen Thompson",
        "leftKo": "Stephen Thompson",
        "right": "Charles Radtke",
        "rightKo": "Charles Radtke",
        "weight": "Welterweight",
        "section": "announced"
      },
      {
        "left": "Donte Johnson",
        "leftKo": "Donte Johnson",
        "right": "Baisangur Susurkaev",
        "rightKo": "Baisangur Susurkaev",
        "weight": "Middleweight",
        "section": "announced"
      },
      {
        "left": "Jim Miller",
        "leftKo": "Jim Miller",
        "right": "Terrance McKinney",
        "rightKo": "Terrance McKinney",
        "weight": "Lightweight",
        "section": "announced"
      },
      {
        "left": "Macy Chiasson",
        "leftKo": "Macy Chiasson",
        "right": "Bia Mesquita",
        "rightKo": "Bia Mesquita",
        "weight": "Women's Bantamweight",
        "section": "announced"
      },
      {
        "left": "Adrian Yanez",
        "leftKo": "Adrian Yanez",
        "right": "Juan Diaz",
        "rightKo": "Juan Diaz",
        "weight": "Bantamweight",
        "section": "announced"
      },
      {
        "left": "Nazim Sadykhov",
        "leftKo": "Nazim Sadykhov",
        "right": "Jefferson Nascimento",
        "rightKo": "Jefferson Nascimento",
        "weight": "Lightweight",
        "section": "announced"
      }
    ]
  }
];
