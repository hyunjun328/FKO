"use client";
// UFC 랭킹을 한글·영문·체급으로 검색하고 체급별 비교표를 보여준다.

import { FormEvent, useMemo, useState } from "react";
import { rankingKoreanName } from "../data/ranking-names";
import {
  UFC_RANKING_DIVISIONS,
  UFC_RANKING_SOURCE,
  type RankingEntry,
} from "../data/rankings";

function normalize(value: string) {
  return value.toLocaleLowerCase("ko-KR").replace(/\s+/g, "");
}

function fighterMatches(name: string, query: string) {
  return normalize(`${rankingKoreanName(name)} ${name}`).includes(query);
}

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

export function RankingsBrowser() {
  const [inputValue, setInputValue] = useState("");
  const [query, setQuery] = useState("");
  const normalizedQuery = normalize(query);

  const divisions = useMemo(() => {
    if (!normalizedQuery) {
      return UFC_RANKING_DIVISIONS;
    }

    return UFC_RANKING_DIVISIONS.flatMap((division) => {
      const divisionMatches = normalize(
        `${division.label} ${division.englishLabel}`,
      ).includes(normalizedQuery);
      const championMatches = fighterMatches(
        division.champion,
        normalizedQuery,
      );
      const meta = divisionMatches
        ? division.meta
        : division.meta.filter((fighter) =>
            fighterMatches(fighter.name, normalizedQuery),
          );
      const media = divisionMatches
        ? division.media
        : division.media.filter((fighter) =>
            fighterMatches(fighter.name, normalizedQuery),
          );

      if (!divisionMatches && !championMatches && !meta.length && !media.length) {
        return [];
      }

      return [{ ...division, meta, media }];
    });
  }, [normalizedQuery]);

  const resultCount = useMemo(() => {
    const names = new Set<string>();

    divisions.forEach((division) => {
      if (
        !normalizedQuery ||
        fighterMatches(division.champion, normalizedQuery)
      ) {
        names.add(division.champion);
      }
      division.meta.forEach((fighter) => names.add(fighter.name));
      division.media.forEach((fighter) => names.add(fighter.name));
    });

    return names.size;
  }, [divisions, normalizedQuery]);

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
            <>챔피언과 체급별 공식 1~15위를 검색할 수 있습니다.</>
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

              <div className="ranking-champion-row">
                <span className="ranking-champion-mark">C</span>
                <RankingName name={division.champion} />
                <span className="ranking-champion-label">UFC 챔피언</span>
              </div>

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
                  {division.meta.length ? (
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
                  {division.media.length ? (
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
