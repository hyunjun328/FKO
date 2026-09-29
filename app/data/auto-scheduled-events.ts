// 직접 수집한 UFC 예정 대회 목록을 화면 일정에 보조 데이터로 제공한다.
export type AutoScheduledBout = { left: string; leftKo: string; right: string; rightKo: string; weight: string; section: "main" | "prelims" | "announced" };
export type AutoScheduledEvent = { id: string; title: string; date: string; sourceUrl: string; subtitle?: string; startUtc?: string; prelimsUtc?: string; venue?: string; city?: string; bouts?: AutoScheduledBout[] };

export const AUTO_SCHEDULED_EVENTS: AutoScheduledEvent[] = [
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
        "left": "Roberto Soldić",
        "leftKo": "Roberto Soldić",
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
      },
      {
        "left": "Matheus Camilo",
        "leftKo": "Matheus Camilo",
        "right": "Jai Herbert",
        "rightKo": "Jai Herbert",
        "weight": "Lightweight",
        "section": "announced"
      },
      {
        "left": "Loopy Godinez",
        "leftKo": "Loopy Godinez",
        "right": "Ketlen Souza",
        "rightKo": "Ketlen Souza",
        "weight": "Women's Strawweight",
        "section": "announced"
      },
      {
        "left": "Andre Fili",
        "leftKo": "Andre Fili",
        "right": "Kai Kamaka III",
        "rightKo": "Kai Kamaka III",
        "weight": "Featherweight",
        "section": "announced"
      },
      {
        "left": "Julius Walker",
        "leftKo": "Julius Walker",
        "right": "Gerald Meerschaert",
        "rightKo": "Gerald Meerschaert",
        "weight": "Light Heavyweight",
        "section": "announced"
      },
      {
        "left": "Malcolm Wellmaker",
        "leftKo": "Malcolm Wellmaker",
        "right": "Otari Tanzilovi",
        "rightKo": "Otari Tanzilovi",
        "weight": "Bantamweight",
        "section": "announced"
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
        "left": "Kyle Nelson",
        "leftKo": "Kyle Nelson",
        "right": "Cristian Perez Gonzalez",
        "rightKo": "Cristian Perez Gonzalez",
        "weight": "Lightweight",
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
        "left": "Arnold Allen",
        "leftKo": "Arnold Allen",
        "right": "Aaron Pico",
        "rightKo": "Aaron Pico",
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
        "left": "Lucia Szabova",
        "leftKo": "Lucia Szabova",
        "right": "Tainara Lisboa",
        "rightKo": "Tainara Lisboa",
        "weight": "Women's Flyweight",
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
        "left": "Talita Alencar",
        "leftKo": "Talita Alencar",
        "right": "Piera Rodriguez",
        "rightKo": "Piera Rodriguez",
        "weight": "Women's Strawweight",
        "section": "announced"
      },
      {
        "left": "Nick Klein",
        "leftKo": "Nick Klein",
        "right": "Joseph Kropschot",
        "rightKo": "Joseph Kropschot",
        "weight": "Middleweight",
        "section": "announced"
      },
      {
        "left": "Rodrigo Sezinando",
        "leftKo": "Rodrigo Sezinando",
        "right": "Theodor Berggren",
        "rightKo": "Theodor Berggren",
        "weight": "Welterweight",
        "section": "announced"
      },
      {
        "left": "Jean-Paul Lebosnoyani",
        "leftKo": "Jean-Paul Lebosnoyani",
        "right": "Farman Hasanov",
        "rightKo": "Farman Hasanov",
        "weight": "Welterweight",
        "section": "announced"
      },
      {
        "left": "Azamat Bekoev",
        "leftKo": "Azamat Bekoev",
        "right": "Andre Petroski",
        "rightKo": "Andre Petroski",
        "weight": "Middleweight",
        "section": "announced"
      },
      {
        "left": "Julian Erosa",
        "leftKo": "Julian Erosa",
        "right": "JeongYeong Lee",
        "rightKo": "JeongYeong Lee",
        "weight": "Featherweight",
        "section": "announced"
      },
      {
        "left": "Francis Marshall",
        "leftKo": "Francis Marshall",
        "right": "Gaston Bolanos",
        "rightKo": "Gaston Bolanos",
        "weight": "Featherweight",
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
        "left": "Mantas Kondratavičius",
        "leftKo": "Mantas Kondratavičius",
        "right": "Wes Schultz",
        "rightKo": "Wes Schultz",
        "weight": "Middleweight",
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
        "left": "Austin Bashi",
        "leftKo": "Austin Bashi",
        "right": "Lucas Brennan",
        "rightKo": "Lucas Brennan",
        "weight": "Featherweight",
        "section": "announced"
      },
      {
        "left": "Karine Silva",
        "leftKo": "Karine Silva",
        "right": "Gabriella Fernandes",
        "rightKo": "Gabriella Fernandes",
        "weight": "Women's Flyweight",
        "section": "announced"
      },
      {
        "left": "Priscila Cachoeira",
        "leftKo": "Priscila Cachoeira",
        "right": "Nina Milošević",
        "rightKo": "Nina Milošević",
        "weight": "Women's Bantamweight",
        "section": "announced"
      },
      {
        "left": "Keiichiro Nakamura",
        "leftKo": "Keiichiro Nakamura",
        "right": "Ollie Schmid",
        "rightKo": "Ollie Schmid",
        "weight": "Featherweight",
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
        "left": "Jonny Parsons",
        "leftKo": "Jonny Parsons",
        "right": "José Souza",
        "rightKo": "José Souza",
        "weight": "Welterweight",
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
        "left": "Jose Delano",
        "leftKo": "Jose Delano",
        "right": "Murtazali Magomedov",
        "rightKo": "Murtazali Magomedov",
        "weight": "Featherweight",
        "section": "announced"
      },
      {
        "left": "Gabriel Lorenco",
        "leftKo": "Gabriel Lorenco",
        "right": "Alvin Hines",
        "rightKo": "Alvin Hines",
        "weight": "Heavyweight",
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
  },
  {
    "id": "ufcstats-2026-11-21-tbd-vs-tbd",
    "title": "TBD vs TBD",
    "date": "2026-11-21",
    "sourceUrl": "https://www.ufc.com/event/ufc-fight-night-november-21-2026",
    "startUtc": "2026-11-21T18:00:00Z",
    "prelimsUtc": "2026-11-21T15:00:00Z",
    "venue": "ABHA Arena Doha Qatar",
    "bouts": [
      {
        "left": "Jared Cannonier",
        "leftKo": "Jared Cannonier",
        "right": "Ikram Aliskerov",
        "rightKo": "Ikram Aliskerov",
        "weight": "Middleweight",
        "section": "main"
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
  }
];
