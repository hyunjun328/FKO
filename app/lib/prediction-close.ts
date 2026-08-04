// 승부예측의 마감 시각을 언더카드 또는 메인카드 시작 시각으로 계산한다.
export function predictionClosesAt(prelimsUtc: string | undefined, startUtc: string) {
  return prelimsUtc ?? startUtc;
}

export function isPredictionClosed(closesAt: string, now = Date.now()) {
  return now >= new Date(closesAt).getTime();
}
