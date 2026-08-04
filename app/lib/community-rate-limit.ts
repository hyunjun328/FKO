// 커뮤니티 작성 간격을 기기 저장소 기준으로 제한한다.
export type CommunitySubmissionKind = "post" | "comment";

const STORAGE_PREFIX = "fko-community-submissions";
const RULES = {
  post: { intervalMs: 60_000, windowMs: 10 * 60_000, maximum: 2 },
  comment: { intervalMs: 8_000, windowMs: 10 * 60_000, maximum: 15 },
} as const;

export function communitySubmissionWait(
  kind: CommunitySubmissionKind,
  submissions: number[],
  now = Date.now(),
) {
  const rule = RULES[kind];
  const recent = submissions.filter((timestamp) => now - timestamp < rule.windowMs);
  const latest = recent.at(-1);
  if (latest !== undefined && now - latest < rule.intervalMs) {
    return rule.intervalMs - (now - latest);
  }
  if (recent.length >= rule.maximum) {
    return rule.windowMs - (now - recent[0]);
  }
  return 0;
}

function storageKey(kind: CommunitySubmissionKind) {
  return `${STORAGE_PREFIX}:${kind}`;
}

function storedSubmissions(kind: CommunitySubmissionKind) {
  if (typeof window === "undefined") return [];
  try {
    const stored = JSON.parse(window.localStorage.getItem(storageKey(kind)) ?? "[]");
    return Array.isArray(stored) ? stored.filter((value): value is number => typeof value === "number") : [];
  } catch {
    return [];
  }
}

export function communitySubmissionWaitFromStorage(kind: CommunitySubmissionKind, now = Date.now()) {
  return communitySubmissionWait(kind, storedSubmissions(kind), now);
}

export function recordCommunitySubmission(kind: CommunitySubmissionKind, now = Date.now()) {
  if (typeof window === "undefined") return;
  const rule = RULES[kind];
  const recent = storedSubmissions(kind).filter((timestamp) => now - timestamp < rule.windowMs);
  window.localStorage.setItem(storageKey(kind), JSON.stringify([...recent, now]));
}

export function formatCommunityWait(waitMs: number) {
  return `${Math.max(1, Math.ceil(waitMs / 1000))}초 뒤에 다시 작성할 수 있습니다.`;
}
