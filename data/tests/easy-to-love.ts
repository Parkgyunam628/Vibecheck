import { Quiz } from "@/lib/types";

const quiz: Quiz = {
  slug: "easy-to-love-test",
  title: "Are You Easy to Love?",
  description: "Be honest — are you actually easy to love, or do you just think you are? Find out. 🥺",
  emoji: "🫀",
  coverColor: "from-pink-500 to-rose-600",
  category: "Relationships",
  tags: ["dating", "love", "relationships", "personality", "viral", "emotional"],
  createdAt: "2026-04-23",
  isNew: true,
  isTrending: true,
  questions: [
    {
      id: "q1",
      text: "When you like someone, how do you show it?",
      options: [
        {
          id: "q1a",
          text: "You find a way to tell them — directly, like an adult",
          scores: { genuinely_easy: 3 },
        },
        {
          id: "q1b",
          text: "Through small, consistent actions. You show up.",
          scores: { complicated: 2, walls_up: 1 },
        },
        {
          id: "q1c",
          text: "You hint at it and hope they connect the dots",
          scores: { walls_up: 3 },
        },
        {
          id: "q1d",
          text: "Intensely for a few weeks, then suddenly much less",
          scores: { loveable_chaos: 3 },
        },
      ],
    },
    {
      id: "q2",
      text: "When something a partner did bothers you, you...",
      options: [
        {
          id: "q2a",
          text: "Bring it up calmly and clearly. It's not a big deal to talk.",
          scores: { genuinely_easy: 3 },
        },
        {
          id: "q2b",
          text: "Process alone first. You'll raise it when you're ready.",
          scores: { complicated: 3 },
        },
        {
          id: "q2c",
          text: "Go quiet and wait for them to notice something's wrong",
          scores: { walls_up: 3 },
        },
        {
          id: "q2d",
          text: "React, then overcorrect, then apologize for both",
          scores: { loveable_chaos: 3 },
        },
      ],
    },
    {
      id: "q3",
      text: "Someone asks 'what are we?' Your internal reaction?",
      options: [
        {
          id: "q3a",
          text: "Relief — you were going to bring it up anyway",
          scores: { genuinely_easy: 3 },
        },
        {
          id: "q3b",
          text: "Ready. It took a while to get here, but you're ready.",
          scores: { complicated: 3 },
        },
        {
          id: "q3c",
          text: "A sudden interest in your phone screen",
          scores: { walls_up: 3 },
        },
        {
          id: "q3d",
          text: "Excited, terrified, and fine — all within 45 seconds",
          scores: { loveable_chaos: 3 },
        },
      ],
    },
    {
      id: "q4",
      text: "How long does it take someone to feel like they really know you?",
      options: [
        {
          id: "q4a",
          text: "Pretty quickly, if there's real chemistry",
          scores: { genuinely_easy: 3 },
        },
        {
          id: "q4b",
          text: "A few months minimum — you're slow to trust",
          scores: { complicated: 3 },
        },
        {
          id: "q4c",
          text: "Honestly? They probably never fully do.",
          scores: { walls_up: 3 },
        },
        {
          id: "q4d",
          text: "Day one you're an open book. Month three you need space.",
          scores: { loveable_chaos: 3 },
        },
      ],
    },
    {
      id: "q5",
      text: "When a relationship is going really well, you feel...",
      options: [
        {
          id: "q5a",
          text: "Happy and present. That's it. Just good.",
          scores: { genuinely_easy: 3 },
        },
        {
          id: "q5b",
          text: "Grateful — but quietly waiting for something to go wrong",
          scores: { complicated: 2, walls_up: 1 },
        },
        {
          id: "q5c",
          text: "Comfortable but slightly detached. Hard to explain.",
          scores: { walls_up: 3 },
        },
        {
          id: "q5d",
          text: "Amazing until you feel too close and suddenly need air",
          scores: { loveable_chaos: 3 },
        },
      ],
    },
    {
      id: "q6",
      text: "Your love language is:",
      options: [
        {
          id: "q6a",
          text: "Quality time — and you give it consistently",
          scores: { genuinely_easy: 3 },
        },
        {
          id: "q6b",
          text: "Acts of service — done quietly, no expectation",
          scores: { complicated: 3 },
        },
        {
          id: "q6c",
          text: "Words of affirmation — but only receiving, not giving them first",
          scores: { walls_up: 3 },
        },
        {
          id: "q6d",
          text: "Grand gestures, with random dry spells between them",
          scores: { loveable_chaos: 3 },
        },
      ],
    },
    {
      id: "q7",
      text: "Your past partners have said you need to work on:",
      options: [
        {
          id: "q7a",
          text: "Nothing major. You're pretty self-aware, honestly.",
          scores: { genuinely_easy: 3 },
        },
        {
          id: "q7b",
          text: "Being hard to read",
          scores: { complicated: 3 },
        },
        {
          id: "q7c",
          text: "Opening up more",
          scores: { walls_up: 3 },
        },
        {
          id: "q7d",
          text: "Being consistent",
          scores: { loveable_chaos: 3 },
        },
      ],
    },
    {
      id: "q8",
      text: "Your friends' honest description of you in relationships:",
      options: [
        {
          id: "q8a",
          text: "'They're genuinely a good partner'",
          scores: { genuinely_easy: 3 },
        },
        {
          id: "q8b",
          text: "'Hard to get to, but completely worth the effort'",
          scores: { complicated: 3 },
        },
        {
          id: "q8c",
          text: "'Charming on the surface, hard to really know'",
          scores: { walls_up: 3 },
        },
        {
          id: "q8d",
          text: "'A lot — but in a way that somehow just works'",
          scores: { loveable_chaos: 3 },
        },
      ],
    },
  ],
  results: [
    {
      id: "genuinely_easy",
      title: "Genuinely Easy to Love",
      emoji: "🌸",
      description:
        "You communicate. You show up. You don't make people guess. In a world full of situationships and emotional mazes, you're the rare person who just says what they mean and means what they say. People fall for you quickly and stay for a long time. The fact that this feels normal to you is the most impressive part.",
      shareText:
        "I got Genuinely Easy to Love on the Easy to Love Test 🌸 are you easy to love? →",
      color: "from-rose-400 to-pink-500",
    },
    {
      id: "complicated",
      title: "Complicated But 100% Worth It",
      emoji: "💜",
      description:
        "You're not the easiest person to get close to. You take time, you process deeply, and you don't let just anyone in. But the people who make it past that? They don't leave. The love you give once you've decided on someone is specific, thoughtful, and lasting. The right person finds the wait worth every second.",
      shareText:
        "I got Complicated But Worth It on the Easy to Love Test 💜 are you easy to love? →",
      color: "from-violet-500 to-purple-600",
    },
    {
      id: "walls_up",
      title: "The Closed-Off One (Working On It)",
      emoji: "🔒",
      description:
        "You're charming, interesting, and good company. But getting to the real you takes time — and most people don't get a map. Your walls went up for a reason, and you know that. The good news is that knowing it means you're already halfway to changing it. Someone's waiting for you to let them in.",
      shareText:
        "I got The Closed-Off One on the Easy to Love Test 🔒 are you easy to love? →",
      color: "from-slate-500 to-gray-700",
    },
    {
      id: "loveable_chaos",
      title: "Chaotically Loveable",
      emoji: "🌪️",
      description:
        "You love hard and then vanish, open up and then shut down, go all in and then need three weeks alone. People don't always know what they're getting with you — but somehow they keep coming back. Your energy is magnetic even when it's messy. You're a lot, and you're worth it, and one day those two things will exist at the same time more consistently.",
      shareText:
        "I got Chaotically Loveable on the Easy to Love Test 🌪️ are you easy to love? →",
      color: "from-amber-400 to-orange-500",
    },
  ],
};

export default quiz;
