// FKO의 문서 메타데이터와 전역 레이아웃
import type { Metadata, Viewport } from "next";
import "./globals.css";
import { AppHeader } from "./components/AppHeader";

const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://fight-calendar-korea.jjh020104.chatgpt.site"
).replace(/\/$/, "");
const socialImage = `${siteUrl}/og-dark.png`;

export const metadata: Metadata = {
  metadataBase: new URL(`${siteUrl}/`),
  title: "FKO | UFC 일정 · 대진 · 선수 정보",
  description:
    "다가오는 UFC 대회, 전체 대진, 선수 정보를 한눈에 확인하는 Fight Korea 서비스.",
  applicationName: "FKO",
  openGraph: {
    title: "FKO | 오늘의 격투기, 한 번에.",
    description: "UFC 일정, 대진, 선수 정보를 한곳에서 확인하세요.",
    type: "website",
    locale: "ko_KR",
    images: [{ url: socialImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FKO | 오늘의 격투기, 한 번에.",
    description: "UFC 일정, 대진, 선수 정보를 한곳에서 확인하세요.",
    images: [socialImage],
  },
};

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
      <body><AppHeader />{children}</body>
    </html>
  );
}
