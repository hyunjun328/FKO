// 검수된 UFC 일정과 대진을 화면에 공급하는 데이터 모델
export type BoutSection = "main" | "prelims" | "announced";

export type Bout = {
  left: string;
  right: string;
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
    subtitle: "Medić vs Rodriguez",
    startUtc: "2026-08-01T17:00:00Z",
    prelimsUtc: "2026-08-01T14:00:00Z",
    venue: "Belgrade Arena",
    city: "베오그라드",
    country: "세르비아",
    status: "예정",
    sourceLabel: "UFC 공식 이벤트 페이지",
    sourceUrl: "https://www.ufc.com/event/ufc-fight-night-august-01-2026",
    verifiedAt: "2026-07-29T10:30:00+09:00",
    bouts: [
      { left: "Uroš Medić", right: "Daniel Rodriguez", weight: "웰터급", section: "main" },
      { left: "Jan Błachowicz", right: "Navajo Stirling", weight: "라이트헤비급", section: "main" },
      { left: "Aleksandar Rakić", right: "Marcin Tybura", weight: "헤비급", section: "main" },
      { left: "Duško Todorović", right: "Robert Valentin", weight: "미들급", section: "main" },
      { left: "Vlasto Cepo", right: "Gilbert Urbina", weight: "미들급", section: "main" },
      { left: "Ludovit Klein", right: "Tofiq Musayev", weight: "라이트급", section: "prelims" },
      { left: "Oban Elliott", right: "Michael Oliveira", weight: "웰터급", section: "prelims" },
      { left: "Mark Vologdin", right: "Josias Musasa", weight: "밴텀급", section: "prelims" },
      { left: "Dennis Buzukja", right: "Bogdan Grad", weight: "페더급", section: "prelims" },
      { left: "Mateusz Rębecki", right: "Kyle Prepolec", weight: "라이트급", section: "prelims" },
      { left: "Nina Milosevic", right: "Hailey Cowan", weight: "여성 밴텀급", section: "prelims" },
      { left: "Jovan Leka", right: "Max Gimenis", weight: "헤비급", section: "prelims" },
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
      { left: "Mateusz Gamrot", right: "Quillan Salkilld", weight: "라이트급", section: "main" },
      { left: "Diyar Nurgozhay", right: "Bruno Lopes", weight: "라이트헤비급", section: "announced" },
      { left: "Diego Ferreira", right: "Billy Quarantillo", weight: "라이트급", section: "announced" },
      { left: "Louie Sutherland", right: "Jose Montanha da Silva", weight: "헤비급", section: "announced" },
      { left: "Steven Asplund", right: "Guilherme Pat", weight: "헤비급", section: "announced" },
      { left: "Amanda Lemos", right: "Alexia Thainara", weight: "여성 스트로급", section: "announced" },
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
      { left: "Islam Makhachev", right: "Ian Machado Garry", weight: "웰터급 타이틀전", section: "main", title: true },
      { left: "Mackenzie Dern", right: "Gillian Robertson", weight: "여성 스트로급 타이틀전", section: "main", title: true },
      { left: "Jeremiah Wells", right: "Myktybek Orolbai", weight: "웰터급", section: "announced" },
      { left: "Erin Blanchfield", right: "Jasmine Jasudavicius", weight: "여성 플라이급", section: "announced" },
      { left: "Jalin Turner", right: "Kauê Fernandes", weight: "라이트급", section: "announced" },
      { left: "Geoff Neal", right: "Chidi Njokuani", weight: "웰터급", section: "announced" },
      { left: "Neil Magny", right: "Ramiz Brahimaj", weight: "웰터급", section: "announced" },
      { left: "Mansur Abdul-Malik", right: "Dustin Stoltzfus", weight: "미들급", section: "announced" },
      { left: "Vicente Luque", right: "Tresean Gore", weight: "미들급", section: "announced" },
      { left: "Edson Barboza", right: "Esteban Ribovics", weight: "라이트급", section: "announced" },
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
      { left: "Anthony Hernandez", right: "Gregory Rodrigues", weight: "미들급", section: "main" },
      { left: "Roman Dolidze", right: "Reinier de Ridder", weight: "라이트헤비급", section: "announced" },
      { left: "Serghei Spivac", right: "Vitor Petrino", weight: "헤비급", section: "announced" },
      { left: "Kennedy Nzechukwu", right: "Shamil Gaziev", weight: "헤비급", section: "announced" },
      { left: "Kody Steele", right: "Gauge Young", weight: "라이트급", section: "announced" },
      { left: "Carli Judice", right: "Jeisla Chaves", weight: "여성 스트로급", section: "announced" },
      { left: "Wes Schultz", right: "Jackson McVey", weight: "미들급", section: "announced" },
      { left: "Shanelle Dyer", right: "Elise Reed", weight: "여성 스트로급", section: "announced" },
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
      { left: "Umar Nurmagomedov", right: "Song Yadong", weight: "밴텀급", section: "main" },
      { left: "Yan Xiaonan", right: "Denise Gomes", weight: "여성 스트로급", section: "main" },
      { left: "Sumudaerji", right: "Alex Perez", weight: "플라이급", section: "announced" },
      { left: "Rei Tsuruya", right: "Kevin Borjas", weight: "플라이급", section: "announced" },
      { left: "Ce Liu", right: "Junior Tafa", weight: "라이트헤비급", section: "announced" },
    ],
  },
];
