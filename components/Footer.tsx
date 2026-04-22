import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-gray-100 mt-16 py-8 px-4">
      <div className="max-w-2xl mx-auto flex flex-col items-center gap-4 text-center">
        <div className="flex items-center gap-2">
          <span className="text-lg">✨</span>
          <span className="font-bold text-gray-800">VibeCheck</span>
        </div>
        <p className="text-sm text-gray-400">
          Short personality quizzes made for sharing.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-gray-400">
          <Link href="/about" className="hover:text-gray-600 transition-colors">
            About
          </Link>
          <span>·</span>
          <Link href="/privacy" className="hover:text-gray-600 transition-colors">
            Privacy Policy
          </Link>
          <span>·</span>
          <Link href="/contact" className="hover:text-gray-600 transition-colors">
            Contact
          </Link>
          <span>·</span>
          <span>© {new Date().getFullYear()} VibeCheck</span>
        </div>
      </div>
    </footer>
  );
}
