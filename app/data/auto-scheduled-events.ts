// 직접 수집한 UFC 예정 대회 목록을 화면 일정에 보조 데이터로 제공한다.
export type AutoScheduledBout = { left: string; leftKo: string; right: string; rightKo: string; weight: string; section: "main" | "prelims" | "announced" };
export type AutoScheduledEvent = { id: string; title: string; date: string; sourceUrl: string; subtitle?: string; startUtc?: string; prelimsUtc?: string; venue?: string; city?: string; bouts?: AutoScheduledBout[] };

export const AUTO_SCHEDULED_EVENTS: AutoScheduledEvent[] = [
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
        "weight": "Poids moyens",
        "section": "main"
      },
      {
        "left": "Matheus Camilo",
        "leftKo": "Matheus Camilo",
        "right": "Jai Herbert",
        "rightKo": "Jai Herbert",
        "weight": "Poids légers",
        "section": "announced"
      },
      {
        "left": "Loopy Godinez",
        "leftKo": "Loopy Godinez",
        "right": "Ketlen Souza",
        "rightKo": "Ketlen Souza",
        "weight": "Poids paille féminins",
        "section": "announced"
      },
      {
        "left": "Andre Fili",
        "leftKo": "Andre Fili",
        "right": "Kai Kamaka III",
        "rightKo": "Kai Kamaka III",
        "weight": "Poids plume",
        "section": "announced"
      },
      {
        "left": "Julius Walker",
        "leftKo": "Julius Walker",
        "right": "Gerald Meerschaert",
        "rightKo": "Gerald Meerschaert",
        "weight": "Poids mi-lourds",
        "section": "announced"
      },
      {
        "left": "Malcolm Wellmaker",
        "leftKo": "Malcolm Wellmaker",
        "right": "Otari Tanzilovi",
        "rightKo": "Otari Tanzilovi",
        "weight": "Poids coq",
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
        "weight": "Poids mi-moyens",
        "section": "main"
      },
      {
        "left": "Erin Blanchfield",
        "leftKo": "Erin Blanchfield",
        "right": "Jasmine Jasudavicius",
        "rightKo": "Jasmine Jasudavicius",
        "weight": "Poids mouche féminins",
        "section": "announced"
      },
      {
        "left": "Kyle Nelson",
        "leftKo": "Kyle Nelson",
        "right": "Cristian Perez Gonzalez",
        "rightKo": "Cristian Perez Gonzalez",
        "weight": "Poids légers",
        "section": "announced"
      },
      {
        "left": "Marc-André Barriault",
        "leftKo": "Marc-André Barriault",
        "right": "Kyle Daukaus",
        "rightKo": "Kyle Daukaus",
        "weight": "Poids moyens",
        "section": "announced"
      },
      {
        "left": "Louis Jourdain",
        "leftKo": "Louis Jourdain",
        "right": "Timmy Cuamba",
        "rightKo": "Timmy Cuamba",
        "weight": "Poids coq",
        "section": "announced"
      },
      {
        "left": "Mandel Nallo",
        "leftKo": "Mandel Nallo",
        "right": "Nate Landwehr",
        "rightKo": "Nate Landwehr",
        "weight": "Poids légers",
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
        "weight": "Poids plume Combat de championnat",
        "section": "main"
      },
      {
        "left": "Petr Yan",
        "leftKo": "Petr Yan",
        "right": "Merab Dvalishvili",
        "rightKo": "Merab Dvalishvili",
        "weight": "Poids coq Combat de championnat",
        "section": "announced"
      },
      {
        "left": "Lone’er Kavanagh",
        "leftKo": "Lone’er Kavanagh",
        "right": "Ramazan Temirov",
        "rightKo": "Ramazan Temirov",
        "weight": "Poids mouche",
        "section": "announced"
      },
      {
        "left": "Alexander Volkov",
        "leftKo": "Alexander Volkov",
        "right": "Rizvan Kuniev",
        "rightKo": "Rizvan Kuniev",
        "weight": "Poids lourds",
        "section": "announced"
      },
      {
        "left": "Arnold Allen",
        "leftKo": "Arnold Allen",
        "right": "Aaron Pico",
        "rightKo": "Aaron Pico",
        "weight": "Poids plume",
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
        "weight": "Poids légers",
        "section": "main"
      },
      {
        "left": "Randy Brown",
        "leftKo": "Randy Brown",
        "right": "Carlos Leal",
        "rightKo": "Carlos Leal",
        "weight": "Poids mi-moyens",
        "section": "announced"
      },
      {
        "left": "Lucia Szabova",
        "leftKo": "Lucia Szabova",
        "right": "Tainara Lisboa",
        "rightKo": "Tainara Lisboa",
        "weight": "Poids mouche féminins",
        "section": "announced"
      },
      {
        "left": "Yana Santos",
        "leftKo": "Yana Santos",
        "right": "Luana Santos",
        "rightKo": "Luana Santos",
        "weight": "Poids coq féminins",
        "section": "announced"
      },
      {
        "left": "Talita Alencar",
        "leftKo": "Talita Alencar",
        "right": "Piera Rodriguez",
        "rightKo": "Piera Rodriguez",
        "weight": "Poids paille féminins",
        "section": "announced"
      },
      {
        "left": "Nick Klein",
        "leftKo": "Nick Klein",
        "right": "Joseph Kropschot",
        "rightKo": "Joseph Kropschot",
        "weight": "Poids moyens",
        "section": "announced"
      },
      {
        "left": "Rodrigo Sezinando",
        "leftKo": "Rodrigo Sezinando",
        "right": "Theodor Berggren",
        "rightKo": "Theodor Berggren",
        "weight": "Poids mi-moyens",
        "section": "announced"
      },
      {
        "left": "Jean-Paul Lebosnoyani",
        "leftKo": "Jean-Paul Lebosnoyani",
        "right": "Farman Hasanov",
        "rightKo": "Farman Hasanov",
        "weight": "Poids mi-moyens",
        "section": "announced"
      },
      {
        "left": "Azamat Bekoev",
        "leftKo": "Azamat Bekoev",
        "right": "Andre Petroski",
        "rightKo": "Andre Petroski",
        "weight": "Poids moyens",
        "section": "announced"
      },
      {
        "left": "Julian Erosa",
        "leftKo": "Julian Erosa",
        "right": "JeongYeong Lee",
        "rightKo": "JeongYeong Lee",
        "weight": "Poids plume",
        "section": "announced"
      },
      {
        "left": "Francis Marshall",
        "leftKo": "Francis Marshall",
        "right": "Gaston Bolanos",
        "rightKo": "Gaston Bolanos",
        "weight": "Poids plume",
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
        "weight": "Poids mi-moyens",
        "section": "main"
      },
      {
        "left": "Tatiana Suarez",
        "leftKo": "Tatiana Suarez",
        "right": "Virna Jandiroba",
        "rightKo": "Virna Jandiroba",
        "weight": "Poids paille féminins",
        "section": "announced"
      },
      {
        "left": "Mantas Kondratavičius",
        "leftKo": "Mantas Kondratavičius",
        "right": "Wes Schultz",
        "rightKo": "Wes Schultz",
        "weight": "Poids moyens",
        "section": "announced"
      },
      {
        "left": "Billy Elekana",
        "leftKo": "Billy Elekana",
        "right": "Lucas Fernando",
        "rightKo": "Lucas Fernando",
        "weight": "Poids mi-lourds",
        "section": "announced"
      },
      {
        "left": "Austin Bashi",
        "leftKo": "Austin Bashi",
        "right": "Lucas Brennan",
        "rightKo": "Lucas Brennan",
        "weight": "Poids plume",
        "section": "announced"
      },
      {
        "left": "Karine Silva",
        "leftKo": "Karine Silva",
        "right": "Gabriella Fernandes",
        "rightKo": "Gabriella Fernandes",
        "weight": "Poids mouche féminins",
        "section": "announced"
      },
      {
        "left": "Priscila Cachoeira",
        "leftKo": "Priscila Cachoeira",
        "right": "Nina Milošević",
        "rightKo": "Nina Milošević",
        "weight": "Poids coq féminins",
        "section": "announced"
      },
      {
        "left": "Keiichiro Nakamura",
        "leftKo": "Keiichiro Nakamura",
        "right": "Ollie Schmid",
        "rightKo": "Ollie Schmid",
        "weight": "Poids plume",
        "section": "announced"
      },
      {
        "left": "Seokhyeon Ko",
        "leftKo": "Seokhyeon Ko",
        "right": "Wellington Turman",
        "rightKo": "Wellington Turman",
        "weight": "Poids mi-moyens",
        "section": "announced"
      },
      {
        "left": "Jonny Parsons",
        "leftKo": "Jonny Parsons",
        "right": "José Souza",
        "rightKo": "José Souza",
        "weight": "Poids mi-moyens",
        "section": "announced"
      },
      {
        "left": "Davey Grant",
        "leftKo": "Davey Grant",
        "right": "Elijah Smith",
        "rightKo": "Elijah Smith",
        "weight": "Poids coq",
        "section": "announced"
      },
      {
        "left": "Jose Delano",
        "leftKo": "Jose Delano",
        "right": "Murtazali Magomedov",
        "rightKo": "Murtazali Magomedov",
        "weight": "Poids plume",
        "section": "announced"
      },
      {
        "left": "Gabriel Lorenco",
        "leftKo": "Gabriel Lorenco",
        "right": "Alvin Hines",
        "rightKo": "Alvin Hines",
        "weight": "Poids lourds",
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
        "weight": "Poids lourds Combat de championnat",
        "section": "main"
      },
      {
        "left": "Kayla Harrison",
        "leftKo": "Kayla Harrison",
        "right": "Amanda Nunes",
        "rightKo": "Amanda Nunes",
        "weight": "Poids coq féminins Combat de championnat",
        "section": "announced"
      },
      {
        "left": "Caio Borralho",
        "leftKo": "Caio Borralho",
        "right": "Yousri Belgaroui",
        "rightKo": "Yousri Belgaroui",
        "weight": "Poids moyens",
        "section": "announced"
      },
      {
        "left": "Uroš Medić",
        "leftKo": "Uroš Medić",
        "right": "Kevin Holland",
        "rightKo": "Kevin Holland",
        "weight": "Poids mi-moyens",
        "section": "announced"
      },
      {
        "left": "Bilal Hasan",
        "leftKo": "Bilal Hasan",
        "right": "Luis Gurule",
        "rightKo": "Luis Gurule",
        "weight": "Poids mouche",
        "section": "announced"
      },
      {
        "left": "Drew Dober",
        "leftKo": "Drew Dober",
        "right": "Chris Duncan",
        "rightKo": "Chris Duncan",
        "weight": "Poids légers",
        "section": "announced"
      },
      {
        "left": "Stephen Thompson",
        "leftKo": "Stephen Thompson",
        "right": "Charles Radtke",
        "rightKo": "Charles Radtke",
        "weight": "Poids mi-moyens",
        "section": "announced"
      },
      {
        "left": "Donte Johnson",
        "leftKo": "Donte Johnson",
        "right": "Baisangur Susurkaev",
        "rightKo": "Baisangur Susurkaev",
        "weight": "Poids moyens",
        "section": "announced"
      },
      {
        "left": "Jim Miller",
        "leftKo": "Jim Miller",
        "right": "Terrance McKinney",
        "rightKo": "Terrance McKinney",
        "weight": "Poids légers",
        "section": "announced"
      },
      {
        "left": "Macy Chiasson",
        "leftKo": "Macy Chiasson",
        "right": "Bia Mesquita",
        "rightKo": "Bia Mesquita",
        "weight": "Poids coq féminins",
        "section": "announced"
      },
      {
        "left": "Adrian Yanez",
        "leftKo": "Adrian Yanez",
        "right": "Juan Diaz",
        "rightKo": "Juan Diaz",
        "weight": "Poids coq",
        "section": "announced"
      },
      {
        "left": "Nazim Sadykhov",
        "leftKo": "Nazim Sadykhov",
        "right": "Jefferson Nascimento",
        "rightKo": "Jefferson Nascimento",
        "weight": "Poids légers",
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
        "weight": "Poids mi-lourds",
        "section": "main"
      },
      {
        "left": "Aljamain Sterling",
        "leftKo": "Aljamain Sterling",
        "right": "Kevin Vallejos",
        "rightKo": "Kevin Vallejos",
        "weight": "Poids plume",
        "section": "announced"
      },
      {
        "left": "Dan Hooker",
        "leftKo": "Dan Hooker",
        "right": "Brian Ortega",
        "rightKo": "Brian Ortega",
        "weight": "Poids légers",
        "section": "announced"
      },
      {
        "left": "Jared Cannonier",
        "leftKo": "Jared Cannonier",
        "right": "Ikram Aliskerov",
        "rightKo": "Ikram Aliskerov",
        "weight": "Poids moyens",
        "section": "announced"
      },
      {
        "left": "Shamil Gaziev",
        "leftKo": "Shamil Gaziev",
        "right": "Tallison Teixeira",
        "rightKo": "Tallison Teixeira",
        "weight": "Poids lourds",
        "section": "announced"
      },
      {
        "left": "Jake Matthews",
        "leftKo": "Jake Matthews",
        "right": "Tahir Abdullayev",
        "rightKo": "Tahir Abdullayev",
        "weight": "Poids mi-moyens",
        "section": "announced"
      },
      {
        "left": "Aleksandre Topuria",
        "leftKo": "Aleksandre Topuria",
        "right": "Santiago Luna",
        "rightKo": "Santiago Luna",
        "weight": "Poids coq",
        "section": "announced"
      },
      {
        "left": "Asu Almabayev",
        "leftKo": "Asu Almabayev",
        "right": "Kyoji Horiguchi",
        "rightKo": "Kyoji Horiguchi",
        "weight": "Poids mouche",
        "section": "announced"
      },
      {
        "left": "Amir Albazi",
        "leftKo": "Amir Albazi",
        "right": "Alessandro Costa",
        "rightKo": "Alessandro Costa",
        "weight": "Poids mouche",
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
        "weight": "Poids légers",
        "section": "main"
      },
      {
        "left": "Sergei Pavlovich",
        "leftKo": "Sergei Pavlovich",
        "right": "Alex Pereira",
        "rightKo": "Alex Pereira",
        "weight": "Poids lourds",
        "section": "announced"
      },
      {
        "left": "Joe Pyfer",
        "leftKo": "Joe Pyfer",
        "right": "Bo Nickal",
        "rightKo": "Bo Nickal",
        "weight": "Poids moyens",
        "section": "announced"
      }
    ]
  }
];
