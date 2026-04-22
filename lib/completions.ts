const KEY = "vc_completed";

export function markQuizCompleted(slug: string): void {
  if (typeof window === "undefined") return;
  const existing: string[] = JSON.parse(localStorage.getItem(KEY) ?? "[]");
  if (!existing.includes(slug)) {
    localStorage.setItem(KEY, JSON.stringify([...existing, slug]));
  }
}

export function getCompletedSlugs(): string[] {
  if (typeof window === "undefined") return [];
  return JSON.parse(localStorage.getItem(KEY) ?? "[]");
}
