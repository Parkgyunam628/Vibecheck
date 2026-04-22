import type { Metadata } from "next";
import "./globals.css";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "VibeCheck — Personality Tests & Quizzes",
  description:
    "Discover your personality with viral quizzes. Are you the main character? What's your geek level? Share your results!",
  openGraph: {
    title: "VibeCheck — Personality Tests & Quizzes",
    description: "Find out who you really are. Take a quiz.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
