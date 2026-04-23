import { Quiz } from "@/lib/types";

const quiz: Quiz = {
  slug: "aura-test",
  title: "What's Your Aura?",
  description:
    "Everyone in the room feels it before you say a word. Time to find out what it actually is. ✨",
  emoji: "🔮",
  coverColor: "from-violet-500 to-fuchsia-600",
  category: "Personality",
  tags: ["aura", "vibe", "energy", "aesthetic", "personality", "viral"],
  createdAt: "2026-04-23",
  isNew: true,
  questions: [
    {
      id: "q1",
      text: "You walk into a party where you only know one person. You...",
      options: [
        {
          id: "q1a",
          text: "Work the room — you'll know three more people within the hour",
          scores: { golden: 3 },
        },
        {
          id: "q1b",
          text: "Find a spot to observe quietly. You like to understand a room before entering it.",
          scores: { dark: 3 },
        },
        {
          id: "q1c",
          text: "Stay near your person, but warmly engage anyone who comes to you",
          scores: { soft: 3 },
        },
        {
          id: "q1d",
          text: "Somehow become the center of a conversation you definitely didn't start",
          scores: { chaotic: 3 },
        },
      ],
    },
    {
      id: "q2",
      text: "Someone who just met you would describe you as:",
      options: [
        {
          id: "q2a",
          text: "'Instantly warm — I felt welcome right away'",
          scores: { golden: 3, soft: 1 },
        },
        {
          id: "q2b",
          text: "'There's something about them. I can't fully explain it.'",
          scores: { dark: 3 },
        },
        {
          id: "q2c",
          text: "'They made me feel like they had all the time in the world for me'",
          scores: { soft: 3 },
        },
        {
          id: "q2d",
          text: "'A lot — but honestly I kind of loved it'",
          scores: { chaotic: 3 },
        },
      ],
    },
    {
      id: "q3",
      text: "When something goes wrong, you...",
      options: [
        {
          id: "q3a",
          text: "Become the person who holds everyone else together",
          scores: { golden: 3 },
        },
        {
          id: "q3b",
          text: "Withdraw, process alone, return composed and focused",
          scores: { dark: 3 },
        },
        {
          id: "q3c",
          text: "Take care of others first, deal with yourself later",
          scores: { soft: 3 },
        },
        {
          id: "q3d",
          text: "Spiral visibly for a bit, then bounce back louder than before",
          scores: { chaotic: 3 },
        },
      ],
    },
    {
      id: "q4",
      text: "People come to you when they need:",
      options: [
        {
          id: "q4a",
          text: "Energy, a good time, or someone to hype them up",
          scores: { golden: 3 },
        },
        {
          id: "q4b",
          text: "Honest perspective — the kind that actually shifts something",
          scores: { dark: 3 },
        },
        {
          id: "q4c",
          text: "To feel heard without judgment",
          scores: { soft: 3 },
        },
        {
          id: "q4d",
          text: "Someone to make the situation more interesting",
          scores: { chaotic: 3 },
        },
      ],
    },
    {
      id: "q5",
      text: "Your relationship with silence in social situations:",
      options: [
        {
          id: "q5a",
          text: "You fill it naturally — conversation just flows from you",
          scores: { golden: 3 },
        },
        {
          id: "q5b",
          text: "You're comfortable in it. Silence says something.",
          scores: { dark: 3 },
        },
        {
          id: "q5c",
          text: "You find it peaceful. Not every moment needs to be filled.",
          scores: { soft: 3 },
        },
        {
          id: "q5d",
          text: "You will break it. Every time. Without fail.",
          scores: { chaotic: 3 },
        },
      ],
    },
    {
      id: "q6",
      text: "The compliment you hear most often:",
      options: [
        {
          id: "q6a",
          text: "'You make people feel so comfortable'",
          scores: { golden: 3 },
        },
        {
          id: "q6b",
          text: "'There's something about you I can't figure out'",
          scores: { dark: 3 },
        },
        {
          id: "q6c",
          text: "'I always feel better after talking to you'",
          scores: { soft: 3 },
        },
        {
          id: "q6d",
          text: "'You're a lot — but somehow it works'",
          scores: { chaotic: 3 },
        },
      ],
    },
    {
      id: "q7",
      text: "When you leave a conversation, the other person usually feels:",
      options: [
        {
          id: "q7a",
          text: "Energized — like they just had a really good time",
          scores: { golden: 3 },
        },
        {
          id: "q7b",
          text: "Thoughtful — like something shifted slightly",
          scores: { dark: 3 },
        },
        {
          id: "q7c",
          text: "Heard — like they were the only person in the room",
          scores: { soft: 3 },
        },
        {
          id: "q7d",
          text: "Like they need to text someone about what just happened",
          scores: { chaotic: 3 },
        },
      ],
    },
    {
      id: "q8",
      text: "After a night out with you, people are talking about:",
      options: [
        {
          id: "q8a",
          text: "How warm and fun the whole thing was",
          scores: { golden: 3 },
        },
        {
          id: "q8b",
          text: "Something specific you said that stuck with them",
          scores: { dark: 3 },
        },
        {
          id: "q8c",
          text: "How genuinely good it felt to be around you",
          scores: { soft: 3 },
        },
        {
          id: "q8d",
          text: "The story of what happened once you showed up",
          scores: { chaotic: 3 },
        },
      ],
    },
  ],
  results: [
    {
      id: "golden",
      title: "Golden Aura",
      emoji: "✨",
      description:
        "Your energy is the reason people stay at a party longer than planned. People feel seen around you — not because you try, but because warmth is just how you're wired. You walk in and the room adjusts. Not because you demand attention, but because people are drawn to what feels good. You're the person they talk about on the way home.",
      shareText:
        "I got Golden Aura on the Aura Test ✨ what's your aura? →",
      color: "from-yellow-400 to-amber-500",
    },
    {
      id: "dark",
      title: "Dark & Magnetic Aura",
      emoji: "🔮",
      description:
        "There's something about you. People sense it before they know what it is. You don't fill space — you hold it. The things you say tend to land after the conversation is over. Not mysterious on purpose, just genuinely complex. The most interesting person in any room, and you didn't even need to try.",
      shareText:
        "I got Dark & Magnetic Aura on the Aura Test 🔮 what's your aura? →",
      color: "from-violet-700 to-indigo-900",
    },
    {
      id: "soft",
      title: "Soft & Calming Aura",
      emoji: "🌙",
      description:
        "People exhale around you. The conversations they have with you feel different from the ones they have with everyone else. You make space without announcing it, and people tell you things they didn't plan to say. Your aura doesn't demand anything — it just offers safety. That's rarer than it sounds.",
      shareText:
        "I got Soft & Calming Aura on the Aura Test 🌙 what's your aura? →",
      color: "from-teal-400 to-cyan-600",
    },
    {
      id: "chaotic",
      title: "Chaotic Aura",
      emoji: "🌀",
      description:
        "You're impossible to predict and somehow impossible to ignore. The best nights have your name on them. You walk into situations that should be a mess and come out with a story everyone retells for months. Your energy is electric — and a little unstable — which is exactly why people orbit you. There is never a dull moment in your presence.",
      shareText:
        "I got Chaotic Aura on the Aura Test 🌀 what's your aura? →",
      color: "from-orange-500 to-red-600",
    },
  ],
};

export default quiz;
