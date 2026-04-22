import { notFound } from "next/navigation";
import Link from "next/link";
import { getQuizBySlug, getAllQuizzes } from "@/lib/quizzes";
import { AdBanner } from "@/components/AdBanner";
import { Footer } from "@/components/Footer";

export async function generateStaticParams() {
  return getAllQuizzes().map((q) => ({ slug: q.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const quiz = getQuizBySlug(slug);
  if (!quiz) return {};
  return {
    title: `${quiz.title} | VibeCheck`,
    description: quiz.description,
  };
}

export default async function TestIntroPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const quiz = getQuizBySlug(slug);
  if (!quiz) notFound();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12 max-w-xl mx-auto w-full">

        {/* Cover card */}
        <div className="w-full rounded-3xl overflow-hidden shadow-xl mb-8">
          <div
            className={`bg-gradient-to-br ${quiz.coverColor} h-52 flex items-center justify-center`}
          >
            <span className="text-8xl">{quiz.emoji}</span>
          </div>
          <div className="bg-white p-6">
            <span className="text-xs font-semibold text-purple-500 uppercase tracking-wide">
              {quiz.category}
            </span>
            <h1 className="text-2xl font-bold text-gray-900 mt-1 leading-tight">
              {quiz.title}
            </h1>
            <p className="text-gray-500 mt-2 text-base">{quiz.description}</p>
            <div className="mt-4 flex items-center gap-3 text-sm text-gray-400">
              <span>🎯 {quiz.questions.length} questions</span>
              <span>·</span>
              <span>⏱ ~2 minutes</span>
            </div>
          </div>
        </div>

        <AdBanner slot="top" />

        {/* Result teasers */}
        <div className="w-full mt-8">
          <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
            What will you get?
          </p>
          <div className="grid grid-cols-2 gap-2">
            {quiz.results.map((result) => (
              <div
                key={result.id}
                className={`rounded-xl bg-gradient-to-br ${result.color} p-3 flex items-center gap-2.5`}
              >
                <span className="text-2xl flex-shrink-0">{result.emoji}</span>
                <span className="text-sm font-bold text-white leading-tight line-clamp-2">
                  {result.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <Link
          href={`/test/${quiz.slug}/quiz`}
          className="mt-8 w-full py-4 rounded-2xl font-bold text-lg text-center text-white bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg hover:shadow-xl hover:scale-[1.01] transition-all duration-150"
        >
          Start the Test ✨
        </Link>

        <Link
          href="/"
          className="mt-4 text-sm text-gray-400 hover:text-gray-600 transition-colors"
        >
          ← All Tests
        </Link>
      </main>
      <Footer />
    </div>
  );
}
