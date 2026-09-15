"use client";

import { useState } from "react";
import Image from "next/image";
import { flow } from "./data";
import { Container } from "./primitives";
import { cn } from "@/lib/utils";

// Each tab carries a fruit theme: a washed -100/-200 ground for the card, and
// the saturated -400 for the active tab. Taken from the site's own
// `--_theme--terra-card---*` custom properties.
const accents = {
  slushie: { active: "bg-[var(--cy-slushie-400)] text-white", card: "bg-[var(--cy-slushie-200)]" },
  lime: { active: "bg-[var(--cy-lime-400)] text-white", card: "bg-[var(--cy-lime-100)]" },
  ube: { active: "bg-[var(--cy-ube-400)] text-white", card: "bg-[var(--cy-ube-100)]" },
  tangerine: { active: "bg-[var(--cy-tangerine-400)] text-white", card: "bg-[var(--cy-tangerine-100)]" },
  blueberry: { active: "bg-[var(--cy-blueberry-400)] text-white", card: "bg-[var(--cy-blueberry-100)]" },
  pomegranate: { active: "bg-[var(--cy-pomegranate-400)] text-white", card: "bg-[var(--cy-pomegranate-200)]" },
  dragonfruit: { active: "bg-[var(--cy-dragonfruit-400)] text-white", card: "bg-[var(--cy-dragonfruit-100)]" },
} as const;

/** "GTM engineers build on Clay" — a scrolling tab strip over a screenshot. */
export function Flow() {
  const [active, setActive] = useState(0);
  const tab = flow.tabs[active];
  const accent = accents[tab.accent];

  return (
    <section className="cy-pt-regular cy-pb-regular relative z-[2] bg-[var(--cy-oat-50)]">
      <Container>
        <div className="flex flex-col gap-8">
          {/* .home-flow_title is centred at max-width 40rem on the original */}
          <div className="mx-auto flex max-w-[40rem] flex-col items-center gap-[0.4rem] text-center">
            <h2 className="cy-h2 text-balance">{flow.heading}</h2>
            <p className="cy-p-md text-[var(--cy-oat-800)]">{tab.copy}</p>
          </div>

          <div className="flex flex-col gap-4">

            <div className="relative">
              <div className="scrollbar-hide flex justify-center gap-2 overflow-x-auto pb-1 max-lg:justify-start">
                {flow.tabs.map((item, i) => (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => setActive(i)}
                    className={cn(
                      "shrink-0 whitespace-nowrap rounded-[var(--cy-radius-sm)] px-4 py-2 text-[0.95rem] transition-colors",
                      i === active
                        ? accents[item.accent].active
                        : "bg-[var(--cy-oat-200)] text-[var(--cy-oat-950)] hover:bg-[var(--cy-oat-300)]",
                    )}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              {/* the strip fades out at both edges as it scrolls */}
              <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[var(--cy-oat-50)] to-transparent" />
            </div>
          </div>

          <div
            className={cn(
              "relative overflow-hidden rounded-[var(--cy-radius-lg)] p-6 transition-colors duration-500 sm:p-10",
              accent.card,
            )}
          >
            {/* subtle grain, as on the original cards */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.14] mix-blend-overlay"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23n)'/%3E%3C/svg%3E\")",
              }}
            />

            <Image
              key={tab.image}
              src={tab.image}
              alt={tab.label}
              width={1600}
              height={1000}
              className="relative mx-auto w-full max-w-[64rem] rounded-[var(--cy-radius)] shadow-[0_24px_80px_rgba(0,0,0,0.18)]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
