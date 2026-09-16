"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { cta } from "./data";
import { Button, Container, Gutter } from "./primitives";

/** One of the four decorative marks set between the words of the closing line. */
function Icon({ src }: { src?: string }) {
  if (!src) return null;
  return (
    <img
      src={src}
      alt=""
      aria-hidden="true"
      className="inline-block h-[0.7em] w-auto align-baseline"
    />
  );
}

function remaining(target: string) {
  const ms = new Date(target).getTime() - Date.now();
  if (!Number.isFinite(ms) || ms <= 0) return { days: 0, hours: 0, minutes: 0 };
  return {
    days: Math.floor(ms / 86_400_000),
    hours: Math.floor((ms / 3_600_000) % 24),
    minutes: Math.floor((ms / 60_000) % 60),
  };
}

/**
 * Closing CTA with the live countdown.
 *
 * The source ships server-rendered placeholder numbers and then replaces them
 * every second from `[data-countdown-target]`; the values in the HTML are stale
 * by the time you fetch it, so this computes from the target date instead.
 */
export function CountdownCta() {
  // Start null so server and first client render agree, then fill in on mount.
  const [left, setLeft] = useState<ReturnType<typeof remaining> | null>(null);

  useEffect(() => {
    const tick = () => setLeft(remaining(cta.target));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative bg-[var(--sc-paper)] text-[var(--sc-ink)]">
      {/* the three blobs bleed off the bottom edge behind the footer */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-between">
        {cta.blobs.map((blob, i) => (
          <img key={`${blob}-${i}`} src={blob} alt="" aria-hidden="true" className="h-auto w-1/3" />
        ))}
      </div>

      <Gutter className="relative z-10">
        <Container>
          <div className="sc-pad-y flex flex-col items-start gap-10">
            <p className="sc-h1 max-w-[26ch]">
              The <Icon src={cta.icons[0]} /> creative GTM <Icon src={cta.icons[1]} />{" "}
              conference by{" "}
              {cta.logo ? (
                <Image
                  src={cta.logo}
                  alt="Clay"
                  width={140}
                  height={44}
                  className="inline-block h-[0.8em] w-auto align-baseline"
                />
              ) : (
                <span>Clay</span>
              )}{" "}
              starts <Icon src={cta.icons[2]} /> in{" "}
              <span suppressHydrationWarning>
                {left ? (
                  <>
                    {left.days} days, {left.hours} hours, {left.minutes} minutes
                  </>
                ) : (
                  <>&hellip;</>
                )}
              </span>{" "}
              <Icon src={cta.icons[3]} />
            </p>

            <Button href={cta.cta.href} variant="dragonfruit" size="rg">
              {cta.cta.label}
            </Button>
          </div>
        </Container>
      </Gutter>
    </section>
  );
}
