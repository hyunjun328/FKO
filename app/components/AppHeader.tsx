"use client";
// 모든 화면에서 같은 위치와 순서로 제공하는 공통 상단 내비게이션
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SCHEDULE_CHECKED_AT } from "../data/schedule-status";
import { AccountPanel } from "./AccountPanel";

const SCHEDULE_CHECK_FORMATTER = new Intl.DateTimeFormat("ko-KR", {
  timeZone: "Asia/Seoul",
  year: "numeric",
  month: "numeric",
  day: "numeric",
});

export function AppHeader() {
  const pathname = usePathname();
  const navigationItems = [
    { href: "/", label: "UFC 일정" },
    { href: "/rankings", label: "선수 랭킹" },
    { href: "/p4p", label: "P4P" },
    { href: "/korean-fighters", label: "코리안 파이터" },
    { href: "/community", label: "커뮤니티" },
    { href: "/archive", label: "UFC 아카이브" },
  ];

  return (
    <header className="app-topbar">
      <div>
        <Link className="brand" href="/" aria-label="FKO 일정 홈으로">
          <span className="brand-mark">FKO</span>
          <span className="brand-copy"><strong>FKO</strong><small>Fight Korea</small></span>
        </Link>
        <nav className="app-topbar-actions" aria-label="주요 메뉴">
          {navigationItems.map((item) => (
            <Link
              href={item.href}
              key={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
          <AccountPanel />
        </nav>
        <span className="app-update-state">
          <i aria-hidden="true" />
          일정 자동 확인 · {SCHEDULE_CHECK_FORMATTER.format(new Date(SCHEDULE_CHECKED_AT))}
        </span>
      </div>
    </header>
  );
}
