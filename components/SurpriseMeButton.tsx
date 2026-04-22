"use client";

import { useRouter } from "next/navigation";
import { trackEvent } from "@/lib/analytics";

export function SurpriseMeButton({ slugs }: { slugs: string[] }) {
  const router = useRouter();

  function handleClick() {
    const random = slugs[Math.floor(Math.random() * slugs.length)];
    trackEvent("surprise_me_clicked", { destination_slug: random });
    router.push(`/test/${random}`);
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="inline-flex items-center gap-2 rounded-full border-2 border-dashed border-purple-300 bg-white px-5 py-2.5 text-sm font-semibold text-purple-600 transition-all hover:border-purple-500 hover:bg-purple-50 hover:shadow-sm active:scale-95"
    >
      🎲 Surprise Me
    </button>
  );
}
