import Image from "next/image";
import { hero } from "./data";
import { Button, Container, Gutter } from "./primitives";
import { SculptWordmark } from "./SculptWordmark";

/**
 * Full-bleed hero: a looping venue film under three stacked wave layers, with
 * the Sculpt wordmark and event details laid over it on a 3x4 grid.
 *
 * Webflow places each child by grid-area on desktop and restacks to a single
 * column at <=991px, which is what the explicit row/col classes below mirror.
 */
export function Hero() {
  return (
    <section className="relative z-10 flex flex-col justify-center overflow-hidden rounded-bl-[4rem] text-white">
      {/* Background plate. The live hero plays a venue film here, but the
          source serves a 215MB master — well past what belongs in this repo —
          so the clone renders that video's own poster frame instead. Swap the
          <Image> for a <video src={hero.video}> if a web-sized encode lands. */}
      <div className="absolute inset-0 z-[2] flex items-center justify-center overflow-hidden rounded-bl-[4rem] bg-[#131313] isolate">
        <Image
          src={hero.poster}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* wave layers sit on the bottom edge of the film */}
        <div className="absolute inset-0">
          {hero.waves.map((wave) => (
            <img
              key={wave}
              src={wave}
              alt=""
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-auto w-full max-w-full"
            />
          ))}
        </div>
        <div className="absolute inset-0 z-10 bg-black/15 bg-gradient-to-b from-black/10 to-transparent" />
      </div>

      <Gutter className="relative z-10">
        <Container>
          <div className="relative z-10 grid h-[85vw] max-h-[90vh] grid-cols-1 gap-6 pb-8 pt-10 min-[992px]:h-[60vw] min-[992px]:grid-cols-[1fr_2fr_auto] min-[992px]:pb-12">
            {/* wordmark link — row 1 col 1 on desktop */}
            <a
              href="#top"
              className="order-1 flex w-[8.25rem] items-center self-start min-[992px]:order-none min-[992px]:col-start-1 min-[992px]:row-start-1"
            >
              <Image
                src={hero.wordmark}
                alt="Sculpt home page"
                width={132}
                height={40}
                className="h-auto w-full"
              />
            </a>

            {/* strapline — row 1 col 2 */}
            <div className="order-2 min-[992px]:order-none min-[992px]:col-start-2 min-[992px]:row-start-1">
              <p className="sc-text-rg">{hero.banner}</p>
            </div>

            {/* date + location + CTA — row 1 col 3, right aligned */}
            <div className="order-5 flex flex-col items-start justify-start gap-1 min-[992px]:order-none min-[992px]:col-start-3 min-[992px]:row-start-1 min-[992px]:items-end min-[992px]:gap-10 min-[992px]:self-start min-[992px]:justify-self-end">
              <div className="sc-h3">{hero.date}</div>
              <div className="flex max-w-[25rem] flex-col items-start gap-2.5 text-left min-[992px]:max-w-[15rem] min-[992px]:items-end min-[992px]:text-right">
                <span className="sc-eyebrow text-[var(--sc-paper)]">
                  {hero.location.map((line, i) => (
                    <span key={line} className="block">
                      {line}
                      {i === 0 ? null : null}
                    </span>
                  ))}
                </span>
                <Button href={hero.cta.href} variant="solidLime">
                  {hero.cta.label}
                </Button>
              </div>
            </div>

            {/* big wordmark — row 3, spanning the first two columns */}
            <div className="order-4 flex items-end min-[992px]:order-none min-[992px]:col-span-2 min-[992px]:col-start-1 min-[992px]:row-start-3">
              <a href="#about" className="sc-wordmark block w-full">
                <SculptWordmark className="h-auto w-full" />
              </a>
            </div>

            {/* speakers-announced pill — row 4 */}
            <div className="order-6 flex items-center min-[992px]:order-none min-[992px]:col-start-1 min-[992px]:row-start-4">
              <a href="#speakers" className="flex items-center gap-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-current">
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="h-4 w-4"
                  >
                    <path d="M4 6l4 4 4-4" />
                  </svg>
                </span>
                <span className="sc-eyebrow text-[var(--sc-paper)]">
                  {hero.speakersBadge}
                </span>
              </a>
            </div>
          </div>
        </Container>
      </Gutter>
    </section>
  );
}
