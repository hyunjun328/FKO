// UFC 공식 미디어 패널의 남녀 파운드 포 파운드 상위 15명을 제공한다.
import { OFFICIAL_RANKING_SNAPSHOT } from "./official-ranking-snapshot.ts";
export type PoundForPoundEntry = {
  rank: number;
  name: string;
  division: string;
  status: string;
};

const ranked = (
  entries: Array<[name: string, division: string, status: string]>,
): PoundForPoundEntry[] =>
  entries.map(([name, division, status], index) => ({
    rank: index + 1,
    name,
    division,
    status,
  }));

const P4P_RANKING_FALLBACK_SOURCE = {
  officialUrl: "https://www.ufc.com/rankings",
  updatedAt: "2026-07-21",
  checkedAt: "2026-07-30",
};

const MENS_P4P_FALLBACK = ranked([
  ["Islam Makhachev", "웰터급", "챔피언"],
  ["Alexander Volkanovski", "페더급", "챔피언"],
  ["Petr Yan", "밴텀급", "챔피언"],
  ["Justin Gaethje", "라이트급", "챔피언"],
  ["Ilia Topuria", "라이트급", "공식 1위"],
  ["Tom Aspinall", "헤비급", "챔피언"],
  ["Sean Strickland", "미들급", "챔피언"],
  ["Merab Dvalishvili", "밴텀급", "공식 1위"],
  ["Alex Pereira", "라이트헤비급", "공식 상위권"],
  ["Ciryl Gane", "헤비급", "공식 1위"],
  ["Joshua Van", "플라이급", "챔피언"],
  ["Khamzat Chimaev", "미들급", "공식 1위"],
  ["Alexandre Pantoja", "플라이급", "공식 1위"],
  ["Arman Tsarukyan", "라이트급", "공식 2위"],
  ["Charles Oliveira", "라이트급", "공식 3위"],
]);

const fromOfficialSnapshot = (names: string[], fallback: PoundForPoundEntry[]) =>
  names.map((name, index) => {
    const previous = fallback.find((fighter) => fighter.name === name);
    return {
      rank: index + 1,
      name,
      division: previous?.division ?? "UFC 공식 랭킹",
      status: previous?.status ?? "공식 순위",
    };
  });

export const P4P_RANKING_SOURCE = {
  ...P4P_RANKING_FALLBACK_SOURCE,
  updatedAt: OFFICIAL_RANKING_SNAPSHOT.checkedAt || P4P_RANKING_FALLBACK_SOURCE.updatedAt,
  checkedAt: OFFICIAL_RANKING_SNAPSHOT.checkedAt || P4P_RANKING_FALLBACK_SOURCE.checkedAt,
};

export const MENS_P4P_RANKINGS = OFFICIAL_RANKING_SNAPSHOT.mensP4p.length
  ? fromOfficialSnapshot(OFFICIAL_RANKING_SNAPSHOT.mensP4p, MENS_P4P_FALLBACK)
  : MENS_P4P_FALLBACK;

const WOMENS_P4P_FALLBACK = ranked([
  ["Valentina Shevchenko", "여성 플라이급", "챔피언"],
  ["Kayla Harrison", "여성 밴텀급", "챔피언"],
  ["Zhang Weili", "여성 스트로급", "공식 1위"],
  ["Natalia Silva", "여성 플라이급", "공식 1위"],
  ["Manon Fiorot", "여성 플라이급", "공식 2위"],
  ["Mackenzie Dern", "여성 스트로급", "챔피언"],
  ["Alexa Grasso", "여성 플라이급", "공식 3위"],
  ["Erin Blanchfield", "여성 플라이급", "공식 4위"],
  ["Julianna Peña", "여성 밴텀급", "공식 상위권"],
  ["Tatiana Suarez", "여성 스트로급", "공식 상위권"],
  ["Virna Jandiroba", "여성 스트로급", "공식 상위권"],
  ["Yan Xiaonan", "여성 스트로급", "공식 상위권"],
  ["Raquel Pennington", "여성 밴텀급", "공식 상위권"],
  ["Rose Namajunas", "여성 플라이급", "공식 상위권"],
  ["Maycee Barber", "여성 플라이급", "공식 상위권"],
]);

export const WOMENS_P4P_RANKINGS = OFFICIAL_RANKING_SNAPSHOT.womensP4p.length
  ? fromOfficialSnapshot(OFFICIAL_RANKING_SNAPSHOT.womensP4p, WOMENS_P4P_FALLBACK)
  : WOMENS_P4P_FALLBACK;
