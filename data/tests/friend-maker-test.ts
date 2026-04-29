import { Quiz } from "@/lib/types";

const quiz: Quiz = {
  slug: "friend-maker-test",
  title: "How Do You Make Friends?",
  description: "Not how many you have. How you actually make them.",
  emoji: "🤝",
  coverColor: "from-teal-500 to-cyan-600",
  category: "Relationships",
  tags: ["friendship", "friends", "personality", "social", "viral"],
  createdAt: "2026-04-29",
  isNew: true,
  questions: [
    {
      id: "q1",
      text: "You meet someone interesting at an event. What actually happens?",
      options: [
        {
          id: "q1a",
          text: "Find a way to keep the conversation going and exchange contact info",
          scores: { natural_connector: 3 },
        },
        {
          id: "q1b",
          text: "The conversation goes somewhere real and runs longer than expected",
          scores: { deep_diver: 3 },
        },
        {
          id: "q1c",
          text: "Enjoy talking to them, then leave it to them to reach out",
          scores: { slow_burn: 3 },
        },
        {
          id: "q1d",
          text: "Connect easily because you're both there for the same reason",
          scores: { situational: 3 },
        },
      ],
    },
    {
      id: "q2",
      text: "Your existing close friends — how did most of them start?",
      options: [
        {
          id: "q2a",
          text: "Lots of casual touchpoints that built up quickly",
          scores: { natural_connector: 3 },
        },
        {
          id: "q2b",
          text: "One conversation that went somewhere unexpected",
          scores: { deep_diver: 3 },
        },
        {
          id: "q2c",
          text: "A gradual thing — you noticed each other over time",
          scores: { slow_burn: 3 },
        },
        {
          id: "q2d",
          text: "A shared context — work, school, a trip, a class",
          scores: { situational: 3 },
        },
      ],
    },
    {
      id: "q3",
      text: "What does someone need to do to actually become your friend?",
      options: [
        {
          id: "q3a",
          text: "Show up and be genuine — you're pretty open",
          scores: { natural_connector: 3 },
        },
        {
          id: "q3b",
          text: "Go somewhere real with you in conversation",
          scores: { deep_diver: 3 },
        },
        {
          id: "q3c",
          text: "Be consistently present long enough that you trust them",
          scores: { slow_burn: 3 },
        },
        {
          id: "q3d",
          text: "Share a context that creates a natural bond",
          scores: { situational: 3 },
        },
      ],
    },
    {
      id: "q4",
      text: "When you're around new people, you:",
      options: [
        {
          id: "q4a",
          text: "Find someone to talk to pretty easily — it just happens",
          scores: { natural_connector: 3 },
        },
        {
          id: "q4b",
          text: "Wait for the right opening to have a real conversation",
          scores: { deep_diver: 3 },
        },
        {
          id: "q4c",
          text: "Watch first, engage once you feel comfortable",
          scores: { slow_burn: 3 },
        },
        {
          id: "q4d",
          text: "Stick with whoever you already know there",
          scores: { situational: 3 },
        },
      ],
    },
    {
      id: "q5",
      text: "How do you keep friendships going over time?",
      options: [
        {
          id: "q5a",
          text: "Regular contact — you reach out first without keeping score",
          scores: { natural_connector: 3 },
        },
        {
          id: "q5b",
          text: "Depth over frequency — one real conversation matters more than ten surface ones",
          scores: { deep_diver: 3 },
        },
        {
          id: "q5c",
          text: "Showing up when it actually counts",
          scores: { slow_burn: 3 },
        },
        {
          id: "q5d",
          text: "Keeping the shared experiences going as long as possible",
          scores: { situational: 3 },
        },
      ],
    },
    {
      id: "q6",
      text: "What makes you decide someone has real potential as a friend?",
      options: [
        {
          id: "q6a",
          text: "A vibe — you usually feel it quickly",
          scores: { natural_connector: 3 },
        },
        {
          id: "q6b",
          text: "Something genuine they said that made you see them differently",
          scores: { deep_diver: 3 },
        },
        {
          id: "q6c",
          text: "Consistency over time — they kept showing up",
          scores: { slow_burn: 3 },
        },
        {
          id: "q6d",
          text: "Realizing you're going to be around each other enough for it to matter",
          scores: { situational: 3 },
        },
      ],
    },
    {
      id: "q7",
      text: "Your friend group is mostly made up of:",
      options: [
        {
          id: "q7a",
          text: "People from every era of your life — you tend to keep everyone",
          scores: { natural_connector: 3 },
        },
        {
          id: "q7b",
          text: "A small, close group who really know you",
          scores: { deep_diver: 3 },
        },
        {
          id: "q7c",
          text: "People who put in the time to get past the surface with you",
          scores: { slow_burn: 3 },
        },
        {
          id: "q7d",
          text: "People connected to specific chapters of your life",
          scores: { situational: 3 },
        },
      ],
    },
    {
      id: "q8",
      text: "People who became your closest friends would describe how it happened as:",
      options: [
        {
          id: "q8a",
          text: "'We just clicked — it happened fast'",
          scores: { natural_connector: 3 },
        },
        {
          id: "q8b",
          text: "'One conversation and it felt like we'd already known each other'",
          scores: { deep_diver: 3 },
        },
        {
          id: "q8c",
          text: "'It took a while, but I don't remember when we stopped being acquaintances'",
          scores: { slow_burn: 3 },
        },
        {
          id: "q8d",
          text: "'We were just always in the same place at the same time'",
          scores: { situational: 3 },
        },
      ],
    },
  ],
  results: [
    {
      id: "natural_connector",
      title: "The Natural Connector",
      emoji: "✨",
      description:
        "You talk to people. Genuinely. You remember their name, ask a follow-up question, and create the feeling of being seen before the conversation is over. You don't try to collect friends — you just accumulate them, because warmth is how you're wired. Your contacts list is essentially a community you built without noticing.",
      shareText:
        "I got The Natural Connector on the Friend Maker Test ✨ how do you make friends? →",
      color: "from-yellow-400 to-orange-500",
    },
    {
      id: "deep_diver",
      title: "The Deep Diver",
      emoji: "🌊",
      description:
        "You skip small talk whenever possible and go somewhere real. Most acquaintances stay acquaintances — but the few who pass your filter end up as lifelong friends who feel like family. Quality is a requirement, not a preference. People who get close to you usually say they had no idea friendship like this was possible.",
      shareText:
        "I got The Deep Diver on the Friend Maker Test 🌊 how do you make friends? →",
      color: "from-indigo-500 to-blue-700",
    },
    {
      id: "slow_burn",
      title: "The Slow Burn Friend",
      emoji: "🕯️",
      description:
        "Friendship with you takes time, and it's worth it. You're not cold — you're calibrated. You need to see who someone actually is before you open up. The people who earn your trust describe you as one of the most loyal friends they have. The lucky ones figured out they just needed to keep showing up.",
      shareText:
        "I got The Slow Burn Friend on the Friend Maker Test 🕯️ how do you make friends? →",
      color: "from-amber-500 to-rose-500",
    },
    {
      id: "situational",
      title: "The Situational Connector",
      emoji: "🧩",
      description:
        "Your closest friends came from specific contexts — same job, same class, same group chat, same trip. You bond best through shared experience rather than cold starts. Once you're in the same world as someone, connection happens naturally. You're not bad at making friends — you just need a setup. Give it one.",
      shareText:
        "I got The Situational Connector on the Friend Maker Test 🧩 how do you make friends? →",
      color: "from-teal-400 to-cyan-600",
    },
  ],
};

export default quiz;
