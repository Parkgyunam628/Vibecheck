import Link from "next/link";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | VibeCheck",
  description:
    "VibeCheck is a collection of short personality quizzes designed for sharing. Fast, visual, built for mobile — take a quiz and compare results with your group.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-2xl mx-auto px-4 py-3.5 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-gray-900">
            <span>✨</span>
            <span>VibeCheck</span>
          </Link>
        </div>
      </header>

      <main className="flex-1 max-w-2xl mx-auto px-4 py-12 w-full">
        <div className="max-w-lg">
          <h1 className="text-3xl font-black text-gray-900 mb-2">About VibeCheck</h1>
          <p className="text-gray-500 mb-10">Short personality tests. Made for sharing.</p>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-2">What is VibeCheck?</h2>
              <p>
                VibeCheck is a collection of short, fun personality quizzes designed to be taken
                and shared with friends. Each quiz takes around 2 minutes, gives you a result
                that actually feels like you (or hilariously doesn't), and comes with a ready-made
                caption to send to whoever you're thinking about right now.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-2">Why we built it</h2>
              <p>
                We wanted a quiz site that feels more like something you'd find on your For You
                page than a corporate personality test. Fast, visual, built for mobile, and
                genuinely fun to compare with your group chat.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-2">Just for fun</h2>
              <p>
                These quizzes are for entertainment only. They won't tell you your future,
                diagnose anything, or make life decisions. They will tell you whether you have
                main character energy, though.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-2">Get in touch</h2>
              <p>
                Have a quiz idea, a suggestion, or found something broken?{" "}
                <Link href="/contact" className="text-purple-600 hover:underline font-semibold">
                  Contact us
                </Link>
                .
              </p>
            </section>
          </div>

          <div className="mt-12">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-5 py-3 text-sm font-semibold text-white shadow hover:shadow-md transition-shadow"
            >
              ✨ Take a quiz
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
