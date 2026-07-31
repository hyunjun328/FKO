// 최두호·올리베이라·챔피언 검색의 회귀를 검증한다.
import assert from "node:assert/strict";
import test from "node:test";
import {
  FIGHTER_PROFILES,
  FORMER_KOREAN_FIGHTERS,
  KOREAN_FIGHTERS,
} from "../app/data/fighters.ts";
import { EVENTS } from "../app/data/events.ts";
import { SEARCHABLE_FIGHTERS } from "../app/data/fighter-catalog.ts";
import {
  rankingKoreanName,
  romanizedNameToKorean,
} from "../app/data/ranking-names.ts";
import { UFC_RANKING_DIVISIONS } from "../app/data/rankings.ts";
import { UNOFFICIAL_WORLD_RANKINGS } from "../app/data/unofficial-rankings.ts";
import {
  filterRankingDivisions,
  findBeyondOfficialRankingFighters,
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

test("finds SeokHyeon Ko by the Korean name", () => {
  const unranked = findUnrankedFighterMatches(
    SEARCHABLE_FIGHTERS,
    UFC_RANKING_DIVISIONS,
    "고석현",
  );

  assert.deepEqual(
    unranked.map((fighter) => fighter.name),
    ["SeokHyeon Ko"],
  );
});

test("orders same-name search results by the higher available ranking", () => {
  const fighters = [
    {
      name: "Lower Ranked Fighter",
      koName: "동명이인",
      division: "웰터급",
      unofficialRanking: { rank: 28 },
    },
    {
      name: "Higher Ranked Fighter",
      koName: "동명이인",
      division: "웰터급",
      unofficialRanking: { rank: 7 },
    },
  ];

  assert.deepEqual(
    findUnrankedFighterMatches(fighters, [], "동명이인").map((fighter) => fighter.name),
    ["Higher Ranked Fighter", "Lower Ranked Fighter"],
  );
});

test("finds fighters with small Korean and English spelling mistakes", () => {
  const korean = findUnrankedFighterMatches(
    SEARCHABLE_FIGHTERS,
    UFC_RANKING_DIVISIONS,
    "최두하",
  );
  const english = filterRankingDivisions(
    UFC_RANKING_DIVISIONS,
    "makachef",
    rankingKoreanName,
  );

  assert.deepEqual(korean.map((fighter) => fighter.name), ["Dooho Choi"]);
  assert.equal(
    english.some((division) => division.champion === "Islam Makhachev"),
    true,
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

test("makes every scheduled fighter searchable outside the official top 15", () => {
  const scheduledNames = new Set(
    EVENTS.flatMap((event) =>
      event.bouts.flatMap((bout) => [bout.left, bout.right]),
    ),
  );
  const searchableNames = new Set(
    SEARCHABLE_FIGHTERS.map((fighter) => fighter.name),
  );

  for (const name of scheduledNames) {
    assert.equal(searchableNames.has(name), true, `${name} is missing`);
  }

  const matches = findUnrankedFighterMatches(
    SEARCHABLE_FIGHTERS,
    UFC_RANKING_DIVISIONS,
    "오롤바이",
  );
  assert.deepEqual(
    matches.map((fighter) => fighter.name),
    ["Myktybek Orolbai"],
  );
});

test("labels Fight Matrix positions as date-stamped unofficial world rankings", () => {
  const medic = UNOFFICIAL_WORLD_RANKINGS["Uros Medic"];
  const orolbai = UNOFFICIAL_WORLD_RANKINGS["Myktybek Orolbai"];

  assert.equal(medic.rank, 18);
  assert.equal(orolbai.rank, 23);
  assert.equal(orolbai.provider, "Fight Matrix");
  assert.equal(orolbai.asOf, "2026-07-26");
  assert.match(orolbai.sourceUrl, /fightmatrix\.com/);
});

test("lists active fighters beyond the official top 15 by division", () => {
  const welterweight = UFC_RANKING_DIVISIONS.find(
    (division) => division.id === "welterweight",
  );
  const fighters = findBeyondOfficialRankingFighters(
    SEARCHABLE_FIGHTERS,
    welterweight,
    rankingKoreanName,
  );
  const names = fighters.map((fighter) => fighter.name);

  assert.equal(names.includes("SeokHyeon Ko"), true);
  assert.equal(names.includes("Myktybek Orolbai"), true);
  assert.equal(names.includes("Islam Makhachev"), false);
  assert.equal(names.includes("Dong Hyun Kim"), false);
  assert.equal(fighters[0].unofficialRanking.rank <= 23, true);
});

test("keeps famous career claims attached to explicit verification sources", () => {
  const mcgregor = FIGHTER_PROFILES["Conor McGregor"];

  assert.equal(mcgregor.record, "22승 7패");
  assert.equal(mcgregor.careerHighlights.length, 3);
  assert.equal(mcgregor.verificationSources.length, 4);
  assert.equal(
    mcgregor.careerHighlights.every(
      (highlight) =>
        highlight.sourceLabel.length > 0 &&
        highlight.sourceUrl.startsWith("https://"),
    ),
    true,
  );
});

test("transliterates unmapped romanized fighter names into Korean", () => {
  assert.equal(romanizedNameToKorean("Thomas Williams"), "토마스 윌리엄스");
  assert.equal(rankingKoreanName("Thomas Williams"), "토마스 윌리엄스");
  assert.equal(rankingKoreanName("Islam Makhachev"), "이슬람 마카체프");
});
