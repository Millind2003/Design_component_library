import Image from "next/image";
import { img } from "./assets";
import { finalCta, footer } from "./data";
import { Wordmark } from "./primitives";

/**
 * The closing CTA and the footer are one blue grid. Every link is its own grid
 * cell outlined in white/30 hairlines, so the footer reads as a continuation of
 * the blueprint rather than a separate band.
 */
export function Footer() {
  return (
    <div className="relative w-full bg-[var(--mv-blue-light)]">
      <footer className="mv-page-grid mv-page-grid-invisible relative overflow-visible bg-[var(--mv-blue-light)]">
        <Image
          src={img.editorial1}
          alt=""
          fill
          className="pointer-events-none select-none object-cover object-center opacity-25 mix-blend-luminosity"
        />
        <div className="pointer-events-none absolute inset-y-0 left-0 z-[2] hidden w-[300px] bg-gradient-to-r from-[var(--mv-blue-light)] via-transparent to-transparent [@media(width>=1440px)]:block" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-[2] hidden w-[300px] bg-gradient-to-l from-[var(--mv-blue-light)] via-transparent to-transparent [@media(width>=1440px)]:block" />

        {/* closing CTA */}
        <p className="relative z-10 col-[3/31] row-[2/3] flex items-end justify-center text-center text-[clamp(1.75rem,3.5vw,48px)] font-medium leading-none tracking-[-0.01em] text-white max-xl:hidden">
          {finalCta.heading}
        </p>
        <CtaCell className="col-[11/17] row-[4/5]" cta={finalCta.demo} />
        <CtaCell className="col-[18/22] row-[4/5]" cta={finalCta.try} />

        {/* < 1280px CTA */}
        <div className="relative z-10 col-[1/-1] flex flex-col items-center justify-center gap-8 px-5 py-16 xl:hidden">
          <p className="text-center text-[clamp(1.75rem,7vw,2.5rem)] font-medium leading-none tracking-[-0.01em] text-white">
            {finalCta.heading}
          </p>
          <div className="flex w-full flex-col gap-3">
            {[finalCta.demo, finalCta.try].map((cta) => (
              <a
                key={cta.label}
                href={cta.href}
                className="inline-flex w-full items-center justify-center border border-[var(--mv-gridline)] bg-white px-8 py-3 text-[14px] font-medium !leading-none text-black transition-colors hover:bg-[var(--mv-grey-light)] lg:text-[16px]"
              >
                {cta.label}
              </a>
            ))}
          </div>
        </div>

        {/* wordmark / social row */}
        <div className="relative z-20 col-[2/7] row-[6/7] flex items-center justify-center border-l border-t border-white/30 text-white transition-colors hover:bg-white/[0.055] max-xl:hidden">
          <a href="#top" className="flex items-center transition-opacity hover:opacity-70">
            <Wordmark />
          </a>
        </div>
        <div className="relative z-20 col-[7/27] row-[6/7] border-l border-t border-white/30 max-xl:hidden" />
        <div className="relative z-20 col-[27/32] row-[6/7] flex border-l border-r border-t border-white/30 max-xl:hidden">
          {footer.social.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              aria-label={link.label}
              className={`flex flex-1 items-center justify-center text-white transition-colors hover:bg-white/[0.055] ${
                i === 0 ? "border-r border-white/30" : ""
              }`}
            >
              {link.label === "LinkedIn" ? <LinkedInIcon /> : <XIcon />}
            </a>
          ))}
        </div>

        {/* tagline + primary links */}
        <div className="relative z-20 col-[2/7] row-[7/9] flex items-center justify-center border-l border-t border-white/30 px-[calc(var(--mv-cell)*0.4)] max-xl:hidden">
          <span className="text-white/60">{footer.tagline}</span>
        </div>
        {footer.primary.map((link, i) => (
          <a
            key={link.label}
            href={link.href}
            style={{
              gridColumn: `${7 + i * 5} / ${12 + i * 5}`,
              fontSize: "calc(var(--mv-cell)*0.3)",
            }}
            className={`relative z-20 row-[7/8] flex items-center justify-center border-l border-t border-white/30 text-white transition-colors hover:bg-white/[0.055] max-xl:hidden ${
              i === footer.primary.length - 1 ? "border-r" : ""
            }`}
          >
            {link.label}
          </a>
        ))}
        {footer.secondary.map((link, i) => {
          const last = i === footer.secondary.length - 1;
          return (
            <a
              key={link.label}
              href={link.href}
              style={{
                gridColumn: `${7 + i * 4} / ${last ? 32 : 11 + i * 4}`,
                fontSize: "calc(var(--mv-cell)*0.25)",
              }}
              className={`relative z-20 row-[8/9] flex items-center justify-center border-l border-t border-white/30 px-1 text-center text-white transition-colors hover:bg-white/[0.055] max-xl:hidden ${
                last ? "border-r" : ""
              }`}
            >
              {link.label}
            </a>
          );
        })}

        {/* location / copyright */}
        <div className="relative z-20 col-[2/7] row-[9/10] flex items-center justify-center border-b border-l border-t border-white/30 px-[calc(var(--mv-cell)*0.4)] max-xl:hidden">
          <span className="text-white/50">{footer.location}</span>
        </div>
        <div className="relative z-20 col-[7/27] row-[9/10] border-b border-l border-t border-white/30 max-xl:hidden" />
        <div className="relative z-20 col-[27/32] row-[9/10] flex items-center justify-center border-b border-l border-r border-t border-white/30 max-xl:hidden">
          <span className="text-white/50">{footer.copyright}</span>
        </div>

        {/* < 1280px footer */}
        <div className="relative z-10 col-[1/-1] px-4 pb-8 xl:hidden">
          <div className="border border-white/30">
            <div className="flex items-center justify-center border-b border-white/30 px-5 py-4 text-white">
              <a href="#top" className="flex items-center transition-opacity hover:opacity-70">
                <Wordmark />
              </a>
            </div>
            <div className="grid grid-cols-5 border-b border-white/30">
              {footer.primary.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex items-center justify-center border-r border-white/30 px-1 py-3 text-center text-[10px] leading-tight text-white transition-colors last:border-r-0 sm:text-[12px]"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="flex items-center justify-center border-b border-white/30 px-4 py-3 text-center">
              <span className="!text-[11px] text-white/50 sm:!text-[12px]">
                {footer.tagline}
              </span>
            </div>
            <div className="grid grid-cols-3 border-b border-white/30">
              {footer.secondary.map((link, i) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`flex items-center justify-center border-white/30 px-1 py-3 text-center text-[10px] leading-tight text-white transition-colors sm:text-[12px] ${
                    i % 3 !== 2 ? "border-r" : ""
                  } ${i < 3 ? "border-b" : ""}`}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="flex items-center justify-between px-4 py-3">
              <span className="flex-1 text-left text-[10px] text-white/40 sm:text-[12px]">
                {footer.location}
              </span>
              <span className="flex-1 whitespace-nowrap text-center text-[10px] text-white/40 sm:text-[12px]">
                {footer.copyright}
              </span>
              <div className="flex flex-1 items-center justify-end gap-3">
                {footer.social.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={link.label}
                    className="text-white/40 transition-colors hover:text-white"
                  >
                    {link.label === "LinkedIn" ? <LinkedInIcon /> : <XIcon />}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function CtaCell({
  className,
  cta,
}: {
  className: string;
  cta: { label: string; href: string };
}) {
  return (
    <a
      href={cta.href}
      className={`relative z-10 inline-flex h-full w-full items-center justify-center border border-[var(--mv-gridline)] bg-white text-[16px] font-medium !leading-none text-black transition-colors hover:bg-[var(--mv-grey-light)] max-xl:hidden ${className}`}
    >
      {cta.label}
    </a>
  );
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.76-2.05C20.5 8.65 21 11 21 14.1V21h-4v-6.1c0-1.45-.03-3.3-2-3.3-2 0-2.3 1.57-2.3 3.2V21H9z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
