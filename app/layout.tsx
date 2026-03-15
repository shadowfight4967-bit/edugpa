import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from "@/lib/metadata";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} — Understand GPA, SGPA & CGPA Easily`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  keywords: [
    "GPA calculator",
    "CGPA calculator",
    "grade point average",
    "academic GPA guide",
    "CGPA to percentage",
    "sgpa to percentage",
    "uaf cgpa calculator",
    "utm cgpa calculator",
    "university grades",
    "cgpahub",
  ],
  authors: [{ name: "EduGPA Team", url: SITE_URL }],
  creator: "EduGPA.online",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
    url: SITE_URL,
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@edugpa",
  },
  verification: {
    google: "gjF1vSDac9jf25TAfMDX4HeyNpIrTnVw8tXOYxi7vVo",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/og-image.png`,
    width: 1200,
    height: 630,
  },
  
  description: SITE_DESCRIPTION,
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/search?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="alternate" type="application/rss+xml" title={SITE_NAME} href="/rss.xml" />
      </head>
      <body className={`${inter.variable} antialiased selection:bg-blue-100 selection:text-blue-600 text-slate-900 min-h-screen`}>
        {/* Fixed gradient background layer */}
        <div className="fixed inset-0 -z-10" style={{ background: 'linear-gradient(135deg, #c7d2fe 0%, #fde68a 45%, #93c5fd 100%)' }} />
        <Header />
        <main>{children}</main>
        <Footer />

        {/* Global Structured Data — injected after page is interactive */}
        <Script
          id="schema-organization"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Script
          id="schema-website"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </body>
    </html>
  );
}
