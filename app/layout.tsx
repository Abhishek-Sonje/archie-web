import type { Metadata } from "next";
import "./globals.css";
import { FAQ_ITEMS } from "@/content/landing";
import { Analytics } from "@vercel/analytics/next";

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Archie",
    alternateName: "archie-ai",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Windows, macOS, Linux",
    description:
      "A Node.js CLI that auto-generates and maintains ARCHITECTURE.md via Git hooks and Gemini AI.",
    softwareVersion: "1.0",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    url: "https://www.npmjs.com/package/archie-ai",
    downloadUrl: "https://www.npmjs.com/package/archie-ai",
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Abhishek Sonje",
    url: "https://github.com/Abhishek-Sonje",
    sameAs: ["https://github.com/Abhishek-Sonje/Archie"],
  },
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Auto-Generate Architecture Docs with Archie",
    description:
      "Install Archie, add your Gemini API key, and run archie init to generate ARCHITECTURE.md automatically from your codebase and Git history.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Install Archie globally",
        text: "Run npm install -g archie-ai to install the CLI globally.",
        url: "https://archie.abhishekdev.tech/#install",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Add your Gemini API key",
        text: "Create a .env file in your project root and add GEMINI_API_KEY=your_key_here.",
        url: "https://archie.abhishekdev.tech/#install",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Generate your ARCHITECTURE.md",
        text: "Run archie init to generate your first architecture doc. Then run archie hook to install the post-commit Git hook for automatic updates.",
        url: "https://archie.abhishekdev.tech/#install",
      },
    ],
    tool: {
      "@type": "HowToTool",
      name: "Node.js v18+",
    },
    supply: {
      "@type": "HowToSupply",
      name: "Gemini API key (free tier)",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  },
];

/* ─── Page metadata ─────────────────────────────────────────────── */
export const metadata: Metadata = {
  metadataBase: new URL("https://archie.abhishekdev.tech"),
  title: "Archie — Auto-Generate ARCHITECTURE.md | AI Docs CLI for Git",
  description:
    "Archie is a Node.js CLI that reads your codebase, analyzes Git history, and auto-generates ARCHITECTURE.md using Gemini 2.5 Flash. Installs a post-commit hook for surgical, automatic updates on every meaningful commit. Free to use.",
  keywords: ["architecture docs", "git", "cli", "developer tools", "gemini"],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Archie — Auto-Generate ARCHITECTURE.md | AI Docs CLI for Git",
    description:
      "A Node.js CLI that auto-generates and maintains ARCHITECTURE.md via Git hooks and Gemini AI.",
    type: "website",
    url: "https://archie.abhishekdev.tech",
    siteName: "Archie",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Archie — Architecture docs that write themselves",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Archie — Auto-Generate ARCHITECTURE.md | AI Docs CLI",
    description:
      "A Node.js CLI that generates and maintains ARCHITECTURE.md via Git hooks and Gemini 2.5 Flash. Zero latency. Surgical updates.",
    images: ["/og-image.png"],
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body suppressHydrationWarning className="min-h-dvh flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
