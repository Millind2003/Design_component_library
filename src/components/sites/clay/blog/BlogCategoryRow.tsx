"use client";

import { useRef } from "react";
import { BlogPost, BlogCategory } from "./types";
import { BlogCard } from "./BlogCard";
import { Container } from "../primitives";

interface RowProps {
  title: string;
  category: BlogCategory;
  posts: BlogPost[];
  onSelectCategory?: (cat: BlogCategory) => void;
}

export function BlogCategoryRow({
  title,
  category,
  posts,
  onSelectCategory,
}: RowProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  if (!posts || posts.length === 0) return null;

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const cardWidth = 340;
      const offset = direction === "left" ? -cardWidth : cardWidth;
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <section className="py-10 border-b border-[var(--cy-oat-200)] last:border-b-0">
      <Container>
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <span className="font-cy-mono text-xs uppercase tracking-[0.14em] font-semibold text-black/70">
              {title}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {onSelectCategory && (
              <button
                type="button"
                onClick={() => onSelectCategory(category)}
                className="text-xs font-semibold text-black/70 hover:text-black transition-colors"
              >
                See all →
              </button>
            )}

            <div className="flex items-center gap-1.5 ml-2">
              <button
                type="button"
                onClick={() => handleScroll("left")}
                aria-label={`Scroll ${title} left`}
                className="w-7 h-7 rounded-lg border border-[var(--cy-oat-300)] bg-white hover:bg-neutral-100 flex items-center justify-center text-black/70 hover:text-black transition-all shadow-sm"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={() => handleScroll("right")}
                aria-label={`Scroll ${title} right`}
                className="w-7 h-7 rounded-lg border border-[var(--cy-oat-300)] bg-white hover:bg-neutral-100 flex items-center justify-center text-black/70 hover:text-black transition-all shadow-sm"
              >
                ›
              </button>
            </div>
          </div>
        </div>

        {/* Carousel items */}
        <div
          ref={scrollRef}
          className="flex items-stretch gap-6 overflow-x-auto no-scrollbar scroll-smooth pb-3"
        >
          {posts.map((post) => (
            <div
              key={post.id || post.slug}
              className="shrink-0 w-[280px] sm:w-[320px] md:w-[340px]"
            >
              <BlogCard post={post} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
