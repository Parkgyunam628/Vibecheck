import { Quiz } from "@/lib/types";

const quiz: Quiz = {
  slug: "travel-type-test",
  title: "What Kind of Traveler Are You?",
  description:
    "Lounge access or a 40L backpack? You can't be both. Let's find out where you actually land ✈️",
  emoji: "✈️",
  coverColor: "from-sky-400 to-blue-600",
  category: "Lifestyle",
  tags: ["travel", "lifestyle", "personality", "viral"],
  createdAt: "2025-04-22",
  isNew: true,
  questions: [
    {
      id: "q1",
      text: "Your trip planning starts:",
      options: [
        {
          id: "q1a",
          text: "6 months out — itinerary already color-coded in a Google Doc",
          scores: { planner: 3 },
        },
        {
          id: "q1b",
          text: "When the hotel upgrade email arrives",
          scores: { luxury: 3 },
        },
        {
          id: "q1c",
          text: "At the airport, probably",
          scores: { adventurer: 3 },
        },
        {
          id: "q1d",
          text: "Never. Someone else planned this.",
          scores: { homebody: 3 },
        },
      ],
    },
    {
      id: "q2",
      text: "Your ideal accommodation is:",
      options: [
        {
          id: "q2a",
          text: "5-star with a rainfall shower, turndown service, and a view",
          scores: { luxury: 3 },
        },
        {
          id: "q2b",
          text: "Booked 4 months ago — great reviews, walkable location, good WiFi",
          scores: { planner: 3 },
        },
        {
          id: "q2c",
          text: "Hostel, Airbnb, tent — whatever's available on arrival",
          scores: { adventurer: 3 },
        },
        {
          id: "q2d",
          text: "Somewhere that feels as close to home as possible",
          scores: { homebody: 3 },
        },
      ],
    },
    {
      id: "q3",
      text: "At the airport, you are:",
      options: [
        {
          id: "q3a",
          text: "In the lounge with your noise-canceling headphones and a drink",
          scores: { luxury: 3 },
        },
        {
          id: "q3b",
          text: "3 hours early with a printed boarding pass and a backup plan",
          scores: { planner: 3 },
        },
        {
          id: "q3c",
          text: "Chatting with someone interesting at the gate",
          scores: { adventurer: 3 },
        },
        {
          id: "q3d",
          text: "Already calculating how many hours until the return flight",
          scores: { homebody: 3 },
        },
      ],
    },
    {
      id: "q4",
      text: "When something goes wrong on a trip, you:",
      options: [
        {
          id: "q4a",
          text: "Call the hotel concierge and let them handle it",
          scores: { luxury: 3 },
        },
        {
          id: "q4b",
          text: "Refer to your backup plan — there is always a backup plan",
          scores: { planner: 3 },
        },
        {
          id: "q4c",
          text: "This is the good part. This is actually the story.",
          scores: { adventurer: 3 },
        },
        {
          id: "q4d",
          text: "Take it as a sign to just go home early",
          scores: { homebody: 3 },
        },
      ],
    },
    {
      id: "q5",
      text: "Your travel photos look like:",
      options: [
        {
          id: "q5a",
          text: "Professionally composed. Golden hour. Phone on a tripod.",
          scores: { luxury: 3 },
        },
        {
          id: "q5b",
          text: "Organized into folders. Labeled by city and date. Already backed up.",
          scores: { planner: 3 },
        },
        {
          id: "q5c",
          text: "Blurry, chaotic, taken mid-sprint — but excellent.",
          scores: { adventurer: 3 },
        },
        {
          id: "q5d",
          text: "Mostly food you ordered from your hotel room.",
          scores: { homebody: 3 },
        },
      ],
    },
    {
      id: "q6",
      text: "How do you approach the language barrier?",
      options: [
        {
          id: "q6a",
          text: "Hired a local guide who handles everything seamlessly",
          scores: { luxury: 3 },
        },
        {
          id: "q6b",
          text: "Downloaded the offline translation app two months ago",
          scores: { planner: 3 },
        },
        {
          id: "q6c",
          text: "Love it — you've learned 12 words and feel completely local",
          scores: { adventurer: 3 },
        },
        {
          id: "q6d",
          text: "Already found the tourist strip with English menus",
          scores: { homebody: 3 },
        },
      ],
    },
    {
      id: "q7",
      text: "How much luggage do you bring?",
      options: [
        {
          id: "q7a",
          text: "One perfectly curated carry-on with hotel toiletries waiting",
          scores: { luxury: 3 },
        },
        {
          id: "q7b",
          text: "The exact right amount — you packed from a checklist",
          scores: { planner: 3 },
        },
        {
          id: "q7c",
          text: "A 40L backpack and the same 4 outfits you've worn for 3 weeks",
          scores: { adventurer: 3 },
        },
        {
          id: "q7d",
          text: "Your whole bedroom, just in case",
          scores: { homebody: 3 },
        },
      ],
    },
    {
      id: "q8",
      text: "The day after you get home, you feel:",
      options: [
        {
          id: "q8a",
          text: "Refreshed — that's what a good trip should do",
          scores: { luxury: 3 },
        },
        {
          id: "q8b",
          text: "Satisfied. The itinerary worked. Everything as planned.",
          scores: { planner: 3 },
        },
        {
          id: "q8c",
          text: "Already looking for the next flight",
          scores: { adventurer: 3 },
        },
        {
          id: "q8d",
          text: "Genuinely, deeply happy to be home. Like, really.",
          scores: { homebody: 3 },
        },
      ],
    },
  ],
  results: [
    {
      id: "luxury",
      title: "The Luxe Minimalist",
      emoji: "🥂",
      description:
        "You travel less, but when you do, it's immaculate. Soft sheets, meaningful itineraries, and zero tolerating things that could simply be better. You're not flashy about it — you just have standards and the self-awareness to honor them. Your trips become memories other people wish they had.",
      shareText:
        "I got The Luxe Minimalist on the Travel Type Test 🥂 what kind of traveler are you? →",
      color: "from-amber-400 to-yellow-600",
    },
    {
      id: "planner",
      title: "The Over-Planner",
      emoji: "📋",
      description:
        "You've been to places your friends have only heard of because you had a spreadsheet, a backup plan, and a restaurant reservation made 3 months in advance. Is it excessive? Maybe. Do you always have the best trip? Absolutely yes. Your group thanks you every single time, even if they complain about the itinerary.",
      shareText:
        "I got The Over-Planner on the Travel Type Test 📋 what kind of traveler are you? →",
      color: "from-blue-500 to-indigo-600",
    },
    {
      id: "adventurer",
      title: "The Spontaneous One",
      emoji: "🎒",
      description:
        "The best story you have from any trip was something that wasn't planned. You travel to get lost, meet strangers, and figure out the next step as it happens. Your packing is chaotic and your photos are blurry, but your travel memories are the kind other people write books about. You have, at some point, definitely missed a bus. Worth it.",
      shareText:
        "I got The Spontaneous One on the Travel Type Test 🎒 what kind of traveler are you? →",
      color: "from-emerald-400 to-cyan-600",
    },
    {
      id: "homebody",
      title: "The Reluctant Tourist",
      emoji: "🏠",
      description:
        "Travel is fine. Totally fine. You've done it. You've seen the sights. You've eaten the food. But nothing — absolutely nothing — hits like sleeping in your own bed, knowing exactly where everything is, and not having to navigate a foreign transit system. You go on trips. You're just really, really glad when they end.",
      shareText:
        "I got The Reluctant Tourist on the Travel Type Test 🏠 what kind of traveler are you? →",
      color: "from-rose-400 to-pink-600",
    },
  ],
};

export default quiz;
