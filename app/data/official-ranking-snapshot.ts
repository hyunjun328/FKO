// UFC 공식 랭킹 페이지에서 자동 수집한 체급별·P4P 스냅샷을 제공한다.
export type OfficialRankingSnapshot = { checkedAt: string; divisions: Record<string, { champion?: string; entries: string[] }>; mensP4p: string[]; womensP4p: string[] };

export const OFFICIAL_RANKING_SNAPSHOT: OfficialRankingSnapshot = {
  "checkedAt": "2026-11-13",
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
        "Youssef Zalal",
        "Aaron Pico",
        "Kevin Vallejos",
        "Joanderson Brito",
        "Melquizael Costa",
        "Steve Garcia",
        "Jamall Emmers",
        "Patricio Pitbull"
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
        "Tom Nolan",
        "Benoît Saint Denis",
        "Mateusz Gamrot",
        "Mauricio Ruffy",
        "Grant Dawson",
        "Tofiq Musayev",
        "Rafael Fiziev",
        "Renato Moicano",
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
        "Jacobe Smith",
        "Kevin Holland"
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
        "Rizvan Kuniev",
        "Curtis Blaydes",
        "Johnny Walker",
        "Vitor Petrino",
        "Mario Pinto",
        "Valter Walker",
        "Waldo Cortes Acosta",
        "Brando Peričić",
        "Serghei Spivac",
        "Anthony Wint"
      ]
    },
    "womens-strawweight": {
      "champion": "Mackenzie Dern",
      "entries": [
        "Tatiana Suarez",
        "Zhang Weili",
        "Virna Jandiroba",
        "Denise Gomes",
        "Gillian Robertson",
        "Fatima Kline",
        "Piera Rodriguez",
        "Iasmin Lucindo",
        "Alexia Thainara",
        "Loopy Godinez",
        "Yan Xiaonan",
        "Mizuki",
        "Tabatha Ricci",
        "Amanda Lemos",
        "Sam Hughes"
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
        "Karine Silva",
        "Miranda Maverick",
        "Regina Tarin",
        "Carli Judice"
      ]
    },
    "womens-bantamweight": {
      "champion": "Kayla Harrison",
      "entries": [
        "Joselyne Edwards",
        "Ailin Perez",
        "Luana Santos",
        "Norma Dumont",
        "Julianna Peña",
        "Jacqueline Cavalcanti",
        "Michelle Montague",
        "Yana Santos",
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
    "Petr Yan",
    "Justin Gaethje",
    "Ilia Topuria",
    "Joshua Van",
    "Sean Strickland",
    "Tom Aspinall",
    "Merab Dvalishvili",
    "Alex Pereira",
    "Khamzat Chimaev",
    "Ciryl Gane",
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
    "Jasmine Jasudavicius",
    "Erin Blanchfield",
    "Julianna Peña",
    "Virna Jandiroba",
    "Rose Namajunas",
    "Denise Gomes",
    "Raquel Pennington"
  ]
};
