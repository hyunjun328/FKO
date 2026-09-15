// UFC 공식 랭킹 페이지에서 자동 수집한 체급별·P4P 스냅샷을 제공한다.
export type OfficialRankingSnapshot = { checkedAt: string; divisions: Record<string, { champion?: string; entries: string[] }>; mensP4p: string[]; womensP4p: string[] };

export const OFFICIAL_RANKING_SNAPSHOT: OfficialRankingSnapshot = {
  "checkedAt": "2026-09-15",
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
        "Brandon Moreno",
        "Amir Albazi",
        "Sumudaerji",
        "Mitch Raposo",
        "Rei Tsuruya",
        "Charles Johnson",
        "Alessandro Costa"
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
        "Jean Silva",
        "Arnold Allen",
        "Pat Sabatini",
        "Pavel Andrusca",
        "Youssef Zalal",
        "Kevin Vallejos",
        "Melquizael Costa",
        "Steve Garcia",
        "Aaron Pico",
        "Jamall Emmers",
        "Joanderson Brito"
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
        "Jalin Turner"
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
        "Jared Cannonier",
        "Shara Magomedov"
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
        "Curtis Blaydes",
        "Waldo Cortes Acosta",
        "Vitor Petrino",
        "Mario Pinto",
        "Valter Walker",
        "Brando Peričić",
        "Serghei Spivac",
        "Mick Parkin",
        "Shamil Gaziev"
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
      "champion": "Valentina Shevchenko",
      "entries": [
        "Natalia Silva",
        "Alexa Grasso",
        "Erin Blanchfield",
        "Manon Fiorot",
        "Zhang Weili",
        "Wang Cong",
        "Jasmine Jasudavicius",
        "Rose Namajunas",
        "Maycee Barber",
        "Tracy Cortez",
        "Miranda Maverick",
        "Regina Tarin",
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
    "Alexa Grasso",
    "Manon Fiorot",
    "Erin Blanchfield",
    "Tatiana Suarez",
    "Julianna Peña",
    "Virna Jandiroba",
    "Raquel Pennington",
    "Rose Namajunas",
    "Denise Gomes",
    "Maycee Barber"
  ]
};
