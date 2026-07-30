"use client";
// 선수 카드와 검수된 상세 정보 창을 여러 화면에서 함께 제공한다.

import { useEffect } from "react";
import {
  FIGHTER_PROFILES,
  type KoreanFighter,
} from "../data/fighters";
import { LEGEND_PROFILES } from "../data/legend-profiles";
import { unofficialWorldRanking } from "../data/unofficial-rankings";
import { FighterFace } from "./FighterFace";
import { GuestCommentThread } from "./GuestCommentThread";

export type FighterSelection = {
  name: string;
  koName: string;
  weight: string;
  ranking?: string;
  summary?: string;
  sourceUrl?: string;
  sourceLabel?: string;
  record?: string;
  simple?: boolean;
};

export function recordSummary(record: string) {
  const wins = Number(record.match(/(\d+)승/)?.[1] ?? 0);
  const losses = Number(record.match(/(\d+)패/)?.[1] ?? 0);
  const draws = Number(record.match(/(\d+)무(?!효)/)?.[1] ?? 0);
  const noContests = Number(record.match(/(\d+)무효/)?.[1] ?? 0);
  const total = wins + losses + draws + noContests;
  return `${total}전 ${wins}승 ${losses}패${draws ? ` ${draws}무` : ""}${
    noContests ? ` ${noContests}무효` : ""
  }`;
}

function officialYoutubeSearch(name: string) {
  return `https://www.youtube.com/@ufc/search?query=${encodeURIComponent(name)}`;
}

export function KoreanFighterCard({
  fighter,
  status,
  onSelect,
}: {
  fighter: KoreanFighter;
  status: "active" | "former";
  onSelect: (fighter: FighterSelection) => void;
}) {
  const profile = FIGHTER_PROFILES[fighter.name] ?? LEGEND_PROFILES[fighter.name];

  return (
    <button
      type="button"
      className="korean-fighter-card"
      data-status={status}
      onClick={() =>
        onSelect({
          name: fighter.name,
          koName: fighter.koName,
          weight: fighter.division,
        })
      }
      aria-label={`${fighter.koName} 상세 정보 보기`}
    >
      <span className="korean-card-top">
        <FighterFace
          name={fighter.name}
          koName={fighter.koName}
          className="korean-card-avatar"
          gender={fighter.division.includes("여성") ? "female" : "male"}
        />
        <span className="korean-card-status">
          <i aria-hidden="true" />
          {status === "active" ? "UFC 현역" : fighter.statusLabel}
        </span>
      </span>
      <span className="korean-card-name">
        <strong>{fighter.koName}</strong>
        <small lang="en">{fighter.name}</small>
        {profile.nickname ? <em lang="en">“{profile.nickname}”</em> : null}
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
            vs {profile.lastFight.opponentKo} · {profile.lastFight.date}
          </small>
        </span>
      ) : null}
      {status === "active" && profile.nextFight ? (
        <span className="korean-card-next korean-card-next-confirmed">
          <span>
            <small>{profile.nextFight.status}</small>
            <strong>vs {profile.nextFight.opponentKo}</strong>
            <em>
              {profile.nextFight.event} · {profile.nextFight.dateKst} KST ·{" "}
              {profile.nextFight.timing}
            </em>
          </span>
          <b aria-hidden="true">상세 →</b>
        </span>
      ) : (
        <span className="korean-card-next">
          <span>
            {status === "active" ? "다음 경기 미정" : "커리어 정보 보기"}
          </span>
          <b aria-hidden="true">상세 →</b>
        </span>
      )}
    </button>
  );
}

export function FighterProfileDialog({
  fighter,
  onClose,
}: {
  fighter: FighterSelection;
  onClose: () => void;
}) {
  const profile = FIGHTER_PROFILES[fighter.name] ?? LEGEND_PROFILES[fighter.name];
  const showProfile = Boolean(profile && !fighter.simple);
  const worldRanking = unofficialWorldRanking(fighter.name);
  const verificationSources =
    showProfile ? profile?.verificationSources ?? [] :
    (fighter.sourceUrl
      ? [{ label: fighter.sourceLabel ?? "UFC 공식 랭킹", url: fighter.sourceUrl }]
      : profile
        ? [{ label: "UFC 공식 선수 정보", url: profile.sourceUrl }]
        : []);
  const topSources = verificationSources.slice(0, 4);

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
          <FighterFace
            name={fighter.name}
            koName={fighter.koName}
            className="fighter-avatar"
            eager
            gender={fighter.weight.includes("여성") ? "female" : "male"}
          />
          <div>
            <span className="fighter-profile-kicker">
              {profile ? "선수 상세 정보" : "랭킹 선수 정보"}
            </span>
            <h2 id="fighter-dialog-title">{fighter.koName}</h2>
            <p lang="en">{fighter.name}</p>
            {showProfile && profile?.nickname ? (
              <strong className="fighter-nickname">
                “{profile.nickname}”
              </strong>
            ) : null}
          </div>
        </div>

        {topSources.length ? (
          <nav className="fighter-top-sources" aria-label="선수 정보 출처">
            <span>출처</span>
            {topSources.map((source) => (
              <a
                href={source.url}
                target="_blank"
                rel="noreferrer"
                key={source.url}
              >
                {source.label} ↗
              </a>
            ))}
          </nav>
        ) : null}

        {showProfile && profile ? (
          <>
            <div className="fighter-profile-badges">
              <span>{profile.ranking}</span>
              {fighter.ranking && fighter.ranking !== profile.ranking ? (
                <span>{fighter.ranking}</span>
              ) : null}
              <span>{recordSummary(profile.record)}</span>
              {worldRanking ? (
                <span className="unofficial-ranking-badge">
                  비공식 세계 #{worldRanking.rank} · {worldRanking.provider}
                </span>
              ) : null}
            </div>
            <p className="fighter-profile-summary">{profile.summary}</p>
            {profile.careerHighlights?.length ? (
              <section
                className="fighter-career-highlights"
                aria-labelledby="fighter-career-title"
              >
                <header>
                  <span>검증된 커리어 핵심</span>
                  <h3 id="fighter-career-title">왜 유명한 선수인가</h3>
                </header>
                <div>
                  {profile.careerHighlights.map((highlight) => (
                    <article key={highlight.title}>
                      <strong>{highlight.title}</strong>
                      <p>{highlight.detail}</p>
                      <a
                        href={highlight.sourceUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {highlight.sourceLabel}에서 확인 ↗
                      </a>
                    </article>
                  ))}
                </div>
              </section>
            ) : null}
            {profile.nextFight ? (
              <section className="fighter-next-fight">
                <span className="fighter-last-label">다음 경기</span>
                <div className="fighter-next-row">
                  <span>
                    <b>{profile.nextFight.opponentKo}</b>
                    <small lang="en">{profile.nextFight.opponent}</small>
                  </span>
                  <span>
                    <b>{profile.nextFight.event}</b>
                    <small>
                      {profile.nextFight.dateKst} KST ·{" "}
                      {profile.nextFight.timing}
                    </small>
                  </span>
                </div>
                <a
                  href={profile.nextFight.sourceUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  {profile.nextFight.status} ↗
                </a>
              </section>
            ) : null}
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
            </dl>
          </>
        ) : (
          <div className="fighter-profile-pending">
            <div className="fighter-profile-badges">
              <span>{fighter.ranking ?? `${fighter.weight} 선수`}</span>
              <span>{fighter.weight}</span>
              {fighter.record ? <span>전적 {fighter.record}</span> : null}
              <span>UFC 공식 랭킹</span>
            </div>
            <p className="fighter-ranking-summary">
              {fighter.summary ??
                "공개된 UFC 공식 랭킹을 기준으로 제공하는 선수 정보입니다."}
            </p>
            <dl className="fighter-profile-stats fighter-ranking-stats">
              <div>
                <dt>체급</dt>
                <dd>{fighter.weight}</dd>
              </div>
              <div>
                <dt>공식 순위</dt>
                <dd>{fighter.ranking ?? "UFC 공식 랭킹"}</dd>
              </div>
              <div>
                <dt>정보 기준</dt>
                <dd>UFC 공식 랭킹</dd>
              </div>
            </dl>
            {fighter.simple ? (
              <p className="fighter-ranking-summary">
                Fight Matrix 공개 순위에 표시된 기본 정보입니다.
              </p>
            ) : null}
            {worldRanking && !fighter.simple ? (
              <div className="fighter-pending-ranking">
                <b>비공식 세계 #{worldRanking.rank}</b>
                <span>
                  {worldRanking.provider} · {worldRanking.asOf} 발표
                </span>
              </div>
            ) : null}
            {!fighter.summary && !fighter.simple ? (
              <p>
                아직 공식 전적과 랭킹을 검수 중입니다. 확인되지 않은 정보는
                추정해서 표시하지 않습니다.
              </p>
            ) : null}
          </div>
        )}

        <div className="fighter-external-links">
          {worldRanking && !fighter.simple ? (
            <a
              href={worldRanking.sourceUrl}
              target="_blank"
              rel="noreferrer"
            >
              {worldRanking.provider} 비공식 세계 순위 ·{" "}
              {worldRanking.asOf} ↗
            </a>
          ) : null}
          {fighter.simple && fighter.sourceUrl ? (
            <a href={fighter.sourceUrl} target="_blank" rel="noreferrer">
              {fighter.sourceLabel ?? "Fight Matrix 비공식 순위"} 보기 →
            </a>
          ) : null}
          <a
            href={officialYoutubeSearch(fighter.name)}
            target="_blank"
            rel="noreferrer"
          >
            UFC 공식 유튜브 영상 찾기 ↗
          </a>
        </div>
        <GuestCommentThread
          targetId={`fighter:${fighter.name}`}
          title={`${fighter.koName} 선수 이야기`}
        />
      </section>
    </div>
  );
}
