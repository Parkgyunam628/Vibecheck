import { Quiz } from "@/lib/types";

const quiz: Quiz = {
  slug: "partner-type-test",
  title: "What Kind of Partner Are You?",
  description: "How you actually show up when it matters. Be honest.",
  emoji: "💞",
  coverColor: "from-pink-500 to-rose-600",
  category: "Relationships",
  tags: ["dating", "relationships", "partner", "personality", "viral"],
  createdAt: "2026-04-29",
  isNew: true,
  questions: [
    {
      id: "q1",
      text: "Your partner seems off today. You:",
      options: [
        {
          id: "q1a",
          text: "Ask directly and stay in it with them",
          scores: { all_in: 3 },
        },
        {
          id: "q1b",
          text: "Send a small check-in and leave space if they want it",
          scores: { thoughtful: 3 },
        },
        {
          id: "q1c",
          text: "Give them room — they'll tell you when they're ready",
          scores: { independent: 3 },
        },
        {
          id: "q1d",
          text: "Notice, feel unsure, end up saying nothing",
          scores: { inconsistent: 3 },
        },
      ],
    },
    {
      id: "q2",
      text: "How often do you initiate plans, affection, or check-ins?",
      options: [
        {
          id: "q2a",
          text: "All the time — you don't wait for them to come to you",
          scores: { all_in: 3 },
        },
        {
          id: "q2b",
          text: "Regularly, when you have something specific in mind",
          scores: { thoughtful: 3 },
        },
        {
          id: "q2c",
          text: "When you're in the right headspace — which is most of the time",
          scores: { independent: 3 },
        },
        {
          id: "q2d",
          text: "Less than you should, if you're honest",
          scores: { inconsistent: 3 },
        },
      ],
    },
    {
      id: "q3",
      text: "In an argument, you:",
      options: [
        {
          id: "q3a",
          text: "Want to resolve it now — you can't stand things being unresolved",
          scores: { all_in: 3 },
        },
        {
          id: "q3b",
          text: "Take a breath, come back when you can actually talk it through",
          scores: { thoughtful: 3 },
        },
        {
          id: "q3c",
          text: "Need time alone to process before engaging",
          scores: { independent: 3 },
        },
        {
          id: "q3d",
          text: "Oscillate between wanting to fix it and shutting down completely",
          scores: { inconsistent: 3 },
        },
      ],
    },
    {
      id: "q4",
      text: "Your partner has a hard day. Your default response is:",
      options: [
        {
          id: "q4a",
          text: "Already there — you didn't have to think about it",
          scores: { all_in: 3 },
        },
        {
          id: "q4b",
          text: "A specific gesture you know they'd actually want",
          scores: { thoughtful: 3 },
        },
        {
          id: "q4c",
          text: "Space and 'let me know if you need anything'",
          scores: { independent: 3 },
        },
        {
          id: "q4d",
          text: "Meaning to be more present than you end up being",
          scores: { inconsistent: 3 },
        },
      ],
    },
    {
      id: "q5",
      text: "What do you think your partner would say is your best quality?",
      options: [
        {
          id: "q5a",
          text: "'They make me feel completely chosen'",
          scores: { all_in: 3 },
        },
        {
          id: "q5b",
          text: "'They're consistent in a way I didn't know I needed'",
          scores: { thoughtful: 3 },
        },
        {
          id: "q5c",
          text: "'They give me room to be myself'",
          scores: { independent: 3 },
        },
        {
          id: "q5d",
          text: "'They mean well and they're trying'",
          scores: { inconsistent: 3 },
        },
      ],
    },
    {
      id: "q6",
      text: "How do you usually show someone you care?",
      options: [
        {
          id: "q6a",
          text: "Often, verbally, and with action — no guessing required",
          scores: { all_in: 3 },
        },
        {
          id: "q6b",
          text: "Consistency and remembering the small details",
          scores: { thoughtful: 3 },
        },
        {
          id: "q6c",
          text: "By respecting their space and being fully present when it counts",
          scores: { independent: 3 },
        },
        {
          id: "q6d",
          text: "In good moments — less reliably during hard ones",
          scores: { inconsistent: 3 },
        },
      ],
    },
    {
      id: "q7",
      text: "Your partner needs something you don't naturally give. You:",
      options: [
        {
          id: "q7a",
          text: "Adapt — this is part of being with someone",
          scores: { all_in: 3 },
        },
        {
          id: "q7b",
          text: "Find ways to meet them without losing yourself",
          scores: { thoughtful: 3 },
        },
        {
          id: "q7c",
          text: "Be honest about where your limits are",
          scores: { independent: 3 },
        },
        {
          id: "q7d",
          text: "Feel vaguely guilty and not always know how to act on it",
          scores: { inconsistent: 3 },
        },
      ],
    },
    {
      id: "q8",
      text: "When the relationship hits a rough patch, you:",
      options: [
        {
          id: "q8a",
          text: "Show up harder — this is when it actually matters",
          scores: { all_in: 3 },
        },
        {
          id: "q8b",
          text: "Stay calm, communicate, work through it",
          scores: { thoughtful: 3 },
        },
        {
          id: "q8c",
          text: "Need space to process before you can engage",
          scores: { independent: 3 },
        },
        {
          id: "q8d",
          text: "Sometimes pull away right when you should move closer",
          scores: { inconsistent: 3 },
        },
      ],
    },
  ],
  results: [
    {
      id: "all_in",
      title: "The All-In Partner",
      emoji: "🐶",
      description:
        "You love out loud and you're not apologizing for it. You show up, plan things, remember details, and make people feel genuinely chosen. Some find this intensity too much. Those are the wrong people. Your partner knows exactly where they stand with you — which is something most people have never experienced and don't realize they needed.",
      shareText:
        "I got The All-In Partner on the Partner Type Test 🐶 what kind of partner are you? →",
      color: "from-rose-500 to-pink-600",
    },
    {
      id: "thoughtful",
      title: "The Thoughtful Steady One",
      emoji: "🕯️",
      description:
        "You don't perform love — you just do it. Consistent check-ins, remembering the small things, showing up without being asked. Your partner probably doesn't realize how much you actually do until you stop doing it for a day. That's not a flaw. That's just what quiet reliability looks like from the inside.",
      shareText:
        "I got The Thoughtful Steady One on the Partner Type Test 🕯️ what kind of partner are you? →",
      color: "from-amber-400 to-orange-500",
    },
    {
      id: "independent",
      title: "The Self-Sufficient Partner",
      emoji: "🌿",
      description:
        "You love fully, but you were whole before this relationship and you intend to stay that way. Your independence isn't emotional unavailability — it's just that you bring a complete person into this. Some partners find this hard to read. The right one finds it grounding. You give space because you actually understand what it means to need it.",
      shareText:
        "I got The Self-Sufficient Partner on the Partner Type Test 🌿 what kind of partner are you? →",
      color: "from-teal-400 to-emerald-600",
    },
    {
      id: "inconsistent",
      title: "The Well-Meaning Work-In-Progress",
      emoji: "🌊",
      description:
        "Your feelings are real and the caring is genuine. They just don't always arrive in a consistent form — good weeks, distant weeks, fully present then quietly checked out. You want to be the partner you picture yourself being. The gap between that picture and your actions is the only thing standing in the way. It's closeable.",
      shareText:
        "I got The Well-Meaning Work-In-Progress on the Partner Type Test 🌊 what kind of partner are you? →",
      color: "from-sky-500 to-blue-600",
    },
  ],
};

export default quiz;
