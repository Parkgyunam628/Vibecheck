import { Quiz } from "@/lib/types";

const quiz: Quiz = {
  slug: "alone-time-test",
  title: "How Do You Spend Your Alone Time?",
  description: "Nobody's watching. What do you actually do?",
  emoji: "🛋️",
  coverColor: "from-indigo-400 to-violet-600",
  category: "Lifestyle",
  tags: ["alone time", "lifestyle", "personality", "introvert", "vibe", "viral"],
  createdAt: "2026-04-29",
  isNew: true,
  questions: [
    {
      id: "q1",
      text: "Free evening, no plans, nobody expecting anything from you. First instinct:",
      options: [
        {
          id: "q1a",
          text: "Find the right spot on the couch and stay there",
          scores: { nester: 3 },
        },
        {
          id: "q1b",
          text: "Start the thing you've been waiting for time to work on",
          scores: { productive: 3 },
        },
        {
          id: "q1c",
          text: "Text a few people to see what's going on",
          scores: { social_recharger: 3 },
        },
        {
          id: "q1d",
          text: "Go somewhere — even just a walk or an errand",
          scores: { restless: 3 },
        },
      ],
    },
    {
      id: "q2",
      text: "Your ideal version of doing nothing looks like:",
      options: [
        {
          id: "q2a",
          text: "A show, a blanket, minimal movement, zero obligations",
          scores: { nester: 3 },
        },
        {
          id: "q2b",
          text: "Something with output — reading, journaling, a project",
          scores: { productive: 3 },
        },
        {
          id: "q2c",
          text: "Phone calls, low-effort texting, easy social contact from the couch",
          scores: { social_recharger: 3 },
        },
        {
          id: "q2d",
          text: "There is no doing nothing — you're always moving toward something",
          scores: { restless: 3 },
        },
      ],
    },
    {
      id: "q3",
      text: "After a genuinely draining week, what actually recharges you?",
      options: [
        {
          id: "q3a",
          text: "A full weekend at home with no plans and no one coming over",
          scores: { nester: 3 },
        },
        {
          id: "q3b",
          text: "Getting absorbed in something creative or personally meaningful",
          scores: { productive: 3 },
        },
        {
          id: "q3c",
          text: "Low-key contact with people you like — calls, texts, easy hangouts",
          scores: { social_recharger: 3 },
        },
        {
          id: "q3d",
          text: "Movement — outside, gym, somewhere that isn't your living room",
          scores: { restless: 3 },
        },
      ],
    },
    {
      id: "q4",
      text: "If you had three full days completely to yourself, you would:",
      options: [
        {
          id: "q4a",
          text: "Not leave the house and feel completely fine about it",
          scores: { nester: 3 },
        },
        {
          id: "q4b",
          text: "Finally make real progress on a personal project",
          scores: { productive: 3 },
        },
        {
          id: "q4c",
          text: "Have more catch-up conversations than usual",
          scores: { social_recharger: 3 },
        },
        {
          id: "q4d",
          text: "Fill the days with movement, exploring, and not sitting still",
          scores: { restless: 3 },
        },
      ],
    },
    {
      id: "q5",
      text: "What do people say when you describe how you spent the weekend?",
      options: [
        {
          id: "q5a",
          text: "'That sounds ideal' or 'That sounds like a lot of nothing'",
          scores: { nester: 3 },
        },
        {
          id: "q5b",
          text: "'When do you sleep?' or 'You're always working on something'",
          scores: { productive: 3 },
        },
        {
          id: "q5c",
          text: "'You talked to everyone' or 'You're so good at keeping in touch'",
          scores: { social_recharger: 3 },
        },
        {
          id: "q5d",
          text: "'You didn't stay home once?' or 'I don't know how you have that energy'",
          scores: { restless: 3 },
        },
      ],
    },
    {
      id: "q6",
      text: "Your relationship with silence at home is:",
      options: [
        {
          id: "q6a",
          text: "Good — you might put something on eventually, but you don't panic in it",
          scores: { nester: 3 },
        },
        {
          id: "q6b",
          text: "You fill it with a podcast or music while you work",
          scores: { productive: 3 },
        },
        {
          id: "q6c",
          text: "There's usually a conversation happening somewhere — voice note, call, text chain",
          scores: { social_recharger: 3 },
        },
        {
          id: "q6d",
          text: "You're rarely home long enough for it to become a thing",
          scores: { restless: 3 },
        },
      ],
    },
    {
      id: "q7",
      text: "Be honest: how much time do you spend on your phone when you're alone?",
      options: [
        {
          id: "q7a",
          text: "It's background — you're watching something, phone is secondary",
          scores: { nester: 3 },
        },
        {
          id: "q7b",
          text: "Less than people assume — you're usually in the middle of something",
          scores: { productive: 3 },
        },
        {
          id: "q7c",
          text: "A lot — that's how you stay connected when you're by yourself",
          scores: { social_recharger: 3 },
        },
        {
          id: "q7d",
          text: "You're usually not home long enough for this to be a pattern",
          scores: { restless: 3 },
        },
      ],
    },
    {
      id: "q8",
      text: "The version of yourself when you're completely alone is:",
      options: [
        {
          id: "q8a",
          text: "Honestly the most at peace — nothing to perform, nothing to manage",
          scores: { nester: 3 },
        },
        {
          id: "q8b",
          text: "The most focused version — this is when real work happens",
          scores: { productive: 3 },
        },
        {
          id: "q8c",
          text: "Pretty similar to usual, just with more phone time and softer plans",
          scores: { social_recharger: 3 },
        },
        {
          id: "q8d",
          text: "A version that doesn't stay put for long",
          scores: { restless: 3 },
        },
      ],
    },
  ],
  results: [
    {
      id: "nester",
      title: "The Nester",
      emoji: "🕯️",
      description:
        "Your home is a carefully managed comfort zone, and alone time means actually being in it — the right temperature, something decent playing in the background, nowhere to be. You don't need productivity. You need decompression. Your idea of a perfect night is what most people would describe as doing nothing. You've made peace with that, and honestly, you were right.",
      shareText:
        "I got The Nester on the Alone Time Test 🕯️ how do you spend your alone time? →",
      color: "from-violet-500 to-indigo-700",
    },
    {
      id: "productive",
      title: "The Productive Decompressor",
      emoji: "💻",
      description:
        "You can't fully relax without feeling like you're doing something. Alone time isn't rest — it's the time you've been waiting for to work on what you actually care about. Your version of unwinding involves output. Other people find this exhausting to think about. You find it genuinely satisfying. You're not wired wrong. You're just wired differently.",
      shareText:
        "I got The Productive Decompressor on the Alone Time Test 💻 how do you spend your alone time? →",
      color: "from-blue-500 to-indigo-600",
    },
    {
      id: "social_recharger",
      title: "The Social Recharger",
      emoji: "📱",
      description:
        "Alone doesn't mean disconnected for you. You call people, work through the group chat backlog, and feel genuinely restored by low-stakes social contact from the comfort of your couch. You need quiet — you just like knowing people are nearby in some form. You're not an extrovert exactly. You're just someone who recharges with the feeling of connection, not the performance of it.",
      shareText:
        "I got The Social Recharger on the Alone Time Test 📱 how do you spend your alone time? →",
      color: "from-teal-400 to-cyan-600",
    },
    {
      id: "restless",
      title: "The Restless Wanderer",
      emoji: "🌿",
      description:
        "You don't really do sitting still. Your alone time involves movement — walks, errands, gym, getting somewhere. The recharge happens in motion, not in stillness. People assume you're always doing something because you are. You just happen to actually like it. Your apartment is probably nice. You're just never in it.",
      shareText:
        "I got The Restless Wanderer on the Alone Time Test 🌿 how do you spend your alone time? →",
      color: "from-emerald-400 to-teal-600",
    },
  ],
};

export default quiz;
