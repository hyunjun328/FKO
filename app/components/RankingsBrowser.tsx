"use client";
// UFC 랭킹을 한글·영문·체급으로 검색하고 체급별 비교표를 보여준다.

import { FormEvent, useMemo, useState } from "react";
import Link from "next/link";
import {
  FORMER_KOREAN_FIGHTERS,
  KOREAN_FIGHTERS,
} from "../data/fighters";
import { rankingKoreanName } from "../data/ranking-names";
import {
  UFC_RANKING_DIVISIONS,
  UFC_RANKING_SOURCE,
  type RankingEntry,
} from "../data/rankings";
import {
  filterRankingDivisions,
  findUnrankedFighterMatches,
  normalizeRankingQuery,
} from "../lib/ranking-search";

function compareRank(entry: RankingEntry, media: RankingEntry[]) {
  const mediaEntry = media.find((fighter) => fighter.name === entry.name);

  if (!mediaEntry) {
    return { label: "미디어 NR", tone: "new" };
  }

  const difference = mediaEntry.rank - entry.rank;

  if (difference === 0) {
    return { label: `미디어 ${mediaEntry.rank}위 · 동일`, tone: "same" };
  }

  return {
    label: `미디어 ${mediaEntry.rank}위 · ${difference > 0 ? "Meta ↑" : "Meta ↓"}${Math.abs(difference)}`,
    tone: difference > 0 ? "up" : "down",
  };
}

function RankingName({ name }: { name: string }) {
  return (
    <span className="ranking-fighter-name">
      <strong>{rankingKoreanName(name)}</strong>
      <small lang="en">{name}</small>
    </span>
  );
}

function RankingChampionResult({ name }: { name: string }) {
  return (
    <div className="ranking-board-champion-result">
      <span className="ranking-champion-mark">C</span>
      <RankingName name={name} />
      <strong>현 UFC 챔피언</strong>
    </div>
  );
}

export function RankingsBrowser() {
  const [inputValue, setInputValue] = useState("");
  const [query, setQuery] = useState("");
  const normalizedQuery = normalizeRankingQuery(query);

  const divisions = useMemo(
    () =>
      filterRankingDivisions(
        UFC_RANKING_DIVISIONS,
        normalizedQuery,
        rankingKoreanName,
      ),
    [normalizedQuery],
  );

  const unrankedMatches = useMemo(
    () =>
      findUnrankedFighterMatches(
        [...KOREAN_FIGHTERS, ...FORMER_KOREAN_FIGHTERS],
        UFC_RANKING_DIVISIONS,
        normalizedQuery,
      ),
    [normalizedQuery],
  );

  const resultCount = useMemo(() => {
    const names = new Set<string>();

    divisions.forEach((division) => {
      if (!normalizedQuery || division.championMatches) {
        names.add(division.champion);
      }
      division.meta.forEach((fighter) => names.add(fighter.name));
      division.media.forEach((fighter) => names.add(fighter.name));
    });
    unrankedMatches.forEach((fighter) => names.add(fighter.name));

    return names.size;
  }, [divisions, normalizedQuery, unrankedMatches]);

  function submitSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setQuery(inputValue.trim());
  }

  function resetSearch() {
    setInputValue("");
    setQuery("");
  }

  return (
    <>
      <section className="ranking-search-panel" aria-label="선수 랭킹 검색">
        <form onSubmit={submitSearch} role="search">
          <label htmlFor="ranking-search">선수 또는 체급 검색</label>
          <div>
            <input
              id="ranking-search"
              type="search"
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
              placeholder="예: 마카체프, Makhachev, 웰터급"
              autoComplete="off"
            />
            <button type="submit">검색</button>
          </div>
        </form>
        <p aria-live="polite">
          {query ? (
            <>
              <b>‘{query}’</b> 검색 결과 · {resultCount}명
            </>
          ) : (
            <>챔피언, 공식 1~15위와 코리안 파이터를 검색할 수 있습니다.</>
          )}
        </p>
        {query ? (
          <button
            className="ranking-search-reset"
            type="button"
            onClick={resetSearch}
          >
            전체 랭킹 보기
          </button>
        ) : null}
      </section>

      {!query ? (
        <nav className="ranking-jump" aria-label="체급 바로가기">
          {UFC_RANKING_DIVISIONS.map((division) => (
            <a href={`#${division.id}`} key={division.id}>
              {division.label}
            </a>
          ))}
        </nav>
      ) : null}

      {divisions.length || unrankedMatches.length ? (
        <>
          {unrankedMatches.length ? (
            <section
              className="ranking-unranked-results"
              aria-labelledby="unranked-result-title"
            >
              <header>
                <span>랭킹 외 선수</span>
                <h2 id="unranked-result-title">코리안 파이터 검색 결과</h2>
              </header>
              <div>
                {unrankedMatches.map((fighter) => (
                  <article key={fighter.name}>
                    <span className="ranking-unranked-mark">NR</span>
                    <span className="ranking-fighter-name">
                      <strong>{fighter.koName}</strong>
                      <small lang="en">{fighter.name}</small>
                    </span>
                    <span className="ranking-unranked-state">
                      {fighter.division} · UFC 공식 랭킹 없음
                    </span>
                    <Link href="/korean-fighters">선수 정보 보기 →</Link>
                  </article>
                ))}
              </div>
            </section>
          ) : null}

          {divisions.length ? (
            <div className="ranking-division-list">
          {divisions.map((division) => (
            <section
              className="ranking-division"
              id={division.id}
              key={division.id}
            >
              <div className="ranking-division-head">
                <div>
                  <span>{division.englishLabel}</span>
                  <h2>{division.label}</h2>
                </div>
              </div>

              {division.showChampionHeader ? (
                <div className="ranking-champion-row">
                  <span className="ranking-champion-mark">C</span>
                  <RankingName name={division.champion} />
                  <span className="ranking-champion-label">UFC 챔피언</span>
                </div>
              ) : null}

              <div className="ranking-columns">
                <article className="ranking-board meta-board">
                  <header>
                    <div>
                      <span>공식 기준</span>
                      <h3>Meta UFC 랭킹</h3>
                    </div>
                    <time dateTime={UFC_RANKING_SOURCE.metaUpdated}>
                      {UFC_RANKING_SOURCE.metaUpdated}
                    </time>
                  </header>
                  {division.championMatches ? (
                    <RankingChampionResult name={division.champion} />
                  ) : division.meta.length ? (
                    <ol>
                      {division.meta.map((fighter) => {
                        const comparison = compareRank(
                          fighter,
                          UFC_RANKING_DIVISIONS.find(
                            (item) => item.id === division.id,
                          )?.media ?? [],
                        );

                        return (
                          <li key={fighter.name}>
                            <span className="ranking-number">
                              {fighter.rank}
                            </span>
                            <RankingName name={fighter.name} />
                            <small data-tone={comparison.tone}>
                              {comparison.label}
                            </small>
                          </li>
                        );
                      })}
                    </ol>
                  ) : (
                    <p className="ranking-board-empty">
                      Meta 랭킹에는 검색 결과가 없습니다.
                    </p>
                  )}
                </article>

                <article className="ranking-board media-board">
                  <header>
                    <div>
                      <span>비교 자료</span>
                      <h3>미디어 투표 랭킹</h3>
                    </div>
                    <time dateTime={UFC_RANKING_SOURCE.mediaUpdated}>
                      {UFC_RANKING_SOURCE.mediaUpdated}
                    </time>
                  </header>
                  {division.championMatches ? (
                    <RankingChampionResult name={division.champion} />
                  ) : division.media.length ? (
                    <ol>
                      {division.media.map((fighter) => (
                        <li key={`${fighter.rank}-${fighter.name}`}>
                          <span className="ranking-number">
                            {fighter.rank}
                          </span>
                          <RankingName name={fighter.name} />
                        </li>
                      ))}
                    </ol>
                  ) : (
                    <p className="ranking-board-empty">
                      미디어 랭킹에는 검색 결과가 없습니다.
                    </p>
                  )}
                </article>
              </div>
            </section>
          ))}
            </div>
          ) : null}
        </>
      ) : (
        <div className="ranking-no-results" role="status">
          <strong>검색 결과가 없습니다.</strong>
          <p>선수의 한글·영문 이름 또는 체급을 다시 확인해주세요.</p>
          <button type="button" onClick={resetSearch}>
            전체 랭킹 보기
          </button>
        </div>
      )}
    </>
  );
}
