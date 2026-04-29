import { notFound } from "next/navigation";
import Link from "next/link";
import { getQuizBySlug, getAllQuizzes, getRelatedQuizzes } from "@/lib/quizzes";
import { getTraits } from "@/data/traits";
import { SITE_URL } from "@/lib/site";
import { TestCard } from "@/components/TestCard";
import { AdBanner } from "@/components/AdBanner";
import { ShareButtons } from "@/components/ShareButtons";
import { DownloadResultCard } from "@/components/DownloadResultCard";
import { ResultReveal } from "@/components/ResultReveal";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";

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
  const url = `${SITE_URL}/test/${slug}/result/${resultId}`;
  return {
    title: `${result.emoji} ${result.title} | ${quiz.title} | VibeCheck`,
    description: result.description,
    alternates: { canonical: url },
    openGraph: {
      title: `I got "${result.title}" ${result.emoji}`,
      description: result.shareText,
      type: "website",
      url,
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
  const traits = getTraits(slug, resultId);

  return (
    <div className="min-h-screen bg-gray-50">
      <SiteHeader />
      <main className="max-w-xl mx-auto px-4 py-10">
        <ResultReveal>
          {/* Quiz context */}
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
            {quiz.title}
          </p>

          {/* Result card */}
          <div className="rounded-3xl overflow-hidden shadow-xl mb-6">
            <div
              className={`bg-gradient-to-br ${result.color} py-14 flex flex-col items-center gap-3`}
            >
              <span className="text-7xl">{result.emoji}</span>
              <h1 className="text-3xl font-black text-white text-center px-4 text-balance">
                {result.title}
              </h1>
              <p className="max-w-sm px-5 text-center text-sm font-medium leading-relaxed text-white/90">
                {result.shareText}
              </p>
            </div>
            <div className="bg-white p-6">
              <p className="text-gray-700 text-base leading-relaxed">
                {result.description}
              </p>
              {traits.length > 0 && (
                <div className="mt-5 pt-5 border-t border-gray-100">
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
                    If this is you
                  </p>
                  <ul className="space-y-2">
                    {traits.map((trait, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="mt-0.5 text-gray-300 shrink-0">→</span>
                        <span>{trait}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Ad */}
          <AdBanner slot="result" />

          {/* Share — primary action */}
          <div className="mt-6 bg-white rounded-3xl p-5 shadow-sm border border-gray-100">
            <h2 className="text-lg font-bold text-gray-900 mb-0.5">
              Send it. See what they get. 📲
            </h2>
            <p className="text-sm text-gray-400 mb-4">
              Most people are surprised by their friends&apos; results.
            </p>
            <DownloadResultCard result={result} quiz={quiz} />
            <div className="mt-4">
              <ShareButtons result={result} quiz={quiz} />
            </div>
          </div>

          {/* Next quiz — recommended */}
          {related.length > 0 && (
            <div className="mt-8">
              <div className="flex items-end justify-between gap-4 mb-3">
                <div>
                  <h2 className="text-base font-bold text-gray-900">What does your friend get? 👀</h2>
                  <p className="text-xs text-gray-400 mt-0.5">
                    Send them one of these and compare.
                  </p>
                </div>
                <Link
                  href="/"
                  className="text-xs font-semibold text-purple-600 hover:text-purple-700 whitespace-nowrap"
                >
                  All quizzes →
                </Link>
              </div>
              <div className="flex flex-col gap-4">
                {related.map((q) => (
                  <TestCard key={q.slug} quiz={q} source="recommended" />
                ))}
              </div>
            </div>
          )}

          {/* Retake */}
          <div className="mt-6 grid grid-cols-2 gap-3">
            <Link
              href={`/test/${quiz.slug}/quiz`}
              className="text-center py-3 rounded-xl border-2 border-gray-200 text-gray-500 font-semibold text-sm hover:bg-gray-50 transition-colors"
            >
              🔁 Retake
            </Link>
            <Link
              href="/"
              className="text-center py-3 rounded-xl border-2 border-gray-200 text-gray-500 font-semibold text-sm hover:bg-gray-50 transition-colors"
            >
              🏠 All quizzes
            </Link>
          </div>

          <div className="mt-8">
            <AdBanner slot="bottom" />
          </div>
        </ResultReveal>
      </main>

      <Footer />
    </div>
  );
}
