const columns = [
  {
    heading: "Platform",
    links: ["Our platform"],
  },
  {
    heading: "Insights",
    links: ["Pioneer Stories", "Articles & News", "Events", "Blog", "Press releases"],
  },
  {
    heading: "Company",
    links: ["About us", "Careers", "Let’s talk"],
  },
];

export function Footer() {
  return (
    <footer id="company" className="bg-[var(--ce-black)] px-6 py-16 text-white">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-7 w-7 place-items-center rounded-md bg-white text-[var(--ce-black)]">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
                  <circle cx="12" cy="12" r="3" fill="currentColor" />
                </svg>
              </span>
              <span className="text-[15px] font-semibold tracking-tight">
                companion<span className="text-[var(--ce-accent)]">.energy</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-white/50">
              Turn energy into your competitive edge.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.heading}>
              <div className="ce-eyebrow text-white/40">{col.heading}</div>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-white/70 transition-colors hover:text-white">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/40 sm:flex-row">
          <span>&copy; 2026 Companion.energy. All rights reserved</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white/70">Privacy policy</a>
            <a href="#" className="hover:text-white/70">Terms of service</a>
            <a href="#" className="hover:text-white/70">Brand</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
