"use client";
// 신고된 커뮤니티 콘텐츠를 확인하고 삭제하는 관리자 화면이다.

import { useEffect, useState } from "react";
import { authHeaders, isAdmin, SUPABASE_URL } from "../lib/guest-auth";

type CommunityReport = {
  id: number;
  target_type: "post" | "comment";
  target_id: string;
  created_at: string;
  target_nickname: string;
  target_title: string;
  target_body: string;
};

export default function AdminPage() {
  const [reports, setReports] = useState<CommunityReport[]>([]);
  const [message, setMessage] = useState("권한을 확인하는 중입니다.");

  async function loadReports() {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/rpc/get_community_reports`, {
      method: "POST",
      headers: { ...authHeaders(), "Content-Type": "application/json" },
      body: "{}",
    });
    if (!response.ok) {
      setMessage("관리자 권한이 필요합니다.");
      return;
    }
    const nextReports = (await response.json()) as CommunityReport[];
    setReports(nextReports);
    setMessage(nextReports.length ? "" : "처리할 신고가 없습니다.");
  }

  useEffect(() => {
    if (!isAdmin()) {
      setMessage("관리자 권한이 필요합니다.");
      return;
    }
    void loadReports();
  }, []);

  async function deleteTarget(report: CommunityReport) {
    const label = report.target_type === "post" ? "게시글과 댓글" : "댓글";
    if (!window.confirm(`${label}을 삭제할까요?`)) return;
    const endpoint = report.target_type === "post" ? "delete_community_post" : "delete_community_comment";
    const payload = report.target_type === "post"
      ? { p_post_id: Number(report.target_id) }
      : { p_comment_id: Number(report.target_id) };
    const response = await fetch(`${SUPABASE_URL}/rest/v1/rpc/${endpoint}`, {
      method: "POST",
      headers: { ...authHeaders(), "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      setMessage("삭제하지 못했습니다.");
      return;
    }
    await loadReports();
  }

  return (
    <main className="site-shell admin-page">
      <section>
        <span>FKO ADMIN</span>
        <h1>신고 관리</h1>
        <p>신고된 게시글과 댓글을 검토하고 필요할 때 삭제합니다.</p>
        <div className="admin-report-list" aria-live="polite">
          {reports.map((report) => (
            <article key={report.id}>
              <div>
                <strong>{report.target_type === "post" ? "신고된 게시글" : "신고된 댓글"}</strong>
                <span>{report.target_nickname} · {new Date(report.created_at).toLocaleString("ko-KR")}</span>
                <b>{report.target_title}</b>
                <p>{report.target_body}</p>
              </div>
              <button type="button" className="community-delete-button" onClick={() => { void deleteTarget(report); }}>삭제</button>
            </article>
          ))}
          {message ? <p className="community-admin-message">{message}</p> : null}
        </div>
      </section>
    </main>
  );
}
