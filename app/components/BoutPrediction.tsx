"use client";
// 메인카드 대진의 익명 승부예측을 집계하고 브라우저별 선택을 저장한다.

import { useEffect, useState } from "react";
import { authHeaders, getAuthSession, SUPABASE_URL } from "../lib/guest-auth";
import { isPredictionClosed } from "../lib/prediction-close";
const GUEST_ID_KEY = "fko-prediction-guest-id";

type PredictionRow = {
  pick: string;
  votes: number;
};

function getGuestId() {
  const saved = window.localStorage.getItem(GUEST_ID_KEY);
  if (saved) return saved;
  const guestId = crypto.randomUUID();
  window.localStorage.setItem(GUEST_ID_KEY, guestId);
  return guestId;
}

export function BoutPrediction({
  targetId,
  left,
  leftKo,
  right,
  rightKo,
  closesAt,
}: {
  targetId: string;
  left: string;
  leftKo: string;
  right: string;
  rightKo: string;
  closesAt: string;
}) {
  const [votes, setVotes] = useState<Record<string, number>>({});
  const [guestId, setGuestId] = useState("");
  const [selectedPick, setSelectedPick] = useState("");
  const [message, setMessage] = useState("");
  const [now, setNow] = useState(() => Date.now());
  const closed = isPredictionClosed(closesAt, now);

  async function loadPredictions() {
    const response = await fetch(
      `${SUPABASE_URL}/rest/v1/community_prediction_summary?select=pick,votes&target_id=eq.${encodeURIComponent(targetId)}`,
      { headers: authHeaders() },
    );
    if (!response.ok) throw new Error("예측을 불러오지 못했습니다.");
    const rows = (await response.json()) as PredictionRow[];
    setVotes(Object.fromEntries(rows.map((row) => [row.pick, row.votes])));
  }

  useEffect(() => {
    const currentGuestId = getGuestId();
    setGuestId(currentGuestId);
    setSelectedPick(window.localStorage.getItem(`fko-prediction:${targetId}`) ?? "");
    loadPredictions().catch((error: Error) => setMessage(error.message));
  }, [targetId]);

  useEffect(() => {
    const timer = window.setInterval(() => setNow(Date.now()), 30_000);
    return () => window.clearInterval(timer);
  }, []);

  async function choose(pick: string) {
    if (closed) {
      setMessage("언더카드 시작으로 투표가 마감됐습니다.");
      return;
    }
    if (!guestId) return;
    setMessage("반영 중입니다.");
    const currentGuestId = getAuthSession()?.user.id ?? guestId;
    const response = await fetch(`${SUPABASE_URL}/rest/v1/rpc/upsert_guest_prediction`, {
      method: "POST",
      headers: { ...authHeaders(), "Content-Type": "application/json" },
      body: JSON.stringify({ p_target_id: targetId, p_pick: pick, p_guest_id: currentGuestId }),
    });
    if (!response.ok) {
      setMessage("예측을 반영하지 못했습니다.");
      return;
    }
    window.localStorage.setItem(`fko-prediction:${targetId}`, pick);
    setSelectedPick(pick);
    setMessage("");
    await loadPredictions();
  }

  const leftVotes = votes[left] ?? 0;
  const rightVotes = votes[right] ?? 0;
  const totalVotes = leftVotes + rightVotes;
  const percentage = (count: number) => totalVotes ? Math.round((count / totalVotes) * 100) : 50;

  return (
    <section className="bout-prediction" aria-label={`${leftKo} 대 ${rightKo} 승부예측`}>
      <header><span>승부예측</span><small>{closed ? "투표 마감" : `${totalVotes}명 참여`}</small></header>
      <div>
        <button type="button" data-selected={selectedPick === left} onClick={() => choose(left)} disabled={closed}>
          <strong>{leftKo}</strong><b>{percentage(leftVotes)}%</b>
        </button>
        <button type="button" data-selected={selectedPick === right} onClick={() => choose(right)} disabled={closed}>
          <strong>{rightKo}</strong><b>{percentage(rightVotes)}%</b>
        </button>
      </div>
      <p>{closed ? "언더카드 시작 시각에 투표가 마감됐습니다." : "언더카드 시작 전까지 이 브라우저에서 선택을 다시 바꿀 수 있습니다."}</p>
      {message ? <small className="bout-prediction-message">{message}</small> : null}
    </section>
  );
}
