import { notFound } from "next/navigation";
import { getQuizBySlug, getAllQuizzes } from "@/lib/quizzes";
import { QuizClient } from "@/components/QuizClient";

export async function generateStaticParams() {
  return getAllQuizzes().map((q) => ({ slug: q.slug }));
}

export default async function QuizPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const quiz = getQuizBySlug(slug);
  if (!quiz) notFound();

  return <QuizClient quiz={quiz} />;
}
