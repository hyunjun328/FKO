// 주요 현역과 전설급 UFC 선수의 검증 출처 기반 상세 프로필을 제공한다.
import type { FighterProfile } from "./fighters";

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
};
