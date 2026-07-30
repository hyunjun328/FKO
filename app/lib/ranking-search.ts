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

function editDistance(left: string, right: string) {
  const previous = Array.from({ length: right.length + 1 }, (_, index) => index);

  for (let leftIndex = 1; leftIndex <= left.length; leftIndex += 1) {
    let diagonal = previous[0];
    previous[0] = leftIndex;
    for (let rightIndex = 1; rightIndex <= right.length; rightIndex += 1) {
      const above = previous[rightIndex];
      previous[rightIndex] = Math.min(
        previous[rightIndex] + 1,
        previous[rightIndex - 1] + 1,
        diagonal + Number(left[leftIndex - 1] !== right[rightIndex - 1]),
      );
      diagonal = above;
    }
  }

  return previous[right.length];
}

function fuzzyIncludes(candidate: string, query: string) {
  if (candidate.includes(query)) return true;
  if (query.length < 3) return false;

  const tolerance = query.length >= 7 ? 2 : 1;
  for (let length = query.length - tolerance; length <= query.length + tolerance; length += 1) {
    for (let start = 0; start + length <= candidate.length; start += 1) {
      if (editDistance(candidate.slice(start, start + length), query) <= tolerance) {
        return true;
      }
    }
  }

  return false;
}

export function rankingFighterMatches(
  name: string,
  query: string,
  koreanName: (name: string) => string,
  allowFuzzy = true,
) {
  const normalizedQuery = normalizeRankingQuery(query);
  const candidates = [koreanName(name), name, ...name.split(/\s+/)].map(
    normalizeRankingQuery,
  );
  return candidates.some((candidate) =>
    allowFuzzy
      ? fuzzyIncludes(candidate, normalizedQuery)
      : candidate.includes(normalizedQuery),
  );
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

  const hasExactFighterMatch = divisions.some((division) =>
    [
      division.champion,
      ...division.meta.map((fighter) => fighter.name),
      ...division.media.map((fighter) => fighter.name),
    ].some((name) => rankingFighterMatches(name, query, koreanName, false)),
  );

  return divisions.flatMap((division) => {
    const divisionMatches = normalizeRankingQuery(
      `${division.label} ${division.englishLabel}`,
    ).includes(query);
    const championMatches = rankingFighterMatches(
      division.champion,
      query,
      koreanName,
      !hasExactFighterMatch,
    );
    const meta = divisionMatches
      ? division.meta
      : division.meta.filter((fighter) =>
          rankingFighterMatches(
            fighter.name,
            query,
            koreanName,
            !hasExactFighterMatch,
          ),
        );
    const media = divisionMatches
      ? division.media
      : division.media.filter((fighter) =>
          rankingFighterMatches(
            fighter.name,
            query,
            koreanName,
            !hasExactFighterMatch,
          ),
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
      rankingFighterMatches(fighter.name, query, () => fighter.koName),
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
