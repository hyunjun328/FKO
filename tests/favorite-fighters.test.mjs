// 관심 선수 저장 목록의 정규화와 등록·해제 동작을 검증한다.
import assert from "node:assert/strict";
import test from "node:test";
import {
  parseFavoriteFighterNames,
  toggleFavoriteFighterName,
} from "../app/lib/favorite-fighters.ts";
import { findFighterSearchResultByName } from "../app/lib/fighter-search.ts";

test("keeps only unique usable favorite fighter names", () => {
  assert.deepEqual(
    parseFavoriteFighterNames(["Islam Makhachev", "", "Islam Makhachev", 1]),
    ["Islam Makhachev"],
  );
  assert.deepEqual(parseFavoriteFighterNames("Islam Makhachev"), []);
});

test("adds and removes a favorite fighter by name", () => {
  const added = toggleFavoriteFighterName([], "Islam Makhachev");
  assert.deepEqual(added, ["Islam Makhachev"]);
  assert.deepEqual(toggleFavoriteFighterName(added, "Islam Makhachev"), []);
});

test("resolves a saved fighter to current event and ranking data", () => {
  const fighter = findFighterSearchResultByName("Islam Makhachev", Date.parse("2026-08-04T00:00:00Z"));
  assert.equal(fighter?.koName, "이슬람 마카체프");
  assert.match(fighter?.ranking ?? "", /챔피언/);
  assert.equal(fighter?.event?.label, "예정 대회");
});
