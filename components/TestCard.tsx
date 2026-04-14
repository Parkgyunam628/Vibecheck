import Link from "next/link";
import { Quiz } from "@/lib/types";

export function TestCard({ quiz }: { quiz: Quiz }) {
  return (
    <Link href={`/test/${quiz.slug}`} className="block group">
      <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
        <div
          className={`bg-gradient-to-br ${quiz.coverColor} h-36 flex items-center justify-center`}
        >
          <span className="text-6xl">{quiz.emoji}</span>
        </div>
        <div className="p-4 bg-white">
          <span className="text-xs font-semibold text-purple-500 uppercase tracking-wide">
            {quiz.category}
          </span>
          <h3 className="font-bold text-gray-900 mt-1 text-base leading-tight">
            {quiz.title}
          </h3>
          <p className="text-sm text-gray-500 mt-1 line-clamp-2">
            {quiz.description}
          </p>
          <div className="mt-3 flex flex-wrap gap-1">
            {quiz.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
