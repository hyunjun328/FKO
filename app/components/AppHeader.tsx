// 모든 화면에서 같은 위치와 순서로 제공하는 공통 상단 내비게이션
import Link from "next/link";
import { AccountPanel } from "./AccountPanel";

export function AppHeader() {
  return (
    <header className="app-topbar">
      <div>
        <Link className="brand" href="/" aria-label="FKO 일정 홈으로">
          <span className="brand-mark">FKO</span>
          <span className="brand-copy"><strong>FKO</strong><small>Fight Korea</small></span>
        </Link>
        <nav className="app-topbar-actions" aria-label="주요 메뉴">
          <Link href="/">UFC 일정</Link>
          <Link href="/rankings">선수 랭킹</Link>
          <Link href="/p4p">P4P</Link>
          <Link href="/korean-fighters">코리안 파이터</Link>
          <Link href="/community">커뮤니티</Link>
          <Link href="/archive">UFC 아카이브</Link>
          <AccountPanel />
        </nav>
        <span className="app-update-state"><i aria-hidden="true" />일정 확인 완료 · 2026. 7. 29.</span>
      </div>
    </header>
  );
}
