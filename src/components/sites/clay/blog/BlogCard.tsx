"use client";

import Link from "next/link";
import { BlogPost } from "./types";

interface CardProps {
  post: BlogPost;
  variant?: "standard" | "compact" | "horizontal";
}

export function BlogCard({ post, variant = "standard" }: CardProps) {
  return (
    <Link
      href={`/clay/blog/${post.slug}`}
      className="group flex flex-col h-full rounded-2xl bg-white border border-[var(--cy-oat-300)] overflow-hidden transition-all duration-300 hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)] hover:-translate-y-1"
    >
      {/* Thumbnail */}
      <div className="relative w-full aspect-[16/9] bg-neutral-100 overflow-hidden">
        <img
          src={post.thumbnail}
          alt={post.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/6aa1bc56c34f8a1ffd60cf8e_marektingdemothumb.png";
          }}
        />
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5 sm:p-6 justify-between">
        <div>
          <div className="flex items-center gap-2 mb-2.5">
            <span className="px-2.5 py-0.5 rounded-full text-[0.68rem] font-semibold uppercase tracking-wider bg-[var(--cy-oat-200)] text-black/80">
              {post.category}
            </span>
            {post.readTime && (
              <span className="text-[0.72rem] text-black/50 font-cy-mono">
                • {post.readTime}
              </span>
            )}
          </div>

          <h3 className="text-lg sm:text-xl font-serif font-normal leading-snug text-black mb-2 line-clamp-2 group-hover:text-neutral-700 transition-colors">
            {post.title}
          </h3>

          <p className="text-xs sm:text-sm text-black/60 line-clamp-2 leading-relaxed mb-4">
            {post.excerpt}
          </p>
        </div>

        {/* Footer Meta */}
        <div className="pt-3 border-t border-[var(--cy-oat-200)] flex items-center justify-between text-xs text-black/55 font-cy-mono mt-auto">
          <span>{post.authors[0]?.name || "Clay Team"}</span>
          <span>{post.date}</span>
        </div>
      </div>
    </Link>
  );
}
