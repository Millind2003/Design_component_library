// Local paths to downloaded minerva.io assets (public/sites/minerva/).
// Names come from the alt text on the live site; the originals are content
// hashed by Next.js and served from either _next/static/media or Sanity's CDN.
const B = "/sites/minerva";

export const img = {
  // agent-section product shots
  analysis: `${B}/analysis.webp`,
  campaign: `${B}/campaign.webp`,
  measurement: `${B}/measurement.png`,

  // hero / segment explorer
  hotel: `${B}/hotel.webp`,
  basketball: `${B}/basketball.webp`,
  map: `${B}/map.png`,

  // "Context is all you need" tab visuals
  contextEnrichment: `${B}/context-enrichment.webp`,
  contextStandardization: `${B}/context-standardization.webp`,
  contextCapabilities: `${B}/context-capabilities.webp`,

  // backgrounds
  background: `${B}/background.webp`,
  backgroundAlt: `${B}/background-alt.webp`,
  bluePainting: `${B}/background-blue-painting.webp`,
  painting: `${B}/painting.png`,

  // customer stories / editorial
  storyWander: `${B}/story-wander.webp`,
  story2: `${B}/story-2.webp`,
  story3: `${B}/story-3.webp`,
  editorial1: `${B}/editorial-1.webp`,
  editorial2: `${B}/editorial-2.webp`,
  editorial3: `${B}/editorial-3.webp`,

  // security
  soc2: `${B}/soc2.png`,

  // seo
  social: `${B}/social.webp`,
} as const;

// Activation channels shown in the hero's "Campaign Analysis" panel.
export const channels = [
  { name: "Google Ads", src: `${B}/channel-google-ads.svg` },
  { name: "Meta", src: `${B}/channel-meta.svg` },
  { name: "Direct Mail", src: `${B}/channel-direct-mail.svg` },
  { name: "Email", src: `${B}/channel-email.svg` },
] as const;

// Customer logos, in the order the marquee cycles them on the live site.
export const customerLogos = [
  { name: "Wander", src: `${B}/logo-wander.svg` },
  { name: "NBA", src: `${B}/logo-nba.png` },
  { name: "Luxury Presence", src: `${B}/logo-luxury-presence.png` },
  { name: "Juicebox", src: `${B}/logo-juicebox.png` },
  { name: "Honey Homes", src: `${B}/logo-honey-homes.png` },
  { name: "Trust & Will", src: `${B}/logo-trust-and-will.png` },
  { name: "Hard Rock Stadium Group", src: `${B}/logo-hard-rock-stadium.png` },
  { name: "Dot", src: `${B}/logo-dot.png` },
  { name: "Fly USA", src: `${B}/logo-fly-usa.png` },
  { name: "Get Dynasty", src: `${B}/logo-get-dynasty.png` },
  { name: "Kentucky Derby", src: `${B}/logo-kentucky-derby.png` },
  { name: "Miami Dolphins", src: `${B}/logo-miami-dolphins.png` },
  { name: "NEOM", src: `${B}/logo-neom.png` },
  { name: "Quint", src: `${B}/logo-quint.png` },
  { name: "Range", src: `${B}/logo-range.png` },
  { name: "Polymarket", src: `${B}/logo-polymarket.svg` },
] as const;
