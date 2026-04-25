"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Quiz } from "@/lib/types";
import { calculateResult } from "@/lib/quizzes";
import { trackEvent } from "@/lib/analytics";
import { markQuizCompleted } from "@/lib/completions";
import { SiteHeader } from "@/components/SiteHeader";

export function QuizClient({ quiz }: { quiz: Quiz }) {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [selected, setSelected] = useState<string | null>(null);

  const question = quiz.questions[currentIndex];
  const progress = (currentIndex / quiz.questions.length) * 100;
  const isLast = currentIndex === quiz.questions.length - 1;
  const isFirst = currentIndex === 0;

  function handleSelect(optionId: string) {
    setSelected(optionId);
  }

  function handleNext() {
    if (!selected) return;

    const newAnswers = { ...answers, [question.id]: selected };
    setAnswers(newAnswers);

    if (isLast) {
      const resultId = calculateResult(quiz, newAnswers);
      markQuizCompleted(quiz.slug);
      trackEvent("quiz_completed", { quiz_slug: quiz.slug, result_id: resultId });
      router.push(`/test/${quiz.slug}/result/${resultId}`);
      return;
    }

    const nextQuestion = quiz.questions[currentIndex + 1];
    setCurrentIndex((i) => i + 1);
    setSelected(newAnswers[nextQuestion.id] ?? null);
  }

  function handlePrev() {
    if (isFirst) return;

    // Save current selection before going back so it's preserved if they return
    const newAnswers = selected
      ? { ...answers, [question.id]: selected }
      : answers;
    setAnswers(newAnswers);

    const prevQuestion = quiz.questions[currentIndex - 1];
    setCurrentIndex((i) => i - 1);
    setSelected(newAnswers[prevQuestion.id] ?? null);
  }

  return (
    <div className="h-dvh bg-gray-50 flex flex-col overflow-hidden">
      <SiteHeader />
      {/* Progress bar */}
      <div className="w-full h-1.5 bg-gray-200 flex-shrink-0">
        <motion.div
          className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        />
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="flex flex-col items-center px-4 py-8 max-w-xl mx-auto w-full">
          <p className="text-sm text-gray-400 font-medium mb-6 self-start">
            {currentIndex + 1} / {quiz.questions.length}
          </p>

          {/* Question fade — no x-slide to avoid mobile jitter */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="w-full"
            >
              <div className="w-full mb-8">
                <h2 className="text-xl font-bold text-gray-900 leading-snug">
                  {question.text}
                </h2>
              </div>

              <div className="w-full flex flex-col gap-3">
                {question.options.map((option) => {
                  const isSelected = selected === option.id;
                  return (
                    // Plain button — no Framer on options, prevents stagger flicker
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => handleSelect(option.id)}
                      className={`w-full text-left px-5 py-4 rounded-2xl border-2 font-medium text-sm touch-manipulation transition-colors duration-100 ${
                        isSelected
                          ? "border-purple-500 bg-purple-50 text-purple-900"
                          : "border-gray-200 bg-white text-gray-700 active:bg-gray-50"
                      }`}
                    >
                      {option.text}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 w-full flex gap-3">
            {!isFirst && (
              <button
                type="button"
                onClick={handlePrev}
                className="py-4 px-5 rounded-2xl font-bold text-base border-2 border-gray-200 bg-white text-gray-500 active:bg-gray-50 transition-colors duration-100 flex-shrink-0"
              >
                ← Back
              </button>
            )}
            <button
              type="button"
              onClick={handleNext}
              disabled={!selected}
              className={`flex-1 py-4 rounded-2xl font-bold text-base transition-all duration-200 ${
                selected
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg active:scale-[0.98]"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
            >
              {isLast ? "See My Result ✨" : "Next →"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
