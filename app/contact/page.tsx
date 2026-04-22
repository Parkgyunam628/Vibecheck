import Link from "next/link";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | VibeCheck",
  description: "Get in touch with the VibeCheck team.",
};

export default function ContactPage() {
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
          <h1 className="text-3xl font-black text-gray-900 mb-2">Contact</h1>
          <p className="text-gray-500 mb-10">We'd love to hear from you.</p>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <div className="rounded-2xl bg-gray-50 p-6 border border-gray-100">
              <h2 className="font-bold text-gray-900 mb-1">General inquiries</h2>
              <p className="text-sm text-gray-500 mb-3">
                Quiz suggestions, feedback, or anything else.
              </p>
              <a
                href="mailto:kevin965546184644@gmail.com"
                className="inline-flex items-center gap-2 text-sm font-semibold text-purple-600 hover:text-purple-700"
              >
                ✉️ Send us an email
              </a>
            </div>

            <div className="rounded-2xl bg-gray-50 p-6 border border-gray-100">
              <h2 className="font-bold text-gray-900 mb-1">Found a bug?</h2>
              <p className="text-sm text-gray-500">
                Something broken or a quiz that doesn't make sense? Let us know and we'll fix it.
              </p>
            </div>
          </div>

          <div className="mt-10">
            <Link
              href="/"
              className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
            >
              ← Back to quizzes
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
