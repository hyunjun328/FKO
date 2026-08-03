// 공식 UFC 자료로 검수한 주요 선수의 기본 프로필을 제공한다.
export type FighterProfile = {
  name: string;
  nickname?: string;
  record: string;
  ranking: string;
  country: string;
  style: string;
  heightCm?: number;
  reachCm?: number;
  team?: string;
  octagonDebut?: string;
  summary: string;
  lastFight?: {
    result: "승" | "패" | "무";
    opponent: string;
    opponentKo: string;
    date: string;
    method: string;
  };
  nextFight?: {
    opponent: string;
    opponentKo: string;
    event: string;
    dateKst: string;
    timing: string;
    status: string;
    sourceUrl: string;
  };
  verificationSources?: {
    label: string;
    url: string;
  }[];
  careerHighlights?: {
    title: string;
    detail: string;
    sourceLabel: string;
    sourceUrl: string;
  }[];
  sourceUrl: string;
  verifiedAt: string;
};

export type KoreanFighter = {
  name: string;
  koName: string;
  division: string;
  statusLabel?: string;
};

export const KOREAN_FIGHTERS: KoreanFighter[] = [
  { name: "JunYong Park", koName: "박준용", division: "미들급" },
  { name: "Dooho Choi", koName: "최두호", division: "페더급" },
  { name: "SuYoung You", koName: "유수영", division: "밴텀급" },
  { name: "ChangHo Lee", koName: "이창호", division: "밴텀급" },
  { name: "SeokHyeon Ko", koName: "고석현", division: "웰터급" },
  { name: "HyunSung Park", koName: "박현성", division: "플라이급" },
  { name: "DongHun Choi", koName: "최동훈", division: "플라이급" },
  { name: "JeongYeong Lee", koName: "이정영", division: "페더급" },
  { name: "JooSang Yoo", koName: "유주상", division: "페더급" },
  { name: "YiSak Lee", koName: "이삭", division: "미들급" },
];

export const FORMER_KOREAN_FIGHTERS: KoreanFighter[] = [
  {
    name: "Chan Sung Jung",
    koName: "정찬성",
    division: "페더급",
    statusLabel: "은퇴",
  },
  {
    name: "Dong Hyun Kim",
    koName: "김동현",
    division: "웰터급",
    statusLabel: "전 UFC",
  },
  {
    name: "Kyung Ho Kang",
    koName: "강경호",
    division: "밴텀급",
    statusLabel: "UFC 활동 종료",
  },
  {
    name: "Da Woon Jung",
    koName: "정다운",
    division: "라이트헤비급",
    statusLabel: "전 UFC",
  },
  {
    name: "Hyun Gyu Lim",
    koName: "임현규",
    division: "웰터급",
    statusLabel: "UFC 활동 종료",
  },
  {
    name: "Dongi Yang",
    koName: "양동이",
    division: "미들급",
    statusLabel: "전 UFC",
  },
];

export const FEATURED_FIGHTERS: KoreanFighter[] = [
  {
    name: "Conor McGregor",
    koName: "코너 맥그리거",
    division: "웰터급",
    statusLabel: "대표 선수",
  },
  {
    name: "Khabib Nurmagomedov",
    koName: "하빕 누르마고메도프",
    division: "라이트급",
    statusLabel: "은퇴",
  },
  {
    name: "Georges St-Pierre",
    koName: "조르주 생피에르",
    division: "웰터급 · 미들급",
    statusLabel: "은퇴",
  },
  {
    name: "Amanda Nunes",
    koName: "아만다 누네스",
    division: "여성 밴텀급 · 페더급",
    statusLabel: "명예의 전당",
  },
];

export const FIGHTER_PROFILES: Record<string, FighterProfile> = {
  "SuYoung You": {
    name: "SuYoung You",
    nickname: "Yoo-Jitsu",
    record: "16승 4패 2무효",
    ranking: "공식 랭킹 없음",
    country: "대한민국",
    style: "종합격투기",
    heightCm: 168,
    reachCm: 165,
    team: "Black Combat",
    octagonDebut: "2024-11-23",
    summary:
      "Road to UFC 시즌 3 밴텀급 우승으로 UFC 계약을 맺은 그래플링 기반 파이터입니다. UFC 공식 프로필은 대한민국 출신·현역 상태를 표시합니다.",
    sourceUrl: "https://www.ufc.com/athlete/suyoung-yu",
    verificationSources: [
      {
        label: "UFC 선수 프로필",
        url: "https://www.ufc.com/athlete/suyoung-yu",
      },
      {
        label: "UFC Road to UFC 계약 선수 안내",
        url: "https://www.ufc.com/news/road-ufc-returns-season-4-opening-round-may-22-23",
      },
    ],
    verifiedAt: "2026-08-03",
  },
  "ChangHo Lee": {
    name: "ChangHo Lee",
    record: "11승 2패",
    ranking: "공식 랭킹 없음",
    country: "대한민국",
    style: "종합격투기",
    heightCm: 173,
    reachCm: 175,
    team: "Extreme Combat",
    octagonDebut: "2024-06-22",
    summary:
      "Road to UFC 시즌 2 밴텀급 우승자입니다. UFC 공식 프로필에서 대한민국 출신의 현역 밴텀급 선수로 확인됩니다.",
    sourceUrl: "https://www.ufc.com/athlete/chang-ho-lee",
    verificationSources: [
      {
        label: "UFC 선수 프로필",
        url: "https://www.ufc.com/athlete/chang-ho-lee",
      },
      {
        label: "UFC Road to UFC 계약 선수 안내",
        url: "https://www.ufc.com/news/road-ufc-returns-season-4-opening-round-may-22-23",
      },
    ],
    verifiedAt: "2026-08-03",
  },
  "DongHun Choi": {
    name: "DongHun Choi",
    record: "9승 0패",
    ranking: "공식 랭킹 없음",
    country: "대한민국 포항",
    style: "종합격투기",
    heightCm: 165,
    reachCm: 168,
    team: "포항 팀매드",
    octagonDebut: "2024-11-23",
    summary:
      "Road to UFC 시즌 3 플라이급 우승자입니다. UFC 공식 프로필은 대한민국 출신의 현역 플라이급 선수로 표시합니다.",
    sourceUrl: "https://www.ufc.com/athlete/donghun-choi",
    verificationSources: [
      {
        label: "UFC 선수 프로필",
        url: "https://www.ufc.com/athlete/donghun-choi",
      },
      {
        label: "UFC Road to UFC 계약 선수 안내",
        url: "https://www.ufc.com/news/road-ufc-returns-season-4-opening-round-may-22-23",
      },
    ],
    verifiedAt: "2026-08-03",
  },
  "YiSak Lee": {
    name: "YiSak Lee",
    nickname: "The Tank",
    record: "8승 2패",
    ranking: "공식 랭킹 없음",
    country: "대한민국",
    style: "유도",
    heightCm: 188,
    team: "Korean Top Team",
    octagonDebut: "2026-05-30",
    summary:
      "2026년 UFC 데뷔전을 치른 미들급 파이터입니다. UFC 공식 프로필에서 대한민국 출신·현역 상태와 Korean Top Team 소속을 확인했습니다.",
    sourceUrl: "https://www.ufc.com/athlete/yi-sak-lee",
    verificationSources: [
      {
        label: "UFC 선수 프로필",
        url: "https://www.ufc.com/athlete/yi-sak-lee",
      },
      {
        label: "UFC 공식 경기 결과",
        url: "https://www.ufc.com/event/ufc-fight-night-may-30-2026",
      },
    ],
    verifiedAt: "2026-08-03",
  },
  "JunYong Park": {
    name: "JunYong Park",
    nickname: "The Iron Turtle",
    record: "19승 7패",
    ranking: "공식 랭킹 없음",
    country: "대한민국 서울",
    style: "복싱",
    heightCm: 178,
    reachCm: 185,
    team: "Korean Top Team",
    octagonDebut: "2019-08-31",
    summary:
      "끈질긴 압박과 높은 타격량이 강점인 미들급 베테랑. UFC에서 판정과 서브미션을 고르게 쌓아 왔다.",
    lastFight: {
      result: "패",
      opponent: "Ikram Aliskerov",
      opponentKo: "이크람 알리스케로프",
      date: "2025-10-25",
      method: "3라운드 만장일치 판정",
    },
    sourceUrl: "https://www.ufc.com/athlete/jun-yong-park",
    verificationSources: [
      {
        label: "UFC 선수 프로필",
        url: "https://www.ufc.com/athlete/jun-yong-park",
      },
      {
        label: "UFC 321 공식 결과",
        url: "https://www.ufc.com/event/ufc-321",
      },
      {
        label: "Sherdog 전적",
        url: "https://www.sherdog.com/fighter/Jun-Yong-Park-159071",
      },
    ],
    verifiedAt: "2026-07-29",
  },
  "Dooho Choi": {
    name: "Dooho Choi",
    nickname: "The Korean Superboy",
    record: "17승 4패 1무",
    ranking: "공식 랭킹 없음",
    country: "대한민국",
    style: "타격",
    heightCm: 178,
    reachCm: 178,
    team: "Gumi MMA",
    octagonDebut: "2014-11-22",
    summary:
      "통산 17승 가운데 14승을 KO로 끝낸 강력한 페더급 타격가. 컵 스완슨전으로 UFC 명예의 전당 파이트 부문에 헌액됐다.",
    lastFight: {
      result: "승",
      opponent: "Daniel Santos",
      opponentKo: "다니엘 산토스",
      date: "2026-05-16",
      method: "2라운드 4:29 KO/TKO",
    },
    nextFight: {
      opponent: "Patricio Pitbull",
      opponentKo: "파트리시우 핏불",
      event: "UFC 331",
      dateKst: "2026-09-20",
      timing: "시작 시각 미정",
      status: "대진 보도 확인 · UFC 공식 발표 전",
      sourceUrl:
        "https://www.mmafighting.com/ufc/501089/patricio-pitbull-vs-doo-ho-choi-added-to-ufc-331-in-los-angeles",
    },
    sourceUrl: "https://www.ufc.com/athlete/dooho-choi",
    verificationSources: [
      {
        label: "UFC 선수 프로필",
        url: "https://www.ufc.com/athlete/dooho-choi",
      },
      {
        label: "UFC 공식 경기 결과",
        url: "https://www.ufc.com/event/ufc-fight-night-may-16-2026",
      },
      {
        label: "Sherdog 전적",
        url: "https://www.sherdog.com/fighter/Doo-Ho-Choi-56689",
      },
      {
        label: "UFC 331 대진 보도",
        url: "https://www.mmafighting.com/ufc/501089/patricio-pitbull-vs-doo-ho-choi-added-to-ufc-331-in-los-angeles",
      },
    ],
    verifiedAt: "2026-07-29",
  },
  "SeokHyeon Ko": {
    name: "SeokHyeon Ko",
    nickname: "Technical",
    record: "13승 3패",
    ranking: "공식 랭킹 없음",
    country: "대한민국 부산",
    style: "유도",
    heightCm: 178,
    reachCm: 180,
    team: "HAVAS MMA",
    octagonDebut: "2025-06-21",
    summary:
      "삼보 세계선수권 우승 경력을 바탕으로 타격과 그래플링을 연결하는 웰터급 선수. UFC 첫 두 경기를 판정승으로 거둔 뒤 장폴 레보스노야니에게 판정패했다.",
    lastFight: {
      result: "패",
      opponent: "Jean-Paul Lebosnoyani",
      opponentKo: "장폴 레보스노야니",
      date: "2026-07-18",
      method: "3라운드 만장일치 판정패 · 29-28×3",
    },
    sourceUrl: "https://www.ufc.com/athlete/seokhyeon-ko",
    verificationSources: [
      {
        label: "UFC 공식 경기 결과",
        url: "https://www.ufc.com/event/ufc-fight-night-july-18-2026",
      },
      {
        label: "UFC 공식 스코어카드",
        url: "https://www.ufc.com/news/ufc-oklahoma-city-official-scorecards",
      },
      {
        label: "UFC 승자 인터뷰",
        url: "https://www.ufc.com/video/158380",
      },
      {
        label: "UFC 고석현 인터뷰",
        url: "https://www.ufc.com/news/seokhyeon-ko-quietly-making-waves-welterweight-ufc-oklahoma-city",
      },
      {
        label: "Sherdog 전적",
        url: "https://www.sherdog.com/fighter/Seok-Hyeon-Ko-275977",
      },
    ],
    verifiedAt: "2026-07-29",
  },
  "HyunSung Park": {
    name: "HyunSung Park",
    nickname: "Peace of Mind",
    record: "10승 2패",
    ranking: "공식 랭킹 없음",
    country: "대한민국",
    style: "종합격투기",
    heightCm: 170,
    reachCm: 168,
    team: "Tiger Muay Thai",
    octagonDebut: "2023-02-04",
    summary:
      "Road to UFC 초대 플라이급 우승자. 10승 중 9승을 KO 또는 서브미션으로 끝낸 피니시 능력이 강점이다.",
    lastFight: {
      result: "패",
      opponent: "Bruno Silva",
      opponentKo: "브루노 실바",
      date: "2025-10-18",
      method: "3라운드 2:15 서브미션",
    },
    sourceUrl: "https://www.ufc.com/athlete/hyunsung-park",
    verificationSources: [
      {
        label: "UFC 선수 프로필",
        url: "https://www.ufc.com/athlete/hyunsung-park",
      },
      {
        label: "UFC 공식 경기 결과",
        url: "https://www.ufc.com/event/ufc-fight-night-october-18-2025",
      },
      {
        label: "Sherdog 전적",
        url: "https://www.sherdog.com/fighter/Hyun-Sung-Park-289999",
      },
    ],
    verifiedAt: "2026-07-29",
  },
  "JeongYeong Lee": {
    name: "JeongYeong Lee",
    nickname: "Korean Tiger",
    record: "11승 3패",
    ranking: "공식 랭킹 없음",
    country: "대한민국 대구",
    style: "브라질리언 주짓수",
    heightCm: 178,
    reachCm: 187,
    team: "Fight Ready",
    octagonDebut: "2023-02-04",
    summary:
      "Road to UFC 초대 페더급 우승자이자 주짓수 블랙벨트. KO 4승과 서브미션 3승을 기록했다.",
    lastFight: {
      result: "패",
      opponent: "Daniel Santos",
      opponentKo: "다니엘 산토스",
      date: "2025-05-10",
      method: "3라운드 만장일치 판정",
    },
    sourceUrl: "https://www.ufc.com/athlete/jeongyeong-lee",
    verificationSources: [
      {
        label: "UFC 선수 프로필",
        url: "https://www.ufc.com/athlete/jeongyeong-lee",
      },
      {
        label: "UFC 315 공식 결과",
        url: "https://www.ufc.com/event/ufc-315",
      },
      {
        label: "Sherdog 전적",
        url: "https://www.sherdog.com/fighter/Jeong-Yeong-Lee-135897",
      },
    ],
    verifiedAt: "2026-07-29",
  },
  "JooSang Yoo": {
    name: "JooSang Yoo",
    nickname: "Zombie Jr.",
    record: "9승 1패",
    ranking: "공식 랭킹 없음",
    country: "대한민국",
    style: "프리스타일",
    heightCm: 170,
    team: "Pinnacle Gym · Vamos",
    octagonDebut: "2025-06-07",
    summary:
      "정찬성의 제자로 알려진 페더급 유망주. UFC 데뷔전에서 제카 사라기를 28초 만에 KO로 꺾었다.",
    lastFight: {
      result: "패",
      opponent: "Daniel Santos",
      opponentKo: "다니엘 산토스",
      date: "2025-10-04",
      method: "2라운드 0:21 KO/TKO",
    },
    sourceUrl: "https://www.ufc.com/athlete/joo-sang-yoo",
    verificationSources: [
      {
        label: "UFC 선수 프로필",
        url: "https://www.ufc.com/athlete/joo-sang-yoo",
      },
      {
        label: "UFC 320 공식 결과",
        url: "https://www.ufc.com/event/ufc-320",
      },
      {
        label: "네바다 체육위원회 결과",
        url: "https://boxing.nv.gov/uploadedFiles/boxingnvgov/content/results/2025_Results/10-04-25MMA_REDACTED.pdf",
      },
    ],
    verifiedAt: "2026-07-29",
  },
  "Chan Sung Jung": {
    name: "Chan Sung Jung",
    nickname: "The Korean Zombie",
    record: "17승 8패",
    ranking: "은퇴",
    country: "대한민국",
    style: "킥복싱",
    heightCm: 175,
    reachCm: 183,
    team: "Korean Zombie MMA · Fight Ready",
    octagonDebut: "2011-03-26",
    summary:
      "두 차례 UFC 페더급 타이틀에 도전한 한국 격투기의 대표 선수. UFC 최초 트위스터 승리와 7초 KO 기록을 남기고 2023년 은퇴했다.",
    lastFight: {
      result: "패",
      opponent: "Max Holloway",
      opponentKo: "맥스 할로웨이",
      date: "2023-08-26",
      method: "3라운드 0:23 KO/TKO",
    },
    sourceUrl: "https://www.ufc.com/athlete/chan-sung-jung",
    verificationSources: [
      {
        label: "UFC 공식 은퇴 회고",
        url: "https://www.ufc.com/news/thank-you-korean-zombie-retirement-chan-sung-jung",
      },
      {
        label: "UFC 선수 프로필",
        url: "https://www.ufc.com/athlete/chan-sung-jung",
      },
      {
        label: "Sherdog 전적",
        url: "https://www.sherdog.com/fighter/Chan-Sung-Jung-36155",
      },
    ],
    verifiedAt: "2026-07-29",
  },
  "Dong Hyun Kim": {
    name: "Dong Hyun Kim",
    nickname: "Stun Gun",
    record: "22승 4패 1무 1무효",
    ranking: "전 UFC",
    country: "대한민국 수원",
    style: "유도 · 그래플링",
    heightCm: 188,
    reachCm: 193,
    team: "Busan Team MAD",
    octagonDebut: "2008-05-24",
    summary:
      "한국인 두 번째 UFC 진출 선수이자 한국 UFC 대중화를 이끈 개척자. 강한 클린치와 상위 압박으로 UFC에서 오랫동안 웰터급 상위권을 지켰다.",
    lastFight: {
      result: "패",
      opponent: "Colby Covington",
      opponentKo: "콜비 코빙턴",
      date: "2017-06-17",
      method: "3라운드 만장일치 판정",
    },
    sourceUrl: "https://www.ufc.com/news/dong-hyun-kim-ufcs-most-wanted",
    verificationSources: [
      {
        label: "UFC 김동현 특집",
        url: "https://www.ufc.com/news/dong-hyun-kim-ufcs-most-wanted",
      },
      {
        label: "UFC 주요 경기 회고",
        url: "https://www.ufc.com/news/fab-five-dong-hyun-kim",
      },
      {
        label: "Sherdog 전적",
        url: "https://www.sherdog.com/fighter/Dong-Hyun-Kim-16374",
      },
    ],
    verifiedAt: "2026-07-29",
  },
  "Kyung Ho Kang": {
    name: "Kyung Ho Kang",
    nickname: "Mr. Perfect",
    record: "19승 11패 1무효",
    ranking: "UFC 상태 · Not Fighting",
    country: "대한민국 부산",
    style: "브라질리언 주짓수",
    heightCm: 175,
    reachCm: 185,
    team: "Busan Team MAD",
    octagonDebut: "2013-03-02",
    summary:
      "Road FC 밴텀급 챔피언 출신으로 UFC에서 10년 넘게 활동한 서브미션 강자. 공식 UFC 프로필은 현재 Not Fighting 상태로 표시한다.",
    lastFight: {
      result: "패",
      opponent: "Muin Gafurov",
      opponentKo: "무인 가푸로프",
      date: "2024-06-22",
      method: "3라운드 만장일치 판정",
    },
    sourceUrl: "https://www.ufc.com/athlete/kyung-ho-kang",
    verificationSources: [
      {
        label: "UFC 선수 프로필",
        url: "https://www.ufc.com/athlete/kyung-ho-kang",
      },
      {
        label: "UFC 사우디 공식 결과",
        url: "https://www.ufc.com/news/prelim-results-highlights-winner-interviews-ufc-saudi-arabia",
      },
      {
        label: "Sherdog 전적",
        url: "https://www.sherdog.com/fighter/Kyung-Ho-Kang-24067",
      },
    ],
    verifiedAt: "2026-07-29",
  },
  "Da Woon Jung": {
    name: "Da Woon Jung",
    nickname: "Sseda",
    record: "15승 7패 1무",
    ranking: "전 UFC",
    country: "대한민국 서울",
    style: "종합격투기",
    heightCm: 193,
    reachCm: 199,
    team: "Korean Top Team",
    octagonDebut: "2019-08-31",
    summary:
      "한국인 최초 UFC 라이트헤비급 선수. UFC에서 4승 1무를 먼저 쌓았고, 현재 공식 프로필은 Not Fighting 상태다.",
    lastFight: {
      result: "패",
      opponent: "Mickael Groguhe",
      opponentKo: "미카엘 그로구에",
      date: "2026-07-11",
      method: "3라운드 3:32 KO/TKO",
    },
    sourceUrl: "https://www.ufc.com/athlete/da-woon-jung",
    verificationSources: [
      {
        label: "UFC 선수 프로필",
        url: "https://www.ufc.com/athlete/da-woon-jung",
      },
      {
        label: "UFC 정다운 인터뷰",
        url: "https://www.ufc.com/news/da-un-jung-rolls-changes-ufc-fight-night-prelims-vegas-23",
      },
      {
        label: "Sherdog 최신 전적",
        url: "https://www.sherdog.com/fighter/Da-Woon-Jung-202241",
      },
    ],
    verifiedAt: "2026-07-29",
  },
  "Hyun Gyu Lim": {
    name: "Hyun Gyu Lim",
    nickname: "The Ace",
    record: "14승 7패 1무",
    ranking: "UFC 상태 · Not Fighting",
    country: "대한민국 서울",
    style: "무에타이",
    heightCm: 191,
    reachCm: 196,
    team: "Team Macho",
    octagonDebut: "2013-03-02",
    summary:
      "긴 리치와 강한 타격을 앞세워 UFC 싱가포르 대회 메인이벤트까지 오른 웰터급 선수. 통산 14승 가운데 10승을 KO/TKO로 거뒀다.",
    lastFight: {
      result: "승",
      opponent: "Igor Svirid",
      opponentKo: "이고르 스비리드",
      date: "2018-11-18",
      method: "3라운드 만장일치 판정",
    },
    sourceUrl: "https://www.ufc.com/athlete/hyun-gyu-lim",
    verificationSources: [
      {
        label: "UFC 선수 프로필",
        url: "https://www.ufc.com/athlete/hyun-gyu-lim",
      },
      {
        label: "UFC 공식 경기 결과",
        url: "https://www.ufc.com/news/tactical-upbeat-prelims-deliver-four-close-decisions-saitama",
      },
      {
        label: "Sherdog 전적",
        url: "https://www.sherdog.com/fighter/Hyun-Gyu-Lim-21040",
      },
    ],
    verifiedAt: "2026-07-29",
  },
  "Dongi Yang": {
    name: "Dongi Yang",
    nickname: "The Ox",
    record: "14승 4패",
    ranking: "전 UFC",
    country: "대한민국 서울",
    style: "타격",
    heightCm: 180,
    team: "Team Macho",
    octagonDebut: "2010-10-23",
    summary:
      "한국 UFC 초창기를 개척한 미들급 선수. 강한 펀치로 통산 14승 가운데 13승을 KO/TKO로 끝냈다.",
    lastFight: {
      result: "패",
      opponent: "Callyugibrainn Marinho Borges",
      opponentKo: "칼리우지브라인 마리뉴 보르지스",
      date: "2019-03-30",
      method: "1라운드 4:23 KO/TKO",
    },
    sourceUrl: "https://www.ufc.com/news/dongi-yang-good-time-ufc-return",
    verificationSources: [
      {
        label: "UFC 양동이 특집",
        url: "https://www.ufc.com/news/dongi-yang-good-time-ufc-return",
      },
      {
        label: "UFC 인터뷰",
        url: "https://www.ufc.com/news/koreas-dongi-yang-talks-fighting",
      },
      {
        label: "Sherdog 전적",
        url: "https://www.sherdog.com/fighter/Dongi-Yang-23501",
      },
    ],
    verifiedAt: "2026-07-29",
  },
  "Uros Medic": {
    name: "Uros Medic",
    nickname: "The Doctor",
    record: "13승 3패",
    ranking: "웰터급 14위",
    country: "세르비아",
    style: "MMA",
    heightCm: 185,
    reachCm: 180,
    summary: "13승 가운데 11승을 KO로 끝낸 강한 피니시 능력의 웰터급 타격가.",
    lastFight: {
      result: "승",
      opponent: "Geoff Neal",
      opponentKo: "제프 닐",
      date: "2026-02-21",
      method: "1라운드 1:19 KO/TKO",
    },
    sourceUrl: "https://www.ufc.com/athlete/uros-medic",
    verifiedAt: "2026-07-29",
  },
  "Daniel Rodriguez": {
    name: "Daniel Rodriguez",
    nickname: "D-Rod",
    record: "20승 5패",
    ranking: "웰터급 15위",
    country: "미국",
    style: "프리스타일",
    heightCm: 185,
    reachCm: 188,
    summary: "높은 타격량과 왼손을 앞세우며 9번의 KO승을 보유한 베테랑.",
    lastFight: {
      result: "승",
      opponent: "Kevin Holland",
      opponentKo: "케빈 홀랜드",
      date: "2025-07-19",
      method: "3라운드 만장일치 판정",
    },
    sourceUrl: "https://www.ufc.com/athlete/daniel-rodriguez",
    verifiedAt: "2026-07-29",
  },
  "Jan Blachowicz": {
    name: "Jan Blachowicz",
    record: "29승 11패 2무",
    ranking: "라이트헤비급 4위",
    country: "폴란드",
    style: "MMA",
    heightCm: 188,
    reachCm: 198,
    summary: "전 UFC 라이트헤비급 챔피언. 타격과 서브미션에서 각각 9승을 기록했다.",
    lastFight: {
      result: "무",
      opponent: "Bogdan Guskov",
      opponentKo: "보그단 구스코프",
      date: "2025-12-06",
      method: "무승부",
    },
    sourceUrl: "https://www.ufc.com/athlete/jan-blachowicz",
    verifiedAt: "2026-07-29",
  },
  "Navajo Stirling": {
    name: "Navajo Stirling",
    record: "10승 무패",
    ranking: "라이트헤비급 15위",
    country: "뉴질랜드",
    style: "킥복싱",
    heightCm: 193,
    reachCm: 201,
    summary: "시티 킥복싱 소속의 장신 유망주로 프로 10경기에서 아직 패배가 없다.",
    lastFight: {
      result: "승",
      opponent: "Ion Cutelaba",
      opponentKo: "이온 쿠텔라바",
      date: "2026-06-20",
      method: "2라운드 3:23 KO/TKO",
    },
    sourceUrl: "https://www.ufc.com/athlete/navajo-stirling",
    verifiedAt: "2026-07-29",
  },
  "Aleksandar Rakic": {
    name: "Aleksandar Rakic",
    nickname: "Rocket",
    record: "14승 6패",
    ranking: "공식 랭킹 없음",
    country: "오스트리아",
    style: "프리스타일",
    heightCm: 193,
    reachCm: 198,
    summary: "프로 통산 14승 가운데 9승을 KO로 끝낸 장신 타격가.",
    lastFight: {
      result: "패",
      opponent: "Azamat Murzakanov",
      opponentKo: "아자마트 무르자카노프",
      date: "2025-10-25",
      method: "1라운드 3:11 KO/TKO",
    },
    sourceUrl: "https://www.ufc.com/athlete/aleksandar-rakic",
    verifiedAt: "2026-07-29",
  },
  "Marcin Tybura": {
    name: "Marcin Tybura",
    nickname: "Tybur",
    record: "27승 11패",
    ranking: "헤비급 12위",
    country: "폴란드",
    style: "MMA",
    heightCm: 191,
    reachCm: 198,
    summary: "타격과 그래플링을 고르게 활용하며 UFC에서 오랫동안 경쟁해 온 헤비급 베테랑.",
    lastFight: {
      result: "패",
      opponent: "Tyrell Fortune",
      opponentKo: "타이렐 포춘",
      date: "2026-03-28",
      method: "3라운드 만장일치 판정",
    },
    sourceUrl: "https://www.ufc.com/athlete/marcin-tybura",
    verifiedAt: "2026-07-29",
  },
  "Dusko Todorovic": {
    name: "Dusko Todorovic",
    nickname: "Thunder",
    record: "13승 6패",
    ranking: "공식 랭킹 없음",
    country: "몬테네그로",
    style: "MMA",
    heightCm: 185,
    reachCm: 188,
    summary: "KO 8승과 서브미션 4승을 기록한 피니시 지향형 미들급 선수.",
    lastFight: {
      result: "승",
      opponent: "Jose Daniel Medina",
      opponentKo: "호세 다니엘 메디나",
      date: "2025-09-13",
      method: "1라운드 4:21 서브미션",
    },
    sourceUrl: "https://www.ufc.com/athlete/dusko-todorovic",
    verifiedAt: "2026-07-29",
  },
  "Robert Valentin": {
    name: "Robert Valentin",
    nickname: "Robzilla",
    record: "12승 6패",
    ranking: "공식 랭킹 없음",
    country: "스위스",
    style: "그래플링",
    heightCm: 188,
    reachCm: 196,
    summary: "프로 통산 12승 가운데 8승을 서브미션으로 거둔 그래플러.",
    lastFight: {
      result: "승",
      opponent: "Julien Leblanc",
      opponentKo: "줄리앙 르블랑",
      date: "2026-04-18",
      method: "1라운드 2:22 서브미션",
    },
    sourceUrl: "https://www.ufc.com/athlete/robert-valentin-frey",
    verifiedAt: "2026-07-29",
  },
  "Gilbert Urbina": {
    name: "Gilbert Urbina",
    nickname: "The RGV Bad Boy",
    record: "7승 5패",
    ranking: "공식 랭킹 없음",
    country: "미국",
    style: "MMA",
    heightCm: 175,
    reachCm: 191,
    summary: "긴 리치와 종합적인 공격을 활용하는 TUF 출신 미들급 선수.",
    lastFight: {
      result: "패",
      opponent: "Uros Medic",
      opponentKo: "우로시 메디치",
      date: "2025-08-09",
      method: "1라운드 1:03 KO/TKO",
    },
    sourceUrl: "https://www.ufc.com/athlete/gilbert-urbina",
    verifiedAt: "2026-07-29",
  },
  "Mateusz Gamrot": {
    name: "Mateusz Gamrot",
    nickname: "Gamer",
    record: "26승 4패",
    ranking: "라이트급 8위",
    country: "폴란드",
    style: "레슬링",
    heightCm: 178,
    reachCm: 179,
    summary: "왕성한 레슬링 압박을 앞세우는 전 KSW 두 체급 챔피언.",
    lastFight: {
      result: "승",
      opponent: "Esteban Ribovics",
      opponentKo: "에스테반 리보빅스",
      date: "2026-04-11",
      method: "2라운드 4:19 서브미션",
    },
    sourceUrl: "https://www.ufc.com/athlete/mateusz-gamrot",
    verifiedAt: "2026-07-29",
  },
  "Islam Makhachev": {
    name: "Islam Makhachev",
    nickname: "The Eagle",
    record: "28승 1패",
    ranking: "웰터급 챔피언 · P4P 1위",
    country: "러시아",
    style: "삼보",
    heightCm: 178,
    reachCm: 179,
    team: "American Kickboxing Academy",
    octagonDebut: "2015-05-23",
    summary: "라이트급 타이틀을 네 차례 방어한 뒤 웰터급 정상까지 오른 챔피언.",
    lastFight: {
      result: "승",
      opponent: "Jack Della Maddalena",
      opponentKo: "잭 델라 마달레나",
      date: "2025-11-15",
      method: "5라운드 만장일치 판정",
    },
    careerHighlights: [
      { title: "라이트급 타이틀 4차례 방어", detail: "찰스 올리베이라를 꺾어 타이틀을 차지한 뒤 볼카노프스키, 포이리에, 모이카노, 마다레나를 상대로 정상급 경쟁을 이어 갔다.", sourceLabel: "UFC 선수 프로필", sourceUrl: "https://www.ufc.com/athlete/islam-makhachev" },
      { title: "웰터급 정상 도전", detail: "라이트급 챔피언 경력 뒤 웰터급 타이틀 경쟁에 나선 두 체급 정상급 선수다.", sourceLabel: "UFC 공식 랭킹", sourceUrl: "https://www.ufc.com/rankings" },
    ],
    verificationSources: [{ label: "UFC 선수 프로필", url: "https://www.ufc.com/athlete/islam-makhachev" }, { label: "UFC 공식 랭킹", url: "https://www.ufc.com/rankings" }],
    sourceUrl: "https://www.ufc.com/athlete/islam-makhachev",
    verifiedAt: "2026-07-29",
  },
  "Ian Machado Garry": {
    name: "Ian Machado Garry",
    nickname: "The Future",
    record: "17승 1패",
    ranking: "웰터급 1위",
    country: "아일랜드",
    style: "종합격투기",
    heightCm: 191,
    reachCm: 189,
    team: "Kill Cliff FC",
    octagonDebut: "2021-11-06",
    summary: "긴 거리 타격과 높은 테이크다운 방어율을 갖춘 웰터급 최상위 도전자.",
    lastFight: {
      result: "승",
      opponent: "Belal Muhammad",
      opponentKo: "벨랄 무하마드",
      date: "2025-11-22",
      method: "3라운드 만장일치 판정",
    },
    careerHighlights: [
      { title: "UFC 무대 무패 출발", detail: "Cage Warriors 웰터급 챔피언 경력 뒤 UFC에 입성해 웰터급 상위권까지 올랐다.", sourceLabel: "UFC 선수 프로필", sourceUrl: "https://www.ufc.com/athlete/ian-machado-garry" },
      { title: "웰터급 타이틀 경쟁", detail: "긴 거리의 타격과 테이크다운 방어를 바탕으로 상위 랭커와 경쟁하는 도전자다.", sourceLabel: "UFC 공식 랭킹", sourceUrl: "https://www.ufc.com/rankings" },
    ],
    verificationSources: [{ label: "UFC 선수 프로필", url: "https://www.ufc.com/athlete/ian-machado-garry" }, { label: "UFC 공식 랭킹", url: "https://www.ufc.com/rankings" }],
    sourceUrl: "https://www.ufc.com/athlete/ian-machado-garry",
    verifiedAt: "2026-07-29",
  },
  "Mackenzie Dern": {
    name: "Mackenzie Dern",
    record: "16승 5패",
    ranking: "여성 스트로급 챔피언",
    country: "미국",
    style: "브라질리언 주짓수",
    heightCm: 163,
    reachCm: 160,
    summary: "세계 정상급 주짓수를 기반으로 8번의 서브미션승을 거둔 현 챔피언.",
    lastFight: {
      result: "승",
      opponent: "Virna Jandiroba",
      opponentKo: "비르나 잔디로바",
      date: "2025-10-25",
      method: "5라운드 만장일치 판정",
    },
    sourceUrl: "https://www.ufc.com/athlete/mackenzie-dern",
    verifiedAt: "2026-07-29",
  },
  "Gillian Robertson": {
    name: "Gillian Robertson",
    nickname: "The Savage",
    record: "17승 8패",
    ranking: "여성 스트로급 5위",
    country: "캐나다",
    style: "MMA",
    heightCm: 165,
    reachCm: 160,
    summary: "그라운드에서 강점을 보이며 프로 통산 9번의 서브미션승을 기록했다.",
    lastFight: {
      result: "패",
      opponent: "Amanda Lemos",
      opponentKo: "아만다 레모스",
      date: "2026-03-14",
      method: "3라운드 만장일치 판정",
    },
    sourceUrl: "https://www.ufc.com/athlete/gillian-robertson",
    verifiedAt: "2026-07-29",
  },
  "Erin Blanchfield": {
    name: "Erin Blanchfield",
    nickname: "Cold Blooded",
    record: "14승 2패",
    ranking: "여성 플라이급 4위 · P4P 8위",
    country: "미국",
    style: "주짓수",
    heightCm: 163,
    reachCm: 168,
    summary: "강한 그래플링과 꾸준한 압박으로 타이틀 경쟁권에 오른 주짓수 블랙벨트.",
    lastFight: {
      result: "승",
      opponent: "Tracy Cortez",
      opponentKo: "트레이시 코르테스",
      date: "2025-11-15",
      method: "2라운드 4:44 서브미션",
    },
    sourceUrl: "https://www.ufc.com/athlete/erin-blanchfield",
    verifiedAt: "2026-07-29",
  },
  "Anthony Hernandez": {
    name: "Anthony Hernandez",
    nickname: "Fluffy",
    record: "15승 3패",
    ranking: "미들급 6위",
    country: "미국",
    style: "종합격투기",
    heightCm: 183,
    reachCm: 191,
    summary: "끈질긴 압박과 서브미션이 강점이며 프로 통산 9번의 서브미션승을 기록했다.",
    lastFight: {
      result: "패",
      opponent: "Sean Strickland",
      opponentKo: "션 스트릭랜드",
      date: "2026-02-21",
      method: "3라운드 2:23 KO/TKO",
    },
    sourceUrl: "https://www.ufc.com/athlete/anthony-hernandez",
    verifiedAt: "2026-07-29",
  },
  "Umar Nurmagomedov": {
    name: "Umar Nurmagomedov",
    record: "20승 1패",
    ranking: "밴텀급 2위",
    country: "러시아",
    style: "MMA",
    heightCm: 173,
    reachCm: 175,
    summary: "정교한 킥과 그래플링을 결합해 밴텀급 정상에 도전하는 최상위 선수.",
    lastFight: {
      result: "승",
      opponent: "Deiveson Figueiredo",
      opponentKo: "데이비슨 피게이레두",
      date: "2026-01-24",
      method: "3라운드 만장일치 판정",
    },
    sourceUrl: "https://www.ufc.com/athlete/umar-nurmagomedov",
    verifiedAt: "2026-07-29",
  },
  "Song Yadong": {
    name: "Song Yadong",
    nickname: "Kung Fu Kid",
    record: "23승 9패 1무",
    ranking: "밴텀급 6위",
    country: "중국",
    style: "복싱",
    heightCm: 173,
    reachCm: 170,
    summary: "빠른 복싱과 강한 한 방을 갖췄으며 UFC에서 여러 차례 메인이벤트를 치렀다.",
    lastFight: {
      result: "승",
      opponent: "Deiveson Figueiredo",
      opponentKo: "데이비슨 피게이레두",
      date: "2026-05-30",
      method: "2라운드 4:42 서브미션",
    },
    sourceUrl: "https://www.ufc.com/athlete/song-yadong",
    verifiedAt: "2026-07-29",
  },
  "Yan Xiaonan": {
    name: "Yan Xiaonan",
    record: "19승 5패",
    ranking: "여성 스트로급 4위 · P4P 12위",
    country: "중국",
    style: "타격",
    heightCm: 165,
    reachCm: 160,
    summary: "빠른 스텝과 높은 타격량을 앞세우는 전 여성 스트로급 타이틀 도전자.",
    lastFight: {
      result: "패",
      opponent: "Virna Jandiroba",
      opponentKo: "비르나 잔디로바",
      date: "2025-04-12",
      method: "3라운드 만장일치 판정",
    },
    sourceUrl: "https://www.ufc.com/athlete/xiaonan-yan",
    verifiedAt: "2026-07-29",
  },
  "Amanda Lemos": {
    name: "Amanda Lemos",
    record: "15승 6패 1무",
    ranking: "여성 스트로급 8위",
    country: "브라질",
    style: "복싱",
    heightCm: 163,
    reachCm: 165,
    summary: "프로 통산 8번의 KO승을 기록한 여성 스트로급의 강력한 타격가.",
    lastFight: {
      result: "승",
      opponent: "Gillian Robertson",
      opponentKo: "질리언 로버트슨",
      date: "2026-03-14",
      method: "3라운드 만장일치 판정",
    },
    sourceUrl: "https://www.ufc.com/athlete/amanda-lemos",
    verifiedAt: "2026-07-29",
  },
  "Conor McGregor": {
    name: "Conor McGregor",
    nickname: "The Notorious",
    record: "22승 7패",
    ranking: "전 페더급 · 라이트급 챔피언",
    country: "아일랜드 더블린",
    style: "타격",
    heightCm: 175,
    reachCm: 188,
    team: "SBG Ireland",
    octagonDebut: "2013-04-06",
    summary:
      "UFC 최초로 두 체급 타이틀을 동시에 보유한 선수이자 UFC 역대 최대 PPV 흥행 기록의 중심에 선 대표 스타. 페더급과 라이트급 챔피언을 차례로 차지했다.",
    lastFight: {
      result: "패",
      opponent: "Max Holloway",
      opponentKo: "맥스 할로웨이",
      date: "2026-07-11",
      method: "1라운드 1:09 TKO · 부상",
    },
    careerHighlights: [
      {
        title: "UFC 최초 동시 두 체급 챔피언",
        detail:
          "2016년 UFC 205에서 에디 알바레즈를 꺾고 페더급과 라이트급 벨트를 동시에 보유한 첫 UFC 선수가 됐다.",
        sourceLabel: "UFC 공식 챔프-챔프 역사",
        sourceUrl:
          "https://www.ufc.com/news/history-of-champ-champs-ufc-284-makhachev-volkanovski-couture-penn-st-pierre-gsp-conor-mcgregor-daniel-cormier-amanda-nunes-henry-cejudo-read",
      },
      {
        title: "UFC 역대 최대 PPV 대회",
        detail:
          "맥그리거가 하빕 누르마고메도프와 맞붙은 UFC 229는 추정 240만 건으로 UFC PPV 구매 기록을 세웠다.",
        sourceLabel: "기네스 세계기록",
        sourceUrl:
          "https://www.guinnessworldrecords.com/world-records/90053-largest-ultimate-fighting-championship-television-audience",
      },
      {
        title: "두 체급 타이틀 획득",
        detail:
          "UFC 공식 프로필은 맥그리거를 두 체급 타이틀을 획득한 세 번째 선수이자 최초 동시 보유자로 기록한다.",
        sourceLabel: "UFC 선수 프로필",
        sourceUrl: "https://www.ufc.com/athlete/conor-mcgregor?page=1",
      },
    ],
    verificationSources: [
      {
        label: "UFC 선수 프로필",
        url: "https://www.ufc.com/athlete/conor-mcgregor?page=1",
      },
      {
        label: "UFC 챔프-챔프 역사",
        url: "https://www.ufc.com/news/history-of-champ-champs-ufc-284-makhachev-volkanovski-couture-penn-st-pierre-gsp-conor-mcgregor-daniel-cormier-amanda-nunes-henry-cejudo-read",
      },
      {
        label: "기네스 UFC PPV 기록",
        url: "https://www.guinnessworldrecords.com/world-records/90053-largest-ultimate-fighting-championship-television-audience",
      },
      {
        label: "위키백과 보조 확인",
        url: "https://en.wikipedia.org/wiki/Conor_McGregor",
      },
    ],
    sourceUrl: "https://www.ufc.com/athlete/conor-mcgregor?page=1",
    verifiedAt: "2026-07-30",
  },
  "Khabib Nurmagomedov": {
    name: "Khabib Nurmagomedov",
    nickname: "The Eagle",
    record: "29승 무패",
    ranking: "은퇴 · 전 라이트급 챔피언",
    country: "러시아 다게스탄",
    style: "삼보 · 레슬링",
    heightCm: 178,
    reachCm: 178,
    team: "American Kickboxing Academy",
    octagonDebut: "2012-01-21",
    summary:
      "프로 통산 29전 전승으로 은퇴한 전 UFC 라이트급 챔피언. 맥그리거, 포이리에, 게이치를 상대로 타이틀을 방어했다.",
    lastFight: {
      result: "승",
      opponent: "Justin Gaethje",
      opponentKo: "저스틴 게이치",
      date: "2020-10-24",
      method: "2라운드 1:34 트라이앵글 초크",
    },
    careerHighlights: [
      {
        title: "29전 전승 은퇴",
        detail:
          "UFC는 2021년 하빕의 공식 은퇴를 발표하며 최종 프로 전적을 29승 무패로 확인했다.",
        sourceLabel: "UFC 공식 은퇴 발표",
        sourceUrl:
          "https://www.ufc.com/news/khabib-nurmagomedov-officially-retires",
      },
      {
        title: "라이트급 타이틀 3차례 방어",
        detail:
          "UFC 229, 242, 254에서 맥그리거, 포이리에, 게이치를 연달아 꺾고 타이틀을 지켰다.",
        sourceLabel: "UFC 선수 프로필",
        sourceUrl:
          "https://www.ufc.com/athlete/khabib-nurmagomedov?language_content_entity=en",
      },
    ],
    verificationSources: [
      {
        label: "UFC 선수 프로필",
        url: "https://www.ufc.com/athlete/khabib-nurmagomedov?language_content_entity=en",
      },
      {
        label: "UFC 공식 은퇴 발표",
        url: "https://www.ufc.com/news/khabib-nurmagomedov-officially-retires",
      },
      {
        label: "위키백과 보조 확인",
        url: "https://en.wikipedia.org/wiki/Khabib_Nurmagomedov",
      },
    ],
    sourceUrl:
      "https://www.ufc.com/athlete/khabib-nurmagomedov?language_content_entity=en",
    verifiedAt: "2026-07-30",
  },
  "Georges St-Pierre": {
    name: "Georges St-Pierre",
    nickname: "Rush",
    record: "26승 2패",
    ranking: "은퇴 · 전 웰터급 · 미들급 챔피언",
    country: "캐나다 몬트리올",
    style: "가라테 · 레슬링",
    heightCm: 179,
    reachCm: 193,
    octagonDebut: "2004-01-31",
    summary:
      "웰터급 타이틀을 9차례 방어하고 4년 만의 복귀전에서 미들급 타이틀까지 획득한 UFC 명예의 전당 헌액자.",
    lastFight: {
      result: "승",
      opponent: "Michael Bisping",
      opponentKo: "마이클 비스핑",
      date: "2017-11-04",
      method: "3라운드 4:23 리어네이키드 초크",
    },
    careerHighlights: [
      {
        title: "웰터급 타이틀 9차례 방어",
        detail:
          "UFC 공식 은퇴 발표는 생피에르가 웰터급 최다 타이틀 방어 기록 9회를 보유했다고 확인한다.",
        sourceLabel: "UFC 공식 은퇴 발표",
        sourceUrl:
          "https://www.ufc.com/news/ufc-and-canadian-icon-georges-st-pierre-retires",
      },
      {
        title: "웰터급 · 미들급 두 체급 챔피언",
        detail:
          "2017년 UFC 217에서 마이클 비스핑을 꺾고 미들급 타이틀을 획득해 두 체급 챔피언이 됐다.",
        sourceLabel: "UFC 커리어 회고",
        sourceUrl: "https://www.ufc.com/news/new-chapter-georges-st-pierre",
      },
    ],
    verificationSources: [
      {
        label: "UFC 선수 프로필",
        url: "https://www.ufc.com/athlete/georges-st-pierre?page=1",
      },
      {
        label: "UFC 명예의 전당 발표",
        url: "https://www.ufc.com/news/georges-st-pierre-named-ufc-hall-fame-class-2020",
      },
      {
        label: "UFC 공식 은퇴 발표",
        url: "https://www.ufc.com/news/ufc-and-canadian-icon-georges-st-pierre-retires",
      },
      {
        label: "위키백과 보조 확인",
        url: "https://en.wikipedia.org/wiki/Georges_St-Pierre",
      },
    ],
    sourceUrl: "https://www.ufc.com/athlete/georges-st-pierre?page=1",
    verifiedAt: "2026-07-30",
  },
  "Amanda Nunes": {
    name: "Amanda Nunes",
    nickname: "The Lioness",
    record: "23승 5패",
    ranking: "명예의 전당 · 전 밴텀급 · 페더급 챔피언",
    country: "브라질",
    style: "타격 · 주짓수",
    heightCm: 173,
    reachCm: 175,
    team: "Team Nunes",
    octagonDebut: "2013-08-04",
    summary:
      "UFC 여성 최초 두 체급 동시 챔피언이자 두 벨트를 모두 방어한 유일한 동시 두 체급 챔피언. 2025년 UFC 명예의 전당에 헌액됐다.",
    lastFight: {
      result: "승",
      opponent: "Irene Aldana",
      opponentKo: "이레네 알다나",
      date: "2023-06-10",
      method: "5라운드 만장일치 판정",
    },
    careerHighlights: [
      {
        title: "UFC 여성 최초 두 체급 챔피언",
        detail:
          "밴텀급 챔피언 시절 크리스 사이보그를 51초 만에 KO로 꺾고 페더급 벨트까지 차지했다.",
        sourceLabel: "UFC 공식 커리어 회고",
        sourceUrl:
          "https://www.ufc.com/news/amanda-nunes-becomes-double-champ-breaking-barriers",
      },
      {
        title: "2025 UFC 명예의 전당",
        detail:
          "UFC는 누네스의 23승 5패 전적과 여성부 최다 타이틀전 승리 11회를 공식 기록했다.",
        sourceLabel: "UFC 명예의 전당",
        sourceUrl: "https://www.ufc.com/hof/amanda-nunes-hall-of-fame",
      },
    ],
    verificationSources: [
      {
        label: "UFC 선수 프로필",
        url: "https://www.ufc.com/athlete/amanda-nunes",
      },
      {
        label: "UFC 명예의 전당",
        url: "https://www.ufc.com/hof/amanda-nunes-hall-of-fame",
      },
      {
        label: "UFC 두 체급 챔피언 회고",
        url: "https://www.ufc.com/news/amanda-nunes-becomes-double-champ-breaking-barriers",
      },
      {
        label: "위키백과 보조 확인",
        url: "https://en.wikipedia.org/wiki/Amanda_Nunes",
      },
    ],
    sourceUrl: "https://www.ufc.com/athlete/amanda-nunes",
    verifiedAt: "2026-07-30",
  },
};
