// 주요 현역과 전설급 UFC 선수의 검증 출처 기반 상세 프로필을 제공한다.
import type { FighterProfile } from "./fighters";

type ArchivedLegendInput = Omit<FighterProfile, "verificationSources" | "careerHighlights" | "verifiedAt"> & {
  highlights: [string, string][];
};

function archivedLegend({ highlights, sourceUrl, ...profile }: ArchivedLegendInput): FighterProfile {
  return {
    ...profile,
    sourceUrl,
    verifiedAt: "2026-08-04",
    verificationSources: [{ label: "UFC 선수 프로필", url: sourceUrl }],
    careerHighlights: highlights.map(([title, detail]) => ({
      title,
      detail,
      sourceLabel: "UFC 선수 프로필",
      sourceUrl,
    })),
  };
}

export const LEGEND_PROFILES: Record<string, FighterProfile> = {
  "Ilia Topuria": {
    name: "Ilia Topuria", nickname: "El Matador", record: "17-1-0", ranking: "전 UFC 페더급 챔피언 · 라이트급 상위권", country: "스페인 · 조지아", style: "복싱 · 주짓수", heightCm: 170, reachCm: 175, octagonDebut: "2020-10-11",
    summary: "페더급 정상에 오른 뒤 라이트급에서도 즉시 타이틀 경쟁에 뛰어든 피니셔다. 압박 복싱과 그래플링 전환이 함께 작동하는 것이 강점이다.",
    careerHighlights: [
      { title: "스페인·조지아 최초 UFC 챔피언", detail: "UFC 298에서 알렉산더 볼카노프스키를 KO로 꺾고 페더급 타이틀을 차지했다.", sourceLabel: "UFC 선수 특집", sourceUrl: "https://www.ufc.com/news/ilia-topuria-first-ufc-champion-spain-georgia" },
      { title: "톱 랭커 연속 돌파", detail: "라이언 홀, 브라이스 미첼, 조시 에밋을 거쳐 볼카노프스키까지 꺾으며 정상에 도달했다.", sourceLabel: "UFC 선수 특집", sourceUrl: "https://www.ufc.com/news/ilia-topuria-first-ufc-champion-spain-georgia" },
    ],
    verificationSources: [{ label: "UFC 선수 프로필", url: "https://www.ufc.com/athlete/ilia-topuria" }, { label: "UFC 공식 랭킹", url: "https://www.ufc.com/rankings" }], sourceUrl: "https://www.ufc.com/athlete/ilia-topuria", verifiedAt: "2026-07-30",
  },
  "Alex Pereira": {
    name: "Alex Pereira", nickname: "Poatan", record: "14-3-0", ranking: "전 UFC 미들급 · 라이트헤비급 챔피언", country: "브라질", style: "킥복싱", heightCm: 193, reachCm: 201, octagonDebut: "2021-11-06",
    summary: "글로리 킥복싱 정상에서 UFC로 넘어와 빠르게 두 체급 챔피언에 오른 스트라이커다. 긴 거리와 왼손 훅, 로킥이 대표 무기다.",
    careerHighlights: [
      { title: "UFC 두 체급 챔피언", detail: "미들급과 라이트헤비급 타이틀을 모두 차지해 UFC 역사상 두 체급 챔피언 명단에 올랐다.", sourceLabel: "UFC 선수 프로필", sourceUrl: "https://www.ufc.com/athlete/alex-pereira" },
      { title: "타이틀전 중심의 UFC 질주", detail: "UFC 공식 프로필은 최근 10경기 중 다수가 타이틀전이었다고 기록한다.", sourceLabel: "UFC 선수 프로필", sourceUrl: "https://www.ufc.com/athlete/alex-pereira" },
    ],
    verificationSources: [{ label: "UFC 선수 프로필", url: "https://www.ufc.com/athlete/alex-pereira" }, { label: "UFC 공식 랭킹", url: "https://www.ufc.com/rankings" }], sourceUrl: "https://www.ufc.com/athlete/alex-pereira", verifiedAt: "2026-07-30",
  },
  "Justin Gaethje": {
    name: "Justin Gaethje", nickname: "The Highlight", record: "28-5-0", ranking: "UFC 라이트급 챔피언", country: "미국", style: "레슬링 · 타격", heightCm: 180, reachCm: 178, octagonDebut: "2017-07-08",
    summary: "NCAA 디비전 I 레슬링 기반 위에 전진 압박 타격을 얹은 라이트급 대표 흥행 파이터다. 위험을 감수하는 난타전과 높은 KO 비율로 유명하다.",
    careerHighlights: [
      { title: "UFC 라이트급 타이틀과 두 번의 잠정 타이틀", detail: "UFC 공식 프로필은 게이치가 두 차례 잠정 타이틀을 획득했고, 2026년 통합 타이틀을 차지했다고 정리한다.", sourceLabel: "UFC 선수 프로필", sourceUrl: "https://www.ufc.com/athlete/justin-gaethje?page=1" },
      { title: "21승 KO와 BMF 타이틀", detail: "UFC 프로필 기준 21회의 KO승을 기록했고, 2023년 더스틴 포이리에를 꺾고 BMF 타이틀을 얻었다.", sourceLabel: "UFC 선수 프로필", sourceUrl: "https://www.ufc.com/athlete/justin-gaethje?page=1" },
    ],
    verificationSources: [{ label: "UFC 선수 프로필", url: "https://www.ufc.com/athlete/justin-gaethje?page=1" }, { label: "UFC 공식 랭킹", url: "https://www.ufc.com/rankings" }], sourceUrl: "https://www.ufc.com/athlete/justin-gaethje?page=1", verifiedAt: "2026-07-30",
  },
  "Jon Jones": {
    name: "Jon Jones", nickname: "Bones", record: "28-1-0", ranking: "전 UFC 라이트헤비급 · 헤비급 챔피언", country: "미국", style: "레슬링 · MMA", heightCm: 193, reachCm: 215, octagonDebut: "2008-08-09",
    summary: "라이트헤비급을 장기간 지배한 뒤 헤비급 타이틀까지 차지한 UFC 역사상 가장 긴 커리어를 가진 챔피언 중 한 명이다.",
    careerHighlights: [
      { title: "UFC 최연소 챔피언", detail: "UFC 프로필은 존스가 UFC 역사상 최연소 챔피언이라고 기록한다.", sourceLabel: "UFC 선수 프로필", sourceUrl: "https://www.ufc.com/athlete/jon-jones" },
      { title: "라이트헤비급 최다 방어 경신", detail: "첫 타이틀 재임 동안 8차 방어에 성공하며 기존 라이트헤비급 최다 방어 기록을 넘겼다.", sourceLabel: "UFC 선수 프로필", sourceUrl: "https://www.ufc.com/athlete/jon-jones" },
    ],
    verificationSources: [{ label: "UFC 선수 프로필", url: "https://www.ufc.com/athlete/jon-jones" }, { label: "UFC 공식 랭킹", url: "https://www.ufc.com/rankings" }], sourceUrl: "https://www.ufc.com/athlete/jon-jones", verifiedAt: "2026-07-30",
  },
  "Dustin Poirier": {
    name: "Dustin Poirier", nickname: "The Diamond", record: "30-10-0", ranking: "전 UFC 라이트급 잠정 챔피언", country: "미국", style: "복싱 · 주짓수", heightCm: 175, reachCm: 183, octagonDebut: "2011-01-01",
    summary: "페더급부터 라이트급 정상권까지 긴 시간을 경쟁한 베테랑이다. 난타전의 압박과 길로틴·다스 초크를 함께 갖춘 올라운더로 평가받는다.",
    careerHighlights: [{ title: "라이트급 잠정 챔피언", detail: "UFC 236에서 맥스 할로웨이를 꺾고 잠정 라이트급 타이틀을 차지했다.", sourceLabel: "UFC 선수 프로필", sourceUrl: "https://www.ufc.com/athlete/dustin-poirier" }, { title: "BMF와 타이틀전의 중심", detail: "게이치, 맥그리거, 챈들러 등과의 대표전으로 라이트급의 한 시대를 이끌었다.", sourceLabel: "UFC 선수 프로필", sourceUrl: "https://www.ufc.com/athlete/dustin-poirier" }],
    verificationSources: [{ label: "UFC 선수 프로필", url: "https://www.ufc.com/athlete/dustin-poirier" }], sourceUrl: "https://www.ufc.com/athlete/dustin-poirier", verifiedAt: "2026-07-30",
  },
  "Stipe Miocic": {
    name: "Stipe Miocic", nickname: "Stone Cold", record: "20-5-0", ranking: "전 UFC 헤비급 챔피언", country: "미국", style: "복싱 · 레슬링", heightCm: 193, reachCm: 203, octagonDebut: "2011-10-08",
    summary: "소방관 경력과 함께 UFC 헤비급을 지배한 클리블랜드 출신 챔피언이다. 거리 조절과 복싱, 테이크다운 방어가 커리어의 중심이었다.",
    careerHighlights: [{ title: "헤비급 타이틀 3연속 방어", detail: "UFC 헤비급 타이틀을 세 차례 연속 방어하며 디비전의 기준을 세웠다.", sourceLabel: "UFC 선수 프로필", sourceUrl: "https://www.ufc.com/athlete/stipe-miocic" }, { title: "은가누와의 라이벌전", detail: "프란시스 은가누와 두 차례 헤비급 타이틀전을 치렀다.", sourceLabel: "UFC 선수 프로필", sourceUrl: "https://www.ufc.com/athlete/stipe-miocic" }],
    verificationSources: [{ label: "UFC 선수 프로필", url: "https://www.ufc.com/athlete/stipe-miocic" }], sourceUrl: "https://www.ufc.com/athlete/stipe-miocic", verifiedAt: "2026-07-30",
  },
  "Francis Ngannou": {
    name: "Francis Ngannou", nickname: "The Predator", record: "18-3-0", ranking: "전 UFC 헤비급 챔피언", country: "카메룬", style: "복싱 · MMA", heightCm: 193, reachCm: 211, octagonDebut: "2015-12-19",
    summary: "카메룬에서 프랑스를 거쳐 UFC 헤비급 정상까지 오른 피니셔다. 한 방의 위력뿐 아니라 미오치치와의 재대결에서 보여 준 레슬링 대응으로도 평가받는다.",
    careerHighlights: [{ title: "UFC 헤비급 챔피언", detail: "UFC 260에서 스티페 미오치치를 KO로 꺾고 헤비급 타이틀을 차지했다.", sourceLabel: "UFC 선수 프로필", sourceUrl: "https://www.ufc.com/athlete/francis-ngannou" }, { title: "미오치치와의 두 번의 타이틀전", detail: "헤비급의 대표 라이벌 구도를 만든 두 경기를 치렀다.", sourceLabel: "UFC 선수 프로필", sourceUrl: "https://www.ufc.com/athlete/francis-ngannou" }],
    verificationSources: [{ label: "UFC 선수 프로필", url: "https://www.ufc.com/athlete/francis-ngannou" }], sourceUrl: "https://www.ufc.com/athlete/francis-ngannou", verifiedAt: "2026-07-30",
  },
  "Conor McGregor": archivedLegend({
    name: "Conor McGregor", nickname: "The Notorious", record: "22-6-0", ranking: "전 UFC 페더급 · 라이트급 챔피언", country: "아일랜드", style: "복싱 · 가라테", summary: "왼손 카운터와 강한 자기 연출로 UFC를 세계적인 대중 스포츠로 확장한 더블 챔피언이다.", sourceUrl: "https://www.ufc.com/athlete/conor-mcgregor",
    highlights: [["UFC 최초 동시 두 체급 챔피언", "페더급 챔피언으로서 UFC 205에서 에디 알바레즈를 꺾고 라이트급 타이틀까지 얻었다."], ["13초 타이틀전 KO", "UFC 194에서 조제 알도를 13초 만에 KO로 꺾어 페더급 챔피언이 됐다."]],
  }),
  "Amanda Nunes": archivedLegend({
    name: "Amanda Nunes", nickname: "The Lioness", record: "23-5-0", ranking: "전 UFC 여성 밴텀급 · 페더급 챔피언", country: "브라질", style: "무에타이 · 주짓수", summary: "두 체급 타이틀을 동시에 보유하고 론다 로우지, 크리스 사이보그 등 역대 강자들을 꺾은 여성 MMA의 상징이다.", sourceUrl: "https://www.ufc.com/athlete/amanda-nunes",
    highlights: [["UFC 여성 더블 챔피언", "여성 밴텀급과 페더급 타이틀을 모두 차지해 두 체급 정상에 섰다."], ["전설급 상대 연속 제압", "론다 로우지와 크리스 사이보그를 모두 KO로 꺾으며 챔피언 시대를 만들었다."]],
  }),
  "Henry Cejudo": archivedLegend({
    name: "Henry Cejudo", nickname: "Triple C", record: "16-4-0", ranking: "전 UFC 플라이급 · 밴텀급 챔피언", country: "미국", style: "올림픽 레슬링 · 복싱", summary: "올림픽 레슬링 금메달리스트가 UFC 두 체급 챔피언이 된 드문 이력의 파이터다.", sourceUrl: "https://www.ufc.com/athlete/henry-cejudo",
    highlights: [["올림픽 금메달과 UFC 두 체급 타이틀", "2008년 올림픽 레슬링 금메달 뒤 UFC 플라이급과 밴텀급 챔피언에 올랐다."], ["드미트리어스 존슨 격파", "UFC 227에서 존슨을 꺾고 플라이급 타이틀을 차지했다."]],
  }),
  "Eddie Alvarez": archivedLegend({
    name: "Eddie Alvarez", nickname: "The Underground King", record: "30-8-0", ranking: "전 UFC 라이트급 챔피언", country: "미국", style: "복싱 · 레슬링", summary: "여러 메이저 단체를 거쳐 UFC 라이트급 정상에 오른 필라델피아 출신 베테랑이다.", sourceUrl: "https://www.ufc.com/athlete/eddie-alvarez",
    highlights: [["UFC 라이트급 챔피언", "UFC 205에서 라파엘 도스 안요스를 꺾고 라이트급 타이틀을 차지했다."], ["다단체 정상 경력", "벨라토르와 UFC에서 모두 챔피언에 오른 라이트급 스타다."]],
  }),
  "Anthony Pettis": archivedLegend({
    name: "Anthony Pettis", nickname: "Showtime", record: "25-14-0", ranking: "전 UFC 라이트급 챔피언", country: "미국", style: "태권도 · 주짓수", summary: "화려한 킥과 서브미션을 함께 갖춘 WEC·UFC 시대의 창의적 라이트급 챔피언이다.", sourceUrl: "https://www.ufc.com/athlete/anthony-pettis",
    highlights: [["WEC·UFC 라이트급 정상", "WEC 라이트급 타이틀을 얻은 뒤 UFC 통합 타이틀까지 차지했다."], ["쇼타임 킥", "케이지를 밟아 차는 장면으로 MMA의 대표적인 하이라이트를 남겼다."]],
  }),
  "Benson Henderson": archivedLegend({
    name: "Benson Henderson", nickname: "Smooth", record: "30-12-0", ranking: "전 UFC 라이트급 챔피언", country: "미국", style: "태권도 · 주짓수", summary: "꾸준한 체력과 강한 그래플링으로 UFC 라이트급 타이틀을 세 차례 방어한 챔피언이다.", sourceUrl: "https://www.ufc.com/athlete/benson-henderson",
    highlights: [["라이트급 타이틀 3연속 방어", "프랭키 에드가, 네이트 디아즈, 길버트 멜렌데즈를 상대로 타이틀 방어에 성공했다."], ["WEC·UFC 정상급 경력", "WEC 라이트급 챔피언 뒤 UFC 통합 체급의 챔피언이 됐다."]],
  }),
  "Nate Diaz": archivedLegend({
    name: "Nate Diaz", nickname: "", record: "22-13-0", ranking: "TUF 우승 · UFC 대표 스타", country: "미국", style: "복싱 · 브라질리언 주짓수", summary: "스톡턴 특유의 압박 타격과 주짓수로 라이트급·웰터급의 굵직한 흥행전을 만든 팬 선호 파이터다.", sourceUrl: "https://www.ufc.com/athlete/nate-diaz",
    highlights: [["TUF 5 우승", "The Ultimate Fighter 시즌 5 우승으로 UFC에 자리 잡았다."], ["맥그리거전 서브미션 승리", "UFC 196에서 코너 맥그리거를 리어네이키드 초크로 꺾었다."]],
  }),
  "Nick Diaz": archivedLegend({
    name: "Nick Diaz", nickname: "", record: "26-10-2", ranking: "전 스트라이크포스 웰터급 챔피언", country: "미국", style: "복싱 · 브라질리언 주짓수", summary: "끊임없는 펀치 볼륨과 주짓수로 닉 디아즈 Army를 만든 웰터급 아이콘이다.", sourceUrl: "https://www.ufc.com/athlete/nick-diaz",
    highlights: [["스트라이크포스 웰터급 챔피언", "스트라이크포스에서 웰터급 타이틀을 보유하며 장기 연승을 만들었다."], ["조르주 생피에르 타이틀전", "UFC 158에서 조르주 생피에르와 웰터급 타이틀전을 치렀다."]],
  }),
  "Chael Sonnen": archivedLegend({
    name: "Chael Sonnen", nickname: "The American Gangster", record: "31-17-1", ranking: "전 UFC 미들급 · 라이트헤비급 타이틀 도전자", country: "미국", style: "레슬링", summary: "최상급 레슬링과 독보적인 마이크워크로 앤더슨 실바 시대의 가장 큰 라이벌 구도를 만든 선수다.", sourceUrl: "https://www.ufc.com/athlete/chael-sonnen",
    highlights: [["실바와의 UFC 117 명승부", "5라운드 내내 압박한 뒤 막판 트라이앵글 초크로 끝난 타이틀전은 미들급 역사에 남았다."], ["두 체급 타이틀 도전", "미들급과 라이트헤비급에서 모두 UFC 타이틀전에 올랐다."]],
  }),
  "Rashad Evans": archivedLegend({
    name: "Rashad Evans", nickname: "Suga", record: "19-8-1", ranking: "전 UFC 라이트헤비급 챔피언", country: "미국", style: "레슬링 · 복싱", summary: "TUF 우승자에서 라이트헤비급 챔피언까지 오른 미국 레슬링 기반의 파이터다.", sourceUrl: "https://www.ufc.com/athlete/rashad-evans",
    highlights: [["TUF 2 우승", "헤비급으로 진행된 The Ultimate Fighter 시즌 2에서 우승했다."], ["포레스트 그리핀 KO", "UFC 92에서 포레스트 그리핀을 꺾고 라이트헤비급 타이틀을 차지했다."]],
  }),
  "Dan Henderson": archivedLegend({
    name: "Dan Henderson", nickname: "Hendo", record: "32-15-0", ranking: "PRIDE · 스트라이크포스 챔피언", country: "미국", style: "올림픽 레슬링 · 복싱", summary: "올림픽 레슬링 배경과 ‘H-Bomb’ 오른손으로 PRIDE, 스트라이크포스, UFC를 아우른 전설이다.", sourceUrl: "https://www.ufc.com/athlete/dan-henderson",
    highlights: [["PRIDE 두 체급 챔피언", "PRIDE 웰터급과 미들급 타이틀을 모두 차지했다."], ["UFC 100의 H-Bomb", "마이클 비스핑을 상대로 한 오른손 KO는 UFC 대표 장면으로 꼽힌다."]],
  }),
  "Alistair Overeem": archivedLegend({
    name: "Alistair Overeem", nickname: "The Demolition Man", record: "47-19-1", ranking: "전 스트라이크포스 헤비급 챔피언", country: "네덜란드", style: "킥복싱 · 주짓수", summary: "K-1 월드 그랑프리와 MMA 헤비급 정상급을 함께 경험한 네덜란드의 대형 스트라이커다.", sourceUrl: "https://www.ufc.com/athlete/alistair-overeem",
    highlights: [["K-1 월드 그랑프리 우승", "2010년 K-1 월드 그랑프리 우승으로 킥복싱 정상에 올랐다."], ["스트라이크포스 헤비급 챔피언", "MMA에서도 스트라이크포스 헤비급 타이틀을 차지했다."]],
  }),
  "Mark Hunt": archivedLegend({
    name: "Mark Hunt", nickname: "The Super Samoan", record: "13-14-1", ranking: "K-1 월드 그랑프리 우승", country: "뉴질랜드", style: "킥복싱 · 복싱", summary: "강력한 오른손과 맷집으로 PRIDE와 UFC 헤비급의 액션 파이터를 상징한 ‘슈퍼 사모안’이다.", sourceUrl: "https://www.ufc.com/athlete/mark-hunt",
    highlights: [["K-1 월드 그랑프리 우승", "2001년 K-1 월드 그랑프리에서 우승했다."], ["UFC 헤비급 잠정 타이틀전", "UFC 200에서 브록 레스너를 상대로 헤비급 잠정 타이틀전을 치렀다."]],
  }),
  "Glover Teixeira": archivedLegend({
    name: "Glover Teixeira", nickname: "", record: "33-9-0", ranking: "전 UFC 라이트헤비급 챔피언", country: "브라질", style: "복싱 · 브라질리언 주짓수", summary: "오랜 정상급 경쟁 끝에 42세로 UFC 라이트헤비급 타이틀을 차지한 브라질 베테랑이다.", sourceUrl: "https://www.ufc.com/athlete/glover-teixeira",
    highlights: [["42세 UFC 챔피언", "UFC 267에서 얀 블라호비치를 꺾고 라이트헤비급 타이틀을 차지했다."], ["긴 정상급 커리어", "존 존스, 앤서니 존슨, 알렉산더 구스타프손 등이 있던 시대를 관통해 경쟁했다."]],
  }),
  "Demian Maia": archivedLegend({
    name: "Demian Maia", nickname: "", record: "28-13-0", ranking: "전 UFC 미들급 · 웰터급 타이틀 도전자", country: "브라질", style: "브라질리언 주짓수", summary: "현대 MMA에서 가장 높은 수준의 주짓수 압박을 보여 준 미들급·웰터급 그래플러다.", sourceUrl: "https://www.ufc.com/athlete/demian-maia",
    highlights: [["두 체급 타이틀 도전", "미들급 앤더슨 실바전과 웰터급 타이론 우들리전에서 UFC 타이틀에 도전했다."], ["주짓수 기반 연승", "테이크다운과 백 컨트롤을 중심으로 웰터급 정상권 연승을 만들었다."]],
  }),
  "T.J. Dillashaw": archivedLegend({
    name: "T.J. Dillashaw", nickname: "", record: "18-5-0", ranking: "전 UFC 밴텀급 챔피언", country: "미국", style: "레슬링 · 킥복싱", summary: "빠른 스텝과 각도 변화로 도미닉 크루즈, 코디 가브란트 시대의 밴텀급 경쟁을 이끈 챔피언이다.", sourceUrl: "https://www.ufc.com/athlete/tj-dillashaw",
    highlights: [["UFC 밴텀급 두 차례 정상", "헤난 바라오를 꺾고 챔피언이 된 뒤 코디 가브란트를 상대로 타이틀을 되찾았다."], ["바라오전 대역전", "UFC 173에서 바라오를 TKO로 이겨 밴텀급 판도를 바꿨다."]],
  }),
  "Renan Barao": archivedLegend({
    name: "Renan Barao", nickname: "The Baron", record: "34-9-0", ranking: "전 UFC 밴텀급 챔피언", country: "브라질", style: "무에타이 · 브라질리언 주짓수", summary: "긴 무패 행진을 바탕으로 WEC 통합 뒤 밴텀급 정상에 오른 브라질 챔피언이다.", sourceUrl: "https://www.ufc.com/athlete/renan-barao",
    highlights: [["UFC 밴텀급 챔피언", "유라이어 페이버를 꺾고 잠정 타이틀을 얻은 뒤 통합 챔피언이 됐다."], ["장기 무패 행진", "정상에 오르기 전 오랜 기간 패배 없이 경쟁했다."]],
  }),
  "Carla Esparza": archivedLegend({
    name: "Carla Esparza", nickname: "Cookie Monster", record: "22-7-0", ranking: "전 UFC 여성 스트로급 챔피언", country: "미국", style: "레슬링 · 브라질리언 주짓수", summary: "TUF 20 우승으로 초대 UFC 여성 스트로급 챔피언이 된 뒤 두 번째 정상에도 오른 그래플러다.", sourceUrl: "https://www.ufc.com/athlete/carla-esparza",
    highlights: [["초대 UFC 여성 스트로급 챔피언", "TUF 20 피날레에서 로즈 나마유나스를 꺾고 초대 챔피언이 됐다."], ["두 번째 타이틀 획득", "UFC 274에서 로즈 나마유나스를 이기고 스트로급 타이틀을 되찾았다."]],
  }),
  "Germaine de Randamie": archivedLegend({
    name: "Germaine de Randamie", nickname: "The Iron Lady", record: "10-5-0", ranking: "초대 UFC 여성 페더급 챔피언", country: "네덜란드", style: "무에타이 · 킥복싱", summary: "정교한 타격으로 UFC 최초 여성 페더급 타이틀전에서 정상에 오른 네덜란드 스트라이커다.", sourceUrl: "https://www.ufc.com/athlete/germaine-de-randamie",
    highlights: [["초대 UFC 여성 페더급 챔피언", "UFC 208에서 홀리 홈을 이기고 초대 여성 페더급 챔피언이 됐다."], ["밴텀급 정상 경쟁", "아만다 누네스와 두 차례 UFC 밴텀급 타이틀전을 치렀다."]],
  }),
  "Rory MacDonald": archivedLegend({
    name: "Rory MacDonald", nickname: "The Red King", record: "24-10-1", ranking: "전 UFC 웰터급 타이틀 도전자", country: "캐나다", style: "가라테 · 브라질리언 주짓수", summary: "긴 거리 타격과 균형 잡힌 그래플링으로 웰터급 세대를 대표했고 로비 라울러와 명승부를 남겼다.", sourceUrl: "https://www.ufc.com/athlete/rory-macdonald",
    highlights: [["UFC 189 라울러전", "로비 라울러와의 웰터급 타이틀전은 UFC 역사상 손꼽히는 명승부로 평가받는다."], ["벨라토르 웰터급 챔피언", "UFC 이후에도 벨라토르 웰터급 타이틀을 차지했다."]],
  }),
};
