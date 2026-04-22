import Link from "next/link";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | VibeCheck",
  description: "VibeCheck Privacy Policy",
};

export default function PrivacyPage() {
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
          <h1 className="text-3xl font-black text-gray-900 mb-2">Privacy Policy</h1>
          <p className="text-gray-400 text-sm mb-10">Last updated: April 2025</p>

          <div className="space-y-8 text-gray-700 leading-relaxed text-sm">
            <section>
              <h2 className="text-base font-bold text-gray-900 mb-2">What we collect</h2>
              <p>
                VibeCheck does not require you to create an account or provide any personal
                information to take a quiz. Your quiz answers are processed in your browser
                and are not stored on our servers.
              </p>
              <p className="mt-2">
                We may use standard analytics tools (such as Google Analytics) to understand
                aggregate usage patterns — for example, how many people visit the site and
                which quizzes are most popular. This data is anonymized and does not identify
                individual users.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-gray-900 mb-2">Cookies</h2>
              <p>
                VibeCheck may use cookies for basic site functionality and analytics purposes.
                By using VibeCheck, you consent to the use of cookies in accordance with
                this policy.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-gray-900 mb-2">Third-party services</h2>
              <p>
                VibeCheck may display ads served by third parties such as Google AdSense.
                These services may use cookies to serve ads based on your browsing history.
                You can opt out of personalized advertising through your Google account settings
                or by visiting{" "}
                <a
                  href="https://www.aboutads.info"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:underline"
                >
                  aboutads.info
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-gray-900 mb-2">Sharing your result</h2>
              <p>
                When you share your quiz result, you are sharing a link or image that you
                choose to distribute. We do not automatically publish your result or share
                it with anyone without your action.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-gray-900 mb-2">Children</h2>
              <p>
                VibeCheck is intended for general audiences. We do not knowingly collect
                any personal information from children under the age of 13.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-gray-900 mb-2">Changes to this policy</h2>
              <p>
                We may update this privacy policy from time to time. The date at the top of
                this page indicates when it was last revised.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-gray-900 mb-2">Contact</h2>
              <p>
                Questions about this policy?{" "}
                <Link href="/contact" className="text-purple-600 hover:underline font-semibold">
                  Get in touch
                </Link>
                .
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
