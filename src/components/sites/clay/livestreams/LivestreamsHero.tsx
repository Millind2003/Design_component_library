"use client";

import Link from "next/link";
import { featuredLivestream } from "./data";
import { Container } from "../primitives";

export function LivestreamsHero() {
  return (
    <section className="relative overflow-hidden bg-[var(--cy-oat-100)] pt-24 pb-12 sm:pt-28 md:pt-32">
      {/* Top Banner */}
      <div className="absolute top-0 inset-x-0 bg-[#2b0827] text-[#fbf6f0] py-2 px-4 z-20 text-xs sm:text-sm font-medium">
        <Container>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="font-bold tracking-wider uppercase font-cy-mono text-[#ff80bf] text-xs">
                SCULPT
              </span>
              <span className="text-[#f1e6f1] truncate">
                The most creative minds in GTM. October 8, San Francisco
              </span>
            </div>
            <a
              href="https://www.sculpt.clay.com"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-1.5 shrink-0 text-[#ff80bf] hover:text-white transition-colors"
            >
              <span className="font-semibold uppercase text-xs tracking-wider">
                GET TICKETS
              </span>
              <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                →
              </span>
            </a>
          </div>
        </Container>
      </div>

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Title & Subtitle */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="inline-flex items-center self-start px-3.5 py-1 rounded-full border border-black/15 bg-black/5 text-[0.82rem] font-medium text-black/80 mb-5">
              Streaming weekly
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-[-0.03em] text-black leading-[1.08] mb-4">
              GTM livestreams
            </h1>
            <p className="text-base sm:text-lg text-black/70 leading-relaxed max-w-lg">
              Clay livestreams are live walkthroughs of real workflows, with space
              to ask questions as we go. All times are ET.
            </p>
          </div>

          {/* Right Column: Featured Livestream Card */}
          <div className="lg:col-span-7">
            <div className="relative group rounded-2xl overflow-hidden bg-[#0d2a1a] text-white shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-emerald-950/40">
              <div className="grid grid-cols-1 md:grid-cols-12 min-h-[340px]">
                {/* Text Content */}
                <div className="p-6 sm:p-8 md:col-span-7 flex flex-col justify-between z-10">
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5 mb-3">
                      <span className="px-2.5 py-0.5 rounded-full text-[0.68rem] font-bold tracking-wider uppercase bg-[#e11d48] text-white">
                        LIVESTREAM
                      </span>
                      <span className="font-cy-mono text-[0.68rem] uppercase tracking-wider text-emerald-200/90">
                        {featuredLivestream.date.toUpperCase()}, 12PM ET
                      </span>
                    </div>

                    <div className="text-[0.78rem] font-medium text-emerald-300/80 mb-1">
                      {featuredLivestream.category}
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-white leading-snug">
                      {featuredLivestream.title}
                    </h2>
                  </div>

                  {/* Speaker Details */}
                  {featuredLivestream.speakers[0] && (
                    <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-3">
                      {featuredLivestream.speakers[0].avatar ? (
                        <img
                          src={featuredLivestream.speakers[0].avatar}
                          alt={featuredLivestream.speakers[0].name}
                          className="w-11 h-11 rounded-xl object-cover ring-2 ring-emerald-500/30"
                        />
                      ) : (
                        <div className="w-11 h-11 rounded-xl bg-emerald-700/60 flex items-center justify-center font-bold text-sm">
                          TS
                        </div>
                      )}
                      <div>
                        <div className="text-sm font-medium text-white">
                          {featuredLivestream.speakers[0].name}
                        </div>
                        <div className="text-xs text-emerald-300/70">
                          {featuredLivestream.speakers[0].role} •{" "}
                          <span className="uppercase font-semibold">
                            {featuredLivestream.speakers[0].company}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Clay 3D Claymation Artwork & Branding */}
                <div className="relative md:col-span-5 bg-gradient-to-br from-[#103823] to-[#091b11] p-6 flex flex-col justify-between items-end overflow-hidden">
                  {/* Clay logo */}
                  <div className="flex items-center gap-1.5 z-10 self-end">
                    <div className="w-4 h-4 rounded-full bg-gradient-to-tr from-cyan-400 via-amber-300 to-rose-400" />
                    <span className="font-semibold text-sm tracking-tight text-white/90">
                      clay
                    </span>
                  </div>

                  {/* Sculptural geometric 3D shapes */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/6 pointer-events-none opacity-90 transition-transform duration-500 group-hover:scale-105">
                    <svg
                      width="240"
                      height="240"
                      viewBox="0 0 200 200"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M160 30C120 10 70 40 50 80C30 120 50 170 90 190C130 210 180 170 190 130C200 90 200 50 160 30Z"
                        fill="#84cc16"
                        opacity="0.9"
                      />
                      <path
                        d="M80 60C60 80 70 120 100 140C130 160 160 140 170 110C180 80 160 50 130 40C100 30 100 40 80 60Z"
                        fill="#38bdf8"
                      />
                      <path
                        d="M120 80C105 85 95 105 105 125C115 145 135 150 150 140C165 130 165 110 155 95C145 80 135 75 120 80Z"
                        fill="#2563eb"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Action Bottom Bar */}
              <div className="bg-black/30 backdrop-blur-sm px-6 py-3.5 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-emerald-200/70 hidden sm:inline">
                  Interactive live demo + open Q&A session
                </span>
                <Link
                  href={`/clay/livestreams/${featuredLivestream.slug}`}
                  className="ml-auto inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-black font-medium text-xs sm:text-sm hover:bg-neutral-100 transition-colors shadow-sm"
                >
                  <span>Register for upcoming livestream</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
