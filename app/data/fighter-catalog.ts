// 대진표와 검수 프로필에 등장하는 모든 선수를 검색 가능한 하나의 목록으로 만든다.
import { EVENTS } from "./events.ts";
import {
  FEATURED_FIGHTERS,
  FORMER_KOREAN_FIGHTERS,
  KOREAN_FIGHTERS,
} from "./fighters.ts";
import { unofficialWorldRanking } from "./unofficial-rankings.ts";
import type { SearchableFighter } from "../lib/ranking-search.ts";

function cleanDivision(weight: string) {
  return weight.replace(/\s*타이틀전$/, "");
}

const eventFighters: SearchableFighter[] = EVENTS.flatMap((event) =>
  event.bouts.flatMap((bout) => [
    {
      name: bout.left,
      koName: bout.leftKo,
      division: cleanDivision(bout.weight),
    },
    {
      name: bout.right,
      koName: bout.rightKo,
      division: cleanDivision(bout.weight),
    },
  ]),
);

export const SEARCHABLE_FIGHTERS = [
  ...eventFighters,
  ...KOREAN_FIGHTERS,
  ...FORMER_KOREAN_FIGHTERS,
  ...FEATURED_FIGHTERS,
].reduce<SearchableFighter[]>((fighters, fighter) => {
  if (!fighters.some((existing) => existing.name === fighter.name)) {
    fighters.push({
      ...fighter,
      unofficialRanking: unofficialWorldRanking(fighter.name),
    });
  }
  return fighters;
}, []);
