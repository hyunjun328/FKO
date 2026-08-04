"use client";
// 커뮤니티 게시글과 댓글의 신고 접수를 공통으로 처리한다.

import { useState } from "react";
import { authHeaders, getAuthSession, SUPABASE_URL } from "../lib/guest-auth";

export function CommunityReportButton({
  targetType,
  targetId,
}: {
  targetType: "post" | "comment";
  targetId: string;
}) {
  const [message, setMessage] = useState("");

  async function report() {
    if (!getAuthSession()) {
      setMessage("신고하려면 로그인해야 합니다.");
      return;
    }
    setMessage("접수 중입니다.");
    const response = await fetch(`${SUPABASE_URL}/rest/v1/rpc/create_community_report`, {
      method: "POST",
      headers: { ...authHeaders(), "Content-Type": "application/json" },
      body: JSON.stringify({ p_target_type: targetType, p_target_id: targetId }),
    });
    setMessage(response.ok ? "신고를 접수했습니다." : "신고를 접수하지 못했습니다.");
  }

  return (
    <span className="community-report-control">
      <button type="button" onClick={report}>신고</button>
      {message ? <small>{message}</small> : null}
    </span>
  );
}
