import { Quiz } from "@/lib/types";
import mainCharacter from "@/data/tests/main-character";
import geekLevel from "@/data/tests/geek-level";
import redFlag from "@/data/tests/red-flag";
import texterType from "@/data/tests/texter-type";
import villainEra from "@/data/tests/villain-era";
import travelType from "@/data/tests/travel-type";
import introvertTest from "@/data/tests/introvert-test";
import friendRole from "@/data/tests/friend-role";
import daterType from "@/data/tests/dater-type";
import easyToLove from "@/data/tests/easy-to-love";
import goodFriend from "@/data/tests/good-friend";
import auraTest from "@/data/tests/aura-test";
import situationshipTest from "@/data/tests/situationship-test";
import crushModeTest from "@/data/tests/crush-mode-test";
import friendRedFlagTest from "@/data/tests/friend-red-flag-test";
import cityEnergyTest from "@/data/tests/city-energy-test";

const quizzes: Quiz[] = [
  mainCharacter,
  geekLevel,
  redFlag,
  texterType,
  villainEra,
  travelType,
  introvertTest,
  friendRole,
  daterType,
  easyToLove,
  goodFriend,
  auraTest,
  situationshipTest,
  crushModeTest,
  friendRedFlagTest,
  cityEnergyTest,
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

  const scored = others.map((q) => {
    const tagOverlap = q.tags.filter((t) => current.tags.includes(t)).length;
    const sameCategory = q.category === current.category ? 1 : 0;
    return { quiz: q, score: tagOverlap * 2 + sameCategory };
  });

  scored.sort((a, b) => b.score - a.score);

  // Enforce diversity: at most 1 quiz from the same category in results
  const result: typeof scored = [];
  let sameCatCount = 0;

  for (const item of scored) {
    if (result.length >= count) break;
    if (item.quiz.category === current.category) {
      if (sameCatCount < 1) { result.push(item); sameCatCount++; }
    } else {
      result.push(item);
    }
  }

  // Fill remaining slots with next best if needed
  if (result.length < count) {
    for (const item of scored) {
      if (result.length >= count) break;
      if (!result.includes(item)) result.push(item);
    }
  }

  return result.map((s) => s.quiz);
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
