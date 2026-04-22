"use client";

import { useState } from "react";
import { Quiz } from "@/lib/types";
import { TestCard } from "@/components/TestCard";

const ALL = "All";

export function QuizGrid({ quizzes }: { quizzes: Quiz[] }) {
  const categories = [ALL, ...Array.from(new Set(quizzes.map((q) => q.category)))];
  const [active, setActive] = useState(ALL);

  const filtered = active === ALL ? quizzes : quizzes.filter((q) => q.category === active);

  return (
    <div>
      <div className="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            className={`rounded-full px-4 py-1.5 text-sm font-semibold whitespace-nowrap transition-colors flex-shrink-0 ${
              active === cat
                ? "bg-gray-900 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filtered.map((quiz) => (
          <TestCard key={quiz.slug} quiz={quiz} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-gray-400 text-sm py-8">No quizzes in this category yet.</p>
      )}
    </div>
  );
}
