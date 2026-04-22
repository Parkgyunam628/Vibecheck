import { Quiz } from "@/lib/types";

const quiz: Quiz = {
  slug: "friend-role-test",
  title: "Which Friend Group Role Are You?",
  description:
    "Every group has one. The planner, the emotional support, the funny one, and the one who derails everything. Which are you? 👥",
  emoji: "👥",
  coverColor: "from-orange-400 to-pink-500",
  category: "Relationships",
  tags: ["friends", "friend group", "relationships", "personality", "viral"],
  createdAt: "2025-04-22",
  isNew: true,
  isTrending: true,
  questions: [
    {
      id: "q1",
      text: "The group chat has been quiet for 3 days. You:",
      options: [
        {
          id: "q1a",
          text: "Already typed 'so when are we doing something'",
          scores: { planner: 3 },
        },
        {
          id: "q1b",
          text: "Send a check-in to see if everyone's actually okay",
          scores: { emotional_support: 3 },
        },
        {
          id: "q1c",
          text: "Drop a meme that somehow revives the entire thing",
          scores: { funny_one: 3 },
        },
        {
          id: "q1d",
          text: "Post something completely unhinged and wait",
          scores: { chaos_agent: 3 },
        },
      ],
    },
    {
      id: "q2",
      text: "It's someone's birthday. You:",
      options: [
        {
          id: "q2a",
          text: "Planned the dinner 6 weeks ago. You have a backup venue.",
          scores: { planner: 3 },
        },
        {
          id: "q2b",
          text: "Made sure everyone remembered and knew exactly what they wanted",
          scores: { emotional_support: 3 },
        },
        {
          id: "q2c",
          text: "Got them the most chaotic but actually perfect gift",
          scores: { funny_one: 3 },
        },
        {
          id: "q2d",
          text: "Remembered at 11pm and fully committed to the last-minute chaos",
          scores: { chaos_agent: 3 },
        },
      ],
    },
    {
      id: "q3",
      text: "A friend is going through something hard. You:",
      options: [
        {
          id: "q3a",
          text: "Coordinate the group response and check everyone's availability",
          scores: { planner: 3 },
        },
        {
          id: "q3b",
          text: "Call them immediately and listen for as long as they need",
          scores: { emotional_support: 3 },
        },
        {
          id: "q3c",
          text: "Find the one thing that actually makes them laugh",
          scores: { funny_one: 3, emotional_support: 1 },
        },
        {
          id: "q3d",
          text: "Show up unannounced with snacks and chaotic supportive energy",
          scores: { chaos_agent: 3 },
        },
      ],
    },
    {
      id: "q4",
      text: "On a group trip, your role is:",
      options: [
        {
          id: "q4a",
          text: "The itinerary, the bookings, the backup plan, the group card",
          scores: { planner: 3 },
        },
        {
          id: "q4b",
          text: "Making sure everyone's happy and navigating any tension",
          scores: { emotional_support: 3 },
        },
        {
          id: "q4c",
          text: "Group morale — you keep it fun when things get tense or boring",
          scores: { funny_one: 3 },
        },
        {
          id: "q4d",
          text: "Suggesting things that were absolutely not on the itinerary",
          scores: { chaos_agent: 3 },
        },
      ],
    },
    {
      id: "q5",
      text: "In a group decision, you:",
      options: [
        {
          id: "q5a",
          text: "Research the options, make a pros/cons list, suggest the best one",
          scores: { planner: 3 },
        },
        {
          id: "q5b",
          text: "Ask what everyone actually wants before saying anything",
          scores: { emotional_support: 3 },
        },
        {
          id: "q5c",
          text: "Vote for whatever gets the best reaction from the group",
          scores: { funny_one: 3 },
        },
        {
          id: "q5d",
          text: "Go with gut immediately, no second-guessing",
          scores: { chaos_agent: 3 },
        },
      ],
    },
    {
      id: "q6",
      text: "Your friends would describe you as:",
      options: [
        {
          id: "q6a",
          text: "'The only reason we actually do things as a group'",
          scores: { planner: 3 },
        },
        {
          id: "q6b",
          text: "'The one I call when I'm actually going through it'",
          scores: { emotional_support: 3 },
        },
        {
          id: "q6c",
          text: "'The one who made me laugh at exactly the wrong moment'",
          scores: { funny_one: 3 },
        },
        {
          id: "q6d",
          text: "'Somehow always the reason the plan changed'",
          scores: { chaos_agent: 3 },
        },
      ],
    },
    {
      id: "q7",
      text: "When the group vibe goes flat, you:",
      options: [
        {
          id: "q7a",
          text: "Suggest the next activity you already had lined up",
          scores: { planner: 3 },
        },
        {
          id: "q7b",
          text: "Check in with people individually to see what's off",
          scores: { emotional_support: 3 },
        },
        {
          id: "q7c",
          text: "Say the thing no one else was willing to say",
          scores: { funny_one: 3 },
        },
        {
          id: "q7d",
          text: "Propose something slightly unhinged and see who's in",
          scores: { chaos_agent: 3 },
        },
      ],
    },
    {
      id: "q8",
      text: "The group wouldn't function without you because:",
      options: [
        {
          id: "q8a",
          text: "Nothing would ever actually get organized or happen",
          scores: { planner: 3 },
        },
        {
          id: "q8b",
          text: "Nobody else is checking how people are really doing",
          scores: { emotional_support: 3 },
        },
        {
          id: "q8c",
          text: "The vibe would genuinely be different without you in it",
          scores: { funny_one: 3 },
        },
        {
          id: "q8d",
          text: "It would be way too predictable and boring",
          scores: { chaos_agent: 3 },
        },
      ],
    },
  ],
  results: [
    {
      id: "planner",
      title: "The One Who Plans Everything",
      emoji: "📅",
      description:
        "The group exists because of you. You make the reservation, send the calendar invite, remember the details, and quietly coordinate the things nobody else notices. Your friends sometimes take it for granted — but the second you step back, everything falls apart and they know it. You're not just organized. You're the infrastructure.",
      shareText:
        "I got The One Who Plans Everything on the Friend Group Test 📅 which role are you? →",
      color: "from-blue-500 to-indigo-600",
    },
    {
      id: "emotional_support",
      title: "The Emotional Support",
      emoji: "💙",
      description:
        "You're the person people call when they really need to talk — not just vent, but actually be heard. You remember what your friends told you three months ago and check back in. You notice when someone's off before they say anything. This is a rare thing. Your group is held together not just by shared experiences, but by the fact that you genuinely give a damn.",
      shareText:
        "I got The Emotional Support on the Friend Group Test 💙 which role are you? →",
      color: "from-pink-400 to-rose-500",
    },
    {
      id: "funny_one",
      title: "The Funny One",
      emoji: "😂",
      description:
        "You're the one who makes a bad trip a good story. The one who broke the tension at exactly the right moment. The one who said the thing everyone was thinking and made it okay to laugh. It's not just that you're funny — it's that your humor is a form of care. You use it to disarm, to connect, and to make hard things survivable.",
      shareText:
        "I got The Funny One on the Friend Group Test 😂 which role are you? →",
      color: "from-yellow-400 to-orange-500",
    },
    {
      id: "chaos_agent",
      title: "The Chaos Agent",
      emoji: "🌪️",
      description:
        "Every group has one. Plans exist until you're in the room. You're the one who suggested the detour that became the highlight of the trip. The one whose 'bad idea' turned into the best story. You're not reckless — you're just willing to go off-script when the script is boring. Your group is better, more alive, and more interesting because of you.",
      shareText:
        "I got The Chaos Agent on the Friend Group Test 🌪️ which role are you? →",
      color: "from-violet-500 to-purple-700",
    },
  ],
};

export default quiz;
