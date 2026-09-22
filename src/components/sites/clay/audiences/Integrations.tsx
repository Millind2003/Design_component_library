import Image from "next/image";
import { Button, Container } from "../primitives";
import { integrations } from "./data";

/** "Import millions of records" — a centred row of 5rem source tiles. */
export function Integrations() {
  return (
    <section className="cy-section bg-white">
      <Container>
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="flex flex-col items-center gap-2.5 text-center">
            <span className="cy-p-md font-medium">{integrations.eyebrow}</span>
            <h2 className="cy-h3 text-balance">{integrations.heading}</h2>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {integrations.logos.map((item) => (
              <div
                key={item.logo}
                className="flex h-20 w-20 items-center justify-center rounded-[var(--cy-radius)] bg-[var(--cy-oat-200)] px-[0.8rem] py-4"
              >
                <Image
                  src={item.logo}
                  alt={item.alt}
                  width={48}
                  height={48}
                  className="h-full w-auto object-contain"
                />
              </div>
            ))}
          </div>

          <Button href={integrations.cta.href} variant="dark" className="text-[0.875rem]">
            {integrations.cta.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}
