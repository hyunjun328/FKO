// 커뮤니티의 광고·욕설·반복 도배 차단과 작성 간격을 검증한다.
import assert from "node:assert/strict";
import test from "node:test";
import { validateCommunityContent } from "../app/lib/community-moderation.ts";
import { communitySubmissionWait } from "../app/lib/community-rate-limit.ts";

test("blocks advertising links, contact prompts, and profanity", () => {
  assert.equal(validateCommunityContent("무료 상담은 https://spam.example").ok, false);
  assert.equal(validateCommunityContent("카카오톡 오픈채팅으로 와요").ok, false);
  assert.equal(validateCommunityContent("이 선수는 병신이다").ok, false);
  assert.equal(validateCommunityContent("ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ").ok, false);
});

test("allows normal fight discussion", () => {
  assert.deepEqual(validateCommunityContent("라이트급 경기 기대됩니다."), { ok: true });
});

test("limits post and comment frequency", () => {
  const now = 1_000_000;
  assert.equal(communitySubmissionWait("post", [now - 30_000], now), 30_000);
  assert.equal(communitySubmissionWait("comment", [now - 21_000, now - 15_000, now - 10_000, now - 5_000, now - 1_000], now), 19_000);
  assert.equal(communitySubmissionWait("comment", [now - 11 * 60_000], now), 0);
});
