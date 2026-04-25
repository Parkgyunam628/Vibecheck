import { Quiz } from "@/lib/types";

const quiz: Quiz = {
  slug: "crush-mode-test",
  title: "How Do You Act When You Like Someone?",
  description: "The most revealing thing about a person. Be honest.",
  emoji: "🫶",
  coverColor: "from-fuchsia-500 to-rose-600",
  category: "Relationships",
  tags: ["crush", "dating", "relationships", "personality", "viral"],
  createdAt: "2026-04-26",
  isNew: true,
  questions: [
    {
      id: "q1",
      text: "You develop feelings for someone. What happens first?",
      options: [
        {
          id: "q1a",
          text: "You figure out how to get more time around them",
          scores: { goes_for_it: 3 },
        },
        {
          id: "q1b",
          text: "You spend a week analyzing every recent interaction",
          scores: { silent_sufferer: 3 },
        },
        {
          id: "q1c",
          text: "You get visibly different. Friends notice before you do.",
          scores: { chaos_mode: 3 },
        },
        {
          id: "q1d",
          text: "You pretend it isn't happening and act completely normal",
          scores: { goes_cold: 3 },
        },
      ],
    },
    {
      id: "q2",
      text: "They text you. How long do you take to respond?",
      options: [
        {
          id: "q2a",
          text: "When you see it — no strategy, just a response",
          scores: { goes_for_it: 3 },
        },
        {
          id: "q2b",
          text: "You draft a reply, edit it twice, send it 90 minutes later",
          scores: { silent_sufferer: 3 },
        },
        {
          id: "q2c",
          text: "Immediately, then immediately regret something you said",
          scores: { chaos_mode: 3 },
        },
        {
          id: "q2d",
          text: "Normal timing, showing no evidence of your heart pounding",
          scores: { goes_cold: 3 },
        },
      ],
    },
    {
      id: "q3",
      text: "You're in a group with them. You:",
      options: [
        {
          id: "q3a",
          text: "Find a way to have a real one-on-one conversation",
          scores: { goes_for_it: 3 },
        },
        {
          id: "q3b",
          text: "Hope they notice you from across the room",
          scores: { silent_sufferer: 3 },
        },
        {
          id: "q3c",
          text: "Say something slightly too personal and immediately change the subject",
          scores: { chaos_mode: 3 },
        },
        {
          id: "q3d",
          text: "Act completely normal. More normal than usual, even.",
          scores: { goes_cold: 3 },
        },
      ],
    },
    {
      id: "q4",
      text: "Someone hints that your crush likes you back. You:",
      options: [
        {
          id: "q4a",
          text: "Go find out if it's true",
          scores: { goes_for_it: 3 },
        },
        {
          id: "q4b",
          text: "Need to verify through at least three separate sources",
          scores: { silent_sufferer: 3 },
        },
        {
          id: "q4c",
          text: "Spiral, decide it can't be true, act weird around them",
          scores: { chaos_mode: 3 },
        },
        {
          id: "q4d",
          text: "Feel amazing, tell nobody, continue appearing completely unbothered",
          scores: { goes_cold: 3 },
        },
      ],
    },
    {
      id: "q5",
      text: "They're talking to someone attractive. You:",
      options: [
        {
          id: "q5a",
          text: "Make your presence known in a casual, confident way",
          scores: { goes_for_it: 3 },
        },
        {
          id: "q5b",
          text: "Try not to look, look anyway, try not to look again",
          scores: { silent_sufferer: 3 },
        },
        {
          id: "q5c",
          text: "Have a sudden and unexplainable personality shift",
          scores: { chaos_mode: 3 },
        },
        {
          id: "q5d",
          text: "Feel everything on the inside, show nothing on the outside",
          scores: { goes_cold: 3 },
        },
      ],
    },
    {
      id: "q6",
      text: "You get a chance to be alone with them. You:",
      options: [
        {
          id: "q6a",
          text: "Make the most of it — you have things to say",
          scores: { goes_for_it: 3 },
        },
        {
          id: "q6b",
          text: "Have a good conversation, then wish for two hours you'd said more",
          scores: { silent_sufferer: 3 },
        },
        {
          id: "q6c",
          text: "Overshare or go completely quiet — there is no middle",
          scores: { chaos_mode: 3 },
        },
        {
          id: "q6d",
          text: "Have a great conversation that reveals absolutely nothing about your feelings",
          scores: { goes_cold: 3 },
        },
      ],
    },
    {
      id: "q7",
      text: "How do your friends know when you have a crush?",
      options: [
        {
          id: "q7a",
          text: "You tell them fairly early — you can't really hide it",
          scores: { goes_for_it: 3 },
        },
        {
          id: "q7b",
          text: "You slip up eventually when you mention one too many details",
          scores: { silent_sufferer: 3 },
        },
        {
          id: "q7c",
          text: "Your behavior gives you away before you say a word",
          scores: { chaos_mode: 3 },
        },
        {
          id: "q7d",
          text: "They usually don't — until much later",
          scores: { goes_cold: 3 },
        },
      ],
    },
    {
      id: "q8",
      text: "Eventually, what tends to happen with your crushes?",
      options: [
        {
          id: "q8a",
          text: "You do something about it — or at least try",
          scores: { goes_for_it: 3 },
        },
        {
          id: "q8b",
          text: "They find out through someone else, months later, somehow",
          scores: { silent_sufferer: 3 },
        },
        {
          id: "q8c",
          text: "Ends in either a great story or a mortifying one. No in-between.",
          scores: { chaos_mode: 3 },
        },
        {
          id: "q8d",
          text: "Often just fades before either of you says anything",
          scores: { goes_cold: 3 },
        },
      ],
    },
  ],
  results: [
    {
      id: "goes_for_it",
      title: "The One Who Actually Does Something",
      emoji: "🎯",
      description:
        "You like someone, you figure out how to be around them more, and eventually you do something about it. This sounds basic but apparently it isn't. You have the rare combination of self-awareness and nerve that most people lose the second they're attracted to someone. Your success rate isn't perfect. But at least you have one.",
      shareText:
        "I got The One Who Actually Does Something on the Crush Mode Test 🎯 how do you act when you like someone? →",
      color: "from-orange-400 to-rose-500",
    },
    {
      id: "silent_sufferer",
      title: "The Secret Agent",
      emoji: "🕵️",
      description:
        "Everything is happening internally. You're fully, deeply in your feelings — and nobody knows. You've memorized their texting patterns. You've replayed every interaction looking for signals. You will feel everything and probably say nothing unless circumstances force it. The romantic tension you live in is entirely self-contained.",
      shareText:
        "I got The Secret Agent on the Crush Mode Test 🕵️ how do you act when you like someone? →",
      color: "from-indigo-500 to-violet-600",
    },
    {
      id: "chaos_mode",
      title: "Chaotic Feelings Energy",
      emoji: "💥",
      description:
        "Having a crush changes your behavior in ways that are obvious to everyone except you. You overshare, undershare, say something odd, go too quiet, then too intense. The good news: your unfiltered reaction to real feelings is endearing to the right person. The bad news: there's been some collateral damage.",
      shareText:
        "I got Chaotic Feelings Energy on the Crush Mode Test 💥 how do you act when you like someone? →",
      color: "from-fuchsia-500 to-pink-600",
    },
    {
      id: "goes_cold",
      title: "Cool Outside, Destroyed Inside",
      emoji: "🧊",
      description:
        "You are an exceptional actor. You've developed the skill of appearing completely fine when your entire internal world is on fire. The people you like rarely know you like them. This protects you from embarrassment and also prevents things from ever starting. It's a flawless system with one flaw.",
      shareText:
        "I got Cool Outside, Destroyed Inside on the Crush Mode Test 🧊 how do you act when you like someone? →",
      color: "from-sky-500 to-blue-600",
    },
  ],
};

export default quiz;
