import { Quiz } from "@/lib/types";

const quiz: Quiz = {
  slug: "main-character-test",
  title: "Are You the Main Character?",
  description:
    "Find out if you're living your protagonist era or just background NPC era 👀",
  emoji: "🎬",
  coverColor: "from-purple-600 to-pink-600",
  category: "Personality",
  tags: ["npc", "main character", "personality", "viral"],
  createdAt: "2024-04-14",
  isTrending: true,
  questions: [
    {
      id: "q1",
      text: "Your morning alarm goes off. What do you do?",
      options: [
        {
          id: "q1a",
          text: "Snooze 3 times, rush out the door with messy hair",
          scores: { npc: 3, sidekick: 1 },
        },
        {
          id: "q1b",
          text: "Wake up immediately — you have a whole morning routine",
          scores: { main: 2, chosen_one: 1 },
        },
        {
          id: "q1c",
          text: "Lie there staring at the ceiling having an existential moment",
          scores: { main: 3, sidekick: 1 },
        },
        {
          id: "q1d",
          text: "Already been up for 2 hours. Sleep is for the weak.",
          scores: { chosen_one: 3 },
        },
      ],
    },
    {
      id: "q2",
      text: "You walk into a room full of strangers. What happens?",
      options: [
        {
          id: "q2a",
          text: "Heads turn. The music slows. You own it.",
          scores: { main: 3, chosen_one: 2 },
        },
        {
          id: "q2b",
          text: "You immediately find the snack table",
          scores: { npc: 2, sidekick: 2 },
        },
        {
          id: "q2c",
          text: "You scan for the most interesting person and make a beeline",
          scores: { main: 2, sidekick: 1 },
        },
        {
          id: "q2d",
          text: "You quietly observe everything from a corner like a detective",
          scores: { chosen_one: 3, main: 1 },
        },
      ],
    },
    {
      id: "q3",
      text: "Pick your ideal rainy day activity:",
      options: [
        {
          id: "q3a",
          text: "Stare out the window dramatically while sad music plays",
          scores: { main: 3 },
        },
        {
          id: "q3b",
          text: "Binge-watch a show until 3am without guilt",
          scores: { npc: 3, sidekick: 1 },
        },
        {
          id: "q3c",
          text: "Finally start that thing you keep saying you'll do",
          scores: { chosen_one: 3, main: 1 },
        },
        {
          id: "q3d",
          text: "Call your friends and make plans immediately",
          scores: { sidekick: 3, main: 1 },
        },
      ],
    },
    {
      id: "q4",
      text: "Someone is rude to you in public. Your move?",
      options: [
        {
          id: "q4a",
          text: "Give them THE look and walk away slowly",
          scores: { main: 3, chosen_one: 1 },
        },
        {
          id: "q4b",
          text: "Think of the perfect comeback… two hours later",
          scores: { npc: 3 },
        },
        {
          id: "q4c",
          text: "Calmly but firmly call them out right there",
          scores: { chosen_one: 3, main: 1 },
        },
        {
          id: "q4d",
          text: "Vent to your friend about it later in great detail",
          scores: { sidekick: 3, npc: 1 },
        },
      ],
    },
    {
      id: "q5",
      text: "What's your relationship with your phone?",
      options: [
        {
          id: "q5a",
          text: "Always on — you're creating content and keeping up",
          scores: { main: 2, sidekick: 2 },
        },
        {
          id: "q5b",
          text: "It's a tool. You control it, not the other way around.",
          scores: { chosen_one: 3 },
        },
        {
          id: "q5c",
          text: "Doom scrolling is basically a personality trait at this point",
          scores: { npc: 3 },
        },
        {
          id: "q5d",
          text: "You text your friends memes 24/7 and that's your love language",
          scores: { sidekick: 3 },
        },
      ],
    },
    {
      id: "q6",
      text: "Your friend group dynamic is:",
      options: [
        {
          id: "q6a",
          text: "You're clearly the one with the plans and the vision",
          scores: { main: 3, chosen_one: 1 },
        },
        {
          id: "q6b",
          text: "You're the funny one / the heart of the group",
          scores: { sidekick: 3 },
        },
        {
          id: "q6c",
          text: "You just kind of… exist in the group chat",
          scores: { npc: 3 },
        },
        {
          id: "q6d",
          text: "You're the one everyone calls when things get serious",
          scores: { chosen_one: 3, main: 1 },
        },
      ],
    },
    {
      id: "q7",
      text: "How do you handle a challenge or setback?",
      options: [
        {
          id: "q7a",
          text: "Let it fuel your villain arc for a week, then rise stronger",
          scores: { main: 3 },
        },
        {
          id: "q7b",
          text: "Cry once, process it, move forward with a plan",
          scores: { chosen_one: 3, main: 1 },
        },
        {
          id: "q7c",
          text: "Avoid thinking about it until it goes away (or doesn't)",
          scores: { npc: 3 },
        },
        {
          id: "q7d",
          text: "Call your support system and work through it together",
          scores: { sidekick: 3, main: 1 },
        },
      ],
    },
    {
      id: "q8",
      text: "Your life has a soundtrack. What's playing right now?",
      options: [
        {
          id: "q8a",
          text: "Epic orchestral music as you walk down the street",
          scores: { chosen_one: 3, main: 1 },
        },
        {
          id: "q8b",
          text: "Indie pop that perfectly captures your complicated feelings",
          scores: { main: 3 },
        },
        {
          id: "q8c",
          text: "Upbeat background music — you're vibing with the moment",
          scores: { sidekick: 3 },
        },
        {
          id: "q8d",
          text: "Elevator music. Just kind of… there.",
          scores: { npc: 3 },
        },
      ],
    },
  ],
  results: [
    {
      id: "main",
      title: "Main Character Energy",
      emoji: "🌟",
      description:
        "You're the protagonist. Everything that happens to you is also a scene in the movie of your life — and somewhere in the back of your mind, you know it. You process things loudly, you have a whole aesthetic, and there's always a running internal monologue. People end up invested in how your story goes. You kind of love that.",
      shareText:
        "I got Main Character Energy on the Main Character Test 🌟 which one are you? →",
      color: "from-purple-500 to-pink-500",
    },
    {
      id: "chosen_one",
      title: "The Chosen One",
      emoji: "⚡",
      description:
        "You're not just a main character — you're THE ONE. People sense there's something different about you. You move with purpose, handle chaos without flinching, and somehow always know what to do. The prophecy was about you all along.",
      shareText:
        "I got The Chosen One on the Main Character Test ⚡ which one are you? →",
      color: "from-yellow-400 to-orange-500",
    },
    {
      id: "sidekick",
      title: "Loyal Sidekick",
      emoji: "🤝",
      description:
        "You're the one people call when things actually matter. Funny, loyal, and completely solid under pressure. You don't need the spotlight — you're the reason the good memories happened at all. The main character talks about you all the time. Usually while saying how lost they'd be without you.",
      shareText:
        "I got Loyal Sidekick on the Main Character Test 🤝 which one are you? →",
      color: "from-green-400 to-teal-500",
    },
    {
      id: "npc",
      title: "Pure NPC Energy",
      emoji: "🗿",
      description:
        "You exist. You walk around. You eat snacks. Not everything has to be a moment — you've somehow worked that out while everyone else is busy narrating their life out loud. Unbothered. Background. Completely at peace with it. The most underestimated character type in any story.",
      shareText:
        "I got Pure NPC Energy on the Main Character Test 🗿 which one are you? →",
      color: "from-gray-400 to-slate-600",
    },
  ],
};

export default quiz;
