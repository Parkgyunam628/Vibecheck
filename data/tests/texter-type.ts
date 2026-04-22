import { Quiz } from "@/lib/types";

const quiz: Quiz = {
  slug: "texter-type-test",
  title: "What Type of Texter Are You?",
  description:
    "Double texter? One-worder? Voice memo person? Let's settle this once and for all 💬",
  emoji: "💬",
  coverColor: "from-emerald-500 to-cyan-500",
  category: "Personality",
  tags: ["texting", "communication", "personality", "viral", "relationships"],
  createdAt: "2025-04-22",
  isNew: true,
  questions: [
    {
      id: "q1",
      text: "Someone sends you a meme. Your response:",
      options: [
        {
          id: "q1a",
          text: "'LMAOOO' + 5 related memes immediately",
          scores: { double_texter: 3 },
        },
        {
          id: "q1b",
          text: "😂 (and nothing else)",
          scores: { one_worder: 3 },
        },
        {
          id: "q1c",
          text: "A paragraph about why this specific meme speaks to your soul",
          scores: { novelist: 3 },
        },
        {
          id: "q1d",
          text: "A voice note of you laughing for 45 seconds",
          scores: { voice_noter: 3 },
        },
      ],
    },
    {
      id: "q2",
      text: "You haven't texted a close friend in 3 days. You:",
      options: [
        {
          id: "q2a",
          text: "Send 5 messages at once to catch up on everything",
          scores: { double_texter: 3 },
        },
        {
          id: "q2b",
          text: "Reply to their last message with 'lol true'",
          scores: { one_worder: 3 },
        },
        {
          id: "q2c",
          text: "Write a proper catch-up asking about 3 specific things they mentioned",
          scores: { novelist: 3, double_texter: 1 },
        },
        {
          id: "q2d",
          text: "Call them on the way to the store — talking is way faster",
          scores: { voice_noter: 3 },
        },
      ],
    },
    {
      id: "q3",
      text: "How long are your average texts?",
      options: [
        {
          id: "q3a",
          text: "Short individually — but you send like 8 of them",
          scores: { double_texter: 3 },
        },
        {
          id: "q3b",
          text: "'k', 'lol', 'yeah' — why use more words?",
          scores: { one_worder: 3 },
        },
        {
          id: "q3c",
          text: "Long. Your friends have called your texts 'emails' before.",
          scores: { novelist: 3 },
        },
        {
          id: "q3d",
          text: "You send voice notes. This question doesn't apply.",
          scores: { voice_noter: 3 },
        },
      ],
    },
    {
      id: "q4",
      text: "Someone takes 3 hours to reply. You:",
      options: [
        {
          id: "q4a",
          text: "Have already sent a follow-up (just checking in!)",
          scores: { double_texter: 3 },
        },
        {
          id: "q4b",
          text: "Barely noticed — you'll reply when you reply too",
          scores: { one_worder: 3 },
        },
        {
          id: "q4c",
          text: "Reread your last message wondering if it came across wrong",
          scores: { novelist: 2, double_texter: 1 },
        },
        {
          id: "q4d",
          text: "Sent a voice note in the meantime — it's faster anyway",
          scores: { voice_noter: 3 },
        },
      ],
    },
    {
      id: "q5",
      text: "You have exciting news. You:",
      options: [
        {
          id: "q5a",
          text: "Text everyone in your contacts list immediately",
          scores: { double_texter: 3 },
        },
        {
          id: "q5b",
          text: "Post a vague Instagram story and let people figure it out",
          scores: { one_worder: 3 },
        },
        {
          id: "q5c",
          text: "Write out the full story with context and your emotional arc",
          scores: { novelist: 3 },
        },
        {
          id: "q5d",
          text: "Call or voice note — this needs to be actually heard",
          scores: { voice_noter: 3 },
        },
      ],
    },
    {
      id: "q6",
      text: "In a group chat, you are:",
      options: [
        {
          id: "q6a",
          text: "The most active member, often texting into the void",
          scores: { double_texter: 3 },
        },
        {
          id: "q6b",
          text: "The seen-zone champion (you read everything, reply to nothing)",
          scores: { one_worder: 3 },
        },
        {
          id: "q6c",
          text: "The one who writes a full paragraph when everyone else moved on",
          scores: { novelist: 3 },
        },
        {
          id: "q6d",
          text: "The one who drops a voice note nobody asked for",
          scores: { voice_noter: 3 },
        },
      ],
    },
    {
      id: "q7",
      text: "Your phone right now has:",
      options: [
        {
          id: "q7a",
          text: "17 ongoing conversations you're actively managing",
          scores: { double_texter: 3 },
        },
        {
          id: "q7b",
          text: "Notifications off — you'll check when you check",
          scores: { one_worder: 3 },
        },
        {
          id: "q7c",
          text: "A few deep conversations with people you actually care about",
          scores: { novelist: 3 },
        },
        {
          id: "q7d",
          text: "Sent and received voice memos — it's basically your podcast feed",
          scores: { voice_noter: 3 },
        },
      ],
    },
    {
      id: "q8",
      text: "Your texting reputation is:",
      options: [
        {
          id: "q8a",
          text: "'You can always count on them to triple text'",
          scores: { double_texter: 3 },
        },
        {
          id: "q8b",
          text: "'They respond eventually. Maybe.'",
          scores: { one_worder: 3 },
        },
        {
          id: "q8c",
          text: "'Their texts are longer than most people's emails'",
          scores: { novelist: 3 },
        },
        {
          id: "q8d",
          text: "'They will NEVER just type it out'",
          scores: { voice_noter: 3 },
        },
      ],
    },
  ],
  results: [
    {
      id: "double_texter",
      title: "The Double Texter",
      emoji: "💬",
      description:
        "If there's a silence, you fill it. If one message feels incomplete, you send another. You're not clingy — you're enthusiastic, and when you care about something, you say so. Repeatedly. Your friends know that a triple text from you means it's important. Your read receipts are a love language.",
      shareText:
        "I got The Double Texter on the Texter Type Test 💬 what type of texter are you? →",
      color: "from-emerald-500 to-teal-600",
    },
    {
      id: "one_worder",
      title: "The One-Worder",
      emoji: "🫥",
      description:
        "Economical. Efficient. A little mysterious. Your texts are short not because you don't care, but because why use 10 words when 2 will do? People sometimes think you're upset. You're not. You're just not a texter. 'k' is a complete sentence and you stand by that.",
      shareText:
        "I got The One-Worder on the Texter Type Test 🫥 what type of texter are you? →",
      color: "from-gray-500 to-slate-600",
    },
    {
      id: "novelist",
      title: "The Novelist",
      emoji: "📖",
      description:
        "Your texts are more like letters. You put real thought into what you say, ask follow-up questions, and reference things people told you three weeks ago. Some people find this overwhelming. Those are the wrong people. Your kind has depth — and your friends know they'll always get a real response.",
      shareText:
        "I got The Novelist on the Texter Type Test 📖 what type of texter are you? →",
      color: "from-violet-500 to-indigo-600",
    },
    {
      id: "voice_noter",
      title: "The Voice Memo Person",
      emoji: "🎙️",
      description:
        "Typing is beneath you. You have things to SAY, and they need to be HEARD — with tone, emphasis, and real-time emotion. You send 2-minute voice notes to answer simple questions. Your recipients have to pause their life to listen. They pretend to be annoyed. They secretly love it.",
      shareText:
        "I got The Voice Memo Person on the Texter Type Test 🎙️ what type of texter are you? →",
      color: "from-amber-400 to-orange-500",
    },
  ],
};

export default quiz;
