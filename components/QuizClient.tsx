"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Quiz } from "@/lib/types";
import { calculateResult } from "@/lib/quizzes";
import { trackEvent } from "@/lib/analytics";
import { markQuizCompleted } from "@/lib/completions";

export function QuizClient({ quiz }: { quiz: Quiz }) {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [selected, setSelected] = useState<string | null>(null);
  const [direction, setDirection] = useState(1);

  const question = quiz.questions[currentIndex];
  const progress = ((currentIndex + (selected ? 0.5 : 0)) / quiz.questions.length) * 100;
  const isLast = currentIndex === quiz.questions.length - 1;

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

    setDirection(1);
    setCurrentIndex((i) => i + 1);
    setSelected(null);
  }

  return (
    <div className="h-dvh bg-gray-50 flex flex-col overflow-hidden">
      {/* Progress bar */}
      <div className="w-full h-1.5 bg-gray-200 flex-shrink-0">
        <motion.div
          className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="flex flex-col items-center px-4 py-8 max-w-xl mx-auto w-full">
          <p className="text-sm text-gray-400 font-medium mb-6 self-start">
            {currentIndex + 1} / {quiz.questions.length}
          </p>

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -32 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="w-full"
            >
              <div className="w-full mb-8">
                <h2 className="text-xl font-bold text-gray-900 leading-snug">
                  {question.text}
                </h2>
              </div>

              <div className="w-full flex flex-col gap-3">
                {question.options.map((option, i) => {
                  const isSelected = selected === option.id;
                  return (
                    <motion.button
                      key={option.id}
                      type="button"
                      onClick={() => handleSelect(option.id)}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.18, delay: i * 0.05, ease: "easeOut" }}
                      className={`w-full text-left px-5 py-4 rounded-2xl border-2 font-medium text-sm transition-all duration-150 touch-manipulation ${
                        isSelected
                          ? "border-purple-500 bg-purple-50 text-purple-900 shadow-md scale-[1.01]"
                          : "border-gray-200 bg-white text-gray-700 hover:border-purple-300 hover:bg-purple-50/30"
                      }`}
                    >
                      {option.text}
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>

          <motion.button
            type="button"
            onClick={handleNext}
            disabled={!selected}
            animate={{
              scale: selected ? 1 : 0.97,
              opacity: selected ? 1 : 0.5,
            }}
            whileTap={selected ? { scale: 0.97 } : {}}
            transition={{ duration: 0.15 }}
            className={`mt-8 w-full py-4 rounded-2xl font-bold text-base transition-colors duration-150 ${
              selected
                ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg cursor-pointer"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            {isLast ? "See My Result ✨" : "Next →"}
          </motion.button>
        </div>
      </div>
    </div>
  );
}
