"use client";

import Link from "next/link";
import { BlogCategory } from "./types";
import { blogCategories } from "./data";
import { Container } from "../primitives";
import { cn } from "@/lib/utils";

interface BlogSubNavProps {
  selectedCategory: BlogCategory | "All";
  onSelectCategory: (cat: BlogCategory | "All") => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export function BlogSubNav({
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
}: BlogSubNavProps) {
  return (
    <div className="sticky top-16 z-30 bg-white/95 backdrop-blur-md border-b border-[var(--cy-oat-200)] py-2.5 transition-all shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
      <Container>
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3">
          {/* Brand Mark & Category Filter Pills */}
          <div className="flex items-center gap-4 sm:gap-6 overflow-x-auto no-scrollbar py-1">
            <Link
              href="/clay/blog"
              onClick={() => onSelectCategory("All")}
              className="font-serif italic font-medium text-lg sm:text-xl text-black shrink-0 hover:opacity-80 transition-opacity"
            >
              GTM with Clay
            </Link>

            <div className="h-4 w-px bg-black/10 shrink-0 hidden sm:block" />

            <div className="flex items-center gap-1.5 shrink-0">
              <button
                type="button"
                onClick={() => onSelectCategory("All")}
                className={cn(
                  "px-3 py-1.5 rounded-full text-xs font-medium transition-colors whitespace-nowrap",
                  selectedCategory === "All"
                    ? "bg-black text-white"
                    : "text-black/70 hover:bg-black/5 hover:text-black",
                )}
              >
                All
              </button>

              {blogCategories.map((cat) => {
                const isActive = selectedCategory === cat.label;
                return (
                  <button
                    key={cat.label}
                    type="button"
                    onClick={() => onSelectCategory(cat.label)}
                    className={cn(
                      "flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-colors whitespace-nowrap",
                      isActive
                        ? "bg-black text-white"
                        : "text-black/70 hover:bg-black/5 hover:text-black",
                    )}
                  >
                    <span>{cat.icon}</span>
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative shrink-0 w-full lg:w-56">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search..."
              className="w-full pl-8 pr-7 py-1.5 text-xs bg-[var(--cy-oat-100)] border border-[var(--cy-oat-300)] rounded-full focus:outline-none focus:ring-1 focus:ring-black transition-colors"
            />
            <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none text-neutral-400">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            {searchQuery && (
              <button
                type="button"
                onClick={() => onSearchChange("")}
                className="absolute inset-y-0 right-0 pr-2.5 flex items-center text-xs text-neutral-400 hover:text-neutral-700"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}
