// 랭킹 선수와 랭킹 밖 코리안 파이터의 검색 결과를 정확히 구분한다.
import type { RankingDivision } from "../data/rankings";
import type { UnofficialWorldRanking } from "../data/unofficial-rankings";

export type SearchableFighter = {
  name: string;
  koName: string;
  division: string;
  statusLabel?: string;
  unofficialRanking?: UnofficialWorldRanking;
};

export type RankingDivisionSearchResult = RankingDivision & {
  championMatches: boolean;
  divisionMatches: boolean;
  showChampionHeader: boolean;
};

export function normalizeRankingQuery(value: string) {
  return value.toLocaleLowerCase("ko-KR").replace(/\s+/g, "");
}

export function rankingFighterMatches(
  name: string,
  query: string,
  koreanName: (name: string) => string,
) {
  return normalizeRankingQuery(`${koreanName(name)} ${name}`).includes(query);
}

export function filterRankingDivisions(
  divisions: readonly RankingDivision[],
  rawQuery: string,
  koreanName: (name: string) => string,
): RankingDivisionSearchResult[] {
  const query = normalizeRankingQuery(rawQuery);

  if (!query) {
    return divisions.map((division) => ({
      ...division,
      championMatches: false,
      divisionMatches: false,
      showChampionHeader: true,
    }));
  }

  return divisions.flatMap((division) => {
    const divisionMatches = normalizeRankingQuery(
      `${division.label} ${division.englishLabel}`,
    ).includes(query);
    const championMatches = rankingFighterMatches(
      division.champion,
      query,
      koreanName,
    );
    const meta = divisionMatches
      ? division.meta
      : division.meta.filter((fighter) =>
          rankingFighterMatches(fighter.name, query, koreanName),
        );
    const media = divisionMatches
      ? division.media
      : division.media.filter((fighter) =>
          rankingFighterMatches(fighter.name, query, koreanName),
        );

    if (!divisionMatches && !championMatches && !meta.length && !media.length) {
      return [];
    }

    return [
      {
        ...division,
        championMatches,
        divisionMatches,
        showChampionHeader: divisionMatches,
        meta,
        media,
      },
    ];
  });
}

export function findUnrankedFighterMatches(
  fighters: readonly SearchableFighter[],
  divisions: readonly RankingDivision[],
  rawQuery: string,
) {
  const query = normalizeRankingQuery(rawQuery);

  if (!query) {
    return [];
  }

  const rankedNames = new Set(
    divisions.flatMap((division) => [
      division.champion,
      ...division.meta.map((fighter) => fighter.name),
      ...division.media.map((fighter) => fighter.name),
    ]),
  );

  return fighters.filter(
    (fighter) =>
      !rankedNames.has(fighter.name) &&
      normalizeRankingQuery(`${fighter.koName} ${fighter.name}`).includes(query),
  );
}

export function findBeyondOfficialRankingFighters(
  fighters: readonly SearchableFighter[],
  division: RankingDivision,
  koreanName: (name: string) => string,
) {
  const rankedNames = new Set([
    division.champion,
    ...division.meta.map((fighter) => fighter.name),
    ...division.media.map((fighter) => fighter.name),
  ]);
  const rankedKoreanNames = new Set(
    [...rankedNames].map((name) => koreanName(name)),
  );
  const inactiveStatuses = new Set([
    "은퇴",
    "전 UFC",
    "UFC 활동 종료",
    "명예의 전당",
  ]);

  return fighters
    .filter(
      (fighter) =>
        fighter.division.split(" · ").includes(division.label) &&
        !rankedNames.has(fighter.name) &&
        !rankedKoreanNames.has(fighter.koName) &&
        !inactiveStatuses.has(fighter.statusLabel ?? ""),
    )
    .sort((left, right) => {
      const leftRank = left.unofficialRanking?.rank ?? Number.MAX_SAFE_INTEGER;
      const rightRank = right.unofficialRanking?.rank ?? Number.MAX_SAFE_INTEGER;

      if (leftRank !== rightRank) {
        return leftRank - rightRank;
      }

      return left.koName.localeCompare(right.koName, "ko-KR");
    });
}
