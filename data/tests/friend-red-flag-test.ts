import { Quiz } from "@/lib/types";

const quiz: Quiz = {
  slug: "friend-red-flag-test",
  title: "What's Your Friendship Red Flag?",
  description: "You have one. Your friends already know what it is.",
  emoji: "🚩",
  coverColor: "from-orange-400 to-amber-500",
  category: "Relationships",
  tags: ["friendship", "friends", "relationships", "red flag", "viral"],
  createdAt: "2026-04-26",
  isNew: true,
  questions: [
    {
      id: "q1",
      text: "A friend vents about something hard. You:",
      options: [
        {
          id: "q1a",
          text: "Listen, ask questions, stay in it with them",
          scores: { actually_solid: 3 },
        },
        {
          id: "q1b",
          text: "Listen, then share a similar thing that happened to you",
          scores: { one_upper: 3 },
        },
        {
          id: "q1c",
          text: "There for them — when you're not too in your own head",
          scores: { canceler: 3 },
        },
        {
          id: "q1d",
          text: "Start working through solutions before they've finished talking",
          scores: { fixer: 3 },
        },
      ],
    },
    {
      id: "q2",
      text: "They land something big — a job, a relationship, a win. Your first feeling:",
      options: [
        {
          id: "q2a",
          text: "Genuinely happy. No asterisk.",
          scores: { actually_solid: 3 },
        },
        {
          id: "q2b",
          text: "Happy — and distracted by your own version of that story",
          scores: { one_upper: 3 },
        },
        {
          id: "q2c",
          text: "Happy, and you'll celebrate them... soon",
          scores: { canceler: 3 },
        },
        {
          id: "q2d",
          text: "Happy, and immediately thinking about how to help them optimize it",
          scores: { fixer: 3 },
        },
      ],
    },
    {
      id: "q3",
      text: "Your friend cancels for the second time this month. You:",
      options: [
        {
          id: "q3a",
          text: "Check in — something might be off",
          scores: { actually_solid: 3 },
        },
        {
          id: "q3b",
          text: "Say it's fine, bring it up four conversations later",
          scores: { one_upper: 2, actually_solid: 1 },
        },
        {
          id: "q3c",
          text: "Relate. You've cancelled on them twice too.",
          scores: { canceler: 3 },
        },
        {
          id: "q3d",
          text: "Suggest three alternative dates immediately",
          scores: { fixer: 3 },
        },
      ],
    },
    {
      id: "q4",
      text: "A friend asks for your honest opinion on a bad decision. You:",
      options: [
        {
          id: "q4a",
          text: "Give it gently but clearly — truth is care",
          scores: { actually_solid: 3 },
        },
        {
          id: "q4b",
          text: "Give the truth, then mention how you handled something similar",
          scores: { one_upper: 3 },
        },
        {
          id: "q4c",
          text: "Say something supportive and vague enough to avoid conflict",
          scores: { canceler: 3 },
        },
        {
          id: "q4d",
          text: "Give a full breakdown with recommendations and follow-up questions",
          scores: { fixer: 3 },
        },
      ],
    },
    {
      id: "q5",
      text: "Who texts first in most of your friendships?",
      options: [
        {
          id: "q5a",
          text: "Balanced, honestly",
          scores: { actually_solid: 3 },
        },
        {
          id: "q5b",
          text: "Them. You always have a lot going on.",
          scores: { one_upper: 3 },
        },
        {
          id: "q5c",
          text: "Them. You always mean to reach out first.",
          scores: { canceler: 3 },
        },
        {
          id: "q5d",
          text: "Usually you — you like keeping things moving",
          scores: { fixer: 2, actually_solid: 1 },
        },
      ],
    },
    {
      id: "q6",
      text: "When a friend is going through something emotionally heavy, you are:",
      options: [
        {
          id: "q6a",
          text: "Fully present — phone down, no agenda",
          scores: { actually_solid: 3 },
        },
        {
          id: "q6b",
          text: "Present, though you sometimes end up talking about your own version",
          scores: { one_upper: 3 },
        },
        {
          id: "q6c",
          text: "There when you're available, which isn't always when they need it",
          scores: { canceler: 3 },
        },
        {
          id: "q6d",
          text: "Focused on getting them from upset to okay as fast as possible",
          scores: { fixer: 3 },
        },
      ],
    },
    {
      id: "q7",
      text: "A friend shares exciting news. Your response:",
      options: [
        {
          id: "q7a",
          text: "Ask the follow-up questions. Let it be fully about them.",
          scores: { actually_solid: 3 },
        },
        {
          id: "q7b",
          text: "Match their energy and share something related from your own life",
          scores: { one_upper: 3 },
        },
        {
          id: "q7c",
          text: "React warmly in the moment, then go quiet for a few days",
          scores: { canceler: 3 },
        },
        {
          id: "q7d",
          text: "Already thinking about who else they should tell and what to do next",
          scores: { fixer: 3 },
        },
      ],
    },
    {
      id: "q8",
      text: "If a close friend described you in one line, they'd say:",
      options: [
        {
          id: "q8a",
          text: "'They really show up'",
          scores: { actually_solid: 3 },
        },
        {
          id: "q8b",
          text: "'Everything somehow reminds them of themselves'",
          scores: { one_upper: 3 },
        },
        {
          id: "q8c",
          text: "'Great when they're present — hard to count on otherwise'",
          scores: { canceler: 3 },
        },
        {
          id: "q8d",
          text: "'They mean well but sometimes help too hard'",
          scores: { fixer: 3 },
        },
      ],
    },
  ],
  results: [
    {
      id: "actually_solid",
      title: "No Flag Here",
      emoji: "💚",
      description:
        "You listen without making it about you, you show up when it counts, and you don't disappear when things get hard. This sounds like a low bar — it isn't. Most people fail at least one of those regularly. Keep being this. The people around you notice more than they say.",
      shareText:
        "I got No Flag Here on the Friendship Red Flag Test 💚 what's your friendship red flag? →",
      color: "from-emerald-400 to-teal-500",
    },
    {
      id: "one_upper",
      title: "The One-Upper",
      emoji: "🏆",
      description:
        "When a friend shares something, your brain immediately finds the version that happened to you. You're not trying to steal the moment — you're trying to connect. But 'me too, and actually more so' lands differently than just listening. Let the moment be fully theirs sometimes. Your stories will still be there.",
      shareText:
        "I got The One-Upper on the Friendship Red Flag Test 🏆 what's your friendship red flag? →",
      color: "from-amber-400 to-orange-500",
    },
    {
      id: "canceler",
      title: "The Consistently Maybe",
      emoji: "📅",
      description:
        "You're great in theory — warm, loving, full of good intentions. You're also good at canceling, going quiet when things get heavy, and apologizing from a safe distance. The caring is real. The follow-through is inconsistent. That gap is the flag. The good news: it's closeable.",
      shareText:
        "I got The Consistently Maybe on the Friendship Red Flag Test 📅 what's your friendship red flag? →",
      color: "from-sky-400 to-blue-500",
    },
    {
      id: "fixer",
      title: "The One Who Helps Too Hard",
      emoji: "🔧",
      description:
        "You care deeply and it shows — immediately by trying to fix everything. The problem is most people don't want to be fixed; they want to be heard. Your advice is usually good. The timing is often wrong. Try staying in the problem with them for just a little longer before offering the exit.",
      shareText:
        "I got The One Who Helps Too Hard on the Friendship Red Flag Test 🔧 what's your friendship red flag? →",
      color: "from-violet-500 to-purple-600",
    },
  ],
};

export default quiz;
