// Every string is transcribed verbatim from clay.com.
import { img, marks, video } from "./assets";

export const nav = {
  links: [
    { label: "Product", href: "#product" },
    { label: "Solutions", href: "#solutions" },
    { label: "Resources", href: "#resources" },
    { label: "Company", href: "#company" },
    { label: "Pricing", href: "#pricing" },
  ],
  login: { label: "Log in", href: "#login" },
  demo: { label: "Get a demo", href: "#demo" },
  cta: { label: "Start free trial", href: "#trial" },
};

// The megamenu groups, as they appear under each top-level trigger.
export const megamenu: Record<string, { group: string; items: string[] }[]> = {
  Product: [
    {
      group: "Data infrastructure",
      items: ["Audiences", "Data marketplace", "Signals and Intent", "Waterfall"],
    },
    { group: "Agents", items: ["Claygents", "Account Agents", "MCP for reps"] },
    {
      group: "Orchestration",
      items: ["Workflows", "Functions", "AI formatting"],
    },
    { group: "Execution", items: ["Ads", "Sequencer", "Clay MCP"] },
  ],
  Solutions: [
    {
      group: "Data foundations",
      items: ["CRM enrichment", "TAM sourcing", "Territory planning", "Reverse ETL"],
    },
    {
      group: "Pipeline generation",
      items: ["Outbound", "Automated inbound", "PLG assist", "ABM"],
    },
    {
      group: "Rep productivity",
      items: ["Rep prospecting", "Account research", "Rep assist"],
    },
    { group: "Department", items: ["GTM Ops", "Marketing", "Sales"] },
  ],
};

export const hero = {
  heading: "Build systems to grow revenue",
  text: "Infrastructure to get any data, run agentic workflows, and launch GTM plays.",
  primary: { label: "Start free trial", href: "#trial" },
  secondary: { label: "Get a demo", href: "#demo" },
  cli: {
    intro: "or install directly with",
    title: "Paste in your coding agent",
    copy: "Copy",
    body: "Set up the Clay plugin by following the steps in",
    link: "https://github.com/clay-run/agent-plugins",
  },
};

export const logoWall = {
  lead: "Trusted by more than 500,000 leading GTM teams of all sizes. Inspired by our",
  linkOne: "customers",
  mid: ". Built with",
  linkTwo: "love",
  end: ".",
};

// Testimonial cards interleaved into the logo wall.
export const testimonials = [
  {
    name: "Stevie Case",
    role: "Chief Revenue Officer",
    quote:
      "Clay has one of the most practical and exciting applications of AI, in a decades-old practice that needed it most.",
    portrait: null,
  },
  {
    name: "Keith Jones",
    role: "GTM Systems Lead",
    quote:
      "Clay has become the orchestration layer for everything GTM. Salesforce for record-keeping, Snowflake for storage, Clay for everything in between.",
    portrait: img.keithJones,
  },
  {
    name: "Kyle Ketchum",
    role: "Ops",
    quote:
      "Clay 3x'd our enrichment rate and unlocked AI-powered GTM workflows that were infeasible before.",
    portrait: img.kyleKetchum,
    stats: [
      { value: "+140%", label: "outbound pipeline" },
      { value: "80%+", label: "enrichment coverage" },
      { value: "All inbound", label: "qualified and scored with Clay" },
    ],
  },
  {
    name: "Adam Wall",
    role: "Head of Sales Operations",
    quote:
      "In our first AI Hackathon week, we unlocked data across YouTube, Ads, Cloud, and CapitalG into powerful GTM plays.",
    portrait: img.adamWall,
    stats: [
      { value: "2x", label: "demos from cold email" },
      { value: "3x", label: "reply rate" },
      { value: "+50%", label: "SQLs" },
    ],
  },
  {
    name: "David Bulmer",
    role: "Sales Ops",
    quote:
      "I love using and working with Clay because its extensive customization options allow it to seamlessly fit our motion.",
    portrait: img.davidBulmer,
  },
];

export const flow = {
  heading: "GTM engineers build on Clay",
  intro: "Reach every buyer by finding all the datapoints possible.",
  tabs: [
    {
      label: "TAM Sourcing",
      copy: "Find every account in your TAM in one place.",
      image: img.tam,
      accent: "slushie" as const,
    },
    {
      label: "Automated Inbound",
      copy: "Enrich, score, and route every lead to the right rep in minutes.",
      image: img.inbound,
      accent: "lime" as const,
    },
    {
      label: "Lead Scoring",
      copy: "Prioritize the highest-converting leads using real-time intent and engagement signals.",
      image: img.lead,
      accent: "ube" as const,
    },
    {
      label: "Automated Outbound",
      copy: "Personalize outreach with live intent signals to reach the right buyers at the right time.",
      image: img.automated,
      accent: "tangerine" as const,
    },
    {
      label: "CRM Enrichment",
      copy: "Keep CRM records accurate, complete, and continuously refreshed with live data.",
      image: img.crm,
      accent: "blueberry" as const,
    },
    {
      label: "Launch Ads",
      copy: "Turn top accounts from your CRM into precision ad campaigns on LinkedIn, Meta and Google Ads.",
      image: img.ads,
      accent: "pomegranate" as const,
    },
    {
      label: "Rep Productivity",
      copy: "Automate research, prep, and follow-ups to let reps spend time closing deals.",
      image: img.rep,
      accent: "dragonfruit" as const,
    },
  ],
};

export const inputAction = {
  heading: "What do you want to build?",
  submit: "Submit",
  prompts: [
    "Find phone numbers for controllers or accounting directors in the US or UK with 100-1,000 employees",
    "Find companies with 30+ sales reps, $10M+ in revenue, and a free trial button on their website",
    "Find companies with 3+ open roles that mention international expansion in the job descriptions",
  ],
  chips: ["Find people data", "Find company data", "Find jobs data"],
};

export const features = {
  heading: "Build, test, and scale any GTM play you can imagine.",
  items: [
    {
      tag: "Data",
      titleTop: "Get data from the most",
      titleSpan: "complete data marketplace",
      body: "One contract to buy data from 200+ data and AI vendors in Clay's marketplace. Create intent signals from any source and keep every record continuously refreshed.",
      video: video.data,
      cta: { label: "Explore data marketplace", href: "#data" },
      proof: [
        {
          logo: marks.anthropic,
          name: "Anthropic",
          text: "3x'd their enrichment rate with Clay's data marketplace.",
        },
        {
          logo: marks.intercom,
          name: "Intercom",
          text: "grew outbound pipeline 140% by continuously researching target accounts for headcount change, technographics and intent.",
        },
        {
          logo: marks.mistral,
          name: "Mistral",
          text: "AI cut the time to map their TAM and score accounts from 2 months to 10 days.",
        },
      ],
    },
    {
      tag: "agents",
      titleTop: "Create agents who",
      titleSpan: "mimic your best reps",
      body: "Mine the web for custom data points to research and qualify accounts. Constantly monitor accounts for the signals that matter to your business.",
      video: video.agents,
      cta: { label: "Explore agents", href: "#agents" },
      proof: [
        {
          logo: marks.openai,
          name: "OpenAI",
          text: "used Clay to fully automate pre-call prep by researching prospect bios, earning reports, and company news.",
        },
        {
          logo: marks.canva,
          name: "Canva",
          text: "saved 4 hrs/rep/week by automating contact sourcing to feed their agentic AI outbound motion.",
        },
        {
          logo: marks.vanta,
          name: "Vanta",
          text: "cut post-call follow-up time from 3 days to <1 with agents tailoring messaging based on SOC 2 badges.",
        },
      ],
    },
    {
      tag: "orchestration",
      titleTop: "Orchestrate workflows",
      titleSpan: "across tools in real time",
      body: "Connect every GTM or AI tool to a common data layer. Update data across millions of records in your warehouse, CRM and sales tools continuously.",
      video: video.orchestration,
      cta: { label: "Explore the GTM data layer", href: "#orchestration" },
      proof: [
        {
          logo: marks.elevenlabs,
          name: "ElevenLabs",
          text: "' increased SQLs by +50% by reducing speed-to-lead to <5 mins.",
        },
        {
          logo: marks.verkada,
          name: "Verkada",
          text: "2x'd warm lead replies by automatically analyzing email replies to route to the right nurture campaign.",
        },
        {
          logo: marks.lovable,
          name: "Lovable",
          text: "booked 50% more qualified meetings per rep by routing prospects to best-fit rep based on firmographics.",
        },
      ],
    },
    {
      tag: "execution",
      titleTop: "Launch new plays as fast",
      titleSpan: "as you have ideas",
      body: "Trigger emails, ads, and more with integrations to your existing GTM tools. Write 1:1 messaging for every prospect using enriched account context.",
      video: video.execution,
      cta: { label: "Learn more about building plays", href: "#execution" },
      proof: [
        {
          logo: marks.rippling,
          name: "Rippling",
          text: "2x'd cold email performance by automatically tailoring email copy based on persona and enriched account data.",
        },
        {
          logo: marks.legora,
          name: "Legora",
          text: "increased qualified lead volume +60% using research agents to trigger personalized campaigns to ICPs.",
        },
        {
          logo: marks.figma,
          name: "Figma",
          text: "increased PLG conversion by automatically prospecting into self-serve accounts with both usage spikes and hiring signals.",
        },
      ],
    },
    {
      tag: "GTM INFRASTRUCTURE",
      titleTop: "Build systems that make",
      titleSpan: "reps more productive",
      body: "Reps can self-serve the best prospecting data. Chat to get full account context in natural language. Automate the busywork so reps can spend time selling.",
      video: video.reps,
      cta: { label: "Learn more", href: "#reps" },
      proof: [
        {
          logo: marks.pendo,
          name: "Pendo",
          text: "reps hit 200% of quota using agents for account research, tailored messaging and pre-call prep.",
        },
        {
          logo: marks.hex,
          name: "Hex",
          text: "sales reps got a +50% lift in their close-rate by contacting qualified leads the same-day they show intent.",
        },
        {
          logo: marks.terrapinn,
          name: "Terrapinn",
          text: "generates +19% more revenue per rep and reduced acquisition cost by 90% using Claygent to find and qualify leads.",
        },
      ],
    },
  ],
};

export const customers = {
  heading: "Hear from the teams that grow with Clay",
  stories: [
    {
      title: "How Hex increased inbound win-rate 50% using Clay",
      cta: "Read case study",
      logo: marks.hex,
    },
    {
      title:
        "How Verkada GTM team expanded in 28 European countries using Clay",
      cta: "Read case study",
      logo: marks.verkada,
    },
  ],
};

export const updates = {
  heading: "Learn more about GTM engineering",
  conference: {
    eyebrow: "Conference",
    title: "Sculpt: The go-to-market conference returns in 2026",
    cta: { label: "Get tickets", href: "#sculpt" },
  },
  university: {
    title: "Get started with Clay",
    body: "Find the content that helps you level up your GTM skills and build confidently with Clay.",
    cta: { label: "Go to University", href: "#university" },
  },
};

export const footer = {
  cta: {
    heading: "Turn your growth ideas into reality today",
    body: "Start for free today. No credit card required.",
    primary: { label: "Start free trial", href: "#trial" },
    secondary: { label: "Get a demo", href: "#demo" },
  },
  columns: [
    {
      group: "Use cases",
      items: [
        "Automated inbound",
        "Account research",
        "ABM",
        "PLG assist",
        "Rep assist",
        "Reverse ETL",
        "Outbound",
        "CRM Enrichment",
        "TAM Sourcing",
      ],
    },
    {
      group: "Customers",
      items: [
        "OpenAI",
        "Vanta",
        "Verkada",
        "Sendoso",
        "Anthropic",
        "Coverflex",
        "Rippling",
        "Mistral AI",
        "Case studies",
      ],
    },
    {
      group: "Product",
      items: [
        "Sequencer",
        "Multi-provider data enrichment",
        "Audiences",
        "Signals",
        "Workflows",
        "Functions",
        "Integrations",
        "Pricing",
        "Changelog",
      ],
    },
    {
      group: "Blog",
      items: [
        "The rise of the GTM engineer",
        "Finding GTM alpha",
        "Clay reaches 100M ARR",
        "Series C: The GTM engineering era begins now",
      ],
    },
    {
      group: "Resources",
      items: [
        "Get started lesson",
        "University",
        "Use case templates",
        "Partner programs",
        "Community",
        "FAQ",
      ],
    },
    {
      group: "Company",
      items: [
        "Contact us",
        "About",
        "Careers",
        "Jobs",
        "Integrate with Clay",
        "Status",
      ],
    },
    {
      group: "Legal",
      items: ["Privacy policy", "Terms of service", "Do not sell my data"],
    },
  ],
  copyright: "© 2026 Clay Labs Inc.",
  credit: "Born in Brooklyn • Art by",
  creditLink: "Hudson",
  social: [
    { label: "Visit Clay on LinkedIn", short: "LinkedIn" },
    { label: "Visit Clay on YouTube", short: "YouTube" },
    { label: "Visit Clay on Slack", short: "Slack" },
  ],
};
