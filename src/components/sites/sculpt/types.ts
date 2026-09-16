/** Content shapes for the Sculpt (sculpt.clay.com) clone. */

export type SculptLink = {
  label: string;
  href: string;
};

export type SculptHero = {
  banner: string;
  date: string;
  /** Two lines: venue, then city — a <br> in the source. */
  location: string[];
  cta: SculptLink;
  speakersBadge: string;
  /** Remote URL only. The source master is 215MB, so it is not vendored and
   *  the hero renders `poster` instead. */
  video: string;
  poster: string;
  wordmark: string;
  /** Three stacked SVG wave layers over the video. */
  waves: string[];
};

export type SculptAbout = {
  eyebrow: string;
  heading: string;
  description: string;
  whenLabel: string;
  when: string;
  whereLabel: string;
  where: string[];
  cta: SculptLink;
};

export type SculptSpeaker = {
  name: string;
  role: string;
  avatar: string;
  logo: string;
  bio: string;
  /** Inline card fill from the source's `.card-theme` wrapper; "" for the
   *  2026 cards, which take the default paper fill. */
  tint: string;
};

export type SculptSpeakerGroup = {
  title: string;
  /** One or more paragraphs under the section title. */
  descriptions: string[];
  /** Logos painted inline inside the first sentence via background-image. */
  inlineLogos: string[];
  cards: SculptSpeaker[];
};

/** A speaker bubble on an agenda item. */
export type SculptAgendaHead = {
  name: string;
  role: string;
  co: string;
  /** Webflow's blob shape letter (A–H), picking one of the clipped silhouettes. */
  shape: string;
  photo: boolean;
};

export type SculptAgendaItem = {
  /** "" for plenary sessions, else "marketing" | "revops". */
  track: string;
  plenary: boolean;
  end: string;
  title: string;
  who: string;
  stage: string;
  pill: string;
  desc: string;
  heads: SculptAgendaHead[];
  /** ag-cell-0 | ag-cell-1 | ag-cell-2 — which stage column it sits in. */
  colClass: string;
};

export type SculptAgendaRow = {
  time: string;
  cells: (SculptAgendaItem | null)[];
};

/** The third column: a facilitated roundtable slot, not a stage session. */
export type SculptRoundtable = {
  time: string;
  label: string;
  location: string;
  desc: string;
  link: string;
};

export type SculptAgendaBlock =
  | { kind: "break"; time: string; label: string }
  | { kind: "band"; rows: SculptAgendaRow[]; roundtable: SculptRoundtable | null };

export type SculptAgenda = {
  title: string;
  tip: string;
  chips: string[];
  stages: string[];
  blocks: SculptAgendaBlock[];
  /** Seven clip silhouettes (A–G) the speaker bubbles are masked with. */
  blobShapes: Record<string, string>;
};

/** Shared shape for the "building blocks" and "why attend" panels. */
export type SculptPanel = {
  title: string;
  description?: string;
  cards: { title: string; body: string }[];
};

/** A run of the ticket blurb; `href` marks the inline mailto link. */
export type SculptTicketSegment = {
  text: string;
  href?: string;
};

export type SculptTickets = {
  title: string;
  items: { title: string; body: string }[];
  card: {
    eyebrow: string;
    price: string;
    description: SculptTicketSegment[];
    cta: SculptLink | null;
  } | null;
};

export type SculptFaq = {
  title: string;
  items: { q: string; a: string }[];
};

export type SculptSponsor = {
  title: string;
  logos: { tier: string; logo: string; href: string }[];
};

export type SculptCta = {
  /** ISO datetime the countdown runs to. */
  target: string;
  text: string;
  cta: SculptLink;
  logo: string;
  blobs: string[];
  /** Four decorative marks set between the words of the closing line. */
  icons: string[];
};

export type SculptFooter = {
  text: string;
  links: SculptLink[];
  images: string[];
};
