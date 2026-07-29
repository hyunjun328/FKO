// Next.js 정적 내보내기를 GitHub Pages의 /FKO 경로에 맞게 생성한다.
import { spawnSync } from "node:child_process";
import { createRequire } from "node:module";
import {
  readFileSync,
  readdirSync,
  statSync,
  writeFileSync,
} from "node:fs";
import { resolve } from "node:path";

const require = createRequire(import.meta.url);
const projectRoot = resolve(import.meta.dirname, "..");
const nextCli = require.resolve("next/dist/bin/next");
const pagesUrl = "https://hyunjun328.github.io/FKO";
const result = spawnSync(process.execPath, [nextCli, "build"], {
  cwd: projectRoot,
  env: {
    ...process.env,
    GITHUB_PAGES: "true",
    NEXT_PUBLIC_SITE_URL: pagesUrl,
  },
  stdio: "inherit",
});

if (result.status !== 0) {
  process.exit(result.status ?? 1);
}

const outDir = resolve(projectRoot, "out");

for (const file of walk(outDir)) {
  if (!file.endsWith(".css")) continue;

  const original = readFileSync(file, "utf8");
  const updated = original
    .replaceAll('url("/fonts/', 'url("/FKO/fonts/')
    .replaceAll("url('/fonts/", "url('/FKO/fonts/")
    .replaceAll("url(/fonts/", "url(/FKO/fonts/");

  if (updated !== original) {
    writeFileSync(file, updated, "utf8");
  }
}

writeFileSync(resolve(outDir, ".nojekyll"), "", "utf8");

function walk(directory) {
  return readdirSync(directory).flatMap((name) => {
    const path = resolve(directory, name);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });
}
