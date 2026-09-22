/** Content shapes for the /clay/claygent route. */

export type ClaygentLink = {
  label: string;
  href: string;
};

/** One card in the sticky-stacking feature column. */
export type ClaygentFeature = {
  eyebrow: string;
  heading: string;
  /** Split into paragraphs; the source separates them with a blank line. */
  body: string[];
  cta: ClaygentLink;
  image: string;
  alt: string;
  /** True for the alternating rows where the copy sits left of the panel. */
  reversed: boolean;
};

export type ClaygentStep = {
  title: string;
  body: string;
};

export type ClaygentQuote = {
  stat: string;
  eyebrow: string;
  quote: string;
  image: string;
  href: string;
};

/** A block inside an FAQ answer — the source mixes prose, lists and a table. */
export type FaqBlock =
  | { kind: "p"; runs: FaqRun[] }
  | { kind: "ul"; items: FaqRun[][] }
  | { kind: "table"; head: string[]; rows: string[][] };

/** A run of answer text; `href` makes it a link, `bold` maps to <strong>. */
export type FaqRun = {
  text: string;
  bold?: boolean;
  href?: string;
};

export type ClaygentFaq = {
  question: string;
  answer: FaqBlock[];
};
