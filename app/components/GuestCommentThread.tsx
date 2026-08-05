"use client";
// 특정 대회나 선수에 대한 익명 게스트 댓글을 조회하고 작성하는 화면을 제공한다.

import { FormEvent, useEffect, useState } from "react";
import {
  authHeaders,
  displayNickname,
  isAdmin,
  publicAuthHeaders,
  SUPABASE_URL,
} from "../lib/guest-auth";
import { CommunityReportButton } from "./CommunityReportButton";
import { validateCommunityContent } from "../lib/community-moderation";
import {
  communitySubmissionWaitFromStorage,
  formatCommunityWait,
  recordCommunitySubmission,
} from "../lib/community-rate-limit";

type GuestComment = {
  id: number;
  nickname: string;
  body: string;
  is_admin: boolean;
  created_at: string;
};

async function responseError(response: Response) {
  try {
    const payload = (await response.json()) as {
      message?: string;
      details?: string;
      hint?: string;
    };
    return payload.message ?? payload.details ?? payload.hint ?? `HTTP ${response.status}`;
  } catch {
    return `HTTP ${response.status}`;
  }
}

function hasExpiredToken(message: string) {
  return /(?:jwt|token).*expired|expired.*(?:jwt|token)/i.test(message);
}

export function GuestCommentThread({
  targetId,
  title,
}: {
  targetId: string;
  title: string;
}) {
  const [comments, setComments] = useState<GuestComment[]>([]);
  const [body, setBody] = useState("");
  const [message, setMessage] = useState("댓글을 불러오는 중입니다.");
  const [admin, setAdmin] = useState(false);

  async function loadComments() {
    const target = encodeURIComponent(`eq.${targetId}`);
    const url =
      `${SUPABASE_URL}/rest/v1/community_comment_feed?select=id,nickname,body,is_admin,created_at&target_id=${target}&order=created_at.desc&limit=30`;
    let response = await fetch(url, { headers: authHeaders() });
    if (!response.ok) {
      const error = await responseError(response);
      if (hasExpiredToken(error)) {
        response = await fetch(url, { headers: publicAuthHeaders() });
      }
    }
    if (!response.ok) {
      throw new Error("댓글을 불러오지 못했습니다. 잠시 후 다시 시도해 주세요.");
    }
    const nextComments = (await response.json()) as GuestComment[];
    setComments(nextComments);
    setMessage(nextComments.length ? "" : "아직 반응이 없습니다. 첫 댓글을 남겨 보세요.");
  }

  useEffect(() => {
    loadComments().catch((error: Error) => setMessage(error.message));
  }, [targetId]);

  useEffect(() => {
    const syncAdmin = () => setAdmin(isAdmin());
    syncAdmin();
    window.addEventListener("fko-auth-change", syncAdmin);
    return () => window.removeEventListener("fko-auth-change", syncAdmin);
  }, []);

  async function deleteComment(commentId: number) {
    if (!window.confirm("댓글을 삭제할까요?")) return;
    const response = await fetch(`${SUPABASE_URL}/rest/v1/rpc/delete_community_comment`, {
      method: "POST",
      headers: { ...authHeaders(), "Content-Type": "application/json" },
      body: JSON.stringify({ p_comment_id: commentId }),
    });
    if (!response.ok) {
      setMessage("댓글을 삭제하지 못했습니다.");
      return;
    }
    await loadComments();
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const moderation = validateCommunityContent(body);
    if (!moderation.ok) {
      setMessage(moderation.message);
      return;
    }
    const waitMs = communitySubmissionWaitFromStorage("comment");
    if (waitMs) {
      setMessage(formatCommunityWait(waitMs));
      return;
    }
    setMessage("등록 중입니다.");
    try {
      const url = `${SUPABASE_URL}/rest/v1/rpc/create_guest_comment`;
      const request = (headers: HeadersInit) => fetch(url, {
        method: "POST",
        headers: { ...headers, "Content-Type": "application/json" },
        body: JSON.stringify({
          p_target_id: targetId,
          p_nickname: displayNickname(),
          p_body: body.trim(),
        }),
      });
      let response = await request(authHeaders());
      if (!response.ok) {
        const error = await responseError(response);
        if (hasExpiredToken(error)) {
          response = await request(publicAuthHeaders());
        }
      }
      if (!response.ok) {
        setMessage("댓글을 저장하지 못했습니다. 잠시 후 다시 시도해 주세요.");
        return;
      }
      setBody("");
      recordCommunitySubmission("comment");
      await loadComments();
      setMessage("댓글이 저장되었습니다.");
    } catch {
      setMessage("댓글 저장 중 네트워크 오류가 발생했습니다. 연결을 확인한 뒤 다시 시도해 주세요.");
    }
  }

  return (
    <section className="guest-comment-thread" aria-label={`${title} 댓글`}>
      <header>
        <span>GUEST COMMENTS</span>
        <h2>{title}</h2>
        <p>로그인 없이 남길 수 있는 익명 반응입니다.</p>
      </header>
      <form onSubmit={submit}>
        <textarea value={body} onChange={(event) => setBody(event.target.value)} placeholder="반응을 남겨 주세요." minLength={2} maxLength={1000} required />
        <button type="submit">댓글 등록</button>
      </form>
      <div className="guest-comment-list" aria-live="polite">
        {comments.map((comment) => (
          <article key={comment.id}>
            <strong className={comment.is_admin ? "community-admin-nickname" : undefined}>{comment.is_admin ? "[관리자] " : ""}{comment.nickname}</strong>
            <time dateTime={comment.created_at}>{new Date(comment.created_at).toLocaleString("ko-KR")}</time>
            <p>{comment.body}</p>
            <div className="guest-comment-actions">
              <CommunityReportButton targetType="comment" targetId={String(comment.id)} />
              {admin ? <button type="button" className="community-delete-button" onClick={() => deleteComment(comment.id)}>댓글 삭제</button> : null}
            </div>
          </article>
        ))}
        {message ? <p className="guest-comment-message">{message}</p> : null}
      </div>
    </section>
  );
}
