"use client";
// 현역과 역대 한국 UFC 선수를 구분해 보여주는 전용 화면을 제어한다.

import { useState } from "react";
import Link from "next/link";
import {
  FORMER_KOREAN_FIGHTERS,
  KOREAN_FIGHTERS,
} from "../data/fighters";
import {
  FighterProfileDialog,
  KoreanFighterCard,
  type FighterSelection,
} from "./FighterProfileDialog";

export function KoreanFightersPage() {
  const [selectedFighter, setSelectedFighter] =
    useState<FighterSelection | null>(null);

  return (
    <main className="site-shell korean-fighters-page">
      <header className="topbar">
        <Link className="brand" href="/" aria-label="FKO 일정 홈으로">
          <span className="brand-mark">FKO</span>
          <span className="brand-copy">
            <strong>FKO</strong>
            <small>Fight Korea</small>
          </span>
        </Link>
        <Link className="back-home-link" href="/">
          ← UFC 일정
        </Link>
      </header>

      <section className="fighters-page-hero">
        <span className="section-kicker">KOREAN FIGHTERS ARCHIVE</span>
        <h1>
          코리안
          <br />
          <em>파이터.</em>
        </h1>
        <p>
          지금 옥타곤에서 뛰는 선수와 한국 UFC 역사를 만든 선수들의 전적,
          최근 경기, 검수 근거를 한곳에 모았습니다.
        </p>
        <div className="fighters-page-summary" aria-label="선수 분류별 인원">
          <span>
            <b>{KOREAN_FIGHTERS.length}</b>
            현역
          </span>
          <span>
            <b>{FORMER_KOREAN_FIGHTERS.length}</b>
            은퇴·전 UFC
          </span>
          <span>
            <b>{KOREAN_FIGHTERS.length + FORMER_KOREAN_FIGHTERS.length}</b>
            전체
          </span>
        </div>
      </section>

      <section
        className="fighters-roster-section"
        aria-labelledby="active-fighters-title"
      >
        <div className="section-head">
          <div>
            <span className="section-kicker">ACTIVE ROSTER</span>
            <h2 id="active-fighters-title">현역 한국 선수</h2>
            <p>현재 UFC 공식 선수 자료를 기준으로 관리하는 선수입니다.</p>
          </div>
          <span className="korean-fighter-count">
            검수 완료 · {KOREAN_FIGHTERS.length}명
          </span>
        </div>
        <div className="korean-fighter-grid">
          {KOREAN_FIGHTERS.map((fighter) => (
            <KoreanFighterCard
              fighter={fighter}
              status="active"
              onSelect={setSelectedFighter}
              key={fighter.name}
            />
          ))}
        </div>
      </section>

      <section
        className="fighters-roster-section former-fighters-section"
        aria-labelledby="former-fighters-title"
      >
        <div className="section-head">
          <div>
            <span className="section-kicker">KOREAN UFC HISTORY</span>
            <h2 id="former-fighters-title">은퇴·전 UFC 선수</h2>
            <p>
              정찬성의 공식 은퇴와 UFC의 Not Fighting 상태, 이후 전적을
              구분해 표시합니다.
            </p>
          </div>
          <span className="korean-fighter-count">
            2개 이상 출처 · {FORMER_KOREAN_FIGHTERS.length}명
          </span>
        </div>
        <div className="korean-fighter-grid">
          {FORMER_KOREAN_FIGHTERS.map((fighter) => (
            <KoreanFighterCard
              fighter={fighter}
              status="former"
              onSelect={setSelectedFighter}
              key={fighter.name}
            />
          ))}
        </div>
      </section>

      <aside className="fighters-verification-note">
        <strong>정보 표기 원칙.</strong>
        <p>
          UFC 공식 프로필의 카드 방향만으로 승패를 판단하지 않습니다. 공식
          경기 결과와 독립 전적 자료를 대조하고, 불일치는 상세 정보의 근거
          링크에서 직접 확인할 수 있게 남깁니다.
        </p>
      </aside>

      <footer className="footer">
        <div>
          <strong>FKO · Fight Korea</strong>
          <p>
            UFC 및 Zuffa와 공식 제휴 관계가 없는 독립 일정 안내 서비스입니다.
            선수 정보는 공개된 공식 자료와 전적 자료를 바탕으로 검수합니다.
          </p>
        </div>
        <Link className="footer-home-link" href="/">
          일정 홈으로 →
        </Link>
      </footer>

      {selectedFighter ? (
        <FighterProfileDialog
          fighter={selectedFighter}
          onClose={() => setSelectedFighter(null)}
        />
      ) : null}
    </main>
  );
}
