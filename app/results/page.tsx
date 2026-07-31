// 자동 수집으로 확정된 UFC 대회 결과를 날짜순으로 보여주는 페이지다.
import type { Metadata } from "next";
import Link from "next/link";
import { EVENTS } from "../data/events";
import { EVENT_RESULTS } from "../data/event-results";

export const metadata: Metadata = {
  title: "UFC 대회 결과 | FKO",
  description: "자동 수집하고 확인한 UFC 대회별 경기 결과입니다.",
};

export default function ResultsPage() {
  const results = EVENT_RESULTS.map((result) => ({
    ...result,
    event: EVENTS.find((event) => event.id === result.eventId),
  })).filter((result) => result.event);

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
        {results.length ? results.map(({ event, bouts, sourceUrl, verifiedAt }) => (
          <article className="event-results-card" key={event!.id}>
            <header>
              <div><span>{event!.title}</span><small>{event!.city} · {event!.venue}</small></div>
              <time dateTime={verifiedAt}>{new Date(verifiedAt).toLocaleDateString("ko-KR")} 확인</time>
            </header>
            <ol>
              {bouts.map((bout, index) => (
                <li key={`${bout.winner}-${bout.loser}-${index}`}>
                  <strong>{bout.winner ?? "무효 경기"}</strong>
                  <span>{bout.loser ? ` def. ${bout.loser}` : ""}</span>
                  <small>{[bout.method, bout.round ? `${bout.round}R` : null, bout.time].filter(Boolean).join(" · ")}</small>
                </li>
              ))}
            </ol>
            <a href={sourceUrl} target="_blank" rel="noreferrer">원본 결과 보기</a>
          </article>
        )) : <p className="event-results-empty">아직 자동 수집으로 확정된 대회 결과가 없습니다.</p>}
      </section>
    </main>
  );
}
