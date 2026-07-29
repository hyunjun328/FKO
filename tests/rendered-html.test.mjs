// 배포 빌드가 UFC 일정 제품 화면을 서버에서 렌더링하는지 검증하는 테스트
import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
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
  assert.match(html, /<html lang="ko">/i);
  assert.match(html, /파이트 캘린더 코리아/);
  assert.match(html, /UFC 일정/);
  assert.match(html, /한국시간/);
  assert.match(html, /Medić vs Rodriguez/);
  assert.match(html, /UFC 및 Zuffa와 공식 제휴 관계가 없는/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i);
});
