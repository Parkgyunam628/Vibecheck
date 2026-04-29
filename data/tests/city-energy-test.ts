import { Quiz } from "@/lib/types";

const quiz: Quiz = {
  slug: "city-energy-test",
  title: "What City Energy Do You Have?",
  description: "Not where you're from. What energy you give.",
  emoji: "🌆",
  coverColor: "from-indigo-500 to-violet-600",
  category: "Lifestyle",
  tags: ["vibe", "aesthetic", "personality", "city", "viral"],
  createdAt: "2026-04-26",
  isNew: true,
  questions: [
    {
      id: "q1",
      text: "Your ideal morning looks like:",
      options: [
        {
          id: "q1a",
          text: "Coffee, three things already done, fully operational by 7am",
          scores: { new_york: 3 },
        },
        {
          id: "q1b",
          text: "Slow start, natural light, a routine that feels intentional",
          scores: { paris: 3 },
        },
        {
          id: "q1c",
          text: "Matcha, a playlist, and a system that brings you genuine joy",
          scores: { tokyo: 3 },
        },
        {
          id: "q1d",
          text: "No alarm, breakfast outside if possible, no rush",
          scores: { la: 3 },
        },
      ],
    },
    {
      id: "q2",
      text: "Your approach to plans:",
      options: [
        {
          id: "q2a",
          text: "Scheduled, confirmed, back-to-back — time is not wasted here",
          scores: { new_york: 3 },
        },
        {
          id: "q2b",
          text: "Selective but intentional — everything has to be worth going out for",
          scores: { paris: 3 },
        },
        {
          id: "q2c",
          text: "Thought through, with a clear backup if things shift",
          scores: { tokyo: 3 },
        },
        {
          id: "q2d",
          text: "Suggested. Not fully committed to. Vibe-dependent.",
          scores: { la: 3 },
        },
      ],
    },
    {
      id: "q3",
      text: "How do you dress on a regular day?",
      options: [
        {
          id: "q3a",
          text: "Like you might end up somewhere important without warning",
          scores: { new_york: 3 },
        },
        {
          id: "q3b",
          text: "Like every piece was chosen, not just grabbed",
          scores: { paris: 3 },
        },
        {
          id: "q3c",
          text: "Coordinated, considered, slightly ahead of everyone else",
          scores: { tokyo: 3 },
        },
        {
          id: "q3d",
          text: "Comfortable but somehow always good",
          scores: { la: 3 },
        },
      ],
    },
    {
      id: "q4",
      text: "Your social energy is:",
      options: [
        {
          id: "q4a",
          text: "Fast and direct — you don't waste each other's time",
          scores: { new_york: 3 },
        },
        {
          id: "q4b",
          text: "Warm once you're in, cold if you're not — and no apologizing for it",
          scores: { paris: 3 },
        },
        {
          id: "q4c",
          text: "Polite and considered — reserved until you're genuinely close",
          scores: { tokyo: 3 },
        },
        {
          id: "q4d",
          text: "Easy and low-pressure — you click with people quickly",
          scores: { la: 3 },
        },
      ],
    },
    {
      id: "q5",
      text: "Your relationship with ambition:",
      options: [
        {
          id: "q5a",
          text: "It's your entire personality and you're not apologizing",
          scores: { new_york: 3 },
        },
        {
          id: "q5b",
          text: "You have direction, but you don't perform hustle",
          scores: { paris: 3 },
        },
        {
          id: "q5c",
          text: "Driven but deliberate — quality over speed, always",
          scores: { tokyo: 3 },
        },
        {
          id: "q5d",
          text: "You work toward things, just without the urgency other people perform",
          scores: { la: 3 },
        },
      ],
    },
    {
      id: "q6",
      text: "When something goes wrong:",
      options: [
        {
          id: "q6a",
          text: "Fix it immediately, move on, don't dwell",
          scores: { new_york: 3 },
        },
        {
          id: "q6b",
          text: "Feel it fully, don't let it show for long",
          scores: { paris: 3 },
        },
        {
          id: "q6c",
          text: "Figure out exactly what went wrong and prevent it next time",
          scores: { tokyo: 3 },
        },
        {
          id: "q6d",
          text: "Let yourself be annoyed, then genuinely let it go",
          scores: { la: 3 },
        },
      ],
    },
    {
      id: "q7",
      text: "How do you handle being bored?",
      options: [
        {
          id: "q7a",
          text: "You don't get bored — you get productive",
          scores: { new_york: 3 },
        },
        {
          id: "q7b",
          text: "You have standards for how you spend your time — boredom doesn't last long",
          scores: { paris: 3 },
        },
        {
          id: "q7c",
          text: "You find something to optimize or explore in whatever's around you",
          scores: { tokyo: 3 },
        },
        {
          id: "q7d",
          text: "Lean into it — some of the best things come from not forcing anything",
          scores: { la: 3 },
        },
      ],
    },
    {
      id: "q8",
      text: "People describe your energy as:",
      options: [
        {
          id: "q8a",
          text: "'A lot — but you get used to it and then you need it'",
          scores: { new_york: 3 },
        },
        {
          id: "q8b",
          text: "'Cool in a way that makes you want their approval'",
          scores: { paris: 3 },
        },
        {
          id: "q8c",
          text: "'Quietly impressive — always on top of something'",
          scores: { tokyo: 3 },
        },
        {
          id: "q8d",
          text: "'The most relaxed person in any room, somehow'",
          scores: { la: 3 },
        },
      ],
    },
  ],
  results: [
    {
      id: "new_york",
      title: "New York Energy",
      emoji: "🗽",
      description:
        "Fast, driven, direct, and always in motion. You don't wait for permission and you don't need to explain yourself. You have strong opinions about everything, a coffee order that doesn't change, and a pace other people find exhausting and then somehow miss. You were three steps ahead of this sentence before you finished reading it.",
      shareText:
        "I got New York Energy on the City Energy Test 🗽 what city energy do you have? →",
      color: "from-slate-600 to-gray-800",
    },
    {
      id: "paris",
      title: "Paris Energy",
      emoji: "🥐",
      description:
        "You do things with taste — not for approval, just because mediocrity bothers you on a personal level. You're selective about people, deliberate in your choices, and impossible to impress with the obvious. There's a version of this that reads as cold. You call it standards.",
      shareText:
        "I got Paris Energy on the City Energy Test 🥐 what city energy do you have? →",
      color: "from-rose-400 to-pink-500",
    },
    {
      id: "tokyo",
      title: "Tokyo Energy",
      emoji: "🏙️",
      description:
        "Precise, considered, and aesthetically dialed-in. You have systems other people wish they had. You notice things nobody else catches, think before you speak, and have strong opinions about details most people ignore. Your standards are quietly applied. The results always show.",
      shareText:
        "I got Tokyo Energy on the City Energy Test 🏙️ what city energy do you have? →",
      color: "from-violet-500 to-indigo-700",
    },
    {
      id: "la",
      title: "LA Energy",
      emoji: "🌴",
      description:
        "Chill isn't quite right — it's more that you've sorted out what stresses you and decided it isn't worth it. You move at your own pace, you don't perform urgency, and you still somehow get things done. People either find this incredibly appealing or completely baffling. You don't particularly mind either way.",
      shareText:
        "I got LA Energy on the City Energy Test 🌴 what city energy do you have? →",
      color: "from-amber-400 to-orange-500",
    },
  ],
};

export default quiz;
