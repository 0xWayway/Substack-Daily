import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Substack Daily - AI/科技精选",
  description: "每日自动更新的 AI/科技 Substack 精选文章",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className="antialiased"
        style={{ backgroundColor: '#F5F4F0' }}
      >
        {children}
      </body>
    </html>
  );
}
