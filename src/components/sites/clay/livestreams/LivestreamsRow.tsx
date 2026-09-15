"use client";

import { useRef } from "react";
import { LivestreamItem } from "./types";
import { LivestreamsCard } from "./LivestreamsCard";
import { Container } from "../primitives";

interface RowProps {
  title: string;
  items: LivestreamItem[];
  id?: string;
}

export function LivestreamsRow({ title, items, id }: RowProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  if (!items || items.length === 0) return null;

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const cardWidth = 380;
      const offset = direction === "left" ? -cardWidth : cardWidth;
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <section id={id} className="py-8 sm:py-10 border-b border-[var(--cy-oat-200)] last:border-b-0">
      <Container>
        {/* Section Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-black">
            {title}
          </h2>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => handleScroll("left")}
              aria-label={`Scroll ${title} left`}
              className="w-9 h-9 rounded-lg border border-[var(--cy-oat-300)] bg-white hover:bg-neutral-50 flex items-center justify-center text-black/70 hover:text-black transition-all shadow-sm active:scale-95"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              type="button"
              onClick={() => handleScroll("right")}
              aria-label={`Scroll ${title} right`}
              className="w-9 h-9 rounded-lg border border-[var(--cy-oat-300)] bg-white hover:bg-neutral-50 flex items-center justify-center text-black/70 hover:text-black transition-all shadow-sm active:scale-95"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Horizontal Swiper Carousel */}
        <div
          ref={scrollRef}
          className="flex items-stretch gap-6 overflow-x-auto no-scrollbar scroll-smooth pb-4 -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          {items.map((item) => (
            <div
              key={item.id || item.slug}
              className="shrink-0 w-[280px] sm:w-[340px] md:w-[370px]"
            >
              <LivestreamsCard item={item} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
