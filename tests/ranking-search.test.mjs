// 최두호·올리베이라·챔피언 검색의 회귀를 검증한다.
import assert from "node:assert/strict";
import test from "node:test";
import {
  FORMER_KOREAN_FIGHTERS,
  KOREAN_FIGHTERS,
} from "../app/data/fighters.ts";
import { rankingKoreanName } from "../app/data/ranking-names.ts";
import { UFC_RANKING_DIVISIONS } from "../app/data/rankings.ts";
import {
  filterRankingDivisions,
  findUnrankedFighterMatches,
} from "../app/lib/ranking-search.ts";

test("finds Choi Doo-ho as an unranked Korean fighter", () => {
  const divisions = filterRankingDivisions(
    UFC_RANKING_DIVISIONS,
    "최두호",
    rankingKoreanName,
  );
  const unranked = findUnrankedFighterMatches(
    [...KOREAN_FIGHTERS, ...FORMER_KOREAN_FIGHTERS],
    UFC_RANKING_DIVISIONS,
    "최두호",
  );

  assert.equal(divisions.length, 0);
  assert.deepEqual(
    unranked.map((fighter) => fighter.name),
    ["Dooho Choi"],
  );
});

test("does not expose the unrelated lightweight champion for Oliveira", () => {
  const [lightweight] = filterRankingDivisions(
    UFC_RANKING_DIVISIONS,
    "올리베이라",
    rankingKoreanName,
  );

  assert.equal(lightweight.id, "lightweight");
  assert.equal(lightweight.champion, "Justin Gaethje");
  assert.equal(lightweight.championMatches, false);
  assert.equal(lightweight.showChampionHeader, false);
  assert.deepEqual(
    lightweight.meta.map((fighter) => fighter.name),
    ["Charles Oliveira"],
  );
  assert.deepEqual(
    lightweight.media.map((fighter) => fighter.name),
    ["Charles Oliveira"],
  );
});

test("marks a champion search instead of returning empty ranking boards", () => {
  const [lightweight] = filterRankingDivisions(
    UFC_RANKING_DIVISIONS,
    "게이치",
    rankingKoreanName,
  );

  assert.equal(lightweight.champion, "Justin Gaethje");
  assert.equal(lightweight.championMatches, true);
  assert.equal(lightweight.showChampionHeader, false);
  assert.deepEqual(lightweight.meta, []);
  assert.deepEqual(lightweight.media, []);
});
