import Image from "next/image";
import { customerLogos } from "./assets";
import { socialProof } from "./data";
import { Container } from "./primitives";

/**
 * Centred social-proof line above a continuous logo marquee. The original
 * renders the full list twice inside a flex row and animates both tracks, with
 * white gradient masks at each edge.
 */
export function LogoMarquee() {
  return (
    <Container className="border-t border-[var(--mv-gridline)] xl:border-x">
      <section
        id="customers"
        className="relative overflow-hidden bg-white pb-20 pt-20 text-black md:pb-28 md:pt-28"
      >
        <p className="mv-body mx-auto max-w-[850px] text-balance text-center text-[16px] font-medium lg:text-[20px]">
          {socialProof.line1}
          <br />
          {socialProof.line2}
        </p>

        <div className="relative mx-auto mt-10 max-w-[1200px] overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-24 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-24 bg-gradient-to-l from-white to-transparent" />

          <div
            className="group flex flex-row items-center gap-[var(--mv-gap)] overflow-hidden p-2"
            style={
              {
                "--mv-gap": "1rem",
                "--mv-duration": "60s",
              } as React.CSSProperties
            }
          >
            {[0, 1].map((track) => (
              <div
                key={track}
                aria-hidden={track === 1}
                className="mv-marquee flex shrink-0 flex-row justify-around gap-[var(--mv-gap)]"
              >
                {customerLogos.map((logo) => (
                  <div
                    key={`${track}-${logo.name}`}
                    className="flex items-center justify-center px-8 lg:px-16"
                  >
                    <Image
                      src={logo.src}
                      alt={`${logo.name} logo`}
                      width={160}
                      height={40}
                      className="h-8 w-auto max-w-none object-contain opacity-50"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
}
