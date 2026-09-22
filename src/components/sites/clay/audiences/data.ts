// Copy and asset paths lifted from clay.com/audiences.
import type {
  AudiencesCapability,
  AudiencesFeaturedCustomer,
  AudiencesIntegration,
  AudiencesUseCaseGroup,
} from "./types";

const B = "/sites/clay";

export const hero = {
  heading: "Centralize your GTM data",
  body: "Audiences connects your CRM, data warehouse, signals, and 200+ enrichment providers into a unified data layer inside Clay.",
  /** Two transparent UI screenshots stacked in one grid cell over the slab. */
  imageUnder: `${B}/aud-ui-container2.webp`,
  imageOver: `${B}/aud-ui-container3.webp`,
};

export const logoWallEyebrow =
  "Trusted by more than 500,000 leading GTM teams of all sizes";

export const featuredCustomer: AudiencesFeaturedCustomer = {
  eyebrow: "Figma",
  quote:
    "“Clay has become the orchestration layer for everything GTM. Salesforce for record-keeping, Snowflake for product data, and Clay for turning it all into automated action.”",
  name: "Kyle Ketchum",
  role: "Marketing Operations, Tech & Systems",
  image: `${B}/aud-figma-card.webp`,
  cta: {
    label: "Read about Figma using Audiences",
    href: "https://www.clay.com/customers/figma",
  },
};

/** The sticky-scroll section. Its <h2> is screen-reader-only in the source. */
export const capabilitiesLabel = "Capabilities";

export const capabilities: AudiencesCapability[] = [
  {
    id: "visual-1",
    heading: "Access all your GTM context in one place",
    body: "Import millions of records from your CRM and data warehouse into Clay, then layer on enrichments and signals from 200+ providers. Get a unified view of every account and contact.",
    cta: { label: "Get a demo", href: "/demo" },
    image: `${B}/aud-capability-1.webp`,
    alt: "Track job changes",
  },
  {
    id: "visual-2",
    heading: "Build dynamic, reusable Audiences",
    body: "Create audiences like warm leads or re-engaged accounts with simple filters. Records automatically stay updated as your data changes. No scheduled refreshes, manual exports, or outdated customer and prospect lists.",
    cta: { label: "Get a demo", href: "/demo" },
    image: `${B}/aud-capability-2.webp`,
    alt: "Track new hires",
  },
  {
    id: "visual-3",
    heading: "Reach the same person across every channel",
    body: "Unify duplicate records into a single customer profile. Build an audience once, then automatically tailor your ads, direct mail, and warm outbound campaigns to reach them across every channel. Keep your marketing & sales outreach in-sync.",
    cta: { label: "Get a demo", href: "/demo" },
    image: `${B}/aud-capability-3.webp`,
    alt: "Track new hires",
  },
];

export const useCases = {
  heading: "Use cases to build on Audiences",
  body: "Build and scale your most creative plays on top of a unified data foundation. Work across millions of prospect and customer records.",
  groups: [
    {
      eyebrow: "RevOps & GTM Engineering",
      theme: "lime",
      cards: [
        {
          title: "CRM enrichment at full scale",
          body: "Import your entire CRM. Enrich every record and add buyer intent data. Write clean, current data back. Automatic syncs keep the CRM up-to-date without manual entry.",
          cta: { label: "Get a demo", href: "/demo" },
        },
        {
          title: "Signal-based account prioritization",
          body: "Detect buying signals on target accounts and move them into the right priority tier instantly. Act when the timing is right.",
          cta: { label: "Explore Account and lead scoring", href: "/signals" },
        },
        {
          title: "TAM sourcing and list building",
          body: "Continuously surface net-new accounts matching your ICP. Suppress what's already in your CRM. Always work from a clean, deduplicated list of accounts and contacts.",
          cta: { label: "TAM sourcing in Clay", href: "/use-cases/tam-sourcing" },
        },
      ],
    },
    {
      eyebrow: "Growth Marketing",
      theme: "blueberry",
      cards: [
        {
          title: "Automated ad targeting across platforms",
          body: "Create enriched audiences from your first party data sources and automatically sync them to LinkedIn, Meta, and Google",
          cta: { label: "Explore Ads in Clay", href: "/ads" },
        },
        {
          title: "Rep-attributed outbound",
          body: "Build sequences that fire automatically when contacts enter an Audience or a segment. Craft every email using full context: account details, touchpoint history, and buying signals.",
          cta: { label: "Explore Outbound", href: "/use-cases/outbound" },
        },
        {
          title: "Signal-tracking across accounts & contacts",
          body: "Track job changes, web intent, and tech stack changes across millions of records. When the right signal fires, Audiences creates enriched records and routes them to the right workflow or rep automatically.",
          cta: { label: "Discover Signals", href: "/signals" },
        },
      ],
    },
  ] satisfies AudiencesUseCaseGroup[],
};

export const integrations = {
  eyebrow: "Integrations",
  heading: "Import millions of records",
  cta: { label: "Get a demo", href: "/demo" },
  logos: [
    { logo: `${B}/salesforce.svg`, alt: "Salesforce logo" },
    { logo: `${B}/snowflake.svg`, alt: "Snowflake logo" },
    { logo: `${B}/clay-how-hubspot-icon.svg`, alt: "HubSpot logo" },
    { logo: `${B}/google-bigquery.svg`, alt: "Google BigQuery logo" },
    { logo: `${B}/gong.svg`, alt: "Gong logo" },
  ] satisfies AudiencesIntegration[],
};

export const university = {
  heading: "Get started on Clay University",
  icon: `${B}/audiences.webp`,
  image: `${B}/aud-university.webp`,
  alt: "Get started on Clay University",
  cta: {
    label: "Check out the course",
    href: "https://university.clay.com/courses/clay-audiences",
  },
};
