// UFC 공식 랭킹 페이지에서 자동 수집한 체급별·P4P 스냅샷을 제공한다.
export type OfficialRankingSnapshot = { checkedAt: string; divisions: Record<string, { champion?: string; entries: string[] }>; mensP4p: string[]; womensP4p: string[] };

export const OFFICIAL_RANKING_SNAPSHOT: OfficialRankingSnapshot = {
  "checkedAt": "2026-08-30",
  "divisions": {
    "flyweight": {
      "champion": "Joshua Van",
      "entries": [
        "Alexandre Pantoja",
        "Manel Kape",
        "Brandon Royval",
        "Tatsuro Taira",
        "Asu Almabayev",
        "Lone’er Kavanagh",
        "Ramazan Temirov",
        "Kyoji Horiguchi",
        "Amir Albazi",
        "Brandon Moreno",
        "Kevin Borjas",
        "Mitch Raposo",
        "Sumudaerji",
        "Charles Johnson",
        "Alessandro Costa"
      ]
    },
    "bantamweight": {
      "champion": "Petr Yan",
      "entries": [
        "Merab Dvalishvili",
        "Umar Nurmagomedov",
        "Sean O'Malley",
        "Mario Bautista",
        "Cory Sandhagen",
        "Song Yadong",
        "David Martinez",
        "Raoni Barcelos",
        "Farid Basharat",
        "Marcus McGhee",
        "Deiveson Figueiredo",
        "Charles Jourdain",
        "Aiemann Zahabi",
        "Bryce Mitchell",
        "Montel Jackson"
      ]
    },
    "featherweight": {
      "champion": "Alexander Volkanovski",
      "entries": [
        "Movsar Evloev",
        "Diego Lopes",
        "Lerone Murphy",
        "Aljamain Sterling",
        "Arnold Allen",
        "Jean Silva",
        "Pat Sabatini",
        "Nathaniel Wood",
        "Youssef Zalal",
        "Kevin Vallejos",
        "Melquizael Costa",
        "Steve Garcia",
        "Aaron Pico",
        "Jamall Emmers",
        "Jose Miguel Delgado"
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
        "Renato Moicano",
        "Benoît Saint Denis",
        "Mateusz Gamrot",
        "Mauricio Ruffy",
        "Tom Nolan",
        "Dan Hooker",
        "Rafael Fiziev",
        "Tofiq Musayev",
        "Grant Dawson"
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
        "Leon Edwards",
        "Joaquin Buckley",
        "Uroš Medić",
        "Kamaru Usman",
        "Mike Malott",
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
        "Michael Venom Page",
        "Anthony Hernandez",
        "Israel Adesanya",
        "Christian Leroy Duncan",
        "Ikram Aliskerov",
        "Bo Nickal",
        "Abus Magomedov",
        "Nursulton Ruziboev"
      ]
    },
    "light-heavyweight": {
      "champion": "Carlos Ulberg",
      "entries": [
        "Alex Pereira",
        "Magomed Ankalaev",
        "Jiří Procházka",
        "Paulo Costa",
        "Jamahal Hill",
        "Khalil Rountree Jr.",
        "Navajo Stirling",
        "Dominick Reyes",
        "Reinier de Ridder",
        "Azamat Murzakanov",
        "Bogdan Guskov",
        "Robert Whittaker",
        "Alonzo Menifield",
        "Johnny Walker",
        "Muhammad Saidov"
      ]
    },
    "heavyweight": {
      "champion": "Tom Aspinall",
      "entries": [
        "Ciryl Gane",
        "Alexander Volkov",
        "Sergei Pavlovich",
        "Alex Pereira",
        "Rizvan Kuniev",
        "Josh Hokit",
        "Waldo Cortes Acosta",
        "Vitor Petrino",
        "Valter Walker",
        "Curtis Blaydes",
        "Brando Peričić",
        "Mario Pinto",
        "Serghei Spivac",
        "Mick Parkin",
        "Ryan Spann"
      ]
    },
    "womens-strawweight": {
      "champion": "Mackenzie Dern",
      "entries": [
        "Zhang Weili",
        "Virna Jandiroba",
        "Tatiana Suarez",
        "Yan Xiaonan",
        "Gillian Robertson",
        "Fatima Kline",
        "Alexia Thainara",
        "Piera Rodriguez",
        "Denise Gomes",
        "Mizuki",
        "Loopy Godinez",
        "Tabatha Ricci",
        "Jaqueline Amorim",
        "Talita Alencar",
        "Amanda Lemos"
      ]
    },
    "womens-flyweight": {
      "champion": "Valentina Shevchenko",
      "entries": [
        "Natalia Silva",
        "Manon Fiorot",
        "Alexa Grasso",
        "Erin Blanchfield",
        "Zhang Weili",
        "Wang Cong",
        "Jasmine Jasudavicius",
        "Rose Namajunas",
        "Maycee Barber",
        "Tracy Cortez",
        "Miranda Maverick",
        "JJ Aldrich",
        "Karine Silva",
        "Eduarda Moura",
        "Carli Judice"
      ]
    },
    "womens-bantamweight": {
      "champion": "Kayla Harrison",
      "entries": [
        "Joselyne Edwards",
        "Norma Dumont",
        "Luana Santos",
        "Ailin Perez",
        "Julianna Peña",
        "Yana Santos",
        "Jacqueline Cavalcanti",
        "Michelle Montague",
        "Melissa Croden",
        "Karol Rosa",
        "Bia Mesquita",
        "Macy Chiasson",
        "Daria Zhelezniakova",
        "Raquel Pennington",
        "Klaudia Sygula"
      ]
    }
  },
  "mensP4p": [
    "Islam Makhachev",
    "Alexander Volkanovski",
    "Petr Yan",
    "Justin Gaethje",
    "Ilia Topuria",
    "Tom Aspinall",
    "Sean Strickland",
    "Merab Dvalishvili",
    "Alex Pereira",
    "Ciryl Gane",
    "Joshua Van",
    "Khamzat Chimaev",
    "Alexandre Pantoja",
    "Arman Tsarukyan",
    "Charles Oliveira"
  ],
  "womensP4p": [
    "Valentina Shevchenko",
    "Kayla Harrison",
    "Zhang Weili",
    "Natalia Silva",
    "Mackenzie Dern",
    "Manon Fiorot",
    "Alexa Grasso",
    "Erin Blanchfield",
    "Julianna Peña",
    "Tatiana Suarez",
    "Virna Jandiroba",
    "Yan Xiaonan",
    "Raquel Pennington",
    "Rose Namajunas",
    "Maycee Barber"
  ]
};
