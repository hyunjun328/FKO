"use client";
// 홈 화면에서 선수의 대회, 최근 경기, 랭킹 정보를 함께 검색한다.

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  findFighterSearchResults,
  formatFighterSearchEvent,
} from "../lib/fighter-search";
import type { FighterSelection } from "./FighterProfileDialog";
import { FighterFace } from "./FighterFace";

export function HomeFighterSearch({
  onSelect,
  onOpenEvent,
}: {
  onSelect: (fighter: FighterSelection) => void;
  onOpenEvent: (eventId: string) => void;
}) {
  const [query, setQuery] = useState("");
  const results = useMemo(() => findFighterSearchResults(query), [query]);

  return (
    <section className="home-fighter-search" aria-labelledby="fighter-search-title">
      <div className="home-fighter-search-head">
        <div>
          <h2 id="fighter-search-title">선수 통합 검색</h2>
        </div>
      </div>
      <form className="home-fighter-search-form" onSubmit={(event) => event.preventDefault()}>
        <div>
          <input
            id="home-fighter-search-input"
            type="search"
            aria-label="선수 이름"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="예. 알렉스 페레이라, Pereira"
            autoComplete="off"
          />
          <button type="submit">검색</button>
        </div>
      </form>
      {query.trim() ? (
        results.length ? (
          <div className="home-fighter-search-results" aria-live="polite">
            {results.map((fighter) => (
              <article className="home-fighter-search-result" key={fighter.name}>
                <button
                  type="button"
                  className="home-fighter-search-name"
                  onClick={() =>
                    onSelect({
                      name: fighter.name,
                      koName: fighter.koName,
                      weight: fighter.division,
                      ranking: fighter.ranking,
                    })
                  }
                  aria-label={`${fighter.koName} 선수 정보 보기`}
                >
                  <FighterFace
                    name={fighter.name}
                    koName={fighter.koName}
                    className="home-fighter-search-face"
                    gender={fighter.division.includes("여성") ? "female" : "male"}
                  />
                  <span>
                    <strong>{fighter.koName}</strong>
                    <small lang="en">{fighter.name}</small>
                  </span>
                </button>
                <div className="home-fighter-search-facts">
                  {fighter.event?.label === "예정 대회" ? (
                    <button
                      type="button"
                      className="home-fighter-search-fact home-fighter-search-fact-action"
                      onClick={() => onOpenEvent(fighter.event!.id)}
                      aria-label={`${fighter.event.title} 예정 경기 보기`}
                    >
                      <b>예정 경기</b>
                      <small>
                        {`${fighter.event.title} · vs ${fighter.event.opponentKo} · ${formatFighterSearchEvent(fighter.event.startUtc)}`}
                      </small>
                    </button>
                  ) : (
                    <span className="home-fighter-search-fact">
                      <b>대회</b>
                      <small>
                        {fighter.event
                          ? `${fighter.event.label} · ${fighter.event.title} · vs ${fighter.event.opponentKo} · ${formatFighterSearchEvent(fighter.event.startUtc)}`
                          : "연결된 대회 정보 없음"}
                      </small>
                    </span>
                  )}
                  <span className="home-fighter-search-fact">
                    <b>최근 경기</b>
                    <small>
                      {fighter.lastFight
                        ? `${fighter.lastFight.result} · vs ${fighter.lastFight.opponentKo} · ${fighter.lastFight.date} · ${fighter.lastFight.method}`
                        : "검수된 최근 경기 정보 없음"}
                    </small>
                  </span>
                  <Link className="home-fighter-search-fact home-fighter-search-fact-action" href="/rankings">
                    <b>랭킹</b>
                    <small>{fighter.ranking}</small>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : <p className="home-fighter-search-empty">일치하는 선수를 찾지 못했습니다.</p>
      ) : null}
    </section>
  );
}
