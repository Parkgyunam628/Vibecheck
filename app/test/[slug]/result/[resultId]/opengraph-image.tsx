import { ImageResponse } from "next/og";
import { getQuizBySlug } from "@/lib/quizzes";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

const gradientMap: Record<string, [string, string]> = {
  "from-pink-400 to-purple-500": ["#f472b6", "#8b5cf6"],
  "from-blue-400 to-indigo-500": ["#60a5fa", "#6366f1"],
  "from-amber-400 to-orange-500": ["#fbbf24", "#f97316"],
  "from-emerald-400 to-teal-500": ["#34d399", "#14b8a6"],
  "from-fuchsia-500 to-violet-600": ["#d946ef", "#7c3aed"],
  "from-sky-500 to-blue-600": ["#0ea5e9", "#2563eb"],
};

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

  const [from, to] = gradientMap[result.color] ?? ["#8b5cf6", "#ec4899"];

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
              “{result.shareText}”
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
