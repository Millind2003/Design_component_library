"use client";

import { useState } from "react";
import { img } from "./assets";

const industries = [
  {
    key: "Manufacturing",
    label: "Manufacturing",
    tagline: "Plants, utilities, buffers.",
    body: "Unlock new energy savings without disrupting your core processes.",
    story: "Electrifying the future of rose cultivation",
    image: img.industryEnergy,
  },
  {
    key: "Telecom",
    label: "Telecom & Data centers",
    tagline: "Sites, networks, assets.",
    body: "Optimize energy across sites, networks, and assets.",
    story: "Smarter energy for always-on networks",
    image: img.industryTelco,
  },
  {
    key: "Charging",
    label: "Charging & Logistics",
    tagline: "Fleets, depots, chargers.",
    body: "Scale smart charging with lower energy costs.",
    story: "Where EV charging meets energy intelligence",
    image: img.industryEv,
  },
  {
    key: "Energy",
    label: "Energy companies",
    tagline: "Portfolios, markets, products.",
    body: "Launch flexible energy products, faster.",
    story: "New flexible products, brought to market faster",
    image: img.industryEnergy,
  },
];

export function Industries() {
  const [active, setActive] = useState(0);
  const current = industries[active];

  return (
    <section id="industries" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-[1200px]">
        <p className="ce-eyebrow">Industries</p>
        <h2 className="ce-display mt-4 max-w-2xl text-[32px] text-[var(--ce-black)] sm:text-[48px]">
          Specific to your complexity.
          <br />
          Scalable across your portfolio.
        </h2>

        {/* tab pills */}
        <div className="mt-10 flex flex-wrap gap-2">
          {industries.map((ind, i) => (
            <button
              key={ind.key}
              onClick={() => setActive(i)}
              className={`ce-pill px-5 py-2.5 text-sm font-medium ${
                i === active
                  ? "bg-[var(--ce-navy)] text-white"
                  : "border border-black/10 text-[var(--ce-navy)] hover:bg-black/[0.04]"
              }`}
            >
              {ind.label}
            </button>
          ))}
        </div>

        {/* active panel */}
        <div className="mt-8 grid overflow-hidden rounded-3xl border border-black/5 bg-[var(--ce-offwhite)] md:grid-cols-2">
          <div className="flex flex-col justify-center p-10">
            <span className="ce-eyebrow">{current.label}</span>
            <p className="mt-3 text-xl font-medium text-[var(--ce-black)]">{current.tagline}</p>
            <p className="mt-4 max-w-md text-[var(--ce-muted)]">{current.body}</p>
            <p className="mt-8 text-sm font-medium text-[var(--ce-black)]">{current.story}</p>
            <a
              href="#insights"
              className="mt-3 inline-flex w-fit items-center gap-1 text-sm font-medium text-[var(--ce-accent)] hover:underline"
            >
              Read story
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
          <div className="min-h-[280px] overflow-hidden">
            <img
              src={current.image}
              alt={current.label}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
