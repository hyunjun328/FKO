// 일정 목록과 월간 캘린더, 대회 상세를 제어하는 클라이언트 화면
"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { EVENTS, type BoutSection, type FightEvent } from "../data/events";
import { AUTO_SCHEDULED_EVENTS } from "../data/auto-scheduled-events";
import { EVENT_RESULTS } from "../data/event-results";
import { FIGHTER_PROFILES } from "../data/fighters";
import { eventDisplayStatus } from "../lib/event-status";
import { SCHEDULE_CHECKED_AT } from "../data/schedule-status";
import { unofficialWorldRanking } from "../data/unofficial-rankings";
import {
  FighterProfileDialog,
  recordSummary,
  type FighterSelection,
} from "./FighterProfileDialog";
import { FighterFace } from "./FighterFace";
import { GuestCommentThread } from "./GuestCommentThread";
import { BoutPrediction } from "./BoutPrediction";

const KST_FORMATTER = new Intl.DateTimeFormat("ko-KR", {
  timeZone: "Asia/Seoul",
  month: "long",
  day: "numeric",
  weekday: "short",
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
});

const KST_DATE_FORMATTER = new Intl.DateTimeFormat("en-CA", {
  timeZone: "Asia/Seoul",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});

const SCHEDULE_CHECK_FORMATTER = new Intl.DateTimeFormat("ko-KR", {
  timeZone: "Asia/Seoul",
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
});

const SECTION_LABELS: Record<BoutSection, string> = {
  main: "메인카드",
  prelims: "언더카드",
  announced: "발표된 대진",
};

const WEEKDAYS = ["일", "월", "화", "수", "목", "금", "토"];

const TBA_BOUT = {
  left: "TBA",
  leftKo: "대진 발표 대기",
  right: "TBA",
  rightKo: "대진 발표 대기",
  weight: "체급 발표 대기",
  section: "announced" as const,
};

const ALL_EVENTS: FightEvent[] = [
  ...EVENTS,
  ...AUTO_SCHEDULED_EVENTS
    .filter((event) => !EVENTS.some((known) => known.startUtc.slice(0, 10) === event.date))
    .map((event) => ({
      id: event.id,
      series: "UFC FIGHT NIGHT" as const,
      title: event.title,
      subtitle: "Fight card to be announced",
      startUtc: `${event.date}T00:00:00Z`,
      timeTbd: true,
      venue: "UFC 공식 발표 대기",
      city: "장소 발표 대기",
      country: "",
      status: "예정" as const,
      sourceLabel: "UFCStats 예정 대회 목록",
      sourceUrl: event.sourceUrl,
      verifiedAt: "",
      bouts: [TBA_BOUT],
    })),
];

function kstDateKey(iso: string) {
  return KST_DATE_FORMATTER.format(new Date(iso));
}

function eventRankBadge(name: string) {
  const ranking = FIGHTER_PROFILES[name]?.ranking ?? "";

  if (ranking.includes("챔피언")) {
    return { label: "챔피언", value: "C" };
  }

  const rank = ranking.match(/(\d+)위/)?.[1];
  return rank ? { label: `${rank}위`, value: rank } : null;
}

function EventDetail({
  event,
  onFighterSelect,
}: {
  event: FightEvent;
  onFighterSelect: (fighter: FighterSelection) => void;
}) {
  const grouped = event.bouts.reduce(
    (result, bout) => {
      result[bout.section].push(bout);
      return result;
    },
    { main: [], prelims: [], announced: [] } as Record<
      BoutSection,
      FightEvent["bouts"]
    >,
  );

  return (
    <aside
      className="detail-panel"
      id="event-detail"
      tabIndex={-1}
      aria-label={`${event.title} 대진 상세`}
    >
      <div className="detail-top">
        <div className="detail-badges">
          <span className="detail-badge highlight">{event.status}</span>
          <span className="detail-badge">시간 KST</span>
          <span className="detail-badge">{event.bouts.length}경기 발표</span>
        </div>
        <h3>{event.title}</h3>
        <p>{event.subtitle}</p>
        <p>
          메인카드 · {event.timeTbd ? "시간 발표 대기" : `${KST_FORMATTER.format(new Date(event.startUtc))} KST`}
        </p>
        {event.prelimsUtc ? (
          <p>
            언더카드 · {KST_FORMATTER.format(new Date(event.prelimsUtc))} KST
          </p>
        ) : null}
        <p>
          {event.venue} · {event.city}, {event.country}
        </p>
      </div>

      <div className="fight-card">
        {(Object.keys(grouped) as BoutSection[]).map((section) =>
          grouped[section].length ? (
            <section className="card-section" key={section}>
              <div className="card-section-title">
                <span>{SECTION_LABELS[section]}</span>
                <span>{grouped[section].length}경기</span>
              </div>
              {grouped[section].map((bout) => {
                const leftProfile = FIGHTER_PROFILES[bout.left];
                const rightProfile = FIGHTER_PROFILES[bout.right];
                const leftWorldRanking = unofficialWorldRanking(bout.left);
                const rightWorldRanking = unofficialWorldRanking(bout.right);
                return (
                  <div
                    className="bout"
                    key={`${bout.left}-${bout.right}`}
                    aria-label={`${bout.leftKo} ${bout.left} 대 ${bout.rightKo} ${bout.right}, ${bout.weight}`}
                  >
                  <button
                    type="button"
                    className="fighter fighter-trigger fighter-left"
                    onClick={() =>
                      onFighterSelect({
                        name: bout.left,
                        koName: bout.leftKo,
                        weight: bout.weight,
                      })
                    }
                    aria-label={`${bout.leftKo} 선수 정보 보기`}
                  >
                    {section === "main" ? (
                      <FighterFace
                        name={bout.left}
                        koName={bout.leftKo}
                        className="bout-fighter-face"
                        gender={bout.weight.includes("여성") ? "female" : "male"}
                      />
                    ) : null}
                    <span className="fighter-name-line">
                      <strong>{bout.leftKo}</strong>
                      {leftProfile || leftWorldRanking ? (
                        <span className="fighter-rank">
                          {leftProfile?.ranking ??
                            `비공식 세계 #${leftWorldRanking?.rank}`}
                        </span>
                      ) : null}
                    </span>
                    <small lang="en">{bout.left}</small>
                    <span className="fighter-record">
                      {leftProfile
                        ? recordSummary(leftProfile.record)
                        : leftWorldRanking?.record ?? "전적 확인 중"}
                    </span>
                  </button>
                  <span className="bout-vs">VS</span>
                  <button
                    type="button"
                    className="fighter fighter-trigger fighter-right"
                    onClick={() =>
                      onFighterSelect({
                        name: bout.right,
                        koName: bout.rightKo,
                        weight: bout.weight,
                      })
                    }
                    aria-label={`${bout.rightKo} 선수 정보 보기`}
                  >
                    {section === "main" ? (
                      <FighterFace
                        name={bout.right}
                        koName={bout.rightKo}
                        className="bout-fighter-face"
                        gender={bout.weight.includes("여성") ? "female" : "male"}
                      />
                    ) : null}
                    <span className="fighter-name-line">
                      <strong>{bout.rightKo}</strong>
                      {rightProfile || rightWorldRanking ? (
                        <span className="fighter-rank">
                          {rightProfile?.ranking ??
                            `비공식 세계 #${rightWorldRanking?.rank}`}
                        </span>
                      ) : null}
                    </span>
                    <small lang="en">{bout.right}</small>
                    <span className="fighter-record">
                      {rightProfile
                        ? recordSummary(rightProfile.record)
                        : rightWorldRanking?.record ?? "전적 확인 중"}
                    </span>
                  </button>
                  <span className="weight">
                    {bout.title ? "TITLE · " : ""}
                    {bout.weight}
                  </span>
                  {section === "main" ? (
                    <BoutPrediction
                      targetId={`event:${event.id}:bout:${bout.left}-${bout.right}`}
                      left={bout.left}
                      leftKo={bout.leftKo}
                      right={bout.right}
                      rightKo={bout.rightKo}
                    />
                  ) : null}
                  </div>
                );
              })}
            </section>
          ) : null,
        )}
      </div>

      <div className="source-box">
        대진 순서와 시작 시각은 변경될 수 있습니다.{" "}
        <a href={event.sourceUrl} target="_blank" rel="noreferrer">
          {event.sourceLabel}
        </a>
        에서 {new Date(event.verifiedAt).toLocaleString("ko-KR")}에 확인했습니다.
      </div>
      <GuestCommentThread
        targetId={`event:${event.id}:main-event`}
        title={`${event.title} 메인 이벤트 반응`}
      />
    </aside>
  );
}

function CalendarView({
  events,
  selected,
  onSelect,
}: {
  events: FightEvent[];
  selected: FightEvent;
  onSelect: (event: FightEvent) => void;
}) {
  const selectedKey = kstDateKey(selected.startUtc);
  const [month, setMonth] = useState(
    new Date(
      Number(selectedKey.slice(0, 4)),
      Number(selectedKey.slice(5, 7)) - 1,
      1,
    ),
  );

  const cells = useMemo(() => {
    const firstDay = new Date(month.getFullYear(), month.getMonth(), 1);
    const gridStart = new Date(firstDay);
    gridStart.setDate(firstDay.getDate() - firstDay.getDay());
    return Array.from({ length: 42 }, (_, index) => {
      const date = new Date(gridStart);
      date.setDate(gridStart.getDate() + index);
      return date;
    });
  }, [month]);

  const eventsByDate = useMemo(
    () =>
      events.reduce<Record<string, FightEvent[]>>((result, event) => {
        const key = kstDateKey(event.startUtc);
        result[key] = [...(result[key] ?? []), event];
        return result;
      }, {}),
    [events],
  );

  const todayKey = kstDateKey(new Date().toISOString());

  return (
    <div className="calendar-panel">
      <div className="calendar-toolbar">
        <h3>
          {month.getFullYear()}년 {month.getMonth() + 1}월
        </h3>
        <div className="month-controls" aria-label="달력 월 이동">
          <button
            type="button"
            aria-label="이전 달"
            onClick={() =>
              setMonth(new Date(month.getFullYear(), month.getMonth() - 1, 1))
            }
          >
            ←
          </button>
          <button
            type="button"
            aria-label="다음 달"
            onClick={() =>
              setMonth(new Date(month.getFullYear(), month.getMonth() + 1, 1))
            }
          >
            →
          </button>
        </div>
      </div>
      <div className="weekdays" aria-hidden="true">
        {WEEKDAYS.map((day) => (
          <div className="weekday" key={day}>
            {day}
          </div>
        ))}
      </div>
      <div className="calendar-grid" role="grid" aria-label="UFC 월간 일정">
        {cells.map((date) => {
          const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
          const dayEvents = eventsByDate[key] ?? [];
          const className = [
            "calendar-day",
            date.getMonth() !== month.getMonth() ? "outside" : "",
            key === todayKey ? "today" : "",
            key === selectedKey ? "selected" : "",
          ]
            .filter(Boolean)
            .join(" ");
          const content = (
            <>
              <span className="day-number">{date.getDate()}</span>
              {dayEvents.map((event) => (
                <span className="calendar-event" key={event.id}>
                  {event.series === "UFC" ? event.title : event.subtitle}
                  <time>
                    {new Intl.DateTimeFormat("ko-KR", {
                      timeZone: "Asia/Seoul",
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: false,
                    }).format(new Date(event.startUtc))}
                  </time>
                </span>
              ))}
            </>
          );

          return dayEvents.length ? (
            <button
              type="button"
              className={className}
              key={key}
              onClick={() => onSelect(dayEvents[0])}
              aria-label={`${key}, ${dayEvents[0].title} 선택`}
            >
              {content}
            </button>
          ) : (
            <div className={className} key={key} role="gridcell">
              {content}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function FightCalendar() {
  const [view, setView] = useState<"list" | "calendar">("list");
  const [selectedId, setSelectedId] = useState(ALL_EVENTS[0].id);
  const [selectedFighter, setSelectedFighter] =
    useState<FighterSelection | null>(null);
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const timer = window.setInterval(() => setNow(Date.now()), 60_000);
    return () => window.clearInterval(timer);
  }, []);

  const resultsByEventId = new Map(
    EVENT_RESULTS.map((result) => [result.eventId, result]),
  );
  const visibleEvents = ALL_EVENTS.filter(
    (event) => eventDisplayStatus(event, now, resultsByEventId.get(event.id)) !== "completed",
  );
  const nextEvent =
    visibleEvents.find(
      (event) => eventDisplayStatus(event, now, resultsByEventId.get(event.id)) === "fight-day",
    ) ??
    visibleEvents.find(
      (event) => eventDisplayStatus(event, now, resultsByEventId.get(event.id)) === "upcoming",
    ) ?? ALL_EVENTS[0];
  const selected = visibleEvents.find((event) => event.id === selectedId) ?? nextEvent;
  const scheduledEvents = [...visibleEvents].sort((left, right) => {
    const leftStatus = eventDisplayStatus(left, now, resultsByEventId.get(left.id));
    const rightStatus = eventDisplayStatus(right, now, resultsByEventId.get(right.id));
    if (leftStatus === "fight-day" && rightStatus !== "fight-day") return -1;
    if (rightStatus === "fight-day" && leftStatus !== "fight-day") return 1;
    return new Date(left.startUtc).getTime() - new Date(right.startUtc).getTime();
  });
  const mainEvent = nextEvent.bouts[0];
  const featuredEvent =
    scheduledEvents.find(
      (event) =>
        event.series === "UFC" &&
        eventDisplayStatus(event, now, resultsByEventId.get(event.id)) !== "awaiting-results",
    ) ?? nextEvent;
  const featuredBout = featuredEvent.bouts[0];

  function selectEvent(eventId: string) {
    setSelectedId(eventId);
    window.requestAnimationFrame(() => {
      document.getElementById("event-detail")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }

  return (
    <main className="site-shell">
      <header className="topbar">
        <div className="brand" aria-label="FKO Fight Korea">
          <span className="brand-mark">FKO</span>
          <span className="brand-copy">
            <strong>FKO</strong>
            <small>Fight Korea</small>
          </span>
        </div>
        <div className="topbar-actions">
          <Link className="topbar-link" href="/rankings">
            선수 랭킹
          </Link>
          <Link className="topbar-link" href="/p4p">
            P4P
          </Link>
          <Link className="topbar-link" href="/korean-fighters">
            코리안 파이터
          </Link>
          <Link className="topbar-link" href="/archive">
            UFC 아카이브
          </Link>
          <Link className="topbar-link" href="/results">
            대회 결과
          </Link>
          <div className="update-state">
            <span className="update-dot" aria-hidden="true" />
            <span>일정 확인 완료</span>
            <span>{SCHEDULE_CHECK_FORMATTER.format(new Date(SCHEDULE_CHECKED_AT))}</span>
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="eyebrow">UFC EVENTS · FIGHTERS · RANKINGS</div>
        <h1 className="hero-title">
          UFC 일정
          <br />
          <em>대진과 선수 정보.</em>
        </h1>
        <p className="hero-lead">
          다가오는 UFC 대회, 전체 대진, 선수 정보를 한곳에서 확인하세요.
          일정 시간은 한국시간(KST)으로 제공합니다.
        </p>

        <article className="next-event">
          <div className="next-event-copy">
            <span className="event-kicker">
              {eventDisplayStatus(nextEvent, now, resultsByEventId.get(nextEvent.id)) === "fight-day"
                ? "FIGHT DAY"
                : `다음 대회 · ${nextEvent.status}`}
            </span>
            <h2>{nextEvent.title}</h2>
            <div className="main-matchup">
              <button
                type="button"
                className="matchup-fighter fighter-trigger hero-fighter-trigger"
                onClick={() =>
                  setSelectedFighter({
                    name: mainEvent.left,
                    koName: mainEvent.leftKo,
                    weight: mainEvent.weight,
                  })
                }
                aria-label={`${mainEvent.leftKo} 선수 정보 보기`}
              >
                <FighterFace
                  name={mainEvent.left}
                  koName={mainEvent.leftKo}
                  className="hero-fighter-face"
                  eager
                  gender={
                    mainEvent.weight.includes("여성") ? "female" : "male"
                  }
                />
                <b>{mainEvent.leftKo}</b>
                <small lang="en">{mainEvent.left}</small>
              </button>
              <strong>VS</strong>
              <button
                type="button"
                className="matchup-fighter fighter-trigger hero-fighter-trigger"
                onClick={() =>
                  setSelectedFighter({
                    name: mainEvent.right,
                    koName: mainEvent.rightKo,
                    weight: mainEvent.weight,
                  })
                }
                aria-label={`${mainEvent.rightKo} 선수 정보 보기`}
              >
                <FighterFace
                  name={mainEvent.right}
                  koName={mainEvent.rightKo}
                  className="hero-fighter-face"
                  eager
                  gender={
                    mainEvent.weight.includes("여성") ? "female" : "male"
                  }
                />
                <b>{mainEvent.rightKo}</b>
                <small lang="en">{mainEvent.right}</small>
              </button>
            </div>
            <div className="event-meta">
              <span className="event-start-time">
                <small>메인카드 시작</small>
                <strong>
                  {nextEvent.timeTbd ? "시간 발표 대기" : `${KST_FORMATTER.format(new Date(nextEvent.startUtc))} KST`}
                </strong>
              </span>
              <div className="event-meta-details">
                {nextEvent.prelimsUtc ? (
                  <span>
                    언더카드 ·{" "}
                    {KST_FORMATTER.format(new Date(nextEvent.prelimsUtc))} KST
                  </span>
                ) : null}
                <span>
                  {nextEvent.city} · {nextEvent.venue}
                </span>
                <span>{nextEvent.bouts.length}경기 발표</span>
              </div>
            </div>
          </div>
        </article>
        <section className="featured-match-section" aria-label="다음 주요 경기">
          <aside className="hero-info-panel">
            <a
              className="featured-match-card"
              href="#event-detail"
              onClick={() => selectEvent(featuredEvent.id)}
              aria-label={`${featuredEvent.title} ${featuredBout.leftKo} 대 ${featuredBout.rightKo} 상세 보기`}
            >
              <span className="hero-panel-label">다음 주요 매치</span>
              <span className="featured-match-context">
                {featuredBout.weight} · {featuredEvent.city}
              </span>
              <span className="featured-matchup">
                <span className="featured-matchup-fighter">
                  <FighterFace
                    name={featuredBout.left}
                    koName={featuredBout.leftKo}
                    className="featured-fighter-face"
                    gender={
                      featuredBout.weight.includes("여성") ? "female" : "male"
                    }
                  />
                  <strong>{featuredBout.leftKo}</strong>
                  <small lang="en">{featuredBout.left}</small>
                </span>
                <i>VS</i>
                <span className="featured-matchup-fighter">
                  <FighterFace
                    name={featuredBout.right}
                    koName={featuredBout.rightKo}
                    className="featured-fighter-face"
                    gender={
                      featuredBout.weight.includes("여성") ? "female" : "male"
                    }
                  />
                  <strong>{featuredBout.rightKo}</strong>
                  <small lang="en">{featuredBout.right}</small>
                </span>
              </span>
              <span className="featured-match-meta">
                <b>{featuredEvent.title}</b>
                <small>
                  {featuredEvent.timeTbd ? "시간 발표 대기" : `${KST_FORMATTER.format(new Date(featuredEvent.startUtc))} KST`}
                </small>
              </span>
              <b>대진 전체 보기 →</b>
            </a>
          </aside>
        </section>
      </section>

      <section className="schedule-section">
        <div className="section-head">
          <div>
            <h2>다가오는 대회</h2>
            <p>대회를 선택하면 현재 발표된 대진을 확인할 수 있습니다.</p>
          </div>
          <div className="view-switcher" aria-label="일정 보기 방식">
            <button
              type="button"
              aria-pressed={view === "list"}
              onClick={() => setView("list")}
            >
              목록
            </button>
            <button
              type="button"
              aria-pressed={view === "calendar"}
              onClick={() => setView("calendar")}
            >
              달력
            </button>
          </div>
        </div>

        <div className="schedule-layout">
          <div>
            {view === "list" ? (
              <div className="list-panel event-list">
                {scheduledEvents.map((event) => {
                  const mainBout = event.bouts[0];
                  const displayStatus = eventDisplayStatus(
                    event,
                    now,
                    resultsByEventId.get(event.id),
                  );
                  const leftRank = eventRankBadge(mainBout.left);
                  const rightRank = eventRankBadge(mainBout.right);
                  const mainCardCount = event.bouts.filter(
                    (bout) => bout.section === "main",
                  ).length;
                  return (
                    <a
                      href="#event-detail"
                      className="event-row"
                      key={event.id}
                      aria-current={selected.id === event.id}
                      onClick={() => selectEvent(event.id)}
                      aria-label={`${event.title} 상세 보기`}
                    >
                      <div className="event-row-copy">
                        <span className="event-row-timing">
                          {event.timeTbd ? "시간 발표 대기" : `${KST_FORMATTER.format(new Date(event.startUtc))} KST`}
                        </span>
                        {displayStatus === "awaiting-results" ? (
                          <span className="event-result-pending">
                            결과 확인 중 · {SCHEDULE_CHECK_FORMATTER.format(new Date(SCHEDULE_CHECKED_AT))} 마지막 확인
                          </span>
                        ) : null}
                        <strong className="event-row-event">
                          {event.series === "UFC" ? event.title : event.series}
                          <span aria-hidden="true"> · </span>
                          {event.city}
                        </strong>
                        <h3 className="event-row-matchup">
                          <span className="event-row-fighter">
                            <FighterFace
                              name={mainBout.left}
                              koName={mainBout.leftKo}
                              className="event-row-fighter-face"
                              gender={mainBout.weight.includes("여성") ? "female" : "male"}
                            />
                            <span>
                              {mainBout.leftKo}
                              {leftRank ? (
                                <b className="event-ranking-badge" aria-label={leftRank.label}>
                                  {leftRank.value}
                                </b>
                              ) : null}
                            </span>
                          </span>
                          <i>vs</i>
                          <span className="event-row-fighter">
                            <FighterFace
                              name={mainBout.right}
                              koName={mainBout.rightKo}
                              className="event-row-fighter-face"
                              gender={mainBout.weight.includes("여성") ? "female" : "male"}
                            />
                            <span>
                              {mainBout.rightKo}
                              {rightRank ? (
                                <b className="event-ranking-badge" aria-label={rightRank.label}>
                                  {rightRank.value}
                                </b>
                              ) : null}
                            </span>
                          </span>
                        </h3>
                        <span className="event-row-english" lang="en">
                          <span>{mainBout.left}</span>
                          <i aria-hidden="true">vs</i>
                          <span>{mainBout.right}</span>
                        </span>
                        <span className="event-row-card-count">
                          {mainBout.weight} · 메인카드 {mainCardCount}경기
                        </span>
                      </div>
                      <span className="row-arrow" aria-hidden="true">
                        상세&nbsp;→
                      </span>
                    </a>
                  );
                })}
              </div>
            ) : (
              <CalendarView
                events={scheduledEvents}
                selected={selected}
                onSelect={(event) => selectEvent(event.id)}
              />
            )}

            <div className="notice">
              <span className="notice-icon">!</span>
              <div>
                <strong>시간과 대진은 경기 주간에도 바뀔 수 있습니다.</strong>
                <p>
                  변경된 정보는 검수 후 반영합니다. 모든 시간은 대한민국
                  표준시(KST, UTC+9) 기준입니다.
                </p>
              </div>
            </div>
          </div>

        </div>

        <EventDetail
          event={selected}
          onFighterSelect={setSelectedFighter}
        />
      </section>

      <footer className="footer">
        <div>
          <strong>FKO · Fight Korea</strong>
          <p>
            UFC 및 Zuffa와 공식 제휴 관계가 없는 독립 일정 안내 서비스입니다.
            UFC와 관련 상표는 각 권리자에게 있습니다. 경기 영상과 공식 이미지는
            제공하지 않습니다.
          </p>
        </div>
        <span className="footer-links">
          <Link href="/photo-credits">선수 사진 출처</Link>
          <span className="footer-status">1차 공개 베타</span>
          <span className="footer-credit">© 2026 FKO · Made by 정현준</span>
        </span>
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
