// 자동 수집으로 확정된 UFC 대회 결과를 날짜순으로 보여주는 페이지다.
import type { Metadata } from "next";
import Link from "next/link";
import { EVENTS } from "../data/events";
import { EVENT_RESULTS } from "../data/event-results";
import { eventDisplayStatus } from "../lib/event-status";

export const metadata: Metadata = {
  title: "UFC 대회 결과 | FKO",
  description: "자동 수집하고 확인한 UFC 대회별 경기 결과입니다.",
};

export default function ResultsPage() {
  const resultsByEventId = new Map(
    EVENT_RESULTS.map((result) => [result.eventId, result]),
  );
  const results = EVENTS.map((event) => ({
    event,
    result: resultsByEventId.get(event.id),
  })).filter(({ event, result }) => eventDisplayStatus(event, Date.now(), result) === "completed");

  return (
    <main className="site-shell results-page">
      <header className="topbar">
        <Link className="brand" href="/" aria-label="FKO 일정으로">
          <span className="brand-mark">FKO</span>
          <span className="brand-copy"><strong>FKO</strong><small>Fight Korea</small></span>
        </Link>
        <Link className="back-home-link" href="/">UFC 일정</Link>
      </header>
      <section className="results-hero">
        <span className="section-kicker">FKO EVENT RESULTS</span>
        <h1>지난 대회 결과</h1>
        <p>공개 경기 기록을 자동 수집한 뒤 확인 시각과 함께 보관합니다.</p>
      </section>
      <section className="event-results-list" aria-label="대회 결과 목록">
        {results.length ? results.map(({ event, result }) => (
          <article className="event-results-card" key={event.id}>
            <header>
              <div><span>{event.title}</span><small>{event.city} · {event.venue}</small></div>
              {result ? (
                <time dateTime={result.verifiedAt}>{new Date(result.verifiedAt).toLocaleDateString("ko-KR")} 확인</time>
              ) : <time>공식 결과 수집 중</time>}
            </header>
            {result ? (
              <ol className="result-bout-list">
                  {result.bouts.map((bout, index) => (
                    <li className="result-bout" key={`${bout.winner}-${bout.loser}-${index}`}>
                      <div className="result-fighters">
                        <div className="result-fighter result-winner">
                          <span>승</span>
                          <strong>{bout.winner ?? "무효 경기"}</strong>
                        </div>
                        <b className="result-defeated">def.</b>
                        <div className="result-fighter result-loser">
                          <span>패</span>
                          <strong>{bout.loser ?? "상대 없음"}</strong>
                        </div>
                      </div>
                      <div className="result-finish">
                        <strong>{bout.method}</strong>
                        <span>{[bout.round ? `${bout.round}R` : null, bout.time].filter(Boolean).join(" · ")}</span>
                      </div>
                    </li>
                  ))}
                </ol>
            ) : <p className="event-results-empty">공식 결과가 확인되면 승패와 종료 방식을 자동으로 표시합니다.</p>}
          </article>
        )) : <p className="event-results-empty">아직 자동 수집으로 확정된 대회 결과가 없습니다.</p>}
      </section>
      <footer className="footer"><div><strong>FKO · Fight Korea</strong><p>FKO는 UFC와 무관한 비공식 팬 프로젝트입니다.</p></div><span className="footer-links"><Link className="footer-home-link" href="/">일정으로</Link></span></footer>
    </main>
  );
}
