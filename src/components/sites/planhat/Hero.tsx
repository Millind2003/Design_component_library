"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { hero, logos, nav } from "./data";
import { Button, Container, Wordmark } from "./primitives";
import { cn } from "@/lib/utils";

/**
 * Fixed nav. It rides transparent over the hero image and flips to a solid
 * white bar once the page scrolls past it.
 */
export function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 640);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        solid ? "bg-white text-black" : "text-white",
      )}
    >
      <Container className="flex h-[72px] items-center gap-10">
        <a href="#top" className="shrink-0">
          <Wordmark />
        </a>

        <nav className="hidden flex-1 items-center justify-center gap-10 lg:flex">
          {nav.links.map((link) => (
            <button
              key={link.label}
              type="button"
              className="ph-body text-[0.95rem] opacity-90 transition-opacity hover:opacity-100"
            >
              {link.label}
              {link.dropdown ? <span className="ml-1.5 opacity-60">+</span> : null}
            </button>
          ))}
        </nav>

        <div className="ml-auto hidden items-stretch gap-2 lg:flex">
          <a
            href={nav.login.href}
            className={cn(
              "ph-label flex items-center border px-6 transition-colors",
              solid
                ? "border-[var(--ph-line)] hover:bg-[var(--ph-off)]"
                : "border-white/70 hover:bg-white/10",
            )}
          >
            {nav.login.label}
          </a>
          <a
            href={nav.cta.href}
            className={cn(
              "ph-label flex items-center gap-3 px-6 transition-colors",
              solid ? "bg-black text-white" : "bg-white text-black",
            )}
          >
            {nav.cta.label}
            <span className="opacity-60">›</span>
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="ml-auto flex h-8 w-8 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span className="block h-px w-5 bg-current" />
          <span className="block h-px w-5 bg-current" />
        </button>
      </Container>

      {open ? (
        <div className="border-t border-[var(--ph-line)] bg-white text-black lg:hidden">
          <Container className="py-2">
            {[...nav.links.map((l) => l.label), nav.login.label, nav.cta.label].map(
              (label) => (
                <a
                  key={label}
                  href="#top"
                  onClick={() => setOpen(false)}
                  className="ph-body block border-b border-[var(--ph-line)] py-3 last:border-0"
                >
                  {label}
                </a>
              ),
            )}
          </Container>
        </div>
      ) : null}
    </header>
  );
}

/** Full-bleed image stage with the headline set low-left over it. */
export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden bg-black">
      <Image
        src="/sites/planhat/hero.webp"
        alt=""
        fill
        priority
        className="object-cover"
      />
      <div className="pointer-events-none absolute inset-0 bg-black/40" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/55 via-black/15 to-transparent" />

      <Container className="relative flex min-h-[100svh] flex-col justify-center pb-24 pt-32 text-white">
        <p className="ph-eyebrow text-white/75">{hero.eyebrow}</p>
        <h1 className="ph-h1 mt-6 max-w-[760px]">{hero.heading}</h1>
        <p className="ph-body mt-7 max-w-[52ch] text-white/85">{hero.body}</p>
        <div className="mt-10">
          <Button href={hero.cta.href} variant="light">
            {hero.cta.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}

/**
 * Customer wall — a 6×2 grid of hairline cells. Each logo is a mask shape on
 * the original, so they are all rendered in a single flat black.
 */
export function Logos() {
  return (
    <section className="bg-white pb-8 pt-24">
      <Container>
        <div className="grid grid-cols-2 border-l border-t border-[var(--ph-line)] sm:grid-cols-3 lg:grid-cols-6">
          {logos.items.map((logo) => (
            <div
              key={logo.name}
              className="flex h-[100px] items-center justify-center border-b border-r border-[var(--ph-line)] px-6"
            >
              {logo.src ? (
                <Image
                  src={logo.src}
                  alt={`${logo.name} logo`}
                  width={130}
                  height={40}
                  className="h-8 w-auto max-w-[75%] object-contain"
                />
              ) : (
                <span className="ph-label text-[0.95rem] tracking-[0.22em] text-black">
                  {logo.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
