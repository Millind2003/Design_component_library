import { buildingBlocks } from "./data";
import { Section, SectionBody } from "./Section";

/** Four pink pills on the lemon-dark band: Data / AI / Orchestration / Execution. */
export function BuildingBlocks() {
  return (
    <Section bg="var(--sc-lemon-500)" z={2} dark>
      <SectionBody className="flex flex-col gap-14">
        <h2 className="sc-h1 max-w-[24ch]">{buildingBlocks.title}</h2>

        <div className="grid grid-cols-2 gap-6 min-[768px]:grid-cols-4">
          {buildingBlocks.cards.map((card) => (
            <article
              key={card.title}
              className="relative z-[5] flex min-h-full min-w-full cursor-default flex-col items-center justify-start gap-8 rounded-[4rem] bg-[var(--sc-dragonfruit-300)] p-8 text-center text-[var(--sc-ink)]"
            >
              <h3 className="sc-h3">{card.title}</h3>
              <p className="sc-text-rg">{card.body}</p>
            </article>
          ))}
        </div>
      </SectionBody>
    </Section>
  );
}
