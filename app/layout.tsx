// FKO의 문서 메타데이터와 전역 레이아웃
import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host");
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host?.startsWith("localhost") ? "http" : "https");
  const origin = host ? `${protocol}://${host}` : "https://fight-calendar-korea.invalid";
  const socialImage = new URL("/og-dark.png", origin).toString();

  return {
    title: "FKO | UFC 한국시간 일정",
    description:
      "다가오는 UFC 대회와 전체 대진을 한국시간으로 한눈에 확인하는 Fight Korea 일정 서비스.",
    applicationName: "FKO",
    openGraph: {
      title: "FKO | 오늘의 격투기, 한 번에.",
      description: "UFC 일정과 대진을 한국시간으로 빠르게 확인하세요.",
      type: "website",
      locale: "ko_KR",
      images: [{ url: socialImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: "FKO | 오늘의 격투기, 한 번에.",
      description: "UFC 일정과 대진을 한국시간으로 빠르게 확인하세요.",
      images: [socialImage],
    },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050505",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
