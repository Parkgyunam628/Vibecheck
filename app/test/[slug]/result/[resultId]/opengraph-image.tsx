import { ImageResponse } from "next/og";
import { getQuizBySlug } from "@/lib/quizzes";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Tailwind color palette lookup
const TW: Record<string, Record<string, string>> = {
  slate:   { "400": "#94a3b8", "500": "#64748b", "600": "#475569", "700": "#334155", "800": "#1e293b", "900": "#0f172a" },
  gray:    { "400": "#9ca3af", "500": "#6b7280", "600": "#4b5563", "700": "#374151", "900": "#111827" },
  purple:  { "400": "#c084fc", "500": "#a855f7", "600": "#9333ea", "700": "#7e22ce", "800": "#6b21a8", "900": "#581c87" },
  violet:  { "400": "#a78bfa", "500": "#8b5cf6", "600": "#7c3aed", "700": "#6d28d9", "800": "#5b21b6", "900": "#4c1d95" },
  indigo:  { "400": "#818cf8", "500": "#6366f1", "600": "#4f46e5", "700": "#4338ca" },
  blue:    { "400": "#60a5fa", "500": "#3b82f6", "600": "#2563eb", "700": "#1d4ed8" },
  sky:     { "400": "#38bdf8", "500": "#0ea5e9", "600": "#0284c7" },
  cyan:    { "400": "#22d3ee", "500": "#06b6d4", "600": "#0891b2" },
  teal:    { "400": "#2dd4bf", "500": "#14b8a6", "600": "#0d9488" },
  emerald: { "400": "#34d399", "500": "#10b981", "600": "#059669" },
  green:   { "400": "#4ade80", "500": "#22c55e", "600": "#16a34a" },
  yellow:  { "400": "#facc15", "500": "#eab308", "600": "#ca8a04" },
  amber:   { "400": "#fbbf24", "500": "#f59e0b", "600": "#d97706" },
  orange:  { "400": "#fb923c", "500": "#f97316", "600": "#ea580c" },
  red:     { "400": "#f87171", "500": "#ef4444", "600": "#dc2626" },
  rose:    { "400": "#fb7185", "500": "#f43f5e", "600": "#e11d48" },
  pink:    { "400": "#f472b6", "500": "#ec4899", "600": "#db2777" },
  fuchsia: { "400": "#e879f9", "500": "#d946ef", "600": "#c026d3" },
};

function tailwindToHex(name: string, shade: string): string {
  return TW[name]?.[shade] ?? "#8b5cf6";
}

function resolveGradient(colorClass: string): [string, string] {
  const fromMatch = colorClass.match(/from-([a-z]+)-(\d+)/);
  const toMatch = colorClass.match(/to-([a-z]+)-(\d+)/);
  const from = fromMatch ? tailwindToHex(fromMatch[1], fromMatch[2]) : "#8b5cf6";
  const to = toMatch ? tailwindToHex(toMatch[1], toMatch[2]) : "#ec4899";
  return [from, to];
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string; resultId: string }>;
}) {
  const { slug, resultId } = await params;
  const quiz = getQuizBySlug(slug);
  const result = quiz?.results.find((item) => item.id === resultId);

  if (!quiz || !result) {
    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#111827",
            color: "white",
            fontSize: 48,
            fontWeight: 700,
          }}
        >
          VibeCheck
        </div>
      ),
      size
    );
  }

  const [from, to] = resolveGradient(result.color);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "#0f172a",
          color: "white",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 32,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            borderRadius: 44,
            padding: 54,
            background: `linear-gradient(135deg, ${from}, ${to})`,
            boxShadow: "0 20px 60px rgba(0,0,0,0.28)",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: 44,
              background:
                "radial-gradient(circle at top right, rgba(255,255,255,0.28), transparent 28%), radial-gradient(circle at bottom left, rgba(255,255,255,0.18), transparent 24%)",
            }}
          />

          <div style={{ display: "flex", justifyContent: "space-between", gap: 28, zIndex: 1 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, maxWidth: 820 }}>
              <div
                style={{
                  display: "flex",
                  fontSize: 24,
                  fontWeight: 700,
                  letterSpacing: 5,
                  textTransform: "uppercase",
                  opacity: 0.78,
                }}
              >
                VibeCheck Result
              </div>
              <div style={{ display: "flex", fontSize: 72, fontWeight: 900, lineHeight: 1.02 }}>
                {result.title}
              </div>
            </div>
            <div
              style={{
                display: "flex",
                minWidth: 150,
                height: 150,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 38,
                background: "rgba(255,255,255,0.18)",
                fontSize: 82,
              }}
            >
              {result.emoji}
            </div>
          </div>

          <div
            style={{
              zIndex: 1,
              display: "flex",
              flexDirection: "column",
              gap: 18,
              padding: 30,
              borderRadius: 34,
              background: "rgba(255,255,255,0.14)",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 22,
                fontWeight: 700,
                letterSpacing: 4,
                textTransform: "uppercase",
                opacity: 0.72,
              }}
            >
              Share caption
            </div>
            <div style={{ display: "flex", fontSize: 42, fontWeight: 700, lineHeight: 1.2 }}>
              "{result.shareText}"
            </div>
          </div>

          <div
            style={{
              zIndex: 1,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: 24,
              opacity: 0.84,
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <div style={{ display: "flex", fontWeight: 700 }}>{quiz.title}</div>
              <div style={{ display: "flex" }}>Take the quiz and compare your vibe.</div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 999,
                padding: "12px 22px",
                background: "rgba(255,255,255,0.14)",
                textTransform: "uppercase",
                fontWeight: 700,
                letterSpacing: 2,
              }}
            >
              vibecheck
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
