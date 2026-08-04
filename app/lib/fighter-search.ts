// 홈 화면 선수 검색에 일정, 최근 경기, 랭킹 요약을 결합한다.
import { EVENTS } from "../data/events.ts";
import { SEARCHABLE_FIGHTERS } from "../data/fighter-catalog.ts";
import { FIGHTER_PROFILES } from "../data/fighters.ts";
import { LEGEND_PROFILES } from "../data/legend-profiles.ts";
import { rankingKoreanName } from "../data/ranking-names.ts";
import { UFC_RANKING_DIVISIONS } from "../data/rankings.ts";
import { unofficialWorldRanking } from "../data/unofficial-rankings.ts";
import {
  normalizeRankingQuery,
  rankingFighterMatches,
  type SearchableFighter,
} from "./ranking-search.ts";

export type FighterSearchResult = SearchableFighter & {
  ranking: string;
  lastFight?: {
    result: "승" | "패" | "무";
    opponentKo: string;
    date: string;
    method: string;
  };
  event?: {
    id: string;
    label: "예정 대회" | "최근 대회";
    title: string;
    opponentKo: string;
    startUtc: string;
  };
};

const KST_DATE_FORMATTER = new Intl.DateTimeFormat("ko-KR", {
  timeZone: "Asia/Seoul",
  month: "long",
  day: "numeric",
  weekday: "short",
});

const rankingFighters: SearchableFighter[] = UFC_RANKING_DIVISIONS.flatMap(
  (division) => [
    {
      name: division.champion,
      koName: rankingKoreanName(division.champion),
      division: division.label,
    },
    ...division.meta.map((fighter) => ({
      name: fighter.name,
      koName: rankingKoreanName(fighter.name),
      division: division.label,
    })),
    ...division.media.map((fighter) => ({
      name: fighter.name,
      koName: rankingKoreanName(fighter.name),
      division: division.label,
    })),
  ],
);

const ALL_SEARCHABLE_FIGHTERS = [
  ...SEARCHABLE_FIGHTERS,
  ...rankingFighters,
].reduce<SearchableFighter[]>((fighters, fighter) => {
  if (!fighters.some((existing) => existing.name === fighter.name)) {
    fighters.push(fighter);
  }
  return fighters;
}, []);

function rankingSummary(name: string) {
  const profile = FIGHTER_PROFILES[name] ?? LEGEND_PROFILES[name];
  if (profile) return profile.ranking;

  const division = UFC_RANKING_DIVISIONS.find((item) =>
    [item.champion, ...item.meta, ...item.media].some((fighter) =>
      typeof fighter === "string" ? fighter === name : fighter.name === name,
    ),
  );
  if (!division) {
    const worldRanking = unofficialWorldRanking(name);
    return worldRanking
      ? `비공식 세계 ${worldRanking.rank}위 · ${worldRanking.provider}`
      : "공식 랭킹 없음";
  }
  if (division.champion === name) return `${division.label} 챔피언`;

  const metaRank = division.meta.find((fighter) => fighter.name === name)?.rank;
  const mediaRank = division.media.find((fighter) => fighter.name === name)?.rank;
  return [
    metaRank ? `Meta ${metaRank}위` : null,
    mediaRank ? `미디어 ${mediaRank}위` : null,
  ].filter(Boolean).join(" · ");
}

function relatedEvent(name: string, now: number) {
  const matches = EVENTS.flatMap((event) => {
    const bout = event.bouts.find(
      (item) => item.left === name || item.right === name,
    );
    if (!bout) return [];
    return [{
      event,
      opponentKo: bout.left === name ? bout.rightKo : bout.leftKo,
    }];
  });
  const upcoming = matches
    .filter(({ event }) => new Date(event.startUtc).getTime() >= now)
    .sort((left, right) =>
      new Date(left.event.startUtc).getTime() - new Date(right.event.startUtc).getTime(),
    )[0];
  const recent = matches
    .filter(({ event }) => new Date(event.startUtc).getTime() < now)
    .sort((left, right) =>
      new Date(right.event.startUtc).getTime() - new Date(left.event.startUtc).getTime(),
    )[0];
  const match = upcoming ?? recent;
  if (!match) return undefined;

  return {
    id: match.event.id,
    label: upcoming ? "예정 대회" as const : "최근 대회" as const,
    title: match.event.title,
    opponentKo: match.opponentKo,
    startUtc: match.event.startUtc,
  };
}

function fighterSearchResult(fighter: SearchableFighter, now: number): FighterSearchResult {
  const profile = FIGHTER_PROFILES[fighter.name] ?? LEGEND_PROFILES[fighter.name];
  return {
    ...fighter,
    ranking: rankingSummary(fighter.name),
    lastFight: profile?.lastFight,
    event: relatedEvent(fighter.name, now),
  };
}

export function formatFighterSearchEvent(startUtc: string) {
  return KST_DATE_FORMATTER.format(new Date(startUtc));
}

export function findFighterSearchResults(rawQuery: string, now = Date.now()) {
  const query = normalizeRankingQuery(rawQuery);
  if (!query) return [];

  return ALL_SEARCHABLE_FIGHTERS
    .filter((fighter) =>
      rankingFighterMatches(fighter.name, query, () => fighter.koName),
    )
    .map((fighter) => fighterSearchResult(fighter, now))
    .sort((left, right) => {
      const leftExact = normalizeRankingQuery(`${left.koName} ${left.name}`) === query;
      const rightExact = normalizeRankingQuery(`${right.koName} ${right.name}`) === query;
      if (leftExact !== rightExact) return leftExact ? -1 : 1;
      return left.koName.localeCompare(right.koName, "ko-KR");
    })
    .slice(0, 8);
}

export function findFighterSearchResultByName(name: string, now = Date.now()) {
  const fighter = ALL_SEARCHABLE_FIGHTERS.find((item) => item.name === name);
  return fighter ? fighterSearchResult(fighter, now) : undefined;
}
