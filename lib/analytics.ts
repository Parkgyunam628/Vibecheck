type EventName =
  | "quiz_started"
  | "quiz_completed"
  | "result_downloaded"
  | "result_shared"
  | "next_quiz_clicked"
  | "quiz_retaken"
  | "surprise_me_clicked";

interface EventProperties {
  quiz_slug?: string;
  result_id?: string;
  share_method?: string;
  from_result?: string;
  destination_slug?: string;
}

// Drop-in ready for GA4: replace the body with gtag('event', name, properties)
// or window.mixpanel?.track(name, properties), etc.
export function trackEvent(name: EventName, properties?: EventProperties): void {
  if (typeof window === "undefined") return;

  // Uncomment when GA4 is connected:
  // if (typeof window.gtag === 'function') {
  //   window.gtag('event', name, properties);
  // }

  if (process.env.NODE_ENV === "development") {
    console.log("[Analytics]", name, properties ?? {});
  }
}
