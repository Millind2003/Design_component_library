"use client";

import { useState } from "react";
import Image from "next/image";
import { channels, img } from "./assets";
import { announcement, hero, heroCtas, segments } from "./data";
import { Button, Heading } from "./primitives";
import { cn } from "@/lib/utils";

/**
 * The hero is laid directly onto the 32-column page grid: an announcement bar
 * across `col-[2/32]`, the headline in `col-[2/17]` with the standfirst beside
 * it in `col-[17/32]`, and a full-width blue panel across `row-[6/19]` holding
 * a simulated product window.
 */
export function Hero() {
  return (
    <section
      id="top"
      className="mv-page-grid max-xl:mv-page-grid-invisible relative text-black"
    >
      {/* the hairlines the original draws by hand over the grid */}
      <div className="pointer-events-none absolute inset-0 z-[2] hidden border-b border-r border-[var(--mv-gridline)] xl:block">
        {[1, 2, 4, 5, 18].map((row) => (
          <span
            key={row}
            className="absolute left-[var(--mv-cell)] h-px w-[calc(var(--mv-cell)*30)] bg-[var(--mv-gridline)]"
            style={{ top: `calc(var(--mv-cell) * ${row})` }}
          />
        ))}
        <span className="absolute left-[var(--mv-cell)] top-[var(--mv-cell)] h-[calc(var(--mv-cell)*3)] w-px bg-[var(--mv-gridline)]" />
        <span className="absolute left-[calc(var(--mv-cell)*16)] top-[calc(var(--mv-cell)*2)] h-[calc(var(--mv-cell)*2)] w-px bg-[var(--mv-gridline)]" />
        <span className="absolute left-[calc(var(--mv-cell)*31)] top-[var(--mv-cell)] h-[calc(var(--mv-cell)*3)] w-px bg-[var(--mv-gridline)]" />
        <span className="absolute left-[var(--mv-cell)] top-[calc(var(--mv-cell)*5)] h-[calc(var(--mv-cell)*13)] w-px bg-[var(--mv-gridline)]" />
        <span className="absolute left-[calc(var(--mv-cell)*31)] top-[calc(var(--mv-cell)*5)] h-[calc(var(--mv-cell)*13)] w-px bg-[var(--mv-gridline)]" />
      </div>

      {/* announcement */}
      <div className="col-[2/32] row-[1/2] flex items-center justify-center border-l border-t border-[var(--mv-gridline)] bg-white max-xl:hidden">
        <a
          href="#platform"
          className="flex h-[70%] w-full max-w-[calc(100%-var(--mv-cell)*0.5)] items-center justify-center gap-1 bg-[var(--mv-blue)] px-[calc(var(--mv-cell)*0.25)] tracking-[-0.01em] text-white transition-colors hover:text-white/80"
        >
          <span className="font-medium opacity-60">{announcement.eyebrow}</span>
          <span>{announcement.text}</span>
        </a>
      </div>

      {/* headline */}
      <div className="z-[1] col-[2/17] row-[3/5] flex items-center bg-white pl-[calc(var(--mv-cell)*0.72)] pr-[calc(var(--mv-cell)*0.45)] max-xl:border-b max-xl:border-[var(--mv-gridline)] max-xl:px-5 max-xl:py-10">
        <Heading
          as="h1"
          text={hero.heading}
          className="whitespace-nowrap text-balance text-[var(--mv-blue)] max-xl:whitespace-normal max-xl:!text-[36px] xl:!text-[calc(var(--mv-cell)*1.15)]"
        />
      </div>

      {/* standfirst */}
      <div className="z-[1] col-[17/32] row-[3/5] flex items-center bg-white pl-[calc(var(--mv-cell)*0.85)] pr-[calc(var(--mv-cell)*0.5)] max-xl:px-5 max-xl:py-4">
        <div className="mv-body text-pretty text-[16px] lg:text-[20px] xl:max-w-[calc(var(--mv-cell)*10)] xl:!text-[clamp(1rem,calc(var(--mv-cell)*0.265),1.1rem)]">
          {hero.subheading}
        </div>
      </div>

      <HeroDemo />
    </section>
  );
}

/** The blue panel: category picker, simulated product window, and a CTA. */
function HeroDemo() {
  const [category, setCategory] = useState(1);
  const [active, setActive] = useState(0);
  const [overlay, setOverlay] = useState(false);

  return (
    <div className="relative isolate z-[1] col-[2/32] row-[6/19] grid grid-cols-1 grid-rows-[auto_minmax(0,1fr)_auto] max-xl:flex max-xl:flex-col max-xl:border-t max-xl:border-[var(--mv-gridline)] max-xl:pb-16">
      <div className="absolute inset-0 z-[1] bg-[var(--mv-blue)]">
        <Image
          src={img.bluePainting}
          alt=""
          fill
          priority
          className="object-cover object-bottom"
        />
      </div>

      {/* category picker */}
      <div className="relative z-[2] row-[1/2] flex flex-col items-center justify-center gap-5 px-4 max-xl:order-first max-xl:items-start max-xl:px-5 max-xl:pb-8 max-xl:pt-12 max-xl:text-left xl:gap-3">
        <p className="mb-1 text-[14px] font-medium !leading-none text-white max-xl:text-[18px] xl:uppercase">
          {hero.prompt}
        </p>

        <div className="scrollbar-hide flex flex-nowrap items-center justify-center gap-1.5 max-xl:-mx-5 max-xl:w-[calc(100%+2.5rem)] max-xl:justify-start max-xl:overflow-x-auto max-xl:px-5 lg:gap-3 xl:flex-wrap">
          {hero.categories.map((label, i) => (
            <button
              key={`${label}-${i}`}
              type="button"
              onClick={() => setCategory(i)}
              className={cn(
                "flex h-[42px] shrink-0 items-center gap-2.5 whitespace-nowrap rounded-full border px-5 transition-colors",
                category === i
                  ? "border-black bg-white text-black"
                  : "border-white/40 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20",
              )}
            >
              <span
                className={cn(
                  "h-2.5 w-2.5 shrink-0 rounded-full",
                  category === i ? "bg-black" : "bg-white",
                )}
              />
              <span className="mv-body text-[12px] font-medium uppercase">
                {label}
              </span>
            </button>
          ))}

          <button
            type="button"
            className="flex h-[42px] shrink-0 cursor-text items-center gap-2.5 whitespace-nowrap rounded-full border border-white/40 bg-white/10 px-5 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
          >
            <span className="h-2.5 w-2.5 shrink-0 animate-pulse rounded-full bg-white" />
            <span className="mv-body text-[12px] font-medium uppercase">
              <span className="md:hidden">{hero.custom.label}</span>
              <span className="hidden md:inline">{hero.custom.placeholder}</span>
            </span>
          </button>
        </div>
      </div>

      {/* simulated product window */}
      <div className="relative z-[2] row-[2/3] h-full min-h-0 px-[calc(var(--mv-cell)*0.5)] pb-[calc(var(--mv-cell)*0.35)] max-xl:mx-[var(--mv-gutter)] max-xl:px-0 max-xl:h-[450px]">
        <div className="relative h-full overflow-hidden bg-white max-xl:overflow-y-auto max-xl:border max-xl:border-[var(--mv-gridline)]">
          <ProductWindow active={active} onSelect={setActive} />

          {/* "Discover your audience" overlay */}
          <div
            className={cn(
              "absolute inset-0 z-40 flex items-center justify-center bg-[var(--mv-blue)]/90 transition-opacity duration-300",
              overlay ? "opacity-100" : "pointer-events-none opacity-0",
            )}
          >
            <div className="relative grid h-[min(calc(var(--mv-cell)*6),78%)] w-[min(calc(var(--mv-cell)*18),82vw)] grid-cols-[calc(var(--mv-cell)*2)_1fr_calc(var(--mv-cell)*2)] grid-rows-[var(--mv-cell)_1fr_var(--mv-cell)] overflow-hidden rounded-md border border-black bg-white shadow-[0_18px_70px_rgba(0,0,0,0.24)] max-xl:h-[min(520px,78%)] max-xl:w-[86vw] max-xl:grid-cols-[1rem_1fr_1rem] max-xl:grid-rows-[3.25rem_1fr_3.25rem]">
              <span className="pointer-events-none absolute left-[calc(var(--mv-cell)*2)] top-0 h-full w-px bg-black/35 max-xl:left-4" />
              <span className="pointer-events-none absolute right-[calc(var(--mv-cell)*2)] top-0 h-full w-px bg-black/35 max-xl:right-4" />
              <span className="pointer-events-none absolute left-0 top-[var(--mv-cell)] h-px w-full bg-black/35 max-xl:top-[3.25rem]" />
              <span className="pointer-events-none absolute bottom-[var(--mv-cell)] left-0 h-px w-full bg-black/35 max-xl:bottom-[3.25rem]" />

              <button
                type="button"
                onClick={() => setOverlay(false)}
                className="relative z-10 col-[1/2] row-[1/2] flex items-center justify-center text-black transition-colors hover:text-black/60 max-xl:col-[1/3] max-xl:justify-start max-xl:pl-5"
              >
                <span className="text-[clamp(1rem,calc(var(--mv-cell)*0.26),1.15rem)] leading-none">
                  &larr; Back
                </span>
              </button>

              <div className="relative z-10 col-[2/3] row-[2/3] flex flex-col items-center justify-center gap-8 px-[calc(var(--mv-cell)*0.7)] text-center max-xl:px-6">
                <h3 className="mv-heading block w-full min-w-0 text-balance text-[32px] text-black max-xl:!text-[clamp(2.5rem,11vw,4rem)] lg:text-[48px]">
                  {heroCtas.discover}
                </h3>
                <div className="grid w-full max-w-[calc(var(--mv-cell)*10)] grid-cols-2 gap-6 max-xl:grid-cols-1">
                  <Button href="#try" variant="white" className="h-[calc(var(--mv-cell)*0.95)] min-h-12 w-full max-xl:h-12">
                    {heroCtas.account}
                  </Button>
                  <Button href="#demo" variant="blue" className="h-[calc(var(--mv-cell)*0.95)] min-h-12 w-full max-xl:h-12">
                    {heroCtas.demo}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA below the window */}
      <div className="relative z-[2] row-[3/4] flex items-center max-xl:absolute max-xl:bottom-0 max-xl:left-0 max-xl:right-0 max-xl:translate-y-1/2 max-xl:justify-center max-xl:px-[var(--mv-gutter)] xl:px-[calc(var(--mv-cell)*3)]">
        <button
          type="button"
          onClick={() => setOverlay(true)}
          className="inline-flex w-full items-center justify-center border border-[var(--mv-gridline)] bg-white px-8 text-[14px] font-medium !leading-none text-black transition-colors hover:bg-[var(--mv-grey-light)] max-xl:max-w-[400px] max-xl:py-3 lg:text-[16px] xl:h-[var(--mv-cell)]"
        >
          {heroCtas.try}
        </button>
      </div>
    </div>
  );
}

/**
 * The white window: a fixed image rail, a vertically snapping list of scored
 * segments, and a right rail of analysis cards.
 */
function ProductWindow({
  active,
  onSelect,
}: {
  active: number;
  onSelect: (i: number) => void;
}) {
  const segment = segments[active];

  return (
    <div className="relative h-full w-full">
      {/* desktop */}
      <div className="hidden h-full w-full border-r border-black/10 xl:flex">
        <div className="w-[calc(var(--mv-cell)*5)] shrink-0 overflow-hidden border-b border-l border-t border-black/10 p-[calc(var(--mv-cell)*0.35+4px)]">
          <div className="relative h-full w-full overflow-hidden">
            <Image src={img.hotel} alt="Luxury travel" fill className="object-cover" />
          </div>
        </div>

        <div className="flex h-full flex-1">
          <div className="relative flex-1 overflow-hidden border-l border-t border-black/10">
            <div className="scrollbar-hide absolute inset-0 snap-y snap-mandatory overflow-y-auto">
              {segments.map((s, i) => (
                <div key={s.name} className="flex h-full snap-start flex-col">
                  <div className="relative flex h-[85%] flex-col justify-center gap-5 border-b border-black/10 p-[calc(var(--mv-cell)*0.45)]">
                    <div className="flex flex-col gap-2">
                      <div className="mv-body text-[12px] uppercase text-black/40">
                        Segment {i + 1}
                      </div>
                      <button
                        type="button"
                        onClick={() => onSelect(i)}
                        className="inline-flex h-10 w-max items-center gap-3 rounded-full border border-black bg-white px-4 uppercase text-black transition-colors duration-200"
                      >
                        <span className="h-3 w-3 shrink-0 bg-black" />
                        <span className="mv-body whitespace-nowrap text-[12px] uppercase">
                          {s.name}
                        </span>
                      </button>
                    </div>

                    <div className="flex gap-10">
                      <Metric label="Score" value={String(s.score)} suffix="/100" accent />
                      <Metric label="Audience Size" value={s.audience} />
                      <Metric label="Average Wealth" value={s.wealth} />
                    </div>

                    <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-full w-[calc(var(--mv-cell)*7)] shrink-0 overflow-hidden border-l border-t border-black/10">
            <div className="scrollbar-hide absolute inset-0 flex flex-col gap-3 overflow-y-auto p-[calc(var(--mv-cell)*0.45)] pb-[calc(var(--mv-cell)*0.9)]">
              <AnalysisCard />
              <BriefCard hook={segment.hook} brief={segment.brief} />
            </div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[calc(var(--mv-cell)*1.2)] bg-gradient-to-t from-white via-white/80 to-transparent" />
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="flex flex-col bg-white pb-8 xl:hidden">
        <div className="relative h-48 w-full overflow-hidden border-b border-black/10">
          <Image src={img.hotel} alt="Luxury travel" fill className="object-cover" />
        </div>

        <div className="flex items-center justify-between border-b border-black/10 px-5 py-4">
          <button
            type="button"
            onClick={() => onSelect(Math.max(0, active - 1))}
            className="p-0 text-black/40 transition-colors hover:text-black disabled:opacity-20"
            disabled={active === 0}
            aria-label="Previous segment"
          >
            &larr;
          </button>
          <div className="mv-body text-[12px] uppercase leading-none text-black/40">
            Segment {active + 1} of {segments.length}
          </div>
          <button
            type="button"
            onClick={() => onSelect(Math.min(segments.length - 1, active + 1))}
            className="p-0 text-black/40 transition-colors hover:text-black disabled:opacity-20"
            disabled={active === segments.length - 1}
            aria-label="Next segment"
          >
            &rarr;
          </button>
        </div>

        <div className="flex flex-col border-b border-black/10">
          {segments.map((s, i) => (
            <button
              key={s.name}
              type="button"
              onClick={() => onSelect(i)}
              className={cn(
                "flex items-center gap-3 border-b border-black/10 px-5 py-3 text-left transition-colors last:border-b-0",
                i === active && "bg-black/[0.03]",
              )}
            >
              <span
                className={cn(
                  "h-2 w-2 shrink-0 rounded-full transition-colors",
                  i === active ? "bg-black" : "bg-black/20",
                )}
              />
              <span
                className={cn(
                  "mv-body text-[12px] uppercase transition-colors",
                  i === active ? "text-black" : "text-black/35",
                )}
              >
                {s.name}
              </span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-3 divide-x divide-black/10 border-b border-black/10">
          <div className="px-4 py-4">
            <Metric label="Audience" value={segment.audience} />
          </div>
          <div className="px-4 py-4">
            <Metric label="Score" value={String(segment.score)} />
          </div>
          <div className="px-4 py-4">
            <Metric label="Avg Wealth" value={segment.wealth} />
          </div>
        </div>

        <div className="border-b border-black/10 px-5 py-4">
          <div className="mv-body mb-2 text-[12px] uppercase text-black/40">
            Creative Brief
          </div>
          <div className="mv-body text-[12px] text-black/60">{segment.brief}</div>
        </div>
      </div>
    </div>
  );
}

function Metric({
  label,
  value,
  suffix,
  accent,
}: {
  label: string;
  value: string;
  suffix?: string;
  accent?: boolean;
}) {
  return (
    <div className="shrink-0 leading-none">
      <div className="mv-body mb-1.5 text-[12px] uppercase text-black/40">
        {label}
      </div>
      <div className="flex items-baseline gap-0.5 leading-none">
        <span
          className={cn(
            "mv-figure text-[clamp(1.4rem,2vw,2rem)] tabular-nums",
            accent ? "text-[var(--mv-blue)]" : "text-black/45",
          )}
        >
          {value}
        </span>
        {suffix ? (
          <span className="mv-figure text-[clamp(0.65rem,1vw,0.85rem)] text-black/30">
            {suffix}
          </span>
        ) : null}
      </div>
    </div>
  );
}

/** Channel icons plus the location / engagement thumbnails. */
function AnalysisCard() {
  return (
    <div className="flex flex-col gap-1.5 rounded border border-black/10 p-[calc(var(--mv-cell)*0.2)]">
      <div className="flex items-center justify-between">
        <div className="mv-body text-[12px] uppercase text-black/40">
          Campaign Analysis
        </div>
        <div className="-mt-1 flex items-center gap-1">
          {channels.map((channel) => (
            <div key={channel.name} className="group relative">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-black/10 bg-white">
                <Image
                  src={channel.src}
                  alt={channel.name}
                  width={12}
                  height={12}
                  className="shrink-0"
                />
              </span>
              <div className="pointer-events-none absolute bottom-full left-1/2 z-50 mb-0.5 -translate-x-1/2 opacity-0 transition-opacity duration-150 group-hover:opacity-100">
                <div className="whitespace-nowrap rounded bg-black/80 px-2 py-1 text-[10px] leading-none text-white">
                  {channel.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-2">
        <Thumb label="Location">
          <Image src={img.map} alt="Map" width={160} height={120} className="object-contain" />
        </Thumb>
        <Thumb label="Engagement">
          <svg viewBox="0 0 60 45" className="h-full w-full p-2" aria-hidden="true">
            <path
              d="M4 34 L18 22 L30 28 L44 10 L56 16"
              fill="none"
              stroke="var(--mv-blue)"
              strokeWidth="1.5"
            />
          </svg>
        </Thumb>
      </div>
    </div>
  );
}

function Thumb({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-1 flex-col items-center gap-1.5">
      <div className="flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded border border-black/[0.06] bg-black/[0.03]">
        {children}
      </div>
      <div className="mv-body text-[10px] text-black/35">{label}</div>
    </div>
  );
}

function BriefCard({ hook, brief }: { hook: string; brief: string }) {
  return (
    <div className="flex flex-col gap-2 rounded border border-black/10 p-[calc(var(--mv-cell)*0.2)]">
      <div className="grid grid-cols-[5rem_1fr] items-start gap-x-3">
        <div className="mv-body pt-[1px] text-[12px] uppercase text-black/40">Hook</div>
        <div className="mv-body text-[12px] italic leading-[1.4] text-black/70">
          &ldquo;{hook}&rdquo;
        </div>
      </div>
      <div className="grid grid-cols-[5rem_1fr] items-start gap-x-3 border-t border-black/[0.06] pt-2">
        <div className="mv-body pt-[1px] text-[12px] uppercase text-black/40">
          Creative Brief
        </div>
        <div className="mv-body text-[12px] leading-[1.4] text-black/60">{brief}</div>
      </div>
    </div>
  );
}
