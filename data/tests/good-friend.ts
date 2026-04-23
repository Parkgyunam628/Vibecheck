import { Quiz } from "@/lib/types";

const quiz: Quiz = {
  slug: "good-friend-test",
  title: "Are You Actually a Good Friend?",
  description: "The group chat is watching. Be honest. 👯",
  emoji: "🫂",
  coverColor: "from-teal-500 to-emerald-600",
  category: "Relationships",
  tags: ["friendship", "relationships", "personality", "viral"],
  createdAt: "2026-04-23",
  isNew: true,
  questions: [
    {
      id: "q1",
      text: "A close friend texts 'I'm not okay.' It's 10pm. You...",
      options: [
        {
          id: "q1a",
          text: "Call immediately",
          scores: { ride_or_die: 3 },
        },
        {
          id: "q1b",
          text: "Text back 'I'm here. Can we talk tonight?'",
          scores: { good_intentions: 2, fair_weather: 1 },
        },
        {
          id: "q1c",
          text: "Show up at their place with snacks. No text needed.",
          scores: { low_key_legendary: 3 },
        },
        {
          id: "q1d",
          text: "React with ❤️ and plan to check in soon",
          scores: { fair_weather: 3 },
        },
      ],
    },
    {
      id: "q2",
      text: "Your friend is going through a bad breakup. You...",
      options: [
        {
          id: "q2a",
          text: "Block the next two weekends and handle it",
          scores: { ride_or_die: 3 },
        },
        {
          id: "q2b",
          text: "Send a voice note letting them know you're there whenever",
          scores: { low_key_legendary: 2, good_intentions: 1 },
        },
        {
          id: "q2c",
          text: "Plan to call — life gets busy — text an apology two weeks later",
          scores: { good_intentions: 3 },
        },
        {
          id: "q2d",
          text: "Take them out once, then leave the rest to them",
          scores: { fair_weather: 2, good_intentions: 1 },
        },
      ],
    },
    {
      id: "q3",
      text: "Your friend lands a big promotion. You...",
      options: [
        {
          id: "q3a",
          text: "Celebrate louder than they do — you've been waiting for this",
          scores: { ride_or_die: 3 },
        },
        {
          id: "q3b",
          text: "Send a short, personal message that references the specific details",
          scores: { low_key_legendary: 3 },
        },
        {
          id: "q3c",
          text: "Hype them up in the group chat and move on",
          scores: { fair_weather: 2, good_intentions: 1 },
        },
        {
          id: "q3d",
          text: "Make plans to celebrate — still working on scheduling",
          scores: { good_intentions: 3 },
        },
      ],
    },
    {
      id: "q4",
      text: "A friend asks for your honest opinion on a bad decision they're making. You...",
      options: [
        {
          id: "q4a",
          text: "Tell them the truth — gently, but clearly",
          scores: { ride_or_die: 3 },
        },
        {
          id: "q4b",
          text: "Ask a few questions, then give your real take",
          scores: { low_key_legendary: 3 },
        },
        {
          id: "q4c",
          text: "Say something supportive and vague enough to avoid conflict",
          scores: { fair_weather: 3 },
        },
        {
          id: "q4d",
          text: "Say what they want to hear — it's their life",
          scores: { good_intentions: 2, fair_weather: 1 },
        },
      ],
    },
    {
      id: "q5",
      text: "How often do you reach out to your close friends first?",
      options: [
        {
          id: "q5a",
          text: "All the time. You don't keep score.",
          scores: { ride_or_die: 3 },
        },
        {
          id: "q5b",
          text: "When you genuinely have something to say or want to check in",
          scores: { low_key_legendary: 3 },
        },
        {
          id: "q5c",
          text: "Less than you'd like to, honestly",
          scores: { good_intentions: 3 },
        },
        {
          id: "q5d",
          text: "Mostly when you're also free and want to make plans",
          scores: { fair_weather: 3 },
        },
      ],
    },
    {
      id: "q6",
      text: "A friend cancels on you for the third time. You...",
      options: [
        {
          id: "q6a",
          text: "Check in — you're more curious if something's going on",
          scores: { ride_or_die: 3 },
        },
        {
          id: "q6b",
          text: "Let it go. They'll come around when they're ready.",
          scores: { low_key_legendary: 2, fair_weather: 1 },
        },
        {
          id: "q6c",
          text: "Feel a little annoyed but don't say anything",
          scores: { good_intentions: 2, fair_weather: 1 },
        },
        {
          id: "q6d",
          text: "Quietly start canceling on them too. Feels balanced.",
          scores: { fair_weather: 3 },
        },
      ],
    },
    {
      id: "q7",
      text: "When a friend needs emotional support, you are...",
      options: [
        {
          id: "q7a",
          text: "Fully present. Phone down, no problem-solving unless they ask.",
          scores: { ride_or_die: 3 },
        },
        {
          id: "q7b",
          text: "Quiet but there. You don't fill the space with noise.",
          scores: { low_key_legendary: 3 },
        },
        {
          id: "q7c",
          text: "Trying your best but more comfortable when there's a solution",
          scores: { good_intentions: 3 },
        },
        {
          id: "q7d",
          text: "Better at the fun stuff than the heavy stuff",
          scores: { fair_weather: 3 },
        },
      ],
    },
    {
      id: "q8",
      text: "If a close friend moved abroad tomorrow, what would they miss most about you?",
      options: [
        {
          id: "q8a",
          text: "The reliability. You'd still be just as present from anywhere.",
          scores: { ride_or_die: 3 },
        },
        {
          id: "q8b",
          text: "The feeling of being understood without needing to explain much",
          scores: { low_key_legendary: 3 },
        },
        {
          id: "q8c",
          text: "Your good intentions, even when the follow-through was hit or miss",
          scores: { good_intentions: 3 },
        },
        {
          id: "q8d",
          text: "The fun. Specifically the fun parts.",
          scores: { fair_weather: 3 },
        },
      ],
    },
  ],
  results: [
    {
      id: "ride_or_die",
      title: "The Ride-or-Die",
      emoji: "💚",
      description:
        "You show up. Full stop. When something goes wrong at 2am, you're the person they call — because they know you'll actually answer. You don't keep score, you don't wait for them to reach out first, and you don't disappear when it gets hard. Friendships like yours are the reason people feel less alone in the world.",
      shareText:
        "I got The Ride-or-Die on the Good Friend Test 💚 are you actually a good friend? →",
      color: "from-emerald-500 to-teal-600",
    },
    {
      id: "low_key_legendary",
      title: "The Low-Key Legendary One",
      emoji: "🌙",
      description:
        "You don't do the most — but you're always exactly there when it matters. You remember the small details. You don't need to be the loudest in the room to be the most important person in it. Your friends don't always realize how much they rely on you until you're not around. That's not a flaw. That's just what quiet loyalty looks like.",
      shareText:
        "I got The Low-Key Legendary One on the Good Friend Test 🌙 are you actually a good friend? →",
      color: "from-indigo-500 to-violet-600",
    },
    {
      id: "fair_weather",
      title: "The Fair-Weather Friend",
      emoji: "☀️",
      description:
        "You're a great time when times are great. Celebrations, good vibes, and good news — you're there. It's the 10pm 'I'm not okay' texts where things get inconsistent. This doesn't make you a bad person. It makes you someone who has more to give than they're currently giving. Your friends like you. They just can't fully count on you yet.",
      shareText:
        "I got The Fair-Weather Friend on the Good Friend Test ☀️ are you actually a good friend? →",
      color: "from-yellow-400 to-amber-500",
    },
    {
      id: "good_intentions",
      title: "Good Intentions, Inconsistent Follow-Through",
      emoji: "📱",
      description:
        "You genuinely care. The caring is real. You just also have a habit of letting life get in the way of acting on it. You mean to call. You plan to be there. The gap between your intentions and your actions is the only thing standing between you and being the friend you already think you are. Close the gap.",
      shareText:
        "I got Good Intentions on the Good Friend Test 📱 are you actually a good friend? →",
      color: "from-orange-400 to-rose-500",
    },
  ],
};

export default quiz;
