// UFC 아카이브의 대표 명예의 전당 선수, 은퇴 선수, 심판 정보를 제공한다.
export type ArchiveFighter = {
  name: string;
  koName: string;
  record: string;
  era: string;
  note: string;
  sourceUrl: string;
};

export const HALL_OF_FAME_FIGHTERS: ArchiveFighter[] = [
  { name: "Georges St-Pierre", koName: "조르주 생피에르", record: "26승 2패", era: "Modern Wing · 2020", note: "웰터급과 미들급 챔피언을 지낸 두 체급 챔피언.", sourceUrl: "https://www.ufc.com/hof/georges-st-pierre-hall-of-fame" },
  { name: "Anderson Silva", koName: "앤더슨 실바", record: "34승 11패 1무효", era: "Modern Wing · 2023", note: "미들급 장기 타이틀 방어 기록으로 알려진 전 챔피언.", sourceUrl: "https://www.ufc.com/athlete/anderson-silva" },
  { name: "Khabib Nurmagomedov", koName: "하빕 누르마고메도프", record: "29승 0패", era: "Modern Wing · 2022", note: "무패로 은퇴한 전 라이트급 챔피언.", sourceUrl: "https://www.ufc.com/athlete/khabib-nurmagomedov" },
  { name: "BJ Penn", koName: "BJ 펜", record: "16승 14패 2무", era: "Modern Wing · 2015", note: "라이트급과 웰터급 타이틀을 획득한 전 챔피언.", sourceUrl: "https://www.ufc.com/hof/bj-penn-hall-of-fame" },
  { name: "Ronda Rousey", koName: "론다 로우지", record: "12승 2패", era: "Modern Wing · 2018", note: "초대 UFC 여성 밴텀급 챔피언.", sourceUrl: "https://www.ufc.com/athlete/ronda-rousey" },
  { name: "Robbie Lawler", koName: "로비 라울러", record: "30승 16패 1무효", era: "Modern Wing · 2025", note: "전 UFC 웰터급 챔피언.", sourceUrl: "https://www.ufc.com/news/robbie-lawler-named-ufc-hall-fame-class-2025" },
  { name: "Vitor Belfort", koName: "비토르 벨포트", record: "26승 14패 1무효", era: "Pioneer Wing · 2025", note: "UFC 12 헤비급 토너먼트 우승자이자 전 라이트헤비급 챔피언.", sourceUrl: "https://www.ufc.com/hof/vitor-belfort-hall-of-fame" },
  { name: "Forrest Griffin", koName: "포레스트 그리핀", record: "21승 8패", era: "Fight Wing · 2013", note: "스테판 보나와의 TUF 피날레 명경기가 파이트 윙에 헌액됐다.", sourceUrl: "https://www.ufc.com/hof/griffin-vs-bonnar-hall-of-fame" },
];

export const FORMER_UFC_FIGHTERS: ArchiveFighter[] = [
  { name: "Chuck Liddell", koName: "척 리델", record: "21승 9패", era: "전 라이트헤비급 챔피언", note: "2000년대 UFC를 대표한 스트라이커.", sourceUrl: "https://www.ufc.com/athlete/chuck-liddell" },
  { name: "Matt Hughes", koName: "맷 휴즈", record: "45승 9패", era: "전 웰터급 챔피언", note: "웰터급 타이틀을 여러 차례 방어했다.", sourceUrl: "https://www.ufc.com/athlete/matt-hughes" },
  { name: "Jose Aldo", koName: "조제 알도", record: "32승 9패", era: "전 페더급 챔피언", note: "WEC·UFC 시대를 잇는 페더급 레전드.", sourceUrl: "https://www.ufc.com/athlete/jose-aldo" },
  { name: "Demetrious Johnson", koName: "드미트리어스 존슨", record: "27승 4패 1무", era: "전 플라이급 챔피언", note: "초대 UFC 플라이급 챔피언.", sourceUrl: "https://www.ufc.com/athlete/demetrious-johnson" },
  { name: "Dominick Cruz", koName: "도미닉 크루즈", record: "24승 4패", era: "전 밴텀급 챔피언", note: "WEC와 UFC에서 밴텀급 타이틀을 보유했다.", sourceUrl: "https://www.ufc.com/athlete/dominick-cruz" },
  { name: "Frankie Edgar", koName: "프랭키 에드가", record: "24승 11패 1무", era: "전 라이트급 챔피언", note: "라이트급 챔피언 경력과 다체급 도전으로 유명하다.", sourceUrl: "https://www.ufc.com/athlete/frankie-edgar" },
];

export type Referee = { name: string; role: string; note: string };

export const UFC_REFEREES: Referee[] = [
  { name: "Herb Dean", role: "심판", note: "UFC 타이틀전과 주요 메인이벤트에서 오랫동안 활동한 베테랑 심판." },
  { name: "Marc Goddard", role: "심판", note: "영국 출신으로 UFC 주요 대회를 포함한 국제 무대에서 활동." },
  { name: "Jason Herzog", role: "심판", note: "UFC 대회와 주 체육위원회 배정 경기에서 활동." },
  { name: "Mike Beltran", role: "심판", note: "미국 대형 MMA 대회에서 활동하는 베테랑 심판." },
  { name: "Dan Miragliotta", role: "심판", note: "다수의 UFC 타이틀전 경험을 보유한 베테랑 심판." },
  { name: "Mark Smith", role: "심판", note: "UFC 주요 경기에서 활동하는 심판." },
];
