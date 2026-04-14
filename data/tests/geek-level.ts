import { Quiz } from "@/lib/types";

const quiz: Quiz = {
  slug: "geek-level-test",
  title: "What's Your Geek Level?",
  description:
    "From casual fan to full-on nerd overlord — where do you actually land? 🤓",
  emoji: "🤓",
  coverColor: "from-blue-600 to-cyan-500",
  category: "Personality",
  tags: ["geek", "nerd", "tech", "fandom", "viral"],
  createdAt: "2024-04-14",
  questions: [
    {
      id: "q1",
      text: "Someone mentions 'the ring'. Your brain immediately goes to:",
      options: [
        {
          id: "q1a",
          text: "Marriage proposal / jewelry",
          scores: { casual: 3 },
        },
        {
          id: "q1b",
          text: "Lord of the Rings — obviously",
          scores: { fan: 3, geek: 1 },
        },
        {
          id: "q1c",
          text: "The One Ring and you immediately quote Elvish",
          scores: { geek: 3, overlord: 1 },
        },
        {
          id: "q1d",
          text: "Ring topology in computer networking",
          scores: { overlord: 3, geek: 2 },
        },
      ],
    },
    {
      id: "q2",
      text: "Your weekend plans involve:",
      options: [
        {
          id: "q2a",
          text: "Brunch and vibes",
          scores: { casual: 3 },
        },
        {
          id: "q2b",
          text: "Watching the new episode of your favorite show",
          scores: { fan: 3 },
        },
        {
          id: "q2c",
          text: "A marathon gaming session or convention prep",
          scores: { geek: 3, fan: 1 },
        },
        {
          id: "q2d",
          text: "Building a server, contributing to open source, or a 48hr hackathon",
          scores: { overlord: 3 },
        },
      ],
    },
    {
      id: "q3",
      text: "How do you feel about spreadsheets?",
      options: [
        {
          id: "q3a",
          text: "I use them at work. Barely.",
          scores: { casual: 3 },
        },
        {
          id: "q3b",
          text: "I have a spreadsheet for tracking my watchlist",
          scores: { fan: 3, geek: 1 },
        },
        {
          id: "q3c",
          text: "I have spreadsheets for my hobbies, budget, AND my RPG campaigns",
          scores: { geek: 3 },
        },
        {
          id: "q3d",
          text: "Spreadsheets are cute. I wrote a script that does this automatically.",
          scores: { overlord: 3 },
        },
      ],
    },
    {
      id: "q4",
      text: "Someone says something factually wrong on the internet. You:",
      options: [
        {
          id: "q4a",
          text: "Scroll past. Not my problem.",
          scores: { casual: 3 },
        },
        {
          id: "q4b",
          text: "Feel mildly annoyed but say nothing",
          scores: { fan: 2, casual: 1 },
        },
        {
          id: "q4c",
          text: "Reply with a polite but detailed correction and sources",
          scores: { geek: 3 },
        },
        {
          id: "q4d",
          text: "Write a 12-paragraph thread with citations and a diagram",
          scores: { overlord: 3 },
        },
      ],
    },
    {
      id: "q5",
      text: "Pick a Friday night:",
      options: [
        {
          id: "q5a",
          text: "Going out with friends — bars, clubs, the whole thing",
          scores: { casual: 3 },
        },
        {
          id: "q5b",
          text: "Movie night with snacks at home",
          scores: { fan: 2, casual: 1 },
        },
        {
          id: "q5c",
          text: "5-hour gaming session or manga binge",
          scores: { geek: 3 },
        },
        {
          id: "q5d",
          text: "Deep dive into a rabbit hole that started with one Wikipedia article",
          scores: { overlord: 3, geek: 1 },
        },
      ],
    },
    {
      id: "q6",
      text: "Your browser tabs right now look like:",
      options: [
        {
          id: "q6a",
          text: "Instagram, YouTube, maybe one Google Maps",
          scores: { casual: 3 },
        },
        {
          id: "q6b",
          text: "Reddit, a wiki page, and a streaming service",
          scores: { fan: 3 },
        },
        {
          id: "q6c",
          text: "40+ tabs, organized by topic, multiple windows",
          scores: { geek: 3, overlord: 1 },
        },
        {
          id: "q6d",
          text: "Multiple browser profiles, tab groups, and a note-taking app synced to everything",
          scores: { overlord: 3 },
        },
      ],
    },
    {
      id: "q7",
      text: "How do you feel about the word 'actually'?",
      options: [
        {
          id: "q7a",
          text: "It's just a word?",
          scores: { casual: 3 },
        },
        {
          id: "q7b",
          text: "I use it occasionally when I need to clarify something",
          scores: { fan: 2 },
        },
        {
          id: "q7c",
          text: "It's my way of gently correcting people who are wrong",
          scores: { geek: 3 },
        },
        {
          id: "q7d",
          text: "I start 40% of my sentences with it and I'm not sorry",
          scores: { overlord: 3 },
        },
      ],
    },
    {
      id: "q8",
      text: "What's your relationship with sleep?",
      options: [
        {
          id: "q8a",
          text: "Normal. 7-8 hours, in bed by midnight.",
          scores: { casual: 3 },
        },
        {
          id: "q8b",
          text: "I sleep when a show ends or after one more episode",
          scores: { fan: 3 },
        },
        {
          id: "q8c",
          text: "I fall asleep reading wikis or forums at 2am",
          scores: { geek: 3 },
        },
        {
          id: "q8d",
          text: "Sleep is a performance issue I'm actively trying to optimize",
          scores: { overlord: 3 },
        },
      ],
    },
  ],
  results: [
    {
      id: "casual",
      title: "Casual Enjoyer",
      emoji: "😎",
      description:
        "You're culturally aware without being consumed by any one thing. You watch the big shows, play a game or two, and live a beautifully balanced life. You're the person who makes everyone feel included because you know a little about everything.",
      shareText:
        "I got Casual Enjoyer on the Geek Level Test 😎 What's your geek level? →",
      color: "from-sky-400 to-blue-500",
    },
    {
      id: "fan",
      title: "Passionate Fan",
      emoji: "🔥",
      description:
        "You have your things and you love them deeply. You know your lore, you have opinions, and you could talk for hours about your favorite franchises. You're in the fandoms but you haven't lost touch with the outside world. Yet.",
      shareText:
        "I got Passionate Fan on the Geek Level Test 🔥 What's your geek level? →",
      color: "from-orange-400 to-red-500",
    },
    {
      id: "geek",
      title: "Certified Geek",
      emoji: "🤓",
      description:
        "You've gone deep. You have niche interests that most people don't understand, strong opinions about things normal people don't even know exist, and a browser history that would confuse and impress in equal measure. Embrace it.",
      shareText:
        "I got Certified Geek on the Geek Level Test 🤓 What's your geek level? →",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: "overlord",
      title: "Nerd Overlord",
      emoji: "🧠",
      description:
        "You have transcended normal geekdom. You don't just consume — you build, create, optimize, and obsessively document. You probably have a custom setup, a strong framework for everything, and at least one project no one else fully understands. We're not worthy.",
      shareText:
        "I got Nerd Overlord on the Geek Level Test 🧠 What's your geek level? →",
      color: "from-violet-600 to-purple-700",
    },
  ],
};

export default quiz;
