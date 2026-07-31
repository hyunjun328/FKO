// 검수된 UFC 일정과 대진을 화면에 공급하는 데이터 모델
export type BoutSection = "main" | "prelims" | "announced";

export type Bout = {
  left: string;
  leftKo: string;
  right: string;
  rightKo: string;
  weight: string;
  section: BoutSection;
  title?: boolean;
};

export type FightEvent = {
  id: string;
  series: "UFC" | "UFC FIGHT NIGHT";
  title: string;
  subtitle: string;
  startUtc: string;
  timeTbd?: boolean;
  prelimsUtc?: string;
  venue: string;
  city: string;
  country: string;
  status: "예정" | "변경" | "취소";
  sourceLabel: string;
  sourceUrl: string;
  verifiedAt: string;
  bouts: Bout[];
};

export const EVENTS: FightEvent[] = [
  {
    id: "ufc-fight-night-belgrade-2026",
    series: "UFC FIGHT NIGHT",
    title: "UFC 파이트 나이트 베오그라드",
    subtitle: "Medic vs Rodriguez",
    startUtc: "2026-08-01T17:00:00Z",
    prelimsUtc: "2026-08-01T14:00:00Z",
    venue: "Belgrade Arena",
    city: "베오그라드",
    country: "세르비아",
    status: "예정",
    sourceLabel: "UFC 공식 이벤트 페이지",
    sourceUrl: "https://www.ufc.com/event/ufc-fight-night-august-01-2026",
    verifiedAt: "2026-07-29T11:07:53+09:00",
    bouts: [
      { left: "Uros Medic", leftKo: "우로시 메디치", right: "Daniel Rodriguez", rightKo: "다니엘 로드리게스", weight: "웰터급", section: "main" },
      { left: "Jan Blachowicz", leftKo: "얀 블라호비치", right: "Navajo Stirling", rightKo: "나바호 스털링", weight: "라이트헤비급", section: "main" },
      { left: "Aleksandar Rakic", leftKo: "알렉산다르 라키치", right: "Marcin Tybura", rightKo: "마르친 티부라", weight: "헤비급", section: "main" },
      { left: "Dusko Todorovic", leftKo: "두슈코 토도로비치", right: "Robert Valentin", rightKo: "로버트 발렌틴", weight: "미들급", section: "main" },
      { left: "Vlasto Cepo", leftKo: "블라스토 체포", right: "Gilbert Urbina", rightKo: "길버트 어비나", weight: "미들급", section: "main" },
      { left: "Ludovit Klein", leftKo: "루도비트 클라인", right: "Tofiq Musayev", rightKo: "토피크 무사예프", weight: "라이트급", section: "prelims" },
      { left: "Oban Elliott", leftKo: "오반 엘리엇", right: "Michael Oliveira", rightKo: "마이클 올리베이라", weight: "웰터급", section: "prelims" },
      { left: "Mark Vologdin", leftKo: "마크 볼로그딘", right: "Josias Musasa", rightKo: "조시아스 무사사", weight: "밴텀급", section: "prelims" },
      { left: "Dennis Buzukja", leftKo: "데니스 부주카", right: "Bogdan Grad", rightKo: "보그단 그라드", weight: "페더급", section: "prelims" },
      { left: "Mateusz Rebecki", leftKo: "마테우시 레베츠키", right: "Kyle Prepolec", rightKo: "카일 프레폴렉", weight: "라이트급", section: "prelims" },
      { left: "Nina Milosevic", leftKo: "니나 밀로셰비치", right: "Hailey Cowan", rightKo: "헤일리 코완", weight: "여성 밴텀급", section: "prelims" },
      { left: "Jovan Leka", leftKo: "요반 레카", right: "Max Gimenis", rightKo: "맥스 지메니스", weight: "헤비급", section: "prelims" },
    ],
  },
  {
    id: "ufc-fight-night-gamrot-salkilld-2026",
    series: "UFC FIGHT NIGHT",
    title: "UFC 파이트 나이트 라스베이거스",
    subtitle: "Gamrot vs Salkilld",
    startUtc: "2026-08-08T21:00:00Z",
    prelimsUtc: "2026-08-08T18:00:00Z",
    venue: "Meta APEX",
    city: "라스베이거스",
    country: "미국",
    status: "예정",
    sourceLabel: "UFC 공식 이벤트 페이지",
    sourceUrl: "https://www.ufc.com/event/ufc-fight-night-august-08-2026",
    verifiedAt: "2026-07-29T10:30:00+09:00",
    bouts: [
      { left: "Mateusz Gamrot", leftKo: "마테우시 감롯", right: "Quillan Salkilld", rightKo: "퀼런 살킬드", weight: "라이트급", section: "main" },
      { left: "Diyar Nurgozhay", leftKo: "디야르 누르고자이", right: "Bruno Lopes", rightKo: "브루노 로페스", weight: "라이트헤비급", section: "announced" },
      { left: "Diego Ferreira", leftKo: "디에고 페레이라", right: "Billy Quarantillo", rightKo: "빌리 콰란틸로", weight: "라이트급", section: "announced" },
      { left: "Louie Sutherland", leftKo: "루이 서덜랜드", right: "Jose Montanha da Silva", rightKo: "조제 몬타냐 다 실바", weight: "헤비급", section: "announced" },
      { left: "Steven Asplund", leftKo: "스티븐 애스플런드", right: "Guilherme Pat", rightKo: "길례르미 팻", weight: "헤비급", section: "announced" },
      { left: "Amanda Lemos", leftKo: "아만다 레모스", right: "Alexia Thainara", rightKo: "알렉시아 타이나라", weight: "여성 스트로급", section: "announced" },
    ],
  },
  {
    id: "ufc-330-2026",
    series: "UFC",
    title: "UFC 330",
    subtitle: "Makhachev vs Machado Garry",
    startUtc: "2026-08-16T01:00:00Z",
    prelimsUtc: "2026-08-15T23:00:00Z",
    venue: "Xfinity Mobile Arena",
    city: "필라델피아",
    country: "미국",
    status: "예정",
    sourceLabel: "UFC 공식 이벤트 페이지",
    sourceUrl: "https://www.ufc.com/event/ufc-330",
    verifiedAt: "2026-07-29T10:30:00+09:00",
    bouts: [
      { left: "Islam Makhachev", leftKo: "이슬람 마카체프", right: "Ian Machado Garry", rightKo: "이안 마샤두 개리", weight: "웰터급 타이틀전", section: "main", title: true },
      { left: "Mackenzie Dern", leftKo: "매켄지 던", right: "Gillian Robertson", rightKo: "질리언 로버트슨", weight: "여성 스트로급 타이틀전", section: "main", title: true },
      { left: "Jeremiah Wells", leftKo: "제레마이아 웰스", right: "Myktybek Orolbai", rightKo: "믹티벡 오롤바이", weight: "웰터급", section: "announced" },
      { left: "Erin Blanchfield", leftKo: "에린 블랜치필드", right: "Jasmine Jasudavicius", rightKo: "재스민 자수다비시우스", weight: "여성 플라이급", section: "announced" },
      { left: "Jalin Turner", leftKo: "제일린 터너", right: "Kaue Fernandes", rightKo: "카우에 페르난데스", weight: "라이트급", section: "announced" },
      { left: "Geoff Neal", leftKo: "제프 닐", right: "Chidi Njokuani", rightKo: "치디 은조쿠아니", weight: "웰터급", section: "announced" },
      { left: "Neil Magny", leftKo: "닐 매그니", right: "Ramiz Brahimaj", rightKo: "라미즈 브라히마이", weight: "웰터급", section: "announced" },
      { left: "Mansur Abdul-Malik", leftKo: "만수르 압둘말릭", right: "Dustin Stoltzfus", rightKo: "더스틴 스톨츠푸스", weight: "미들급", section: "announced" },
      { left: "Vicente Luque", leftKo: "비센테 루케", right: "Tresean Gore", rightKo: "트레션 고어", weight: "미들급", section: "announced" },
      { left: "Edson Barboza", leftKo: "에드손 바르보자", right: "Esteban Ribovics", rightKo: "에스테반 리보빅스", weight: "라이트급", section: "announced" },
    ],
  },
  {
    id: "ufc-fight-night-sacramento-2026",
    series: "UFC FIGHT NIGHT",
    title: "UFC 파이트 나이트 새크라멘토",
    subtitle: "Hernandez vs Rodrigues",
    startUtc: "2026-08-23T00:00:00Z",
    prelimsUtc: "2026-08-22T21:00:00Z",
    venue: "Golden 1 Center",
    city: "새크라멘토",
    country: "미국",
    status: "예정",
    sourceLabel: "UFC 공식 이벤트 페이지",
    sourceUrl: "https://www.ufc.com/event/ufc-fight-night-august-22-2026",
    verifiedAt: "2026-07-29T10:30:00+09:00",
    bouts: [
      { left: "Anthony Hernandez", leftKo: "앤서니 에르난데스", right: "Gregory Rodrigues", rightKo: "그레고리 호드리게스", weight: "미들급", section: "main" },
      { left: "Roman Dolidze", leftKo: "로만 돌리제", right: "Reinier de Ridder", rightKo: "레이니어 더 리더", weight: "라이트헤비급", section: "announced" },
      { left: "Serghei Spivac", leftKo: "세르게이 스피박", right: "Vitor Petrino", rightKo: "비토르 페트리노", weight: "헤비급", section: "announced" },
      { left: "Kennedy Nzechukwu", leftKo: "케네디 은제추쿠", right: "Shamil Gaziev", rightKo: "샤밀 가지예프", weight: "헤비급", section: "announced" },
      { left: "Kody Steele", leftKo: "코디 스틸", right: "Gauge Young", rightKo: "게이지 영", weight: "라이트급", section: "announced" },
      { left: "Carli Judice", leftKo: "칼리 주디스", right: "Jeisla Chaves", rightKo: "제이슬라 차베스", weight: "여성 스트로급", section: "announced" },
      { left: "Wes Schultz", leftKo: "웨스 슐츠", right: "Jackson McVey", rightKo: "잭슨 맥베이", weight: "미들급", section: "announced" },
      { left: "Shanelle Dyer", leftKo: "샤넬 다이어", right: "Elise Reed", rightKo: "엘리스 리드", weight: "여성 스트로급", section: "announced" },
    ],
  },
  {
    id: "ufc-fight-night-shanghai-2026",
    series: "UFC FIGHT NIGHT",
    title: "UFC 파이트 나이트 상하이",
    subtitle: "Nurmagomedov vs Song",
    startUtc: "2026-08-29T10:00:00Z",
    prelimsUtc: "2026-08-29T07:00:00Z",
    venue: "Oriental Sports Center",
    city: "상하이",
    country: "중국",
    status: "예정",
    sourceLabel: "UFC 공식 이벤트 페이지",
    sourceUrl: "https://www.ufc.com/event/ufc-fight-night-august-29-2026",
    verifiedAt: "2026-07-29T10:30:00+09:00",
    bouts: [
      { left: "Umar Nurmagomedov", leftKo: "우마르 누르마고메도프", right: "Song Yadong", rightKo: "송야동", weight: "밴텀급", section: "main" },
      { left: "Yan Xiaonan", leftKo: "옌샤오난", right: "Denise Gomes", rightKo: "데니지 고메스", weight: "여성 스트로급", section: "main" },
      { left: "Sumudaerji", leftKo: "수무다얼지", right: "Alex Perez", rightKo: "알렉스 페레즈", weight: "플라이급", section: "announced" },
      { left: "Rei Tsuruya", leftKo: "츠루야 레이", right: "Kevin Borjas", rightKo: "케빈 보르하스", weight: "플라이급", section: "announced" },
      { left: "Ce Liu", leftKo: "류처", right: "Junior Tafa", rightKo: "주니어 타파", weight: "라이트헤비급", section: "announced" },
    ],
  },
];
