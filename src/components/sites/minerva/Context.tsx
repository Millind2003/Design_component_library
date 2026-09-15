"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { context } from "./data";
import { Container, Heading } from "./primitives";
import { cn } from "@/lib/utils";

/**
 * A pinned, scroll-driven section: a 350vh spacer scrolls past while the panel
 * sticks under the nav, and progress through it cross-fades the three stages
 * and drives the underline on each tab.
 */
export function Context() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = trackRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      if (scrollable <= 0) return;
      setProgress(Math.min(1, Math.max(0, -rect.top / scrollable)));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const count = context.tabs.length;
  const active = Math.min(count - 1, Math.floor(progress * count));
  // How far through the active stage we are, for its underline.
  const within = Math.min(1, Math.max(0, progress * count - active));

  return (
    <section className="bg-white pb-0 pt-0 text-black">
      <div ref={trackRef} className="h-[350vh]">
        <div className="sticky top-[calc(var(--mv-nav-height)-1px)] h-[calc(100svh-var(--mv-nav-height))] overflow-hidden">
          <div className="flex h-full flex-col">
            <Container className="relative border-b border-t border-[var(--mv-gridline)] pb-6 pt-8 lg:border-b-0 xl:border-x">
              <Heading text={context.heading} className="shrink-0" />

              <div className="mt-4 flex flex-col gap-2 text-black/60 md:flex-row md:gap-4">
                {context.stats.map((stat) => (
                  <div
                    key={stat}
                    className="mv-body text-[16px] font-medium lg:text-[20px]"
                  >
                    {stat}
                  </div>
                ))}
              </div>

              <span
                className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-[var(--mv-blue-light)] lg:hidden"
                style={{ transform: `scaleX(${progress})` }}
              />
            </Container>

            {/* tabs */}
            <Container className="hidden !px-0 border-[var(--mv-gridline)] lg:block 2xl:border-r">
              <div className="border-y border-[var(--mv-gridline)]">
                <div className="flex items-center">
                  {context.tabs.map((tab, i) => (
                    <div
                      key={tab.label}
                      className={cn(
                        "relative overflow-hidden border-x border-[var(--mv-gridline)] px-5 py-2.5 text-[16px] font-medium",
                        i > 0 && "-ml-px",
                        i === active ? "text-black" : "text-black/40",
                      )}
                    >
                      {tab.label}
                      <span
                        className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-[var(--mv-blue-light)] transition-transform duration-150"
                        style={{
                          transform: `scaleX(${i < active ? 1 : i === active ? within : 0})`,
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </Container>

            {/* body + visual, both cross-fading in place */}
            <div className="flex flex-1 overflow-hidden">
              <Container className="flex flex-1 items-stretch border-[var(--mv-gridline)] lg:!pr-0 xl:border-x">
                <div className="grid flex-1 grid-cols-1 gap-0 lg:grid-cols-[3fr_7fr] lg:gap-8">
                  <div className="grid items-center [&>*]:col-start-1 [&>*]:row-start-1">
                    {context.paragraphs.map((paragraph, i) => (
                      <div
                        key={paragraph}
                        className={cn(
                          "flex flex-col justify-center py-6 transition-opacity duration-500",
                          i === active ? "opacity-100" : "opacity-0",
                        )}
                      >
                        <p className="mv-body w-full text-pretty text-[16px] text-black md:w-1/2 lg:w-full">
                          {paragraph}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="relative grid h-full overflow-hidden -mx-[var(--mv-gutter)] lg:mx-0 [&>*]:col-start-1 [&>*]:row-start-1">
                    {context.tabs.map((tab, i) => (
                      <div
                        key={tab.label}
                        className={cn(
                          "h-full transition-opacity duration-500",
                          i === active ? "opacity-100" : "opacity-0",
                        )}
                      >
                        <Image
                          src={tab.image}
                          alt={tab.label}
                          width={1200}
                          height={900}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </Container>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
