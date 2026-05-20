import type { Metadata } from "next";
import { Syne, Syne_Mono } from "next/font/google";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const syneMono = Syne_Mono({
  variable: "--font-syne-mono",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Interesting Internet — Fuse.kiwi Inspired",
  description:
    "A typography-first, motion-driven creative showcase inspired by Fuse.kiwi. Curated discovery with Syne, Syne Mono, and extracted design tokens.",
  keywords: [
    "Fuse.kiwi",
    "creative",
    "typography",
    "internet culture",
    "design system",
  ],
  openGraph: {
    title: "Interesting Internet",
    description: "Curated creative discovery — Fuse.kiwi inspired.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${syneMono.variable}`}>
      <body className="overflow-x-hidden">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
