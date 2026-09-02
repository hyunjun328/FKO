// 직접 수집한 UFC 예정 대회 목록을 화면 일정에 보조 데이터로 제공한다.
export type AutoScheduledBout = { left: string; leftKo: string; right: string; rightKo: string; weight: string; section: "main" | "prelims" | "announced" };
export type AutoScheduledEvent = { id: string; title: string; date: string; sourceUrl: string; subtitle?: string; startUtc?: string; prelimsUtc?: string; venue?: string; city?: string; bouts?: AutoScheduledBout[] };

export const AUTO_SCHEDULED_EVENTS: AutoScheduledEvent[] = [
  {
    "id": "ufcstats-2026-09-05-hooker-vs-parnasse",
    "title": "Hooker vs Parnasse",
    "date": "2026-09-05",
    "sourceUrl": "https://www.ufc.com/event/ufc-fight-night-september-05-2026",
    "startUtc": "2026-09-05T19:00:00Z",
    "prelimsUtc": "2026-09-05T16:00:00Z",
    "venue": "Accor Arena Paris France",
    "bouts": [
      {
        "left": "Dan Hooker",
        "leftKo": "Dan Hooker",
        "right": "Salahdine Parnasse",
        "rightKo": "Salahdine Parnasse",
        "weight": "Lightweight",
        "section": "main"
      },
      {
        "left": "Farès Ziam",
        "leftKo": "Farès Ziam",
        "right": "Axel Sola",
        "rightKo": "Axel Sola",
        "weight": "Lightweight",
        "section": "announced"
      },
      {
        "left": "Michael Venom Page",
        "leftKo": "Michael Venom Page",
        "right": "Nursulton Ruziboev",
        "rightKo": "Nursulton Ruziboev",
        "weight": "Middleweight",
        "section": "announced"
      },
      {
        "left": "Daniil Donchenko",
        "leftKo": "Daniil Donchenko",
        "right": "Punahele Soriano",
        "rightKo": "Punahele Soriano",
        "weight": "Welterweight",
        "section": "announced"
      },
      {
        "left": "Kurtis Campbell",
        "leftKo": "Kurtis Campbell",
        "right": "Trevor Peek",
        "rightKo": "Trevor Peek",
        "weight": "Featherweight",
        "section": "announced"
      },
      {
        "left": "Losene Keita",
        "leftKo": "Losene Keita",
        "right": "Muhammad Naimov",
        "rightKo": "Muhammad Naimov",
        "weight": "Featherweight",
        "section": "announced"
      }
    ]
  },
  {
    "id": "ufcstats-2026-09-12-silva-vs-delgado",
    "title": "Silva vs Delgado",
    "date": "2026-09-12",
    "sourceUrl": "https://www.ufc.com/event/ufc-fight-night-september-12-2026",
    "startUtc": "2026-09-12T21:00:00Z",
    "prelimsUtc": "2026-09-12T18:00:00Z",
    "venue": "Desert Diamond Arena Glendale , AZ United States",
    "bouts": [
      {
        "left": "Jean Silva",
        "leftKo": "Jean Silva",
        "right": "Jose Miguel Delgado",
        "rightKo": "Jose Miguel Delgado",
        "weight": "Featherweight",
        "section": "main"
      },
      {
        "left": "Brandon Moreno",
        "leftKo": "Brandon Moreno",
        "right": "Joseph Morales",
        "rightKo": "Joseph Morales",
        "weight": "Flyweight",
        "section": "announced"
      },
      {
        "left": "Tommy McMillen",
        "leftKo": "Tommy McMillen",
        "right": "Marwan Rahiki",
        "rightKo": "Marwan Rahiki",
        "weight": "Featherweight",
        "section": "announced"
      },
      {
        "left": "Manon Fiorot",
        "leftKo": "Manon Fiorot",
        "right": "Alexa Grasso",
        "rightKo": "Alexa Grasso",
        "weight": "Women's Flyweight",
        "section": "announced"
      },
      {
        "left": "Waldo Cortes Acosta",
        "leftKo": "Waldo Cortes Acosta",
        "right": "Curtis Blaydes",
        "rightKo": "Curtis Blaydes",
        "weight": "Heavyweight",
        "section": "announced"
      },
      {
        "left": "David Martinez",
        "leftKo": "David Martinez",
        "right": "Dan Ige",
        "rightKo": "Dan Ige",
        "weight": "Bantamweight",
        "section": "announced"
      }
    ]
  },
  {
    "id": "ufcstats-2026-09-20-van-vs-pantoja-2",
    "title": "Van vs Pantoja 2",
    "date": "2026-09-20",
    "sourceUrl": "https://www.ufc.com/event/cryptocom-ufc-331",
    "startUtc": "2026-09-20T01:00:00Z",
    "prelimsUtc": "2026-09-19T23:00:00Z",
    "venue": "Crypto.com Arena Los Angeles , CA United States",
    "bouts": [
      {
        "left": "Joshua Van",
        "leftKo": "Joshua Van",
        "right": "Alexandre Pantoja",
        "rightKo": "Alexandre Pantoja",
        "weight": "Flyweight Title",
        "section": "main"
      },
      {
        "left": "Arman Tsarukyan",
        "leftKo": "Arman Tsarukyan",
        "right": "Mauricio Ruffy",
        "rightKo": "Mauricio Ruffy",
        "weight": "Lightweight",
        "section": "announced"
      },
      {
        "left": "Patricio Pitbull",
        "leftKo": "Patricio Pitbull",
        "right": "Dooho Choi",
        "rightKo": "Dooho Choi",
        "weight": "Featherweight",
        "section": "announced"
      },
      {
        "left": "Renato Moicano",
        "leftKo": "Renato Moicano",
        "right": "Brian Ortega",
        "rightKo": "Brian Ortega",
        "weight": "Lightweight",
        "section": "announced"
      },
      {
        "left": "Alonzo Menifield",
        "leftKo": "Alonzo Menifield",
        "right": "Iwo Baraniewski",
        "rightKo": "Iwo Baraniewski",
        "weight": "Light Heavyweight",
        "section": "announced"
      }
    ]
  },
  {
    "id": "ufcstats-2026-09-26-rosas-jr-vs-barcelos",
    "title": "Rosas Jr. vs Barcelos",
    "date": "2026-09-26",
    "sourceUrl": "https://www.ufc.com/event/ufc-fight-night-september-26-2026",
    "startUtc": "2026-09-26T22:00:00Z",
    "prelimsUtc": "2026-09-26T20:00:00Z",
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
        "left": "Melissa Amaya",
        "leftKo": "Melissa Amaya",
        "right": "Valesca Machado",
        "rightKo": "Valesca Machado",
        "weight": "Women's Strawweight",
        "section": "announced"
      },
      {
        "left": "Mehemmedeli Osmanli",
        "leftKo": "Mehemmedeli Osmanli",
        "right": "Ilimbek Akylbek Uulu",
        "rightKo": "Ilimbek Akylbek Uulu",
        "weight": "Bantamweight",
        "section": "announced"
      },
      {
        "left": "Montel Jackson",
        "leftKo": "Montel Jackson",
        "right": "Ricky Simon",
        "rightKo": "Ricky Simon",
        "weight": "Bantamweight",
        "section": "announced"
      },
      {
        "left": "Rodolfo Bellato",
        "leftKo": "Rodolfo Bellato",
        "right": "Christian Edwards",
        "rightKo": "Christian Edwards",
        "weight": "Light Heavyweight",
        "section": "announced"
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
        "left": "Brady Hiestand",
        "leftKo": "Brady Hiestand",
        "right": "Rinya Nakamura",
        "rightKo": "Rinya Nakamura",
        "weight": "Bantamweight",
        "section": "announced"
      },
      {
        "left": "John Castaneda",
        "leftKo": "John Castaneda",
        "right": "Alatengheili",
        "rightKo": "Alatengheili",
        "weight": "Bantamweight",
        "section": "announced"
      },
      {
        "left": "Josiah Harrell",
        "leftKo": "Josiah Harrell",
        "right": "Elves Brener",
        "rightKo": "Elves Brener",
        "weight": "Lightweight",
        "section": "announced"
      },
      {
        "left": "Norma Dumont",
        "leftKo": "Norma Dumont",
        "right": "Ailin Perez",
        "rightKo": "Ailin Perez",
        "weight": "Women's Bantamweight",
        "section": "announced"
      },
      {
        "left": "Vanessa Demopoulos",
        "leftKo": "Vanessa Demopoulos",
        "right": "Yazmin Jauregui",
        "rightKo": "Yazmin Jauregui",
        "weight": "Women's Strawweight",
        "section": "announced"
      }
    ]
  },
  {
    "id": "ufcstats-2026-10-04-tbd-vs-tbd",
    "title": "TBD vs TBD",
    "date": "2026-10-04",
    "sourceUrl": "https://www.ufc.com/event/ufc-332",
    "startUtc": "2026-10-04T01:00:00Z",
    "prelimsUtc": "2026-10-03T23:00:00Z",
    "venue": "Delta Center Salt Lake City , UT United States",
    "bouts": [
      {
        "left": "Deiveson Figueiredo",
        "leftKo": "Deiveson Figueiredo",
        "right": "Payton Talbott",
        "rightKo": "Payton Talbott",
        "weight": "Bantamweight",
        "section": "main"
      },
      {
        "left": "Johnny Walker",
        "leftKo": "Johnny Walker",
        "right": "Mick Parkin",
        "rightKo": "Mick Parkin",
        "weight": "Heavyweight",
        "section": "announced"
      },
      {
        "left": "Marvin Vettori",
        "leftKo": "Marvin Vettori",
        "right": "Ismail Naurdiev",
        "rightKo": "Ismail Naurdiev",
        "weight": "Middleweight",
        "section": "announced"
      },
      {
        "left": "Ateba Gautier",
        "leftKo": "Ateba Gautier",
        "right": "Roman Kopylov",
        "rightKo": "Roman Kopylov",
        "weight": "Middleweight",
        "section": "announced"
      },
      {
        "left": "Imanol Rodriguez",
        "leftKo": "Imanol Rodriguez",
        "right": "Alden Coria",
        "rightKo": "Alden Coria",
        "weight": "Flyweight",
        "section": "announced"
      },
      {
        "left": "Damian Pinas",
        "leftKo": "Damian Pinas",
        "right": "Andrey Pulyaev",
        "rightKo": "Andrey Pulyaev",
        "weight": "Middleweight",
        "section": "announced"
      },
      {
        "left": "Court McGee",
        "leftKo": "Court McGee",
        "right": "Eric Nolan",
        "rightKo": "Eric Nolan",
        "weight": "Welterweight",
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
        "left": "Jamey-Lyn Horth",
        "leftKo": "Jamey-Lyn Horth",
        "right": "Katlyn Cerminara",
        "rightKo": "Katlyn Cerminara",
        "weight": "Women's Flyweight",
        "section": "announced"
      },
      {
        "left": "Tanner Boser",
        "leftKo": "Tanner Boser",
        "right": "Jhonata Diniz",
        "rightKo": "Jhonata Diniz",
        "weight": "Heavyweight",
        "section": "announced"
      },
      {
        "left": "Mandel Nallo",
        "leftKo": "Mandel Nallo",
        "right": "Nate Landwehr",
        "rightKo": "Nate Landwehr",
        "weight": "Lightweight",
        "section": "announced"
      },
      {
        "left": "Melissa Croden",
        "leftKo": "Melissa Croden",
        "right": "Chelsea Chandler",
        "rightKo": "Chelsea Chandler",
        "weight": "Women's Bantamweight",
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
        "left": "Julien Leblanc",
        "leftKo": "Julien Leblanc",
        "right": "Gilbert Urbina",
        "rightKo": "Gilbert Urbina",
        "weight": "Middleweight",
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
  }
];
