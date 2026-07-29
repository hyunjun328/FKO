// 일정 목록과 월간 캘린더, 대회 상세를 제어하는 클라이언트 화면
"use client";

import { useEffect, useMemo, useState } from "react";
import { EVENTS, type BoutSection, type FightEvent } from "../data/events";
import { FIGHTER_PROFILES, KOREAN_FIGHTERS } from "../data/fighters";

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

const SECTION_LABELS: Record<BoutSection, string> = {
  main: "메인카드",
  prelims: "언더카드",
  announced: "발표된 대진",
};

const WEEKDAYS = ["일", "월", "화", "수", "목", "금", "토"];

type FighterSelection = {
  name: string;
  koName: string;
  weight: string;
};

function kstDateKey(iso: string) {
  return KST_DATE_FORMATTER.format(new Date(iso));
}

function kstParts(iso: string) {
  const parts = new Intl.DateTimeFormat("ko-KR", {
    timeZone: "Asia/Seoul",
    month: "2-digit",
    day: "2-digit",
    weekday: "short",
  }).formatToParts(new Date(iso));
  const value = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((part) => part.type === type)?.value ?? "";
  return { month: value("month"), day: value("day"), weekday: value("weekday") };
}

function remaining(startUtc: string, now: number) {
  const difference = Math.max(0, new Date(startUtc).getTime() - now);
  return {
    days: Math.floor(difference / 86_400_000),
    hours: Math.floor((difference % 86_400_000) / 3_600_000),
    minutes: Math.floor((difference % 3_600_000) / 60_000),
  };
}

function fighterInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();
}

function recordSummary(record: string) {
  const wins = Number(record.match(/(\d+)승/)?.[1] ?? 0);
  const losses = Number(record.match(/(\d+)패/)?.[1] ?? 0);
  const draws = Number(record.match(/(\d+)무/)?.[1] ?? 0);
  const total = wins + losses + draws;
  return `${total}전 ${wins}승 ${losses}패${draws ? ` ${draws}무` : ""}`;
}

function officialYoutubeSearch(name: string) {
  return `https://www.youtube.com/@ufc/search?query=${encodeURIComponent(name)}`;
}

function FighterProfileDialog({
  fighter,
  onClose,
}: {
  fighter: FighterSelection;
  onClose: () => void;
}) {
  const profile = FIGHTER_PROFILES[fighter.name];
  const verificationSources =
    profile?.verificationSources ??
    (profile
      ? [{ label: "UFC 공식 선수 정보", url: profile.sourceUrl }]
      : []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="fighter-dialog-backdrop"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        className="fighter-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="fighter-dialog-title"
      >
        <button
          type="button"
          className="fighter-dialog-close"
          onClick={onClose}
          aria-label="선수 정보 닫기"
          autoFocus
        >
          닫기 ×
        </button>

        <div className="fighter-profile-head">
          <div className="fighter-avatar" aria-hidden="true">
            <span>{fighterInitials(fighter.name)}</span>
          </div>
          <div>
            <span className="fighter-profile-kicker">
              {profile?.verificationSources
                ? `${profile.verificationSources.length}개 출처 교차 검증`
                : profile
                  ? "검수된 선수 정보"
                  : "기본 선수 정보"}
            </span>
            <h2 id="fighter-dialog-title">{fighter.koName}</h2>
            <p lang="en">{fighter.name}</p>
            {profile?.nickname ? (
              <strong className="fighter-nickname">
                “{profile.nickname}”
              </strong>
            ) : null}
          </div>
        </div>

        {profile ? (
          <>
            <div className="fighter-profile-badges">
              <span>{profile.ranking}</span>
              <span>{recordSummary(profile.record)}</span>
              {profile.verificationSources ? (
                <span className="verified-badge">교차 검증 완료</span>
              ) : null}
            </div>
            <p className="fighter-profile-summary">{profile.summary}</p>
            {profile.lastFight ? (
              <section className="fighter-last-fight">
                <span className="fighter-last-label">최근 경기 결과</span>
                <div className="fighter-last-row">
                  <strong
                    className="fighter-result"
                    data-result={profile.lastFight.result}
                  >
                    {profile.lastFight.result}
                  </strong>
                  <div className="fighter-last-opponent">
                    <b>{profile.lastFight.opponentKo}</b>
                    <small lang="en">{profile.lastFight.opponent}</small>
                  </div>
                  <p>
                    {profile.lastFight.date} · {profile.lastFight.method}
                  </p>
                </div>
              </section>
            ) : null}
            <dl className="fighter-profile-stats">
              <div>
                <dt>출신</dt>
                <dd>{profile.country}</dd>
              </div>
              <div>
                <dt>스타일</dt>
                <dd>{profile.style}</dd>
              </div>
              <div>
                <dt>신장</dt>
                <dd>
                  {profile.heightCm ? `${profile.heightCm}cm` : "확인 중"}
                </dd>
              </div>
              <div>
                <dt>리치</dt>
                <dd>
                  {profile.reachCm ? `${profile.reachCm}cm` : "확인 중"}
                </dd>
              </div>
              <div>
                <dt>체급</dt>
                <dd>{fighter.weight}</dd>
              </div>
              {profile.team ? (
                <div>
                  <dt>소속</dt>
                  <dd>{profile.team}</dd>
                </div>
              ) : null}
              {profile.octagonDebut ? (
                <div>
                  <dt>UFC 데뷔</dt>
                  <dd>{profile.octagonDebut}</dd>
                </div>
              ) : null}
              <div>
                <dt>확인일</dt>
                <dd>{profile.verifiedAt}</dd>
              </div>
              {profile.verificationSources ? (
                <div>
                  <dt>검수 근거</dt>
                  <dd>{profile.verificationSources.length}개 출처</dd>
                </div>
              ) : null}
            </dl>
          </>
        ) : (
          <div className="fighter-profile-pending">
            <strong>{fighter.weight} 출전 예정</strong>
            <p>
              아직 공식 전적과 랭킹을 검수 중입니다. 확인되지 않은 정보는
              추정해서 표시하지 않습니다.
            </p>
          </div>
        )}

        <div className="fighter-external-links">
          {verificationSources.map((source) => (
            <a
              href={source.url}
              target="_blank"
              rel="noreferrer"
              key={source.url}
            >
              {source.label} ↗
            </a>
          ))}
          <a
            href={officialYoutubeSearch(fighter.name)}
            target="_blank"
            rel="noreferrer"
          >
            UFC 공식 유튜브 영상 찾기 ↗
          </a>
        </div>
      </section>
    </div>
  );
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
          <span className="detail-badge">한국시간</span>
          <span className="detail-badge">{event.bouts.length}경기 발표</span>
        </div>
        <h3>{event.title}</h3>
        <p>{event.subtitle}</p>
        <p>
          메인카드 · {KST_FORMATTER.format(new Date(event.startUtc))} KST
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
                    <span className="fighter-name-line">
                      <strong>{bout.leftKo}</strong>
                      {leftProfile ? (
                        <span className="fighter-rank">
                          {leftProfile.ranking}
                        </span>
                      ) : null}
                    </span>
                    <small lang="en">{bout.left}</small>
                    <span className="fighter-record">
                      {leftProfile
                        ? recordSummary(leftProfile.record)
                        : "전적 확인 중"}
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
                    <span className="fighter-name-line">
                      <strong>{bout.rightKo}</strong>
                      {rightProfile ? (
                        <span className="fighter-rank">
                          {rightProfile.ranking}
                        </span>
                      ) : null}
                    </span>
                    <small lang="en">{bout.right}</small>
                    <span className="fighter-record">
                      {rightProfile
                        ? recordSummary(rightProfile.record)
                        : "전적 확인 중"}
                    </span>
                  </button>
                  <span className="weight">
                    {bout.title ? "TITLE · " : ""}
                    {bout.weight}
                  </span>
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
  const [selectedId, setSelectedId] = useState(EVENTS[0].id);
  const [selectedFighter, setSelectedFighter] =
    useState<FighterSelection | null>(null);
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const timer = window.setInterval(() => setNow(Date.now()), 60_000);
    return () => window.clearInterval(timer);
  }, []);

  const selected = EVENTS.find((event) => event.id === selectedId) ?? EVENTS[0];
  const nextEvent =
    EVENTS.find((event) => new Date(event.startUtc).getTime() > now) ?? EVENTS[0];
  const mainEvent = nextEvent.bouts[0];
  const timeLeft = remaining(nextEvent.startUtc, now);

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
        <div className="update-state">
          <span className="update-dot" aria-hidden="true" />
          <span>일정 확인 완료</span>
          <span>2026. 7. 29.</span>
        </div>
      </header>

      <section className="hero">
        <div className="eyebrow">FKO · Korea Standard Time</div>
        <h1 className="hero-title">
          UFC 일정,
          <br />
          <em>한국시간</em>으로.
        </h1>
        <p className="hero-lead">
          시차 계산은 끝났습니다. 다가오는 대회부터 전체 대진까지,
          한국에서 보기 편한 시간으로 빠르게 확인하세요.
        </p>

        <article className="next-event">
          <div className="next-event-copy">
            <span className="event-kicker">다음 대회 · {nextEvent.status}</span>
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
                <b>{mainEvent.rightKo}</b>
                <small lang="en">{mainEvent.right}</small>
              </button>
            </div>
            <div className="event-meta">
              <span>
                메인카드 · {KST_FORMATTER.format(new Date(nextEvent.startUtc))} KST
              </span>
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
          <div className="countdown-panel" aria-label="다음 대회까지 남은 시간">
            <div className="countdown-label">메인카드 시작까지</div>
            <div className="countdown">
              <div className="countdown-unit">
                <b>{timeLeft.days}</b>
                <span>일</span>
              </div>
              <div className="countdown-unit">
                <b>{String(timeLeft.hours).padStart(2, "0")}</b>
                <span>시간</span>
              </div>
              <div className="countdown-unit">
                <b>{String(timeLeft.minutes).padStart(2, "0")}</b>
                <span>분</span>
              </div>
            </div>
          </div>
        </article>
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
                {EVENTS.map((event) => {
                  const parts = kstParts(event.startUtc);
                  return (
                    <a
                      href="#event-detail"
                      className="event-row"
                      key={event.id}
                      aria-current={selected.id === event.id}
                      onClick={() => setSelectedId(event.id)}
                      aria-label={`${event.title} 상세 보기`}
                    >
                      <span className="date-block" aria-hidden="true">
                        <strong>{parts.day}</strong>
                        <span>
                          {parts.month} · {parts.weekday}
                        </span>
                      </span>
                      <span className="event-row-copy">
                        <small>{event.series}</small>
                        <h3>
                          {event.bouts[0].leftKo} vs {event.bouts[0].rightKo}
                        </h3>
                        <span className="event-row-english" lang="en">
                          {event.bouts[0].left} vs {event.bouts[0].right}
                        </span>
                        <p>
                          {KST_FORMATTER.format(new Date(event.startUtc))} ·{" "}
                          {event.city}
                        </p>
                      </span>
                      <span className="row-arrow" aria-hidden="true">
                        상세&nbsp;→
                      </span>
                    </a>
                  );
                })}
              </div>
            ) : (
              <CalendarView
                events={EVENTS}
                selected={selected}
                onSelect={(event) => setSelectedId(event.id)}
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

          <EventDetail
            event={selected}
            onFighterSelect={setSelectedFighter}
          />
        </div>
      </section>

      <section
        className="korean-fighters-section"
        aria-labelledby="korean-fighters-title"
      >
        <div className="section-head korean-fighters-head">
          <div>
            <span className="section-kicker">KOREAN FIGHTERS</span>
            <h2 id="korean-fighters-title">코리안 파이터</h2>
            <p>
              현재 UFC에서 활동 중인 한국 선수들의 전적과 최근 흐름을
              모았습니다.
            </p>
          </div>
          <span className="korean-fighter-count">
            공식 자료 확인 · {KOREAN_FIGHTERS.length}명
          </span>
        </div>

        <div className="korean-fighter-grid">
          {KOREAN_FIGHTERS.map((fighter) => {
            const profile = FIGHTER_PROFILES[fighter.name];
            return (
              <button
                type="button"
                className="korean-fighter-card"
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
                <span className="korean-card-top">
                  <span className="korean-card-avatar" aria-hidden="true">
                    {fighterInitials(fighter.name)}
                  </span>
                  <span className="korean-card-status">
                    <i aria-hidden="true" />
                    {profile.verificationSources
                      ? `${profile.verificationSources.length}곳 교차 검증`
                      : "UFC 현역"}
                  </span>
                </span>
                <span className="korean-card-name">
                  <strong>{fighter.koName}</strong>
                  <small lang="en">{fighter.name}</small>
                  {profile.nickname ? (
                    <em lang="en">“{profile.nickname}”</em>
                  ) : null}
                </span>
                <span className="korean-card-meta">
                  <b>{fighter.division}</b>
                  <b>{recordSummary(profile.record)}</b>
                </span>
                {profile.lastFight ? (
                  <span className="korean-card-last">
                    <span>
                      최근 경기
                      <b data-result={profile.lastFight.result}>
                        {profile.lastFight.result}
                      </b>
                    </span>
                    <small>
                      vs {profile.lastFight.opponentKo} ·{" "}
                      {profile.lastFight.date}
                    </small>
                  </span>
                ) : null}
                <span className="korean-card-next">
                  <span>다음 경기 미정</span>
                  <b aria-hidden="true">상세 →</b>
                </span>
              </button>
            );
          })}
        </div>
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
        <span className="footer-status">1차 공개 베타</span>
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
