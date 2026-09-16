import { whyAttend } from "./data";
import { Section, SectionBody } from "./Section";

/** "Why attend Sculpt?" — three columns on the deep teal band. */
export function WhyAttend() {
  return (
    <Section id="why-attend" bg="var(--sc-slushie-500)" z={3} dark>
      <SectionBody className="flex flex-col gap-14 pb-0">
        <div className="flex flex-col gap-8">
          <h2 className="sc-h1 max-w-[20ch]">{whyAttend.title}</h2>
          {whyAttend.description ? (
            <p className="sc-text-md max-w-[70rem]">{whyAttend.description}</p>
          ) : null}
        </div>

        <div className="grid grid-cols-1 gap-8 pb-16 min-[768px]:grid-cols-3">
          {whyAttend.cards.map((card) => (
            <article
              key={card.title}
              className="flex max-w-[32rem] flex-col items-start justify-start gap-4"
            >
              <h3 className="sc-h3">{card.title}</h3>
              <p className="sc-text-rg text-pretty">{card.body}</p>
            </article>
          ))}
        </div>
      </SectionBody>
    </Section>
  );
}
