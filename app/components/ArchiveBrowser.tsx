"use client";

// 명예의 전당, 과거 UFC 선수 기록, 심판진을 탭으로 탐색하게 한다.
import { useState } from "react";
import { FORMER_UFC_FIGHTERS, HALL_OF_FAME_FIGHTERS, UFC_REFEREES } from "../data/archive";
import { FighterFace } from "./FighterFace";
import { FighterProfileDialog, type FighterSelection } from "./FighterProfileDialog";

type ArchiveTab = "hall" | "former" | "referees";

export function ArchiveBrowser() {
  const [tab, setTab] = useState<ArchiveTab>("former");
  const [selectedFighter, setSelectedFighter] = useState<FighterSelection | null>(null);
  const fighters = tab === "hall" ? HALL_OF_FAME_FIGHTERS : FORMER_UFC_FIGHTERS;

  return (
    <section className="archive-browser" aria-label="UFC 아카이브">
      <div className="archive-tabs" role="tablist" aria-label="아카이브 분류">
        <button type="button" role="tab" aria-selected={tab === "hall"} onClick={() => setTab("hall")}>명예의 전당</button>
        <button type="button" role="tab" aria-selected={tab === "former"} onClick={() => setTab("former")}>과거 UFC 선수 {FORMER_UFC_FIGHTERS.length}명</button>
        <button type="button" role="tab" aria-selected={tab === "referees"} onClick={() => setTab("referees")}>심판진</button>
      </div>

      {tab === "referees" ? (
        <div className="referee-list" role="tabpanel">
          {UFC_REFEREES.map((referee) => <article key={referee.name}><span>REF</span><div><h2>{referee.name}</h2><strong>{referee.role}</strong><p>{referee.note}</p></div></article>)}
          <p className="archive-disclaimer">심판 배정은 대회와 관할 체육위원회에 따라 달라집니다.</p>
        </div>
      ) : (
        <div className="archive-fighter-grid" role="tabpanel">
          {fighters.map((fighter) => (
            <article key={fighter.name}>
              <FighterFace name={fighter.name} koName={fighter.koName} className="archive-fighter-face" />
              <div><span>{fighter.era}</span><h2>{fighter.koName}</h2><small lang="en">{fighter.name}</small><strong>{fighter.record}</strong><p>{fighter.note}</p><button type="button" onClick={() => setSelectedFighter({ name: fighter.name, koName: fighter.koName, weight: fighter.era, record: fighter.record, summary: fighter.note, sourceLabel: "UFC 아카이브 출처", sourceUrl: fighter.sourceUrl })}>상세 정보 보기 →</button><a href={fighter.sourceUrl} target="_blank" rel="noreferrer">UFC 출처 보기 ↗</a></div>
            </article>
          ))}
          <p className="archive-disclaimer">전적은 선수의 종합격투기 커리어 기준이며, 무효 경기는 별도로 표기합니다.</p>
        </div>
      )}
      {selectedFighter ? <FighterProfileDialog fighter={selectedFighter} onClose={() => setSelectedFighter(null)} /> : null}
    </section>
  );
}
