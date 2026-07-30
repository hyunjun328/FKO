// GitHub Pages 정적 결과물의 경로와 핵심 화면을 검증한다.
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const output = new URL("../out/", import.meta.url);

async function readOutput(path) {
  return readFile(new URL(path, output), "utf8");
}

test("exports every public route below the FKO base path", async () => {
  const home = await readOutput("index.html");
  const rankings = await readOutput("rankings/index.html");
  const p4p = await readOutput("p4p/index.html");
  const koreanFighters = await readOutput("korean-fighters/index.html");
  const photoCredits = await readOutput("photo-credits/index.html");
  const nobodyMan = await readFile(new URL("fighters/nobody.webp", output));
  const nobodyWoman = await readFile(
    new URL("fighters/nobody-woman.webp", output),
  );

  assert.match(home, /FKO/);
  assert.match(home, /\/FKO\/rankings\//);
  assert.match(home, /\/FKO\/p4p\//);
  assert.match(home, /\/FKO\/korean-fighters\//);
  assert.match(home, /\/FKO\/photo-credits\//);
  assert.match(rankings, /선수 랭킹/);
  assert.match(rankings, /15위 밖 주요 선수/);
  assert.match(p4p, /P4P 랭킹/);
  assert.match(p4p, /\/FKO\/rankings\//);
  assert.match(home, /\/FKO\/fighters\/nobody\.webp/);
  assert.match(rankings, /\/FKO\/fighters\/nobody-woman\.webp/);
  assert.match(koreanFighters, /코리안 파이터/);
  assert.match(photoCredits, /선수 사진 출처/);
  assert.match(photoCredits, /src="\/FKO\/fighters\/[^"]+\.webp"/);
  assert.ok(nobodyMan.byteLength > 1000);
  assert.ok(nobodyWoman.byteLength > 1000);
});

test("prefixes scripts, fonts, and social metadata for GitHub Pages", async () => {
  const home = await readOutput("index.html");
  const cssReferences = [...home.matchAll(/href="([^"]+\.css[^"]*)"/g)].map(
    (match) => match[1],
  );

  assert.ok(cssReferences.length > 0);
  assert.match(home, /\/FKO\/_next\//);
  assert.match(home, /https:\/\/hyunjun328\.github\.io\/FKO\/og-dark\.png/);

  const styles = await Promise.all(
    cssReferences.map((href) =>
      readOutput(href.replace(/^\/FKO\//, "")).catch(() => ""),
    ),
  );
  assert.match(styles.join("\n"), /url\(\/FKO\/fonts\/PretendardVariable\.woff2/);
});
