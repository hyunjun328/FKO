// 공식 UFC 상위 15위 밖 선수에게 날짜가 명시된 비공식 세계 순위를 연결한다.
export type UnofficialWorldRanking = {
  provider: "Fight Matrix";
  rank: number;
  division: string;
  record: string;
  asOf: string;
  sourceUrl: string;
};

const WELTERWEIGHT_SOURCE =
  "https://www.fightmatrix.com/mma-ranks/welterweight/";
const WELTERWEIGHT_PAGE_TWO =
  "https://www.fightmatrix.com/mma-ranks/welterweight/?PageNum=2";

export const UNOFFICIAL_WORLD_RANKINGS: Record<
  string,
  UnofficialWorldRanking
> = {
  "Islam Makhachev": {
    provider: "Fight Matrix",
    rank: 1,
    division: "웰터급",
    record: "28승 1패",
    asOf: "2026-07-26",
    sourceUrl: WELTERWEIGHT_SOURCE,
  },
  "Ian Machado Garry": {
    provider: "Fight Matrix",
    rank: 4,
    division: "웰터급",
    record: "17승 1패",
    asOf: "2026-07-26",
    sourceUrl: WELTERWEIGHT_SOURCE,
  },
  "Uros Medic": {
    provider: "Fight Matrix",
    rank: 18,
    division: "웰터급",
    record: "13승 3패",
    asOf: "2026-07-26",
    sourceUrl: WELTERWEIGHT_SOURCE,
  },
  "Daniel Rodriguez": {
    provider: "Fight Matrix",
    rank: 19,
    division: "웰터급",
    record: "20승 5패",
    asOf: "2026-07-26",
    sourceUrl: WELTERWEIGHT_SOURCE,
  },
  "Myktybek Orolbai": {
    provider: "Fight Matrix",
    rank: 23,
    division: "웰터급",
    record: "16승 2패 2무",
    asOf: "2026-07-26",
    sourceUrl: WELTERWEIGHT_SOURCE,
  },
  "Geoff Neal": {
    provider: "Fight Matrix",
    rank: 24,
    division: "웰터급",
    record: "16승 8패",
    asOf: "2026-07-26",
    sourceUrl: WELTERWEIGHT_SOURCE,
  },
  "Neil Magny": {
    provider: "Fight Matrix",
    rank: 26,
    division: "웰터급",
    record: "31승 14패",
    asOf: "2026-07-26",
    sourceUrl: WELTERWEIGHT_PAGE_TWO,
  },
  "Jean-Paul Lebosnoyani": {
    provider: "Fight Matrix",
    rank: 44,
    division: "웰터급",
    record: "11승 2패",
    asOf: "2026-07-26",
    sourceUrl: WELTERWEIGHT_PAGE_TWO,
  },
  "Jeremiah Wells": {
    provider: "Fight Matrix",
    rank: 47,
    division: "웰터급",
    record: "13승 4패 1무",
    asOf: "2026-07-26",
    sourceUrl: WELTERWEIGHT_PAGE_TWO,
  },
  "Chidi Njokuani": {
    provider: "Fight Matrix",
    rank: 54,
    division: "웰터급",
    record: "확인 중",
    asOf: "2026-07-26",
    sourceUrl: WELTERWEIGHT_PAGE_TWO,
  },
  "SeokHyeon Ko": {
    provider: "Fight Matrix",
    rank: 59,
    division: "웰터급",
    record: "13승 3패",
    asOf: "2026-07-26",
    sourceUrl: WELTERWEIGHT_PAGE_TWO,
  },
  "Ramiz Brahimaj": {
    provider: "Fight Matrix",
    rank: 99,
    division: "웰터급",
    record: "확인 중",
    asOf: "2026-07-26",
    sourceUrl: WELTERWEIGHT_PAGE_TWO,
  },
};

export function unofficialWorldRanking(name: string) {
  return UNOFFICIAL_WORLD_RANKINGS[name];
}
