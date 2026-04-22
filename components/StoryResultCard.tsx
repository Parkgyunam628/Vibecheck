import { Quiz, QuizResult } from "@/lib/types";

export function StoryResultCard({
  result,
  quiz,
}: {
  result: QuizResult;
  quiz: Quiz;
}) {
  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br ${result.color}`}
      style={{ width: 540, height: 960, fontFamily: "system-ui, -apple-system, sans-serif" }}
    >
      {/* Background noise / glow layer */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(0,0,0,0.15),transparent_50%)]" />

      {/* VibeCheck label — top */}
      <div className="absolute top-12 left-0 right-0 flex justify-center">
        <div
          style={{
            background: "rgba(255,255,255,0.18)",
            backdropFilter: "blur(8px)",
            borderRadius: 999,
            border: "1px solid rgba(255,255,255,0.3)",
            padding: "6px 18px",
          }}
        >
          <span style={{ color: "rgba(255,255,255,0.9)", fontWeight: 700, fontSize: 13, letterSpacing: "0.2em", textTransform: "uppercase" }}>
            ✨ VibeCheck
          </span>
        </div>
      </div>

      {/* Center: emoji + title */}
      <div
        className="absolute left-0 right-0"
        style={{ top: "50%", transform: "translateY(-56%)", padding: "0 48px", textAlign: "center" }}
      >
        <div style={{ fontSize: 120, lineHeight: 1, marginBottom: 32 }}>{result.emoji}</div>
        <h1
          style={{
            color: "#fff",
            fontWeight: 900,
            fontSize: 48,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            marginBottom: 24,
            textShadow: "0 2px 16px rgba(0,0,0,0.2)",
          }}
        >
          {result.title}
        </h1>
        <div
          style={{
            background: "rgba(255,255,255,0.16)",
            backdropFilter: "blur(8px)",
            borderRadius: 20,
            padding: "20px 28px",
          }}
        >
          <p style={{ color: "rgba(255,255,255,0.95)", fontWeight: 600, fontSize: 20, lineHeight: 1.5 }}>
            "{result.shareText.split(" →")[0]}"
          </p>
        </div>
      </div>

      {/* Bottom: quiz name */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{ padding: "32px 48px 48px", textAlign: "center" }}
      >
        <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 15, fontWeight: 600 }}>
          {quiz.title}
        </p>
        <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 13, marginTop: 4 }}>
          vibecheck.app
        </p>
      </div>
    </div>
  );
}
