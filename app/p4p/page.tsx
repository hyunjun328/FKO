// UFC 남녀 파운드 포 파운드 랭킹을 별도 화면으로 제공한다.
import type { Metadata } from "next";
import Link from "next/link";
import { P4PBrowser } from "../components/P4PBrowser";
import { P4P_RANKING_SOURCE } from "../data/p4p-rankings";

export const metadata: Metadata = {
  title: "UFC P4P 랭킹 | FKO",
  description:
    "UFC 남성·여성 파운드 포 파운드 공식 상위 15명을 한글로 확인하세요.",
};

export default function P4PPage() {
  return (
    <main className="site-shell rankings-page p4p-page">
      <header className="topbar">
        <Link className="brand" href="/" aria-label="FKO 일정 홈으로">
          <span className="brand-mark">FKO</span>
          <span className="brand-copy">
            <strong>FKO</strong>
            <small>Fight Korea</small>
          </span>
        </Link>
        <div className="topbar-actions">
          <Link className="topbar-link" href="/rankings">
            체급별 랭킹
          </Link>
          <Link className="topbar-link" href="/korean-fighters">
            코리안 파이터
          </Link>
          <Link className="topbar-link" href="/archive">
            UFC 아카이브
          </Link>
          <Link className="back-home-link" href="/">
            ← UFC 일정
          </Link>
        </div>
      </header>

      <section className="p4p-hero">
        <span className="section-kicker">UFC 공식 미디어 패널 기준</span>
        <h1>P4P 랭킹</h1>
        <p>
          체급 차이를 제외하고 누가 가장 뛰어난 선수인지 평가하는 파운드 포
          파운드 순위입니다. 남성과 여성 상위 15명을 분리해 보여줍니다.
        </p>
        <div className="p4p-source-state">
          <span>
            <b>공식 갱신</b>
            {P4P_RANKING_SOURCE.updatedAt}
          </span>
          <span>
            <b>FKO 확인</b>
            {P4P_RANKING_SOURCE.checkedAt}
          </span>
          <a
            href={P4P_RANKING_SOURCE.officialUrl}
            target="_blank"
            rel="noreferrer"
          >
            UFC 공식 원문 ↗
          </a>
        </div>
      </section>

      <nav className="ranking-view-switch" aria-label="랭킹 화면 선택">
        <Link href="/rankings">체급별 랭킹</Link>
        <span aria-current="page">P4P 랭킹</span>
      </nav>

      <P4PBrowser />

      <aside className="p4p-note">
        <strong>P4P는 체급별 순위와 다릅니다.</strong>
        <p>
          실제 맞대결을 가정한 무제한급 순서가 아니라, 체격 차이를 걷어내고
          기량과 성과를 비교하는 공식 미디어 패널 순위입니다.
        </p>
      </aside>

      <footer className="footer">
        <div>
          <strong>FKO · Fight Korea</strong>
          <p>
            UFC 및 Zuffa와 공식 제휴 관계가 없는 독립 일정 안내
            서비스입니다.
          </p>
        </div>
        <span className="footer-links">
          <Link href="/rankings">체급별 랭킹</Link>
          <Link className="footer-home-link" href="/">
            일정 홈으로 →
          </Link>
        </span>
      </footer>
    </main>
  );
}
