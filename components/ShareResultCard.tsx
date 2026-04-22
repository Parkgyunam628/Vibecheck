import { Quiz, QuizResult } from "@/lib/types";
import { DISPLAY_URL } from "@/lib/site";

export function ShareResultCard({
  result,
  quiz,
}: {
  result: QuizResult;
  quiz: Quiz;
}) {
  return (
    <div className="relative overflow-hidden rounded-[28px] bg-[#111827] p-[1px] shadow-xl">
      <div
        className={`relative overflow-hidden rounded-[27px] bg-gradient-to-br ${result.color} px-6 py-7 text-white`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.32),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.22),transparent_24%)]" />

        <div className="relative">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-white/70">
                VibeCheck Result
              </p>
              <p className="mt-2 text-balance text-2xl font-black leading-tight sm:text-3xl">
                {result.title}
              </p>
            </div>
            <div className="rounded-3xl bg-white/18 px-4 py-3 text-5xl shadow-sm backdrop-blur-sm">
              {result.emoji}
            </div>
          </div>

          <div className="mt-5 rounded-3xl bg-white/16 p-4 backdrop-blur-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/70">
              Share caption
            </p>
            <p className="mt-2 text-pretty text-lg font-semibold leading-snug text-white">
              “{result.shareText}”
            </p>
          </div>

          <div className="mt-5 text-sm text-white/78">
            <div className="flex items-center justify-between gap-4">
              <p className="font-semibold">{quiz.title}</p>
              <div className="rounded-full border border-white/20 bg-white/14 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] whitespace-nowrap">
                vibecheck
              </div>
            </div>
            <p className="mt-1 text-xs text-white/60 break-all">{DISPLAY_URL}/test/{quiz.slug}/result/{result.id}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
