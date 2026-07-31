"use client";
// 모든 화면에서 공통 메뉴와 사이트 상태를 제공하는 상단 내비게이션입니다.

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SCHEDULE_CHECKED_AT } from "../data/schedule-status";
import { AccountPanel } from "./AccountPanel";

const SCHEDULE_CHECK_FORMATTER = new Intl.DateTimeFormat("ko-KR", {
  timeZone: "Asia/Seoul",
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
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
    { href: "/results", label: "대회 결과" },
  ];

  return (
    <>
      <Link className="site-brand" href="/" aria-label="FKO 일정 처음으로">
        FKO
      </Link>
      <AccountPanel className="site-account-panel" />
      <header className="app-topbar">
        <div>
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
          </nav>
          <span className="app-update-state">
            <i aria-hidden="true" />
            일정 자동 확인 · {SCHEDULE_CHECK_FORMATTER.format(new Date(SCHEDULE_CHECKED_AT))}
          </span>
        </div>
      </header>
    </>
  );
}
