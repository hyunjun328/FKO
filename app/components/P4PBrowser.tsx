"use client";
// 남녀 P4P 랭킹과 상위 10명 선수 상세 열기를 제공한다.

import { useState } from "react";
import {
  MENS_P4P_RANKINGS,
  P4P_RANKING_SOURCE,
  WOMENS_P4P_RANKINGS,
  type PoundForPoundEntry,
} from "../data/p4p-rankings";
import { rankingKoreanName } from "../data/ranking-names";
import { FighterFace } from "./FighterFace";
import {
  FighterProfileDialog,
  type FighterSelection,
} from "./FighterProfileDialog";

function P4PBoard({
  title,
  englishTitle,
  entries,
  female = false,
  onSelect,
}: {
  title: string;
  englishTitle: string;
  entries: PoundForPoundEntry[];
  female?: boolean;
  onSelect: (fighter: PoundForPoundEntry) => void;
}) {
  return (
    <article className="p4p-board">
      <header>
        <div>
          <span>{englishTitle}</span>
          <h2>{title}</h2>
        </div>
        <time dateTime={P4P_RANKING_SOURCE.updatedAt}>
          {P4P_RANKING_SOURCE.updatedAt}
        </time>
      </header>
      <ol>
        {entries.map((fighter) => {
          const content = (
            <>
              <span className="p4p-number">{fighter.rank}</span>
              <FighterFace
                name={fighter.name}
                koName={rankingKoreanName(fighter.name)}
                className="p4p-fighter-face"
                gender={female ? "female" : "male"}
                eager={fighter.rank <= 3}
              />
              <span className="p4p-fighter-name">
                <strong>{rankingKoreanName(fighter.name)}</strong>
                <small lang="en">{fighter.name}</small>
              </span>
              <span className="p4p-division">
                <b>{fighter.division}</b>
                <small>{fighter.status}</small>
              </span>
              {fighter.rank <= 10 ? (
                <span className="p4p-detail-hint">상세 →</span>
              ) : null}
            </>
          );

          return (
            <li key={fighter.name}>
              {fighter.rank <= 10 ? (
                <button
                  type="button"
                  className="p4p-row p4p-detail-trigger"
                  onClick={() => onSelect(fighter)}
                  aria-label={`${rankingKoreanName(fighter.name)} 상세 정보 보기`}
                >
                  {content}
                </button>
              ) : (
                <div className="p4p-row">{content}</div>
              )}
            </li>
          );
        })}
      </ol>
    </article>
  );
}

export function P4PBrowser() {
  const [selectedFighter, setSelectedFighter] =
    useState<FighterSelection | null>(null);

  function selectFighter(fighter: PoundForPoundEntry, group: string) {
    setSelectedFighter({
      name: fighter.name,
      koName: rankingKoreanName(fighter.name),
      weight: fighter.division,
      ranking: `${group} ${fighter.rank}위 · ${fighter.status}`,
      summary: `${rankingKoreanName(fighter.name)}은 UFC 공식 미디어 패널 기준 ${group} ${fighter.rank}위 선수입니다. 체급별 위치는 ${fighter.division} ${fighter.status}이며, 확인된 공식 순위만 표시합니다.`,
      sourceUrl: P4P_RANKING_SOURCE.officialUrl,
    });
  }

  return (
    <>
      <section className="p4p-grid" aria-label="UFC 파운드 포 파운드 랭킹">
        <P4PBoard
          title="남성 P4P"
          englishTitle="Men’s Pound-for-Pound"
          entries={MENS_P4P_RANKINGS}
          onSelect={(fighter) => selectFighter(fighter, "남성 P4P")}
        />
        <P4PBoard
          title="여성 P4P"
          englishTitle="Women’s Pound-for-Pound"
          entries={WOMENS_P4P_RANKINGS}
          female
          onSelect={(fighter) => selectFighter(fighter, "여성 P4P")}
        />
      </section>

      {selectedFighter ? (
        <FighterProfileDialog
          fighter={selectedFighter}
          onClose={() => setSelectedFighter(null)}
        />
      ) : null}
    </>
  );
}
