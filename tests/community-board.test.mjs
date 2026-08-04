// 체급별 게시판 제목 표식의 저장·복원을 검증한다.
import assert from "node:assert/strict";
import test from "node:test";
import {
  decodeCommunityTitle,
  encodeCommunityTitle,
} from "../app/lib/community-board.ts";

test("stores and restores a community board without exposing its title marker", () => {
  const stored = encodeCommunityTitle("lightweight", "게이치 타이틀전 이야기");

  assert.equal(stored, "[FKO:lightweight] 게이치 타이틀전 이야기");
  assert.deepEqual(decodeCommunityTitle(stored), {
    boardId: "lightweight",
    title: "게이치 타이틀전 이야기",
  });
});

test("places legacy posts in the free board", () => {
  assert.deepEqual(decodeCommunityTitle("예전 자유 글"), {
    boardId: "free",
    title: "예전 자유 글",
  });
});
