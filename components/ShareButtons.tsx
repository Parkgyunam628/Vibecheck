"use client";

import { useMemo, useState, useEffect } from "react";
import { Quiz, QuizResult } from "@/lib/types";
import { trackEvent } from "@/lib/analytics";
import { SITE_URL } from "@/lib/site";

async function tryClipboardWrite(text: string): Promise<boolean> {
  try {
    if (
      typeof window !== "undefined" &&
      typeof navigator !== "undefined" &&
      navigator.clipboard &&
      window.isSecureContext
    ) {
      await navigator.clipboard.writeText(text);
      return true;
    }

    return false;
  } catch (error) {
    console.error("Clipboard write failed:", error);
    return false;
  }
}

export function ShareButtons({
  result,
  quiz,
}: {
  result: QuizResult;
  quiz: Quiz;
}) {
  const [copied, setCopied] = useState<"link" | "result" | null>(null);
  const [hasNativeShare, setHasNativeShare] = useState(false);
  const [manualCopyText, setManualCopyText] = useState<string | null>(null);
  const [manualCopyTitle, setManualCopyTitle] = useState<string>("");

  useEffect(() => {
    setHasNativeShare(typeof navigator !== "undefined" && !!navigator.share);
  }, []);

  const url =
    typeof window !== "undefined"
      ? window.location.href
      : `${SITE_URL}/test/${quiz.slug}/result/${result.id}`;

  const shareMessage = useMemo(
    () =>
      `${result.shareText}\n${url}`,
    [result.shareText, url]
  );

  function flashCopied(type: "link" | "result") {
    setCopied(type);
    setTimeout(() => setCopied(null), 2200);
  }

  async function copyLink() {
    const ok = await tryClipboardWrite(url);
    if (ok) {
      flashCopied("link");
      trackEvent("result_shared", { quiz_slug: quiz.slug, result_id: result.id, share_method: "copy_link" });
      return;
    }

    setManualCopyTitle("Copy link manually");
    setManualCopyText(url);
  }

  async function copyResult() {
    const ok = await tryClipboardWrite(shareMessage);
    if (ok) {
      flashCopied("result");
      trackEvent("result_shared", { quiz_slug: quiz.slug, result_id: result.id, share_method: "copy_caption" });
      return;
    }

    setManualCopyTitle("Copy result manually");
    setManualCopyText(shareMessage);
  }

  function shareTwitter() {
    trackEvent("result_shared", { quiz_slug: quiz.slug, result_id: result.id, share_method: "twitter" });
    const params = new URLSearchParams({
      text: `${result.shareText} #personalityquiz #quiz`,
      url,
    });
    window.open(
      `https://x.com/intent/post?${params.toString()}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  async function shareNative() {
    if (!navigator.share) return;

    try {
      trackEvent("result_shared", { quiz_slug: quiz.slug, result_id: result.id, share_method: "native" });
      await navigator.share({
        title: `${result.emoji} ${result.title}`,
        text: shareMessage,
        url,
      });
    } catch (error) {
      console.error("Native share failed:", error);
    }
  }

  return (
    <>
      <div className="flex flex-col gap-3">
        <div className="rounded-2xl border border-purple-100 bg-gradient-to-br from-purple-50 via-white to-pink-50 px-4 py-4">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-purple-500">
            Ready-to-share caption
          </p>
          <p className="mt-2 whitespace-pre-line text-sm font-medium leading-relaxed text-gray-700">
            {shareMessage}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {hasNativeShare && (
            <button
              type="button"
              onClick={shareNative}
              className="w-full rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-3.5 text-sm font-semibold text-white shadow-md transition-opacity hover:opacity-90"
            >
              📤 Share my result
            </button>
          )}

          <button
            type="button"
            onClick={copyResult}
            className="w-full rounded-2xl border border-purple-200 bg-white px-4 py-3.5 text-sm font-semibold text-purple-700 transition-colors hover:bg-purple-50"
          >
            {copied === "result" ? "✅ Result copied" : "🪄 Copy result + caption"}
          </button>

          <button
            type="button"
            onClick={shareTwitter}
            className="w-full rounded-2xl bg-black px-4 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-85"
          >
            𝕏 Post on X / Twitter
          </button>

          <button
            type="button"
            onClick={copyLink}
            className="w-full rounded-2xl bg-gray-100 px-4 py-3.5 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-200"
          >
            {copied === "link" ? "✅ Link copied" : "🔗 Copy link only"}
          </button>
        </div>
      </div>

      {manualCopyText && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="w-full max-w-md rounded-3xl bg-white p-5 shadow-2xl">
            <h3 className="text-lg font-bold text-gray-900">{manualCopyTitle}</h3>
            <p className="mt-2 text-sm text-gray-500">
              On this device, automatic copy may be blocked.
              Tap and hold the text below, then copy it manually.
            </p>

            <textarea
              readOnly
              value={manualCopyText}
              className="mt-4 h-40 w-full rounded-2xl border border-gray-200 bg-gray-50 p-3 text-sm text-gray-800"
              onFocus={(e) => e.target.select()}
            />

            <div className="mt-4 flex gap-3">
              <button
                type="button"
                onClick={() => setManualCopyText(null)}
                className="flex-1 rounded-2xl bg-gray-100 px-4 py-3 text-sm font-semibold text-gray-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
