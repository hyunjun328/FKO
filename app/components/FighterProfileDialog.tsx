"use client";
// 선수 카드와 검수된 상세 정보 창을 여러 화면에서 함께 제공한다.

import { useEffect } from "react";
import {
  FIGHTER_PROFILES,
  type KoreanFighter,
} from "../data/fighters";

export type FighterSelection = {
  name: string;
  koName: string;
  weight: string;
};

export function fighterInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();
}

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
  const profile = FIGHTER_PROFILES[fighter.name];

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
        <span className="korean-card-avatar" aria-hidden="true">
          {fighterInitials(fighter.name)}
        </span>
        <span className="korean-card-status">
          <i aria-hidden="true" />
          {status === "active"
            ? profile.verificationSources
              ? `${profile.verificationSources.length}곳 교차 검증`
              : "UFC 현역"
            : fighter.statusLabel}
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
