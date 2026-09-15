"use client";

import { useState } from "react";
import Link from "next/link";
import { LivestreamItem } from "./types";
import { cn } from "@/lib/utils";

interface CardProps {
  item: LivestreamItem;
}

export function LivestreamsCard({ item }: CardProps) {
  const [calendarSaved, setCalendarSaved] = useState(false);
  const isReplay = item.status === "replay";

  const handleCalendar = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCalendarSaved(true);
    setTimeout(() => setCalendarSaved(false), 2500);
  };

  return (
    <div className="group relative flex flex-col h-full rounded-2xl bg-[var(--cy-oat-100)] border border-[var(--cy-oat-300)] overflow-hidden transition-all duration-300 hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] hover:-translate-y-1">
      {/* Thumbnail */}
      <Link
        href={`/clay/livestreams/${item.slug}`}
        className="relative block w-full aspect-[16/9] bg-neutral-200 overflow-hidden"
      >
        <img
          src={item.thumbnail}
          alt={item.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            // Fallback for missing images
            (e.target as HTMLImageElement).src =
              "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/6aa1bc56c34f8a1ffd60cf8e_marektingdemothumb.png";
          }}
        />
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
      </Link>

      {/* Card Body */}
      <div className="flex flex-col flex-1 p-5 justify-between">
        <div>
          {/* Status & Date Pills */}
          <div className="flex flex-wrap items-center gap-1.5 mb-3.5">
            {/* Status pill */}
            <span
              className={cn(
                "px-2.5 py-1 rounded-md text-[0.72rem] font-bold uppercase tracking-wider",
                isReplay
                  ? "bg-[#c4eb27] text-neutral-900"
                  : item.status === "today"
                  ? "bg-rose-500 text-white"
                  : "bg-black text-white",
              )}
            >
              {item.badgeText || (isReplay ? "REPLAY" : "UPCOMING")}
            </span>

            {/* Date pill */}
            {item.date && (
              <span className="px-2.5 py-1 rounded-md text-[0.72rem] font-medium uppercase tracking-wider bg-black/5 text-black/75">
                {item.date}
              </span>
            )}

            {/* Time pill */}
            {item.time && !isReplay && (
              <span className="px-2.5 py-1 rounded-md text-[0.72rem] font-medium uppercase tracking-wider bg-black/5 text-black/75">
                {item.time}
              </span>
            )}
          </div>

          {/* Title */}
          <Link href={`/clay/livestreams/${item.slug}`}>
            <h3 className="text-lg font-medium text-black leading-snug tracking-tight mb-2 line-clamp-2 group-hover:text-neutral-700 transition-colors">
              {item.title}
            </h3>
          </Link>

          {/* Description */}
          {item.description && (
            <p className="text-xs sm:text-[0.84rem] text-black/60 leading-relaxed line-clamp-2 mb-4">
              {item.description}
            </p>
          )}
        </div>

        {/* Action Row */}
        <div className="pt-3 border-t border-[var(--cy-oat-200)] flex items-center justify-between gap-2 mt-auto">
          <Link
            href={`/clay/livestreams/${item.slug}`}
            className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-black text-white text-xs font-semibold hover:bg-neutral-800 transition-colors shadow-sm"
          >
            {isReplay ? "Watch Now" : "Register"}
          </Link>

          {/* Add to calendar button (for upcoming) or Bookmark button */}
          <button
            type="button"
            onClick={handleCalendar}
            title={calendarSaved ? "Saved to calendar!" : "Add to calendar"}
            aria-label="Add to calendar"
            className={cn(
              "p-2 rounded-lg border transition-all flex items-center justify-center text-xs",
              calendarSaved
                ? "bg-emerald-100 text-emerald-800 border-emerald-300"
                : "bg-white text-black/70 border-[var(--cy-oat-300)] hover:bg-neutral-50 hover:text-black",
            )}
          >
            {calendarSaved ? (
              <span className="text-[0.72rem] font-semibold px-1">Added!</span>
            ) : (
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M19 4H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" />
                <path d="M16 2v4" />
                <path d="M8 2v4" />
                <path d="M3 10h18" />
                <path d="M12 14v6" />
                <path d="M9 17h6" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
