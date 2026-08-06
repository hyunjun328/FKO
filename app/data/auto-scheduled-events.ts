// 직접 수집한 UFC 예정 대회 목록을 화면 일정에 보조 데이터로 제공한다.
export type AutoScheduledBout = { left: string; leftKo: string; right: string; rightKo: string; weight: string; section: "main" | "prelims" | "announced" };
export type AutoScheduledEvent = { id: string; title: string; date: string; sourceUrl: string; subtitle?: string; startUtc?: string; venue?: string; city?: string; bouts?: AutoScheduledBout[] };

export const AUTO_SCHEDULED_EVENTS: AutoScheduledEvent[] = [
  {
    "id": "ufcstats-2026-08-09-gamrot-vs-salkilld",
    "title": "Gamrot vs Salkilld",
    "date": "2026-08-09",
    "sourceUrl": "https://www.ufc.com/event/ufc-fight-night-august-08-2026",
    "startUtc": "2026-08-09T00:00:00Z",
    "venue": "Meta APEX Las Vegas , NV United States",
    "bouts": [
      {
        "left": "Mateusz Gamrot",
        "leftKo": "Mateusz Gamrot",
        "right": "Quillan Salkilld",
        "rightKo": "Quillan Salkilld",
        "weight": "Lightweight",
        "section": "main"
      },
      {
        "left": "Diego Ferreira",
        "leftKo": "Diego Ferreira",
        "right": "Billy Quarantillo",
        "rightKo": "Billy Quarantillo",
        "weight": "Lightweight",
        "section": "announced"
      },
      {
        "left": "Darren Elkins",
        "leftKo": "Darren Elkins",
        "right": "Yadier del Valle",
        "rightKo": "Yadier del Valle",
        "weight": "Featherweight",
        "section": "announced"
      },
      {
        "left": "Amanda Lemos",
        "leftKo": "Amanda Lemos",
        "right": "Alexia Thainara",
        "rightKo": "Alexia Thainara",
        "weight": "Women's Strawweight",
        "section": "announced"
      },
      {
        "left": "Billy Ray Goff",
        "leftKo": "Billy Ray Goff",
        "right": "Ty Miller",
        "rightKo": "Ty Miller",
        "weight": "Welterweight",
        "section": "announced"
      }
    ]
  },
  {
    "id": "ufcstats-2026-08-16-makhachev-vs-machado-garry",
    "title": "Makhachev vs Machado Garry",
    "date": "2026-08-16",
    "sourceUrl": "https://www.ufc.com/event/ufc-330",
    "startUtc": "2026-08-16T01:00:00Z",
    "venue": "Xfinity Mobile Arena Philadelphia , PA United States",
    "bouts": [
      {
        "left": "Islam Makhachev",
        "leftKo": "Islam Makhachev",
        "right": "Ian Machado Garry",
        "rightKo": "Ian Machado Garry",
        "weight": "Welterweight Title",
        "section": "main"
      },
      {
        "left": "Mackenzie Dern",
        "leftKo": "Mackenzie Dern",
        "right": "Gillian Robertson",
        "rightKo": "Gillian Robertson",
        "weight": "Women's Strawweight Title",
        "section": "announced"
      },
      {
        "left": "Mansur Abdul-Malik",
        "leftKo": "Mansur Abdul-Malik",
        "right": "Dustin Stoltzfus",
        "rightKo": "Dustin Stoltzfus",
        "weight": "Middleweight",
        "section": "announced"
      },
      {
        "left": "Edson Barboza",
        "leftKo": "Edson Barboza",
        "right": "Esteban Ribovics",
        "rightKo": "Esteban Ribovics",
        "weight": "Lightweight",
        "section": "announced"
      }
    ]
  },
  {
    "id": "ufcstats-2026-08-23-hernandez-vs-rodrigues",
    "title": "Hernandez vs Rodrigues",
    "date": "2026-08-23",
    "sourceUrl": "https://www.ufc.com/event/ufc-fight-night-august-22-2026",
    "startUtc": "2026-08-23T00:00:00Z",
    "venue": "Golden 1 Center Sacramento , CA United States",
    "bouts": [
      {
        "left": "Anthony Hernandez",
        "leftKo": "Anthony Hernandez",
        "right": "Gregory Rodrigues",
        "rightKo": "Gregory Rodrigues",
        "weight": "Middleweight",
        "section": "main"
      },
      {
        "left": "Serghei Spivac",
        "leftKo": "Serghei Spivac",
        "right": "Vitor Petrino",
        "rightKo": "Vitor Petrino",
        "weight": "Heavyweight",
        "section": "announced"
      },
      {
        "left": "Reinier de Ridder",
        "leftKo": "Reinier de Ridder",
        "right": "Roman Dolidze",
        "rightKo": "Roman Dolidze",
        "weight": "Light Heavyweight",
        "section": "announced"
      },
      {
        "left": "Carli Judice",
        "leftKo": "Carli Judice",
        "right": "Jeisla Chaves",
        "rightKo": "Jeisla Chaves",
        "weight": "Women's Strawweight",
        "section": "announced"
      },
      {
        "left": "Kennedy Nzechukwu",
        "leftKo": "Kennedy Nzechukwu",
        "right": "Shamil Gaziev",
        "rightKo": "Shamil Gaziev",
        "weight": "Heavyweight",
        "section": "announced"
      }
    ]
  },
  {
    "id": "ufcstats-2026-08-29-nurmagomedov-vs-song",
    "title": "Nurmagomedov vs Song",
    "date": "2026-08-29",
    "sourceUrl": "https://www.ufc.com/event/ufc-fight-night-august-29-2026",
    "startUtc": "2026-08-29T10:00:00Z",
    "venue": "Oriental Sports Center Pudong District China",
    "bouts": [
      {
        "left": "Umar Nurmagomedov",
        "leftKo": "Umar Nurmagomedov",
        "right": "Song Yadong",
        "rightKo": "Song Yadong",
        "weight": "Bantamweight",
        "section": "main"
      },
      {
        "left": "Yan Xiaonan",
        "leftKo": "Yan Xiaonan",
        "right": "Denise Gomes",
        "rightKo": "Denise Gomes",
        "weight": "Women's Strawweight",
        "section": "announced"
      },
      {
        "left": "Jack Jenkins",
        "leftKo": "Jack Jenkins",
        "right": "Sean Woodson",
        "rightKo": "Sean Woodson",
        "weight": "Featherweight",
        "section": "announced"
      },
      {
        "left": "Aoriqileng",
        "leftKo": "Aoriqileng",
        "right": "Kai Asakura",
        "rightKo": "Kai Asakura",
        "weight": "Bantamweight",
        "section": "announced"
      },
      {
        "left": "Sumudaerji",
        "leftKo": "Sumudaerji",
        "right": "Alex Perez",
        "rightKo": "Alex Perez",
        "weight": "Flyweight",
        "section": "announced"
      },
      {
        "left": "Namsrai Batbayar",
        "leftKo": "Namsrai Batbayar",
        "right": "Andre Lima",
        "rightKo": "Andre Lima",
        "weight": "Flyweight",
        "section": "announced"
      },
      {
        "left": "Rei Tsuruya",
        "leftKo": "Rei Tsuruya",
        "right": "Kevin Borjas",
        "rightKo": "Kevin Borjas",
        "weight": "Flyweight",
        "section": "announced"
      },
      {
        "left": "Ce Liu",
        "leftKo": "Ce Liu",
        "right": "Junior Tafa",
        "rightKo": "Junior Tafa",
        "weight": "Light Heavyweight",
        "section": "announced"
      },
      {
        "left": "Xiong Jingnan",
        "leftKo": "Xiong Jingnan",
        "right": "Julia Polastri",
        "rightKo": "Julia Polastri",
        "weight": "Women's Strawweight",
        "section": "announced"
      }
    ]
  },
  {
    "id": "ufcstats-2026-09-05-hooker-vs-parnasse",
    "title": "Hooker vs Parnasse",
    "date": "2026-09-05",
    "sourceUrl": "https://www.ufc.com/event/ufc-fight-night-september-05-2026",
    "startUtc": "2026-09-05T19:00:00Z",
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
        "left": "Nathaniel Wood",
        "leftKo": "Nathaniel Wood",
        "right": "Mairon Santos",
        "rightKo": "Mairon Santos",
        "weight": "Featherweight",
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
        "left": "Morgan Charriere",
        "leftKo": "Morgan Charriere",
        "right": "Felipe Lima",
        "rightKo": "Felipe Lima",
        "weight": "Featherweight",
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
        "left": "Matthieu Letho Duclos",
        "leftKo": "Matthieu Letho Duclos",
        "right": "Luis Felipe Dias",
        "rightKo": "Luis Felipe Dias",
        "weight": "Middleweight",
        "section": "announced"
      },
      {
        "left": "Mario Pinto",
        "leftKo": "Mario Pinto",
        "right": "Ryan Spann",
        "rightKo": "Ryan Spann",
        "weight": "Heavyweight",
        "section": "announced"
      }
    ]
  },
  {
    "id": "ufcstats-2026-09-12-rodriguez-vs-silva",
    "title": "Rodriguez vs Silva",
    "date": "2026-09-12",
    "sourceUrl": "https://www.ufc.com/event/ufc-fight-night-september-12-2026",
    "startUtc": "2026-09-12T21:00:00Z",
    "venue": "Desert Diamond Arena Glendale , AZ United States",
    "bouts": [
      {
        "left": "Yair Rodriguez",
        "leftKo": "Yair Rodriguez",
        "right": "Jean Silva",
        "rightKo": "Jean Silva",
        "weight": "Featherweight",
        "section": "main"
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
        "left": "Manon Fiorot",
        "leftKo": "Manon Fiorot",
        "right": "Alexa Grasso",
        "rightKo": "Alexa Grasso",
        "weight": "Women's Flyweight",
        "section": "announced"
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
        "left": "David Martinez",
        "leftKo": "David Martinez",
        "right": "Dan Ige",
        "rightKo": "Dan Ige",
        "weight": "Bantamweight",
        "section": "announced"
      },
      {
        "left": "Ignacio Bahamondes",
        "leftKo": "Ignacio Bahamondes",
        "right": "Muslim Salikhov",
        "rightKo": "Muslim Salikhov",
        "weight": "Welterweight",
        "section": "announced"
      },
      {
        "left": "Tim Elliott",
        "leftKo": "Tim Elliott",
        "right": "Edgar Chairez",
        "rightKo": "Edgar Chairez",
        "weight": "Flyweight",
        "section": "announced"
      },
      {
        "left": "Kelvin Gastelum",
        "leftKo": "Kelvin Gastelum",
        "right": "Yousri Belgaroui",
        "rightKo": "Yousri Belgaroui",
        "weight": "Middleweight",
        "section": "announced"
      },
      {
        "left": "JJ Aldrich",
        "leftKo": "JJ Aldrich",
        "right": "Regina Tarin",
        "rightKo": "Regina Tarin",
        "weight": "Women's Flyweight",
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
        "left": "Gable Steveson",
        "leftKo": "Gable Steveson",
        "right": "Sean Sharaf",
        "rightKo": "Sean Sharaf",
        "weight": "Heavyweight",
        "section": "announced"
      },
      {
        "left": "Tai Tuivasa",
        "leftKo": "Tai Tuivasa",
        "right": "Robelis Despaigne",
        "rightKo": "Robelis Despaigne",
        "weight": "Heavyweight",
        "section": "announced"
      },
      {
        "left": "Ryan Gandra",
        "leftKo": "Ryan Gandra",
        "right": "Ozzy Diaz",
        "rightKo": "Ozzy Diaz",
        "weight": "Middleweight",
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
        "left": "Marlon Vera",
        "leftKo": "Marlon Vera",
        "right": "Charles Jourdain",
        "rightKo": "Charles Jourdain",
        "weight": "Bantamweight",
        "section": "announced"
      },
      {
        "left": "Alonzo Menifield",
        "leftKo": "Alonzo Menifield",
        "right": "Iwo Baraniewski",
        "rightKo": "Iwo Baraniewski",
        "weight": "Light Heavyweight",
        "section": "announced"
      },
      {
        "left": "Giga Chikadze",
        "leftKo": "Giga Chikadze",
        "right": "Joanderson Brito",
        "rightKo": "Joanderson Brito",
        "weight": "Featherweight",
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
        "left": "Casey O'Neill",
        "leftKo": "Casey O'Neill",
        "right": "Eduarda Moura",
        "rightKo": "Eduarda Moura",
        "weight": "Women's Flyweight",
        "section": "announced"
      },
      {
        "left": "Edmen Shahbazyan",
        "leftKo": "Edmen Shahbazyan",
        "right": "Brunno Ferreira",
        "rightKo": "Brunno Ferreira",
        "weight": "Middleweight",
        "section": "announced"
      },
      {
        "left": "Michael Aswell Jr.",
        "leftKo": "Michael Aswell Jr.",
        "right": "JooSang Yoo",
        "rightKo": "JooSang Yoo",
        "weight": "Featherweight",
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
        "left": "Mandel Nallo",
        "leftKo": "Mandel Nallo",
        "right": "Nate Landwehr",
        "rightKo": "Nate Landwehr",
        "weight": "Lightweight",
        "section": "announced"
      }
    ]
  }
];
