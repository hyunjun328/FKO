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
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [username, setUsername] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [loggedInName, setLoggedInName] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    setLoggedInName(getAuthSession()?.user.user_metadata?.username ?? "");
  }, []);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const id = username.trim();
    if (!/^[a-zA-Z0-9_]{3,20}$/.test(id)) {
      setMessage("아이디는 영문, 숫자, 밑줄 3~20자로 입력해 주세요.");
      return;
    }
    if (mode === "signup" && (nickname.trim().length < 2 || nickname.trim().length > 20)) {
      setMessage("닉네임은 2~20자로 입력해 주세요.");
      return;
    }
    if (password.length < 6) {
      setMessage("비밀번호는 6자 이상이어야 합니다.");
      return;
    }
    setMessage("처리 중입니다.");
    const endpoint = mode === "login" ? "/auth/v1/token?grant_type=password" : "/auth/v1/signup";
    const body = mode === "login"
      ? { email: idToInternalEmail(id), password }
      : { email: idToInternalEmail(id), password, data: { username: nickname.trim() } };
    const response = await fetch(`${SUPABASE_URL}${endpoint}`, {
      method: "POST",
      headers: { apikey: SUPABASE_KEY, "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (!response.ok) {
      setMessage(mode === "login" ? "아이디 또는 비밀번호가 맞지 않습니다." : "가입하지 못했습니다. 이미 사용 중인 아이디인지 확인해 주세요.");
      return;
    }
    const result = await response.json();
    if (!result.access_token || !result.user) {
      setMessage("Supabase에서 Confirm email을 끈 뒤 다시 가입해 주세요.");
      return;
    }
    saveAuthSession({ access_token: result.access_token, user: result.user });
    setLoggedInName(result.user.user_metadata?.username ?? nickname.trim());
    setPassword("");
    setMessage("");
  }

  if (loggedInName) {
    return <main className="site-shell account-page"><section><span>FKO ACCOUNT</span><h1>{loggedInName}님 로그인됨.</h1><p>이 닉네임으로 글, 댓글, 투표에 참여합니다.</p><button type="button" onClick={() => { clearAuthSession(); setLoggedInName(""); }}>로그아웃</button><Link href="/">일정 홈으로</Link></section></main>;
  }

  return <main className="site-shell account-page"><section><span>FKO ACCOUNT</span><h1>{mode === "login" ? "로그인." : "회원가입."}</h1><p>이메일 인증 없이 아이디, 비밀번호, 닉네임만 사용합니다.</p><div className="account-tabs"><button type="button" data-active={mode === "login"} onClick={() => setMode("login")}>로그인</button><button type="button" data-active={mode === "signup"} onClick={() => setMode("signup")}>회원가입</button></div><form onSubmit={submit}><input value={username} onChange={(event) => setUsername(event.target.value)} placeholder="아이디" autoComplete="username" required />{mode === "signup" ? <input value={nickname} onChange={(event) => setNickname(event.target.value)} placeholder="고정 닉네임" minLength={2} maxLength={20} required /> : null}<input value={password} onChange={(event) => setPassword(event.target.value)} type="password" placeholder="비밀번호 6자 이상" autoComplete={mode === "login" ? "current-password" : "new-password"} required /><button type="submit">{mode === "login" ? "로그인" : "회원가입"}</button></form>{message ? <p className="account-message">{message}</p> : null}<Link href="/">일정 홈으로</Link></section></main>;
}
