"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { cases, insights, products } from "./data";
import { Arrow, Container, SectionHeading } from "./primitives";

/**
 * "Success stories" — a horizontal snap scroller with a progress bar that
 * tracks how far through the track you are, plus prev/next controls.
 */
export function Cases() {
  const trackRef = useRef<HTMLUListElement>(null);
  const [progress, setProgress] = useState(0);

  const onScroll = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setProgress(max > 0 ? el.scrollLeft / max : 0);
  }, []);

  const step = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.6), behavior: "smooth" });
  };

  return (
    <section className="bg-[var(--pl-offwhite)] py-20 lg:py-28">
      <Container>
        <SectionHeading align="center">{cases.heading}</SectionHeading>
      </Container>

      <ul
        ref={trackRef}
        onScroll={onScroll}
        className="mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 md:px-12 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {cases.items.map((item, i) => (
          <li
            key={item.company}
            className="pl-card-in w-[82vw] shrink-0 snap-start sm:w-[520px]"
            style={{ "--pl-delay": `${i * 90}ms` } as React.CSSProperties}
          >
            <a
              href="#customers"
              className="group flex h-full flex-col overflow-hidden border border-[var(--pl-line)] bg-white"
              style={{ borderRadius: "var(--pl-radius)" }}
            >
              <div className="flex flex-1 flex-col gap-4 p-6">
                <p className="pl-eyebrow text-[var(--pl-gray)]">{item.company}</p>
                <h3 className="pl-h3 max-w-[26ch]">{item.headline}</h3>
                <span className="pl-eyebrow pl-underline mt-auto inline-flex w-fit items-center gap-2 pt-4">
                  {cases.readLabel}
                  <Arrow className="transition-transform duration-[420ms] group-hover:translate-x-0.5" />
                </span>
              </div>
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={item.image}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-[1200ms] group-hover:scale-[1.03]"
                  style={{ transitionTimingFunction: "var(--pl-ease-out)" }}
                />
              </div>
            </a>
          </li>
        ))}
      </ul>

      <Container className="mt-8 flex items-center gap-6">
        <div className="h-px flex-1 bg-[var(--pl-line)]">
          <div
            className="h-px bg-[var(--pl-black)] transition-[width] duration-200"
            style={{ width: `${Math.max(8, progress * 100)}%` }}
          />
        </div>
        <div className="flex gap-2">
          {([-1, 1] as const).map((dir) => (
            <button
              key={dir}
              type="button"
              aria-label={dir === -1 ? "Previous" : "Next"}
              onClick={() => step(dir)}
              className="grid h-10 w-10 place-items-center rounded-full border border-[var(--pl-line)] transition-colors duration-[260ms] hover:bg-[var(--pl-black)] hover:text-white"
              style={{ transitionTimingFunction: "var(--pl-ease-out)" }}
            >
              <Arrow className={dir === -1 ? "rotate-180" : undefined} />
            </button>
          ))}
        </div>
      </Container>
    </section>
  );
}

/**
 * "Control and own your entire AI stack".
 *
 * A 500svh runway with a sticky stage pinned inside it. Scroll position through
 * the runway selects the active card — the site labels this "Scroll to
 * discover". The deck is a flex row of cards overlapped by -140px and sheared
 * with `skewY(16deg) scaleX(0.9)` from a left origin, so every card leans
 * identically and only ever grows downward. Inactive artwork sits at 20%
 * opacity; the active card comes to full colour.
 */
export function Products() {
  const runwayRef = useRef<HTMLDivElement>(null);
  const deckRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  // The deck's natural width (5 cards overlapped by -140px) is wider than the
  // stage, so the original scales it down to fit — `--product-fan-scale`.
  const [fan, setFan] = useState(1);
  // Centring the deck centres its layout box, not its skewed paint, which hangs
  // below. This lifts it back so the visible fan sits centred in the stage.
  const [shiftY, setShiftY] = useState(0);
  const count = products.items.length;

  useEffect(() => {
    const fit = () => {
      const el = deckRef.current;
      const wrap = el?.parentElement;
      if (!el || !wrap) return;
      const deckW = el.scrollWidth;
      const cardH = (el.firstElementChild as HTMLElement | null)?.offsetHeight ?? 0;
      if (!deckW || !cardH) return;
      // skewY(16deg) drops the right edge by width * tan(16deg), so the deck
      // paints far taller than its layout box. Height is the binding
      // constraint, not width.
      const drop = deckW * Math.tan((16 * Math.PI) / 180);
      const visualH = cardH + drop;
      const scale = Math.min(
        1,
        (wrap.clientWidth * 0.96) / deckW,
        (wrap.clientHeight * 0.98) / visualH,
      );
      setFan(scale);
      // A quarter of the drop is enough; half collides with the heading.
      setShiftY(-(drop / 4));
    };
    fit();
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const el = runwayRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      if (scrollable <= 0) return;
      const p = Math.min(1, Math.max(0, -rect.top / scrollable));
      // A little padding at each end so the first and last cards hold.
      const eased = Math.min(1, Math.max(0, (p - 0.08) / 0.84));
      setActive(Math.min(count - 1, Math.floor(eased * count)));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [count]);

  const current = products.items[active];

  return (
    <section className="bg-[var(--pl-offwhite)]">
      <div
        ref={runwayRef}
        className="h-[500svh] min-h-[2400px] max-lg:h-auto max-lg:min-h-0"
      >
        <div className="sticky top-[var(--pl-header-height)] flex h-[calc(100svh-var(--pl-header-height))] min-h-[620px] flex-col overflow-hidden max-lg:static max-lg:h-auto max-lg:min-h-0 max-lg:py-20">
          <Container className="pt-10">
            <div className="flex flex-col items-center gap-4 text-center">
              <span className="pl-eyebrow text-[var(--pl-gray)]">
                {products.eyebrow}
              </span>
              <h2 className="pl-h2 max-w-[880px]">{products.heading}</h2>
            </div>
          </Container>

          <div className="flex min-h-0 flex-1 flex-col">
            {/* deck */}
            <div className="flex flex-1 items-center justify-center overflow-hidden px-4">
              <div
                ref={deckRef}
                className="flex items-end"
                style={{
                  transform: `scale(${fan}) translateY(${shiftY}px)`,
                  transformOrigin: "center",
                }}
              >
                {products.items.map((item, i) => {
                  const on = i === active;
                  return (
                    <button
                      key={item.name}
                      type="button"
                      onClick={() => setActive(i)}
                      aria-label={item.name}
                      aria-pressed={on}
                      className="relative w-[160px] shrink-0 overflow-hidden bg-white text-white first:ml-0 sm:w-[240px] lg:w-[300px] xl:w-[360px] 2xl:w-[395px]"
                      style={{
                        aspectRatio: "4 / 5",
                        marginLeft: "-140px",
                        borderRadius: "var(--pl-radius)",
                        transform: "skewY(16deg) scaleX(0.9)",
                        transformOrigin: "left",
                        zIndex: on ? 10 : i,
                      }}
                    >
                      <Image
                        src={item.art}
                        alt=""
                        fill
                        sizes="(max-width: 640px) 160px, 395px"
                        className="object-cover transition-opacity duration-[600ms]"
                        style={{
                          opacity: on ? 1 : 0.2,
                          transitionTimingFunction: "var(--pl-ease-out)",
                        }}
                      />
                      {/* the site's own bottom scrim, so the label stays legible */}
                      <span
                        className="pointer-events-none absolute inset-0"
                        style={{
                          background:
                            "linear-gradient(to bottom, transparent 44%, rgb(0 0 0 / 38%))",
                        }}
                      />
                      <span className="pointer-events-none absolute left-1/2 top-1/2 z-[1] flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center">
                        <Image
                          src={item.icon}
                          alt=""
                          width={40}
                          height={40}
                          className="h-full w-full object-contain brightness-0 invert"
                        />
                      </span>
                      <span className="absolute inset-x-5 bottom-5 z-[1] text-center text-[17px] lg:text-[19px] xl:text-[21px] 2xl:text-[23px]">
                        {item.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* detail panel — one article per product, cross-fading in place */}
            <div className="relative mx-4 mb-12 min-h-[132px] lg:mb-16 lg:min-h-[180px]">
              {products.items.map((item) => {
                const on = item.name === current.name;
                return (
                  <article
                    key={item.name}
                    className="absolute inset-0 flex flex-col items-center text-center transition-opacity duration-[400ms]"
                    style={{
                      opacity: on ? 1 : 0,
                      pointerEvents: on ? "auto" : "none",
                      transitionTimingFunction: "var(--pl-ease-out)",
                    }}
                    aria-hidden={!on}
                  >
                    <Image
                      src={item.icon}
                      alt=""
                      width={40}
                      height={40}
                      className="h-9 w-9 object-contain"
                    />
                    <h3 className="mt-3 text-[20px] font-[450] leading-[1.1] tracking-[-0.03em]">
                      {item.name}
                    </h3>
                    <p className="mt-4 max-w-[34ch] text-[17px] leading-[1.45] tracking-[-0.015em] text-[var(--pl-gray)]">
                      {item.body}
                    </p>
                    <a
                      href="#product"
                      className="pl-underline mt-6 text-[15px] text-[var(--pl-black)]"
                    >
                      {products.learnMore}
                    </a>
                  </article>
                );
              })}
            </div>

            <p className="pl-eyebrow pb-6 text-center text-[var(--pl-gray)] max-lg:hidden">
              {products.hint}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/** "Turn intelligence into ROI" — a scatter plot beside a 2×2 of quadrants. */
export function Insights() {
  return (
    <section className="bg-[var(--pl-eggshell)] py-20 lg:py-28">
      <Container>
        <SectionHeading align="center" className="mb-16">
          {insights.heading}
        </SectionHeading>

        <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:gap-10">
          <div
            className="relative aspect-[4/3] overflow-hidden border border-[var(--pl-line)] bg-white"
            style={{ borderRadius: "var(--pl-radius)" }}
            data-reveal="slow"
          >
            <Scatter />
          </div>

          <div className="grid gap-px bg-[var(--pl-line)] sm:grid-cols-2">
            {insights.cards.map((card, i) => (
              <div
                key={card.title}
                className="pl-card-in flex flex-col gap-3 bg-[var(--pl-eggshell)] p-7"
                style={{ "--pl-delay": `${i * 110}ms` } as React.CSSProperties}
              >
                <span className="grid h-8 w-8 place-items-center border border-[var(--pl-line)] text-[var(--pl-gray)]">
                  <Arrow />
                </span>
                <h3 className="pl-h3 text-[19px]">{card.title}</h3>
                <p className="pl-body max-w-[34ch] text-[var(--pl-black)]/70">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

/**
 * The dot field in the insights panel. Deterministic positions so server and
 * client render identically, with a slow ambient drift.
 */
function Scatter() {
  const dots = Array.from({ length: 150 }, (_, i) => {
    // cheap deterministic hash → stable pseudo-random placement
    const a = Math.sin(i * 12.9898) * 43758.5453;
    const b = Math.sin(i * 78.233) * 12345.6789;
    const x = 10 + (a - Math.floor(a)) * 80;
    const y = 10 + (b - Math.floor(b)) * 80;
    return { x, y, d: (i % 7) * 260 };
  });

  return (
    <svg viewBox="0 0 100 100" className="h-full w-full" aria-hidden="true">
      {dots.map((dot, i) => (
        <circle
          key={i}
          cx={dot.x}
          cy={dot.y}
          r="0.55"
          fill="var(--pl-black)"
          className="pl-card-in"
          style={{ "--pl-delay": `${dot.d}ms` } as React.CSSProperties}
        />
      ))}
    </svg>
  );
}
