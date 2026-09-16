import Image from "next/image";
import { video } from "./assets";
import { customers, footer, updates } from "./data";
import { Button, Container } from "./primitives";

/** "Hear from the teams that grow with Clay" — video case-study cards. */
export function Customers() {
  return (
    <section id="customers" className="cy-pt-regular cy-pb-regular relative bg-[var(--cy-oat-50)]">
      <Container>
        <h2 className="cy-h2 max-w-[20ch] text-balance">{customers.heading}</h2>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {customers.stories.map((story) => (
            <article
              key={story.title}
              className="flex min-h-[20rem] flex-col justify-between gap-8 rounded-[var(--cy-radius-lg)] bg-[var(--cy-oat-200)] p-6 lg:p-10"
            >
              <Image
                src={story.logo}
                alt={`${story.title} logo`}
                width={40}
                height={40}
                className="h-8 w-8 object-contain"
              />
              <div className="flex flex-col gap-5">
                <h3 className="cy-p-lg max-w-[26ch] text-balance font-medium">
                  {story.title}
                </h3>
                <Button href="#customers" variant="light">
                  {story.cta}
                </Button>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

/** Conference promo and the Clay University card. */
export function Updates() {
  return (
    <section className="cy-pt-regular cy-pb-medium relative bg-[var(--cy-oat-50)]">
      <Container>
        <h2 className="cy-h2 max-w-[20ch] text-balance">{updates.heading}</h2>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          <article className="flex min-h-[20rem] flex-col justify-between gap-8 rounded-[var(--cy-radius-lg)] bg-[var(--cy-lime)] p-6 lg:p-10">
            <span className="font-cy-mono text-[0.7rem] uppercase tracking-[0.06em]">
              {updates.conference.eyebrow}
            </span>
            <div className="flex flex-col gap-5">
              <h3 className="cy-h3 max-w-[18ch] text-balance">
                {updates.conference.title}
              </h3>
              <Button href={updates.conference.cta.href} variant="dark">
                {updates.conference.cta.label}
              </Button>
            </div>
          </article>

          <article className="flex min-h-[20rem] flex-col justify-between gap-8 rounded-[var(--cy-radius-lg)] bg-[var(--cy-oat-200)] p-6 lg:p-10">
            <div className="flex flex-col gap-3">
              <h3 className="cy-h3 max-w-[16ch] text-balance">
                {updates.university.title}
              </h3>
              <p className="cy-p max-w-[46ch] text-[var(--cy-oat-800)]">
                {updates.university.body}
              </p>
            </div>
            <Button href={updates.university.cta.href} variant="dark">
              {updates.university.cta.label}
            </Button>
          </article>
        </div>
      </Container>
    </section>
  );
}

/**
 * The footer opens with the closing CTA and runs a looping video as an absolute
 * background behind it (`position: absolute; inset: 0` on the original), then
 * seven link columns and a credit bar.
 */
export function Footer({
  primaryCta,
}: {
  /** Per-route override: the persona pages label this "Start building for free". */
  primaryCta?: { label: string; href: string };
} = {}) {
  const primary = primaryCta ?? footer.cta.primary;

  return (
    <footer className="relative flex flex-col items-center overflow-clip bg-[var(--cy-footer)] bg-gradient-to-b from-white to-[var(--cy-footer)] to-[15%]">
      {/* closing CTA */}
      <Container className="relative z-10 pb-10 pt-20 text-center">
        <h2 className="cy-h2 mx-auto max-w-[18ch] text-balance">
          {footer.cta.heading}
        </h2>
        <p className="cy-p-lg mx-auto mt-4 max-w-[40ch] text-[var(--cy-oat-800)]">
          {footer.cta.body}
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Button href={primary.href} variant="dark">
            {primary.label}
          </Button>
          <Button href={footer.cta.secondary.href} variant="secondary" className="border">
            {footer.cta.secondary.label}
          </Button>
        </div>
      </Container>

      {/* the video sits behind the link grid, filling the lower band */}
      <div className="relative w-full">
        <video
          className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover opacity-90"
          src={video.footer}
          autoPlay
          loop
          muted
          playsInline
          preload="none"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[var(--cy-footer)] via-[var(--cy-footer)]/85 to-[var(--cy-footer)]/95" />

        <Container className="relative z-10 py-16">
          <div className="grid gap-8 sm:grid-cols-3 lg:grid-cols-7">
            {footer.columns.map((column) => (
              <div key={column.group}>
                <h3 className="cy-p-sm font-semibold">{column.group}</h3>
                <ul className="mt-3 space-y-2">
                  {column.items.map((item) => (
                    <li key={item}>
                      <a
                        href="#footer"
                        className="cy-p-sm text-[var(--cy-oat-800)] transition-colors hover:text-black"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-[var(--cy-oat-300)] pt-6">
            <span className="cy-p-sm text-[var(--cy-oat-700)]">
              {footer.copyright}
            </span>
            <span className="cy-p-sm text-[var(--cy-oat-700)]">
              {footer.credit}{" "}
              <a href="#footer" className="underline underline-offset-4">
                {footer.creditLink}
              </a>
            </span>
            <div className="flex gap-6">
              {footer.social.map((item) => (
                <a
                  key={item.short}
                  href="#footer"
                  aria-label={item.label}
                  className="cy-p-sm text-[var(--cy-oat-700)] transition-colors hover:text-black"
                >
                  {item.short}
                </a>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
