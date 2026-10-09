import type { Metadata } from "next";
import "./globals.css";
import { portfolio } from "./portfolio-content";

// Change this once the site has its final domain.
const siteUrl = "https://taiebbourbia.dev";
const description =
  "Taieb Bourbia, student at TH Cologne and working student at CGI. Projects in Java, React and Python.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Taieb Bourbia",
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
    title: "Taieb Bourbia",
    description,
    siteName: "Taieb Bourbia",
    images: [
      {
        url: "/portfolio-hero.jpg",
        width: 1600,
        height: 853,
        alt: "Taieb Bourbia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Taieb Bourbia",
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
