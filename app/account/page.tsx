"use client";
// 아이디·비밀번호 로그인과 고정 닉네임 회원가입을 제공한다.

import { FormEvent, useEffect, useState } from "react";
import Link from "next/link";
import {
  SUPABASE_KEY,
  SUPABASE_URL,
  clearAuthSession,
  getAuthSession,
  idToInternalEmail,
  saveAuthSession,
} from "../lib/guest-auth";

export default function AccountPage() {
  const [mode, setMode] = useState<"login" | "signup" | "rename">("login");
  const [username, setUsername] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [loggedInName, setLoggedInName] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const savedNickname = getAuthSession()?.user.user_metadata?.username ?? "";
    setLoggedInName(savedNickname);
    setNickname(savedNickname);
  }, []);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const id = username.trim();
    if (!/^[a-zA-Z0-9_]{3,20}$/.test(id)) {
      setMessage("아이디는 영문, 숫자, 밑줄 3~20자로 입력해 주세요.");
      return;
    }
    if ((mode === "signup" || mode === "rename") && (nickname.trim().length < 2 || nickname.trim().length > 20)) {
      setMessage("닉네임은 2~20자로 입력해 주세요.");
      return;
    }
    if (password.length < 6) {
      setMessage("비밀번호는 6자 이상이어야 합니다.");
      return;
    }
    setMessage("처리 중입니다.");
    const endpoint = mode === "signup" ? "/auth/v1/signup" : "/auth/v1/token?grant_type=password";
    const body = mode === "signup"
      ? { email: idToInternalEmail(id), password, data: { username: nickname.trim() } }
      : { email: idToInternalEmail(id), password };
    const response = await fetch(`${SUPABASE_URL}${endpoint}`, {
      method: "POST",
      headers: { apikey: SUPABASE_KEY, "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (!response.ok) {
      setMessage(mode === "signup" ? "가입하지 못했습니다. 이미 사용 중인 아이디인지 확인해 주세요." : "아이디 또는 비밀번호가 맞지 않습니다.");
      return;
    }
    const result = await response.json();
    if (!result.access_token || !result.user) {
      setMessage("Supabase에서 Confirm email을 끈 뒤 다시 가입해 주세요.");
      return;
    }
    let session: NonNullable<ReturnType<typeof getAuthSession>> = {
      access_token: result.access_token,
      refresh_token: result.refresh_token,
      user: result.user,
    };
    if (mode === "rename") {
      const updatedSession = await saveNickname(session, nickname.trim());
      if (!updatedSession) return;
      session = updatedSession;
    }
    saveAuthSession(session);
    setLoggedInName(session.user.user_metadata?.username ?? nickname.trim());
    setPassword("");
    setMessage(mode === "rename" ? "닉네임을 수정했습니다." : "");
  }

  async function saveNickname(
    session: NonNullable<ReturnType<typeof getAuthSession>>,
    nextNickname: string,
  ) {
    const response = await fetch(`${SUPABASE_URL}/auth/v1/user`, {
      method: "PUT",
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${session.access_token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: { username: nextNickname } }),
    });
    if (!response.ok) {
      setMessage("닉네임을 수정하지 못했습니다. 잠시 후 다시 시도해 주세요.");
      return null;
    }

    const user = await response.json();
    let nextSession = { ...session, user };
    if (session.refresh_token) {
      const tokenResponse = await fetch(
        `${SUPABASE_URL}/auth/v1/token?grant_type=refresh_token`,
        {
          method: "POST",
          headers: { apikey: SUPABASE_KEY, "Content-Type": "application/json" },
          body: JSON.stringify({ refresh_token: session.refresh_token }),
        },
      );
      if (tokenResponse.ok) {
        const refreshed = await tokenResponse.json();
        if (refreshed.access_token && refreshed.user) {
          nextSession = {
            access_token: refreshed.access_token,
            refresh_token: refreshed.refresh_token,
            user: refreshed.user,
          };
        }
      }
    }
    return nextSession;
  }

  async function updateNickname(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextNickname = nickname.trim();
    const session = getAuthSession();
    if (!session) {
      setMessage("로그인 상태를 다시 확인해 주세요.");
      return;
    }
    if (nextNickname.length < 2 || nextNickname.length > 20) {
      setMessage("닉네임은 2~20자로 입력해 주세요.");
      return;
    }

    setMessage("닉네임을 수정하고 있습니다.");
    const updatedSession = await saveNickname(session, nextNickname);
    if (!updatedSession) return;
    saveAuthSession(updatedSession);
    setLoggedInName(updatedSession.user.user_metadata?.username ?? nextNickname);
    setNickname(updatedSession.user.user_metadata?.username ?? nextNickname);
    setMessage(session.refresh_token ? "닉네임을 수정했습니다." : "닉네임을 수정했습니다. 글을 쓰기 전 한 번 다시 로그인해 주세요.");
  }

  if (loggedInName) {
    return <main className="site-shell account-page"><section><span>FKO ACCOUNT</span><h1>{loggedInName}님 로그인됨.</h1><p>이 닉네임으로 글, 댓글, 투표에 참여합니다.</p><form onSubmit={updateNickname}><label htmlFor="nickname-edit">닉네임</label><input id="nickname-edit" value={nickname} onChange={(event) => setNickname(event.target.value)} placeholder="고정 닉네임" minLength={2} maxLength={20} autoComplete="nickname" required /><button type="submit">닉네임 수정</button></form>{message ? <p className="account-message">{message}</p> : null}<button type="button" onClick={() => { clearAuthSession(); setLoggedInName(""); setNickname(""); setMessage(""); }}>로그아웃</button><Link href="/">일정 홈으로</Link></section></main>;
  }

  return <main className="site-shell account-page"><section><span>FKO ACCOUNT</span><h1>{mode === "login" ? "로그인." : mode === "signup" ? "회원가입." : "닉네임 수정."}</h1><p>이메일 인증 없이 아이디, 비밀번호, 닉네임만 사용합니다.</p><div className="account-tabs"><button type="button" data-active={mode === "login"} onClick={() => setMode("login")}>로그인</button><button type="button" data-active={mode === "signup"} onClick={() => setMode("signup")}>회원가입</button><button type="button" data-active={mode === "rename"} onClick={() => setMode("rename")}>닉네임 수정</button></div><form onSubmit={submit}>{mode === "signup" || mode === "rename" ? <input value={nickname} onChange={(event) => setNickname(event.target.value)} placeholder="고정 닉네임" minLength={2} maxLength={20} autoComplete="nickname" required /> : null}<input value={username} onChange={(event) => setUsername(event.target.value)} placeholder="아이디" autoComplete="username" required /><input value={password} onChange={(event) => setPassword(event.target.value)} type="password" placeholder="비밀번호 6자 이상" autoComplete={mode === "signup" ? "new-password" : "current-password"} required /><button type="submit">{mode === "login" ? "로그인" : mode === "signup" ? "회원가입" : "닉네임 수정"}</button></form>{message ? <p className="account-message">{message}</p> : null}<Link href="/">일정 홈으로</Link></section></main>;
}
