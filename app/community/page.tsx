"use client";
// 체급별 게시글 목록을 먼저 보여 주고 필요할 때만 작성 폼을 연다.

import { FormEvent, useEffect, useMemo, useState } from "react";
import { authHeaders, displayNickname, SUPABASE_URL } from "../lib/guest-auth";
import {
  COMMUNITY_BOARDS,
  communityBoardLabel,
  decodeCommunityTitle,
  encodeCommunityTitle,
  type CommunityBoardId,
  type WritableCommunityBoardId,
} from "../lib/community-board";
import { CommunityPostDialog } from "../components/CommunityPostDialog";
import { validateCommunityContent } from "../lib/community-moderation";
import {
  communitySubmissionWaitFromStorage,
  formatCommunityWait,
  recordCommunitySubmission,
} from "../lib/community-rate-limit";

type CommunityPost = {
  id: number;
  nickname: string;
  title: string;
  body: string;
  created_at: string;
  boardId: WritableCommunityBoardId;
};

type CommunityPostRow = Omit<CommunityPost, "boardId">;

export default function CommunityPage() {
  const [posts, setPosts] = useState<CommunityPost[]>([]);
  const [selectedBoard, setSelectedBoard] = useState<CommunityBoardId>("all");
  const [writeBoard, setWriteBoard] = useState<WritableCommunityBoardId>("free");
  const [composerOpen, setComposerOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState<CommunityPost | null>(null);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [message, setMessage] = useState("게시글을 불러오는 중입니다.");

  async function loadPosts() {
    const response = await fetch(
      `${SUPABASE_URL}/rest/v1/community_post_feed?select=id,nickname,title,body,created_at&order=created_at.desc&limit=80`,
      { headers: authHeaders() },
    );
    if (!response.ok) throw new Error("게시글을 불러오지 못했습니다.");
    const nextPosts = (await response.json()) as CommunityPostRow[];
    setPosts(nextPosts.map((post) => ({
      ...post,
      ...decodeCommunityTitle(post.title),
    })));
    setMessage(nextPosts.length ? "" : "첫 글을 남겨 보세요.");
  }

  useEffect(() => {
    loadPosts().catch((error: Error) => setMessage(error.message));
  }, []);

  const visiblePosts = useMemo(
    () => selectedBoard === "all"
      ? posts
      : posts.filter((post) => post.boardId === selectedBoard),
    [posts, selectedBoard],
  );

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const moderation = validateCommunityContent(title, body);
    if (!moderation.ok) {
      setMessage(moderation.message);
      return;
    }
    const waitMs = communitySubmissionWaitFromStorage("post");
    if (waitMs) {
      setMessage(formatCommunityWait(waitMs));
      return;
    }
    setMessage("등록 중입니다.");
    const response = await fetch(`${SUPABASE_URL}/rest/v1/rpc/create_guest_post`, {
      method: "POST",
      headers: { ...authHeaders(), "Content-Type": "application/json" },
      body: JSON.stringify({
        p_nickname: displayNickname(),
        p_title: encodeCommunityTitle(writeBoard, title),
        p_body: body,
      }),
    });
    if (!response.ok) {
      setMessage("등록하지 못했습니다. 입력 내용을 확인해 주세요.");
      return;
    }
    setTitle("");
    setBody("");
    recordCommunitySubmission("post");
    setComposerOpen(false);
    setSelectedBoard(writeBoard);
    await loadPosts();
  }

  return (
    <main className="site-shell community-page">
      <section className="community-hero">
        <span>FKO COMMUNITY</span>
        <h1>격투기 이야기.</h1>
        <p>체급별로 이야기하고, 닉네임만으로 바로 글을 남길 수 있습니다.</p>
      </section>

      <section className="community-board" aria-labelledby="community-board-title">
        <header className="community-board-head">
          <div>
            <span>COMMUNITY BOARD</span>
            <h2 id="community-board-title">{communityBoardLabel(selectedBoard)} 게시판</h2>
          </div>
          <button
            type="button"
            className="community-write-button"
            onClick={() => setComposerOpen((open) => !open)}
            aria-expanded={composerOpen}
            aria-controls="community-compose"
          >
            {composerOpen ? "닫기" : "글쓰기"}
          </button>
        </header>

        <nav className="community-board-tabs" aria-label="체급별 게시판">
          {COMMUNITY_BOARDS.map((board) => (
            <button
              type="button"
              key={board.id}
              aria-current={selectedBoard === board.id ? "page" : undefined}
              onClick={() => setSelectedBoard(board.id)}
            >
              {board.label}
            </button>
          ))}
        </nav>

        <aside className="community-rules" aria-labelledby="community-rules-title">
          <h2 id="community-rules-title">운영 규칙</h2>
          <ul>
            <li>광고, 외부 링크, 연락처 유도는 금지합니다.</li>
            <li>욕설, 혐오 표현, 반복 도배는 제한합니다.</li>
            <li>게시글은 60초, 댓글은 8초 간격으로 작성할 수 있습니다.</li>
          </ul>
        </aside>

        {composerOpen ? (
          <section className="community-compose" id="community-compose" aria-labelledby="community-compose-title">
            <h2 id="community-compose-title">새 글 작성</h2>
            <form onSubmit={submit}>
              <label>
                게시판
                <select value={writeBoard} onChange={(event) => setWriteBoard(event.target.value as WritableCommunityBoardId)}>
                  {COMMUNITY_BOARDS.filter((board) => board.id !== "all").map((board) => (
                    <option value={board.id} key={board.id}>{board.label}</option>
                  ))}
                </select>
              </label>
              <input value={title} onChange={(event) => setTitle(event.target.value)} placeholder="제목" minLength={2} maxLength={84} required />
              <textarea value={body} onChange={(event) => setBody(event.target.value)} placeholder="내용" minLength={2} maxLength={3000} required />
              <button type="submit">게시글 등록</button>
            </form>
          </section>
        ) : null}

        <section className="community-list" aria-live="polite">
          <div className="community-list-head"><span>게시글 {visiblePosts.length}</span><span>작성자 · 작성일</span></div>
          {visiblePosts.map((post) => (
            <article key={post.id}>
              <button
                type="button"
                className="community-post-trigger"
                onClick={() => setSelectedPost(post)}
                aria-label={`${post.title} 게시글 보기`}
              >
                <header>
                  <span className="community-post-board">{communityBoardLabel(post.boardId)}</span>
                  <strong>{post.title}</strong>
                  <span>{post.nickname} · {new Date(post.created_at).toLocaleString("ko-KR")}</span>
                </header>
                <p>{post.body}</p>
              </button>
            </article>
          ))}
          {!visiblePosts.length && !message ? <p className="community-message">이 게시판의 첫 글을 남겨 보세요.</p> : null}
          {message ? <p className="community-message">{message}</p> : null}
        </section>
      </section>
      {selectedPost ? (
        <CommunityPostDialog
          post={{
            id: selectedPost.id,
            nickname: selectedPost.nickname,
            title: selectedPost.title,
            body: selectedPost.body,
            createdAt: selectedPost.created_at,
            boardLabel: communityBoardLabel(selectedPost.boardId),
          }}
          onClose={() => setSelectedPost(null)}
          onDeleted={() => { void loadPosts(); }}
        />
      ) : null}
    </main>
  );
}
