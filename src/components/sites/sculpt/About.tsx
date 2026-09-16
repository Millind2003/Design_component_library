import { about } from "./data";
import { Button, Container, Eyebrow, Gutter } from "./primitives";

/** "A one-day gathering of the most creative minds in GTM" — date and venue. */
export function About() {
  return (
    <section id="about" className="relative block bg-[var(--sc-paper)] text-[var(--sc-ink)]">
      <Gutter>
        <Container>
          <div className="sc-pad-y flex flex-col items-start justify-start gap-14">
            <div className="flex flex-col items-start gap-4">
              <Eyebrow>{about.eyebrow}</Eyebrow>
              <h1 className="sc-h1">{about.heading}</h1>
            </div>

            <p className="sc-text-md max-w-[70rem]">{about.description}</p>

            <div className="flex flex-col items-start gap-4">
              <Eyebrow>{about.whenLabel}</Eyebrow>
              <h2 className="sc-h2">{about.when}</h2>
            </div>

            <div className="flex flex-col items-start gap-4">
              <Eyebrow>{about.whereLabel}</Eyebrow>
              <div className="cursor-default">
                {about.where.map((line) => (
                  <h2 key={line} className="sc-h2">
                    {line}
                  </h2>
                ))}
              </div>
            </div>

            <Button href={about.cta.href} variant="ube" size="rg">
              {about.cta.label}
            </Button>
          </div>
        </Container>
      </Gutter>
    </section>
  );
}
