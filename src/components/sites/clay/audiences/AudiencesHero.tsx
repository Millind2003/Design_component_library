import Image from "next/image";
import { Container } from "../primitives";
import { hero } from "./data";

/**
 * "Centralize your GTM data" — centred type over Clay's tangerine slab.
 *
 * The slab is two layers: a plinth pinned to the bottom of the block whose
 * height is 32.25% of its width (`.home-flow_bkg-spacer`), and the two
 * transparent product screenshots stacked in a single grid cell above it. Both
 * images are alpha PNGs, so the orange reads through the gaps in the UI.
 */
export function AudiencesHero() {
  return (
    <section className="pt-14 min-[768px]:pt-[3.75rem]">
      <Container>
        {/* .hero_stack: 1.5rem gap, 3.5rem above / 2rem below */}
        <div className="flex flex-col items-center gap-6 pb-8 pt-8 text-center min-[768px]:pt-14">
          <h1 className="cy-h1 text-balance">{hero.heading}</h1>
          <p className="cy-p-lg max-w-[44rem]">{hero.body}</p>
        </div>

        <div className="relative">
          {/* the plinth: tangerine-300 under the noise + "clay fingers" overlays */}
          <div className="absolute inset-x-0 bottom-0 overflow-hidden rounded-[2rem] bg-[var(--cy-tangerine)] max-[768px]:inset-0">
            <Textures />
            <div className="pt-[32.25%]" />
          </div>

          <div className="relative z-10 grid overflow-hidden rounded-[2rem]">
            <Image
              src={hero.imageUnder}
              alt=""
              width={1600}
              height={669}
              priority
              className="col-start-1 row-start-1 w-full self-center justify-self-center"
            />
            <Image
              src={hero.imageOver}
              alt=""
              width={1600}
              height={669}
              priority
              className="z-10 col-start-1 row-start-1 w-full self-center justify-self-center"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

/** Clay layers a 60px noise tile and a hand-pressed clay overlay on every slab. */
function Textures() {
  return (
    <div className="pointer-events-none absolute -m-0.5 inset-0">
      <div
        className="absolute inset-0 z-[2] bg-[length:100%_50%] bg-center opacity-85 mix-blend-hard-light"
        style={{ backgroundImage: "url(/sites/clay/texture-clay-overlay.webp)" }}
      />
      <div
        className="absolute inset-0 z-[3] bg-[length:100%_50%] bg-center opacity-85 mix-blend-overlay"
        style={{ backgroundImage: "url(/sites/clay/texture-clay-overlay.webp)" }}
      />
      <div
        className="absolute inset-0 z-[4] bg-[length:60px_60px] bg-left-top mix-blend-overlay"
        style={{ backgroundImage: "url(/sites/clay/texture-noise.webp)" }}
      />
    </div>
  );
}
