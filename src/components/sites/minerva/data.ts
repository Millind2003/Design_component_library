// Every string here is transcribed verbatim from minerva.io.
import { img } from "./assets";

export const nav = {
  links: [
    { label: "Platform", href: "#platform" },
    { label: "Customers", href: "#customers" },
    { label: "Pricing", href: "#pricing" },
  ],
  company: [
    { label: "Company", href: "#company" },
    { label: "API", href: "#api" },
  ],
  demo: { label: "Book a Demo", href: "#demo" },
  cta: { label: "Try Minerva", href: "#try" },
};

export const announcement = {
  eyebrow: "Introducing Minerva:",
  text: "AI for Consumer Marketing",
};

export const hero = {
  heading: "AI for marketing leaders",
  subheading:
    "Minerva helps marketers create time to do the work they love, while delegating operational work to AI.",
  prompt: "What do you market?",
  categories: ["TRAVEL", "LUXURY TRAVEL", "SPORTS", "SPORTS"],
  custom: { label: "CUSTOM", placeholder: "Enter your own..." },
  hint: "Tap to interact",
};

export type Segment = {
  name: string;
  score: number;
  audience: string;
  wealth: string;
  hook: string;
  brief: string;
};

// The worked "LUXURY TRAVEL" example the hero drops into.
export const segments: Segment[] = [
  {
    name: "AFFLUENT TRAVELERS",
    score: 94,
    audience: "1.78M",
    wealth: "$10.1M",
    hook: "Every detail considered. Every stay, exceptional.",
    brief:
      "Discerning and quietly wealthy, buying taste not price. Sell understated luxury, never sell hard. Lead with 24/7 concierge, hotel-grade cleaning, curated properties. Confident over salesy.",
  },
  {
    name: "FAMILY TRIP ORGANIZERS",
    score: 90,
    audience: "19.2M",
    wealth: "$1.09M",
    hook: "Every detail considered. Every stay, exceptional.",
    brief:
      "Discerning and quietly wealthy, buying taste not price. Sell understated luxury, never sell hard. Lead with 24/7 concierge, hotel-grade cleaning, curated properties. Confident over salesy.",
  },
  {
    name: "ROMANTIC GETAWAY SEEKERS",
    score: 87,
    audience: "4.15M",
    wealth: "$750K",
    hook: "Every detail considered. Every stay, exceptional.",
    brief:
      "Discerning and quietly wealthy, buying taste not price. Sell understated luxury, never sell hard. Lead with 24/7 concierge, hotel-grade cleaning, curated properties. Confident over salesy.",
  },
];

export const heroCtas = {
  discover: "Discover your audience",
  account: "Create an account",
  demo: "Book a Platform Demo",
  try: "Try Minerva",
};

export const socialProof = {
  line1: "Marketing is changing.",
  line2:
    "The world’s best brands partner with Minerva to accelerate their growth:",
};

export const consumers = {
  heading: "Minerva builds AI that understands your consumers.",
  body: "Our agentic systems are built on a foundation of consumer context that helps them be smarter and more accurate. This means consumers get less noise and marketers get better results.",
  kicker:
    "Top marketers use Minerva to understand their customers, build campaigns and measure and report on results.",
  cta: "Try Minerva",
};

// The illustrative consumer record shown alongside the copy above.
export const profile = {
  name: "Andy Wei",
  location: "Upper East Side, Manhattan",
  fields: [
    { label: "Age", value: "23" },
    { label: "Gender", value: "Male" },
    { label: "Current Occupation", value: "Junior Sales Associate" },
  ],
  segment: {
    name: "Basketball Fans",
    fields: [
      { label: "Gender", value: "Male" },
      { label: "Age", value: "22–50" },
      { label: "Score", value: "94 / 100" },
      { label: "Income", value: "$100–500K" },
      { label: "City", value: "New York" },
      { label: "State", value: "NY" },
    ],
  },
  region: "Greater New York Metropolitan Area",
};

export const context = {
  heading: "Context is all you need.",
  stats: [
    "270 million records.",
    "1,000+ attributes.",
    "Since 2010, updated daily.",
  ],
  tabs: [
    { label: "Enrichment", image: img.contextEnrichment },
    { label: "Standardization", image: img.contextStandardization },
    { label: "Capabilities", image: img.contextCapabilities },
  ],
  paragraphs: [
    "Minerva provides access to the most comprehensive, CCPA compliant, through-time B2B2C dataset available to consumer marketers.",
    "Our Agentic Data Engineer unifies our attribute data with customer's interaction data and standardizes each consumer's user and life journey.",
    "We then use this unified view to enable marketers and AI agents to run analysis, create hypotheses, craft campaigns at scale, activate across channels and report on performance.",
  ],
};

export const agents = {
  heading: "Deploy Minerva's Agents for every marketing task",
  items: [
    {
      title: "Analysis & Optimization",
      body: "AI proactively reviews your funnel and provides you with daily monitoring of what you're missing, what's winning and what should be done next.",
      image: img.analysis,
    },
    {
      title: "Campaign Generation & Activation",
      body: "Using their understanding of your funnel, agents draft campaigns on your behalf, which you can edit or push directly to your activation platforms.",
      image: img.campaign,
    },
    {
      title: "Measurement & Reporting",
      body: "As campaigns are activated and monitored, agents proactively push auditable reports to your dashboard and inbox.",
      image: img.measurement,
    },
  ],
};

// Sample prompt shown inside the "Analysis & Optimization" panel.
export const analysisQuery =
  "Give me a 2025 performance review, and include my best performing demographics.";

// Pre-launch checklist rendered by the "Campaign Generation" panel.
export const checklist = [
  {
    group: "Data Foundation",
    items: [
      "Confirm first-party data is current and clean",
      "Run enrichment check— flag stale or low-confidence records",
      "Cross-compare 1P / 3P / proprietary data for conflicts or gaps",
      "Validate identity resolution across touchpoints",
      "Pull and review historical campaign performance",
    ],
  },
  {
    group: "Audience & Segmentation",
    items: [
      "Confirm target segments are defined and locked",
      "Score segments by propensity and expected conversion rate",
      "Review lookalike audiences against existing customers",
      "Check segment size viability per channel",
    ],
  },
  {
    group: "Creative & Messaging",
    items: [
      "Align creative variants to each audience segment",
      "Confirm copy, CTA and landing page parity",
      "Verify brand safety and compliance sign-off",
    ],
  },
];

// Sample report rendered by the "Measurement & Reporting" panel.
export const report = {
  day: "Monday",
  title: "Campaign Performance Update",
  date: "May 26, 2026",
  metrics: [
    { label: "ROAS", value: "1.86" },
    { label: "CPA", value: "$16.52" },
    { label: "SPEND", value: "$3.7K" },
    { label: "PACING TARGET", value: "GOOD" },
    { label: "CONV.", value: "2.5%" },
    { label: "LEADS", value: "8,167" },
    { label: "FUNNEL DROPOFF", value: "PRODUCTS PAGE" },
    { label: "REVENUE", value: "$5,392" },
    { label: "TOTAL IMPRESSIONS", value: "42,376" },
  ],
  summary:
    "Day one trending positively with spend pacing on target at $3.7K and no delivery issues to flag. 42,376 impressions generated 8,167 leads at a 2.5% conversion rate, producing $5,392 in attributed revenue against $3.7K in spend — a ROAS of 1.86 on day one.",
};

export const stories = {
  heading: "Customer Stories",
  items: [
    {
      customer: "Wander",
      logo: "/sites/minerva/logo-wander.svg",
      image: img.storyWander,
      results: [
        { value: "3.4x", label: "ROAS improvement" },
        { value: "75%", label: "decrease in cost per purchase" },
        { value: "10x+", label: "total ROI" },
      ],
      headline: "How Minerva improved Wander’s ROAS by 3.4x.",
    },
  ],
};

export const numbers = {
  heading: "By the Numbers",
  items: [
    { value: "25+", label: "average hours saved per month" },
    { value: "<5", label: "average days of implementation time" },
    { value: "<30", label: "average days to value" },
  ],
};

export const security = {
  heading: "Enterprise-grade security, compliance & privacy",
  badges: ["CCPA", "SOC 2 TYPE II"],
  paragraphs: [
    "We’ve built our platform not just to comply with industry standards, but to lead them.",
    "Every consumer record in our graph is sourced, processed and maintained in accordance with federal and state data privacy laws, including CCPA, CAN-SPAM and DNC.",
    "Our data practices are independently audited and certified against industry standards.",
  ],
  link: { label: "Our Security Report", href: "#security-report" },
};

export const finalCta = {
  heading: "The future of marketing starts with Minerva",
  demo: { label: "Book Platform Demo", href: "#demo" },
  try: { label: "Try Minerva", href: "#try" },
};

export const footer = {
  tagline: "AI for marketing leaders.",
  primary: [
    { label: "Platform", href: "#platform" },
    { label: "Customers", href: "#customers" },
    { label: "Pricing", href: "#pricing" },
    { label: "Company", href: "#company" },
    { label: "API", href: "#api" },
  ],
  secondary: [
    { label: "Privacy", href: "#privacy" },
    { label: "Opt Out", href: "#opt-out" },
    { label: "Security Report", href: "#security-report" },
    { label: "Changelog", href: "#changelog" },
    { label: "Blog", href: "#blog" },
    { label: "Careers", href: "#careers" },
  ],
  social: [
    { label: "LinkedIn", href: "https://www.linkedin.com/company/minerva" },
    { label: "X", href: "https://x.com/minerva" },
  ],
  location: "New York, NY",
  copyright: "© 2026 Minerva BI, Inc.",
};
