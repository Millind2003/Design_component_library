// Structure and labels transcribed from pallet.com for layout fidelity.
const A = "/sites/pallet";

export const nav = {
  links: ["Product", "Solutions", "Customers", "Company"],
  cta: { label: "Book a demo", href: "#demo" },
};

export const hero = {
  heading: "AI systems that move the physical economy",
  body: "The world's most advanced supply chain and logistics teams run their operations on Pallet.",
  cta: { label: "Book a demo", href: "#demo" },
  // The hero cycles through four scenes; each is a looping clip with its own
  // feed of chat bubbles animating in over it.
  scenes: [
    { key: "airline", video: `${A}/next-home-hero-airline-manufacture.mp4` },
    { key: "trucking", video: `${A}/next-home-hero-trucking.mp4` },
    { key: "warehousing", video: `${A}/next-home-hero-warehousing.mp4` },
    { key: "retail", video: `${A}/next-home-hero-retail.mp4` },
  ],
  feed: [
    {
      kind: "message" as const,
      sender: "Jonathan",
      avatar: `${A}/jonathan.png`,
      title: "Urgent: Aircraft grounded — replacement part needed onsite",
      body: "Our line is down until the gearbox arrives. Can you locate one and get it shipped?",
    },
    {
      kind: "actions" as const,
      title: "Actions",
      items: ["Checking WMS", "Posting material issue", "Fulfilling order"],
    },
    {
      kind: "message" as const,
      sender: "Pallet Agent",
      agent: true,
      title: "RE: Replacement part 2 days out",
      body: "We found one. It's in stock and can be on your floor in two days.",
    },
    {
      kind: "message" as const,
      sender: "Pallet Agent",
      agent: true,
      title: "RE: Your part is on the way",
      body: "It's shipped. Here's your tracking and confirmed arrival time.",
    },
  ],
};

export const logoRail = [
  { name: "Knight", src: `${A}/cdn-360x138-a029b6.png` },
  { name: "Lineage", src: `${A}/cdn-522x132-d466f4.png` },
  { name: "Penske", src: `${A}/cdn-288x108-dcbfd8.png` },
  { name: "STG", src: `${A}/cdn-522x132-56e849.png` },
  { name: "Rinchem", src: `${A}/cdn-795x531-47280c.png` },
  { name: "Swift", src: `${A}/cdn-1280x416-bcb593.png` },
  { name: "US Pack", src: `${A}/cdn-1644x427-fa770c.png` },
  { name: "GXO", src: `${A}/cdn-266x104-c8d1e1.png` },
  { name: "Mallory", src: `${A}/cdn-360x138-8866c2.png` },
  { name: "Estée Lauder", src: `${A}/cdn-672x403-0055a8.png` },
];

export const cases = {
  heading: "Success stories",
  readLabel: "Read story",
  items: [
    {
      company: "LINEAGE LOGISTICS",
      headline:
        "Automated 2 million tasks at over 99% accuracy across warehousing, freight forwarding and transportation",
      image: `${A}/cdn-1317x1056-b2449b.webp`,
    },
    {
      company: "MALLORY ALEXANDER",
      headline:
        "Tripled shipments per operator while maintaining full accuracy on custom documentation",
      image: `${A}/cdn-1317x1056-e4041f.webp`,
    },
    {
      company: "STG LOGISTICS",
      headline:
        "Generated 60% time savings for their operations team by automating order entry",
      image: `${A}/cdn-1317x1056-88ef9d.jpg`,
    },
    {
      company: "PRISM LOGISTIX",
      headline:
        "Improved operating margins by 10% while delivering personalized service across 400 customers",
      image: `${A}/cdn-1317x1056-cfe99e.jpg`,
    },
  ],
};

export const products = {
  eyebrow: "Full-stack enterprise AI",
  heading: "Control and own your entire AI stack",
  learnMore: "Learn more",
  hint: "Scroll to discover",
  // Five products, each a skewed card in the fanned deck. Scrolling through the
  // section's runway selects which one is active.
  items: [
    {
      name: "Agents",
      body: "Run seamless supply chain operations",
      art: `${A}/cdn-822x1026-d3824e.jpg`,
      icon: `${A}/cdn-40x40-c62275.svg`,
    },
    {
      name: "Atlas",
      body: "Answer any question about your business",
      art: `${A}/cdn-274x342-4063f5.jpg`,
      icon: `${A}/cdn-40x40-78694a.svg`,
    },
    {
      name: "Forge",
      body: "Agent-builder to help you go live in 6 weeks",
      art: `${A}/cdn-822x1026-400001.jpg`,
      icon: `${A}/cdn-40x40-6b8d3b.svg`,
    },
    {
      name: "Memory",
      body: "Capture every SOP and tribal knowledge",
      art: `${A}/cdn-822x1026-b4d693.jpg`,
      icon: `${A}/cdn-40x40-11a312.svg`,
    },
    {
      name: "Intelligence",
      body: "Custom models for better accuracy and higher ROI",
      art: `${A}/cdn-822x1026-7eb548.jpg`,
      icon: `${A}/cdn-40x40-2f66b4.svg`,
    },
  ],
};

export const insights = {
  heading: "Turn intelligence into ROI in record time",
  cards: [
    {
      title: "Operational fluency",
      body: "Agents that read your systems and act on them the way your team would.",
    },
    {
      title: "Time to value",
      body: "Deployments measured in weeks, not the quarters enterprise software usually takes.",
    },
    {
      title: "Precision",
      body: "Every action is checked against the source of truth before it is committed.",
    },
    {
      title: "Compounding ROI",
      body: "Each workflow you encode makes the next one faster to stand up.",
    },
  ],
};

export const features = {
  heading: "Built for the way supply chain teams work",
  items: [
    {
      no: "01",
      title: "Run any workflow from quote to cash",
      body: "Quotes, bookings, tracking updates and invoicing — handled end to end across the systems you already run.",
      video: `${A}/run-any-workflow-from-quote-to-cash.mp4`,
    },
    {
      no: "02",
      title: "Ask your operation anything",
      body: "Every shipment, document and exception becomes queryable in plain language.",
      video: `${A}/ask-your-operation-anything.mp4`,
    },
    {
      no: "03",
      title: "The fastest time to value in the industry",
      body: "Connect your systems and see agents running real work in weeks.",
      video: `${A}/fastest-time-to-value.mp4`,
    },
    {
      no: "04",
      title: "Encode your institutional knowledge",
      body: "The rules your best operators carry in their heads become something the system can apply.",
      video: `${A}/encode-your-institutional-knowledge.mp4`,
    },
  ],
};

export const security = {
  heading: "Your data stays yours and never shared",
  items: [
    {
      title: "GDPR",
      body: "Processed in line with EU data protection requirements.",
    },
    {
      title: "SOC 2 Type II",
      body: "Independently audited controls across security and availability.",
    },
    {
      title: "CCPA",
      body: "Handled to California consumer privacy standards.",
    },
  ],
};

export const cta = {
  heading: "Put AI to work",
  body: "See how the most advanced supply chain teams deploy agents on Pallet.",
  action: { label: "Book a demo", href: "#demo" },
};

export const footer = {
  columns: [
    { group: "Product", items: ["Platform", "Agents", "Workflows", "Integrations", "Security"] },
    { group: "Solutions", items: ["Freight forwarding", "Warehousing", "Transportation", "Brokerage", "3PL"] },
    { group: "Company", items: ["About", "Careers", "Customers", "Press", "Contact"] },
    { group: "Resources", items: ["Blog", "Guides", "Docs", "Changelog", "Status"] },
  ],
  newsletter: { label: "Sign up to our newsletter", placeholder: "Email address" },
  copyright: "© Pallet 2026",
  legal: ["Terms of Service", "Privacy Policy"],
};
