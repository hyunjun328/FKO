// 현역과 역대 한국 UFC 선수를 보여주는 전용 페이지다.
import type { Metadata } from "next";
import { KoreanFightersPage } from "../components/KoreanFightersPage";

export const metadata: Metadata = {
  title: "코리안 파이터 | FKO",
  description:
    "현역 한국 UFC 선수와 은퇴·전 UFC 선수의 전적과 최근 경기를 확인하세요.",
};

export default function Page() {
  return <KoreanFightersPage />;
}
