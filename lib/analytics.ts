declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export type EventName =
  | "quiz_clicked"           // any quiz card clicked (source tells where from)
  | "quiz_completed"         // reached result page
  | "result_shared"          // share button used
  | "result_downloaded"      // image/story saved
  | "category_filter_used"   // homepage category tab clicked
  | "surprise_me_clicked"    // random quiz button
  | "quiz_retaken";          // retake from result page

export interface EventProperties {
  quiz_slug?: string;
  result_id?: string;
  share_method?: string;     // "native" | "twitter" | "copy_caption" | "copy_link"
  download_type?: string;    // "card" | "story"
  source?: string;           // "featured" | "curated_social" | "recommended" | "browse"
  category?: string;         // for category_filter_used
  destination_slug?: string;
}

export function trackEvent(name: EventName, props?: EventProperties): void {
  if (typeof window === "undefined") return;

  if (typeof window.gtag === "function") {
    window.gtag("event", name, props);
  }

  if (process.env.NODE_ENV === "development") {
    console.log("[Analytics]", name, props ?? {});
  }
}
