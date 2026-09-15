import Image from "next/image";
import { img } from "./assets";
import { numbers, stories } from "./data";
import { Arrow, Container, Heading } from "./primitives";

/**
 * One bordered panel with a labelled header and carousel controls, split
 * 50/50 between the case-study copy and its photograph.
 */
export function Stories() {
  const [story] = stories.items;

  return (
    <Container className="border-[var(--mv-gridline)] xl:border-x">
      <section className="bg-white pb-20 pt-20 text-black md:pb-28 md:pt-28">
        <div className="overflow-hidden border border-[var(--mv-gridline)]">
          <div className="flex items-center justify-between border-b border-[var(--mv-gridline)] px-6 py-4">
            <div className="mv-body text-[16px] text-black/40">
              {stories.heading}
            </div>
            <div className="flex items-center gap-1">
              <button
                type="button"
                aria-label="Previous story"
                disabled
                className="flex size-7 items-center justify-center text-black/25 transition-colors hover:text-black/50 disabled:opacity-40"
              >
                <Arrow className="rotate-180" />
              </button>
              <button
                type="button"
                aria-label="Next story"
                disabled
                className="flex size-7 items-center justify-center text-black/25 transition-colors hover:text-black/50 disabled:opacity-40"
              >
                <Arrow />
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-[50%_50%]">
            <div className="relative flex flex-col border-[var(--mv-gridline)] lg:border-r">
              <div className="px-6 py-6">
                <a href="#customers" className="group/title flex items-center justify-between gap-4">
                  <span className="transition-colors duration-200 group-hover/title:text-[var(--mv-blue)]">
                    <Heading text={story.customer} className="text-pretty" />
                  </span>
                  <Arrow className="shrink-0 text-black/30" />
                </a>
              </div>

              <div className="grid border-b border-t border-[var(--mv-gridline)] md:grid-cols-3">
                {story.results.map((result, i) => (
                  <div
                    key={result.label}
                    className={`flex items-center gap-3 border-[var(--mv-gridline)] px-6 py-4 md:flex-col md:items-center md:justify-center md:py-6 md:text-center ${
                      i < story.results.length - 1
                        ? "border-b md:border-b-0 md:border-r"
                        : ""
                    }`}
                  >
                    <span className="mv-figure shrink-0 text-balance text-[24px] text-[var(--mv-blue)] md:text-[48px]">
                      {result.value}
                    </span>
                    <div className="mv-body text-pretty text-[16px] text-black/60 md:mt-2">
                      {result.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-1 flex-col justify-between px-6 py-6">
                <div className="mv-body max-w-[580px] text-pretty text-[16px] font-medium text-black lg:text-[20px]">
                  {story.headline}
                </div>
              </div>
            </div>

            <a href="#customers" className="relative overflow-hidden max-lg:h-[320px]">
              <Image
                src={story.image}
                alt={story.customer}
                fill
                className="object-cover object-center"
              />
            </a>
          </div>
        </div>
      </section>
    </Container>
  );
}

/**
 * "By the Numbers" is the one full-bleed section: a photograph over Minerva
 * blue, with the figures set in mono on a white hairline grid.
 */
export function ByTheNumbers() {
  return (
    <section className="relative isolate bg-[var(--mv-blue)] text-white">
      {/* Painted over the blue rather than behind it — a negative z-index here
          would drop the image behind the page background entirely. */}
      <Image src={img.background} alt="" fill className="-z-10 object-cover" />

      {/* < 1280px */}
      <div className="mx-[var(--mv-gutter)] flex flex-col border-l border-r border-white/30 xl:hidden">
        <div className="border-b border-t border-white/30 px-[var(--mv-gutter)] py-5">
          <Heading
            text={numbers.heading}
            className="text-white lg:text-[40px]"
          />
        </div>
        {numbers.items.map((item, i) => (
          <div
            key={item.label}
            className={`flex items-center gap-4 px-[var(--mv-gutter)] py-6 ${
              i < numbers.items.length - 1 ? "border-b border-white/30" : ""
            }`}
          >
            <span className="mv-figure text-[64px] text-white">{item.value}</span>
            <div className="mv-body text-[16px] text-white">{item.label}</div>
          </div>
        ))}
      </div>

      {/* >= 1280px — placed on the page grid */}
      <div className="mv-page-grid mv-page-grid-invisible relative border-x border-white/30 max-xl:hidden">
        <span className="absolute left-[calc(var(--mv-cell)*6)] top-0 h-full w-px bg-white/30" />
        <span className="absolute left-[calc(var(--mv-cell)*14)] top-0 h-full w-px bg-white/30" />
        <span className="absolute left-[calc(var(--mv-cell)*26)] top-0 h-full w-px bg-white/30" />

        <div className="col-[7/15] row-[1/2] flex items-center border-b border-white/30 px-[calc(var(--mv-cell)*0.65)] py-5">
          <Heading text={numbers.heading} className="text-white lg:text-[40px]" />
        </div>

        {numbers.items.map((item, i) => (
          <div
            key={item.label}
            className="col-[7/27] flex items-center gap-8 border-b border-white/30 px-[calc(var(--mv-cell)*0.65)] py-8"
            style={{ gridRow: `${i + 2} / ${i + 3}` }}
          >
            <span className="mv-figure w-[calc(var(--mv-cell)*4)] shrink-0 text-[96px] text-white">
              {item.value}
            </span>
            <div className="mv-body text-[16px] text-white">{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
