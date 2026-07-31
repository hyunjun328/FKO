"use client";
// 현재 로그인한 고정닉 또는 회원 페이지 링크를 상단 메뉴에 표시한다.

import Link from "next/link";
import { useEffect, useState } from "react";
import { getAuthSession } from "../lib/guest-auth";

export function AccountPanel({ className = "" }: { className?: string }) {
  const [nickname, setNickname] = useState("");

  useEffect(() => {
    const sync = () => setNickname(getAuthSession()?.user.user_metadata?.username ?? "");
    sync();
    window.addEventListener("fko-auth-change", sync);
    return () => window.removeEventListener("fko-auth-change", sync);
  }, []);

  return <Link className={`account-panel ${className}`.trim()} href="/account">{nickname || "로그인"}</Link>;
}
