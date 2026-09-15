// Local paths to downloaded clay.com assets (public/sites/clay/).
// Names are the Webflow asset names with their content-hash prefixes stripped.
const B = "/sites/clay";

export const img = {
  logo: `${B}/clay-primary-logo.png`,
  icon: `${B}/clay-icon.png`,

  // the three coding-agent marks beside "or install directly with"
  cliAgents: [
    `${B}/frame-2147261726.svg`,
    `${B}/frame-2147261727.svg`,
    `${B}/frame-2147261728.svg`,
  ] as const,

  // "GTM engineers build on Clay" tab screenshots
  tam: `${B}/clay-tam.png`,
  inbound: `${B}/clay-inbound.png`,
  lead: `${B}/clay-lead.png`,
  automated: `${B}/clay-automated.png`,
  crm: `${B}/clay-crm.png`,
  ads: `${B}/clay-ads.png`,
  rep: `${B}/clay-rep.png`,

  // testimonial portraits
  keithJones: `${B}/keith-jones.png`,
  kyleKetchum: `${B}/kyle-ketchum.png`,
  adamWall: `${B}/adam-wall.webp`,
  davidBulmer: `${B}/david-bulmer.png`,
} as const;

export const video = {
  hero: `${B}/hero-06-02-lossy-0001-0240.mp4`,
  footer: `${B}/footer-05-29-lossy-0001-0060.mp4`,
  data: `${B}/data-06-16-1000px.webm`,
  agents: `${B}/agents-06-16-1000px.webm`,
  orchestration: `${B}/orch-06-16-1000px.webm`,
  execution: `${B}/execution-06-16-1000px.webm`,
  reps: `${B}/reps-06-16-1500px.webm`,
} as const;

/** Square company marks used in the feature call-outs. */
export const marks = {
  anthropic: `${B}/anthropic-mark.svg`,
  intercom: `${B}/intercom-mark.svg`,
  mistral: `${B}/mistralai.svg`,
  openai: `${B}/openai-mark.svg`,
  canva: `${B}/canva-mark.svg`,
  vanta: `${B}/vanta-mark.svg`,
  elevenlabs: `${B}/elevenlabs-mark.svg`,
  verkada: `${B}/verkada.svg`,
  lovable: `${B}/lovable-mark.svg`,
  rippling: `${B}/rippling-mark.svg`,
  legora: `${B}/legora-mark.svg`,
  figma: `${B}/figma-mark.svg`,
  pendo: `${B}/pendo-mark.svg`,
  hex: `${B}/hex-mark.svg`,
  terrapinn: `${B}/terrappin-mark.svg`,
} as const;

/** Wordmarks for the "trusted by" wall. */
export const logos = [
  { name: "OpenAI", src: `${B}/openai.svg` },
  { name: "Anthropic", src: `${B}/anthropic.svg` },
  { name: "Stripe", src: `${B}/stripe.svg` },
  { name: "Cursor", src: `${B}/cursor.svg` },
  { name: "Canva", src: `${B}/canva.svg` },
  { name: "Figma", src: `${B}/figma.svg` },
  { name: "Notion", src: `${B}/notion.svg` },
  { name: "Vanta", src: `${B}/vanta.svg` },
  { name: "HubSpot", src: `${B}/hubspot.svg` },
  { name: "Workday", src: `${B}/workday.svg` },
  { name: "Verkada", src: `${B}/verkada.svg` },
  { name: "Ramp", src: `${B}/ramp.svg` },
  { name: "Uber", src: `${B}/uber.svg` },
  { name: "Google", src: `${B}/google.svg` },
  { name: "Okta", src: `${B}/okta.svg` },
  { name: "Perplexity", src: `${B}/perplexity.svg` },
  { name: "Mistral AI", src: `${B}/mistralai.svg` },
  { name: "Intercom", src: `${B}/intercom.svg` },
  { name: "Rippling", src: `${B}/rippling.svg` },
  { name: "ElevenLabs", src: `${B}/elevenlabs.svg` },
  { name: "eBay", src: `${B}/ebay_logo.svg` },
  { name: "UPS", src: `${B}/ups-logo.svg` },
] as const;
