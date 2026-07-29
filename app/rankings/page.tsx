// UFC 공식 Meta 랭킹과 기존 미디어 랭킹을 체급별로 비교해 보여준다.
import type { Metadata } from "next";
import Link from "next/link";
import { RankingsBrowser } from "../components/RankingsBrowser";
import { UFC_RANKING_SOURCE } from "../data/rankings";

export const metadata: Metadata = {
  title: "UFC 선수 랭킹 | FKO",
  description:
    "UFC 공식 Meta 랭킹과 기존 미디어 투표 랭킹을 체급별로 비교하세요.",
};

export default function RankingsPage() {
  return (
    <main className="site-shell rankings-page">
      <header className="topbar">
        <Link className="brand" href="/" aria-label="FKO 일정 홈으로">
          <span className="brand-mark">FKO</span>
          <span className="brand-copy">
            <strong>FKO</strong>
            <small>Fight Korea</small>
          </span>
        </Link>
        <div className="topbar-actions">
          <Link className="topbar-link" href="/korean-fighters">
            코리안 파이터
          </Link>
          <Link className="back-home-link" href="/">
            ← UFC 일정
          </Link>
        </div>
      </header>

      <section className="rankings-hero">
        <span className="section-kicker">UFC 공식 자료 기준</span>
        <h1>선수 랭킹</h1>
        <p>
          UFC가 공식 페이지에 공개한 Meta 데이터 랭킹을 중심으로, 전환
          기간에 함께 제공되는 기존 미디어 투표 순위를 나란히 비교합니다.
        </p>
        <div className="ranking-source-state">
          <span>
            <b>Meta</b>
            {UFC_RANKING_SOURCE.metaUpdated} 기준
          </span>
          <span>
            <b>미디어</b>
            {UFC_RANKING_SOURCE.mediaUpdated} 기준
          </span>
          <span>
            <b>FKO 확인</b>
            {UFC_RANKING_SOURCE.checkedAt}
          </span>
        </div>
      </section>

      <section className="ranking-method-grid" aria-label="랭킹 방식 안내">
        <article className="ranking-method-card primary">
          <span>현재 공식 기준</span>
          <h2>공식 데이터 랭킹</h2>
          <p>
            상대 수준, 승리 방식, 최근 경기와 미활동 등을 반영한 UFC의 신규
            수학 모델입니다. FKO는 계산을 추정하지 않고 발표 결과를 그대로
            표시합니다.
          </p>
        </article>
        <article className="ranking-method-card">
          <span>비교 자료</span>
          <h2>기존 미디어 랭킹</h2>
          <p>
            UFC가 선정한 미디어 패널의 투표 결과입니다. 현재 공식 페이지에
            Meta 랭킹과 함께 게시되어 비교 기준으로 제공합니다.
          </p>
        </article>
        <article className="ranking-method-card warning">
          <span>표기 범위</span>
          <h2>공식은 15위까지</h2>
          <p>
            챔피언과 체급별 1~15위만 UFC 공식 순위로 표시합니다. 그 밖의
            선수에게는 임의 순위를 붙이지 않습니다.
          </p>
        </article>
      </section>

      <RankingsBrowser />

      <aside className="ranking-source-note">
        <div>
          <strong>공식 발표값만 사용합니다.</strong>
          <p>
            정확한 Meta 점수식과 가중치는 공개되지 않았습니다. 순위가
            갱신되면 UFC 원문과 대조한 뒤 날짜와 함께 반영합니다.
          </p>
        </div>
        <span>
          <a
            href={UFC_RANKING_SOURCE.officialUrl}
            target="_blank"
            rel="noreferrer"
          >
            UFC 공식 랭킹 ↗
          </a>
          <a
            href={UFC_RANKING_SOURCE.announcementUrl}
            target="_blank"
            rel="noreferrer"
          >
            Meta 랭킹 발표 ↗
          </a>
        </span>
      </aside>

      <footer className="footer">
        <div>
          <strong>FKO · Fight Korea</strong>
          <p>
            UFC 및 Zuffa와 공식 제휴 관계가 없는 독립 일정 안내
            서비스입니다. 랭킹은 UFC 공식 페이지의 공개값을 출처와 함께
            제공합니다.
          </p>
        </div>
        <span className="footer-links">
          <Link href="/photo-credits">선수 사진 출처</Link>
          <Link className="footer-home-link" href="/">
            일정 홈으로 →
          </Link>
        </span>
      </footer>
    </main>
  );
}
