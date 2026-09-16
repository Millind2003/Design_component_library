/** Content shapes for the /clay-for-marketing route. */

export type MarketingLink = {
  label: string;
  href: string;
};

export type MarketingHero = {
  /** The "Clay for [Marketing teams]" persona switcher above the headline. */
  pageNav: {
    label: string;
    current: string;
    items: MarketingLink[];
  };
  headingLead: string;
  /** Rendered in Clay's blueberry accent inside the same <h1>. */
  headingAccent: string;
  body: string;
  cta: MarketingLink;
};

/** One run of the testimonial quote; `bold` maps to the source's <strong>. */
export type QuoteSegment = {
  text: string;
  bold: boolean;
};

export type MarketingTestimonial = {
  bg: string;
  /** Clay sets light text per swatch, not uniformly — see data.ts. */
  lightText: boolean;
  quote: QuoteSegment[];
  name?: string;
  role?: string;
  avatar?: string;
};

export type MarketingLogo = {
  logo: string;
  alt: string;
  href?: string;
  /** "Case study" or "Hackathon" badge pinned to the logo's bottom-right. */
  pill?: string;
  /** Absent for logos that render without a hover card. */
  testimonial?: MarketingTestimonial;
};

export type MarketingPillars = {
  heading: string;
  body: string;
  cards: {
    icon: string;
    title: string;
    body: string;
  }[];
};

export type MarketingUseCase = {
  heading: string;
  body: string;
  cta: MarketingLink;
  /** True when the media column comes first in source order. */
  mediaFirst: boolean;
  /** White container vs. sitting directly on the oat page background. */
  onWhite: boolean;
  /** The media frame gets a hairline border only in the media-first variants. */
  mediaBorder: boolean;
  video?: string;
  image?: string;
};

export type MarketingCaseStudy = {
  name: string;
  eyebrow: string;
  body: string;
  tabLogo: string;
  tabAlt: string;
  image: string;
  cta: MarketingLink;
};
