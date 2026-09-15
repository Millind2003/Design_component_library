"use client";

import { useState } from "react";
import { cta, features, footer, security } from "./data";
import { Arrow, Container, Pill, SectionHeading, Wordmark } from "./primitives";
import { cn } from "@/lib/utils";

/**
 * "Built for the way supply chain teams work" — numbered rows where the copy
 * sits left and a looping clip right. Selecting a row opens its body with the
 * grid-template-rows accordion and swaps the media.
 */
export function Features() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-[var(--pl-offwhite)] py-20 lg:py-28">
      <Container>
        <SectionHeading align="center" className="mb-16">
          {features.heading}
        </SectionHeading>

        <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          <ul className="flex flex-col border-t border-[var(--pl-line)]">
            {features.items.map((item, i) => {
              const isOpen = i === open;
              return (
                <li key={item.no} className="border-b border-[var(--pl-line)]">
                  <button
                    type="button"
                    onClick={() => setOpen(i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-start gap-6 py-7 text-left"
                  >
                    <span className="pl-eyebrow pt-1 text-[var(--pl-gray)]">
                      {item.no}
                    </span>
                    <span className="flex-1">
                      <span
                        className={cn(
                          "pl-h3 block transition-colors duration-[340ms]",
                          isOpen ? "text-[var(--pl-black)]" : "text-[var(--pl-black)]/55",
                        )}
                        style={{ transitionTimingFunction: "var(--pl-ease-out)" }}
                      >
                        {item.title}
                      </span>

                      <span className="pl-collapse block" data-open={isOpen}>
                        <span className="block">
                          <span className="pl-body block max-w-[46ch] pt-3 text-[var(--pl-black)]/70">
                            {item.body}
                          </span>
                        </span>
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          <div
            className="relative aspect-[4/3] overflow-hidden border border-[var(--pl-line)] bg-[var(--pl-eggshell)] lg:aspect-auto lg:min-h-[520px]"
            style={{ borderRadius: "var(--pl-radius)" }}
            data-reveal="slow"
          >
            {features.items.map((item, i) => (
              <video
                key={item.no}
                src={item.video}
                autoPlay
                loop
                muted
                playsInline
                preload="none"
                className={cn(
                  "absolute inset-0 h-full w-full object-cover transition-opacity duration-[1200ms]",
                  i === open ? "opacity-100" : "opacity-0",
                )}
                style={{ transitionTimingFunction: "var(--pl-ease-out)" }}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

/** Compliance strip on the eggshell ground. */
export function Security() {
  return (
    <section className="bg-[var(--pl-eggshell)] py-20 lg:py-28">
      <Container>
        <SectionHeading align="center" className="mb-14">
          {security.heading}
        </SectionHeading>

        <div className="grid gap-px bg-[var(--pl-line)] md:grid-cols-3">
          {security.items.map((item, i) => (
            <div
              key={item.title}
              className="pl-card-in flex flex-col gap-3 bg-[var(--pl-eggshell)] p-8"
              style={{ "--pl-delay": `${i * 110}ms` } as React.CSSProperties}
            >
              <span className="grid h-10 w-10 place-items-center rounded-full border border-[var(--pl-line)] text-[11px]">
                ✓
              </span>
              <h3 className="pl-h3 text-[19px]">{item.title}</h3>
              <p className="pl-body max-w-[32ch] text-[var(--pl-black)]/70">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/** The clay-coloured closing panel — the one saturated surface on the page. */
export function Cta() {
  return (
    <section className="bg-[var(--pl-offwhite)] px-4 pb-6 md:px-12">
      <div
        className="relative overflow-hidden bg-[var(--pl-clay)] px-6 py-24 text-center text-white lg:py-36"
        style={{ borderRadius: "var(--pl-radius)" }}
      >
        <div className="relative flex flex-col items-center gap-6" data-reveal="">
          <h2 className="pl-h2 max-w-[16ch]">{cta.heading}</h2>
          <p className="pl-body max-w-[46ch] text-white/85">{cta.body}</p>
          <Pill href={cta.action.href} variant="light" className="mt-2">
            {cta.action.label}
          </Pill>
        </div>
      </div>
    </section>
  );
}

/** Dark footer with link columns and a newsletter field. */
export function Footer() {
  return (
    <footer className="bg-[var(--pl-black)] px-4 pb-4 text-white md:px-12">
      <div className="pt-16">
        <div className="grid gap-10 pb-14 lg:grid-cols-[1.2fr_repeat(4,1fr)]">
          <Wordmark />

          {footer.columns.map((column) => (
            <div key={column.group}>
              <h3 className="pl-eyebrow text-white/45">{column.group}</h3>
              <ul className="mt-4 space-y-2.5">
                {column.items.map((item) => (
                  <li key={item}>
                    <a
                      href="#footer"
                      className="pl-body pl-underline text-white/80 transition-colors duration-[260ms] hover:text-white"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-end justify-between gap-8 border-t border-white/15 py-10">
          <div className="w-full max-w-[360px]">
            <label className="pl-eyebrow block text-white/45" htmlFor="pl-news">
              {footer.newsletter.label}
            </label>
            <form
              className="mt-3 flex items-center gap-3 border-b border-white/25 pb-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                id="pl-news"
                type="email"
                placeholder={footer.newsletter.placeholder}
                className="pl-body w-full bg-transparent outline-none placeholder:text-white/35"
              />
              <button
                type="submit"
                aria-label={footer.newsletter.label}
                className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white text-[var(--pl-black)] transition-transform duration-[420ms] hover:translate-x-0.5"
                style={{ transitionTimingFunction: "var(--pl-ease-out)" }}
              >
                <Arrow />
              </button>
            </form>
          </div>

          <div className="flex flex-wrap items-center gap-8">
            {footer.legal.map((item) => (
              <a
                key={item}
                href="#footer"
                className="pl-eyebrow pl-underline text-white/55"
              >
                {item}
              </a>
            ))}
            <span className="pl-eyebrow text-white/40">{footer.copyright}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
