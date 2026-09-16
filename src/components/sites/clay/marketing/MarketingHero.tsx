import { hero } from "./data";
import { PersonaSwitcher } from "./PersonaSwitcher";
import { Button, Container } from "../primitives";

/**
 * Centred hero: persona switcher, two-tone headline, sub-copy, single CTA.
 *
 * The live page also ships a split left/right variant of this hero (headline on
 * one side, a scroll-driven customer card stack on the other) but it carries
 * Webflow's `.hide` class — `display: none` at every breakpoint — so it is dead
 * markup and is not reproduced here.
 */
export function MarketingHero() {
  return (
    <section className="relative overflow-visible pt-24 pb-0">
      <Container>
        <div className="-mx-3 flex flex-wrap content-stretch items-end">
          <div className="mb-6 flex w-full max-w-full flex-col items-center justify-center px-3">
            <PersonaSwitcher
              label={hero.pageNav.label}
              current={hero.pageNav.current}
              items={hero.pageNav.items}
            />

            {/* .h0-l: 5em desktop, 4em ≤991px, 3em ≤767px — em against the 1rem body. */}
            <h1 className="mt-4 w-full text-balance text-center text-[3em] font-semibold leading-[1em] tracking-[-0.04em] md:text-[4em] min-[992px]:text-[5em]">
              {hero.headingLead}{" "}
              <span className="text-[var(--cy-blueberry)]">{hero.headingAccent}</span>
            </h1>

            <p className="mb-4 max-w-[46ch] text-center text-[1rem] leading-[1.4]">
              {hero.body}
            </p>

            <Button href={hero.cta.href} variant="dark">
              {hero.cta.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
