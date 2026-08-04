// 커뮤니티 게시글의 체급 분류를 기존 제목 필드와 호환되게 저장한다.
export const COMMUNITY_BOARDS = [
  { id: "all", label: "전체" },
  { id: "free", label: "자유" },
  { id: "flyweight", label: "플라이급" },
  { id: "bantamweight", label: "밴텀급" },
  { id: "featherweight", label: "페더급" },
  { id: "lightweight", label: "라이트급" },
  { id: "welterweight", label: "웰터급" },
  { id: "middleweight", label: "미들급" },
  { id: "light-heavyweight", label: "라이트헤비급" },
  { id: "heavyweight", label: "헤비급" },
  { id: "womens", label: "여성 체급" },
] as const;

export type CommunityBoardId = (typeof COMMUNITY_BOARDS)[number]["id"];
export type WritableCommunityBoardId = Exclude<CommunityBoardId, "all">;

const TITLE_PREFIX = /^\[FKO:([a-z-]+)\]\s*/;

function isWritableBoard(value: string): value is WritableCommunityBoardId {
  return COMMUNITY_BOARDS.some((board) => board.id === value && board.id !== "all");
}

export function communityBoardLabel(boardId: CommunityBoardId) {
  return COMMUNITY_BOARDS.find((board) => board.id === boardId)?.label ?? "자유";
}

export function encodeCommunityTitle(boardId: WritableCommunityBoardId, title: string) {
  return `[FKO:${boardId}] ${title.trim()}`;
}

export function decodeCommunityTitle(rawTitle: string) {
  const match = rawTitle.match(TITLE_PREFIX);
  const boardId = match?.[1] ?? "free";
  return {
    boardId: isWritableBoard(boardId) ? boardId : "free" as const,
    title: rawTitle.replace(TITLE_PREFIX, "").trim(),
  };
}
