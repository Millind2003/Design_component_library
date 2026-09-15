import Image from "next/image";
import { img } from "./assets";
import { security } from "./data";
import { Button, Heading } from "./primitives";

/**
 * White panels placed straight onto the page grid — heading spanning
 * `col-[5/29]`, certifications in `col-[5/17]` and the copy plus CTA in
 * `col-[17/29]`, so the surrounding gridlines frame the whole block.
 */
export function Security() {
  return (
    <section className="mv-page-grid max-xl:mv-page-grid-invisible relative border-[var(--mv-gridline)] text-black xl:border-r">
      <div className="col-[1/33] row-[1/17] z-[-1] bg-white max-xl:hidden" />

      <div className="relative z-[1] col-[5/29] row-[4/7] flex items-center justify-center border border-b-0 border-r-0 border-[var(--mv-gridline)] bg-white px-[calc(var(--mv-cell)*0.65)] py-[calc(var(--mv-cell)*0.5)] text-center max-xl:hidden">
        <Heading text={security.heading} className="lg:text-[40px]" />
      </div>

      <div className="relative z-[1] col-[5/17] row-[7/15] flex items-center justify-center gap-16 border-l border-t border-[var(--mv-gridline)] bg-white px-4 py-8 max-xl:hidden xl:px-[calc(var(--mv-cell)*0.65)] xl:py-[calc(var(--mv-cell)*0.75)]">
        <Badges />
      </div>

      <div className="relative z-[1] col-[17/29] row-[7/15] flex flex-col justify-between border-l border-t border-[var(--mv-gridline)] bg-white px-4 py-8 max-xl:hidden xl:px-[var(--mv-cell)] xl:py-[var(--mv-cell)]">
        <div className="flex max-w-[400px] flex-col gap-4">
          {security.paragraphs.map((paragraph) => (
            <div key={paragraph} className="mv-body text-pretty text-[16px] text-black">
              {paragraph}
            </div>
          ))}
        </div>
        <Button href={security.link.href} variant="blue" className="mt-auto xl:min-h-[var(--mv-cell)]">
          {security.link.label}
        </Button>
      </div>

      {/* < 1280px */}
      <div className="my-16 mx-[var(--mv-gutter)] border border-[var(--mv-gridline)] py-8 xl:hidden">
        <Heading
          text={security.heading}
          className="mb-8 px-4 text-center lg:text-[40px]"
        />
        <div className="flex items-center justify-center gap-16 border-t border-[var(--mv-gridline)] px-4 py-8">
          <Badges />
        </div>
        <div className="flex flex-col justify-between border-t border-[var(--mv-gridline)] px-4 pt-8">
          <div className="flex flex-col gap-4">
            {security.paragraphs.map((paragraph) => (
              <div key={paragraph} className="mv-body text-pretty text-[16px] text-black">
                {paragraph}
              </div>
            ))}
          </div>
          <Button href={security.link.href} variant="blue" className="mt-8 w-full">
            {security.link.label}
          </Button>
        </div>
      </div>
    </section>
  );
}

function Badges() {
  return (
    <>
      <div className="flex flex-col items-center gap-3">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
          <path
            d="M24 4 6 11v13c0 11 7.6 17.8 18 20 10.4-2.2 18-9 18-20V11L24 4Z"
            stroke="var(--mv-blue)"
            strokeWidth="1.5"
          />
          <path d="M16 24.5 22 30l10-11" stroke="var(--mv-blue)" strokeWidth="1.5" />
        </svg>
        <div className="mv-body text-pretty text-[14px] text-black/60">
          {security.badges[0]}
        </div>
      </div>
      <div className="flex flex-col items-center gap-3">
        <Image src={img.soc2} alt="SOC 2" width={48} height={48} className="h-12 w-12 object-contain" />
        <div className="mv-body text-pretty text-[14px] text-black/60">
          {security.badges[1]}
        </div>
      </div>
    </>
  );
}
