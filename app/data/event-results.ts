// 자동 수집한 완료 UFC 대회의 경기 결과를 화면에 제공한다.
export type EventResult = {
  eventId: string; completed: true; sourceUrl: string; verifiedAt: string;
  bouts: Array<{ winner: string | null; loser: string | null; method: string; round: number | null; time: string | null }>;
};

export const EVENT_RESULTS: EventResult[] = [
  {
    "eventId": "ufc-fight-night-belgrade-2026",
    "completed": true,
    "sourceUrl": "https://www.sherdog.com/events/UFC-Fight-Night-283-Medic-vs-Rodriguez-112723",
    "verifiedAt": "2026-08-25T03:49:53.112562+00:00",
    "bouts": [
      {
        "winner": "Uros Medic",
        "loser": "Daniel Rodriguez",
        "method": "TKO (Punches)",
        "round": 1,
        "time": "0:30"
      },
      {
        "winner": "Navajo Stirling",
        "loser": "Jan Blachowicz",
        "method": "TKO (Elbows and Punches)",
        "round": 1,
        "time": "2:56"
      },
      {
        "winner": "Aleksandar Rakic",
        "loser": "Marcin Tybura",
        "method": "Decision (Unanimous)",
        "round": 3,
        "time": "5:00"
      },
      {
        "winner": "Robert Valentin",
        "loser": "Dusko Todorovic",
        "method": "Submission (Guillotine Choke)",
        "round": 1,
        "time": "4:14"
      },
      {
        "winner": "Gilbert Urbina",
        "loser": "Vlastislav Cepo",
        "method": "TKO (Elbows and Punches)",
        "round": 1,
        "time": "1:01"
      },
      {
        "winner": "Noah Gugnon",
        "loser": "Milos Janicic",
        "method": "Submission (Rear-Naked Choke)",
        "round": 1,
        "time": "1:21"
      },
      {
        "winner": "Tofiq Musayev",
        "loser": "Ludovit Klein",
        "method": "TKO (Punches)",
        "round": 2,
        "time": "4:07"
      },
      {
        "winner": "Michael Oliveira",
        "loser": "Oban Elliott",
        "method": "TKO (Punches)",
        "round": 1,
        "time": "1:49"
      },
      {
        "winner": "Borislav Nikolic",
        "loser": "Mark Vologdin",
        "method": "Decision (Unanimous)",
        "round": 3,
        "time": "5:00"
      },
      {
        "winner": "Bogdan Grad",
        "loser": "Dennis Buzukja",
        "method": "Submission (Arm-Triangle Choke)",
        "round": 2,
        "time": "4:33"
      },
      {
        "winner": "Mateusz Rebecki",
        "loser": "Kyle Prepolec",
        "method": "TKO (Punches)",
        "round": 1,
        "time": "4:41"
      },
      {
        "winner": "Nina Nikolija Milosevic",
        "loser": "Hailey Cowan",
        "method": "TKO (Punch to the Body)",
        "round": 1,
        "time": "3:41"
      },
      {
        "winner": "Jovan Leka",
        "loser": "Alexander Poppeck",
        "method": "TKO (Body Kick and Punches)",
        "round": 1,
        "time": "2:22"
      },
      {
        "winner": "Stephanie Luciano",
        "loser": "Marina Spasic",
        "method": "Submission (Rear-Naked Choke)",
        "round": 1,
        "time": "3:30"
      }
    ]
  },
  {
    "eventId": "ufc-fight-night-gamrot-salkilld-2026",
    "completed": true,
    "sourceUrl": "https://www.sherdog.com/events/UFC-Fight-Night-284-Gamrot-vs-Salkilld-112957",
    "verifiedAt": "2026-08-25T03:49:53.475493+00:00",
    "bouts": [
      {
        "winner": "Quillan Salkilld",
        "loser": "Mateusz Gamrot",
        "method": "Submission (Rear-Naked Choke)",
        "round": 1,
        "time": "4:25"
      },
      {
        "winner": "Diego Ferreira",
        "loser": "Billy Quarantillo",
        "method": "Decision (Unanimous)",
        "round": 3,
        "time": "5:00"
      },
      {
        "winner": "Yadier Del Valle",
        "loser": "Darren Elkins",
        "method": "TKO (Punch)",
        "round": 1,
        "time": "0:35"
      },
      {
        "winner": "Alexia Thainara",
        "loser": "Amanda Lemos",
        "method": "Decision (Unanimous)",
        "round": 3,
        "time": "5:00"
      },
      {
        "winner": "Ty Cole Miller",
        "loser": "Billy Goff",
        "method": "TKO (Punches)",
        "round": 3,
        "time": "0:15"
      },
      {
        "winner": "Steven Asplund",
        "loser": "Guilherme Pat",
        "method": "Decision (Unanimous)",
        "round": 3,
        "time": "5:00"
      },
      {
        "winner": "Diyar Nurgozhay",
        "loser": "Bruno Lopes",
        "method": "TKO (Punches)",
        "round": 1,
        "time": "4:59"
      },
      {
        "winner": "Jose Luiz",
        "loser": "Louie Sutherland",
        "method": "Submission (Neck Crank)",
        "round": 1,
        "time": "1:50"
      },
      {
        "winner": "Manoel Sousa",
        "loser": "Richie Miranda",
        "method": "Decision (Unanimous)",
        "round": 3,
        "time": "5:00"
      },
      {
        "winner": "Miles Johns",
        "loser": "Gianni Vazquez",
        "method": "TKO (Punches)",
        "round": 1,
        "time": "3:09"
      },
      {
        "winner": "Juliana Miller",
        "loser": "Ravena Oliveira",
        "method": "Submission (Rear-Naked Choke)",
        "round": 2,
        "time": "1:38"
      },
      {
        "winner": "Carol Foro",
        "loser": "Giovanna Canuto",
        "method": "Decision (Unanimous)",
        "round": 3,
        "time": "5:00"
      }
    ]
  },
  {
    "eventId": "ufc-330-2026",
    "completed": true,
    "sourceUrl": "https://www.sherdog.com/events/UFC-330-Makhachev-vs-Garry-112557",
    "verifiedAt": "2026-08-25T03:49:53.554866+00:00",
    "bouts": [
      {
        "winner": "Islam Makhachev",
        "loser": "Ian Garry",
        "method": "Decision (Unanimous)",
        "round": 5,
        "time": "5:00"
      },
      {
        "winner": "Mackenzie Dern",
        "loser": "Gillian Robertson",
        "method": "Decision (Unanimous)",
        "round": 5,
        "time": "5:00"
      },
      {
        "winner": "Jalin Turner",
        "loser": "Kaue Fernandes",
        "method": "KO (Punches)",
        "round": 1,
        "time": "0:39"
      },
      {
        "winner": "Dustin Stoltzfus",
        "loser": "Mansur Abdul-Malik",
        "method": "Submission (Rear-Naked Choke)",
        "round": 2,
        "time": "4:25"
      },
      {
        "winner": "Esteban Ribovics",
        "loser": "Edson Barboza",
        "method": "TKO (Punches)",
        "round": 2,
        "time": "1:32"
      },
      {
        "winner": "Chidi Njokuani",
        "loser": "Joel Alvarez",
        "method": "Decision (Unanimous)",
        "round": 3,
        "time": "5:00"
      },
      {
        "winner": "Charles Johnson",
        "loser": "Eduardo Henrique",
        "method": "Submission (Twister)",
        "round": 3,
        "time": "1:36"
      },
      {
        "winner": "Donte Johnson",
        "loser": "Eric McConico",
        "method": "KO (Punches)",
        "round": 1,
        "time": "1:38"
      },
      {
        "winner": "Tresean Gore",
        "loser": "Vicente Luque",
        "method": "Decision (Unanimous)",
        "round": 3,
        "time": "5:00"
      },
      {
        "winner": "Lucas Fernando",
        "loser": "Rafael Tobias",
        "method": "TKO (Knee to the Body and Elbows)",
        "round": 3,
        "time": "1:10"
      },
      {
        "winner": "Neil Magny",
        "loser": "Ramiz Brahimaj",
        "method": "TKO (Punches)",
        "round": 2,
        "time": "3:20"
      },
      {
        "winner": "Jeremiah Wells",
        "loser": "Myktybek Orolbai",
        "method": "Technical Submission (Ninja Choke)",
        "round": 3,
        "time": "1:24"
      }
    ]
  },
  {
    "eventId": "ufc-fight-night-sacramento-2026",
    "completed": true,
    "sourceUrl": "https://www.sherdog.com/events/UFC-Fight-Night-285-Hernandez-vs-Rodrigues-113260",
    "verifiedAt": "2026-08-25T03:49:53.924750+00:00",
    "bouts": [
      {
        "winner": "Gregory Rodrigues",
        "loser": "Anthony Hernandez",
        "method": "Decision (Unanimous)",
        "round": 5,
        "time": "5:00"
      },
      {
        "winner": "Vitor Petrino",
        "loser": "Serghei Spivac",
        "method": "Decision (Unanimous)",
        "round": 3,
        "time": "5:00"
      },
      {
        "winner": "Reinier de Ridder",
        "loser": "Roman Dolidze",
        "method": "TKO (Punches)",
        "round": 1,
        "time": "4:01"
      },
      {
        "winner": "MarQuel Mederos",
        "loser": "Mason Jones",
        "method": "TKO (Elbows and Punches)",
        "round": 2,
        "time": "2:07"
      },
      {
        "winner": "Carli Judice",
        "loser": "Jeisla Chaves",
        "method": "TKO (Front Kick to the Body and Punches)",
        "round": 1,
        "time": "1:39"
      },
      {
        "winner": "Anthony Wint",
        "loser": "Terrance Chatman",
        "method": "Technical Submission (Arm-Triangle Choke)",
        "round": 1,
        "time": "4:29"
      },
      {
        "winner": "Jamall Emmers",
        "loser": "Lerryan Douglas",
        "method": "TKO (Punches)",
        "round": 1,
        "time": "3:38"
      },
      {
        "winner": "Shamil Gaziev",
        "loser": "Kennedy Nzechukwu",
        "method": "KO (Punch)",
        "round": 1,
        "time": "1:20"
      },
      {
        "winner": "Chris Padilla",
        "loser": "Nasrat Haqparast",
        "method": "Technical Submission (Arm-Triangle Choke)",
        "round": 3,
        "time": "4:59"
      },
      {
        "winner": "Marcio Barbosa",
        "loser": "Ryan Kuse",
        "method": "TKO (Punch)",
        "round": 1,
        "time": "2:47"
      },
      {
        "winner": "Stanley Dorsainvil",
        "loser": "Gauge Young",
        "method": "Decision (Unanimous)",
        "round": 3,
        "time": "5:00"
      },
      {
        "winner": "Jackson McVey",
        "loser": "Wesley Schultz",
        "method": "TKO (Knee to the Body and Punches)",
        "round": 1,
        "time": "4:13"
      },
      {
        "winner": "Shanelle Dyer",
        "loser": "Elise Reed",
        "method": "TKO (Punches)",
        "round": 3,
        "time": "1:42"
      }
    ]
  }
];
