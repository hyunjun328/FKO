// UFC 공식 랭킹 페이지에서 자동 수집한 체급별·P4P 스냅샷을 제공한다.
export type OfficialRankingSnapshot = { checkedAt: string; divisions: Record<string, { champion?: string; entries: string[] }>; mensP4p: string[]; womensP4p: string[] };

export const OFFICIAL_RANKING_SNAPSHOT: OfficialRankingSnapshot = {
  "checkedAt": "2026-10-28",
  "divisions": {
    "flyweight": {
      "champion": "Joshua Van",
      "entries": [
        "Manel Kape",
        "Alexandre Pantoja",
        "Brandon Royval",
        "Tatsuro Taira",
        "Lone’er Kavanagh",
        "Asu Almabayev",
        "Kyoji Horiguchi",
        "Amir Albazi",
        "Brandon Moreno",
        "Ramazan Temirov",
        "Sumudaerji",
        "Mitch Raposo",
        "Imanol Rodriguez",
        "Rei Tsuruya",
        "Charles Johnson"
      ]
    },
    "bantamweight": {
      "champion": "Petr Yan",
      "entries": [
        "Merab Dvalishvili",
        "Song Yadong",
        "Sean O'Malley",
        "Mario Bautista",
        "Umar Nurmagomedov",
        "Cory Sandhagen",
        "David Martinez",
        "Raul Rosas Jr.",
        "Marcus McGhee",
        "Payton Talbott",
        "Montel Jackson",
        "Aiemann Zahabi",
        "Bryce Mitchell",
        "Marlon Vera",
        "Raoni Barcelos"
      ]
    },
    "featherweight": {
      "champion": "Alexander Volkanovski",
      "entries": [
        "Movsar Evloev",
        "Diego Lopes",
        "Lerone Murphy",
        "Aljamain Sterling",
        "Jean Silva",
        "Arnold Allen",
        "Pat Sabatini",
        "Pavel Andrusca",
        "Youssef Zalal",
        "Aaron Pico",
        "Kevin Vallejos",
        "Joanderson Brito",
        "Melquizael Costa",
        "Steve Garcia",
        "Jamall Emmers"
      ]
    },
    "lightweight": {
      "champion": "Justin Gaethje",
      "entries": [
        "Ilia Topuria",
        "Arman Tsarukyan",
        "Charles Oliveira",
        "Max Holloway",
        "Paddy Pimblett",
        "Quillan Salkilld",
        "Benoît Saint Denis",
        "Renato Moicano",
        "Mateusz Gamrot",
        "Mauricio Ruffy",
        "Grant Dawson",
        "Tom Nolan",
        "Tofiq Musayev",
        "Rafael Fiziev",
        "Esteban Ribovics"
      ]
    },
    "welterweight": {
      "champion": "Islam Makhachev",
      "entries": [
        "Carlos Prates",
        "Ian Machado Garry",
        "Michael Morales",
        "Jack Della Maddalena",
        "Sean Brady",
        "Gabriel Bonfim",
        "Belal Muhammad",
        "Mike Malott",
        "Uroš Medić",
        "Leon Edwards",
        "Kamaru Usman",
        "Joaquin Buckley",
        "Yaroslav Amosov",
        "Kevin Holland",
        "Daniel Rodriguez"
      ]
    },
    "middleweight": {
      "champion": "Sean Strickland",
      "entries": [
        "Khamzat Chimaev",
        "Dricus Du Plessis",
        "Nassourdine Imavov",
        "Brendan Allen",
        "Joe Pyfer",
        "Caio Borralho",
        "Gregory Rodrigues",
        "Anthony Hernandez",
        "Abus Magomedov",
        "Israel Adesanya",
        "Ikram Aliskerov",
        "Christian Leroy Duncan",
        "Bo Nickal",
        "Roman Kopylov",
        "Edmen Shahbazyan"
      ]
    },
    "light-heavyweight": {
      "champion": "Carlos Ulberg",
      "entries": [
        "Alex Pereira",
        "Magomed Ankalaev",
        "Jiří Procházka",
        "Dominick Reyes",
        "Paulo Costa",
        "Khalil Rountree Jr.",
        "Navajo Stirling",
        "Reinier de Ridder",
        "Alonzo Menifield",
        "Bogdan Guskov",
        "Robert Whittaker",
        "Muhammad Saidov",
        "Abdul Rakhman Yakhyaev",
        "Azamat Murzakanov",
        "Modestas Bukauskas"
      ]
    },
    "heavyweight": {
      "champion": "Ciryl Gane",
      "entries": [
        "Tom Aspinall",
        "Alexander Volkov",
        "Alex Pereira",
        "Sergei Pavlovich",
        "Josh Hokit",
        "Curtis Blaydes",
        "Rizvan Kuniev",
        "Waldo Cortes Acosta",
        "Vitor Petrino",
        "Mario Pinto",
        "Valter Walker",
        "Johnny Walker",
        "Brando Peričić",
        "Serghei Spivac",
        "Anthony Wint"
      ]
    },
    "womens-strawweight": {
      "champion": "Mackenzie Dern",
      "entries": [
        "Zhang Weili",
        "Virna Jandiroba",
        "Tatiana Suarez",
        "Denise Gomes",
        "Gillian Robertson",
        "Fatima Kline",
        "Iasmin Lucindo",
        "Alexia Thainara",
        "Loopy Godinez",
        "Piera Rodriguez",
        "Yan Xiaonan",
        "Mizuki",
        "Tabatha Ricci",
        "Talita Alencar",
        "Amanda Lemos"
      ]
    },
    "womens-flyweight": {
      "champion": "Natalia Silva",
      "entries": [
        "Valentina Shevchenko",
        "Alexa Grasso",
        "Jasmine Jasudavicius",
        "Manon Fiorot",
        "Erin Blanchfield",
        "Zhang Weili",
        "Rose Namajunas",
        "Wang Cong",
        "Maycee Barber",
        "Tracy Cortez",
        "Casey O'Neill",
        "Miranda Maverick",
        "Regina Tarin",
        "Karine Silva",
        "Carli Judice"
      ]
    },
    "womens-bantamweight": {
      "champion": "Kayla Harrison",
      "entries": [
        "Joselyne Edwards",
        "Ailin Perez",
        "Norma Dumont",
        "Luana Santos",
        "Julianna Peña",
        "Yana Santos",
        "Jacqueline Cavalcanti",
        "Michelle Montague",
        "Chelsea Chandler",
        "Karol Rosa",
        "Bia Mesquita",
        "Alice Pereira",
        "Nora Cornolle",
        "Macy Chiasson",
        "Melissa Croden"
      ]
    }
  },
  "mensP4p": [
    "Islam Makhachev",
    "Alexander Volkanovski",
    "Justin Gaethje",
    "Petr Yan",
    "Ilia Topuria",
    "Joshua Van",
    "Sean Strickland",
    "Tom Aspinall",
    "Merab Dvalishvili",
    "Alex Pereira",
    "Ciryl Gane",
    "Khamzat Chimaev",
    "Arman Tsarukyan",
    "Alexandre Pantoja",
    "Carlos Ulberg"
  ],
  "womensP4p": [
    "Valentina Shevchenko",
    "Kayla Harrison",
    "Zhang Weili",
    "Natalia Silva",
    "Mackenzie Dern",
    "Alexa Grasso",
    "Manon Fiorot",
    "Tatiana Suarez",
    "Julianna Peña",
    "Virna Jandiroba",
    "Jasmine Jasudavicius",
    "Rose Namajunas",
    "Raquel Pennington",
    "Erin Blanchfield",
    "Denise Gomes"
  ]
};
