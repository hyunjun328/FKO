// 배포 빌드가 UFC 일정 제품 화면을 서버에서 렌더링하는지 검증하는 테스트
import assert from "node:assert/strict";
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
  assert.doesNotMatch(html, /파이트 캘린더 코리아/);
  assert.match(html, /UFC 일정/);
  assert.match(html, /한국시간/);
  assert.match(html, /지금 한국시간/);
  assert.match(html, /다음 주요 매치/);
  assert.match(html, /UFC 330/);
  assert.match(html, /이슬람 마카체프/);
  assert.match(html, /이안 마샤두 개리/);
  assert.match(
    html,
    /aria-label="UFC 330 이슬람 마카체프 대 이안 마샤두 개리 상세 보기"/,
  );
  assert.doesNotMatch(html, /메인카드 시작까지/);
  assert.match(html, /Medic vs Rodriguez/);
  assert.match(html, /Uros Medic/);
  assert.match(html, /우로시 메디치/);
  assert.match(html, /다니엘 로드리게스/);
  assert.match(
    html,
    /aria-label="우로시 메디치 선수 정보 보기"/,
  );
  assert.match(html, /aria-label="다니엘 로드리게스 선수 정보 보기"/);
  assert.match(html, /웰터급 14위/);
  assert.match(html, /16전 13승 3패/);
  assert.match(html, /25전 20승 5패/);
  assert.match(html, /코리안 파이터/);
  assert.match(html, /href="\/korean-fighters"/);
  assert.match(normalizedHtml, /현역 6명[^<]*·[^<]*역대 6명/);
  assert.match(html, /정찬성/);
  assert.match(html, /김동현/);
  assert.doesNotMatch(html, /aria-label="박준용 상세 정보 보기"/);
  assert.doesNotMatch(html, /The Korean Tyson/);
  assert.match(
    normalizedHtml,
    /메인카드[^<]*·[^<]*8월 2일[^<]*02:00[^<]*KST/,
  );
  assert.match(html, /href="#event-detail"/);
  assert.match(html, /id="event-detail"/);
  assert.match(html, /상세(?:&nbsp;|\u00a0)→/);
  assert.match(html, /UFC 및 Zuffa와 공식 제휴 관계가 없는/);
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
  assert.match(normalizedHtml, /검수 완료[^<]*·[^<]*6명/);
  assert.match(normalizedHtml, /2개 이상 출처[^<]*·[^<]*6명/);
  assert.match(html, /박준용/);
  assert.match(html, /최두호/);
  assert.match(html, /고석현/);
  assert.match(html, /박현성/);
  assert.match(html, /이정영/);
  assert.match(html, /유주상/);
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
  assert.match(seokHyeonCard, /5곳 교차 검증/);
  assert.match(seokHyeonCard, /“Technical”/);
  assert.match(seokHyeonCard, /16전 13승 3패/);
  assert.match(seokHyeonCard, /data-result="패"/);
  assert.match(seokHyeonCard, /장폴 레보스노야니/);
  assert.doesNotMatch(seokHyeonCard, /data-result="승"/);
  assert.doesNotMatch(html, /The Korean Tyson/);
  assert.match(html, /href="\/"/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i);
});
