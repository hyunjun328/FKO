"use client";
// 저장한 관심 선수의 일정과 랭킹을 홈 화면에서 다시 보여 준다.

import { useEffect, useMemo, useState } from "react";
import {
  FAVORITE_FIGHTERS_CHANGE,
  favoriteFighterNames,
} from "../lib/favorite-fighters";
import {
  findFighterSearchResultByName,
  formatFighterSearchEvent,
} from "../lib/fighter-search";
import type { FighterSelection } from "./FighterProfileDialog";
import { FighterFace } from "./FighterFace";

export function FavoriteFighters({
  onSelect,
}: {
  onSelect: (fighter: FighterSelection) => void;
}) {
  const [names, setNames] = useState<string[]>([]);

  useEffect(() => {
    const refresh = () => setNames(favoriteFighterNames());
    refresh();
    window.addEventListener(FAVORITE_FIGHTERS_CHANGE, refresh);
    window.addEventListener("storage", refresh);
    return () => {
      window.removeEventListener(FAVORITE_FIGHTERS_CHANGE, refresh);
      window.removeEventListener("storage", refresh);
    };
  }, []);

  const fighters = useMemo(
    () => names.flatMap((name) => {
      const fighter = findFighterSearchResultByName(name);
      return fighter ? [fighter] : [];
    }),
    [names],
  );

  if (!fighters.length) return null;

  return (
    <section className="favorite-fighters" aria-labelledby="favorite-fighters-title">
      <h2 id="favorite-fighters-title">관심 선수</h2>
      <div>
        {fighters.map((fighter) => (
          <button
            type="button"
            className="favorite-fighter-card"
            key={fighter.name}
            onClick={() => onSelect({
              name: fighter.name,
              koName: fighter.koName,
              weight: fighter.division,
              ranking: fighter.ranking,
            })}
            aria-label={`${fighter.koName} 선수 정보 보기`}
          >
            <span className="favorite-fighter-name">
              <FighterFace
                name={fighter.name}
                koName={fighter.koName}
                className="favorite-fighter-face"
                gender={fighter.division.includes("여성") ? "female" : "male"}
              />
              <strong>{fighter.koName}</strong>
            </span>
            <span className="favorite-fighter-facts">
              <span>
                <b>다음 경기</b>
                {fighter.event
                  ? `${fighter.event.opponentKo} · ${formatFighterSearchEvent(fighter.event.startUtc)}`
                  : "발표된 일정 없음"}
              </span>
              <span>
                <b>랭킹</b>
                {fighter.ranking}
              </span>
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
