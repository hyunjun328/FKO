// KST 기준으로 대회의 화면 표시 상태와 정렬 순서를 계산한다.
import type { FightEvent } from "../data/events";
import type { EventResult } from "../data/event-results";

export type EventDisplayStatus = "upcoming" | "fight-day" | "awaiting-results" | "completed";

const KST_DATE_FORMATTER = new Intl.DateTimeFormat("en-CA", {
  timeZone: "Asia/Seoul",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});

function kstDate(instant: number | string) {
  return KST_DATE_FORMATTER.format(new Date(instant));
}

function nextKstDate(date: string) {
  const [year, month, day] = date.split("-").map(Number);
  return new Date(Date.UTC(year, month - 1, day + 1)).toISOString().slice(0, 10);
}

export function eventDisplayStatus(
  event: FightEvent,
  now: number,
  result?: EventResult,
): EventDisplayStatus {
  if (result?.completed) return "completed";

  const eventDate = kstDate(event.startUtc);
  const today = kstDate(now);
  if (today < eventDate) return "upcoming";
  if (today === eventDate) return "fight-day";
  if (today >= nextKstDate(eventDate)) return "awaiting-results";
  return "upcoming";
}
