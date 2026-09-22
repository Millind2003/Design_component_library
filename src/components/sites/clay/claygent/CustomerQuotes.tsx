"use client";

import { useRef } from "react";
import Image from "next/image";
import { Container } from "../primitives";
import { FrameLines } from "./FrameLines";
import { quotes } from "./data";
import type { ClaygentQuote } from "./types";

/**
 * "What our customers say about us" — a horizontally scrolling rail of quote
 * cards with prev/next buttons, matching Clay's `.slider-horizontal`.
 *
 * The source drives it with a JS slider; native scroll-snap gets the same
 * behaviour and keeps it usable by keyboard and trackpad.
 */
export function CustomerQuotes() {
  const rail = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: -1 | 1) => {
    const el = rail.current;
    if (!el) return;
    const card = el.querySelector("li");
    const step = card ? card.getBoundingClientRect().width + 32 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section className="bg-[linear-gradient(180deg,var(--cy-oat-50),white)] pb-24 pt-4">
      <Container>
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="max-w-[30rem]">
            <h2 className="cy-h3 text-balance">{quotes.heading}</h2>
          </div>
        </div>
      </Container>

      <Container className="relative">
        <div className="flex flex-col items-stretch gap-10 pt-6">
          <div className="relative px-4 min-[768px]:px-9 min-[992px]:px-12">
            <FrameLines className="mx-0" />

            <div className="relative flex flex-col items-center justify-center">
              {/* oat gradients mask the rail's cut-off edges */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[3%] bg-[linear-gradient(270deg,transparent,var(--cy-oat-50))] min-[768px]:w-[10%] min-[992px]:w-[15%]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 right-0 z-10 w-[3%] bg-[linear-gradient(270deg,var(--cy-oat-50),transparent)] min-[768px]:w-[10%] min-[992px]:w-[15%]"
              />

              <div
                ref={rail}
                className="-my-4 w-full snap-x snap-mandatory overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              >
                <ul className="flex w-full list-none items-center justify-start gap-4 min-[992px]:gap-8">
                  {quotes.items.map((quote) => (
                    <li
                      key={quote.href}
                      className="w-[90%] flex-none snap-center py-4 min-[768px]:w-[75%] min-[768px]:max-w-[25rem] min-[992px]:w-1/2 min-[992px]:min-w-[25rem] min-[1200px]:w-[40%] min-[1200px]:min-w-[22rem] min-[1200px]:max-w-[30rem]"
                    >
                      <QuoteCard quote={quote} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mx-auto flex items-center justify-center gap-3">
            <RailButton label="Previous customer story" onClick={() => scrollBy(-1)} back />
            <RailButton label="Next customer story" onClick={() => scrollBy(1)} />
          </div>
        </div>
      </Container>
    </section>
  );
}

function QuoteCard({ quote }: { quote: ClaygentQuote }) {
  return (
    <a
      href={quote.href}
      className="group relative flex w-full flex-none flex-col overflow-hidden rounded-[1.5rem] border-[0.5px] border-[var(--cy-border)] bg-white"
    >
      <div className="relative z-[2] rounded-[1.5rem] bg-white">
        <div className="mb-px flex items-center justify-between overflow-hidden border-b-[0.5px] border-[var(--cy-border)] p-6">
          <div className="flex items-end justify-start gap-3">
            <span className="cy-h3">{quote.stat}</span>
            <span className="max-w-[12rem] pb-1 text-[0.75em] font-semibold uppercase leading-[1.2] tracking-[0.09em]">
              {quote.eyebrow}
            </span>
          </div>
          <span className="relative block h-6 w-6 shrink-0 overflow-hidden">
            <UpRight className="absolute inset-0 transition-transform duration-300 group-hover:translate-x-full group-hover:-translate-y-full" />
            <UpRight className="absolute inset-0 -translate-x-full translate-y-full transition-transform duration-300 group-hover:translate-x-0 group-hover:translate-y-0" />
          </span>
        </div>

        <div className="overflow-hidden px-8 py-6 text-center">
          <p className="cy-p-md">{quote.quote}</p>
        </div>
      </div>

      <div className="relative -mt-8 pt-[44%]">
        <Image
          src={quote.image}
          alt=""
          fill
          sizes="(max-width: 992px) 90vw, 30rem"
          className="object-cover"
        />
      </div>
    </a>
  );
}

function RailButton({
  label,
  onClick,
  back,
}: {
  label: string;
  onClick: () => void;
  back?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="flex h-14 w-14 items-center justify-center rounded-xl border-[0.5px] border-[var(--cy-border)] bg-[var(--cy-oat-200)] transition-colors hover:bg-[var(--cy-oat-300)]"
    >
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-6 w-6">
        <path
          d={back ? "M20 12H4M10 6L4 12L10 18" : "M4 12H20M14 18L20 12L14 6"}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

function UpRight({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path
        d="M7 17L17 7M17 17V7H7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
