"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { hero, logoRail, nav } from "./data";
import { Check, Container, Pill, Wordmark } from "./primitives";
import { cn } from "@/lib/utils";

const SCENE_MS = 7000;

/** Slim top bar; it gains a hairline and a solid ground once the page moves. */
export function Header() {
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        stuck
          ? "border-b border-[var(--pl-line)] bg-[var(--pl-offwhite)]/90 backdrop-blur"
          : "border-b border-transparent",
      )}
      style={{ height: "var(--pl-header-height)" }}
    >
      <Container className="flex h-full items-center">
        <nav className="hidden flex-1 items-center gap-8 md:flex">
          {nav.links.map((link) => (
            <button
              key={link}
              type="button"
              className="pl-eyebrow pl-underline text-[var(--pl-black)]"
            >
              {link}
            </button>
          ))}
        </nav>

        <a href="#top" className="md:mx-auto">
          <Wordmark />
        </a>

        <div className="ml-auto hidden flex-1 justify-end md:flex">
          <a
            href={nav.cta.href}
            className="pl-eyebrow flex items-center gap-2 rounded-full border border-[var(--pl-black)] px-4 py-2 transition-colors duration-[260ms] hover:bg-[var(--pl-black)] hover:text-white"
            style={{ transitionTimingFunction: "var(--pl-ease-out)" }}
          >
            {nav.cta.label}
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="ml-auto flex h-8 w-8 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span className="block h-px w-5 bg-current" />
          <span className="block h-px w-5 bg-current" />
        </button>
      </Container>

      {/* the menu opens with the site's grid-template-rows accordion */}
      <div
        className="pl-collapse border-b border-[var(--pl-line)] bg-[var(--pl-offwhite)] md:hidden"
        data-open={open}
      >
        <div>
          <Container className="py-2">
            {[...nav.links, nav.cta.label].map((label) => (
              <a
                key={label}
                href="#top"
                onClick={() => setOpen(false)}
                className="pl-body block border-b border-[var(--pl-line)] py-3 last:border-0"
              >
                {label}
              </a>
            ))}
          </Container>
        </div>
      </div>
    </header>
  );
}

/**
 * Hero. Copy sits above a wide media stage that cycles through four looping
 * clips; each scene cross-fades and re-runs its feed of chat bubbles, which
 * stagger in on the site's ease-out curve.
 */
export function Hero() {
  const [scene, setScene] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setScene((s) => (s + 1) % hero.scenes.length),
      SCENE_MS,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section id="top" className="bg-[var(--pl-offwhite)] pt-[var(--pl-header-height)]">
      <Container className="grid gap-10 py-16 lg:grid-cols-[1.35fr_1fr] lg:gap-16 lg:py-24">
        <h1 className="pl-h1 max-w-[940px]" data-reveal="">
          {hero.heading}
        </h1>

        <div className="flex flex-col items-start gap-7 lg:pt-3" data-reveal="" style={{ "--pl-delay": "80ms" } as React.CSSProperties}>
          <p className="pl-body max-w-[46ch] text-[var(--pl-black)]/80">
            {hero.body}
          </p>
          <Pill href={hero.cta.href} variant="dark">
            {hero.cta.label}
          </Pill>
        </div>
      </Container>

      <Container className="pb-16 lg:pb-24">
        <div
          className="relative aspect-[16/9] w-full overflow-hidden bg-[var(--pl-black)]"
          style={{ borderRadius: "var(--pl-radius)" }}
          data-reveal="slow"
        >
          {hero.scenes.map((s, i) => (
            <video
              key={s.key}
              src={s.video}
              autoPlay
              loop
              muted
              playsInline
              preload={i === 0 ? "auto" : "none"}
              className={cn(
                "absolute inset-0 h-full w-full object-cover transition-opacity duration-[1200ms]",
                i === scene ? "opacity-100" : "opacity-0",
              )}
              style={{ transitionTimingFunction: "var(--pl-ease-out)" }}
            />
          ))}

          {/* veil, so the bubbles stay legible over any scene */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/55 via-black/10 to-black/40" />

          {/* the feed re-mounts per scene, so its stagger replays */}
          <div
            key={scene}
            className="absolute inset-0 flex flex-col justify-end gap-3 p-5 sm:p-8 md:max-w-[540px]"
          >
            {hero.feed.map((bubble, i) => (
              <div
                key={`${scene}-${i}`}
                className="pl-card-in"
                style={{ "--pl-delay": `${400 + i * 700}ms` } as React.CSSProperties}
              >
                <Bubble bubble={bubble} />
              </div>
            ))}
          </div>

          {/* scene indicator */}
          <div className="absolute bottom-5 right-5 flex gap-1.5">
            {hero.scenes.map((s, i) => (
              <button
                key={s.key}
                type="button"
                aria-label={`Scene ${i + 1}`}
                onClick={() => setScene(i)}
                className={cn(
                  "h-1 rounded-full transition-all duration-[420ms]",
                  i === scene ? "w-6 bg-white" : "w-2 bg-white/45",
                )}
                style={{ transitionTimingFunction: "var(--pl-ease-out)" }}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function Bubble({ bubble }: { bubble: (typeof hero.feed)[number] }) {
  const surface =
    "rounded-[10px] border border-white/12 bg-black/45 p-4 text-white backdrop-blur-md";

  if (bubble.kind === "actions") {
    return (
      <div className={cn(surface, "max-w-[300px]")}>
        <strong className="pl-eyebrow block text-white/70">{bubble.title}</strong>
        <ul className="mt-3 flex flex-col gap-2">
          {bubble.items.map((item) => (
            <li key={item} className="flex items-center gap-2.5 text-[13px]">
              <span className="grid h-4 w-4 place-items-center rounded-full bg-white/15 text-white">
                <Check />
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className={cn(surface, "max-w-[420px]")}>
      <div className="flex items-center gap-2">
        {bubble.agent ? (
          <span className="grid h-5 w-5 place-items-center rounded-full bg-white text-[10px] text-[var(--pl-black)]">
            P
          </span>
        ) : bubble.avatar ? (
          <Image
            src={bubble.avatar}
            alt=""
            width={20}
            height={20}
            className="h-5 w-5 rounded-full object-cover"
          />
        ) : null}
        <span className="pl-eyebrow text-white/70">{bubble.sender}</span>
      </div>
      <strong className="mt-2.5 block text-[13.5px] font-medium leading-snug">
        {bubble.title}
      </strong>
      <p className="mt-1.5 text-[13px] leading-relaxed text-white/75">
        {bubble.body}
      </p>
    </div>
  );
}

/** Customer rail — a seamless 30s marquee of two identical tracks. */
export function LogoRail() {
  return (
    <section className="border-y border-[var(--pl-line)] bg-[var(--pl-offwhite)] py-10">
      <div
        className="flex overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
        }}
      >
        {[0, 1].map((track) => (
          <ul
            key={track}
            aria-hidden={track === 1}
            className="pl-marquee flex shrink-0 items-center"
          >
            {logoRail.map((logo) => (
              <li
                key={`${track}-${logo.name}`}
                className="flex shrink-0 items-center px-10"
              >
                <Image
                  src={logo.src}
                  alt={`${logo.name} logo`}
                  width={124}
                  height={44}
                  className="h-7 w-auto max-w-[130px] object-contain opacity-70"
                />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}
