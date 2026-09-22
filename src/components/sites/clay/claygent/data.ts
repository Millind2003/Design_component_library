// Copy and asset paths lifted from clay.com/claygent.
import type {
  ClaygentFaq,
  ClaygentFeature,
  ClaygentQuote,
  ClaygentStep,
} from "./types";

const B = "/sites/clay";

export const hero = {
  heading: "Build agents for any GTM task",
  body: "Run GTM agents that reason over your data, and see exactly why they do what they do.",
  icon: `${B}/claygent-form-icon.png`,
  /** The Sculptor prompt box under the headline. */
  placeholder:
    "Build a list of marketers based in Arizona. Include company, role, and LinkedIn profile for each contact.",
  submit: "Try our agents",
  action: "https://app.clay.com/workspaces/~/claygents/new",
  /** Cycled through the textarea placeholder on the live site. */
  prompts: [
    "Find the best contact at this company based on past roles and content they've published",
    "Write a personalized email copy based on recent news and job postings from this company's website",
    "Rank this lead 1-10 based on employee count, industry, tech stack, and recent growth signals",
  ],
  image: `${B}/claygent-hero.webp`,
  imageAlt:
    "Table showing company names, AI-generated account research briefs, and tasks like Google search and pain point generation.",
  imageMobile: `${B}/claygent-hero-mobile.webp`,
  imageMobileAlt:
    "Diagram showing agent prompt, data inputs, reasoning steps, and account research results table for SaaS companies.",
};

export const intro = {
  heading: "Agents built on your entire GTM context",
  body: "Research accounts, iterate on prompts in real time, and monitor your book of business — with full visibility into every agent's decision.",
};

export const features: ClaygentFeature[] = [
  {
    eyebrow: "Research Bespoke Data",
    heading: "Find unique data no provider has",
    body: [
      "Point Claygent at any manual GTM task like company research, lead qualification, signal detection. Get back structured data for custom plays, whether it’s niche company attributes, buying triggers, org changes, or contact info.",
    ],
    cta: { label: "Get started with Claygent", href: "https://app.clay.com/signup" },
    image: `${B}/claygent-feature-1.webp`,
    alt: "A Claygent prompt building a trust-centre research agent, with its results table.",
    reversed: false,
  },
  {
    eyebrow: "Iterate Quickly",
    heading: "Test and iterate on prompts",
    body: [
      "Describe what you want in natural language, test against real data, and roll back instantly if needed. Changes you make to the prompt update everywhere that the agent runs.",
    ],
    cta: {
      label: "Iterate in Claygent Builder",
      href: "https://app.clay.com/workspaces/~/claygents",
    },
    image: `${B}/claygent-feature-2.webp`,
    alt: "The Claygent Builder comparing prompt versions against test rows.",
    reversed: true,
  },
  {
    eyebrow: "Full Visibility",
    heading: "Glass box, not black box",
    body: [
      "Every agent decision in Clay comes with a full reasoning trace. For agents run over Audiences, get a full view of your spend and errors per agent and per segment across every account in your book.",
    ],
    cta: {
      label: "Agent observability in Audiences",
      href: "https://app.clay.com/workspaces/~/companies/data-hub/claygents",
    },
    image: `${B}/claygent-feature-3.webp`,
    alt: "A list of running agents with their status, segment and credit spend.",
    reversed: false,
  },
  {
    eyebrow: "Always-On Agents",
    heading: "Up-to-date account intelligence for your book of business",
    body: [
      "Synthesize new information from your CRM, data warehouse, Gong calls, and other signals via Account Research Agents, available in Audiences.",
      "Each agent comes pre-loaded with GTM context and remembers what it's learned, so you can target the right accounts and improve outbound plays.",
    ],
    cta: {
      label: "Try out Account Research Agents",
      href: "https://app.clay.com/workspaces/~/companies/",
    },
    image: `${B}/claygent-feature-4.webp`,
    alt: "An account card showing agent-written research notes and primary competitors.",
    reversed: true,
  },
];

export const runs = {
  label: "Claygent runs and counting",
  /** The live site tickers up from this; we render the number it lands on. */
  count: 5_060_235_046,
  star: `${B}/star-8.svg`,
  video: `${B}/claygent-look-up.webm`,
};

export const steps = {
  heading: "How to create your first agent in Clay",
  body: "Create custom agents by describing your task, connecting tools, and deploying to any table.",
  items: [
    {
      title: "Build your prompt",
      body: "Describe what your agent should do in plain language – and Sculptor will help build your prompt.",
    },
    {
      title: "Connect tools",
      body: "Connect your agent access to tools, which can give it the ability to do web research, read documents, and get business context.",
    },
    {
      title: "Test and iterate",
      body: "Iterate on your prompts by generating test data or importing rows from an existing table or Audience – and compare outputs across versions.",
    },
    {
      title: "Deploy and manage",
      body: "Deploy your agent by adding it to any table or Audience and centrally managing changes across all deployments via Claygent Builder.",
    },
  ] satisfies ClaygentStep[],
};

export const quotes = {
  heading: "What our customers say about us",
  items: [
    {
      stat: "100%",
      eyebrow: "of manual enrichment eliminated",
      quote:
        "“Clay auto-enriches contacts with accurate addresses for our gifting program, saving half the time of our growth team.”",
      image: `${B}/verkada-wide.webp`,
      href: "/customers/verkada",
    },
    {
      stat: "55%",
      eyebrow: "new product-line revenue sourced",
      quote:
        "“Clay-built lists helped identify over 55% of revenue sold with Agent Analytics (our new product) in its first quarter, driving two-thirds of its pipeline”",
      image: `${B}/pendo-banner.webp`,
      href: "/customers/pendo",
    },
    {
      stat: "25k+",
      eyebrow: "accounts sourced in 2 weeks",
      quote:
        "“This market research analysis would have taken my team 3 months without Clay. It was enlightening to see how speedy you could get to a V1 answer.”",
      image: `${B}/mistralai-banner.webp`,
      href: "/customers/mistral-ai",
    },
  ] satisfies ClaygentQuote[],
};

export const faqs = {
  heading: "FAQs about agents in Clay",
  items: [
    {
      question: "What is a Claygent?",
      answer: [
        {
          kind: "p",
          runs: [
            {
              text: "Claygents are agents in Clay that perform tasks on your behalf. They take inputs, follow your instructions, and write a structured output.",
            },
          ],
        },
        {
          kind: "p",
          runs: [
            { text: "When you build a Claygent, you choose the type that fits the job. This includes:" },
          ],
        },
        {
          kind: "ul",
          items: [
            [{ text: "General purpose Claygents that run in Tables and Workflows" }],
            [
              {
                text: "Account Agents that run in Audiences and Workflows across every account in a segment",
              },
            ],
          ],
        },
      ],
    },
    {
      question: "How do I know which Claygent to use?",
      answer: [
        {
          kind: "p",
          runs: [
            {
              text: "Here’s some quick rules of thumb of when to use a general-purpose Claygent vs. an Account Agent:",
            },
          ],
        },
        {
          kind: "table",
          head: [
            "",
            "General-purpose Claygent (in Tables or Workflows)",
            "Account Agent (in Audiences or Workflows)",
          ],
          rows: [
            ["Runs on", "A single row/cell", "Every account in a segment"],
            [
              "Writes to CRM / data warehouse",
              "Manually configured",
              "Automatic (human-approved)",
            ],
            [
              "Update cadence",
              "On-demand or scheduled, fixed entries",
              "Based on segment, dynamic updates",
            ],
            [
              "Data sources",
              "You configure per field",
              "Defaults to all data in Audiences (eg, CRM, Gong, email, DWH)",
            ],
            ["Memory", "Stateless, one-shot", "Persistent, tracks what changed"],
            [
              "Best for",
              "Lookups that don't require account context (e.g. a LinkedIn URL, an industry tag)",
              "Ongoing account intelligence at scale (e.g. PQA expansion, AI outbound, closed-lost analysis)",
            ],
          ],
        },
      ],
    },
    {
      question: "Why would I use Account Agents?",
      answer: [
        {
          kind: "p",
          runs: [
            { text: "Account Agents run over Audiences in Clay and have the added benefit of:" },
          ],
        },
        {
          kind: "ul",
          items: [
            [
              { text: "Unlocking high-volume plays", bold: true },
              {
                text: ": No cell size or row limits in Audiences. Context, scheduling, and enrichment come pre-configured, so you can run plays like outbound expansion or closed-lost analysis without rebuilding a pipeline for every new question.",
              },
            ],
            [
              { text: "Improving with every run:", bold: true },
              {
                text: " Claygents in tables start fresh every run. Account Agents’ context lives in Audiences, so intelligence builds account by account instead of resetting each pull.",
              },
            ],
            [
              { text: "Governing your agents", bold: true },
              {
                text: ". Audiences gives you one place to see and control your agent activity, including viewing agent runs, errors, and spend over time",
              },
            ],
          ],
        },
        {
          kind: "p",
          runs: [
            {
              text: "Many Clay customers use both Account Agents to improve their GTM plays with account context and general-purpose Claygents to perform web research tasks.",
            },
          ],
        },
      ],
    },
    {
      question: "What are the main use cases for Claygent?",
      answer: [
        {
          kind: "p",
          runs: [
            {
              text: "Agents in Clay can be used flexibly for many GTM use cases - ones we frequently see from customers building in tables include:",
            },
          ],
        },
        {
          kind: "ul",
          items: [
            [
              { text: "Account research & meeting prep", bold: true },
              { text: " so you go into calls with the right context on your prospects/customers" },
            ],
            [
              { text: "Discovery & finding bespoke data", bold: true },
              { text: " in the form of web research, niche signals, proprietary data points" },
            ],
            [
              { text: "Personalized outbound", bold: true },
              { text: " to run campaigns at scale" },
            ],
            [
              { text: "Scoring & qualification", bold: true },
              { text: " on large prospect lists based on criteria unique to your business" },
            ],
          ],
        },
        {
          kind: "p",
          runs: [
            { text: "For plays that you need to run at scale, try using an " },
            {
              text: "Account Agent",
              href: "https://university.clay.com/docs/account-research-agents",
            },
            { text: " over Audiences instead." },
          ],
        },
      ],
    },
    {
      question: "When do I use Claygent vs. “Use AI” in a table?",
      answer: [
        {
          kind: "p",
          runs: [
            {
              text: "“Use AI” is for offline tasks like content generation. This could include tasks like copywriting, tone-matching, and categorizing existing data.",
            },
          ],
        },
        {
          kind: "p",
          runs: [
            {
              text: "Meanwhile, Claygent has access to a range of tools that allow you to do more “last-mile” research. For example, web access allows your Claygent to do more real-time research. This could include tasks like analyzing competitor homepages or extract deeper firmographic context.",
            },
          ],
        },
      ],
    },
    {
      question: "How much do agents in Clay cost?",
      answer: [
        {
          kind: "p",
          runs: [
            {
              text: "Claygents in tables are available in all plan tiers. Account Agents (in beta) are available for Enterprise, Growth, and Launch plans only.",
            },
          ],
        },
        {
          kind: "p",
          runs: [
            {
              text: "For all agents in Clay, customers are charged on the actual complexity and token usage of their requests. There are two components to the pricing:",
            },
          ],
        },
        {
          kind: "ul",
          items: [
            [
              { text: "Data credits:", bold: true },
              {
                text: " Variable pricing for advanced reasoning models; fixed pricing for Clay’s own models and standard content generation. (",
              },
              {
                text: "See our model pricing reference",
                href: "https://university.clay.com/docs/ai-pricing#select-model-pricing-reference",
              },
              { text: ")" },
            ],
            [
              { text: "Action:", bold: true },
              { text: " 1 action per AI prompt" },
            ],
          ],
        },
        {
          kind: "p",
          runs: [
            {
              text: "For Account Agents, data credits are variable pricing only and 1 action is charged per record processed by the agent. Exports to the CRM or data warehouse have no additional charge.",
            },
          ],
        },
      ],
    },
  ] satisfies ClaygentFaq[],
};
