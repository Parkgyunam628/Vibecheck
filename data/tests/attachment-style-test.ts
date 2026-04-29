import { Quiz } from "@/lib/types";

const quiz: Quiz = {
  slug: "attachment-style-test",
  title: "What's Your Attachment Style?",
  description: "The pattern that explains all of your relationships. Let's name it.",
  emoji: "🧲",
  coverColor: "from-violet-500 to-purple-700",
  category: "Relationships",
  tags: ["attachment style", "dating", "relationships", "psychology", "viral"],
  createdAt: "2026-04-29",
  isNew: true,
  isTrending: true,
  questions: [
    {
      id: "q1",
      text: "Someone you care about goes quiet for a few days. You:",
      options: [
        {
          id: "q1a",
          text: "Notice, check in once, then let it be — they'll surface",
          scores: { secure: 3 },
        },
        {
          id: "q1b",
          text: "Check your phone every hour wondering if you did something wrong",
          scores: { anxious: 3 },
        },
        {
          id: "q1c",
          text: "Feel relieved, honestly — you needed the space too",
          scores: { avoidant: 3 },
        },
        {
          id: "q1d",
          text: "Go quiet yourself, half hoping they'll reach out first",
          scores: { fearful: 3 },
        },
      ],
    },
    {
      id: "q2",
      text: "After a vulnerable conversation with someone new, you:",
      options: [
        {
          id: "q2a",
          text: "Feel good — it was real, and that's what you wanted",
          scores: { secure: 3 },
        },
        {
          id: "q2b",
          text: "Replay it wondering if you said too much",
          scores: { anxious: 3 },
        },
        {
          id: "q2c",
          text: "Feel slightly exposed and want to pull back a little",
          scores: { avoidant: 3 },
        },
        {
          id: "q2d",
          text: "Feel warm about it, then anxious, then weirdly distant",
          scores: { fearful: 3 },
        },
      ],
    },
    {
      id: "q3",
      text: "The phrase 'I need space' directed at you makes you feel:",
      options: [
        {
          id: "q3a",
          text: "Reasonable — everyone needs time to themselves",
          scores: { secure: 3 },
        },
        {
          id: "q3b",
          text: "Like you definitely did something wrong",
          scores: { anxious: 3 },
        },
        {
          id: "q3c",
          text: "Understood — honestly, same",
          scores: { avoidant: 3 },
        },
        {
          id: "q3d",
          text: "Panicked, then weirdly relieved, then panicked again",
          scores: { fearful: 3 },
        },
      ],
    },
    {
      id: "q4",
      text: "When a partner doesn't respond the way you hoped to something important, you:",
      options: [
        {
          id: "q4a",
          text: "Bring it up directly — 'that landed weird for me'",
          scores: { secure: 3 },
        },
        {
          id: "q4b",
          text: "Overanalyze their tone and wonder what it really meant",
          scores: { anxious: 3 },
        },
        {
          id: "q4c",
          text: "Pull back and wait to see if they come to you",
          scores: { avoidant: 3 },
        },
        {
          id: "q4d",
          text: "Swing between saying everything and saying absolutely nothing",
          scores: { fearful: 3 },
        },
      ],
    },
    {
      id: "q5",
      text: "How do you handle the beginning of something new?",
      options: [
        {
          id: "q5a",
          text: "Enjoy it — no pressure, just curiosity",
          scores: { secure: 3 },
        },
        {
          id: "q5b",
          text: "Already attached and trying very hard to play it cool",
          scores: { anxious: 3 },
        },
        {
          id: "q5c",
          text: "Cautious — you like to observe before fully investing",
          scores: { avoidant: 3 },
        },
        {
          id: "q5d",
          text: "All-in one day, completely overthinking the next",
          scores: { fearful: 3 },
        },
      ],
    },
    {
      id: "q6",
      text: "When you're upset with a partner, you:",
      options: [
        {
          id: "q6a",
          text: "Tell them calmly when you're ready to talk",
          scores: { secure: 3 },
        },
        {
          id: "q6b",
          text: "Go through the conversation in your head twelve times before saying anything",
          scores: { anxious: 3 },
        },
        {
          id: "q6c",
          text: "Shut down and need them to come to you",
          scores: { avoidant: 3 },
        },
        {
          id: "q6d",
          text: "Either over-explain everything or go completely silent — no middle",
          scores: { fearful: 3 },
        },
      ],
    },
    {
      id: "q7",
      text: "Your friends would describe your relationship pattern as:",
      options: [
        {
          id: "q7a",
          text: "'Solid — they actually communicate'",
          scores: { secure: 3 },
        },
        {
          id: "q7b",
          text: "'They catch feelings fast and then overthink everything'",
          scores: { anxious: 3 },
        },
        {
          id: "q7c",
          text: "'Independent to the point of being hard to reach'",
          scores: { avoidant: 3 },
        },
        {
          id: "q7d",
          text: "'All in, then completely unavailable, then all in again'",
          scores: { fearful: 3 },
        },
      ],
    },
    {
      id: "q8",
      text: "What would you say needs the most work in your relationships?",
      options: [
        {
          id: "q8a",
          text: "Honestly, not much — things feel pretty grounded",
          scores: { secure: 3 },
        },
        {
          id: "q8b",
          text: "Needing less reassurance than you currently do",
          scores: { anxious: 3 },
        },
        {
          id: "q8c",
          text: "Letting people get close without creating distance",
          scores: { avoidant: 3 },
        },
        {
          id: "q8d",
          text: "Wanting connection and also doing things that push it away",
          scores: { fearful: 3 },
        },
      ],
    },
  ],
  results: [
    {
      id: "secure",
      title: "Securely Attached",
      emoji: "🌿",
      description:
        "You communicate, you don't spiral when people need space, and you don't test people to see if they'll stay. You're not perfect at relationships — you just approach them like someone who believes they're worth showing up for. That combination is rarer than it sounds. The people in your life are lucky and most of them know it.",
      shareText:
        "I got Securely Attached on the Attachment Style Test 🌿 what's your attachment style? →",
      color: "from-emerald-400 to-teal-600",
    },
    {
      id: "anxious",
      title: "Anxiously Attached",
      emoji: "🌀",
      description:
        "You love deeply and you worry proportionally. When someone goes quiet, your brain goes loud. You're not needy — you just need to know that the people you care about actually want to be there. The right person understands this and shows up consistently. The wrong one uses it. You're getting better at telling the difference.",
      shareText:
        "I got Anxiously Attached on the Attachment Style Test 🌀 what's your attachment style? →",
      color: "from-violet-500 to-purple-700",
    },
    {
      id: "avoidant",
      title: "Avoidantly Attached",
      emoji: "🚪",
      description:
        "Independence isn't a preference — it's a requirement. When people get too close too fast, you instinctively create distance. You do want connection. It's just that vulnerability hasn't historically gone well, and your nervous system hasn't forgotten. The right relationship will give you room. You'll have to let it in anyway.",
      shareText:
        "I got Avoidantly Attached on the Attachment Style Test 🚪 what's your attachment style? →",
      color: "from-slate-500 to-gray-700",
    },
    {
      id: "fearful",
      title: "Fearful-Avoidant",
      emoji: "🌊",
      description:
        "You want closeness and you're also afraid of it. You chase connection and pull back from it in the same week — not because you're confused, but because you learned early that the people you needed weren't always reliable. Both the longing and the fear are real. You're not broken. You're just doing the hardest kind of work.",
      shareText:
        "I got Fearful-Avoidant on the Attachment Style Test 🌊 what's your attachment style? →",
      color: "from-indigo-500 to-blue-700",
    },
  ],
};

export default quiz;
