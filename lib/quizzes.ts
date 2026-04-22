import { Quiz } from "@/lib/types";
import mainCharacter from "@/data/tests/main-character";
import geekLevel from "@/data/tests/geek-level";
import redFlag from "@/data/tests/red-flag";
import texterType from "@/data/tests/texter-type";
import villainEra from "@/data/tests/villain-era";
import travelType from "@/data/tests/travel-type";
import introvertTest from "@/data/tests/introvert-test";
import friendRole from "@/data/tests/friend-role";

const quizzes: Quiz[] = [
  mainCharacter,
  geekLevel,
  redFlag,
  texterType,
  villainEra,
  travelType,
  introvertTest,
  friendRole,
];

export function getAllQuizzes(): Quiz[] {
  return quizzes;
}

export function getQuizBySlug(slug: string): Quiz | undefined {
  return quizzes.find((q) => q.slug === slug);
}

export function getRelatedQuizzes(slug: string, count = 3): Quiz[] {
  const current = getQuizBySlug(slug);
  const others = quizzes.filter((q) => q.slug !== slug);

  if (!current) return others.slice(0, count);

  // Score by tag overlap + same category
  const scored = others.map((q) => {
    const tagOverlap = q.tags.filter((t) => current.tags.includes(t)).length;
    const sameCategory = q.category === current.category ? 1 : 0;
    return { quiz: q, score: tagOverlap + sameCategory };
  });

  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, count)
    .map((s) => s.quiz);
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
