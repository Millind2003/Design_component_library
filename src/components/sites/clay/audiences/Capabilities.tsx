"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Button, Container } from "../primitives";
import { cn } from "@/lib/utils";
import { capabilities, capabilitiesLabel } from "./data";

/**
 * "Capabilities" — a sticky visual column paired with a scrolling text column.
 *
 * Webflow drives the active state off scroll-spy on the `#visual-n` anchors;
 * here the item whose centre sits closest to the viewport centre wins. Below
 * 992px the source hides the sticky column entirely and inlines each visual
 * above its own copy, at full opacity.
 */
export function Capabilities() {
  const [active, setActive] = useState(0);
  const items = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let frame = 0;

    const pick = () => {
      frame = 0;
      const middle = window.innerHeight / 2;
      let best = 0;
      let bestGap = Infinity;

      items.current.forEach((el, i) => {
        if (!el) return;
        const box = el.getBoundingClientRect();
        const gap = Math.abs(box.top + box.height / 2 - middle);
        if (gap < bestGap) {
          bestGap = gap;
          best = i;
        }
      });

      setActive(best);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(pick);
    };

    pick();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section className="cy-section">
      <h2 className="sr-only">{capabilitiesLabel}</h2>

      <Container>
        <div className="relative block h-full min-[992px]:flex min-[992px]:flex-row min-[992px]:justify-between min-[992px]:gap-10">
          {/* sticky visuals — desktop only */}
          <div className="relative hidden w-1/2 self-stretch min-[992px]:block">
            <div className="sticky top-[16vh] flex flex-col items-center pt-[74vh]">
              <div className="absolute inset-0 h-full">
                {capabilities.map((c, i) => (
                  <div
                    key={c.id}
                    className={cn(
                      "absolute inset-0 flex h-full items-center justify-center transition-opacity duration-300",
                      i === active ? "z-10 opacity-100" : "opacity-0",
                    )}
                  >
                    <Visual src={c.image} alt={c.alt} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* scrolling copy */}
          <div className="min-[992px]:w-2/5">
            {capabilities.map((c, i) => (
              <div
                key={c.id}
                id={c.id}
                ref={(el) => {
                  items.current[i] = el;
                }}
                className="flex scroll-mt-32 flex-col items-stretch justify-center max-[992px]:mb-20 min-[992px]:min-h-[70dvh] min-[992px]:items-start"
              >
                <div
                  className={cn(
                    "transition-opacity duration-300",
                    i === active ? "opacity-100" : "max-[992px]:opacity-100 opacity-20",
                  )}
                >
                  <div className="mb-6 block min-[992px]:hidden">
                    <Visual src={c.image} alt={c.alt} />
                  </div>

                  {/* a plain <h2> in the source: 44px / 1.1, not the h3 token */}
                  <h3 className="mb-4 text-[2rem] font-medium leading-[1.1] tracking-[-0.02em] min-[992px]:text-[2.75rem]">
                    {c.heading}
                  </h3>
                  <p className="mb-6 text-base leading-[1.4]">{c.body}</p>
                  <Button href={c.cta.href} variant="dark">
                    {c.cta.label}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function Visual({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative aspect-square w-full overflow-hidden rounded-[30px] border border-[var(--cy-oat-300)]">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 992px) 100vw, 50vw"
        className="object-cover"
      />
    </div>
  );
}
