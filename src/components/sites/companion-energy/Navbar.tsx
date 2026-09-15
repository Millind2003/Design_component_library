"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { label: "Platform", href: "#platform" },
  { label: "Industries", href: "#industries" },
  { label: "Insights", href: "#insights" },
  { label: "Company", href: "#company" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const text = scrolled ? "text-[var(--ce-navy)]" : "text-white";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-black/10 bg-white/90 shadow-[0_4px_20px_rgba(0,0,0,0.06)] backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-[72px] w-full max-w-[1280px] items-center justify-between px-6 sm:px-10">
        <a href="#top" className={`flex items-center gap-2 ${text}`}>
          <span
            className={`grid h-7 w-7 place-items-center rounded-md ${
              scrolled ? "bg-[var(--ce-navy)] text-white" : "bg-white text-[var(--ce-hero)]"
            }`}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
              <circle cx="12" cy="12" r="3" fill="currentColor" />
            </svg>
          </span>
          <span className="text-[15px] font-semibold tracking-tight">
            companion<span className="text-[var(--ce-accent)]">.energy</span>
          </span>
        </a>

        <ul className={`hidden items-center gap-8 md:flex ${text}`}>
          {navLinks.map((l) => (
            <li key={l.label}>
              <a href={l.href} className="text-sm opacity-80 transition-opacity hover:opacity-100">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <a href="#login" className={`hidden text-sm opacity-80 hover:opacity-100 sm:inline ${text}`}>
            Login
          </a>
          <a
            href="#demo"
            className={`ce-pill px-4 py-2 text-sm font-medium transition-colors ${
              scrolled
                ? "bg-[var(--ce-navy)] text-white hover:bg-[var(--ce-accent)]"
                : "bg-white text-[var(--ce-hero)] hover:bg-white/90"
            }`}
          >
            Book a demo
          </a>
        </div>
      </nav>
    </header>
  );
}
