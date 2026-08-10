// 직접 수집한 UFC 예정 대회 목록을 화면 일정에 보조 데이터로 제공한다.
export type AutoScheduledBout = { left: string; leftKo: string; right: string; rightKo: string; weight: string; section: "main" | "prelims" | "announced" };
export type AutoScheduledEvent = { id: string; title: string; date: string; sourceUrl: string; subtitle?: string; startUtc?: string; prelimsUtc?: string; venue?: string; city?: string; bouts?: AutoScheduledBout[] };

export const AUTO_SCHEDULED_EVENTS: AutoScheduledEvent[] = [
  {
    "id": "ufcstats-2026-08-16-makhachev-vs-machado-garry",
    "title": "Makhachev vs Machado Garry",
    "date": "2026-08-16",
    "sourceUrl": "https://www.ufc.com/event/ufc-330",
    "startUtc": "2026-08-16T01:00:00Z",
    "prelimsUtc": "2026-08-15T23:00:00Z",
    "venue": "Xfinity Mobile Arena Philadelphia , PA United States",
    "bouts": [
      {
        "left": "Islam Makhachev",
        "leftKo": "Islam Makhachev",
        "right": "Ian Machado Garry",
        "rightKo": "Ian Machado Garry",
        "weight": "웰터급 Title",
        "section": "main"
      },
      {
        "left": "Mackenzie Dern",
        "leftKo": "Mackenzie Dern",
        "right": "Gillian Robertson",
        "rightKo": "Gillian Robertson",
        "weight": "여성 스트로급 Title",
        "section": "announced"
      },
      {
        "left": "Mansur Abdul-Malik",
        "leftKo": "Mansur Abdul-Malik",
        "right": "Dustin Stoltzfus",
        "rightKo": "Dustin Stoltzfus",
        "weight": "미들급",
        "section": "announced"
      },
      {
        "left": "Edson Barboza",
        "leftKo": "Edson Barboza",
        "right": "Esteban Ribovics",
        "rightKo": "Esteban Ribovics",
        "weight": "라이트급",
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
    "prelimsUtc": "2026-08-22T21:00:00Z",
    "venue": "Golden 1 Center Sacramento , CA United States",
    "bouts": [
      {
        "left": "Anthony Hernandez",
        "leftKo": "Anthony Hernandez",
        "right": "Gregory Rodrigues",
        "rightKo": "Gregory Rodrigues",
        "weight": "미들급",
        "section": "main"
      },
      {
        "left": "Serghei Spivac",
        "leftKo": "Serghei Spivac",
        "right": "Vitor Petrino",
        "rightKo": "Vitor Petrino",
        "weight": "헤비급",
        "section": "announced"
      },
      {
        "left": "Reinier de Ridder",
        "leftKo": "Reinier de Ridder",
        "right": "Roman Dolidze",
        "rightKo": "Roman Dolidze",
        "weight": "라이트 헤비급",
        "section": "announced"
      },
      {
        "left": "Carli Judice",
        "leftKo": "Carli Judice",
        "right": "Jeisla Chaves",
        "rightKo": "Jeisla Chaves",
        "weight": "여성 스트로급",
        "section": "announced"
      },
      {
        "left": "Kennedy Nzechukwu",
        "leftKo": "Kennedy Nzechukwu",
        "right": "Shamil Gaziev",
        "rightKo": "Shamil Gaziev",
        "weight": "헤비급",
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
    "prelimsUtc": "2026-08-29T07:00:00Z",
    "venue": "Oriental Sports Center Pudong District China",
    "bouts": [
      {
        "left": "Umar Nurmagomedov",
        "leftKo": "Umar Nurmagomedov",
        "right": "Song Yadong",
        "rightKo": "Song Yadong",
        "weight": "밴텀급",
        "section": "main"
      },
      {
        "left": "Yan Xiaonan",
        "leftKo": "Yan Xiaonan",
        "right": "Denise Gomes",
        "rightKo": "Denise Gomes",
        "weight": "여성 스트로급",
        "section": "announced"
      },
      {
        "left": "Aoriqileng",
        "leftKo": "Aoriqileng",
        "right": "Kai Asakura",
        "rightKo": "Kai Asakura",
        "weight": "밴텀급",
        "section": "announced"
      },
      {
        "left": "Sumudaerji",
        "leftKo": "Sumudaerji",
        "right": "Alex Perez",
        "rightKo": "Alex Perez",
        "weight": "플라이급",
        "section": "announced"
      },
      {
        "left": "Ce Liu",
        "leftKo": "Ce Liu",
        "right": "Junior Tafa",
        "rightKo": "Junior Tafa",
        "weight": "라이트 헤비급",
        "section": "announced"
      },
      {
        "left": "Namsrai Batbayar",
        "leftKo": "Namsrai Batbayar",
        "right": "Andre Lima",
        "rightKo": "Andre Lima",
        "weight": "플라이급",
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
    "prelimsUtc": "2026-09-05T16:00:00Z",
    "venue": "Accor Arena Paris France",
    "bouts": [
      {
        "left": "Dan Hooker",
        "leftKo": "Dan Hooker",
        "right": "Salahdine Parnasse",
        "rightKo": "Salahdine Parnasse",
        "weight": "라이트급",
        "section": "main"
      },
      {
        "left": "Michael Venom Page",
        "leftKo": "Michael Venom Page",
        "right": "Nursulton Ruziboev",
        "rightKo": "Nursulton Ruziboev",
        "weight": "미들급",
        "section": "announced"
      },
      {
        "left": "Morgan Charriere",
        "leftKo": "Morgan Charriere",
        "right": "Felipe Lima",
        "rightKo": "Felipe Lima",
        "weight": "페더급",
        "section": "announced"
      }
    ]
  },
  {
    "id": "ufcstats-2026-09-13-rodriguez-vs-silva",
    "title": "Rodriguez vs Silva",
    "date": "2026-09-13",
    "sourceUrl": "https://www.ufc.com/event/ufc-fight-night-september-12-2026",
    "startUtc": "2026-09-13T00:00:00Z",
    "prelimsUtc": "2026-09-12T21:00:00Z",
    "venue": "Desert Diamond Arena Glendale , AZ United States",
    "bouts": [
      {
        "left": "Yair Rodriguez",
        "leftKo": "Yair Rodriguez",
        "right": "Jean Silva",
        "rightKo": "Jean Silva",
        "weight": "페더급",
        "section": "main"
      },
      {
        "left": "Brandon Moreno",
        "leftKo": "Brandon Moreno",
        "right": "Joseph Morales",
        "rightKo": "Joseph Morales",
        "weight": "플라이급",
        "section": "announced"
      },
      {
        "left": "Tommy McMillen",
        "leftKo": "Tommy McMillen",
        "right": "Marwan Rahiki",
        "rightKo": "Marwan Rahiki",
        "weight": "페더급",
        "section": "announced"
      },
      {
        "left": "Manon Fiorot",
        "leftKo": "Manon Fiorot",
        "right": "Alexa Grasso",
        "rightKo": "Alexa Grasso",
        "weight": "여성 플라이급",
        "section": "announced"
      },
      {
        "left": "Waldo Cortes Acosta",
        "leftKo": "Waldo Cortes Acosta",
        "right": "Curtis Blaydes",
        "rightKo": "Curtis Blaydes",
        "weight": "헤비급",
        "section": "announced"
      },
      {
        "left": "David Martinez",
        "leftKo": "David Martinez",
        "right": "Dan Ige",
        "rightKo": "Dan Ige",
        "weight": "밴텀급",
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
        "weight": "플라이급 Title",
        "section": "main"
      },
      {
        "left": "Arman Tsarukyan",
        "leftKo": "Arman Tsarukyan",
        "right": "Mauricio Ruffy",
        "rightKo": "Mauricio Ruffy",
        "weight": "라이트급",
        "section": "announced"
      },
      {
        "left": "Patricio Pitbull",
        "leftKo": "Patricio Pitbull",
        "right": "Dooho Choi",
        "rightKo": "Dooho Choi",
        "weight": "페더급",
        "section": "announced"
      },
      {
        "left": "Renato Moicano",
        "leftKo": "Renato Moicano",
        "right": "Brian Ortega",
        "rightKo": "Brian Ortega",
        "weight": "라이트급",
        "section": "announced"
      },
      {
        "left": "Alonzo Menifield",
        "leftKo": "Alonzo Menifield",
        "right": "Iwo Baraniewski",
        "rightKo": "Iwo Baraniewski",
        "weight": "라이트 헤비급",
        "section": "announced"
      }
    ]
  },
  {
    "id": "ufcstats-2026-09-26-tbd-vs-tbd",
    "title": "TBD vs TBD",
    "date": "2026-09-26",
    "sourceUrl": "https://www.ufc.com/event/ufc-fight-night-september-26-2026",
    "startUtc": "2026-09-26T22:00:00Z",
    "prelimsUtc": "2026-09-26T20:00:00Z",
    "venue": "Meta APEX Las Vegas , NV United States"
  },
  {
    "id": "ufcstats-2026-10-04-tbd-vs-tbd",
    "title": "TBD vs TBD",
    "date": "2026-10-04",
    "sourceUrl": "https://www.ufc.com/event/ufc-332",
    "startUtc": "2026-10-04T01:00:00Z",
    "prelimsUtc": "2026-10-03T23:00:00Z",
    "venue": "Delta Center Salt Lake City , UT United States"
  }
];
