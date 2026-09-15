// Every string is transcribed verbatim from planhat.com.
const L = "/sites/planhat/logos";

export const nav = {
  links: [
    { label: "Solutions", dropdown: true },
    { label: "Platform", dropdown: true },
    { label: "Customers", dropdown: true },
    { label: "Explore", dropdown: true },
    { label: "Pricing", dropdown: false },
  ],
  login: { label: "Log in", href: "#login" },
  cta: { label: "Request a Demo", href: "#demo" },
};

export const hero = {
  eyebrow: "The Agentic Customer Platform",
  heading: "Agents that deliver customer outcomes",
  body: "Commercial teams at B2B enterprises use Planhat to automate work across the customer lifecycle, turning better outcomes into lasting revenue growth.",
  cta: { label: "Request a Demo", href: "#demo" },
};

export const logos = {
  lead: "Trusted by leading companies worldwide",
  discover: "Discover our impact",
  items: [
    { name: "Wiz", src: `${L}/wiz.svg` },
    { name: "Nasdaq", src: `${L}/nasdaq.svg` },
    { name: "Dropbox", src: `${L}/dropbox.svg` },
    // Cision is the one mark the site renders as plain type rather than a mask.
    { name: "Cision", src: null },
    { name: "Telefónica", src: `${L}/telefonica.svg` },
    { name: "S&P Global", src: `${L}/sp-global.svg` },
    { name: "Nutanix", src: `${L}/nutanix.svg` },
    { name: "Trustpilot", src: `${L}/trustpilot.svg` },
    { name: "Anthology", src: `${L}/anthology.svg` },
    { name: "Telia Cygate", src: `${L}/telia-cygate.svg` },
    { name: "Arthrex", src: `${L}/arthrex.svg` },
    { name: "Starship", src: `${L}/starship.svg` },
  ],
};

export const automate = {
  heading: "Automate commercial processes across your teams",
  body: "Planhat is the open platform where agents and people work as one to drive revenue growth across the entire customer lifecycle.",
  cards: [
    {
      title: "Assemble your GTM under one roof",
      body: "Arm your go-to-market agents, teams and tools with rich context that turns post-sale truth into pre-sale intelligence.",
      video: "/sites/planhat/automate-1.webm",
    },
    {
      title: "Deploy agents with confidence",
      body: "Delegate processes to governed agents which execute with greater speed and precision than humanly possible.",
      video: "/sites/planhat/automate-2.webm",
    },
    {
      title: "Stay in-the-loop",
      body: "Give your team the capability to leverage, supervise and enhance agentic outputs at scale.",
      video: "/sites/planhat/automate-3.webm",
    },
  ],
};

export const awards = {
  eyebrow: "The leading customer platform",
  heading: "The next generation has arrived",
  body: "Planhat is recognized by both industry analysts and customers as a global leader in deploying AI-led customer platforms.",
  items: [
    {
      source: "IDC",
      title: "MarketScape for Worldwide Customer Success Applications",
    },
    {
      source: "Gartner",
      title: "Magic Quadrant™ for Customer Success Management Platforms",
    },
  ],
};

export const platform = {
  eyebrow: "Platform",
  heading: "Deploy with confidence",
  body: "Planhat is architected to equip agents and humans with everything they need to execute with clarity and control.",
  // clockwise from the top, as they sit on the live ring
  layers: ["Context", "Input", "Agents", "Execution", "Collaboration", "Training"],
  note: "Planhat constructs a comprehensive living model of your customers and commercial operations spanning every team and system.",
};

export const applications = {
  eyebrow: "Applications",
  heading: "One platform, built to power your reality",
  body: "Deploy Planhat as a CSP, CRM, PSA or a powerful all-in one configured to put artificial and human intelligence to work across the full lifecycle.",
  tabs: [
    { label: "Customer Success", image: "/sites/planhat/app-customer-success.jpg" },
    { label: "Sales & GTM", image: "/sites/planhat/app-sales.jpg" },
    { label: "Professional Services", image: "/sites/planhat/app-services.jpg" },
    { label: "Custom build", image: "/sites/planhat/app-custom.jpg" },
  ],
  features: [
    {
      title: "Dynamically score health",
      body: "Use analytics along with input from humans and AI to deploy adaptable scoring that gauges whether customers are truly thriving or failing.",
    },
    {
      title: "Capture every touchpoint",
      body: "Planhat automatically gathers transcripts, emails, tickets and every other interaction—allowing you to focus on execution, not admin.",
    },
    {
      title: "Sync seamlessly with Sales",
      body: "Use Planhat together with all major CRMs to ensure you get the full picture and move in sync with your entire organization.",
    },
  ],
};

export const outcomes = {
  eyebrow: "Services",
  headingA: "Don't buy hypotheticals.",
  headingB: "Buy outcomes.",
  body: "Planhat dispatches forward-deployed teams that work shoulder-to-shoulder with you to deliver real-world outcomes.",
  metrics: [
    { value: "34", unit: "%", label: "More customers per CSM", group: "Operational efficiency" },
    { value: "300", unit: "+", label: "Hours saved annually per person", group: "Operational efficiency" },
    { value: "900", unit: "", label: "Seat expansion", group: "Revenue impact" },
    { value: "21", unit: "%", label: "Less Churn", group: "Revenue impact" },
  ],
  groups: ["Operational efficiency", "Revenue impact"],
  cards: [
    {
      eyebrow: "Forward-deployed teams",
      title: "AI Deployment Program",
      body: "Real-world commercial outcomes delivered at unprecedented speeds.",
    },
    {
      eyebrow: "Process Automation",
      title: "Value Framework",
      body: "A system of processes architected to deliver commercial outcomes.",
    },
  ],
};

export const industries = {
  eyebrow: "Planhat for",
  heading: "Service-Intensive Software",
  body: "Continuously unlock the value your customers need. Planhat is a system of action that empowers you to define and track customer objectives, identify value opportunities, and run collaborative cross-functional processes.",
  tags: [
    "Security",
    "IT Services",
    "Healthcare & Life Sciences",
    "Connected Businesses",
    "Business Services",
  ],
};

export const story = {
  quote:
    "We have grown from an install base of 40 clients to just north of 280 clients that are managed digitally.",
  name: "William Pinho",
  role: "Director of Digital Customer Success Strategy",
  metric: { value: "7", unit: "x", label: "Install Base in Year 1" },
  poster: "/sites/planhat/story-poster.webp",
};

export const quotes = [
  {
    text: "A perfect fit for our company and how we want to support our clients",
    name: "Casey",
    role: "VP Strategic Initiatives",
  },
  {
    text: "Amazing CSP for agile teams",
    name: "Mélanie",
    role: "Global Customer Success Director",
  },
  {
    text: "Unlocked levels of data visibility and automation I didn't think were possible in our environment.",
    name: "Japhet",
    role: "Senior Director of Customer Success Automation",
  },
  {
    text: "Great system for customer service",
    name: "Luciano",
    role: "Director of Customer Success",
  },
  {
    text: "Great tool for getting a 360 view of accounts in one place and making them actionable",
    name: "Petrina",
    role: "Director of Customer Success Operations",
  },
  {
    text: "Success for your success team",
    name: "Brenda",
    role: "Customer Success",
  },
];

export const cards = [
  {
    eyebrow: "Careers",
    title: "Join the Mission",
    body: "Planhat is hiring for 100+ high-impact roles in 2026.",
  },
  {
    eyebrow: "MCP Server",
    title: "Planhat + Anthropic",
    body: "Harness Planhat's full capabilities in natural language with Claude Code.",
  },
];

export const cta = {
  eyebrow: "Solve your commercial challenges",
  heading: "Speak to a Deployment Specialist",
  body: "Book a call to learn how Planhat can automate and augment your commercial operations.",
  action: { label: "Request a Demo", href: "#demo" },
};

export const event = {
  title: "Frontier",
  subtitle: "winning post sales in the agentic era",
  date: "november 10",
  place: "london",
  cta: { label: "Get tickets", href: "#tickets" },
};

export const footer = {
  columns: [
    {
      group: "Planhat",
      items: ["About", "Press", "Contact", "Legal", "Careers"],
    },
    {
      group: "Capabilities",
      items: ["Data", "Intelligence", "Action", "Governance", "Integrations"],
    },
    {
      group: "Features",
      items: [
        "Sales CRM Software",
        "Customer Success Platform",
        "Professional Services Software",
        "Customer Success RFP Template",
        "AI Deployment",
        "Cisco 360",
      ],
    },
    {
      group: "Resources",
      items: ["Editorial", "Events", "Partners", "Help Center", "Developers"],
    },
    {
      group: "Guides",
      items: [
        "Services Automation",
        "Project Profitability",
        "Time Tracking & Timesheets",
        "Resource Management",
        "Project Management",
        "B2B CRM",
        "Agentic Sales CRM",
      ],
    },
    {
      group: "Our Impact",
      items: [
        "Planhat for Enterprise",
        "Planhat for Scale Ups",
        "Planhat for Start Ups",
        "Planhat for SaaS",
        "Planhat for IT",
        "Planhat for Security",
      ],
    },
  ],
  reviews: { lead: "Recognized as a world-leader by", count: "950+ reviews" },
  security:
    "Planhat is built to keep your data safe. We put privacy and security front and centre, so you don't have to worry.",
  newsletter: {
    label: "Subscribe to our newsletter",
    consent: "I agree to Planhat processing my personal data in accordance with Planhat's",
    policy: "Privacy Policy",
  },
  wordmark: "Know them. Grow them.",
  copyright: "© 2026 Planhat inc.",
  legal: ["Status", "Terms of Service", "Cookie Policy", "Brand Guidelines"],
  follow: "Follow us",
};
