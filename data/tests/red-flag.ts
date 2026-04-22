import { Quiz } from "@/lib/types";

const quiz: Quiz = {
  slug: "red-flag-test",
  title: "What's Your Red Flag?",
  description:
    "Everyone has one. Some people have four. Which dating archetype are you really? 🚩",
  emoji: "🚩",
  coverColor: "from-red-500 to-rose-600",
  category: "Relationships",
  tags: ["red flag", "dating", "relationships", "personality", "viral"],
  createdAt: "2025-04-22",
  isNew: true,
  isTrending: true,
  questions: [
    {
      id: "q1",
      text: "Your crush hasn't texted back in 3 hours. You:",
      options: [
        {
          id: "q1a",
          text: "Have checked your phone approximately 40 times",
          scores: { phone_addict: 3 },
        },
        {
          id: "q1b",
          text: "Have drafted 3 possible follow-up messages — none sent yet",
          scores: { overthinker: 3 },
        },
        {
          id: "q1c",
          text: "Have started wondering if you even want this anymore",
          scores: { commitment_phobe: 3 },
        },
        {
          id: "q1d",
          text: "Already texted twice and now decided they can wait",
          scores: { ghoster: 2, phone_addict: 1 },
        },
      ],
    },
    {
      id: "q2",
      text: "The word 'exclusive' comes up in conversation. You:",
      options: [
        {
          id: "q2a",
          text: "Post about it on your finsta immediately",
          scores: { phone_addict: 3 },
        },
        {
          id: "q2b",
          text: "Freeze, smile, change the subject, go home and panic",
          scores: { overthinker: 3, commitment_phobe: 1 },
        },
        {
          id: "q2c",
          text: "Suddenly need to 'figure yourself out' first",
          scores: { commitment_phobe: 3 },
        },
        {
          id: "q2d",
          text: "Respond enthusiastically, then go quiet for 5 days",
          scores: { ghoster: 3 },
        },
      ],
    },
    {
      id: "q3",
      text: "Someone you like follows you back on Instagram. You:",
      options: [
        {
          id: "q3a",
          text: "Like their last 34 posts in the next 45 minutes",
          scores: { phone_addict: 3 },
        },
        {
          id: "q3b",
          text: "Notice, close the app, spend 3 hours deciding how to respond",
          scores: { overthinker: 3, phone_addict: 1 },
        },
        {
          id: "q3c",
          text: "Feel happy, then immediate dread — 'what does this mean exactly'",
          scores: { overthinker: 3, commitment_phobe: 1 },
        },
        {
          id: "q3d",
          text: "Follow back 8 days later like it's no big deal",
          scores: { ghoster: 3 },
        },
      ],
    },
    {
      id: "q4",
      text: "A first date goes really well. Your next move:",
      options: [
        {
          id: "q4a",
          text: "Text them while still in the Uber home",
          scores: { phone_addict: 3 },
        },
        {
          id: "q4b",
          text: "Replay every single thing you said to analyze it",
          scores: { overthinker: 3 },
        },
        {
          id: "q4c",
          text: "Have a great time, then mysteriously become very busy",
          scores: { ghoster: 3 },
        },
        {
          id: "q4d",
          text: "Really like them — which is exactly why this probably won't work out",
          scores: { commitment_phobe: 3 },
        },
      ],
    },
    {
      id: "q5",
      text: "You're in a conflict with someone you're dating. You:",
      options: [
        {
          id: "q5a",
          text: "Text a real-time play-by-play to your group chat",
          scores: { phone_addict: 3 },
        },
        {
          id: "q5b",
          text: "Have a detailed, internally consistent 5-point argument ready",
          scores: { overthinker: 3 },
        },
        {
          id: "q5c",
          text: "Say you're fine. You are not fine.",
          scores: { commitment_phobe: 3 },
        },
        {
          id: "q5d",
          text: "Go quiet for 3 days and hope it resolves itself",
          scores: { ghoster: 3 },
        },
      ],
    },
    {
      id: "q6",
      text: "Things are going really well with someone. You feel:",
      options: [
        {
          id: "q6a",
          text: "Excited — you've already mentally tagged them in 16 posts",
          scores: { phone_addict: 3 },
        },
        {
          id: "q6b",
          text: "Happy but also terrified and already looking for the catch",
          scores: { overthinker: 3 },
        },
        {
          id: "q6c",
          text: "Great — and somehow slightly ready to leave at the same time",
          scores: { commitment_phobe: 3 },
        },
        {
          id: "q6d",
          text: "Amazing until you need space and vanish for two weeks",
          scores: { ghoster: 3 },
        },
      ],
    },
    {
      id: "q7",
      text: "Your exes would describe you as:",
      options: [
        {
          id: "q7a",
          text: "'Always on their phone'",
          scores: { phone_addict: 3 },
        },
        {
          id: "q7b",
          text: "'Always in their head'",
          scores: { overthinker: 3 },
        },
        {
          id: "q7c",
          text: "'A lot of energy... then nothing'",
          scores: { ghoster: 3 },
        },
        {
          id: "q7d",
          text: "'Warm, but unavailable'",
          scores: { commitment_phobe: 3 },
        },
      ],
    },
    {
      id: "q8",
      text: "Your love language, honestly, is:",
      options: [
        {
          id: "q8a",
          text: "Sending memes at 2am to confirm you're thinking about them",
          scores: { phone_addict: 3 },
        },
        {
          id: "q8b",
          text: "Carefully worded messages you draft 4 times before sending",
          scores: { overthinker: 3 },
        },
        {
          id: "q8c",
          text: "Passionate beginnings and then radio silence",
          scores: { ghoster: 3 },
        },
        {
          id: "q8d",
          text: "Quality time — on your own terms, and not too much of it",
          scores: { commitment_phobe: 3 },
        },
      ],
    },
  ],
  results: [
    {
      id: "phone_addict",
      title: "The Phone Addict",
      emoji: "📱",
      description:
        "Your screen time is a cry for help and your read receipts are a weapon. You're not texting multiple people — you're just very emotionally invested in being available. To everyone. At once. The good news: you're never boring. The bad news: you'll screenshot this result and send it to your group chat within the next 45 seconds.",
      shareText:
        "I got The Phone Addict on the Red Flag Test 📱 what's your red flag? →",
      color: "from-pink-500 to-rose-600",
    },
    {
      id: "ghoster",
      title: "The Disappearing Act",
      emoji: "👻",
      description:
        "Everything is great until you panic — and then suddenly you have 'a lot going on right now.' You're not cruel. You just run when things get real. The good news: your re-entrance texts are legendary. The bad news: people have learned not to count on you, and deep down you know why.",
      shareText:
        "I got The Disappearing Act on the Red Flag Test 👻 what's your red flag? →",
      color: "from-slate-500 to-gray-700",
    },
    {
      id: "overthinker",
      title: "The Chronic Overthinker",
      emoji: "🌀",
      description:
        "You've analyzed that text from three angles and written four drafts. You're not overthinking — you're doing thorough research on human behavior. The good news: you never say anything stupid (too much processing time). The bad news: by the time you decide what to do, the moment has passed.",
      shareText:
        "I got The Chronic Overthinker on the Red Flag Test 🌀 what's your red flag? →",
      color: "from-violet-500 to-purple-600",
    },
    {
      id: "commitment_phobe",
      title: "The Commitment-Phobe",
      emoji: "🚪",
      description:
        "You're amazing at beginnings and terrible at middles. The moment something gets real, you get vague. You have deep feelings — you just immediately put them in a box and sit on the box. The good news: you'll figure it out one day. The bad news: that day keeps getting rescheduled.",
      shareText:
        "I got The Commitment-Phobe on the Red Flag Test 🚪 what's your red flag? →",
      color: "from-amber-500 to-orange-600",
    },
  ],
};

export default quiz;
