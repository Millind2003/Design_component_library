import Image from "next/image";
import { logoWallEyebrow, logos } from "./data";
import { Container } from "../primitives";
import { cn } from "@/lib/utils";
import type { MarketingLogo, MarketingTestimonial } from "./types";

/**
 * "Trusted by the world's best Marketing teams" — a 10×2 logo grid where each
 * mark reveals a testimonial card on hover.
 *
 * The reveal is desktop-only in the source: Webflow scopes it to
 * `@media (min-width: 992px)`, so below that the cards stay at opacity 0 with
 * pointer-events disabled and only the logos show.
 *
 * /audiences runs off the same Webflow component with a different heading, so
 * both props default to the marketing copy rather than being duplicated.
 */
export function LogoWall({
  eyebrow = logoWallEyebrow,
  items = logos,
}: {
  eyebrow?: string;
  items?: MarketingLogo[];
} = {}) {
  return (
    <section className="relative overflow-visible pb-0">
      <Container>
        <h2 className="mx-auto mb-6 block pt-16 text-center text-[0.75em] font-semibold uppercase leading-[1.2] tracking-[0.09em]">
          {eyebrow}
        </h2>

        <div className="relative isolate z-[99] mt-6 w-full">
          <div
            className={cn(
              "relative z-[2] grid w-full items-center justify-center",
              "gap-4 grid-cols-[repeat(3,minmax(2rem,6rem))]",
              "min-[768px]:gap-x-[1.3rem] min-[768px]:gap-y-0 min-[768px]:grid-cols-[repeat(6,minmax(2rem,1fr))]",
              "min-[992px]:gap-4 min-[992px]:grid-cols-[repeat(10,minmax(2rem,7rem))]",
            )}
          >
            {items.map((logo, i) => (
              <LogoCell key={`${logo.logo}-${i}`} logo={logo} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function LogoCell({ logo }: { logo: MarketingLogo }) {
  const Tag = logo.href ? "a" : "div";

  return (
    <Tag
      {...(logo.href ? { href: logo.href, target: "_blank", rel: "noreferrer" } : {})}
      className="group relative inline-block aspect-[16/9] w-full max-w-full"
    >
      <Image
        src={logo.logo}
        alt={logo.alt}
        width={160}
        height={90}
        className="h-full w-full object-contain"
      />

      {logo.pill ? (
        <span className="absolute bottom-0 right-0 -mb-2 mr-2.5 inline-block rounded-[11px] bg-[aliceblue] px-1 py-0.5 text-[0.6rem] font-semibold tracking-[-0.1px] text-[var(--cy-blueberry)]">
          {logo.pill}
        </span>
      ) : null}

      {logo.testimonial ? <TestimonialCard t={logo.testimonial} /> : null}
    </Tag>
  );
}

function TestimonialCard({ t }: { t: MarketingTestimonial }) {
  return (
    <div
      style={{ backgroundColor: t.bg }}
      className={cn(
        "pointer-events-none absolute bottom-1/2 left-0 z-[99] flex h-auto w-[320%] flex-col",
        "items-start justify-start gap-2 overflow-hidden rounded-xl p-4 opacity-0",
        "[transition:opacity_0.15s_ease-out,transform_0.25s_ease-out]",
        "max-[768px]:min-h-[22rem] max-[480px]:min-h-[25rem]",
        "min-[992px]:group-hover:-translate-y-[15%] min-[992px]:group-hover:opacity-100",
        t.lightText ? "text-white" : "text-black",
      )}
    >
      <Image
        src="/sites/clay/quote.svg"
        alt=""
        width={24}
        height={24}
        className="h-6 w-6 shrink-0 object-contain"
      />

      <p className="text-[0.875rem] leading-[1.4] tracking-[-0.01em]">
        {t.quote.map((seg, i) =>
          seg.bold ? (
            <strong key={i} className="font-semibold">
              {seg.text}
            </strong>
          ) : (
            <span key={i}>{seg.text}</span>
          ),
        )}
      </p>

      {t.name ? (
        <>
          <div className="w-full border-[0.5px] border-dashed border-[var(--cy-oat-400)]" />
          <div className="flex items-center justify-start gap-2">
            {t.avatar ? (
              <div className="relative aspect-square w-12 overflow-hidden rounded-lg">
                <Image src={t.avatar} alt="" fill className="object-cover" sizes="48px" />
              </div>
            ) : null}
            <div className="flex flex-col items-start">
              {t.role ? (
                <span className="text-[0.875rem] font-semibold tracking-[-0.01em]">
                  {t.role}
                </span>
              ) : null}
              <span className="text-[0.875rem] tracking-[-0.01em]">{t.name}</span>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}
