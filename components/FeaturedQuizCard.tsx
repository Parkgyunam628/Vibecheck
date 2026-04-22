import Link from "next/link";
import { Quiz } from "@/lib/types";

export function FeaturedQuizCard({ quiz, badge = "🔥 Trending" }: { quiz: Quiz; badge?: string }) {
  return (
    <Link href={`/test/${quiz.slug}`} className="block group">
      <div className="rounded-2xl overflow-hidden shadow-lg flex h-48 transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-0.5">
        <div
          className={`bg-gradient-to-br ${quiz.coverColor} w-2/5 flex-shrink-0 flex items-center justify-center`}
        >
          <span className="text-7xl drop-shadow-md">{quiz.emoji}</span>
        </div>
        <div className="bg-white flex-1 p-5 flex flex-col justify-between min-w-0">
          <div>
            <span className="inline-block text-xs font-bold bg-red-100 text-red-600 uppercase tracking-wide px-2 py-0.5 rounded-full mb-2">
              {badge}
            </span>
            <h3 className="font-bold text-gray-900 text-lg leading-tight line-clamp-2">
              {quiz.title}
            </h3>
            <p className="text-sm text-gray-500 mt-1 line-clamp-2">{quiz.description}</p>
          </div>
          <div className="flex items-center justify-between gap-2 mt-2">
            <span className="text-xs text-gray-400">
              {quiz.questions.length} questions · ~2 min
            </span>
            <span className="text-sm font-semibold text-purple-600 group-hover:text-purple-700 whitespace-nowrap">
              Play now →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
