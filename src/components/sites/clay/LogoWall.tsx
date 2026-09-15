import Image from "next/image";
import { logos } from "./assets";
import { logoWall, testimonials } from "./data";
import { Container } from "./primitives";

/**
 * The social-proof wall. On the original this is a horizontal row of cards
 * (`.home-logo_base` is `flex-flow: row`) sitting inside one large rounded
 * panel — logo cards and testimonial cards side by side, scrolling.
 *
 * Every card is given the same height here so the row reads as one band; the
 * original mixes 5rem logo cards with taller quote cards.
 */
export function LogoWall() {
  const row = buildRow();

  return (
    <section className="relative bg-[var(--cy-oat-50)] pb-[var(--cy-section-y)]">
      <Container>
        <div className="min-h-[20rem] overflow-hidden rounded-[var(--cy-radius-lg)] bg-[var(--cy-oat-200)] py-[var(--cy-card-pad)]">
          <p className="cy-p-md mx-auto max-w-[45rem] text-balance px-6 text-center">
            {logoWall.lead}{" "}
            <a href="#customers" className="font-bold underline underline-offset-4">
              {logoWall.linkOne}
            </a>
            {logoWall.mid}{" "}
            <a href="#about" className="font-bold underline underline-offset-4">
              {logoWall.linkTwo}
            </a>
            {logoWall.end}
          </p>

          <div
            className="relative mt-10 flex overflow-hidden"
            style={
              {
                maskImage:
                  "linear-gradient(to right, transparent, black 4%, black 96%, transparent)",
                WebkitMaskImage:
                  "linear-gradient(to right, transparent, black 4%, black 96%, transparent)",
                "--cy-marquee-duration": "80s",
              } as React.CSSProperties
            }
          >
            {[0, 1].map((track) => (
              <div
                key={track}
                aria-hidden={track === 1}
                className="cy-marquee flex shrink-0 gap-3 pl-3"
              >
                {row.map((cell, i) =>
                  cell.kind === "logo" ? (
                    <LogoCard key={`${track}-l-${i}`} logo={cell.logo} />
                  ) : (
                    <QuoteCard key={`${track}-q-${i}`} index={cell.index} />
                  ),
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

type Cell =
  | { kind: "logo"; logo: (typeof logos)[number] }
  | { kind: "card"; index: number };

/** Interleave a quote card after roughly every four logos. */
function buildRow(): Cell[] {
  const out: Cell[] = [];
  let t = 0;
  logos.forEach((logo, i) => {
    out.push({ kind: "logo", logo });
    if ((i + 1) % 4 === 0 && t < testimonials.length) {
      out.push({ kind: "card", index: t++ });
    }
  });
  while (t < testimonials.length) out.push({ kind: "card", index: t++ });
  return out;
}

/** Shared card chrome: warm ground, 1.125rem radius, hairline top and bottom. */
const cardBase =
  "flex h-[11rem] shrink-0 flex-col rounded-[1.125rem] border-t border-white bg-[var(--cy-oat-100)] px-5 py-4 shadow-[inset_0_-1px_0_rgba(123,121,116,0.15)]";

function LogoCard({ logo }: { logo: (typeof logos)[number] }) {
  return (
    <div className={`${cardBase} w-[13rem] items-center justify-center`}>
      <Image
        src={logo.src}
        alt={`${logo.name} logo`}
        width={140}
        height={32}
        className="h-8 w-auto max-w-[80%] object-contain opacity-75"
      />
    </div>
  );
}

function QuoteCard({ index }: { index: number }) {
  const person = testimonials[index];

  return (
    <figure className={`${cardBase} w-[24rem] justify-between gap-3`}>
      <blockquote className="cy-p-sm line-clamp-3 text-[var(--cy-oat-950)]">
        &ldquo;{person.quote}&rdquo;
      </blockquote>

      {person.stats ? (
        <div className="flex gap-5">
          {person.stats.slice(0, 3).map((stat) => (
            <div key={stat.label} className="min-w-0">
              <div className="text-[1.15rem] leading-none">{stat.value}</div>
              <div className="cy-p-sm line-clamp-2 text-[0.75rem] text-[var(--cy-oat-700)]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      ) : null}

      <figcaption className="flex items-center gap-2.5">
        {person.portrait ? (
          <Image
            src={person.portrait}
            alt={person.name}
            width={28}
            height={28}
            className="h-7 w-7 shrink-0 rounded-full object-cover"
          />
        ) : (
          <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[var(--cy-oat-400)] text-[0.65rem]">
            {person.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </span>
        )}
        <span className="cy-p-sm truncate text-[0.8rem]">
          <span className="font-medium">{person.name}</span>
          <span className="text-[var(--cy-oat-700)]">, {person.role}</span>
        </span>
      </figcaption>
    </figure>
  );
}
