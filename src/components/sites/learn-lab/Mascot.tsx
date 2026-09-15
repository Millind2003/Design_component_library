// Hand-drawn green owl in the Duolingo spirit — original paths, not traced
// from the real Duo artwork (which is a copyrighted character).

export function Mascot({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" fill="none" className={className} aria-hidden>
      {/* feet */}
      <path
        d="M44 104h14M62 104h14"
        stroke="var(--ll-orange)"
        strokeWidth="7"
        strokeLinecap="round"
      />

      {/* body */}
      <ellipse cx="60" cy="62" rx="42" ry="44" fill="var(--ll-primary)" />
      <ellipse cx="60" cy="72" rx="29" ry="31" fill="var(--ll-primary-light)" />

      {/* head tufts */}
      <path d="M30 26c2-9 8-14 14-15-3 6-3 12-1 17l-13-2Z" fill="var(--ll-primary)" />
      <path d="M90 26c-2-9-8-14-14-15 3 6 3 12 1 17l13-2Z" fill="var(--ll-primary)" />

      {/* wings */}
      <ellipse cx="18" cy="66" rx="9" ry="19" fill="var(--ll-primary-dark)" />
      <ellipse cx="102" cy="66" rx="9" ry="19" fill="var(--ll-primary-dark)" />

      {/* eye mask — two big overlapping discs is the whole look */}
      <circle cx="46" cy="48" r="19" fill="#fff" />
      <circle cx="74" cy="48" r="19" fill="#fff" />
      <circle cx="46" cy="48" r="19" stroke="var(--ll-primary-dark)" strokeWidth="2.5" />
      <circle cx="74" cy="48" r="19" stroke="var(--ll-primary-dark)" strokeWidth="2.5" />

      {/* pupils */}
      <circle cx="49" cy="49" r="8.5" fill="#4b4b4b" />
      <circle cx="71" cy="49" r="8.5" fill="#4b4b4b" />
      <circle cx="52" cy="46" r="3" fill="#fff" />
      <circle cx="74" cy="46" r="3" fill="#fff" />

      {/* beak */}
      <path d="M60 60l11 8-11 9-11-9 11-8Z" fill="var(--ll-orange)" />
      <path d="M60 68l11 0-11 9-11-9 11 0Z" fill="var(--ll-orange-dark)" />
    </svg>
  );
}

/** Compact head-only mark for the sidebar wordmark. */
export function OwlLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden>
      <circle cx="20" cy="20" r="18" fill="var(--ll-primary)" />
      <circle cx="14" cy="16.5" r="7.5" fill="#fff" />
      <circle cx="26" cy="16.5" r="7.5" fill="#fff" />
      <circle cx="15" cy="17" r="3.4" fill="#4b4b4b" />
      <circle cx="25" cy="17" r="3.4" fill="#4b4b4b" />
      <path d="M20 24l5 3.5-5 4-5-4 5-3.5Z" fill="var(--ll-orange)" />
    </svg>
  );
}
