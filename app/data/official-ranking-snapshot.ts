// UFC 공식 랭킹 페이지에서 자동 수집한 체급별·P4P 스냅샷을 제공한다.
export type OfficialRankingSnapshot = { checkedAt: string; divisions: Record<string, { champion?: string; entries: string[] }>; mensP4p: string[]; womensP4p: string[] };

export const OFFICIAL_RANKING_SNAPSHOT: OfficialRankingSnapshot = {
  "checkedAt": "2026-10-07",
  "divisions": {
    "flyweight": {
      "champion": "Joshua Van",
      "entries": [
        "Manel Kape",
        "Alexandre Pantoja",
        "Brandon Royval",
        "Tatsuro Taira",
        "Asu Almabayev",
        "Lone’er Kavanagh",
        "Ramazan Temirov",
        "Kyoji Horiguchi",
        "Amir Albazi",
        "Brandon Moreno",
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
        "Farid Basharat",
        "Marcus McGhee",
        "Payton Talbott",
        "Montel Jackson",
        "Aiemann Zahabi",
        "Marlon Vera",
        "Bryce Mitchell"
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
        "Kevin Vallejos",
        "Joanderson Brito",
        "Melquizael Costa",
        "Steve Garcia",
        "Aaron Pico",
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
        "Tom Nolan",
        "Rafael Fiziev",
        "Tofiq Musayev",
        "Grant Dawson",
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
        "Joaquin Buckley",
        "Uroš Medić",
        "Leon Edwards",
        "Mike Malott",
        "Kamaru Usman",
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
        "Joe Pyfer",
        "Brendan Allen",
        "Caio Borralho",
        "Gregory Rodrigues",
        "Anthony Hernandez",
        "Israel Adesanya",
        "Christian Leroy Duncan",
        "Ikram Aliskerov",
        "Bo Nickal",
        "Abus Magomedov",
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
        "Paulo Costa",
        "Khalil Rountree Jr.",
        "Navajo Stirling",
        "Dominick Reyes",
        "Reinier de Ridder",
        "Azamat Murzakanov",
        "Alonzo Menifield",
        "Bogdan Guskov",
        "Robert Whittaker",
        "Muhammad Saidov",
        "Modestas Bukauskas",
        "Abdul Rakhman Yakhyaev"
      ]
    },
    "heavyweight": {
      "champion": "Ciryl Gane",
      "entries": [
        "Tom Aspinall",
        "Sergei Pavlovich",
        "Alex Pereira",
        "Alexander Volkov",
        "Rizvan Kuniev",
        "Josh Hokit",
        "Curtis Blaydes",
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
        "Alexia Thainara",
        "Piera Rodriguez",
        "Yan Xiaonan",
        "Mizuki",
        "Loopy Godinez",
        "Tabatha Ricci",
        "Jaqueline Amorim",
        "Talita Alencar",
        "Amanda Lemos"
      ]
    },
    "womens-flyweight": {
      "champion": "Natalia Silva",
      "entries": [
        "Valentina Shevchenko",
        "Alexa Grasso",
        "Erin Blanchfield",
        "Manon Fiorot",
        "Zhang Weili",
        "Jasmine Jasudavicius",
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
        "Melissa Croden",
        "Karol Rosa",
        "Bia Mesquita",
        "Nora Cornolle",
        "Macy Chiasson",
        "Daria Zhelezniakova",
        "Raquel Pennington"
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
    "Erin Blanchfield",
    "Tatiana Suarez",
    "Julianna Peña",
    "Virna Jandiroba",
    "Rose Namajunas",
    "Raquel Pennington",
    "Denise Gomes",
    "Maycee Barber"
  ]
};
