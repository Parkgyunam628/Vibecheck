"use client";

import { useEffect, useState } from "react";
import { getCompletedSlugs } from "@/lib/completions";

export function CompletionBadge({ total }: { total: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(getCompletedSlugs().length);
  }, []);

  if (count === 0) return null;

  const isDone = count >= total;

  return (
    <div className="inline-flex items-center gap-1.5 rounded-full bg-purple-50 border border-purple-100 px-3 py-1 text-xs font-semibold text-purple-600">
      {isDone ? "🏆" : "✅"}{" "}
      {isDone
        ? `You've done all ${total}!`
        : `${count} of ${total} completed`}
    </div>
  );
}
