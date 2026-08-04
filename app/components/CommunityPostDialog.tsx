"use client";
// 커뮤니티 게시글의 본문과 익명 댓글을 모달로 보여 준다.

import { useEffect } from "react";
import { GuestCommentThread } from "./GuestCommentThread";

export function CommunityPostDialog({
  post,
  onClose,
}: {
  post: {
    id: number;
    nickname: string;
    title: string;
    body: string;
    createdAt: string;
    boardLabel: string;
  };
  onClose: () => void;
}) {
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
          <span>{post.nickname} · {new Date(post.createdAt).toLocaleString("ko-KR")}</span>
        </header>
        <p className="community-post-body">{post.body}</p>
        <GuestCommentThread targetId={`community-post:${post.id}`} title="댓글" />
      </section>
    </div>
  );
}
