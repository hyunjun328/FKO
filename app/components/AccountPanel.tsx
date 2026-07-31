"use client";
// 아이디와 비밀번호만으로 가입·로그인하고 고정 닉네임을 표시한다.

import { FormEvent, useEffect, useState } from "react";
import {
  SUPABASE_KEY,
  SUPABASE_URL,
  clearAuthSession,
  getAuthSession,
  idToInternalEmail,
  saveAuthSession,
} from "../lib/guest-auth";

export function AccountPanel() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [sessionName, setSessionName] = useState("");
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const sync = () => setSessionName(getAuthSession()?.user.user_metadata?.username ?? "");
    sync();
    window.addEventListener("fko-auth-change", sync);
    return () => window.removeEventListener("fko-auth-change", sync);
  }, []);

  async function submit(event: FormEvent<HTMLFormElement>, mode: "login" | "signup") {
    event.preventDefault();
    const trimmed = username.trim();
    if (!/^[a-zA-Z0-9_]{3,20}$/.test(trimmed)) {
      setMessage("아이디는 영문, 숫자, 밑줄 3~20자로 입력해 주세요.");
      return;
    }
    if (password.length < 6) {
      setMessage("비밀번호는 6자 이상이어야 합니다.");
      return;
    }
    setMessage("처리 중입니다.");
    const endpoint = mode === "login" ? "/auth/v1/token?grant_type=password" : "/auth/v1/signup";
    const body = mode === "login"
      ? { email: idToInternalEmail(trimmed), password }
      : { email: idToInternalEmail(trimmed), password, data: { username: trimmed } };
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
      setMessage("Supabase에서 이메일 확인을 끈 뒤 다시 가입해 주세요.");
      return;
    }
    saveAuthSession({ access_token: result.access_token, user: result.user });
    setSessionName(trimmed);
    setPassword("");
    setOpen(false);
    setMessage("");
  }

  if (sessionName) {
    return <span className="account-panel"><b>{sessionName}</b><button type="button" onClick={() => { clearAuthSession(); setSessionName(""); }}>로그아웃</button></span>;
  }

  return <span className="account-panel">{open ? <form onSubmit={(event) => submit(event, "login")}><input value={username} onChange={(event) => setUsername(event.target.value)} placeholder="아이디" /><input value={password} onChange={(event) => setPassword(event.target.value)} type="password" placeholder="비밀번호" /><button type="submit">로그인</button><button type="button" onClick={(event) => submit(event as unknown as FormEvent<HTMLFormElement>, "signup")}>가입</button>{message ? <small>{message}</small> : null}</form> : <button type="button" onClick={() => setOpen(true)}>로그인</button>}</span>;
}
