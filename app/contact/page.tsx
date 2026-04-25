import Link from "next/link";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import type { Metadata } from "next";

// To update the contact email, change this one constant
const CONTACT_EMAIL = "contact@my-vibecheck.com";

export const metadata: Metadata = {
  title: "Contact | VibeCheck",
  description: "Get in touch with the VibeCheck team.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <SiteHeader />

      <main className="flex-1 max-w-2xl mx-auto px-4 py-12 w-full">
        <div className="max-w-lg">
          <h1 className="text-3xl font-black text-gray-900 mb-2">Contact</h1>
          <p className="text-gray-500 mb-10">
            Questions, feedback, or a quiz idea? We read everything.
          </p>

          <div className="space-y-4">
            <div className="rounded-2xl bg-gray-50 p-6 border border-gray-100">
              <h2 className="font-bold text-gray-900 mb-1">Say hello</h2>
              <p className="text-sm text-gray-500 mb-4">
                Quiz suggestions, feedback, collabs, or anything else —
                drop us a line.
              </p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-purple-600 hover:text-purple-700 transition-colors"
              >
                ✉️ {CONTACT_EMAIL}
              </a>
            </div>

            <div className="rounded-2xl bg-gray-50 p-6 border border-gray-100">
              <h2 className="font-bold text-gray-900 mb-1">Found a bug?</h2>
              <p className="text-sm text-gray-500 mb-4">
                Something broken, a quiz that doesn&apos;t add up, or a result
                that feels off? Let us know.
              </p>
              <a
                href={`mailto:${CONTACT_EMAIL}?subject=Bug%20report`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-purple-600 hover:text-purple-700 transition-colors"
              >
                🐛 Report a bug
              </a>
            </div>

            <div className="rounded-2xl bg-gray-50 p-6 border border-gray-100">
              <h2 className="font-bold text-gray-900 mb-1">Have a quiz idea?</h2>
              <p className="text-sm text-gray-500 mb-4">
                We&apos;re always adding new quizzes. If you have an idea that
                would go viral in your group chat, send it over.
              </p>
              <a
                href={`mailto:${CONTACT_EMAIL}?subject=Quiz%20idea`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-purple-600 hover:text-purple-700 transition-colors"
              >
                💡 Send a quiz idea
              </a>
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
