import { Container } from "../primitives";
import { cn } from "@/lib/utils";
import { useCases } from "./data";
import type { AudiencesUseCase, AudiencesUseCaseGroup } from "./types";

/**
 * "Use cases to build on Audiences" — a sticky intro beside two themed runs of
 * cards. Each run is a 2-column grid holding three cards, so the third sits
 * half-width on the second row, exactly as the source lays it out.
 */
export function UseCases() {
  return (
    <section className="cy-section bg-white">
      <Container>
        <div className="grid grid-cols-1 gap-8 min-[992px]:grid-cols-2 min-[992px]:gap-4">
          {/* .aud-uses_title sticks at top:5rem; ours clears the fixed nav too. */}
          <div className="flex max-w-[22rem] flex-col items-start gap-4 min-[992px]:sticky min-[992px]:top-32 min-[992px]:max-w-[25rem] min-[992px]:self-start">
            <h2 className="cy-h3 text-balance">{useCases.heading}</h2>
            <p className="max-w-[22rem] text-base leading-[1.4]">
              {useCases.body}
            </p>
          </div>

          <div className="flex flex-col gap-10 pt-1 min-[768px]:gap-12 min-[992px]:gap-16">
            {useCases.groups.map((group) => (
              <Group key={group.eyebrow} group={group} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

/** Clay themes the lime run off lime-200/500 and the growth run off blueberry. */
const themes = {
  lime: { card: "bg-[var(--cy-lime-200)]", arrow: "bg-[#102b03]" },
  blueberry: { card: "bg-[var(--cy-blueberry-200)]", arrow: "bg-[#001433]" },
} as const;

function Group({ group }: { group: AudiencesUseCaseGroup }) {
  return (
    <div>
      <div className="mb-4 text-[0.75em] font-semibold uppercase leading-[1.2] tracking-[0.09em]">
        {group.eyebrow}
      </div>
      <div className="grid grid-cols-1 gap-4 min-[768px]:grid-cols-2">
        {group.cards.map((card) => (
          <Card key={card.title} card={card} theme={group.theme} />
        ))}
      </div>
    </div>
  );
}

function Card({
  card,
  theme,
}: {
  card: AudiencesUseCase;
  theme: AudiencesUseCaseGroup["theme"];
}) {
  const t = themes[theme];

  return (
    <a
      href={card.cta.href}
      className={cn(
        "flex flex-col justify-between gap-12 rounded-[var(--cy-radius)] p-6",
        "transition-[filter] duration-200 hover:brightness-[0.97]",
        t.card,
      )}
    >
      <div className="flex flex-col items-start gap-3">
        <span className="text-base font-semibold leading-[1.4]">{card.title}</span>
        <p className="text-base leading-[1.4]">{card.body}</p>
      </div>

      <div className="flex items-center justify-between gap-4">
        <span className="text-base font-semibold leading-[1.4]">{card.cta.label}</span>
        <span
          className={cn(
            "flex h-12 w-12 shrink-0 items-center justify-center rounded-[var(--cy-radius-sm)] text-[var(--cy-oat-100)]",
            t.arrow,
          )}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            className="h-6 w-6"
          >
            <path
              d="M7 17L17 7M17 17V7H7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </a>
  );
}
