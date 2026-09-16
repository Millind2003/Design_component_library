"use client";

import { useState } from "react";
import { faq } from "./data";
import { Section, SectionBody } from "./Section";
import { cn } from "@/lib/utils";

/**
 * FAQ accordion. The source uses Webflow's interaction to slide `.faq_bottom`
 * open on click; this is the same behaviour on a grid-rows transition, which
 * animates to auto height without measuring.
 */
export function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <Section bg="var(--sc-oat-200)" z={5}>
      <SectionBody className="flex flex-col gap-12 text-[var(--sc-ink)]">
        <h2 className="sc-h1">{faq.title}</h2>

        <ul className="flex flex-col">
          {faq.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <li key={item.q} className="border-t border-[var(--sc-oat-300)] last:border-b">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="sc-text-md">{item.q}</span>
                  <span className="sr-only">
                    {isOpen ? "Close faq item" : "Open faq item"}
                  </span>
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className={cn(
                      "h-5 w-5 shrink-0 transition-transform duration-300",
                      isOpen && "rotate-180",
                    )}
                  >
                    <path d="M4 6l4 4 4-4" />
                  </svg>
                </button>

                <div
                  className={cn(
                    "grid transition-[grid-template-rows] duration-300 ease-out",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="sc-text-rg max-w-[60rem] pb-6 pr-10">{item.a}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </SectionBody>
    </Section>
  );
}
