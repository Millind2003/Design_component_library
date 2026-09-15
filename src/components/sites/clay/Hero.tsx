"use client";

import { useState } from "react";
import Image from "next/image";
import { img, video } from "./assets";
import { hero } from "./data";
import { Button, Container } from "./primitives";

/**
 * A tall (120vh) dark-green stage with a looping background video. Content is
 * anchored to the bottom and splits into two columns: the headline block on the
 * left, the install card on the right.
 */
export function Hero() {
  return (
    <section className="relative flex h-[120vh] max-h-[67rem] min-h-[52rem] flex-col items-center justify-end overflow-hidden bg-[var(--cy-green)] max-lg:h-[46rem] max-lg:max-h-[57rem] max-lg:min-h-0 max-md:h-[44rem] max-sm:h-[40rem] max-sm:max-h-none">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={video.hero}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* the site layers a shade and a gradient over the video */}
      <div className="pointer-events-none absolute inset-0 bg-[var(--cy-green)]/35" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[var(--cy-green)] via-[var(--cy-green)]/70 to-transparent" />

      <Container className="relative z-10 mb-[calc(20vh+3rem)] max-lg:mb-12 max-md:mb-[10vh]">
        <div className="flex flex-row items-end justify-between gap-6 pb-[4.5rem] text-[var(--cy-oat-50)] max-lg:flex-col max-lg:items-start max-lg:pb-8">
          <div className="flex max-w-[45rem] flex-col items-start gap-[0.875rem] max-lg:max-w-[35rem] max-md:max-w-[25rem]">
            <h1 className="cy-h1">{hero.heading}</h1>
            <p className="cy-p-lg max-w-[34rem] text-balance text-[var(--cy-oat-50)]/85">
              {hero.text}
            </p>

            <div className="mt-2 flex flex-wrap gap-3">
              <Button href={hero.primary.href} variant="light">
                {hero.primary.label}
              </Button>
              <Button href={hero.secondary.href} variant="lime">
                {hero.secondary.label}
              </Button>
            </div>
          </div>

          <InstallCard />
        </div>
      </Container>
    </section>
  );
}

/** "or install directly with" — the coding-agent install snippet. */
function InstallCard() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(hero.cli.link);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // Clipboard can be blocked; the snippet is still visible to select.
    }
  };

  return (
    <div className="w-full max-w-[24rem] shrink-0">
      <div className="mb-2 flex items-center gap-2">
        <span className="cy-p-sm text-[var(--cy-oat-50)]/70">
          {hero.cli.intro}
        </span>
        <span className="flex items-center gap-1.5">
          {img.cliAgents.map((src) => (
            <Image
              key={src}
              src={src}
              alt=""
              width={20}
              height={20}
              className="h-5 w-5 object-contain"
            />
          ))}
        </span>
      </div>

      <div className="overflow-hidden rounded-[var(--cy-radius-sm)] border border-white/15 bg-black/35 backdrop-blur-sm">
        <div className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-3">
          <span className="cy-p text-[0.95rem] font-medium text-white">
            {hero.cli.title}
          </span>
          <button
            type="button"
            onClick={copy}
            className="cy-btn border-white/25 bg-white/10 px-3 py-1 text-[0.8rem] text-white hover:bg-white/20"
          >
            {copied ? "Copied" : hero.cli.copy}
          </button>
        </div>
        <div className="px-4 py-3">
          <p className="cy-p-sm text-white/70">
            {hero.cli.body}{" "}
            <span className="break-all font-cy-mono text-white/45">
              {hero.cli.link}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
