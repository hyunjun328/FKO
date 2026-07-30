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
  { name: "Dustin Poirier", koName: "더스틴 포이리에", record: "30-10-0", era: "전 UFC 라이트급 잠정 챔피언", note: "라이트급 타이틀전과 BMF 타이틀전을 거친 루이지애나 출신 베테랑. 게이치·맥그리거·챈들러전으로 대표되는 커리어를 남겼다.", sourceUrl: "https://www.ufc.com/athlete/dustin-poirier" },
  { name: "Jon Jones", koName: "존 존스", record: "28-1-0", era: "전 UFC 라이트헤비급 · 헤비급 챔피언", note: "UFC 최연소 챔피언이자 라이트헤비급 장기 지배 뒤 헤비급 타이틀까지 차지한 역대급 챔피언.", sourceUrl: "https://www.ufc.com/athlete/jon-jones" },
  { name: "Stipe Miocic", koName: "스티페 미오치치", record: "20-5-0", era: "전 UFC 헤비급 챔피언", note: "UFC 헤비급 타이틀을 세 차례 연속 방어한 소방관 출신 챔피언.", sourceUrl: "https://www.ufc.com/athlete/stipe-miocic" },
  { name: "Francis Ngannou", koName: "프란시스 은가누", record: "18-3-0", era: "전 UFC 헤비급 챔피언", note: "압도적인 피니시 파워로 헤비급 정상에 오른 카메룬 출신 챔피언.", sourceUrl: "https://www.ufc.com/athlete/francis-ngannou" },
  { name: "Daniel Cormier", koName: "다니엘 코미어", record: "22-3-0", era: "전 UFC 라이트헤비급 · 헤비급 챔피언", note: "올림픽 레슬링 경력 위에 두 체급 UFC 챔피언을 달성한 전설급 선수.", sourceUrl: "https://www.ufc.com/athlete/daniel-cormier" },
  { name: "Randy Couture", koName: "랜디 커투어", record: "19승 11패", era: "전 헤비급 · 라이트헤비급 챔피언", note: "UFC 최초로 두 체급 타이틀을 획득한 명예의 전당 헌액자.", sourceUrl: "https://www.ufc.com/athlete/randy-couture" },
  { name: "Tito Ortiz", koName: "티토 오티즈", record: "21승 12패 1무", era: "전 라이트헤비급 챔피언", note: "2000년대 초반 라이트헤비급 타이틀을 여러 차례 방어한 스타.", sourceUrl: "https://www.ufc.com/athlete/tito-ortiz" },
  { name: "Rich Franklin", koName: "리치 프랭클린", record: "29승 7패 1무", era: "전 미들급 챔피언", note: "전 미들급 챔피언이자 UFC 명예의 전당 헌액자.", sourceUrl: "https://www.ufc.com/athlete/rich-franklin" },
  { name: "Lyoto Machida", koName: "료토 마치다", record: "26승 12패", era: "전 라이트헤비급 챔피언", note: "가라테 기반의 역습 스타일로 라이트헤비급 정상에 올랐다.", sourceUrl: "https://www.ufc.com/athlete/lyoto-machida" },
  { name: "Mauricio Rua", koName: "마우리시오 쇼군", record: "27승 14패 1무", era: "전 라이트헤비급 챔피언", note: "PRIDE와 UFC 정상급 무대를 모두 경험한 브라질의 전 챔피언.", sourceUrl: "https://www.ufc.com/athlete/mauricio-rua" },
  { name: "Urijah Faber", koName: "유라이어 페이버", record: "35승 11패", era: "WEC 전 페더급 챔피언", note: "WEC 시대를 대표했고 UFC 밴텀급 타이틀전에 여러 차례 도전했다.", sourceUrl: "https://www.ufc.com/athlete/urijah-faber" },
  { name: "Joanna Jedrzejczyk", koName: "요안나 옌드제이치크", record: "16승 5패", era: "전 여성 스트로급 챔피언", note: "여성 스트로급 타이틀을 다섯 차례 방어한 전 챔피언.", sourceUrl: "https://www.ufc.com/athlete/joanna-jedrzejczyk" },
  { name: "Tony Ferguson", koName: "토니 퍼거슨", record: "26승 12패", era: "전 임시 라이트급 챔피언", note: "12연승으로 라이트급 정상권을 지킨 TUF 우승자.", sourceUrl: "https://www.ufc.com/athlete/tony-ferguson" },
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
