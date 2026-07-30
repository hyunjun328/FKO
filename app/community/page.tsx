"use client";
// Supabase에 저장된 게스트 게시글을 읽고 작성하는 커뮤니티 화면을 제공한다.

import { FormEvent, useEffect, useState } from "react";

const SUPABASE_URL = "https://jnjhtoqmpnxrtgywcnjy.supabase.co";
const SUPABASE_KEY = "sb_publishable_b2_cjV_CWjFG-oKAtylebg_yb3s8HvE";

type CommunityPost = {
  id: number;
  nickname: string;
  title: string;
  body: string;
  created_at: string;
};

const headers = {
  apikey: SUPABASE_KEY,
  Authorization: `Bearer ${SUPABASE_KEY}`,
};

export default function CommunityPage() {
  const [posts, setPosts] = useState<CommunityPost[]>([]);
  const [nickname, setNickname] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("게시글을 불러오는 중입니다.");

  async function loadPosts() {
    const response = await fetch(
      `${SUPABASE_URL}/rest/v1/community_post_feed?select=id,nickname,title,body,created_at&order=created_at.desc&limit=40`,
      { headers },
    );
    if (!response.ok) throw new Error("게시글을 불러오지 못했습니다.");
    const nextPosts = (await response.json()) as CommunityPost[];
    setPosts(nextPosts);
    setMessage(nextPosts.length ? "" : "첫 글을 남겨 보세요.");
  }

  useEffect(() => {
    loadPosts().catch((error: Error) => setMessage(error.message));
  }, []);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("등록 중입니다.");
    const response = await fetch(`${SUPABASE_URL}/rest/v1/rpc/create_guest_post`, {
      method: "POST",
      headers: { ...headers, "Content-Type": "application/json" },
      body: JSON.stringify({ p_nickname: nickname, p_title: title, p_body: body, p_password: password }),
    });
    if (!response.ok) {
      setMessage("등록하지 못했습니다. 입력 내용을 확인해 주세요.");
      return;
    }
    setTitle("");
    setBody("");
    setPassword("");
    await loadPosts();
  }

  return (
    <main className="site-shell community-page">
      <section className="community-hero">
        <span>FKO COMMUNITY</span>
        <h1>격투기 이야기.</h1>
        <p>로그인 없이 닉네임과 비밀번호만으로 글을 남길 수 있습니다.</p>
      </section>
      <section className="community-compose">
        <h2>글쓰기.</h2>
        <form onSubmit={submit}>
          <input value={nickname} onChange={(event) => setNickname(event.target.value)} placeholder="닉네임" minLength={2} maxLength={20} required />
          <input value={password} onChange={(event) => setPassword(event.target.value)} placeholder="수정·삭제용 비밀번호 6자 이상" type="password" minLength={6} required />
          <input value={title} onChange={(event) => setTitle(event.target.value)} placeholder="제목" minLength={2} maxLength={100} required />
          <textarea value={body} onChange={(event) => setBody(event.target.value)} placeholder="내용" minLength={2} maxLength={3000} required />
          <button type="submit">게시글 등록</button>
        </form>
      </section>
      <section className="community-list" aria-live="polite">
        <h2>최신 글.</h2>
        {posts.map((post) => (
          <article key={post.id}>
            <header>
              <strong>{post.title}</strong>
              <span>{post.nickname} · {new Date(post.created_at).toLocaleString("ko-KR")}</span>
            </header>
            <p>{post.body}</p>
          </article>
        ))}
        {message ? <p className="community-message">{message}</p> : null}
      </section>
    </main>
  );
}
