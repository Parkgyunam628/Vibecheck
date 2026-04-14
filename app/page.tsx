import { getAllQuizzes } from "@/lib/quizzes";
import { TestCard } from "@/components/TestCard";
import { AdBanner } from "@/components/AdBanner";

export default function HomePage() {
  const quizzes = getAllQuizzes();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-10">
        <div className="max-w-2xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">✨</span>
            <span className="font-bold text-xl text-gray-900">VibeCheck</span>
          </div>
          <span className="text-sm text-gray-400">Find your vibe →</span>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-8">
        {/* Hero */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Which one are you? 🤔
          </h1>
          <p className="text-gray-500 text-base">
            Viral personality tests you can actually share
          </p>
        </div>

        <AdBanner slot="top" />

        {/* Quiz grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {quizzes.map((quiz) => (
            <TestCard key={quiz.slug} quiz={quiz} />
          ))}
        </div>

        <div className="mt-10">
          <AdBanner slot="bottom" />
        </div>
      </main>

      <footer className="text-center text-xs text-gray-400 py-8 mt-8">
        © {new Date().getFullYear()} VibeCheck · Just for fun
      </footer>
    </div>
  );
}
