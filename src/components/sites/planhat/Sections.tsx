"use client";

import { useState } from "react";
import Image from "next/image";
import {
  applications,
  automate,
  awards,
  outcomes,
  platform,
} from "./data";
import { ArrowUpRight, Container, Eyebrow } from "./primitives";
import { cn } from "@/lib/utils";

/**
 * "Automate commercial processes across your teams" — heading left, standfirst
 * in a narrow right column, then a wide product still and three feature cards.
 */
export function Automate() {
  return (
    <section className="ph-section bg-white">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1fr_360px] lg:gap-16">
          <h2 className="ph-h2 max-w-[20ch]">{automate.heading}</h2>
          <p className="ph-body self-end text-[var(--ph-muted-2)]">
            {automate.body}
          </p>
        </div>

        <div className="mt-16 overflow-hidden border border-[var(--ph-line)] bg-[var(--ph-off)]">
          <video
            className="h-full w-full object-cover"
            src="/sites/planhat/automate-hero.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="none"
          />
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {automate.cards.map((card) => (
            <article
              key={card.title}
              className="flex flex-col border border-[var(--ph-line)]"
            >
              <div className="aspect-[4/3] overflow-hidden bg-[var(--ph-off)]">
                <video
                  className="h-full w-full object-cover"
                  src={card.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="none"
                />
              </div>
              <div className="flex flex-col gap-2.5 p-6">
                <h3 className="ph-h4">{card.title}</h3>
                <p className="ph-body-sm text-[var(--ph-muted-2)]">{card.body}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

/** Analyst recognition — centred heading with the two award citations. */
export function Awards() {
  return (
    <section className="ph-section bg-white">
      <Container>
        <div className="mx-auto max-w-[46rem] text-center">
          <Eyebrow>{awards.eyebrow}</Eyebrow>
          <h2 className="ph-h2 mt-6">{awards.heading}</h2>
          <p className="ph-body mx-auto mt-6 max-w-[44ch] text-[var(--ph-muted-2)]">
            {awards.body}
          </p>
        </div>

        <div className="mt-16 grid border-t border-[var(--ph-line)] md:grid-cols-2">
          {awards.items.map((item, i) => (
            <a
              key={item.source}
              href="#awards"
              className={cn(
                "group flex flex-col gap-6 border-b border-[var(--ph-line)] px-8 py-10 transition-colors hover:bg-[var(--ph-off)]",
                i === 0 && "md:border-r",
              )}
            >
              <span
                className="text-[1.6rem] leading-none"
                style={{ fontFamily: "var(--font-ph-display)" }}
              >
                {item.source}
              </span>
              <span className="ph-body max-w-[34ch] text-[var(--ph-muted-2)]">
                {item.title}
              </span>
              <ArrowUpRight className="mt-auto h-5 w-5 text-[var(--ph-muted)] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}

/**
 * The black platform section. On the live site the six layers orbit a ring that
 * rotates; this lays them out on a static ring with the active one called out.
 */
export function Platform() {
  const [active, setActive] = useState(1);
  const n = platform.layers.length;

  return (
    <section className="ph-section bg-black text-white">
      <Container>
        <div className="mx-auto max-w-[44rem] text-center">
          <Eyebrow className="text-white/55">{platform.eyebrow}</Eyebrow>
          <h2 className="ph-h2 mt-6">{platform.heading}</h2>
          <p className="ph-body mx-auto mt-6 max-w-[46ch] text-white/70">
            {platform.body}
          </p>
        </div>

        <div className="relative mx-auto mt-24 aspect-square w-full max-w-[620px]">
          <div className="absolute inset-[12%] rounded-full border border-white/20" />

          {platform.layers.map((layer, i) => {
            // start at the top and step clockwise
            const angle = (i / n) * Math.PI * 2 - Math.PI / 2;
            const x = 50 + Math.cos(angle) * 44;
            const y = 50 + Math.sin(angle) * 44;
            const on = i === active;
            return (
              <button
                key={layer}
                type="button"
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                className="absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-2.5 whitespace-nowrap"
                style={{ left: `${x}%`, top: `${y}%` }}
              >
                <span
                  className={cn(
                    "h-2.5 w-2.5 rounded-full border transition-colors",
                    on ? "border-white bg-white" : "border-white/50 bg-transparent",
                  )}
                />
                <span
                  className={cn(
                    "transition-colors",
                    on
                      ? "ph-body text-white"
                      : "ph-label text-white/55",
                  )}
                >
                  {layer}
                </span>
              </button>
            );
          })}

          <div className="absolute inset-x-[18%] top-1/2 -translate-y-1/2 text-center">
            <p className="ph-body-sm text-white/60">{platform.note}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}

/** Applications — tabbed product screenshots plus a three-column feature row. */
export function Applications() {
  const [tab, setTab] = useState(0);

  return (
    <section className="ph-section bg-white">
      <Container>
        <Eyebrow>{applications.eyebrow}</Eyebrow>

        <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div className="flex items-start gap-6">
            <h2 className="ph-h2 max-w-[16ch]">{applications.heading}</h2>
            <ArrowUpRight className="mt-2 shrink-0" />
          </div>

          <div className="flex flex-col gap-6 lg:pt-2">
            <p className="ph-body text-[var(--ph-muted-2)]">{applications.body}</p>
            <div className="flex flex-wrap gap-2">
              {applications.tabs.map((item, i) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => setTab(i)}
                  className={cn(
                    "ph-label border px-3 py-2.5 whitespace-nowrap transition-colors",
                    i === tab
                      ? "border-black bg-black text-white"
                      : "border-[var(--ph-line)] text-black hover:bg-[var(--ph-off)]",
                  )}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 overflow-hidden border border-[var(--ph-line)]">
          <Image
            key={applications.tabs[tab].image}
            src={applications.tabs[tab].image}
            alt={applications.tabs[tab].label}
            width={2400}
            height={1200}
            className="w-full object-cover"
          />
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-3 md:gap-0">
          {applications.features.map((feature, i) => (
            <div
              key={feature.title}
              className={cn(
                "flex flex-col gap-3",
                i > 0 && "md:border-l md:border-[var(--ph-line)] md:pl-10",
                i < applications.features.length - 1 && "md:pr-10",
              )}
            >
              <h3 className="ph-h4">{feature.title}</h3>
              <p className="ph-body-sm max-w-[38ch] text-[var(--ph-muted-2)]">
                {feature.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/** The second black section: outcome metrics and the two service cards. */
export function Outcomes() {
  return (
    <section className="ph-section bg-black text-white">
      <Container>
        <div className="mx-auto max-w-[46rem] text-center">
          <Eyebrow className="text-white/55">{outcomes.eyebrow}</Eyebrow>
          <h2 className="ph-h2 mt-6">
            {outcomes.headingA}
            <br />
            {outcomes.headingB}
          </h2>
          <p className="ph-body mx-auto mt-6 max-w-[46ch] text-white/70">
            {outcomes.body}
          </p>
        </div>

        <div className="mt-20 grid border-t border-white/20 sm:grid-cols-2 lg:grid-cols-4">
          {outcomes.metrics.map((metric, i) => (
            <div
              key={metric.label}
              className={cn(
                "flex flex-col gap-3 border-b border-white/20 px-6 py-10",
                i < outcomes.metrics.length - 1 && "lg:border-r",
              )}
            >
              <span
                className="text-[3.25rem] leading-none"
                style={{ fontFamily: "var(--font-ph-display)", letterSpacing: "-0.04em" }}
              >
                {metric.value}
                <span className="text-white/50">{metric.unit}</span>
              </span>
              <span className="ph-body-sm text-white/70">{metric.label}</span>
            </div>
          ))}
        </div>

        <div className="grid border-b border-white/20 sm:grid-cols-2">
          {outcomes.groups.map((group, i) => (
            <div
              key={group}
              className={cn(
                "ph-body px-6 py-5 text-center",
                i === 0 && "sm:border-r sm:border-white/20",
              )}
            >
              {group}
            </div>
          ))}
        </div>

        <div className="mt-20 grid border border-white/20 md:grid-cols-2">
          {outcomes.cards.map((card, i) => (
            <a
              key={card.title}
              href="#services"
              className={cn(
                "group flex flex-col gap-4 p-10 transition-colors hover:bg-white/[0.04]",
                i === 0 && "md:border-r md:border-white/20",
              )}
            >
              <Eyebrow className="text-white/50">{card.eyebrow}</Eyebrow>
              <div className="mt-4 flex items-start justify-between gap-6">
                <h3
                  className="text-[1.75rem] leading-tight"
                  style={{ fontFamily: "var(--font-ph-display)", letterSpacing: "-0.03em" }}
                >
                  {card.title}
                </h3>
                <ArrowUpRight className="shrink-0 text-white/70 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
              <p className="ph-body-sm max-w-[34ch] text-white/70">{card.body}</p>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
