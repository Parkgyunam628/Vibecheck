// Set NEXT_PUBLIC_SITE_URL in your environment:
//   .env.local  →  NEXT_PUBLIC_SITE_URL=http://localhost:3000
//   Vercel production env  →  NEXT_PUBLIC_SITE_URL=https://vibecheck.app
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://vibecheck.app"
).replace(/\/$/, "");

// Hostname only, no protocol — used for display text in share cards
export const DISPLAY_URL = SITE_URL.replace(/^https?:\/\//, "");
