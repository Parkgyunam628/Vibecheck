import { notFound } from "next/navigation";
import Link from "next/link";
import { getQuizBySlug, getAllQuizzes, getRelatedQuizzes } from "@/lib/quizzes";
import { TestCard } from "@/components/TestCard";
import { AdBanner } from "@/components/AdBanner";
import { ShareButtons } from "@/components/ShareButtons";
import { ShareResultCard } from "@/components/ShareResultCard";

export async function generateStaticParams() {
  const params: { slug: string; resultId: string }[] = [];
  getAllQuizzes().forEach((quiz) => {
    quiz.results.forEach((result) => {
      params.push({ slug: quiz.slug, resultId: result.id });
    });
  });
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; resultId: string }>;
}) {
  const { slug, resultId } = await params;
  const quiz = getQuizBySlug(slug);
  const result = quiz?.results.find((r) => r.id === resultId);
  if (!quiz || !result) return {};
  return {
    title: `${result.emoji} ${result.title} | ${quiz.title} | VibeCheck`,
    description: result.description,
    openGraph: {
      title: `I got "${result.title}" ${result.emoji}`,
      description: result.shareText,
      images: [{ url: `/test/${slug}/result/${resultId}/opengraph-image` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `I got "${result.title}" ${result.emoji}`,
      description: result.shareText,
      images: [`/test/${slug}/result/${resultId}/opengraph-image`],
    },
  };
}

export default async function ResultPage({
  params,
}: {
  params: Promise<{ slug: string; resultId: string }>;
}) {
  const { slug, resultId } = await params;
  const quiz = getQuizBySlug(slug);
  if (!quiz) notFound();

  const result = quiz.results.find((r) => r.id === resultId);
  if (!result) notFound();

  const related = getRelatedQuizzes(slug, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-xl mx-auto px-4 py-10">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-100 bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-purple-500 shadow-sm">
          <span>Shareable result</span>
          <span className="text-gray-300">•</span>
          <span>{quiz.category}</span>
        </div>

        {/* Result card */}
        <div className="rounded-3xl overflow-hidden shadow-xl mb-6">
          <div
            className={`bg-gradient-to-br ${result.color} py-14 flex flex-col items-center gap-3`}
          >
            <span className="text-7xl">{result.emoji}</span>
            <h1 className="text-3xl font-black text-white text-center px-4 text-balance">
              {result.title}
            </h1>
            <p className="max-w-sm px-5 text-center text-sm font-medium leading-relaxed text-white/88">
              {result.shareText}
            </p>
          </div>
          <div className="bg-white p-6">
            <p className="text-gray-700 text-base leading-relaxed">
              {result.description}
            </p>
          </div>
        </div>

        {/* Ad */}
        <AdBanner slot="result" />

        {/* Share */}
        <div className="mt-6 bg-white rounded-[28px] p-5 shadow-sm border border-gray-100">
          <div className="flex items-start justify-between gap-3 mb-4">
            <div>
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                Post your result
              </p>
              <h2 className="mt-1 text-xl font-bold text-gray-900">
                Make it easy to send and compare
              </h2>
            </div>
            <div className="rounded-full bg-purple-50 px-3 py-1 text-xs font-semibold text-purple-600 whitespace-nowrap">
              share-first
            </div>
          </div>

          <ShareResultCard result={result} quiz={quiz} />

          <div className="mt-4 rounded-2xl bg-gray-50 px-4 py-3 text-sm text-gray-600">
            Copy the caption, drop it in a DM or story, then tell your friends to compare what they get.
          </div>

          <div className="mt-4">
            <ShareButtons result={result} quiz={quiz} />
          </div>
        </div>

        {/* Retake */}
        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
          <Link
            href={`/test/${quiz.slug}`}
            className="text-center py-3 rounded-xl border-2 border-purple-200 text-purple-600 font-semibold text-sm hover:bg-purple-50 transition-colors"
          >
            🔁 Retake
          </Link>
          <Link
            href={`/test/${quiz.slug}/quiz`}
            className="text-center py-3 rounded-xl border-2 border-pink-200 text-pink-600 font-semibold text-sm hover:bg-pink-50 transition-colors"
          >
            ⚡ Play again now
          </Link>
          <Link
            href="/"
            className="text-center py-3 rounded-xl border-2 border-gray-200 text-gray-600 font-semibold text-sm hover:bg-gray-50 transition-colors"
          >
            🏠 All Tests
          </Link>
        </div>

        {/* Related tests */}
        {related.length > 0 && (
          <div className="mt-10">
            <div className="flex items-end justify-between gap-4 mb-4">
              <div>
                <h2 className="text-lg font-bold text-gray-900">You might also like 👀</h2>
                <p className="text-sm text-gray-500 mt-1">
                  Keep the streak going with another quick, shareable test.
                </p>
              </div>
              <Link href="/" className="text-sm font-semibold text-purple-600 hover:text-purple-700">
                Explore all
              </Link>
            </div>
            <div className="flex flex-col gap-4">
              {related.map((q) => (
                <TestCard key={q.slug} quiz={q} />
              ))}
            </div>
          </div>
        )}

        <div className="mt-8">
          <AdBanner slot="bottom" />
        </div>
      </main>
    </div>
  );
}
