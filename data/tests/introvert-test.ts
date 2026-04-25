import { Quiz } from "@/lib/types";

const quiz: Quiz = {
  slug: "introvert-test",
  title: "Are You an Introvert?",
  description:
    "A lot of people call themselves introverts. Most of them are lying. Let's find out the truth 🌙",
  emoji: "🌙",
  coverColor: "from-indigo-500 to-purple-600",
  category: "Personality",
  tags: ["introvert", "extrovert", "personality", "social", "viral"],
  createdAt: "2025-04-22",
  isNew: true,
  questions: [
    {
      id: "q1",
      text: "After a big social event, you feel:",
      options: [
        {
          id: "q1a",
          text: "Completely drained — you need at least a full day of nothing",
          scores: { full_introvert: 3 },
        },
        {
          id: "q1b",
          text: "Tired but happy — a few hours of quiet and you're restored",
          scores: { social_introvert: 3 },
        },
        {
          id: "q1c",
          text: "Depends entirely on the people and the vibe",
          scores: { ambivert: 3 },
        },
        {
          id: "q1d",
          text: "Energized — honestly ready for round two",
          scores: { closet_extrovert: 3 },
        },
      ],
    },
    {
      id: "q2",
      text: "Your ideal Friday night:",
      options: [
        {
          id: "q2a",
          text: "Home, no plans, no noise, complete peace",
          scores: { full_introvert: 3 },
        },
        {
          id: "q2b",
          text: "Dinner with 2–3 close friends, home by 11",
          scores: { social_introvert: 3 },
        },
        {
          id: "q2c",
          text: "Genuinely could go either way",
          scores: { ambivert: 3 },
        },
        {
          id: "q2d",
          text: "Out somewhere with people — more the better",
          scores: { closet_extrovert: 3 },
        },
      ],
    },
    {
      id: "q3",
      text: "You're at a party where you don't know many people. You:",
      options: [
        {
          id: "q3a",
          text: "Find a corner, stay an hour, quietly exit",
          scores: { full_introvert: 3 },
        },
        {
          id: "q3b",
          text: "Find one person you connect with and stick to them",
          scores: { social_introvert: 3 },
        },
        {
          id: "q3c",
          text: "Survey the room — might engage, might not",
          scores: { ambivert: 3 },
        },
        {
          id: "q3d",
          text: "Have somehow become the center of it within 20 minutes",
          scores: { closet_extrovert: 3 },
        },
      ],
    },
    {
      id: "q4",
      text: "What recharges you?",
      options: [
        {
          id: "q4a",
          text: "Being completely alone — properly, deeply alone",
          scores: { full_introvert: 3 },
        },
        {
          id: "q4b",
          text: "Small group quality time, then solo recovery afterward",
          scores: { social_introvert: 3 },
        },
        {
          id: "q4c",
          text: "Varies — it's really mood and context dependent",
          scores: { ambivert: 3 },
        },
        {
          id: "q4d",
          text: "Other people — you actually get more tired when you're alone too long",
          scores: { closet_extrovert: 3 },
        },
      ],
    },
    {
      id: "q5",
      text: "In a group project, you:",
      options: [
        {
          id: "q5a",
          text: "Would honestly rather just do it alone",
          scores: { full_introvert: 3 },
        },
        {
          id: "q5b",
          text: "Can collaborate, but need alone time to actually think",
          scores: { social_introvert: 3 },
        },
        {
          id: "q5c",
          text: "Depends on the team and what you're doing",
          scores: { ambivert: 3 },
        },
        {
          id: "q5d",
          text: "Thrive — you love the energy of working with people",
          scores: { closet_extrovert: 3 },
        },
      ],
    },
    {
      id: "q6",
      text: "When you're feeling low, you:",
      options: [
        {
          id: "q6a",
          text: "Need complete solitude to process — social contact makes it worse",
          scores: { full_introvert: 3 },
        },
        {
          id: "q6b",
          text: "Talk to one or two close people, then need space",
          scores: { social_introvert: 3, ambivert: 1 },
        },
        {
          id: "q6c",
          text: "Sometimes want company, sometimes want to be alone",
          scores: { ambivert: 3 },
        },
        {
          id: "q6d",
          text: "Want to be around people — being alone makes it worse",
          scores: { closet_extrovert: 3 },
        },
      ],
    },
    {
      id: "q7",
      text: "Your relationship with small talk:",
      options: [
        {
          id: "q7a",
          text: "Genuinely painful — you'd rather say nothing than talk about the weather",
          scores: { full_introvert: 3 },
        },
        {
          id: "q7b",
          text: "Fine in doses, exhausting in large quantities",
          scores: { social_introvert: 3 },
        },
        {
          id: "q7c",
          text: "Can do it, don't love it, but it depends on the person",
          scores: { ambivert: 3 },
        },
        {
          id: "q7d",
          text: "You're actually good at it and don't mind it at all",
          scores: { closet_extrovert: 3 },
        },
      ],
    },
    {
      id: "q8",
      text: "A whole weekend alone with no plans sounds:",
      options: [
        {
          id: "q8a",
          text: "Like a dream. Genuinely ideal.",
          scores: { full_introvert: 3 },
        },
        {
          id: "q8b",
          text: "Nice, but you'd probably want to see someone by Sunday",
          scores: { social_introvert: 3 },
        },
        {
          id: "q8c",
          text: "Okay, though you'd like to have the option to go out",
          scores: { ambivert: 3 },
        },
        {
          id: "q8d",
          text: "Kind of lonely, honestly — you'd need to make plans",
          scores: { closet_extrovert: 3 },
        },
      ],
    },
  ],
  results: [
    {
      id: "full_introvert",
      title: "Full Introvert",
      emoji: "🌙",
      description:
        "This is real. You're not performing it for aesthetic reasons — you are genuinely, deeply energized by solitude and drained by social interaction. People can be wonderful, and you care about yours. But when you need to restore? You need to be alone, properly, with no one asking anything of you. The world is loud. Your inner world is where you actually live.",
      shareText:
        "I got Full Introvert on the Introvert Test 🌙 are you an introvert? →",
      color: "from-indigo-600 to-violet-800",
    },
    {
      id: "social_introvert",
      title: "Social Introvert",
      emoji: "🎭",
      description:
        "You love people — specific people, in the right doses. You can be the most engaging person in the room, and you genuinely enjoy connection. But afterward, you go home and you need the walls. You're not antisocial. You just have a recharge requirement that extroverts don't, and honoring that isn't rude — it's how you stay sane.",
      shareText:
        "I got Social Introvert on the Introvert Test 🎭 are you an introvert? →",
      color: "from-purple-500 to-pink-600",
    },
    {
      id: "ambivert",
      title: "The True Ambivert",
      emoji: "⚖️",
      description:
        "You are neither — and that's not a cop-out. Your social battery is genuinely context-dependent: certain people charge you, others drain you. Some environments feel electric, others feel suffocating. You don't have a default setting. You have a read-the-room setting. Most people say they're ambiverts. You actually are one.",
      shareText:
        "I got The True Ambivert on the Introvert Test ⚖️ are you an introvert? →",
      color: "from-teal-400 to-cyan-600",
    },
    {
      id: "closet_extrovert",
      title: "Closet Extrovert",
      emoji: "☀️",
      description:
        "You've been calling yourself an introvert for years. It's a personality. But the data says otherwise. You get energy from people. You feel better after social time, not worse. You miss people when you're alone too long. There's nothing wrong with this — but it might be time to accept that you are, in fact, a person who likes people. A lot.",
      shareText:
        "I got Closet Extrovert on the Introvert Test ☀️ are you an introvert? →",
      color: "from-amber-400 to-orange-500",
    },
  ],
};

export default quiz;
