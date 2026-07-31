"use client";
// UFC 공식 1~15위와 Fight Matrix 비공식 16~50위를 검색·열람하는 랭킹 화면이다.

import { FormEvent, useMemo, useState } from "react";
import {
  FIGHT_MATRIX_RANKINGS,
  FIGHT_MATRIX_RANKING_CHECKED_AT,
  type FightMatrixRankingEntry,
} from "../data/fightmatrix-rankings";
import { rankingKoreanName } from "../data/ranking-names";
import { SEARCHABLE_FIGHTERS } from "../data/fighter-catalog";
import {
  UFC_RANKING_DIVISIONS,
  UFC_RANKING_SOURCE,
  type RankingEntry,
  type RankingDivision,
} from "../data/rankings";
import {
  findUnrankedFighterMatches,
  filterRankingDivisions,
  normalizeRankingQuery,
  rankingFighterMatches,
} from "../lib/ranking-search";
import { FighterFace } from "./FighterFace";
import {
  FighterProfileDialog,
  type FighterSelection,
} from "./FighterProfileDialog";

const PAGE_SIZE = 10;
const MENS_RANKING_DIVISIONS = UFC_RANKING_DIVISIONS.filter(
  (division) => !division.id.startsWith("womens-"),
);

type UnofficialMatch = {
  division: RankingDivision;
  entry: FightMatrixRankingEntry;
};

function compareRank(entry: RankingEntry, media: RankingEntry[]) {
  const mediaEntry = media.find((fighter) => fighter.name === entry.name);

  if (!mediaEntry) return { label: "미디어 NR", tone: "new" };

  const difference = mediaEntry.rank - entry.rank;
  if (difference === 0) return { label: `미디어 ${mediaEntry.rank}위 · 동일`, tone: "same" };

  return {
    label: `미디어 ${mediaEntry.rank}위 · ${difference > 0 ? "Meta보다 " : "Meta보다 "}${Math.abs(difference)}위`,
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
  onSelect,
}: {
  name: string;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      className="ranking-board-champion-result ranking-detail-trigger"
      onClick={onSelect}
      aria-label={`${rankingKoreanName(name)} 챔피언 상세 정보 보기`}
    >
      <span className="ranking-champion-mark">C</span>
      <FighterFace
        name={name}
        koName={rankingKoreanName(name)}
        className="ranking-fighter-face"
        gender="male"
      />
      <RankingName name={name} />
      <strong>UFC 챔피언</strong>
    </button>
  );
}

function RankingFighterRow({
  fighter,
  comparison,
  onSelect,
}: {
  fighter: RankingEntry;
  comparison?: ReturnType<typeof compareRank>;
  onSelect: () => void;
}) {
  return (
    <li>
      <button
        type="button"
        className="ranking-row ranking-detail-trigger"
        onClick={onSelect}
        aria-label={`${rankingKoreanName(fighter.name)} 상세 정보 보기`}
      >
        <span className="ranking-number">{fighter.rank}</span>
        <FighterFace
          name={fighter.name}
          koName={rankingKoreanName(fighter.name)}
          className="ranking-fighter-face"
          gender="male"
        />
        <RankingName name={fighter.name} />
        {comparison ? <small data-tone={comparison.tone}>{comparison.label}</small> : null}
        <span className="ranking-detail-hint">상세 보기 →</span>
      </button>
    </li>
  );
}

function UnofficialRankingSection({
  division,
  entries,
  page,
  onPageChange,
  onSelect,
}: {
  division: RankingDivision;
  entries: FightMatrixRankingEntry[];
  page: number;
  onPageChange: (page: number) => void;
  onSelect: (entry: FightMatrixRankingEntry) => void;
}) {
  const totalPages = Math.ceil(entries.length / PAGE_SIZE);
  const visibleEntries = entries.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <section className="ranking-unofficial-board" aria-labelledby={`${division.id}-unofficial-title`}>
      <header>
        <div>
          <span>공식 순위 밖의 비공식 참고 자료</span>
          <h3 id={`${division.id}-unofficial-title`}>Fight Matrix 세계 랭킹 16~50위</h3>
        </div>
        <small>정보 확인 {FIGHT_MATRIX_RANKING_CHECKED_AT}</small>
      </header>
      <p>UFC 공식 순위는 15위까지입니다. 아래 순위와 전적은 Fight Matrix 공개 자료를 기준으로 합니다.</p>
      <ol start={entries[0]?.rank}>
        {visibleEntries.map((entry) => (
          <li key={entry.rank}>
            <button
              type="button"
              className="ranking-unofficial-row"
              onClick={() => onSelect(entry)}
              aria-label={`${rankingKoreanName(entry.name)} Fight Matrix ${entry.rank}위 간단 정보 보기`}
            >
              <span>#{entry.rank}</span>
              <RankingName name={entry.name} />
              <small>전적 {entry.record}</small>
              <em>간단 정보 →</em>
            </button>
          </li>
        ))}
      </ol>
      <nav className="ranking-pagination" aria-label={`${division.label} 비공식 랭킹 페이지`}>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
          <button
            type="button"
            key={pageNumber}
            onClick={() => onPageChange(pageNumber)}
            aria-current={pageNumber === page ? "page" : undefined}
          >
            {pageNumber}
          </button>
        ))}
      </nav>
    </section>
  );
}

export function RankingsBrowser() {
  const [inputValue, setInputValue] = useState("");
  const [query, setQuery] = useState("");
  const [selectedDivisionId, setSelectedDivisionId] = useState(
    MENS_RANKING_DIVISIONS[0].id,
  );
  const [unofficialPage, setUnofficialPage] = useState(1);
  const [selectedFighter, setSelectedFighter] = useState<FighterSelection | null>(null);
  const normalizedQuery = normalizeRankingQuery(query);

  const divisions = useMemo(() => {
    const sourceDivisions = normalizedQuery
      ? MENS_RANKING_DIVISIONS
      : MENS_RANKING_DIVISIONS.filter((division) => division.id === selectedDivisionId);
    return filterRankingDivisions(sourceDivisions, normalizedQuery, rankingKoreanName);
  }, [normalizedQuery, selectedDivisionId]);

  const unofficialMatches = useMemo<UnofficialMatch[]>(() => {
    if (!normalizedQuery) return [];
    return MENS_RANKING_DIVISIONS.flatMap((division) =>
      (FIGHT_MATRIX_RANKINGS[division.id] ?? [])
        .filter((entry) => rankingFighterMatches(entry.name, normalizedQuery, rankingKoreanName))
        .map((entry) => ({ division, entry })),
    ).sort((left, right) => left.entry.rank - right.entry.rank || left.entry.name.localeCompare(right.entry.name));
  }, [normalizedQuery]);

  const unrankedMatches = useMemo(
    () =>
      normalizedQuery
        ? findUnrankedFighterMatches(
            SEARCHABLE_FIGHTERS,
            MENS_RANKING_DIVISIONS,
            normalizedQuery,
          )
        : [],
    [normalizedQuery],
  );

  const resultCount = useMemo(() => {
    const names = new Set<string>();
    divisions.forEach((division) => {
      if (division.championMatches) names.add(division.champion);
      division.meta.forEach((fighter) => names.add(fighter.name));
      division.media.forEach((fighter) => names.add(fighter.name));
    });
    unofficialMatches.forEach(({ entry }) => names.add(entry.name));
    unrankedMatches.forEach((fighter) => names.add(fighter.name));
    return names.size;
  }, [divisions, unofficialMatches, unrankedMatches]);

  const selectedDivision = MENS_RANKING_DIVISIONS.find(
    (division) => division.id === selectedDivisionId,
  )!;
  const selectedUnofficialEntries = (FIGHT_MATRIX_RANKINGS[selectedDivision.id] ?? []).filter(
    (entry) => entry.rank >= 16,
  );

  function openOfficialFighter(fighter: RankingEntry, divisionLabel: string, boardLabel: string) {
    setSelectedFighter({
      name: fighter.name,
      koName: rankingKoreanName(fighter.name),
      weight: divisionLabel,
      ranking: `${boardLabel} ${divisionLabel} ${fighter.rank}위`,
      summary: `${rankingKoreanName(fighter.name)}은 현재 ${boardLabel} 기준 ${divisionLabel} ${fighter.rank}위 선수입니다.`,
      sourceUrl: UFC_RANKING_SOURCE.officialUrl,
    });
  }

  function openChampion(division: RankingDivision) {
    setSelectedFighter({
      name: division.champion,
      koName: rankingKoreanName(division.champion),
      weight: division.label,
      ranking: `UFC 챔피언 · ${division.label}`,
      summary: `${rankingKoreanName(division.champion)}은 현재 ${division.label} UFC 챔피언입니다.`,
      sourceLabel: "UFC 공식 랭킹",
      sourceUrl: UFC_RANKING_SOURCE.officialUrl,
    });
  }

  function openUnofficialFighter(division: RankingDivision, entry: FightMatrixRankingEntry) {
    setSelectedFighter({
      name: entry.name,
      koName: rankingKoreanName(entry.name),
      weight: `${division.label} · ${division.weightLimitKg}`,
      ranking: `Fight Matrix ${division.label} #${entry.rank}`,
      record: entry.record,
      sourceLabel: "Fight Matrix 비공식 세계 랭킹",
      sourceUrl: entry.sourceUrl,
      simple: true,
    });
  }

  function openUnrankedFighter(fighter: (typeof unrankedMatches)[number]) {
    setSelectedFighter({
      name: fighter.name,
      koName: fighter.koName,
      weight: fighter.division,
      ranking: fighter.statusLabel ?? "UFC 선수 정보",
      sourceLabel: "FKO 선수 정보",
      sourceUrl: "https://www.ufc.com/athletes/all",
      simple: true,
    });
  }

  function submitSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextQuery = inputValue.trim();
    const firstMatch = MENS_RANKING_DIVISIONS.flatMap((division) =>
      (FIGHT_MATRIX_RANKINGS[division.id] ?? [])
        .filter((entry) => rankingFighterMatches(entry.name, normalizeRankingQuery(nextQuery), rankingKoreanName))
        .map((entry) => ({ division, entry })),
    )[0];
    if (firstMatch) {
      setSelectedDivisionId(firstMatch.division.id);
      setUnofficialPage(Math.floor((firstMatch.entry.rank - 16) / PAGE_SIZE) + 1);
    }
    setQuery(nextQuery);
  }

  function resetSearch() {
    setInputValue("");
    setQuery("");
  }

  function selectDivision(divisionId: string) {
    setSelectedDivisionId(divisionId);
    setUnofficialPage(1);
  }

  const hasResults = Boolean(
    divisions.length || unofficialMatches.length || unrankedMatches.length,
  );

  return (
    <>
      <section className="ranking-search-panel" aria-label="선수 랭킹 검색">
        <form onSubmit={submitSearch} role="search">
          <label htmlFor="ranking-search">선수 또는 체급 검색</label>
          <div>
            <input id="ranking-search" type="search" value={inputValue} onChange={(event) => setInputValue(event.target.value)} placeholder="예. 마카체프, Medic, Makhachev" autoComplete="off" />
            <button type="submit">검색</button>
          </div>
        </form>
        <p aria-live="polite">
          {query ? <><b>“{query}”</b> 검색 결과 · {resultCount}명</> : <>공식 1~15위와 Fight Matrix 비공식 1~50위, 총 400명 범위에서 검색합니다.</>}
        </p>
        {query ? <button className="ranking-search-reset" type="button" onClick={resetSearch}>전체 랭킹 보기</button> : null}
      </section>

      {!query ? (
        <nav className="ranking-jump" aria-label="체급 선택" role="tablist">
          {MENS_RANKING_DIVISIONS.map((division) => (
            <button type="button" role="tab" aria-selected={selectedDivisionId === division.id} aria-controls={division.id} onClick={() => selectDivision(division.id)} key={division.id}>
              {division.label} · {division.weightLimitKg}
            </button>
          ))}
        </nav>
      ) : null}

      {hasResults ? (
        <>
          {unofficialMatches.length ? (
            <section className="ranking-unofficial-search" aria-labelledby="unofficial-search-title">
              <header>
                <span>전 체급 1~50위 검색</span>
                <h2 id="unofficial-search-title">Fight Matrix 비공식 순위 결과</h2>
              </header>
              <div>
                {unofficialMatches.map(({ division, entry }) => (
                  <button type="button" key={`${division.id}-${entry.rank}`} onClick={() => openUnofficialFighter(division, entry)}>
                    <span>#{entry.rank}</span>
                    <RankingName name={entry.name} />
                    <small>{division.label} · {division.weightLimitKg} · 전적 {entry.record}</small>
                    <em>간단 정보 →</em>
                  </button>
                ))}
              </div>
            </section>
          ) : null}

          {unrankedMatches.length ? (
            <section className="ranking-unranked-results" aria-labelledby="unranked-search-title">
              <header>
                <span>UFC 선수 검색</span>
                <h2 id="unranked-search-title">랭킹 밖 선수 결과</h2>
              </header>
              {unrankedMatches.map((fighter) => (
                <button className="ranking-unranked-result" type="button" key={fighter.name} onClick={() => openUnrankedFighter(fighter)}>
                  <span className="ranking-unranked-mark">UFC</span>
                  <FighterFace name={fighter.name} koName={fighter.koName} className="ranking-fighter-face" gender="male" />
                  <span className="ranking-fighter-name"><strong>{fighter.koName}</strong><small lang="en">{fighter.name}</small></span>
                  <span className="ranking-unranked-state"><b>{fighter.division}</b><small>{fighter.statusLabel ?? "공식 순위 밖"}</small></span>
                  <span className="ranking-unranked-open">상세 보기 →</span>
                </button>
              ))}
            </section>
          ) : null}

          {divisions.length ? (
            <div className="ranking-division-list">
              {divisions.map((division) => (
                <section className="ranking-division" id={division.id} key={division.id} role={!query ? "tabpanel" : undefined}>
                  <div className="ranking-division-head">
                    <div><span>{division.englishLabel}</span><h2>{division.label} <small>{division.weightLimitKg}</small></h2></div>
                  </div>
                  {division.showChampionHeader ? (
                    <button type="button" className="ranking-champion-row ranking-detail-trigger" onClick={() => openChampion(division)} aria-label={`${rankingKoreanName(division.champion)} 챔피언 상세 정보 보기`}><span className="ranking-champion-mark">C</span><FighterFace name={division.champion} koName={rankingKoreanName(division.champion)} className="ranking-champion-face" gender="male" /><RankingName name={division.champion} /><span className="ranking-champion-label">UFC 챔피언</span></button>
                  ) : null}
                  <div className="ranking-columns">
                    <article className="ranking-board meta-board">
                      <header><div><span>공식 기준</span><h3>Meta UFC 랭킹</h3></div><time dateTime={UFC_RANKING_SOURCE.metaUpdated}>{UFC_RANKING_SOURCE.metaUpdated}</time></header>
                      {division.championMatches ? <RankingChampionResult name={division.champion} onSelect={() => openChampion(division)} /> : division.meta.length ? <ol>{division.meta.map((fighter) => <RankingFighterRow key={fighter.name} fighter={fighter} comparison={compareRank(fighter, MENS_RANKING_DIVISIONS.find((item) => item.id === division.id)?.media ?? [])} onSelect={() => openOfficialFighter(fighter, division.label, "Meta UFC 랭킹")} />)}</ol> : <p className="ranking-board-empty">Meta 랭킹에는 검색 결과가 없습니다.</p>}
                    </article>
                    <article className="ranking-board media-board">
                      <header><div><span>비교 자료</span><h3>미디어 투표 랭킹</h3></div><time dateTime={UFC_RANKING_SOURCE.mediaUpdated}>{UFC_RANKING_SOURCE.mediaUpdated}</time></header>
                      {division.championMatches ? <RankingChampionResult name={division.champion} onSelect={() => openChampion(division)} /> : division.media.length ? <ol>{division.media.map((fighter) => <RankingFighterRow key={`${fighter.rank}-${fighter.name}`} fighter={fighter} onSelect={() => openOfficialFighter(fighter, division.label, "미디어 투표 랭킹")} />)}</ol> : <p className="ranking-board-empty">미디어 랭킹에는 검색 결과가 없습니다.</p>}
                    </article>
                  </div>
                  {!query && division.id === selectedDivision.id ? <UnofficialRankingSection division={division} entries={selectedUnofficialEntries} page={unofficialPage} onPageChange={setUnofficialPage} onSelect={(entry) => openUnofficialFighter(division, entry)} /> : null}
                </section>
              ))}
            </div>
          ) : null}
        </>
      ) : (
        <div className="ranking-no-results" role="status"><strong>검색 결과가 없습니다.</strong><p>선수의 한글·영문 이름 또는 체급을 다시 확인해 주세요.</p><button type="button" onClick={resetSearch}>전체 랭킹 보기</button></div>
      )}

      {selectedFighter ? <FighterProfileDialog fighter={selectedFighter} onClose={() => setSelectedFighter(null)} /> : null}
    </>
  );
}
