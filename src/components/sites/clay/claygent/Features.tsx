import Image from "next/image";
import { Container } from "../primitives";
import { cn } from "@/lib/utils";
import { features, intro } from "./data";
import type { ClaygentFeature } from "./types";

/**
 * "Agents built on your entire GTM context" plus the four feature rows.
 *
 * Each row is `position: sticky; top: .75rem`, so they pin in turn and the next
 * card scrolls over the last — the stack needs no JS. Odd rows reverse, putting
 * the copy left of the panel.
 */
export function Features() {
  return (
    <>
      <section className="pb-0 pt-0">
        <Container className="relative">
          <div className="px-4 min-[768px]:px-9 min-[992px]:px-12">
            <div className="flex flex-col items-center gap-4 text-center min-[992px]:gap-5">
              <div className="max-w-[30rem] pt-6 min-[768px]:max-w-[35rem] min-[992px]:max-w-[45rem] min-[992px]:pt-12">
                <h2 className="cy-h2 text-balance">{intro.heading}</h2>
              </div>
              <div className="max-w-[30rem] pb-4">
                <p className="cy-p-md text-[var(--cy-oat-800)]">{intro.body}</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* rounded bottom + z-5 so this section curves over the dark runs band */}
      <section className="relative z-[5] overflow-visible rounded-b-[2rem] bg-[var(--cy-oat-50)] pb-32 pt-24">
        <Container>
          <div className="flex w-full flex-col gap-6 py-8 min-[768px]:gap-8">
            {features.map((feature) => (
              <FeatureRow key={feature.heading} feature={feature} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

function FeatureRow({ feature }: { feature: ClaygentFeature }) {
  return (
    <div className="relative w-full min-[992px]:sticky min-[992px]:top-3">
      <div
        className={cn(
          "relative flex w-full overflow-hidden rounded-[2rem] border-[0.5px] border-[var(--cy-border)] bg-white",
          "flex-col min-[992px]:flex-row",
          feature.reversed && "min-[992px]:flex-row-reverse",
        )}
      >
        {/* the hairline that splits panel from copy */}
        <div
          aria-hidden="true"
          className="absolute inset-y-0 left-0 right-0 mx-auto hidden w-px bg-[var(--cy-border)] min-[992px]:block"
        />

        <div className="flex w-full p-5 min-[992px]:w-[58%] min-[992px]:p-6">
          <div className="relative w-full overflow-hidden rounded-[1.5rem]">
            <Image
              src={feature.image}
              alt={feature.alt}
              width={1400}
              height={1166}
              className="w-full"
            />
          </div>
        </div>

        <div
          className={cn(
            "flex flex-1 flex-col justify-between gap-8 px-5 pb-8 pt-2",
            "min-[992px]:gap-8 min-[992px]:py-16",
            feature.reversed
              ? "min-[992px]:pl-12 min-[992px]:pr-6"
              : "min-[992px]:pl-6 min-[992px]:pr-12",
          )}
        >
          <div className="flex max-w-[28rem] flex-col items-start gap-4">
            <span className="text-[0.75em] font-semibold uppercase leading-[1.2] tracking-[0.09em]">
              {feature.eyebrow}
            </span>
            <h3 className="cy-h3 text-balance">{feature.heading}</h3>
          </div>

          <div className="flex flex-col items-start gap-5">
            {feature.body.map((para) => (
              <p key={para} className="cy-p-md text-balance text-[var(--cy-oat-800)]">
                {para}
              </p>
            ))}
            <LineLink href={feature.cta.href}>{feature.cta.label}</LineLink>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Clay's `.line-link`: a label over an oat rule that fills in on hover. */
export function LineLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="group mb-px flex items-center justify-start gap-1 text-base font-medium"
    >
      <span className="relative flex flex-col items-start justify-center">
        <span>{children}</span>
        <span className="absolute inset-x-0 bottom-0 -mb-[0.1rem] h-[0.125rem] overflow-hidden rounded-full bg-[var(--cy-oat-300)]">
          <span className="absolute inset-0 origin-left scale-x-0 bg-[var(--cy-oat-950)] transition-transform duration-300 group-hover:scale-x-100" />
        </span>
      </span>
      <span className="relative -mb-[0.15rem] block h-[1em] w-[1em] overflow-hidden">
        <Arrow className="absolute inset-0 transition-transform duration-300 group-hover:translate-x-full" />
        <Arrow className="absolute inset-0 -translate-x-full transition-transform duration-300 group-hover:translate-x-0" />
      </span>
    </a>
  );
}

function Arrow({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path
        d="M4 12H20M14 18L20 12L14 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
