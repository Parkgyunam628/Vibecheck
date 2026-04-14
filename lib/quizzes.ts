import { Quiz } from "@/lib/types";
import mainCharacter from "@/data/tests/main-character";
import geekLevel from "@/data/tests/geek-level";

const quizzes: Quiz[] = [mainCharacter, geekLevel];

export function getAllQuizzes(): Quiz[] {
  return quizzes;
}

export function getQuizBySlug(slug: string): Quiz | undefined {
  return quizzes.find((q) => q.slug === slug);
}

export function getRelatedQuizzes(slug: string, count = 3): Quiz[] {
  return quizzes.filter((q) => q.slug !== slug).slice(0, count);
}

export function calculateResult(
  quiz: Quiz,
  answers: Record<string, string>
): string {
  const scores: Record<string, number> = {};

  quiz.results.forEach((r) => {
    scores[r.id] = 0;
  });

  Object.entries(answers).forEach(([questionId, optionId]) => {
    const question = quiz.questions.find((q) => q.id === questionId);
    if (!question) return;
    const option = question.options.find((o) => o.id === optionId);
    if (!option) return;
    Object.entries(option.scores).forEach(([resultId, score]) => {
      scores[resultId] = (scores[resultId] || 0) + score;
    });
  });

  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
