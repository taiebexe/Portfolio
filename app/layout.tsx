import type { Metadata } from "next";
import "./globals.css";
import { portfolio } from "./portfolio-content";

// TODO: set this to your real deployed URL so social previews and JSON-LD resolve.
const siteUrl = "https://taiebbourbia.dev";
const description =
  "Creative portfolio of Taieb Bourbia, a TH Cologne student building full-stack products, AI workflows, Java services, and React interfaces.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Taieb Bourbia | Portfolio",
  description,
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/favicon.ico?v=2", sizes: "32x32" },
      { url: "/favicon.svg?v=2", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico?v=2",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Taieb Bourbia | Portfolio",
    description,
    siteName: "Taieb Bourbia",
    images: [
      {
        url: "/portfolio-hero.jpg",
        width: 1600,
        height: 853,
        alt: "Taieb Bourbia — portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Taieb Bourbia | Portfolio",
    description,
    images: ["/portfolio-hero.jpg"],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: portfolio.name,
  email: `mailto:${portfolio.email}`,
  jobTitle: portfolio.role,
  description: portfolio.summary,
  url: siteUrl,
  sameAs: portfolio.links
    .filter((link) => link.href.startsWith("http"))
    .map((link) => link.href),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
