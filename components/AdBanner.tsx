"use client";

// AdBanner — drop in your Google AdSense script in app/layout.tsx
// and replace the placeholder with real ad units.
export function AdBanner({ slot }: { slot: "top" | "bottom" | "result" }) {
  return (
    <div
      className={`w-full flex items-center justify-center text-xs text-gray-400 border border-dashed border-gray-200 rounded-lg bg-gray-50 ${
        slot === "result" ? "h-20" : "h-16"
      }`}
    >
      {/* Replace with: <ins className="adsbygoogle" ... /> */}
      Ad
    </div>
  );
}
