// "If this is you" trait lines shown on result pages.
// Keyed by quiz slug → result id → string[].
const traitsMap: Record<string, Record<string, string[]>> = {
  "main-character-test": {
    main: [
      "You narrate your own life and there's no apology for it",
      "Emotional processing happens out loud — and somehow people find it compelling",
      "You have an aesthetic and it isn't an accident",
      "People end up invested in how your story goes without being asked to",
    ],
    chosen_one: [
      "You move through chaos without flinching",
      "People sense something's different before you say a word",
      "Strong opinions. Mostly correct.",
      "You don't explain yourself often — you've noticed you don't have to",
    ],
    sidekick: [
      "The group chat is alive because of you",
      "You remember what people told you three months ago",
      "Funnier and more quietly reliable than the main character",
      "Everyone wants you on their team and they know why",
    ],
    npc: [
      "Not performing your life, and completely fine with that",
      "The drama consistently finds other people",
      "Unbothered is your default state, not an aspiration",
      "A quiet presence people depend on more than they admit",
    ],
  },

  "geek-level-test": {
    casual: [
      "You can hold your own in most pop culture conversations",
      "Normal sleep schedule. Functioning social life.",
      "You know enough to be interesting without being a lot",
      "The most likely person in any group to actually go outside",
    ],
    fan: [
      "You have your things and you love them deeply",
      "You know the lore better than most people in the room",
      "Could convert someone to your fandom given 20 minutes and the right opening",
      "The outside world can still reach you — for now",
    ],
    geek: [
      "Your browser history is a niche rabbit hole",
      "Strong opinions about things most people don't know exist",
      "Deep work comes naturally when it's something you actually care about",
      "You'd love to find one person who genuinely gets it",
    ],
    overlord: [
      "Custom setup. Took months to optimize. Worth every hour.",
      "At least one ongoing project nobody else fully understands",
      "The correct way to do things is important to you — intensely",
      "You have documented something that did not need documentation",
    ],
  },

  "red-flag-test": {
    phone_addict: [
      "Screen time would alarm most therapists",
      "You're managing more text threads simultaneously than most people would attempt",
      "You have said 'sorry I was on my phone' with zero irony",
      "You will screenshot this result and send it before you finish reading it",
    ],
    ghoster: [
      "Everything is great until it gets real — then you suddenly have 'a lot going on'",
      "Your re-entrance texts are genuinely legendary",
      "People have learned not to fully count on you. You've noticed.",
      "The panic-and-disappear response is faster than you'd like it to be",
    ],
    overthinker: [
      "Four drafts before sending anything important",
      "You've analyzed a single text from three different angles",
      "You rarely say anything stupid — too much processing time",
      "By the time you decide what to do, the moment has usually passed",
    ],
    commitment_phobe: [
      "The beginning of things is your favorite part",
      "The moment something gets real, you get vague",
      "You've mentally rescheduled 'the talk' at least twice",
      "The feelings are there. The action on them keeps getting delayed.",
    ],
  },

  "texter-type-test": {
    double_texter: [
      "If there's a silence, you fill it",
      "Your triple texts mean something — people have learned to read them",
      "You have more active conversations open at once than most people would manage",
      "You are enthusiastic and you have made peace with that",
    ],
    one_worder: [
      "'k' is a complete sentence and you stand by that",
      "You've been described as hard to read. You consider this neutral.",
      "Notifications are often off. You'll get to it.",
      "You communicate exactly enough to stay connected and not a word more",
    ],
    novelist: [
      "Your texts reference something they mentioned three weeks ago",
      "You've been told your messages read like emails. You consider this a compliment.",
      "Deep conversations over text are a preferred medium",
      "You follow up on things people casually mention — they notice",
    ],
    voice_noter: [
      "Typing feels inefficient for anything that actually matters",
      "90-second voice note to answer a yes/no question — non-negotiable",
      "The tone, the emphasis, the real-time emotion — that's the entire point",
      "Your recipients pause their life to listen. They secretly enjoy it.",
    ],
  },

  "villain-era-test": {
    protagonist: [
      "Life has been hard and you still chose to stay the hero",
      "You process things with curiosity more than bitterness",
      "People are surprised by how un-cynical you are given everything",
      "The arc is still being written — and it's a good one",
    ],
    redeemed: [
      "You were in it. You chose something harder.",
      "Not the same person you were before — and that's completely intentional",
      "The villain arc gave you edges. The redemption gave you depth.",
      "You know the difference because you've lived both sides of it",
    ],
    in_era: [
      "Building in silence. The results will do all the talking.",
      "No explanation required. The work speaks.",
      "People either understand or they don't — you've stopped caring which",
      "This isn't rage. This is precision.",
    ],
    misunderstood: [
      "You stopped justifying yourself and people called it a villain era",
      "Complex, layered, not interested in being understood by everyone",
      "The few people who actually get you, really get you",
      "What looked like an edge-up was just you finally taking up space",
    ],
  },

  "travel-type-test": {
    luxury: [
      "You travel less but when you do, it's immaculate",
      "Soft sheets and a meaningful itinerary are both non-negotiable",
      "Your trips become the memories other people wish they had",
      "Standards, not flashiness — there's a difference",
    ],
    planner: [
      "Spreadsheet exists. Backup plan exists. Reservation made months ago.",
      "Your group thanks you afterward, even if they complained about the itinerary",
      "The worst thing that happens is usually exactly what you planned for",
      "You've seen more places than most because you actually organized the trip",
    ],
    adventurer: [
      "Your best travel story was absolutely not in the original plan",
      "You've missed at least one bus. It became the highlight.",
      "Your packing is chaotic. Your travel memories are not.",
      "You get lost on purpose and call it a feature",
    ],
    homebody: [
      "Travel is fine. Home is better.",
      "You've seen the sights. You have opinions on the food.",
      "Nothing hits like sleeping in your own bed after being away",
      "You go. You're just genuinely glad when it ends.",
    ],
  },

  "introvert-test": {
    full_introvert: [
      "Properly, deeply alone — that's the real recharge",
      "Social events are fine. The recovery time after them is real and necessary.",
      "Small talk is not neutral. It costs something every time.",
      "Your inner world is where you actually live",
    ],
    social_introvert: [
      "You love specific people in the right doses",
      "You can be the most engaging person in the room — and then you go home",
      "Afterward, you need the walls. That's not antisocial. That's just your system.",
      "You have a recharge requirement that extroverts don't, and honoring it keeps you sane",
    ],
    ambivert: [
      "Your social battery is genuinely context-dependent — not a cop-out",
      "Certain people charge you. Others drain you regardless of the setting.",
      "You don't have a default mode. You have a read-the-room mode.",
      "Most people who say they're ambiverts aren't. You actually are.",
    ],
    closet_extrovert: [
      "You get energy from people and the evidence supports this",
      "You feel better after social time, not worse",
      "You've been calling yourself an introvert for years",
      "It might be time to accept that you are a person who likes people. A lot.",
    ],
  },

  "friend-role-test": {
    planner: [
      "The reservation exists because you made it",
      "The group would not function without you — everyone knows this",
      "You think about logistics so nobody else has to",
      "There is probably a backup plan for the backup plan",
    ],
    emotional_support: [
      "You remember what people told you three months ago and check back in",
      "You notice when someone's off before they say anything",
      "People call you when they actually need to talk — not just vent",
      "The group is held together by the fact that you genuinely give a damn",
    ],
    funny_one: [
      "You broke the tension at exactly the right moment",
      "Your humor is a form of care, not just entertainment",
      "You made a bad trip into a story everyone still tells",
      "You said the thing everyone was thinking and made it okay to laugh",
    ],
    chaos_agent: [
      "The detour that became the highlight of the trip was your idea",
      "Plans exist as suggestions until you're in the room",
      "Not reckless — just willing to go off-script when the script is boring",
      "Every group needs one. Yours is lucky.",
    ],
  },

  "dater-type-test": {
    golden_retriever: [
      "You text first and there's no shame in that",
      "When you're into someone, they know it — no guessing required",
      "You love hard and it shows",
      "Some people find this too much. The right person finds it exactly right.",
    ],
    slow_burn: [
      "You take time to decide if someone is worth opening up to",
      "Once you're in, you're completely in",
      "People mistake your patience for disinterest. They're wrong.",
      "The ones who waited for you usually say it was worth every second",
    ],
    hot_cold: [
      "Intense one week, distant the next — not a game, just how your feelings move",
      "Your rhythm doesn't always arrive on schedule",
      "People are either fascinated or frustrated by you. Sometimes both at once.",
      "At least you're never boring",
    ],
    avoidant: [
      "Great on paper. Genuinely charming in conversation. Quietly exits when it gets real.",
      "You want love. You also have a very efficient system for self-sabotage.",
      "Knowing this is genuinely half the work",
      "The right version of you is closer than the current pattern suggests",
    ],
  },

  "easy-to-love-test": {
    genuinely_easy: [
      "You communicate what you need without making it someone else's emergency",
      "You don't punish people for minor things or expect them to read your mind",
      "Being around you feels uncomplicated — people relax into it",
      "This is rare. More people think they're this than actually are.",
    ],
    complicated: [
      "Worth it — but it takes the right person to see that",
      "You have layers and they're real, not performed",
      "The people who stay learn something about themselves in the process",
      "Hard to love quickly. Easy to love deeply once someone actually does.",
    ],
    walls_up: [
      "The walls went up for a reason — you know what that reason is",
      "You can be genuinely warm when you feel safe enough",
      "People who get past the surface are usually glad they put in the time",
      "Working on it is already more than most people do",
    ],
    loveable_chaos: [
      "Unpredictable but never dull",
      "The people who love you have stories that wouldn't exist otherwise",
      "Your energy is a lot — for the right person, it's everything",
      "You are easy to adore and occasionally impossible to manage",
    ],
  },

  "good-friend-test": {
    ride_or_die: [
      "You answer the 2am call — actually answer it",
      "You show up without being asked and without keeping score",
      "Your friends have a different relationship with feeling alone because of you",
      "The kind of friend people describe when they say 'I got lucky with my people'",
    ],
    low_key_legendary: [
      "You don't do the most — you're just always exactly there when it matters",
      "You remember the small details people forget they even mentioned",
      "Your friends don't always realize how much they rely on you until you're gone for a week",
      "Quiet loyalty is still loyalty. Yours is the real kind.",
    ],
    fair_weather: [
      "You're a great time when times are great",
      "The 10pm 'I'm not okay' texts are where things get inconsistent",
      "You have more to give than you're currently giving — and you know it",
      "Your friends like you. They just can't fully count on you yet.",
    ],
    good_intentions: [
      "The caring is genuine — that part is not in question",
      "You mean to call. You plan to be there. Life gets in the way.",
      "The gap between your intentions and your actions is the only thing standing in the way",
      "Close the gap. The friend you think you are is closer than you think.",
    ],
  },

  "aura-test": {
    golden: [
      "You make people feel welcome before you've said anything particularly special",
      "Rooms adjust when you walk in — not from force, from warmth",
      "People describe the night as better because you were in it",
      "Your energy is the reason people stayed longer than they planned",
    ],
    dark: [
      "There's something about you that lands before you speak",
      "You don't fill space — you hold it",
      "The things you say tend to land after the conversation is already over",
      "The most interesting person in any room, and it cost you no effort",
    ],
    soft: [
      "People exhale around you — sometimes without noticing",
      "Conversations with you feel different from conversations with everyone else",
      "People tell you things they didn't plan to say",
      "Your presence offers something that most people don't know they're missing until it's there",
    ],
    chaotic: [
      "You are impossible to predict and impossible to ignore",
      "The best nights have your name on them",
      "You walk into situations that should be a mess and come out with a story",
      "There is never a dull moment in your presence and people orbit you because of it",
    ],
  },

  "situationship-test": {
    clear_communicator: [
      "You say what you mean and ask for what you want",
      "In a dating world full of deliberate vagueness, that makes you genuinely rare",
      "You might not always get the answer you want — but at least you ask the question",
      "The right person will match this energy. They exist.",
    ],
    situationship_creator: [
      "You're warm enough to keep someone close and vague enough to keep them uncertain",
      "The undefined space is where you function best — you've noticed this",
      "Someone usually catches feelings before you've decided what you want",
      "You've probably left a trail of 'I thought we were...' conversations behind you",
    ],
    mixed_signals: [
      "You like them. You pull back. You reach out. You go quiet.",
      "Your feelings are real — they just don't arrive in a consistent order",
      "People stay because the good moments are genuinely great",
      "Both the warmth and the unpredictability are true at the same time",
    ],
    commitment_confused: [
      "You're genuinely lovely to be around",
      "Your system for keeping things undefined works very efficiently",
      "The feelings are there. The action on them is delayed.",
      "Someone is probably waiting for you to figure this out right now",
    ],
  },

  "crush-mode-test": {
    goes_for_it: [
      "You like someone, you figure out how to be around them, and eventually you do something about it",
      "This sounds basic. Apparently it isn't.",
      "You have the combination of self-awareness and nerve most people lose when they're attracted to someone",
      "Your success rate isn't perfect. But at least you have one.",
    ],
    silent_sufferer: [
      "Everything is happening internally — nobody knows",
      "You've memorized their texting patterns without meaning to",
      "You will feel everything and probably say nothing unless circumstances force it",
      "The romantic tension you live in is entirely self-generated and self-contained",
    ],
    chaos_mode: [
      "Having a crush visibly changes your behavior — obvious to everyone except you",
      "You overshare, undershare, say something odd, go too quiet, then too intense",
      "Your unfiltered reaction to real feelings is endearing to the right person",
      "There has been some collateral damage. You know what it was.",
    ],
    goes_cold: [
      "You are an exceptional actor when you need to be",
      "You appear completely fine when your entire internal world is on fire",
      "The people you like rarely know you like them",
      "It's a flawless system with one flaw — things never start",
    ],
  },

  "friend-red-flag-test": {
    actually_solid: [
      "You listen without making it about you",
      "You show up when it counts without needing credit for it",
      "You don't disappear when things get hard",
      "This sounds like a low bar. It isn't. Most people fail at least one of these regularly.",
    ],
    one_upper: [
      "When a friend shares something, your brain immediately finds your version of it",
      "You're not trying to steal the moment — you're trying to connect",
      "But 'me too, and actually more so' lands differently than just listening",
      "Let the moment be fully theirs sometimes. Your stories will still be there.",
    ],
    canceler: [
      "Great in theory — warm, loving, full of good intentions",
      "Also reliable at canceling, going quiet, and apologizing from a safe distance",
      "The caring is real. The follow-through is inconsistent.",
      "That gap is the flag. The good news: it's closeable.",
    ],
    fixer: [
      "You care deeply and it shows — immediately, by trying to fix everything",
      "Most people don't want to be fixed; they want to be heard",
      "Your advice is usually good. The timing is often wrong.",
      "Try staying in the problem with them a little longer before offering the exit",
    ],
  },

  "city-energy-test": {
    new_york: [
      "Fast, direct, always in motion",
      "You don't wait for permission and you don't explain yourself",
      "Strong opinions about everything — including things that don't matter",
      "Your pace exhausts other people and they somehow miss it when you're not around",
    ],
    paris: [
      "You do things with taste — not for approval, just because mediocrity bothers you",
      "Selective about people, deliberate about everything else",
      "There's a version of this that reads as cold. You call it standards.",
      "Impossible to impress with the obvious",
    ],
    tokyo: [
      "Precise, considered, and aesthetically dialed-in",
      "You have systems other people wish they had",
      "You notice things nobody else catches and think before you speak",
      "Your standards are quietly applied. The results always show.",
    ],
    la: [
      "You've sorted out what stresses you and decided it isn't worth it",
      "You move at your own pace without performing urgency",
      "And you still somehow get things done",
      "People find this either incredibly appealing or completely baffling. You don't mind either.",
    ],
  },

  "attachment-style-test": {
    secure: [
      "You communicate, you don't spiral when people need space, and you don't test people",
      "You approach relationships like someone who believes they're worth showing up for",
      "Not perfect — just consistently present in a way that actually counts",
      "The people in your life are lucky and most of them know it",
    ],
    anxious: [
      "You love deeply and you worry proportionally",
      "When someone goes quiet, your brain goes loud",
      "You need to know the people you care about actually want to be there",
      "The right person understands this. The wrong one uses it. You're getting better at telling the difference.",
    ],
    avoidant: [
      "Independence isn't a preference — it's a requirement",
      "When people get too close too fast, you instinctively create distance",
      "You do want connection. Vulnerability has just historically not gone well.",
      "Your nervous system hasn't forgotten that. The right relationship gives you room anyway.",
    ],
    fearful: [
      "You want closeness and you're also afraid of it — both are real",
      "You chase connection and pull back from it in the same week",
      "You learned early that the people you needed weren't always reliable",
      "You're not broken. You're just doing the hardest kind of work.",
    ],
  },

  "partner-type-test": {
    all_in: [
      "You love out loud and you're not apologizing for it",
      "You show up, plan things, remember details, and make people feel chosen",
      "Your partner knows exactly where they stand — which most people have never had",
      "Some find this intensity too much. Those are the wrong people.",
    ],
    thoughtful: [
      "You don't perform love — you just do it",
      "Consistent check-ins, remembered details, showing up without being asked",
      "Your partner doesn't realize how much you actually do until you stop for a day",
      "That's what quiet reliability looks like from the inside",
    ],
    independent: [
      "You love fully but you were whole before this relationship",
      "Your independence isn't emotional unavailability — it's just that you brought a complete person into this",
      "Some partners find this hard to read. The right one finds it grounding.",
      "You give space because you genuinely understand what it means to need it",
    ],
    inconsistent: [
      "The feelings are real and the caring is genuine",
      "They just don't always arrive in a consistent form",
      "Good weeks, distant weeks. Fully present, then quietly checked out.",
      "The gap between who you want to be as a partner and who you currently are is closeable",
    ],
  },

  "friend-maker-test": {
    natural_connector: [
      "You talk to people. Genuinely.",
      "You remember their name, ask the follow-up question, and create the feeling of being seen",
      "You don't collect friends — you accumulate them, because warmth is just how you're wired",
      "Your contacts list is basically a community you built without noticing",
    ],
    deep_diver: [
      "You skip small talk whenever possible",
      "Most acquaintances stay acquaintances — the few who pass your filter become lifelong",
      "Quality is a requirement, not a preference",
      "People who get close to you say they didn't know friendship like this was possible",
    ],
    slow_burn: [
      "Friendship with you takes time and it's worth it",
      "You need to see who someone actually is before you open up",
      "Not cold — calibrated",
      "The people who earned your trust describe you as one of the most loyal friends they have",
    ],
    situational: [
      "Your closest friends came from specific contexts — same job, class, trip, group chat",
      "You bond best through shared experience rather than cold starts",
      "Once you're in the same world as someone, connection happens naturally",
      "You're not bad at making friends — you just need a setup. Give it one.",
    ],
  },

  "alone-time-test": {
    nester: [
      "Your home is a carefully managed comfort zone",
      "Alone time means actually being in it — blanket, right temperature, no obligations",
      "You don't need productivity. You need decompression.",
      "Your idea of a perfect night is what most people would describe as doing nothing. You were right.",
    ],
    productive: [
      "You can't fully relax without feeling like you're doing something",
      "Alone time is the time you've been waiting for to work on what you actually care about",
      "Your version of unwinding involves output",
      "You're not wired wrong. You're just wired differently.",
    ],
    social_recharger: [
      "Alone doesn't mean disconnected",
      "You call people, catch up on group chats, and feel genuinely restored by it",
      "You need quiet — you just like the feeling of people being nearby in some form",
      "You recharge with the feeling of connection, not the performance of it",
    ],
    restless: [
      "You don't really do sitting still",
      "Alone time involves movement — walks, errands, gym, somewhere that isn't your couch",
      "The recharge happens in motion, not stillness",
      "Your apartment is probably nice. You're just never in it.",
    ],
  },
};

export function getTraits(slug: string, resultId: string): string[] {
  return traitsMap[slug]?.[resultId] ?? [];
}
