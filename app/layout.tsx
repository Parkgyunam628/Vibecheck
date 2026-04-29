import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { SITE_URL } from "@/lib/site";

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "VibeCheck — Personality Tests & Quizzes",
  description:
    "Short personality quizzes worth sending to friends. Discover your aura, red flag, dating type, friend role, and more. Results in 2 minutes.",
  openGraph: {
    title: "VibeCheck — Personality Tests & Quizzes",
    description:
      "Short personality quizzes worth sending to friends. Discover your aura, red flag, dating type, and more.",
    type: "website",
    url: SITE_URL,
    siteName: "VibeCheck",
  },
  twitter: {
    card: "summary_large_image",
    title: "VibeCheck — Personality Tests & Quizzes",
    description: "Short personality quizzes worth sending to friends.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        {/* AdSense — raw tag so it appears in SSR HTML for ownership verification */}
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6908087123216234"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-full">
        {children}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
