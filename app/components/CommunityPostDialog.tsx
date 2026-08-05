"use client";
// 커뮤니티 게시글의 본문과 익명 댓글을 모달로 보여 준다.

import { useEffect, useState } from "react";
import { authHeaders, isAdmin, SUPABASE_URL } from "../lib/guest-auth";
import { CommunityReportButton } from "./CommunityReportButton";
import { GuestCommentThread } from "./GuestCommentThread";

export function CommunityPostDialog({
  post,
  onClose,
  onDeleted,
}: {
  post: {
    id: number;
    nickname: string;
    title: string;
    body: string;
    isAdmin: boolean;
    createdAt: string;
    boardLabel: string;
  };
  onClose: () => void;
  onDeleted?: () => void;
}) {
  const [admin, setAdmin] = useState(false);
  const [message, setMessage] = useState("");

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

  useEffect(() => {
    const syncAdmin = () => setAdmin(isAdmin());
    syncAdmin();
    window.addEventListener("fko-auth-change", syncAdmin);
    return () => window.removeEventListener("fko-auth-change", syncAdmin);
  }, []);

  async function deletePost() {
    if (!window.confirm("이 게시글과 댓글을 삭제할까요?")) return;
    setMessage("삭제 중입니다.");
    const response = await fetch(`${SUPABASE_URL}/rest/v1/rpc/delete_community_post`, {
      method: "POST",
      headers: { ...authHeaders(), "Content-Type": "application/json" },
      body: JSON.stringify({ p_post_id: post.id }),
    });
    if (!response.ok) {
      setMessage("게시글을 삭제하지 못했습니다.");
      return;
    }
    onDeleted?.();
    onClose();
  }

  return (
    <div
      className="community-post-dialog-backdrop"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section className="community-post-dialog" role="dialog" aria-modal="true" aria-labelledby="community-post-title">
        <button type="button" className="community-post-dialog-close" onClick={onClose} aria-label="게시글 닫기" autoFocus>
          닫기 ×
        </button>
        <header>
          <span className="community-post-board">{post.boardLabel}</span>
          <h2 id="community-post-title">{post.title}</h2>
          <span><strong className={post.isAdmin ? "community-admin-nickname" : undefined}>{post.isAdmin ? "[관리자] " : ""}{post.nickname}</strong> · {new Date(post.createdAt).toLocaleString("ko-KR")}</span>
        </header>
        <div className="community-post-actions">
          <CommunityReportButton targetType="post" targetId={String(post.id)} />
          {admin ? <button type="button" className="community-delete-button" onClick={deletePost}>게시글 삭제</button> : null}
        </div>
        {message ? <p className="community-admin-message">{message}</p> : null}
        <p className="community-post-body">{post.body}</p>
        <GuestCommentThread targetId={`community-post:${post.id}`} title="댓글" />
      </section>
    </div>
  );
}
