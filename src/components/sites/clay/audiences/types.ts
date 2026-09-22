/** Content shapes for the /clay/audiences route. */

export type AudiencesLink = {
  label: string;
  href: string;
};

/** One step of the "Capabilities" sticky-scroll column. */
export type AudiencesCapability = {
  /** Anchor id — the source uses #visual-1 … #visual-3. */
  id: string;
  heading: string;
  body: string;
  cta: AudiencesLink;
  image: string;
  alt: string;
};

/** A single card in the "Use cases to build on Audiences" grid. */
export type AudiencesUseCase = {
  title: string;
  body: string;
  /** Doubles as the card's footer label and its link target. */
  cta: AudiencesLink;
};

/**
 * A labelled run of use-case cards. Clay themes each run off one terra swatch;
 * `theme` picks between the two it uses here.
 */
export type AudiencesUseCaseGroup = {
  eyebrow: string;
  theme: "lime" | "blueberry";
  cards: AudiencesUseCase[];
};

export type AudiencesIntegration = {
  logo: string;
  alt: string;
};

export type AudiencesFeaturedCustomer = {
  eyebrow: string;
  quote: string;
  name: string;
  role: string;
  image: string;
  cta: AudiencesLink;
};
