// 언더카드 시작 시각 기준으로 승부예측이 마감되는지 검증한다.
import assert from "node:assert/strict";
import test from "node:test";
import {
  isPredictionClosed,
  predictionClosesAt,
} from "../app/lib/prediction-close.ts";

test("closes predictions at the prelims start time", () => {
  const closesAt = predictionClosesAt(
    "2026-08-08T18:00:00Z",
    "2026-08-08T21:00:00Z",
  );

  assert.equal(closesAt, "2026-08-08T18:00:00Z");
  assert.equal(isPredictionClosed(closesAt, Date.parse("2026-08-08T17:59:59Z")), false);
  assert.equal(isPredictionClosed(closesAt, Date.parse("2026-08-08T18:00:00Z")), true);
});

test("uses main card time when prelims time is unavailable", () => {
  assert.equal(
    predictionClosesAt(undefined, "2026-08-08T21:00:00Z"),
    "2026-08-08T21:00:00Z",
  );
});
