// 직접 수집한 UFC 예정 대회 목록을 화면 일정에 보조 데이터로 제공한다.
export type AutoScheduledEvent = { id: string; title: string; date: string; sourceUrl: string };

export const AUTO_SCHEDULED_EVENTS: AutoScheduledEvent[] = [];
