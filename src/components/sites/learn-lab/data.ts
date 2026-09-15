// Original course content for the LearnLab layout study.

export type NodeState = "done" | "active" | "locked";
export type NodeKind = "lesson" | "practice" | "chest" | "trophy";

export interface PathNode {
  id: string;
  kind: NodeKind;
  state: NodeState;
  label: string;
}

export interface Unit {
  number: number;
  title: string;
  subtitle: string;
  accent: string; // css var for the unit's colour band
  accentEdge: string;
  nodes: PathNode[];
}

export const units: Unit[] = [
  {
    number: 1,
    title: "Unit 1",
    subtitle: "Order at the market",
    accent: "var(--ll-primary)",
    accentEdge: "var(--ll-primary-dark)",
    nodes: [
      { id: "u1-1", kind: "lesson", state: "done", label: "Greetings" },
      { id: "u1-2", kind: "lesson", state: "done", label: "Numbers" },
      { id: "u1-3", kind: "chest", state: "done", label: "Reward chest" },
      { id: "u1-4", kind: "lesson", state: "active", label: "At the stall" },
      { id: "u1-5", kind: "practice", state: "locked", label: "Practice" },
      { id: "u1-6", kind: "lesson", state: "locked", label: "Haggling" },
      { id: "u1-7", kind: "trophy", state: "locked", label: "Unit review" },
    ],
  },
  {
    number: 2,
    title: "Unit 2",
    subtitle: "Find your way around town",
    accent: "var(--ll-purple)",
    accentEdge: "var(--ll-purple-dark)",
    nodes: [
      { id: "u2-1", kind: "lesson", state: "locked", label: "Directions" },
      { id: "u2-2", kind: "lesson", state: "locked", label: "Transport" },
      { id: "u2-3", kind: "chest", state: "locked", label: "Reward chest" },
      { id: "u2-4", kind: "lesson", state: "locked", label: "Landmarks" },
      { id: "u2-5", kind: "practice", state: "locked", label: "Practice" },
      { id: "u2-6", kind: "trophy", state: "locked", label: "Unit review" },
    ],
  },
];

export const leaderboard = [
  { rank: 1, name: "Amara O.", xp: 1840, you: false },
  { rank: 2, name: "Kenji T.", xp: 1655, you: false },
  { rank: 3, name: "You", xp: 1490, you: true },
  { rank: 4, name: "Priya N.", xp: 1320, you: false },
  { rank: 5, name: "Lars B.", xp: 1105, you: false },
];

export const quests = [
  { title: "Earn 60 XP", current: 40, goal: 60 },
  { title: "Finish 3 lessons", current: 2, goal: 3 },
  { title: "Score 90% or higher", current: 1, goal: 2 },
];

/* ---------------------------------------------------------------- leagues */

export interface League {
  key: string;
  name: string;
  colour: string;
  edge: string;
  unlocked: boolean;
}

export const leagues: League[] = [
  { key: "bronze", name: "Bronze", colour: "#b87333", edge: "#8f5926", unlocked: true },
  { key: "silver", name: "Silver", colour: "#9aa5b8", edge: "#78818f", unlocked: true },
  { key: "gold", name: "Gold", colour: "#f5a524", edge: "#d1861a", unlocked: false },
  { key: "sapphire", name: "Sapphire", colour: "#3b82f6", edge: "#2563c4", unlocked: false },
  { key: "ruby", name: "Ruby", colour: "#f4726d", edge: "#d4534e", unlocked: false },
  { key: "emerald", name: "Emerald", colour: "#10b981", edge: "#0b8f65", unlocked: false },
  { key: "amethyst", name: "Amethyst", colour: "#a855f7", edge: "#8636c9", unlocked: false },
  { key: "pearl", name: "Pearl", colour: "#e5c1cd", edge: "#bd9aa6", unlocked: false },
  { key: "obsidian", name: "Obsidian", colour: "#4b5563", edge: "#333b45", unlocked: false },
  { key: "diamond", name: "Diamond", colour: "#14b8c4", edge: "#0e929c", unlocked: false },
];

export interface LeagueRow {
  rank: number;
  name: string;
  xp: number;
  you?: boolean;
}

/* 20 competitors: top 7 promote, bottom 5 demote — the zone bands are what
   make this screen legible at a glance. */
export const leagueTable: LeagueRow[] = [
  { rank: 1, name: "Amara O.", xp: 1840 },
  { rank: 2, name: "Kenji T.", xp: 1655 },
  { rank: 3, name: "You", xp: 1490, you: true },
  { rank: 4, name: "Priya N.", xp: 1320 },
  { rank: 5, name: "Lars B.", xp: 1105 },
  { rank: 6, name: "Sofia M.", xp: 1042 },
  { rank: 7, name: "Diego R.", xp: 998 },
  { rank: 8, name: "Yuki S.", xp: 940 },
  { rank: 9, name: "Nadia K.", xp: 887 },
  { rank: 10, name: "Tomás L.", xp: 812 },
  { rank: 11, name: "Ines F.", xp: 764 },
  { rank: 12, name: "Omar H.", xp: 703 },
  { rank: 13, name: "Freya J.", xp: 655 },
  { rank: 14, name: "Mateo C.", xp: 590 },
  { rank: 15, name: "Zara A.", xp: 522 },
  { rank: 16, name: "Noah W.", xp: 468 },
  { rank: 17, name: "Elif D.", xp: 390 },
  { rank: 18, name: "Rafael P.", xp: 311 },
  { rank: 19, name: "Mei L.", xp: 240 },
  { rank: 20, name: "Jonas E.", xp: 175 },
];

export const PROMOTION_CUTOFF = 7;
export const DEMOTION_CUTOFF = 16;

/* ----------------------------------------------------------------- quests */

export interface Quest {
  title: string;
  description: string;
  current: number;
  goal: number;
  reward: number;
  icon: "xp" | "lesson" | "streak" | "target" | "clock";
}

export const dailyQuests: Quest[] = [
  { title: "Earn 60 XP", description: "Any lesson counts", current: 40, goal: 60, reward: 15, icon: "xp" },
  { title: "Finish 3 lessons", description: "Keep the run going", current: 2, goal: 3, reward: 20, icon: "lesson" },
  { title: "Score 90% or higher", description: "In 2 lessons", current: 1, goal: 2, reward: 25, icon: "target" },
];

export const monthlyQuest = {
  title: "Complete 20 lessons this month",
  current: 13,
  goal: 20,
  reward: 120,
};

export const friendsQuest = {
  title: "Team up: earn 300 XP together",
  current: 185,
  goal: 300,
  partner: "Kenji T.",
};

/* Week strip for the streak calendar — Mon-first. */
export const streakWeek = [
  { day: "M", done: true },
  { day: "T", done: true },
  { day: "W", done: true },
  { day: "T", done: true },
  { day: "F", done: true },
  { day: "S", done: false, today: true },
  { day: "S", done: false },
];

/* ---------------------------------------------------------------- profile */

export const profile = {
  name: "Alex Rivera",
  username: "@alexlearns",
  joined: "Joined March 2024",
  following: 24,
  followers: 31,
  courses: ["ES", "FR"],
};

export const profileStats = [
  { label: "Day streak", value: "12", icon: "flame" as const, colour: "var(--ll-orange)" },
  { label: "Total XP", value: "1,490", icon: "zap" as const, colour: "var(--ll-primary)" },
  { label: "Current league", value: "Bronze", icon: "trophy" as const, colour: "#b87333" },
  { label: "Top 3 finishes", value: "4", icon: "medal" as const, colour: "var(--ll-teal)" },
];

export interface Achievement {
  name: string;
  tier: number;
  description: string;
  current: number;
  goal: number;
  colour: string;
}

export const achievements: Achievement[] = [
  { name: "Wildfire", tier: 3, description: "Reach a 14 day streak", current: 12, goal: 14, colour: "var(--ll-orange)" },
  { name: "Sage", tier: 2, description: "Earn 2,000 XP", current: 1490, goal: 2000, colour: "var(--ll-primary)" },
  { name: "Scholar", tier: 4, description: "Learn 250 new words", current: 212, goal: 250, colour: "var(--ll-teal)" },
  { name: "Champion", tier: 1, description: "Finish top 3 in a league 5 times", current: 4, goal: 5, colour: "var(--ll-coral)" },
  { name: "Sharpshooter", tier: 2, description: "Complete 10 perfect lessons", current: 6, goal: 10, colour: "var(--ll-purple)" },
];

export const friends = [
  { name: "Kenji T.", xp: 1655, initial: "K" },
  { name: "Amara O.", xp: 1840, initial: "A" },
  { name: "Priya N.", xp: 1320, initial: "P" },
  { name: "Lars B.", xp: 1105, initial: "L" },
];

/* --------------------------------------------------------------- practice */

export interface PracticeItem {
  key: string;
  title: string;
  description: string;
  icon: "refresh" | "speaker" | "mic" | "book";
  colour: string;
  edge: string;
  locked?: boolean;
  count?: number;
}

export const practiceItems: PracticeItem[] = [
  {
    key: "mistakes",
    title: "Review mistakes",
    description: "Practise the words you keep slipping on.",
    icon: "refresh",
    colour: "var(--ll-coral)",
    edge: "var(--ll-coral-dark)",
    count: 9,
  },
  {
    key: "listening",
    title: "Listening drill",
    description: "Train your ear on spoken phrases.",
    icon: "speaker",
    colour: "var(--ll-teal)",
    edge: "var(--ll-teal-dark)",
  },
  {
    key: "speaking",
    title: "Speaking drill",
    description: "Say it out loud and get scored.",
    icon: "mic",
    colour: "var(--ll-primary)",
    edge: "var(--ll-primary-dark)",
  },
  {
    key: "words",
    title: "Word list",
    description: "212 words learned so far.",
    icon: "book",
    colour: "var(--ll-amber)",
    edge: "var(--ll-amber-dark)",
    locked: true,
  },
];

/* ------------------------------------------------------------------- shop */

export interface ShopItem {
  key: string;
  title: string;
  description: string;
  price: number | "free";
  icon: "shield" | "heart" | "infinity" | "gem" | "flame";
  colour: string;
  owned?: boolean;
}

export interface ShopSection {
  title: string;
  items: ShopItem[];
}

export const shopSections: ShopSection[] = [
  {
    title: "Power-ups",
    items: [
      {
        key: "freeze",
        title: "Streak freeze",
        description: "Keeps your streak alive for one missed day.",
        price: 200,
        icon: "shield",
        colour: "var(--ll-teal)",
      },
      {
        key: "double",
        title: "Double or nothing",
        description: "Wager 50 gems on a 7 day streak.",
        price: 50,
        icon: "flame",
        colour: "var(--ll-amber)",
      },
    ],
  },
  {
    title: "Hearts",
    items: [
      {
        key: "refill",
        title: "Refill hearts",
        description: "Your hearts are full.",
        price: 350,
        icon: "heart",
        colour: "var(--ll-coral)",
        owned: true,
      },
      {
        key: "unlimited",
        title: "Unlimited hearts",
        description: "Never run out mid-lesson.",
        price: "free",
        icon: "infinity",
        colour: "var(--ll-primary)",
      },
    ],
  },
  {
    title: "Gems",
    items: [
      {
        key: "gems-500",
        title: "500 gems",
        description: "A small top-up.",
        price: 499,
        icon: "gem",
        colour: "var(--ll-teal)",
      },
      {
        key: "gems-1200",
        title: "1,200 gems",
        description: "Best value bundle.",
        price: 999,
        icon: "gem",
        colour: "var(--ll-primary)",
      },
    ],
  },
];

/* ------------------------------------------------------- lesson exercises */

export interface PickExercise {
  type: "pick";
  prompt: string;
  question: string;
  options: { id: string; label: string; emoji: string }[];
  answerId: string;
}

export interface BankExercise {
  type: "bank";
  prompt: string;
  question: string;
  bank: string[];
  answer: string[];
}

export type Exercise = PickExercise | BankExercise;

export const exercises: Exercise[] = [
  {
    type: "pick",
    prompt: "Which one of these is “the bread”?",
    question: "el pan",
    options: [
      { id: "a", label: "el pan", emoji: "🥖" },
      { id: "b", label: "la leche", emoji: "🥛" },
      { id: "c", label: "el queso", emoji: "🧀" },
      { id: "d", label: "la manzana", emoji: "🍎" },
    ],
    answerId: "a",
  },
  {
    type: "bank",
    prompt: "Translate this sentence",
    question: "Quiero dos manzanas, por favor.",
    bank: ["I", "want", "two", "apples", "please", "bread", "the", "cheese"],
    answer: ["I", "want", "two", "apples", "please"],
  },
  {
    type: "pick",
    prompt: "Which one of these is “the milk”?",
    question: "la leche",
    options: [
      { id: "a", label: "el pan", emoji: "🥖" },
      { id: "b", label: "la leche", emoji: "🥛" },
      { id: "c", label: "el queso", emoji: "🧀" },
      { id: "d", label: "la manzana", emoji: "🍎" },
    ],
    answerId: "b",
  },
  {
    type: "bank",
    prompt: "Translate this sentence",
    question: "El queso es para mi madre.",
    bank: ["The", "cheese", "is", "for", "my", "mother", "bread", "wants"],
    answer: ["The", "cheese", "is", "for", "my", "mother"],
  },
];
