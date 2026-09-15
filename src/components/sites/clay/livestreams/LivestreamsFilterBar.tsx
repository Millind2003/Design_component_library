"use client";

import { useRef } from "react";
import { categoryTabs } from "./data";
import { Container } from "../primitives";
import { cn } from "@/lib/utils";

interface FilterBarProps {
  activeTab: string;
  onSelectTab: (tab: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  totalCount: number;
}

export function LivestreamsFilterBar({
  activeTab,
  onSelectTab,
  searchQuery,
  onSearchChange,
  totalCount,
}: FilterBarProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const offset = direction === "left" ? -240 : 240;
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <div className="sticky top-16 z-30 bg-white/95 backdrop-blur-md border-b border-[var(--cy-oat-200)] py-3 transition-shadow shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
      <Container>
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
          {/* Scrollable Category Filter Pills */}
          <div className="relative flex-1 min-w-0 flex items-center">
            <button
              type="button"
              onClick={() => handleScroll("left")}
              aria-label="Scroll categories left"
              className="hidden sm:flex shrink-0 w-7 h-7 items-center justify-center rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-600 transition-colors mr-1 z-10"
            >
              ‹
            </button>

            <div
              ref={scrollRef}
              className="flex items-center gap-1.5 overflow-x-auto no-scrollbar scroll-smooth py-1 px-0.5"
            >
              {categoryTabs.map((tab) => {
                const isActive = activeTab === tab;
                return (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => onSelectTab(tab)}
                    className={cn(
                      "shrink-0 px-3.5 py-1.5 rounded-full text-[0.84rem] font-medium transition-all duration-200 whitespace-nowrap",
                      isActive
                        ? "bg-black text-white shadow-sm"
                        : "bg-[var(--cy-oat-100)] text-black/75 hover:bg-[var(--cy-oat-200)] hover:text-black",
                    )}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => handleScroll("right")}
              aria-label="Scroll categories right"
              className="hidden sm:flex shrink-0 w-7 h-7 items-center justify-center rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-600 transition-colors ml-1 z-10"
            >
              ›
            </button>
          </div>

          {/* Search Box */}
          <div className="relative shrink-0 w-full md:w-64">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-400">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search livestreams..."
              className="w-full pl-9 pr-8 py-1.5 text-xs sm:text-sm bg-[var(--cy-oat-100)] border border-[var(--cy-oat-200)] rounded-full focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-colors"
            />
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
