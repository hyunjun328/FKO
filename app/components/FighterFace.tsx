// 검수된 선수 사진을 표시하고 사진이 없으면 성별 실루엣 이미지로 대체한다.
import fighterImages from "../data/fighter-images.json";

export type FighterImageCredit = {
  src: string;
  groups: string[];
  sourceUrl: string;
  author: string;
  license: string;
  licenseUrl: string;
  file: string;
  wikidataId: string;
};

export const FIGHTER_IMAGES = fighterImages as Record<
  string,
  FighterImageCredit
>;

export function FighterFace({
  name,
  koName,
  className = "",
  eager = false,
  gender = "male",
}: {
  name: string;
  koName?: string;
  className?: string;
  eager?: boolean;
  gender?: "male" | "female";
}) {
  const image = FIGHTER_IMAGES[name];
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const imagePath =
    image?.src ??
    (gender === "female"
      ? "/fighters/nobody-woman.webp"
      : "/fighters/nobody.webp");

  return (
    <span
      className={`fighter-face ${className}`.trim()}
      data-has-photo={image ? "true" : "false"}
      title={
        image
          ? `${koName ?? name} · Wikimedia Commons 사진`
          : `${koName ?? name} · 선수 사진 준비 중`
      }
    >
      {/* WebP가 이미 360px로 최적화되어 정적 호스팅 경로를 그대로 사용한다. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`${basePath}${imagePath}`}
        alt=""
        width="180"
        height="240"
        loading={eager ? "eager" : "lazy"}
        decoding="async"
      />
    </span>
  );
}
