"use client";

import { useRef } from "react";
import Link from "next/link";
import { BlogPost } from "./types";
import { Container } from "../primitives";

interface CarouselProps {
  posts: BlogPost[];
}

export function BestOfKilnCarousel({ posts }: CarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const cardWidth = 400;
      const offset = direction === "left" ? -cardWidth : cardWidth;
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <section className="py-10 border-b border-[var(--cy-oat-200)] bg-[var(--cy-oat-50)]">
      <Container>
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <span className="font-cy-mono text-xs uppercase tracking-[0.14em] font-semibold text-black/70">
            BEST OF THE KILN
          </span>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => handleScroll("left")}
              aria-label="Scroll left"
              className="w-8 h-8 rounded-lg border border-[var(--cy-oat-300)] bg-white hover:bg-neutral-100 flex items-center justify-center text-black/70 hover:text-black transition-all shadow-sm"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => handleScroll("right")}
              aria-label="Scroll right"
              className="w-8 h-8 rounded-lg border border-[var(--cy-oat-300)] bg-white hover:bg-neutral-100 flex items-center justify-center text-black/70 hover:text-black transition-all shadow-sm"
            >
              ›
            </button>
          </div>
        </div>

        {/* Carousel container */}
        <div
          ref={scrollRef}
          className="flex items-stretch gap-8 overflow-x-auto no-scrollbar scroll-smooth pb-4"
        >
          {posts.map((post) => (
            <Link
              key={post.id || post.slug}
              href={`/clay/blog/${post.slug}`}
              className="group shrink-0 w-[300px] sm:w-[380px] md:w-[420px] flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-white border border-[var(--cy-oat-300)] transition-all duration-300 hover:shadow-[0_12px_36px_rgba(0,0,0,0.06)] hover:-translate-y-1"
            >
              <div>
                <span className="inline-block text-xs font-semibold uppercase tracking-wider text-black/50 mb-3">
                  {post.category}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-normal leading-tight text-black mb-4 group-hover:text-neutral-700 transition-colors">
                  {post.title}
                </h3>
                <p className="text-xs sm:text-sm text-black/65 line-clamp-3 leading-relaxed mb-6 font-normal">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-[var(--cy-oat-200)] flex items-center justify-between text-xs text-black/50 font-cy-mono">
                <span>{post.date}</span>
                {post.readTime && <span>{post.readTime}</span>}
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
