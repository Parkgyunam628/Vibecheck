"use client";

import { useRef, useState } from "react";
import { toPng } from "html-to-image";
import { Quiz, QuizResult } from "@/lib/types";
import { ShareResultCard } from "@/components/ShareResultCard";
import { StoryResultCard } from "@/components/StoryResultCard";
import { trackEvent } from "@/lib/analytics";

export function DownloadResultCard({
  result,
  quiz,
}: {
  result: QuizResult;
  quiz: Quiz;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const storyCardRef = useRef<HTMLDivElement>(null);
  const [downloading, setDownloading] = useState(false);
  const [downloadingStory, setDownloadingStory] = useState(false);

  async function captureAndShare(
    ref: React.RefObject<HTMLDivElement | null>,
    filename: string,
    pixelRatio: number,
    setLoading: (v: boolean) => void
  ) {
    if (!ref.current) return;
    setLoading(true);
    try {
      const dataUrl = await toPng(ref.current, { pixelRatio });
      const res = await fetch(dataUrl);
      const blob = await res.blob();
      const file = new File([blob], filename, { type: "image/png" });

      const isMobile = navigator.maxTouchPoints > 0;
      if (isMobile && navigator.canShare?.({ files: [file] })) {
        await navigator.share({ files: [file] });
      } else {
        const link = document.createElement("a");
        link.download = filename;
        link.href = dataUrl;
        link.click();
      }
    } catch (error) {
      if (error instanceof Error && error.name !== "AbortError") {
        console.error("Failed to save image:", error);
      }
    } finally {
      setLoading(false);
    }
  }

  function downloadCard() {
    trackEvent("result_downloaded", { quiz_slug: quiz.slug, result_id: result.id, share_method: "card" });
    captureAndShare(cardRef, `${quiz.slug}-${result.id}.png`, 2, setDownloading);
  }

  function downloadStory() {
    trackEvent("result_downloaded", { quiz_slug: quiz.slug, result_id: result.id, share_method: "story" });
    captureAndShare(storyCardRef, `${quiz.slug}-${result.id}-story.png`, 2, setDownloadingStory);
  }

  return (
    <div className="flex flex-col gap-3">
      <div ref={cardRef}>
        <ShareResultCard result={result} quiz={quiz} />
      </div>

      {/* Hidden story card — captured at 540×960, output at 1080×1920 */}
      <div
        style={{
          position: "absolute",
          left: "-9999px",
          top: 0,
          pointerEvents: "none",
          userSelect: "none",
        }}
      >
        <div ref={storyCardRef}>
          <StoryResultCard result={result} quiz={quiz} />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <button
          type="button"
          onClick={downloadCard}
          disabled={downloading || downloadingStory}
          className="rounded-2xl border border-gray-200 bg-white px-4 py-3.5 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50 disabled:opacity-60"
        >
          {downloading ? "⏳ Saving..." : "🖼️ Save as image"}
        </button>
        <button
          type="button"
          onClick={downloadStory}
          disabled={downloading || downloadingStory}
          className="rounded-2xl border border-purple-200 bg-white px-4 py-3.5 text-sm font-semibold text-purple-700 transition-colors hover:bg-purple-50 disabled:opacity-60"
        >
          {downloadingStory ? "⏳ Saving..." : "📱 Save as Story"}
        </button>
      </div>
    </div>
  );
}
