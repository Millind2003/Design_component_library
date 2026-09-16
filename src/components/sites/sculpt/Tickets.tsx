import { tickets } from "./data";
import { Section, SectionBody } from "./Section";
import { Button } from "./primitives";

/** "Get tickets" — three selling points beside the single price card. */
export function Tickets() {
  const card = tickets.card;

  return (
    <Section id="tickets" bg="var(--sc-lime-200)" z={4}>
      <SectionBody className="flex flex-col gap-14 text-[var(--sc-ink)]">
        <h2 className="sc-h1">{tickets.title}</h2>

        <div className="grid grid-cols-1 gap-12 min-[992px]:grid-cols-[1fr_1fr] min-[992px]:gap-16">
          <div className="flex flex-col gap-8">
            {tickets.items.map((item) => (
              <div key={item.title} className="flex flex-col gap-2">
                <h3 className="sc-h3 font-normal">{item.title}</h3>
                <p className="sc-text-sm">{item.body}</p>
              </div>
            ))}
          </div>

          {card ? (
            <div className="relative overflow-hidden rounded-[4rem] bg-[var(--sc-paper)] p-8 min-[992px]:p-12">
              <div className="flex flex-col gap-6">
                <span className="sc-eyebrow text-[var(--sc-ink)]">{card.eyebrow}</span>

                <div className="flex flex-col gap-3">
                  <span className="sc-h2">{card.price}</span>
                  <p className="sc-text-sm">
                    {card.description.map((seg, i) =>
                      seg.href ? (
                        <a
                          key={i}
                          href={seg.href}
                          className="underline underline-offset-4 hover:no-underline"
                        >
                          {seg.text}
                        </a>
                      ) : (
                        <span key={i}>{i ? " " : ""}{seg.text}{" "}</span>
                      ),
                    )}
                  </p>
                </div>

                {card.cta ? (
                  <Button
                    href={card.cta.href}
                    variant="solidLime"
                    className="bg-[var(--sc-ink)] text-[var(--sc-paper)] hover:bg-[var(--sc-dragonfruit-500)]"
                    size="rg"
                  >
                    {card.cta.label}
                  </Button>
                ) : null}
              </div>
            </div>
          ) : null}
        </div>
      </SectionBody>
    </Section>
  );
}
