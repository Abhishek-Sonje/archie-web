import type { Metadata } from "next";
import "./globals.css";

/* ─── Page metadata ─────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Archie — Architecture docs that write themselves",
  description:
    "Archie reads your code, analyzes your Git history, and keeps ARCHITECTURE.md up to date on every commit. Built for solo developers and small teams.",
  keywords: ["architecture docs", "git", "cli", "developer tools", "gemini"],
  openGraph: {
    title: "Archie — Architecture docs that write themselves",
    description:
      "A Node.js CLI that auto-generates and maintains ARCHITECTURE.md via Git hooks and Gemini AI.",
    type: "website",
  },
};

/* ─── Root layout ───────────────────────────────────────────────── */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-dvh flex flex-col">{children}</body>
    </html>
  );
}
