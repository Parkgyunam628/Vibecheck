import Link from "next/link";
import { ReactNode } from "react";

export function SiteHeader({ children }: { children?: ReactNode }) {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-10">
      <div className="max-w-2xl mx-auto px-4 py-3.5 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <span className="text-xl">✨</span>
          <span className="font-bold text-lg text-gray-900">VibeCheck</span>
        </Link>
        {children}
      </div>
    </header>
  );
}
