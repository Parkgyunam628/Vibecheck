"use client";

import { useRef, useState } from "react";
import { toPng } from "html-to-image";
import { Quiz, QuizResult } from "@/lib/types";
import { ShareResultCard } from "@/components/ShareResultCard";

export function DownloadResultCard({
  result,
  quiz,
}: {
  result: QuizResult;
  quiz: Quiz;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [downloading, setDownloading] = useState(false);

  async function downloadPng() {
    if (!cardRef.current) return;
    setDownloading(true);
    try {
      const dataUrl = await toPng(cardRef.current, { pixelRatio: 2 });
      const res = await fetch(dataUrl);
      const blob = await res.blob();
      const file = new File([blob], `${quiz.slug}-${result.id}.png`, { type: "image/png" });

      if (navigator.canShare?.({ files: [file] })) {
        await navigator.share({ files: [file] });
      } else {
        const link = document.createElement("a");
        link.download = file.name;
        link.href = dataUrl;
        link.click();
      }
    } catch (error) {
      if (error instanceof Error && error.name !== "AbortError") {
        console.error("Failed to save image:", error);
      }
    } finally {
      setDownloading(false);
    }
  }

  return (
    <div className="flex flex-col gap-3">
      <div ref={cardRef}>
        <ShareResultCard result={result} quiz={quiz} />
      </div>
      <button
        type="button"
        onClick={downloadPng}
        disabled={downloading}
        className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3.5 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50 disabled:opacity-60"
      >
        {downloading ? "⏳ Saving..." : "🖼️ Save as image"}
      </button>
    </div>
  );
}
