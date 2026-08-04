// UFC 명예의 전당, 과거 선수 기록, 심판진을 모아 보여주는 아카이브 페이지다.
import type { Metadata } from "next";
import Link from "next/link";
import { ArchiveBrowser } from "../components/ArchiveBrowser";

export const metadata: Metadata = { title: "UFC 아카이브 | FKO", description: "UFC 명예의 전당, 과거 선수 기록, 심판진을 정리한 FKO 아카이브입니다." };

export default function ArchivePage() {
  return <main className="site-shell archive-page"><header className="topbar"><Link className="brand" href="/" aria-label="FKO 일정으로"><span className="brand-mark">FKO</span><span className="brand-copy"><strong>FKO</strong><small>Fight Korea</small></span></Link><div className="topbar-actions"><Link className="topbar-link" href="/rankings">선수 랭킹</Link><Link className="topbar-link" href="/korean-fighters">코리안 파이터</Link><Link className="back-home-link" href="/">UFC 일정</Link></div></header><section className="archive-hero"><span className="section-kicker">FKO UFC ARCHIVE</span><h1>UFC 아카이브</h1><p>명예의 전당, 과거 UFC 선수의 커리어 전적, 그리고 주요 심판진을 한곳에서 확인하세요.</p></section><ArchiveBrowser /><footer className="footer"><div><strong>FKO · Fight Korea</strong><p>선수 전적과 헌액 정보는 연결된 UFC 공개 자료를 기준으로 정리합니다.</p><p>FKO는 UFC와 무관한 비공식 팬 프로젝트입니다.</p></div><span className="footer-links"><Link href="/photo-credits">선수 사진 출처</Link><Link className="footer-home-link" href="/">일정으로</Link></span></footer></main>;
}
