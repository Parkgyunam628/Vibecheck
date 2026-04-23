import { getAllQuizzes } from "@/lib/quizzes";
import { TestCard } from "@/components/TestCard";
import { FeaturedQuizCard } from "@/components/FeaturedQuizCard";
import { SurpriseMeButton } from "@/components/SurpriseMeButton";
import { QuizGrid } from "@/components/QuizGrid";
import { CompletionBadge } from "@/components/CompletionBadge";
import { Footer } from "@/components/Footer";
import { AdBanner } from "@/components/AdBanner";

// Curated section slugs — update as quiz library grows
const SEND_TO_A_FRIEND = ["easy-to-love-test", "dater-type-test", "good-friend-test"];
const FEATURED_SLUG = "main-character-test";

export default function HomePage() {
  const quizzes = getAllQuizzes();
  const slugMap = Object.fromEntries(quizzes.map((q) => [q.slug, q]));

  const featuredQuiz = slugMap[FEATURED_SLUG] ?? quizzes[0];
  const sendToFriendQuizzes = SEND_TO_A_FRIEND.flatMap((s) =>
    slugMap[s] ? [slugMap[s]] : []
  );
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
          <h1 className="text-3xl font-black text-gray-900 mb-2 leading-tight">
            Which one are you? 🤔
          </h1>
          <p className="text-gray-400 text-sm mb-1">
            Short quizzes. Sharp results. Worth sending to friends.
          </p>
          <p className="text-gray-300 text-xs mb-6 tracking-wide">
            🎭 Personality &nbsp;·&nbsp; 💙 Relationships &nbsp;·&nbsp; ✈️ Lifestyle
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <SurpriseMeButton slugs={allSlugs} />
            <CompletionBadge total={quizzes.length} />
          </div>
        </section>

        <AdBanner slot="top" />

        {/* Everyone's taking this */}
        <section className="mt-10">
          <h2 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">
            🔥 Everyone&apos;s taking this
          </h2>
          <FeaturedQuizCard quiz={featuredQuiz} badge="🔥 Most popular" />
        </section>

        {/* Send to a friend */}
        {sendToFriendQuizzes.length > 0 && (
          <section className="mt-10">
            <div className="flex items-baseline justify-between mb-3">
              <div>
                <h2 className="text-sm font-bold text-gray-400 uppercase tracking-wider">
                  📲 Tag someone in this
                </h2>
                <p className="text-xs text-gray-400 mt-0.5">
                  Better when you compare with friends
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {sendToFriendQuizzes.map((quiz) => (
                <TestCard key={quiz.slug} quiz={quiz} source="curated_social" />
              ))}
            </div>
          </section>
        )}

        {/* All Tests */}
        <section className="mt-10">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-bold text-gray-400 uppercase tracking-wider">
              🗂️ All Tests
            </h2>
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
