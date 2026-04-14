"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Quiz } from "@/lib/types";
import { calculateResult } from "@/lib/quizzes";

export function QuizClient({ quiz }: { quiz: Quiz }) {
  const router = useRouter();
  const topRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [selected, setSelected] = useState<string | null>(null);
  const [animating, setAnimating] = useState(false);


  const question = quiz.questions[currentIndex];
  const progress = (currentIndex / quiz.questions.length) * 100;
  const isLast = currentIndex === quiz.questions.length - 1;

  function handleSelect(optionId: string) {
    if (animating) return;
    setSelected(optionId);
  }

  function handleNext() {
    if (!selected || animating) return;
    setAnimating(true);

    const newAnswers = { ...answers, [question.id]: selected };
    setAnswers(newAnswers);

    if (isLast) {
      const resultId = calculateResult(quiz, newAnswers);
      router.push(`/test/${quiz.slug}/result/${resultId}`);
      return;
    }

    setTimeout(() => {
      setCurrentIndex((i) => i + 1);
      setSelected(null);
      setAnimating(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 200);
  }

  return (
    <div ref={topRef} className="min-h-screen bg-gray-50 flex flex-col">
      <div className="w-full h-1.5 bg-gray-200">
        <div
          className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="flex-1 flex flex-col items-center px-4 py-8 max-w-xl mx-auto w-full">
        <p className="text-sm text-gray-400 font-medium mb-6 self-start">
          {currentIndex + 1} / {quiz.questions.length}
        </p>

        <div className="w-full mb-8">
          <h2 className="text-xl font-bold text-gray-900 leading-snug">
            {question.text}
          </h2>
        </div>

        <div className="w-full flex flex-col gap-3">
          {question.options.map((option) => {
            const isSelected = selected === option.id;
            return (
              <button
                key={option.id}
                data-option-id={option.id}
                type="button"
                onClick={() => handleSelect(option.id)}
                className={`w-full text-left px-5 py-4 rounded-2xl border-2 font-medium text-sm transition-all duration-150 touch-manipulation ${
                  isSelected
                    ? "border-purple-500 bg-purple-50 text-purple-900 shadow-md scale-[1.01]"
                    : "border-gray-200 bg-white text-gray-700 hover:border-purple-300 hover:bg-purple-50/30"
                }`}
              >
                {option.text}
              </button>
            );
          })}
        </div>

        <button
          type="button"
          onClick={handleNext}
          disabled={!selected}
          className={`mt-8 w-full py-4 rounded-2xl font-bold text-base transition-all duration-150 ${
            selected
              ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg hover:shadow-xl hover:scale-[1.01]"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
        >
          {isLast ? "See My Result ✨" : "Next →"}
        </button>
      </div>
    </div>
  );
}
