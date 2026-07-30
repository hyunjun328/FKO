"use client";
// UFC 랭킹을 한글·영문·체급으로 검색하고 체급별 비교표를 보여준다.

import { FormEvent, useMemo, useState } from "react";
import { SEARCHABLE_FIGHTERS } from "../data/fighter-catalog";
import { rankingKoreanName } from "../data/ranking-names";
import {
  UFC_RANKING_DIVISIONS,
  UFC_RANKING_SOURCE,
  type RankingEntry,
} from "../data/rankings";
import {
  filterRankingDivisions,
  findBeyondOfficialRankingFighters,
  findUnrankedFighterMatches,
  normalizeRankingQuery,
} from "../lib/ranking-search";
import { FighterFace } from "./FighterFace";

import {
  FighterProfileDialog,
  type FighterSelection,
} from "./FighterProfileDialog";

const MENS_RANKING_DIVISIONS = UFC_RANKING_DIVISIONS.filter(
  (division) => !division.id.startsWith("womens-"),
);

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

function RankingChampionResult({
  name,
  female,
}: {
  name: string;
  female: boolean;
}) {
  return (
    <div className="ranking-board-champion-result">
      <span className="ranking-champion-mark">C</span>
      <FighterFace
        name={name}
        koName={rankingKoreanName(name)}
        className="ranking-fighter-face"
        gender={female ? "female" : "male"}
      />
      <RankingName name={name} />
      <strong>현 UFC 챔피언</strong>
    </div>
  );
}

function RankingFighterRow({
  fighter,
  female,
  comparison,
  onSelect,
}: {
  fighter: RankingEntry;
  female: boolean;
  comparison?: ReturnType<typeof compareRank>;
  onSelect?: () => void;
}) {
  const content = (
    <>
      <span className="ranking-number">{fighter.rank}</span>
      <FighterFace
        name={fighter.name}
        koName={rankingKoreanName(fighter.name)}
        className="ranking-fighter-face"
        gender={female ? "female" : "male"}
      />
      <RankingName name={fighter.name} />
      {comparison ? (
        <small data-tone={comparison.tone}>{comparison.label}</small>
      ) : null}
      {onSelect ? <span className="ranking-detail-hint">상세 →</span> : null}
    </>
  );

  return (
    <li>
      {onSelect ? (
        <button
          type="button"
          className="ranking-row ranking-detail-trigger"
          onClick={onSelect}
          aria-label={`${rankingKoreanName(fighter.name)} 상세 정보 보기`}
        >
          {content}
        </button>
      ) : (
        <div className="ranking-row">{content}</div>
      )}
    </li>
  );
}

export function RankingsBrowser() {
  const [inputValue, setInputValue] = useState("");
  const [query, setQuery] = useState("");
  const [selectedDivisionId, setSelectedDivisionId] = useState(
    MENS_RANKING_DIVISIONS[0].id,
  );
  const [selectedFighter, setSelectedFighter] =
    useState<FighterSelection | null>(null);
  const normalizedQuery = normalizeRankingQuery(query);

  const divisions = useMemo(
    () => {
      const sourceDivisions = normalizedQuery
        ? MENS_RANKING_DIVISIONS
        : MENS_RANKING_DIVISIONS.filter(
            (division) => division.id === selectedDivisionId,
          );

      return filterRankingDivisions(
        sourceDivisions,
        normalizedQuery,
        rankingKoreanName,
      );
    },
    [normalizedQuery, selectedDivisionId],
  );

  const unrankedMatches = useMemo(
    () =>
      findUnrankedFighterMatches(
        SEARCHABLE_FIGHTERS,
        MENS_RANKING_DIVISIONS,
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

  function selectRankedFighter(
    fighter: RankingEntry,
    divisionLabel: string,
    boardLabel: string,
  ) {
    setSelectedFighter({
      name: fighter.name,
      koName: rankingKoreanName(fighter.name),
      weight: divisionLabel,
      ranking: `${boardLabel} ${divisionLabel} ${fighter.rank}위`,
      summary: `${rankingKoreanName(fighter.name)}은 현재 ${boardLabel} 기준 ${divisionLabel} ${fighter.rank}위 선수입니다. 공개된 순위와 검수된 선수 정보만 표시하며, 확인되지 않은 전적이나 기록은 추정하지 않습니다.`,
      sourceUrl: UFC_RANKING_SOURCE.officialUrl,
    });
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
              placeholder="예: 맥그리거, 메디치, Makhachev"
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
            <>
              챔피언, 공식 1~15위, 전체 대진표 선수와 대표 선수를 검색할 수
              있습니다.
            </>
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
        <nav
          className="ranking-jump"
          aria-label="체급 선택"
          role="tablist"
        >
          {MENS_RANKING_DIVISIONS.map((division) => (
            <button
              type="button"
              role="tab"
              aria-selected={selectedDivisionId === division.id}
              aria-controls={division.id}
              onClick={() => setSelectedDivisionId(division.id)}
              key={division.id}
            >
              {division.label} · {division.weightLimitKg}
            </button>
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
                <h2 id="unranked-result-title">공식 15위 밖 선수 검색 결과</h2>
              </header>
              <div>
                {unrankedMatches.map((fighter) => (
                  <button
                    type="button"
                    className="ranking-unranked-result"
                    key={fighter.name}
                    onClick={() =>
                      setSelectedFighter({
                        name: fighter.name,
                        koName: fighter.koName,
                        weight: fighter.division,
                      })
                    }
                    aria-label={`${fighter.koName} 상세 정보 보기`}
                  >
                    <span className="ranking-unranked-mark">NR</span>
                    <FighterFace
                      name={fighter.name}
                      koName={fighter.koName}
                      className="ranking-fighter-face"
                      gender={
                        fighter.division.includes("여성") ? "female" : "male"
                      }
                    />
                    <span className="ranking-fighter-name">
                      <strong>{fighter.koName}</strong>
                      <small lang="en">{fighter.name}</small>
                    </span>
                    <span className="ranking-unranked-state">
                      <b>{fighter.division} · UFC 공식 NR</b>
                      {fighter.unofficialRanking ? (
                        <small>
                          비공식 세계 #{fighter.unofficialRanking.rank} ·{" "}
                          {fighter.unofficialRanking.provider} ·{" "}
                          {fighter.unofficialRanking.asOf}
                        </small>
                      ) : (
                        <small>
                          {fighter.statusLabel ??
                            "공개된 비공식 순위는 별도 검수 중"}
                        </small>
                      )}
                    </span>
                    <span className="ranking-unranked-open">상세 보기 →</span>
                  </button>
                ))}
              </div>
            </section>
          ) : null}

          {divisions.length ? (
            <div className="ranking-division-list">
              {divisions.map((division) => {
                const beyondFighters = findBeyondOfficialRankingFighters(
                  SEARCHABLE_FIGHTERS,
                  division,
                  rankingKoreanName,
                );

                return (
                  <section
                    className="ranking-division"
                    id={division.id}
                    key={division.id}
                    role={!query ? "tabpanel" : undefined}
                  >
              <div className="ranking-division-head">
                <div>
                  <span>{division.englishLabel}</span>
                  <h2>
                    {division.label} <small>{division.weightLimitKg}</small>
                  </h2>
                </div>
              </div>

              {division.showChampionHeader ? (
                <div className="ranking-champion-row">
                  <span className="ranking-champion-mark">C</span>
                  <FighterFace
                    name={division.champion}
                    koName={rankingKoreanName(division.champion)}
                    className="ranking-champion-face"
                    gender="male"
                  />
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
                    <RankingChampionResult
                      name={division.champion}
                      female={false}
                    />
                  ) : division.meta.length ? (
                    <ol>
                      {division.meta.map((fighter) => {
                        const comparison = compareRank(
                          fighter,
                          MENS_RANKING_DIVISIONS.find(
                            (item) => item.id === division.id,
                          )?.media ?? [],
                        );

                        return (
                          <RankingFighterRow
                            key={fighter.name}
                            fighter={fighter}
                            female={false}
                            comparison={comparison}
                            onSelect={() =>
                              selectRankedFighter(
                                fighter,
                                division.label,
                                "Meta UFC 랭킹",
                              )
                            }
                          />
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
                    <RankingChampionResult
                      name={division.champion}
                      female={false}
                    />
                  ) : division.media.length ? (
                    <ol>
                      {division.media.map((fighter) => (
                        <RankingFighterRow
                          key={`${fighter.rank}-${fighter.name}`}
                          fighter={fighter}
                          female={false}
                          onSelect={
                            fighter.rank <= 15
                              ? () =>
                                  selectRankedFighter(
                                    fighter,
                                    division.label,
                                    "미디어 랭킹",
                                  )
                              : undefined
                          }
                        />
                      ))}
                    </ol>
                  ) : (
                    <p className="ranking-board-empty">
                      미디어 랭킹에는 검색 결과가 없습니다.
                    </p>
                  )}
                </article>
              </div>

              {!query && beyondFighters.length ? (
                <details className="ranking-beyond">
                  <summary>
                    <span>
                      <b>15위 밖 주요 선수</b>
                      <small>UFC 공식 NR · {beyondFighters.length}명</small>
                    </span>
                    <strong>선수 보기</strong>
                  </summary>
                  <p className="ranking-beyond-note">
                    UFC는 체급별 15위까지만 공식 발표합니다. 아래 선수에게
                    16위부터 임의 번호를 붙이지 않으며, 확인된 외부 순위만
                    출처와 함께 따로 표시합니다.
                  </p>
                  <div className="ranking-beyond-grid">
                    {beyondFighters.map((fighter) => (
                      <button
                        type="button"
                        className="ranking-beyond-fighter"
                        key={fighter.name}
                        onClick={() =>
                          setSelectedFighter({
                            name: fighter.name,
                            koName: fighter.koName,
                            weight: fighter.division,
                          })
                        }
                        aria-label={`${fighter.koName} 상세 정보 보기`}
                      >
                        <span className="ranking-unranked-mark">NR</span>
                        <FighterFace
                          name={fighter.name}
                          koName={fighter.koName}
                          className="ranking-fighter-face"
                          gender={
                            fighter.division.includes("여성")
                              ? "female"
                              : "male"
                          }
                        />
                        <span className="ranking-fighter-name">
                          <strong>{fighter.koName}</strong>
                          <small lang="en">{fighter.name}</small>
                        </span>
                        <span className="ranking-beyond-state">
                          {fighter.unofficialRanking ? (
                            <>
                              <b>
                                비공식 세계 #{fighter.unofficialRanking.rank}
                              </b>
                              <small>
                                {fighter.unofficialRanking.provider} ·{" "}
                                {fighter.unofficialRanking.asOf}
                              </small>
                            </>
                          ) : (
                            <>
                              <b>UFC 공식 NR</b>
                              <small>
                                {fighter.statusLabel ?? "15위 밖 주요 선수"}
                              </small>
                            </>
                          )}
                        </span>
                      </button>
                    ))}
                  </div>
                </details>
              ) : null}
                  </section>
                );
              })}
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

      {selectedFighter ? (
        <FighterProfileDialog
          fighter={selectedFighter}
          onClose={() => setSelectedFighter(null)}
        />
      ) : null}
    </>
  );
}
