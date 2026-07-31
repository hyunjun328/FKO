// 수집 결과의 확인 시각을 화면 데이터 파일로 갱신한다.
import { readFile, writeFile } from "node:fs/promises";

const reviewUrl = new URL("../review/pending-events.json", import.meta.url);
const statusUrl = new URL("../app/data/schedule-status.ts", import.meta.url);
const review = JSON.parse(await readFile(reviewUrl, "utf8"));
const collectedAt = new Date(review.collectedAt);

if (Number.isNaN(collectedAt.valueOf())) {
  throw new Error("수집 결과에 유효한 collectedAt 값이 없습니다.");
}

await writeFile(
  statusUrl,
  `// 12시간마다 실행한 일정 수집 시각을 화면에 제공한다.\nexport const SCHEDULE_CHECKED_AT = ${JSON.stringify(collectedAt.toISOString())};\n`,
  "utf8",
);
