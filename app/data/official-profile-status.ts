// UFC 공식 선수 프로필에서 자동 수집한 전적과 신체 정보를 제공한다.
export type OfficialProfileStatus = {
  record?: string;
  heightCm?: number;
  reachCm?: number;
  status?: string;
  checkedAt: string;
  sourceUrl: string;
};

export const OFFICIAL_PROFILE_STATUS: Record<string, OfficialProfileStatus> = {};
