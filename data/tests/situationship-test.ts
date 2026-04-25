import { Quiz } from "@/lib/types";

const quiz: Quiz = {
  slug: "situationship-test",
  title: "Are You Someone's Situationship?",
  description: "Someone out there is confused about you right now. Let's figure out why.",
  emoji: "🫠",
  coverColor: "from-rose-400 to-fuchsia-600",
  category: "Relationships",
  tags: ["situationship", "dating", "relationships", "commitment", "viral"],
  createdAt: "2026-04-26",
  isNew: true,
  questions: [
    {
      id: "q1",
      text: "Someone you've been seeing for two months asks 'what are we?' You:",
      options: [
        {
          id: "q1a",
          text: "Were about to bring it up yourself — finally",
          scores: { clear_communicator: 3 },
        },
        {
          id: "q1b",
          text: "Change the subject, laugh, change the subject again",
          scores: { situationship_creator: 3 },
        },
        {
          id: "q1c",
          text: "Say 'I like where this is going' — and mean it but also never act on it",
          scores: { mixed_signals: 3 },
        },
        {
          id: "q1d",
          text: "Genuinely don't know, and kind of don't want to think about it",
          scores: { commitment_confused: 3 },
        },
      ],
    },
    {
      id: "q2",
      text: "After a really good night together, you:",
      options: [
        {
          id: "q2a",
          text: "Feel warm and happy — this is clearly going somewhere",
          scores: { clear_communicator: 3 },
        },
        {
          id: "q2b",
          text: "Immediately remind yourself not to get too attached",
          scores: { situationship_creator: 3 },
        },
        {
          id: "q2c",
          text: "Feel great, then go quiet for a few days with no explanation",
          scores: { mixed_signals: 3 },
        },
        {
          id: "q2d",
          text: "Enjoy it and try hard not to read into it",
          scores: { commitment_confused: 3 },
        },
      ],
    },
    {
      id: "q3",
      text: "Your friends ask if you're 'together.' You say:",
      options: [
        {
          id: "q3a",
          text: "Yes — or we're about to have that conversation",
          scores: { clear_communicator: 3 },
        },
        {
          id: "q3b",
          text: "Something deliberately vague",
          scores: { situationship_creator: 3 },
        },
        {
          id: "q3c",
          text: "'It's complicated' — mostly because you've made it that way",
          scores: { mixed_signals: 3 },
        },
        {
          id: "q3d",
          text: "'I don't know' — and you're somehow okay with that",
          scores: { commitment_confused: 3 },
        },
      ],
    },
    {
      id: "q4",
      text: "They start showing more feelings. Your first reaction:",
      options: [
        {
          id: "q4a",
          text: "Relief — you felt the same way",
          scores: { clear_communicator: 3 },
        },
        {
          id: "q4b",
          text: "Subtle but immediate emotional distance",
          scores: { situationship_creator: 3 },
        },
        {
          id: "q4c",
          text: "Get warmer for a week, then cooler for no reason",
          scores: { mixed_signals: 3 },
        },
        {
          id: "q4d",
          text: "Freeze, then overanalyze every interaction after",
          scores: { commitment_confused: 3 },
        },
      ],
    },
    {
      id: "q5",
      text: "How often do you define the relationship with people you date?",
      options: [
        {
          id: "q5a",
          text: "Always — you'd rather know early than find out late",
          scores: { clear_communicator: 3 },
        },
        {
          id: "q5b",
          text: "Almost never. It tends to just stay undefined.",
          scores: { situationship_creator: 3 },
        },
        {
          id: "q5c",
          text: "You try, but somehow always end up back in the gray zone",
          scores: { mixed_signals: 2, commitment_confused: 1 },
        },
        {
          id: "q5d",
          text: "You prefer to 'see how things go' — indefinitely",
          scores: { commitment_confused: 3 },
        },
      ],
    },
    {
      id: "q6",
      text: "They post a cute photo. You:",
      options: [
        {
          id: "q6a",
          text: "Like it, maybe leave a real comment",
          scores: { clear_communicator: 3 },
        },
        {
          id: "q6b",
          text: "See it, feel something, like nothing",
          scores: { situationship_creator: 3 },
        },
        {
          id: "q6c",
          text: "Check if you were tagged, you weren't, spiral briefly",
          scores: { mixed_signals: 3 },
        },
        {
          id: "q6d",
          text: "Save it to your camera roll and quietly process your feelings",
          scores: { commitment_confused: 3 },
        },
      ],
    },
    {
      id: "q7",
      text: "A friend asks if you like this person. Honest answer?",
      options: [
        {
          id: "q7a",
          text: "Yes — and I've told them that",
          scores: { clear_communicator: 3 },
        },
        {
          id: "q7b",
          text: "Yeah, but I'm not exactly acting like it",
          scores: { situationship_creator: 3 },
        },
        {
          id: "q7c",
          text: "Yes, but it comes out very inconsistently",
          scores: { mixed_signals: 3 },
        },
        {
          id: "q7d",
          text: "I think so. I'll know eventually.",
          scores: { commitment_confused: 3 },
        },
      ],
    },
    {
      id: "q8",
      text: "If this never becomes official, you'd feel:",
      options: [
        {
          id: "q8a",
          text: "Genuinely disappointed — you wanted something real",
          scores: { clear_communicator: 3 },
        },
        {
          id: "q8b",
          text: "Probably fine. That's kind of what you set up.",
          scores: { situationship_creator: 3 },
        },
        {
          id: "q8c",
          text: "Relieved and also sad. Mostly just confused.",
          scores: { mixed_signals: 3 },
        },
        {
          id: "q8d",
          text: "A bit sad, but okay — better this than nothing",
          scores: { commitment_confused: 3 },
        },
      ],
    },
  ],
  results: [
    {
      id: "clear_communicator",
      title: "Not a Situationship Person",
      emoji: "✅",
      description:
        "You communicate, you're direct about how you feel, and you don't leave people guessing. In a dating world full of deliberate vagueness, that makes you genuinely rare. You might not always get the answer you want — but at least you ask the question. The right person will match that energy.",
      shareText:
        "I got Not a Situationship Person on the Situationship Test ✅ are you someone's situationship? →",
      color: "from-emerald-400 to-teal-500",
    },
    {
      id: "situationship_creator",
      title: "The Situationship Creator",
      emoji: "🫠",
      description:
        "You're the reason the situationship exists. Not out of cruelty — you just function better in the undefined space. Warm enough to keep someone close, vague enough to keep them guessing. The problem is someone usually catches feelings before you've decided what you want. You've probably left a trail of 'I thought we were...' conversations behind you.",
      shareText:
        "I got The Situationship Creator on the Situationship Test 🫠 are you someone's situationship? →",
      color: "from-rose-500 to-pink-600",
    },
    {
      id: "mixed_signals",
      title: "The Walking Mixed Signal",
      emoji: "📶",
      description:
        "You like them. You pull back. You reach out. You go quiet. You're not doing it on purpose — your feelings are real, they just don't arrive in a consistent order. People stay because the good moments are genuinely great. They stay confused because everything else is unpredictable. Both things are true at the same time.",
      shareText:
        "I got The Walking Mixed Signal on the Situationship Test 📶 are you someone's situationship? →",
      color: "from-violet-500 to-indigo-600",
    },
    {
      id: "commitment_confused",
      title: "Emotionally Unavailable (But Sweetly)",
      emoji: "🔒",
      description:
        "You're not cruel. You're genuinely lovely to be around. You just have a very efficient system for keeping things undefined long past the point where they should be defined. The feelings are there. The action on them... less so. Someone is probably waiting for you to figure this out right now.",
      shareText:
        "I got Emotionally Unavailable on the Situationship Test 🔒 are you someone's situationship? →",
      color: "from-slate-500 to-gray-700",
    },
  ],
};

export default quiz;
