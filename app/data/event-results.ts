// 자동 수집한 완료 UFC 대회의 경기 결과를 화면에 제공한다.
export type EventResult = {
  eventId: string; completed: true; sourceUrl: string; verifiedAt: string;
  bouts: Array<{ winner: string | null; loser: string | null; method: string; round: number | null; time: string | null }>;
};

export const EVENT_RESULTS: EventResult[] = [];
