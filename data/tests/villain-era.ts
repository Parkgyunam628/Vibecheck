import { Quiz } from "@/lib/types";

const quiz: Quiz = {
  slug: "villain-era-test",
  title: "What's Your Villain Era?",
  description:
    "Some of us are deep in it. Some of us never left. Which kind of villain are you, really? 😈",
  emoji: "😈",
  coverColor: "from-slate-800 to-violet-900",
  category: "Personality",
  tags: ["villain era", "personality", "glow up", "viral"],
  createdAt: "2025-04-22",
  isNew: true,
  isTrending: true,
  questions: [
    {
      id: "q1",
      text: "What triggered your villain era?",
      options: [
        {
          id: "q1a",
          text: "Nothing — I've genuinely never had one",
          scores: { protagonist: 3 },
        },
        {
          id: "q1b",
          text: "Getting betrayed by someone I truly trusted",
          scores: { redeemed: 2, misunderstood: 1 },
        },
        {
          id: "q1c",
          text: "Someone pushing me past my limit for the absolute last time",
          scores: { in_era: 3 },
        },
        {
          id: "q1d",
          text: "Existing while being expected to shrink myself constantly",
          scores: { misunderstood: 3 },
        },
      ],
    },
    {
      id: "q2",
      text: "Your current villain aesthetic is:",
      options: [
        {
          id: "q2a",
          text: "I don't have one — I'm still the hero of this story",
          scores: { protagonist: 3 },
        },
        {
          id: "q2b",
          text: "Something I've already moved past — healing era now",
          scores: { redeemed: 3 },
        },
        {
          id: "q2c",
          text: "All black. Strategic silence. The occasional loaded pause.",
          scores: { in_era: 3 },
        },
        {
          id: "q2d",
          text: "Exactly the same as before — I just stopped over-explaining myself",
          scores: { misunderstood: 3 },
        },
      ],
    },
    {
      id: "q3",
      text: "How do you handle people who wrong you?",
      options: [
        {
          id: "q3a",
          text: "Try to understand their perspective and address it directly",
          scores: { protagonist: 3 },
        },
        {
          id: "q3b",
          text: "I used to spiral. Now I just distance myself and move on.",
          scores: { redeemed: 3 },
        },
        {
          id: "q3c",
          text: "Stay very quiet. Let the results speak louder than anything.",
          scores: { in_era: 3, misunderstood: 1 },
        },
        {
          id: "q3d",
          text: "They didn't actually wrong me — they just expected me to stay small",
          scores: { misunderstood: 3 },
        },
      ],
    },
    {
      id: "q4",
      text: "Your actual motivation is:",
      options: [
        {
          id: "q4a",
          text: "Doing right by the people I care about",
          scores: { protagonist: 3 },
        },
        {
          id: "q4b",
          text: "Finally building the version of myself I've always wanted to be",
          scores: { redeemed: 3 },
        },
        {
          id: "q4c",
          text: "Proving every single person who doubted me completely wrong",
          scores: { in_era: 3 },
        },
        {
          id: "q4d",
          text: "Being understood for once without having to over-justify it",
          scores: { misunderstood: 3 },
        },
      ],
    },
    {
      id: "q5",
      text: "If you had a villain monologue, it would start with:",
      options: [
        {
          id: "q5a",
          text: "'I understand where you're coming from, but here's what you're missing—'",
          scores: { protagonist: 3 },
        },
        {
          id: "q5b",
          text: "'I was exactly like you once. I know better now.'",
          scores: { redeemed: 3 },
        },
        {
          id: "q5c",
          text: "'I gave you every opportunity to do better.'",
          scores: { in_era: 3 },
        },
        {
          id: "q5d",
          text: "'You never once asked what I actually wanted.'",
          scores: { misunderstood: 3 },
        },
      ],
    },
    {
      id: "q6",
      text: "People who know you would say you're:",
      options: [
        {
          id: "q6a",
          text: "Surprisingly optimistic given everything",
          scores: { protagonist: 3 },
        },
        {
          id: "q6b",
          text: "Someone who's been through a lot and came out changed",
          scores: { redeemed: 3 },
        },
        {
          id: "q6c",
          text: "Not to be underestimated. Quietly intense.",
          scores: { in_era: 3 },
        },
        {
          id: "q6d",
          text: "Misread by most people, deeply understood by a few",
          scores: { misunderstood: 3 },
        },
      ],
    },
    {
      id: "q7",
      text: "Your end goal in all of this is:",
      options: [
        {
          id: "q7a",
          text: "A world that's a little better than the one I entered",
          scores: { protagonist: 3 },
        },
        {
          id: "q7b",
          text: "Genuine peace — and actually meaning it this time",
          scores: { redeemed: 3 },
        },
        {
          id: "q7c",
          text: "Complete, total, undeniable vindication",
          scores: { in_era: 3 },
        },
        {
          id: "q7d",
          text: "Acknowledgment. That's genuinely all I ever wanted.",
          scores: { misunderstood: 3 },
        },
      ],
    },
    {
      id: "q8",
      text: "The most 'villain' thing you've ever actually done:",
      options: [
        {
          id: "q8a",
          text: "Said no to someone's request and felt guilty about it for a week",
          scores: { protagonist: 3 },
        },
        {
          id: "q8b",
          text: "Something I've thought about and since apologized for",
          scores: { redeemed: 3 },
        },
        {
          id: "q8c",
          text: "Something people still bring up. I consider it a win.",
          scores: { in_era: 3 },
        },
        {
          id: "q8d",
          text: "Standing up for myself when someone expected me to stay quiet",
          scores: { misunderstood: 3 },
        },
      ],
    },
  ],
  results: [
    {
      id: "protagonist",
      title: "Still the Protagonist",
      emoji: "⚡",
      description:
        "Your villain era never came — and not because life has been easy. You've been through things. You've just refused to let them make you bitter. You are either genuinely built different, or you're still in the setup phase of a very compelling arc. Either way: you're still the hero of this story.",
      shareText:
        "I got Still the Protagonist on the Villain Era Test ⚡ what's your villain era? →",
      color: "from-yellow-400 to-amber-500",
    },
    {
      id: "redeemed",
      title: "The Redemption Arc",
      emoji: "🌱",
      description:
        "You had your era. You were in it. And then something shifted — you chose the harder path, which was healing. You're not the same person you were before, and that's completely intentional. The villain arc gave you edges. The redemption arc gave you depth. You're better for having done both.",
      shareText:
        "I got The Redemption Arc on the Villain Era Test 🌱 what's your villain era? →",
      color: "from-emerald-500 to-green-600",
    },
    {
      id: "in_era",
      title: "Fully In My Era",
      emoji: "😈",
      description:
        "You're not apologizing, explaining, or slowing down. Something happened, you chose yourself, and you haven't looked back. You're building in silence, moving with intention, and letting the results do all the talking. Is it a villain era or just finally taking yourself seriously? You've decided not to answer that.",
      shareText:
        "I got Fully In My Era on the Villain Era Test 😈 what's your villain era? →",
      color: "from-slate-700 to-gray-900",
    },
    {
      id: "misunderstood",
      title: "Misunderstood Anti-Hero",
      emoji: "🌑",
      description:
        "You were never actually the villain — you just stopped performing for people who had already decided how they felt about you. Your so-called 'villain era' was really just the first time you stopped over-explaining your existence. Complex, layered, and ultimately on the right side of history.",
      shareText:
        "I got Misunderstood Anti-Hero on the Villain Era Test 🌑 what's your villain era? →",
      color: "from-violet-600 to-indigo-700",
    },
  ],
};

export default quiz;
