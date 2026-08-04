// 배포 빌드가 UFC 일정 제품 화면을 서버에서 렌더링하는지 검증하는 테스트
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the UFC schedule product", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  const normalizedHtml = html.replaceAll("<!-- -->", "");
  assert.match(html, /<html lang="ko">/i);
  assert.match(html, /FKO/);
  assert.match(html, /Fight Korea/);
  assert.match(html, /일정 자동 확인/);
  assert.match(html, /aria-current="page">UFC 일정<\/a>/);
  const header = await readFile(new URL("../app/components/AppHeader.tsx", import.meta.url), "utf8");
  assert.match(header, /hour: "2-digit"/);
  assert.doesNotMatch(html, /파이트 캘린더 코리아/);
  assert.match(html, /UFC 일정/);
  assert.match(html, /대진과 선수 정보/);
  assert.match(html, /선수 통합 검색/);
  const favorites = await readFile(new URL("../app/components/FavoriteFighters.tsx", import.meta.url), "utf8");
  assert.match(favorites, /관심 선수/);
  assert.match(html, /placeholder="예\. 이슬람 마카체프, Makhachev"/);
  const homeSearch = await readFile(
    new URL("../app/components/HomeFighterSearch.tsx", import.meta.url),
    "utf8",
  );
  assert.doesNotMatch(homeSearch, /FIGHTER LOOKUP|예정 대회, 최근 경기, 랭킹을 한 번에 확인하세요/);
  assert.doesNotMatch(html, /지금 한국시간/);
  assert.match(html, /메인카드 시작/);
  assert.match(html, /UFC 330/);
  assert.match(html, /30분 전 알림/);
  assert.match(html, /class="event-open-button">대회 상세 보기<\/button>/);
  assert.match(html, /class="event-selector-grid"/);
  assert.match(html, /class="event-selector-card"/);
  assert.match(html, /class="schedule-section calendar-section"/);
  assert.doesNotMatch(html, /class="event-row-timing"/);
  assert.doesNotMatch(html, /class="event-row-card-count"/);
  assert.match(html, /이슬람 마카체프/);
  assert.match(html, /이안 마샤두 개리/);
  assert.doesNotMatch(html, /다음 주요 매치/);
  assert.doesNotMatch(html, /메인카드 시작까지/);
  assert.match(html, /Mateusz Gamrot/);
  assert.match(html, /마테우시 감롯/);
  assert.match(html, /퀼런 살킬드/);
  assert.match(html, /aria-label="마테우시 감롯 선수 정보 보기"/);
  assert.match(html, /코리안 파이터/);
  assert.match(html, /href="\/korean-fighters"/);
  assert.match(html, /선수 랭킹/);
  assert.match(html, /href="\/rankings"/);
  assert.match(html, /class="fighter-face hero-fighter-face"/);
  const calendar = await readFile(new URL("../app/components/FightCalendar.tsx", import.meta.url), "utf8");
  assert.match(calendar, /className="mobile-calendar-agenda"/);
  assert.doesNotMatch(calendar, /className="featured-match-section"/);
  assert.match(calendar, /function EventDialog/);
  assert.match(calendar, /className="event-dialog-backdrop"/);
  assert.match(calendar, /<EventDetail event=\{event\}/);
  assert.doesNotMatch(html, /class="fighter-face bout-fighter-face"/);
  assert.match(html, /src="\/fighters\/nobody\.webp"/);
  assert.doesNotMatch(html, /class="fighter-silhouette"/);
  assert.match(html, /href="\/photo-credits"/);
  assert.match(html, /Made by 정현준/);
  assert.doesNotMatch(normalizedHtml, /현역 6명[^<]*·[^<]*역대 6명/);
  assert.doesNotMatch(html, /korean-fighters-gateway/);
  assert.doesNotMatch(html, /정찬성|김동현/);
  assert.doesNotMatch(html, /aria-label="박준용 상세 정보 보기"/);
  assert.doesNotMatch(html, /The Korean Tyson/);
  assert.match(
    normalizedHtml,
    /메인카드 시작<\/small><strong>\d+월 \d+일[^<]*\d{2}:\d{2}[^<]*KST/,
  );
  const schedule = await readFile(new URL("../app/components/FightCalendar.tsx", import.meta.url), "utf8");
  assert.match(schedule, /function openEvent\(eventId: string\)/);
  assert.match(schedule, /setOpenEventId\(eventId\)/);
  assert.doesNotMatch(schedule, /scrollIntoView/);
  assert.match(schedule, /메인 이벤트 반응/);
  assert.match(schedule, /<BoutPrediction/);
  assert.match(html, /FKO는 UFC와 무관한 비공식 팬 프로젝트입니다/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i);
});

test("server-renders active and former Korean fighters on a separate page", async () => {
  const response = await render("/korean-fighters");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  const normalizedHtml = html.replaceAll("<!-- -->", "");
  assert.match(html, /코리안/);
  assert.match(html, /파이터/);
  assert.match(html, /현역 한국 선수/);
  assert.match(html, /은퇴·전 UFC 선수/);
  assert.match(normalizedHtml, /검수 완료[^<]*·[^<]*10명/);
  assert.match(normalizedHtml, /2개 이상 출처[^<]*·[^<]*6명/);
  assert.match(html, /박준용/);
  assert.match(html, /최두호/);
  assert.match(html, /고석현/);
  assert.match(html, /박현성/);
  assert.match(html, /이정영/);
  assert.match(html, /유주상/);
  assert.match(html, /유수영/);
  assert.match(html, /이창호/);
  assert.match(html, /최동훈/);
  assert.match(html, /이삭/);
  assert.match(html, /정찬성/);
  assert.match(html, /김동현/);
  assert.match(html, /강경호/);
  assert.match(html, /정다운/);
  assert.match(html, /임현규/);
  assert.match(html, /양동이/);
  assert.match(html, /aria-label="박준용 상세 정보 보기"/);
  assert.match(html, /aria-label="정찬성 상세 정보 보기"/);
  assert.match(html, /26전 19승 7패/);
  assert.match(html, /22전 17승 4패 1무/);
  assert.match(html, /25전 17승 8패/);
  assert.match(html, /28전 22승 4패 1무 1무효/);
  assert.match(html, /다음 경기 미정/);
  assert.match(html, /커리어 정보 보기/);
  const doohoCard =
    normalizedHtml.match(
      /<button[^>]*aria-label="최두호 상세 정보 보기"[^>]*>([\s\S]*?)<\/button>/,
    )?.[1] ?? "";
  assert.match(doohoCard, /파트리시우 핏불/);
  assert.match(doohoCard, /UFC 331/);
  assert.match(doohoCard, /2026-09-20 KST/);
  assert.match(doohoCard, /UFC 공식 발표 전/);
  assert.doesNotMatch(doohoCard, /다음 경기 미정/);
  const seokHyeonCard =
    normalizedHtml.match(
      /<button[^>]*aria-label="고석현 상세 정보 보기"[^>]*>([\s\S]*?)<\/button>/,
    )?.[1] ?? "";
  assert.match(seokHyeonCard, /UFC 현역/);
  assert.doesNotMatch(seokHyeonCard, /교차\s*검증/);
  assert.match(seokHyeonCard, /“Technical”/);
  assert.match(seokHyeonCard, /16전 13승 3패/);
  assert.match(seokHyeonCard, /data-result="패"/);
  assert.match(seokHyeonCard, /장폴 레보스노야니/);
  assert.doesNotMatch(seokHyeonCard, /data-result="승"/);
  assert.doesNotMatch(html, /The Korean Tyson/);
  assert.match(html, /href="\/"/);
  assert.match(html, /href="\/rankings"/);
  assert.match(html, /class="fighter-face korean-card-avatar"/);
  assert.match(html, /href="\/photo-credits"/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i);
});

test("moves finished events to the results page while collection is pending", async () => {
  const home = await render();
  const homeHtml = await home.text();
  const results = await render("/results");
  const resultsHtml = await results.text();

  assert.doesNotMatch(homeHtml, /UFC 파이트 나이트 베오그라드/);
  assert.match(resultsHtml, /UFC 파이트 나이트 베오그라드/);
  assert.match(resultsHtml, /공식 결과 수집 중/);
  assert.match(resultsHtml, /공식 결과가 확인되면 승패와 종료 방식을 자동으로 표시합니다/);
});

test("server-renders the official UFC ranking comparison page", async () => {
  const response = await render("/rankings");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  const normalizedHtml = html.replaceAll("<!-- -->", "");
  assert.match(html, /UFC 공식 자료 기준/);
  assert.match(html, /Meta UFC 랭킹/);
  assert.match(html, /미디어 투표 랭킹/);
  assert.match(html, /공식은 15위까지/);
  assert.match(html, /Fight Matrix 세계 랭킹 16~50위/);
  assert.match(html, /총 400명 범위에서 검색합니다/);
  assert.match(html, /Tagir Ulanbekov/);
  assert.match(html, /선수 또는 체급 검색/);
  assert.match(html, /placeholder="예\. 마카체프, Medic, Makhachev"/);
  assert.match(html, />검색<\/button>/);
  assert.match(html, /2026-\d{2}-\d{2}/);
  assert.match(html, /Fight Matrix · \d{4}-\d{2}-\d{2}/);
  assert.match(html, /플라이급/);
  assert.match(html, /밴텀급/);
  assert.match(html, /페더급/);
  assert.match(html, /라이트급/);
  assert.match(html, /웰터급/);
  assert.match(html, /미들급/);
  assert.match(html, /라이트헤비급/);
  assert.match(html, /헤비급/);
  assert.doesNotMatch(html, /여성 스트로급/);
  assert.doesNotMatch(html, /여성 플라이급/);
  assert.doesNotMatch(html, /여성 밴텀급/);
  assert.match(
    normalizedHtml,
    /ranking-champion-row[\s\S]*?조슈아 반[\s\S]*?Joshua Van[\s\S]*?UFC 챔피언/,
  );
  assert.match(html, /aria-label="조슈아 반 챔피언 상세 정보 보기"/);
  assert.doesNotMatch(normalizedHtml, /Islam Makhachev|Kayla Harrison/);
  assert.equal((html.match(/class="ranking-number"/g) ?? []).length, 30);
  assert.equal(
    (html.match(/class="ranking-row ranking-detail-trigger"/g) ?? []).length,
    30,
  );
  assert.match(html, /aria-label="체급 선택"/);
  assert.equal((html.match(/role="tab"/g) ?? []).length, 8);
  assert.match(html, /https:\/\/www\.ufc\.com\/rankings/);
  assert.match(
    html,
    /https:\/\/www\.ufc\.com\/news\/ufc-and-meta-unveil-meta-ufc-rankings/,
  );
  assert.match(html, /href="\/korean-fighters"/);
  assert.match(html, /href="\/p4p"/);
  assert.match(html, /href="\/"/);
  assert.match(html, /class="fighter-face ranking-champion-face"/);
  assert.match(html, /class="fighter-face ranking-fighter-face"/);
  assert.match(html, /href="\/photo-credits"/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i);
});

test("server-renders separate men and women P4P rankings", async () => {
  const response = await render("/p4p");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /P4P 랭킹/);
  assert.match(html, /남성 P4P/);
  assert.match(html, /여성 P4P/);
  assert.match(html, /이슬람 마카체프/);
  assert.match(html, /발렌티나 셰브첸코/);
  assert.match(html, /찰스 올리베이라/);
  assert.match(html, /메이시 바버/);
  assert.equal((html.match(/class="p4p-number"/g) ?? []).length, 30);
  assert.equal(
    (html.match(/class="p4p-row p4p-detail-trigger"/g) ?? []).length,
    20,
  );
  assert.match(html, /href="\/rankings"/);
  assert.match(html, /https:\/\/www\.ufc\.com\/rankings/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i);
});

test("server-renders reusable fighter photo credits", async () => {
  const response = await render("/photo-credits");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /선수 사진 출처/);
  assert.match(html, /Wikimedia Commons/);
  assert.match(html, /class="photo-credit-card"/);
  assert.match(html, /Commons 원본 파일 보기/);
  assert.match(html, /라이선스/);
  assert.match(html, /UFC 공식 프로필 사진/);
  assert.match(html, /https:\/\/www\.ufc\.com\/news\/terms-use/);
  assert.match(html, /loading="lazy"/);
  assert.match(html, /href="\/"/);
});

test("server-renders the UFC archive with hall of fame, former fighters, and referees", async () => {
  const response = await render("/archive");
  assert.equal(response.status, 200);

  const html = await response.text();
  const normalizedHtml = html.replaceAll("<!-- -->", "");
  assert.match(html, /UFC 아카이브/);
  assert.match(html, /상세 정보 보기/);
  assert.match(html, /명예의 전당/);
  assert.match(html, /과거 UFC 선수/);
  assert.match(html, /심판진/);
  assert.match(html, /코너 맥그리거/);
  assert.match(html, /아만다 누네스/);
  assert.match(html, /class="archive-tabs"/);
  assert.match(html, /class="fighter-face archive-fighter-face"/);
  const archive = await readFile(new URL("../app/data/archive.ts", import.meta.url), "utf8");
  const legends = await readFile(new URL("../app/data/legend-profiles.ts", import.meta.url), "utf8");
  assert.match(normalizedHtml, /과거 UFC 선수 56명/);
  for (const name of [
    "Conor McGregor", "Amanda Nunes", "Henry Cejudo", "Eddie Alvarez", "Anthony Pettis",
    "Benson Henderson", "Nate Diaz", "Nick Diaz", "Chael Sonnen", "Rashad Evans",
    "Dan Henderson", "Alistair Overeem", "Mark Hunt", "Glover Teixeira", "Demian Maia",
    "T.J. Dillashaw", "Renan Barao", "Carla Esparza", "Germaine de Randamie", "Rory MacDonald",
  ]) {
    assert.match(archive, new RegExp(`name: "${name}"`));
    assert.match(legends, new RegExp(`"${name}": archivedLegend`));
  }
});

test("server-renders the guest community entry page", async () => {
  const response = await render("/community");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /FKO COMMUNITY/);
  assert.match(html, /href="\/community"/);
  assert.match(html, /community-board-tabs/);
  assert.match(html, /글쓰기/);
  assert.match(html, /운영 규칙/);
  assert.doesNotMatch(html, /새 글 작성/);
  const community = await readFile(new URL("../app/community/page.tsx", import.meta.url), "utf8");
  const postDialog = await readFile(new URL("../app/components/CommunityPostDialog.tsx", import.meta.url), "utf8");
  assert.match(community, /CommunityPostDialog/);
  assert.match(community, /community-post-trigger/);
  assert.match(postDialog, /community-post:\$\{post\.id\}/);
  assert.match(postDialog, /GuestCommentThread/);
  const moderation = await readFile(new URL("../app/lib/community-moderation.ts", import.meta.url), "utf8");
  const schema = await readFile(new URL("../supabase/community.sql", import.meta.url), "utf8");
  assert.match(moderation, /ADVERTISEMENT_PATTERN/);
  assert.match(schema, /작성 간격 제한이 적용 중입니다/);
  assert.doesNotMatch(html, /게시글 비밀번호|댓글 비밀번호/);
  assert.match(html, /로그인/);
});

test("provides a role-gated community report admin page", async () => {
  const response = await render("/admin");
  assert.equal(response.status, 200);
  const html = await response.text();
  const admin = await readFile(new URL("../app/admin/page.tsx", import.meta.url), "utf8");
  const reportButton = await readFile(new URL("../app/components/CommunityReportButton.tsx", import.meta.url), "utf8");
  const schema = await readFile(new URL("../supabase/community.sql", import.meta.url), "utf8");

  assert.match(html, /FKO ADMIN/);
  assert.match(html, /신고 관리/);
  assert.match(admin, /get_community_reports/);
  assert.match(admin, /delete_community_post/);
  assert.match(reportButton, /create_community_report/);
  assert.match(schema, /app_metadata/);
  assert.match(schema, /create_community_report/);
  assert.match(schema, /delete_community_comment/);
});

test("server-renders a separate account page with nickname sign-up", async () => {
  const response = await render("/account");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /FKO ACCOUNT/);
  assert.match(html, /회원가입/);
  const account = await readFile(new URL("../app/account/page.tsx", import.meta.url), "utf8");
  assert.match(account, /고정 닉네임/);
  assert.match(account, /닉네임 수정/);
  assert.match(account, /method: "PUT"/);
  assert.match(account, /grant_type=refresh_token/);
  assert.match(account, /mode === "rename"/);
});

test("maps every ranked fighter to a Korean display name", async () => {
  const rankings = await readFile(
    new URL("../app/data/rankings.ts", import.meta.url),
    "utf8",
  );
  const rankingNames = await readFile(
    new URL("../app/data/ranking-names.ts", import.meta.url),
    "utf8",
  );
  const officialNames = new Set();
  const mappedNames = new Set();

  for (const match of rankings.matchAll(
    /champion: "([^"]+)"|^\s{6,}\[?\d*,?\s*"([^"]+)"\]?[,]?$/gm,
  )) {
    officialNames.add(match[1] || match[2]);
  }

  for (const match of rankingNames.matchAll(
    /^\s*(?:"([^"]+)"|([A-Za-z][A-Za-z]+)):\s*"/gm,
  )) {
    mappedNames.add(match[1] || match[2]);
  }

  assert.equal(officialNames.size, 200);
  assert.deepEqual(
    [...officialNames].filter((name) => !mappedNames.has(name)),
    [],
  );
});

test("uses the black, white, red, and yellow FKO theme", async () => {
  const css = await readFile(
    new URL("../app/globals.css", import.meta.url),
    "utf8",
  );

  assert.match(css, /--paper: #090909/);
  assert.match(css, /--text: #f1f1ef/);
  assert.match(css, /--orange: #ef3e3e/);
  assert.match(css, /--lime: #e9c536/);
  assert.match(css, /Pretendard Variable/);
  assert.match(
    css,
    /\.topbar-link,\s*\.back-home-link\s*\{[^}]*display: inline-flex !important/,
  );
  assert.match(css, /\.topbar-link,[\s\S]*?min-height: 40px/);
  assert.match(css, /\.next-event::after\s*\{\s*content: none/);
  assert.match(
    css,
    /\.fighter-face\s*\{[\s\S]*?width: 40px;[\s\S]*?height: 50px;[\s\S]*?border-radius: 6px;/,
  );
  assert.match(css, /\.fighter-face\[data-has-photo="false"\] img/);
  assert.doesNotMatch(css, /\.fighter-silhouette::before/);
  assert.doesNotMatch(css, /\.fighter-silhouette::after/);
  assert.doesNotMatch(
    css,
    /\.fighter-face\s*\{[^}]*border-radius:\s*50%/,
  );
  assert.match(css, /\.event-row\[aria-current="true"\]\s*\{[^}]*box-shadow: inset 3px 0 0/);
  assert.doesNotMatch(css, /#25a35a|#148447|#2670a5|#f3f0e8|#fffdf7/i);
});

test("keeps at most four compact sources at the top of fighter details", async () => {
  const dialog = await readFile(
    new URL("../app/components/FighterProfileDialog.tsx", import.meta.url),
    "utf8",
  );

  assert.match(dialog, /verificationSources\.slice\(0, 4\)/);
  assert.match(dialog, /className="fighter-top-sources"/);
  assert.match(dialog, /GuestCommentThread/);
  assert.match(dialog, /toggleFavoriteFighter/);
  assert.match(dialog, /targetId={`fighter:\$\{fighter\.name\}`}/);
  assert.doesNotMatch(dialog, /교차\s*검증/);
});

test("keeps anonymous predictions separate from comments", async () => {
  const prediction = await readFile(
    new URL("../app/components/BoutPrediction.tsx", import.meta.url),
    "utf8",
  );

  assert.match(prediction, /community_prediction_summary/);
  assert.match(prediction, /upsert_guest_prediction/);
  assert.match(prediction, /fko-prediction-guest-id/);
});

test("stores logged-in names separately from anonymous posting", async () => {
  const auth = await readFile(new URL("../app/lib/guest-auth.ts", import.meta.url), "utf8");
  const schema = await readFile(new URL("../supabase/community.sql", import.meta.url), "utf8");

  assert.match(auth, /@fko\.local/);
  assert.match(auth, /익명 1/);
  assert.match(schema, /auth\.jwt\(\)/);
  assert.match(schema, /to anon, authenticated/);
});
