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
  { name: "Royce Gracie", koName: "호이스 그레이시", record: "15-2-3", era: "Pioneer Wing · 2003", note: "UFC 1·2·4 토너먼트 우승으로 초기 UFC의 그래플링 혁명을 상징한 선수.", sourceUrl: "https://www.ufc.com/hof/royce-gracie-hall-of-fame" },
  { name: "Mark Coleman", koName: "마크 콜먼", record: "16-10-0", era: "Pioneer Wing · 2008", note: "UFC 토너먼트와 PRIDE 그랑프리를 모두 제패한 초기 헤비급 레슬링의 기준.", sourceUrl: "https://www.ufc.com/hof/mark-coleman-hall-of-fame" },
  { name: "Ken Shamrock", koName: "켄 샴락", record: "28-17-2", era: "Pioneer Wing · 2003", note: "초기 UFC의 가장 큰 스타 중 한 명으로 파이트 문화의 대중화에 기여했다.", sourceUrl: "https://www.ufc.com/hof/ken-shamrock-hall-of-fame" },
  { name: "Matt Serra", koName: "맷 세라", record: "11-7-0", era: "Modern Wing · 2018", note: "UFC 69에서 조르주 생피에르를 꺾어 역사적인 웰터급 타이틀 이변을 만들었다.", sourceUrl: "https://www.ufc.com/athlete/matt-serra" },
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
  { name: "Brock Lesnar", koName: "브록 레스너", record: "5-3-0", era: "전 UFC 헤비급 챔피언", note: "짧은 기간 안에 UFC 헤비급 타이틀을 차지하며 메인스트림 흥행을 끌어올린 특급 스타.", sourceUrl: "https://www.ufc.com/athlete/brock-lesnar" },
  { name: "Cain Velasquez", koName: "케인 벨라스케즈", record: "14-3-0", era: "전 UFC 헤비급 챔피언", note: "압박 레슬링과 끝없는 페이스로 헤비급에 새로운 활동량 기준을 만든 챔피언.", sourceUrl: "https://www.ufc.com/athlete/cain-velasquez" },
  { name: "Junior dos Santos", koName: "주니오르 도스 산토스", record: "21-10-0", era: "전 UFC 헤비급 챔피언", note: "강력한 복싱으로 케인 벨라스케즈를 꺾고 헤비급 정상에 오른 브라질 대표 파이터.", sourceUrl: "https://www.ufc.com/athlete/junior-dos-santos" },
  { name: "Fabricio Werdum", koName: "파브리시우 베우둠", record: "24-10-1", era: "전 UFC 헤비급 챔피언", note: "주짓수와 무에타이를 결합해 벨라스케즈를 꺾고 UFC 헤비급 타이틀을 차지했다.", sourceUrl: "https://www.ufc.com/athlete/fabricio-werdum" },
  { name: "Antonio Rodrigo Nogueira", koName: "안토니우 호드리구 노게이라", record: "34-10-1", era: "전 UFC 헤비급 잠정 챔피언", note: "PRIDE와 UFC를 가로지른 주짓수 헤비급의 대표 인물이며 UFC 명예의 전당 헌액자.", sourceUrl: "https://www.ufc.com/hof/antonio-rodrigo-nogueira-hall-of-fame" },
  { name: "Michael Bisping", koName: "마이클 비스핑", record: "30-9-0", era: "전 UFC 미들급 챔피언", note: "UFC 최초의 영국 출신 챔피언으로 루크 락홀드를 꺾고 미들급 타이틀을 차지했다.", sourceUrl: "https://www.ufc.com/athlete/michael-bisping" },
  { name: "Chris Weidman", koName: "크리스 와이드먼", record: "16-8-0", era: "전 UFC 미들급 챔피언", note: "앤더슨 실바의 장기 집권을 끝내고 미들급 타이틀을 차지한 미국 레슬러.", sourceUrl: "https://www.ufc.com/athlete/chris-weidman" },
  { name: "Luke Rockhold", koName: "루크 락홀드", record: "16-6-0", era: "전 UFC 미들급 챔피언", note: "스트라이크포스와 UFC 미들급 타이틀을 모두 차지한 킥복싱·주짓수 베테랑.", sourceUrl: "https://www.ufc.com/athlete/luke-rockhold" },
  { name: "Wanderlei Silva", koName: "반더레이 실바", record: "35-14-1", era: "PRIDE 미들급 챔피언", note: "PRIDE 시대의 난타전 아이콘으로 UFC 명예의 전당 헌액이 발표된 브라질 스타.", sourceUrl: "https://www.ufc.com/news/wanderlei-silva-named-ufc-hall-fame-class-2024" },
  { name: "Quinton Jackson", koName: "퀸턴 잭슨", record: "38-14-0", era: "전 UFC 라이트헤비급 챔피언", note: "PRIDE와 UFC를 오가며 척 리델을 꺾고 UFC 라이트헤비급 타이틀을 차지했다.", sourceUrl: "https://www.ufc.com/athlete/quinton-jackson" },
  { name: "Mirko Cro Cop", koName: "미르코 크로캅", record: "38-11-2", era: "PRIDE 그랑프리 우승", note: "왼발 하이킥으로 유명한 PRIDE·UFC 헤비급 시대의 대표 스트라이커.", sourceUrl: "https://www.ufc.com/athlete/mirko-cro-cop" },
  { name: "Donald Cerrone", koName: "도널드 세로니", record: "36-17-0", era: "UFC 최다 출전급 베테랑", note: "짧은 간격의 경기와 다수의 피니시 승리로 WEC·UFC를 대표한 액션 파이터.", sourceUrl: "https://www.ufc.com/athlete/donald-cerrone" },
  { name: "Carlos Condit", koName: "카를로스 콘딧", record: "32-14-0", era: "전 UFC 웰터급 잠정 챔피언", note: "변칙적인 타격과 서브미션으로 웰터급의 명승부를 만든 WEC 출신 챔피언.", sourceUrl: "https://www.ufc.com/athlete/carlos-condit" },
  { name: "Diego Sanchez", koName: "디에고 산체스", record: "30-13-0", era: "TUF 1 우승", note: "The Ultimate Fighter 첫 시즌 우승자로 초기 UFC 리얼리티 시대를 상징하는 선수.", sourceUrl: "https://www.ufc.com/athlete/diego-sanchez" },
  { name: "Gray Maynard", koName: "그레이 메이나드", record: "13-7-2", era: "전 UFC 라이트급 타이틀 도전자", note: "프랭키 에드가와의 세 차례 라이벌전으로 라이트급 역사에 남은 레슬러.", sourceUrl: "https://www.ufc.com/athlete/gray-maynard" },
  { name: "Holly Holm", koName: "홀리 홈", record: "15-8-0", era: "전 UFC 여성 밴텀급 챔피언", note: "론다 로우지를 헤드킥 KO로 꺾고 여성 밴텀급 타이틀을 차지한 복싱 챔피언 출신 파이터.", sourceUrl: "https://www.ufc.com/athlete/holly-holm" },
  { name: "Rose Namajunas", koName: "로즈 나마유나스", record: "14-7-0", era: "전 UFC 여성 스트로급 챔피언", note: "여성 스트로급 타이틀을 두 차례 차지했고 장웨일리와의 라이벌전으로 유명하다.", sourceUrl: "https://www.ufc.com/athlete/rose-namajunas" },
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
