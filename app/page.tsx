import { getAllQuizzes } from "@/lib/quizzes";
import { TestCard } from "@/components/TestCard";
import { FeaturedQuizCard } from "@/components/FeaturedQuizCard";
import { SurpriseMeButton } from "@/components/SurpriseMeButton";
import { QuizGrid } from "@/components/QuizGrid";
import { CompletionBadge } from "@/components/CompletionBadge";
import { Footer } from "@/components/Footer";
import { AdBanner } from "@/components/AdBanner";

export default function HomePage() {
  const quizzes = getAllQuizzes();
  const trendingQuizzes = quizzes.filter((q) => q.isTrending);
  const newQuizzes = quizzes.filter((q) => q.isNew);
  const featuredQuiz = trendingQuizzes[0] ?? quizzes[0];
  const allSlugs = quizzes.map((q) => q.slug);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-10">
        <div className="max-w-2xl mx-auto px-4 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl">✨</span>
            <span className="font-bold text-lg text-gray-900">VibeCheck</span>
          </div>
          <span className="text-xs font-medium text-gray-400 bg-gray-100 px-2.5 py-1 rounded-full">
            {quizzes.length} quizzes
          </span>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4">
        {/* Hero */}
        <section className="pt-10 pb-8 text-center">
          <h1 className="text-3xl font-black text-gray-900 mb-3 leading-tight">
            Quizzes worth sharing 🔗
          </h1>
          <p className="text-gray-500 text-base mb-6 max-w-sm mx-auto">
            Short personality tests that are more fun when your friends take them too.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <SurpriseMeButton slugs={allSlugs} />
            <CompletionBadge total={quizzes.length} />
          </div>
        </section>

        <AdBanner slot="top" />

        {/* Trending */}
        <section className="mt-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-bold text-gray-900 flex items-center gap-1.5">
              🔥 <span>Trending Now</span>
            </h2>
          </div>
          <FeaturedQuizCard quiz={featuredQuiz} badge="🔥 Trending" />
        </section>

        {/* New this week */}
        {newQuizzes.length > 0 && (
          <section className="mt-10">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-base font-bold text-gray-900 flex items-center gap-1.5">
                ✨ <span>Just Dropped</span>
              </h2>
              <span className="text-xs text-emerald-600 font-semibold bg-emerald-50 px-2.5 py-1 rounded-full">
                New
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {newQuizzes.map((quiz) => (
                <TestCard key={quiz.slug} quiz={quiz} />
              ))}
            </div>
          </section>
        )}

        {/* All Quizzes with category filter */}
        <section className="mt-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-bold text-gray-900">All Tests</h2>
            <span className="text-xs text-gray-400">{quizzes.length} total</span>
          </div>
          <QuizGrid quizzes={quizzes} />
        </section>

        <div className="mt-10">
          <AdBanner slot="bottom" />
        </div>
      </main>

      <Footer />
    </div>
  );
}
