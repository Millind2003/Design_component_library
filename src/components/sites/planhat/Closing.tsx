import Image from "next/image";
import { cards, cta, event, footer, industries, quotes, story } from "./data";
import {
  ArrowUpRight,
  Button,
  Container,
  Eyebrow,
  Stars,
  Wordmark,
} from "./primitives";
import { NewsletterForm } from "./NewsletterForm";
import { cn } from "@/lib/utils";

/** "Planhat for Service-Intensive Software" — a bordered panel of segments. */
export function Industries() {
  return (
    <section className="ph-section bg-white pb-0">
      <Container>
        <div className="border border-[var(--ph-line)]">
          <div className="grid gap-8 p-8 lg:grid-cols-[1fr_400px] lg:gap-16 lg:p-12">
            <div>
              <Eyebrow>{industries.eyebrow}</Eyebrow>
              <div className="mt-5 flex items-start gap-6">
                <h2 className="ph-h2 max-w-[400px]">{industries.heading}</h2>
                <ArrowUpRight className="mt-2 shrink-0" />
              </div>
            </div>
            <p className="ph-body-sm self-end text-[var(--ph-muted-2)]">
              {industries.body}
            </p>
          </div>

          <div className="grid border-t border-[var(--ph-line)] sm:grid-cols-3 lg:grid-cols-5">
            {industries.tags.map((tag, i) => (
              <a
                key={tag}
                href="#industries"
                className={cn(
                  "ph-label px-6 py-5 text-center transition-colors hover:bg-[var(--ph-off)]",
                  i < industries.tags.length - 1 &&
                    "border-b border-[var(--ph-line)] sm:border-b-0 sm:border-r",
                )}
              >
                {tag}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

/** Featured customer story: quote on the left, photograph on the right. */
export function Story() {
  return (
    <section className="ph-section bg-white">
      <Container>
        <div className="grid border border-[var(--ph-line)] lg:grid-cols-2">
          <div className="flex flex-col justify-between gap-16 p-8 lg:p-12">
            <blockquote className="ph-h4 max-w-[34ch] text-[1.3rem] leading-[1.45]">
              &ldquo;{story.quote}&rdquo;
            </blockquote>

            <div className="flex flex-col gap-1">
              <span className="ph-body">{story.name}</span>
              <span className="ph-label text-[var(--ph-muted)]">{story.role}</span>
            </div>
          </div>

          <div className="relative min-h-[320px] lg:min-h-[520px]">
            <Image
              src={story.poster}
              alt=""
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 flex items-end gap-3 bg-black/70 px-6 py-5 text-white backdrop-blur-sm">
              <span
                className="text-[2.5rem] leading-none"
                style={{ fontFamily: "var(--font-ph-display)", letterSpacing: "-0.04em" }}
              >
                {story.metric.value}
                <span className="text-white/60">{story.metric.unit}</span>
              </span>
              <span className="ph-body-sm pb-1 text-white/80">
                {story.metric.label}
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/** A three-up wall of short review quotes with star ratings. */
export function Quotes() {
  return (
    <section className="bg-white pb-24">
      <Container>
        <div className="grid gap-y-14 md:grid-cols-3">
          {quotes.map((quote) => (
            <figure
              key={quote.name}
              className="flex flex-col items-center gap-3 px-6 text-center"
            >
              <blockquote className="ph-h4 max-w-[26ch] text-[1.05rem]">
                &ldquo;{quote.text}&rdquo;
              </blockquote>
              <Stars className="text-black" />
              <figcaption className="ph-label text-[var(--ph-muted)]">
                {quote.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}

/** Careers and MCP promos, then the closing demo CTA. */
export function Promos() {
  return (
    <section className="bg-white pb-8">
      <Container>
        <div className="grid border border-[var(--ph-line)] md:grid-cols-2">
          {cards.map((card, i) => (
            <a
              key={card.title}
              href="#more"
              className={cn(
                "group flex flex-col gap-4 p-8 transition-colors hover:bg-[var(--ph-off)] lg:p-12",
                i === 0 && "border-b border-[var(--ph-line)] md:border-b-0 md:border-r",
              )}
            >
              <Eyebrow>{card.eyebrow}</Eyebrow>
              <div className="mt-6 flex items-start justify-between gap-6">
                <h3 className="ph-h2 text-[1.9rem]">{card.title}</h3>
                <ArrowUpRight className="shrink-0 text-[var(--ph-muted)] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
              <p className="ph-body-sm max-w-[36ch] text-[var(--ph-muted-2)]">
                {card.body}
              </p>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function Cta() {
  return (
    <section className="bg-white pb-24 pt-8">
      <Container>
        <div className="flex flex-col gap-8 border border-[var(--ph-line)] p-8 lg:flex-row lg:items-end lg:justify-between lg:p-12">
          <div>
            <Eyebrow>{cta.eyebrow}</Eyebrow>
            <h2 className="ph-h2 mt-5 max-w-[16ch]">{cta.heading}</h2>
            <p className="ph-body mt-5 max-w-[46ch] text-[var(--ph-muted-2)]">
              {cta.body}
            </p>
          </div>
          <Button href={cta.action.href} className="shrink-0">
            {cta.action.label}
          </Button>
        </div>

        {/* the Frontier event strip */}
        <a
          href={event.cta.href}
          className="group mt-4 flex flex-col gap-6 bg-black p-8 text-white transition-colors hover:bg-[#141210] lg:flex-row lg:items-center lg:justify-between lg:p-12"
        >
          <div>
            <span
              className="text-[2.25rem] leading-none"
              style={{ fontFamily: "var(--font-ph-display)", letterSpacing: "-0.03em" }}
            >
              {event.title}
            </span>
            <p className="ph-body mt-3 text-white/75">{event.subtitle}</p>
          </div>
          <div className="flex items-center gap-8">
            <span className="ph-label text-white/60">{event.date}</span>
            <span className="ph-label text-white/60">{event.place}</span>
            <span className="ph-label flex items-center gap-2 border border-white/40 px-5 py-3 transition-colors group-hover:bg-white group-hover:text-black">
              {event.cta.label}
              <span className="opacity-60">›</span>
            </span>
          </div>
        </a>
      </Container>
    </section>
  );
}

/** Link columns, newsletter, then the oversized closing wordline. */
export function Footer() {
  return (
    <footer className="overflow-hidden border-t border-[var(--ph-line)] bg-white">
      <Container className="py-16">
        <div className="grid gap-10 sm:grid-cols-3 lg:grid-cols-6">
          {footer.columns.map((column) => (
            <div key={column.group}>
              <h3 className="ph-label text-[var(--ph-muted)]">{column.group}</h3>
              <ul className="mt-4 space-y-2.5">
                {column.items.map((item) => (
                  <li key={item}>
                    <a
                      href="#footer"
                      className="ph-body-sm text-black transition-opacity hover:opacity-60"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-10 border-t border-[var(--ph-line)] pt-10 lg:grid-cols-[1fr_1fr_1fr]">
          <div>
            <p className="ph-label text-[var(--ph-muted)]">
              {footer.reviews.lead}
            </p>
            <p className="ph-body mt-3">{footer.reviews.count}</p>
          </div>
          <p className="ph-body-sm text-[var(--ph-muted-2)]">{footer.security}</p>
          <div>
            <p className="ph-label text-[var(--ph-muted)]">
              {footer.newsletter.label}
            </p>
            <NewsletterForm />
            <p className="ph-body-sm mt-3 text-[var(--ph-muted)]">
              {footer.newsletter.consent}{" "}
              <a href="#privacy" className="underline underline-offset-2">
                {footer.newsletter.policy}
              </a>
              .
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-6 border-t border-[var(--ph-line)] pt-8">
          <Wordmark />
          <div className="flex flex-wrap gap-8">
            {footer.legal.map((item) => (
              <a
                key={item}
                href="#footer"
                className="ph-body-sm text-[var(--ph-muted-2)] transition-opacity hover:opacity-60"
              >
                {item}
              </a>
            ))}
          </div>
          <span className="ph-body-sm text-[var(--ph-muted)]">
            {footer.copyright}
          </span>
        </div>
      </Container>

      {/* the oversized sign-off that closes the page */}
      <div className="border-t border-[var(--ph-line)] px-4 pb-6 pt-10">
        <p
          className="whitespace-nowrap text-center text-[clamp(2rem,9.2vw,9rem)] leading-none"
          style={{ fontFamily: "var(--font-ph-display)", letterSpacing: "-0.045em" }}
        >
          {footer.wordmark}
        </p>
      </div>
    </footer>
  );
}
