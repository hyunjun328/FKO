// FKO에 사용된 선수 사진의 저작자와 라이선스 원문을 공개한다.
import type { Metadata } from "next";
import Link from "next/link";
import fighterImages from "../data/fighter-images.json";
import { rankingKoreanName } from "../data/ranking-names";

export const metadata: Metadata = {
  title: "선수 사진 출처 | FKO",
  description: "FKO 선수 사진의 Wikimedia Commons 출처와 라이선스.",
};

export default function PhotoCreditsPage() {
  const FIGHTER_IMAGES = fighterImages as Record<
    string,
    {
      src: string;
      groups: string[];
      sourceUrl: string;
      author: string;
      license: string;
      licenseUrl: string;
      file: string;
      wikidataId: string | null;
    }
  >;
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const credits = Object.entries(FIGHTER_IMAGES).sort(([left], [right]) =>
    left.localeCompare(right),
  );

  return (
    <main className="site-shell photo-credits-page">
      <header className="topbar">
        <Link className="brand" href="/" aria-label="FKO 일정 홈으로">
          <span className="brand-mark">FKO</span>
          <span className="brand-copy">
            <strong>FKO</strong>
            <small>Fight Korea</small>
          </span>
        </Link>
        <div className="topbar-actions">
          <Link className="topbar-link" href="/rankings">
            선수 랭킹
          </Link>
          <Link className="back-home-link" href="/">
            ← UFC 일정
          </Link>
        </div>
      </header>

      <section className="photo-credits-hero">
        <span className="section-kicker">OPEN LICENSE</span>
        <h1>선수 사진 출처</h1>
        <p>
          Wikimedia Commons의 재사용 가능한 사진만 사용합니다. 원본 파일,
          저작자, 라이선스를 선수별로 확인할 수 있습니다.
        </p>
        <p className="photo-rights-note">
          UFC 공식 프로필 사진은 UFC가 재사용을 허가한 자료가 아니므로
          복사하지 않습니다.{" "}
          <a
            href="https://www.ufc.com/news/terms-use"
            target="_blank"
            rel="noreferrer"
          >
            UFC 이용약관 확인 ↗
          </a>
        </p>
        <strong>{credits.length}장 공개</strong>
      </section>

      <section className="photo-credit-grid" aria-label="선수 사진 출처 목록">
        {credits.map(([name, credit]) => {
          const koName = rankingKoreanName(name);
          return (
            <article className="photo-credit-card" key={name}>
              {/* 정적 WebP 원본을 출처 카드에서도 같은 품질로 사용한다. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${basePath}${credit.src}`}
                alt={`${koName === name ? name : koName} 선수`}
                width="180"
                height="180"
                loading="lazy"
                decoding="async"
              />
              <div>
                <h2>{koName}</h2>
                {koName !== name ? <small lang="en">{name}</small> : null}
                <dl>
                  <div>
                    <dt>저작자</dt>
                    <dd>{credit.author}</dd>
                  </div>
                  <div>
                    <dt>라이선스</dt>
                    <dd>
                      <a
                        href={credit.licenseUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {credit.license} ↗
                      </a>
                    </dd>
                  </div>
                </dl>
                <a
                  className="photo-credit-source"
                  href={credit.sourceUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Commons 원본 파일 보기 ↗
                </a>
              </div>
            </article>
          );
        })}
      </section>

      <footer className="footer">
        <div>
          <strong>FKO · Fight Korea</strong>
          <p>
            사진은 원본 비율을 유지해 WebP로 축소했습니다. 각 저작권은 해당
            저작자에게 있습니다.
          </p>
        </div>
        <Link className="footer-home-link" href="/">
          일정 홈으로 →
        </Link>
      </footer>
    </main>
  );
}
