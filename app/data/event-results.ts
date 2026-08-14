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
    "verifiedAt": "2026-08-14T04:48:24.406649+00:00",
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
    "verifiedAt": "2026-08-14T04:48:24.801802+00:00",
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
  }
];
