import { Quiz } from "@/lib/types";

const quiz: Quiz = {
  slug: "dater-type-test",
  title: "What Type of Dater Are You?",
  description:
    "From ride-or-die romantic to 'I just like the talking stage.' No judgment. 💘",
  emoji: "💘",
  coverColor: "from-rose-500 to-pink-600",
  category: "Relationships",
  tags: ["dating", "relationships", "personality", "viral", "situationship"],
  createdAt: "2026-04-23",
  isNew: true,
  questions: [
    {
      id: "q1",
      text: "You just matched with someone interesting. Your first move?",
      options: [
        {
          id: "q1a",
          text: "A personalized opener based on something in their profile",
          scores: { golden_retriever: 2, slow_burn: 1 },
        },
        {
          id: "q1b",
          text: "'hey' — ball's in their court",
          scores: { slow_burn: 3 },
        },
        {
          id: "q1c",
          text: "A meme. Low stakes, good vibes.",
          scores: { hot_cold: 2, avoidant: 1 },
        },
        {
          id: "q1d",
          text: "You matched but haven't opened it yet. You'll get there.",
          scores: { avoidant: 3 },
        },
      ],
    },
    {
      id: "q2",
      text: "The date goes really well. What do you do after?",
      options: [
        {
          id: "q2a",
          text: "Text them that night — you had fun and they should know",
          scores: { golden_retriever: 3 },
        },
        {
          id: "q2b",
          text: "Wait a day or two. You don't want to rush anything.",
          scores: { slow_burn: 2, avoidant: 1 },
        },
        {
          id: "q2c",
          text: "Send a great text, then go quiet for three days",
          scores: { hot_cold: 3 },
        },
        {
          id: "q2d",
          text: "Nothing. They can reach out if they're interested.",
          scores: { avoidant: 2, slow_burn: 1 },
        },
      ],
    },
    {
      id: "q3",
      text: "They haven't replied in five hours. You...",
      options: [
        {
          id: "q3a",
          text: "Check your phone a few times but play it completely cool",
          scores: { golden_retriever: 3 },
        },
        {
          id: "q3b",
          text: "Didn't even notice — you have your own life going on",
          scores: { slow_burn: 3 },
        },
        {
          id: "q3c",
          text: "Follow up anyway. You said what you said.",
          scores: { hot_cold: 2, golden_retriever: 1 },
        },
        {
          id: "q3d",
          text: "Convince yourself it's already over",
          scores: { avoidant: 3 },
        },
      ],
    },
    {
      id: "q4",
      text: "Things are getting more serious. You feel...",
      options: [
        {
          id: "q4a",
          text: "Excited — this is exactly what you wanted",
          scores: { golden_retriever: 3 },
        },
        {
          id: "q4b",
          text: "Cautiously hopeful. You've been here before.",
          scores: { slow_burn: 3 },
        },
        {
          id: "q4c",
          text: "Great, then distant, then great again — no explanation",
          scores: { hot_cold: 3 },
        },
        {
          id: "q4d",
          text: "A quiet panic you can't fully explain",
          scores: { avoidant: 3 },
        },
      ],
    },
    {
      id: "q5",
      text: "Your situationship asks 'what are we?' You...",
      options: [
        {
          id: "q5a",
          text: "Already had this answer ready. You were going to bring it up anyway.",
          scores: { golden_retriever: 3 },
        },
        {
          id: "q5b",
          text: "Take a breath and give them a real, honest answer",
          scores: { slow_burn: 3 },
        },
        {
          id: "q5c",
          text: "Say something warm but noncommittal and change the topic",
          scores: { hot_cold: 3 },
        },
        {
          id: "q5d",
          text: "'I don't know' — and you genuinely mean it",
          scores: { avoidant: 3 },
        },
      ],
    },
    {
      id: "q6",
      text: "How do your friends describe your dating life?",
      options: [
        {
          id: "q6a",
          text: "'They fall fast and give everything — it's sweet'",
          scores: { golden_retriever: 3, hot_cold: 1 },
        },
        {
          id: "q6b",
          text: "'Nobody ever knows if they like someone until it's already serious'",
          scores: { slow_burn: 3 },
        },
        {
          id: "q6c",
          text: "'All in one week, completely gone the next'",
          scores: { hot_cold: 3 },
        },
        {
          id: "q6d",
          text: "'They meet great people and somehow always leave'",
          scores: { avoidant: 3 },
        },
      ],
    },
    {
      id: "q7",
      text: "Your ex texts at 11pm. You...",
      options: [
        {
          id: "q7a",
          text: "Respond — you still genuinely care about them",
          scores: { golden_retriever: 3 },
        },
        {
          id: "q7b",
          text: "Leave it for morning and decide with a clear head",
          scores: { slow_burn: 3 },
        },
        {
          id: "q7c",
          text: "Respond warmly, let the energy build, then disappear again",
          scores: { hot_cold: 3 },
        },
        {
          id: "q7d",
          text: "Read it. Feel something. Don't reply for a week.",
          scores: { avoidant: 3 },
        },
      ],
    },
    {
      id: "q8",
      text: "Honestly, why didn't your last relationship work out?",
      options: [
        {
          id: "q8a",
          text: "You cared too much and they needed more space",
          scores: { golden_retriever: 3 },
        },
        {
          id: "q8b",
          text: "You needed more time to open up than they were willing to give",
          scores: { slow_burn: 3 },
        },
        {
          id: "q8c",
          text: "The connection was real, but you'd pull back every time it got close",
          scores: { hot_cold: 3, avoidant: 1 },
        },
        {
          id: "q8d",
          text: "You found reasons it wouldn't work before it had a real chance",
          scores: { avoidant: 3 },
        },
      ],
    },
  ],
  results: [
    {
      id: "golden_retriever",
      title: "The Golden Retriever Dater",
      emoji: "🐶",
      description:
        "You love hard and you're not ashamed of it. You text first, you show up, and when you're into someone, they know it. Some people find it too much. The right person finds it exactly right. Your dating style might look like a lot from the outside, but it's actually just honesty — and that's genuinely rare.",
      shareText:
        "I got The Golden Retriever Dater on the Dater Type Test 🐶 what type of dater are you? →",
      color: "from-yellow-400 to-orange-500",
    },
    {
      id: "slow_burn",
      title: "The Slow Burn",
      emoji: "🕯️",
      description:
        "You don't rush, and you don't have to. You take time to decide if someone is worth opening up to — and once you do, you're completely in. People mistake your patience for disinterest. They're wrong. The ones who wait for you usually say it was worth every second.",
      shareText:
        "I got The Slow Burn on the Dater Type Test 🕯️ what type of dater are you? →",
      color: "from-orange-400 to-red-500",
    },
    {
      id: "hot_cold",
      title: "The Hot & Cold",
      emoji: "🌊",
      description:
        "Intense one week, distant the next — not because you're playing games, but because your feelings move in waves and you don't always know how to hold them steady. People are either fascinated or frustrated by you. Sometimes both. You'll figure it out eventually. Until then: at least you're never boring.",
      shareText:
        "I got The Hot & Cold on the Dater Type Test 🌊 what type of dater are you? →",
      color: "from-cyan-500 to-blue-600",
    },
    {
      id: "avoidant",
      title: "The Love Avoider",
      emoji: "🚪",
      description:
        "You're great on paper: interesting, attractive, charming in conversation. And then something real starts to happen and you quietly find an exit. It's not that you don't want love — you do. You just have a very efficient system for self-sabotage. The good news: knowing this is half the work.",
      shareText:
        "I got The Love Avoider on the Dater Type Test 🚪 what type of dater are you? →",
      color: "from-slate-500 to-gray-700",
    },
  ],
};

export default quiz;
