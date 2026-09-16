import Image from "next/image";
import { sponsors } from "./data";
import { Section, SectionBody } from "./Section";

/** Sponsor logo wall — each mark carries its Gold/Silver tier tag. */
export function Sponsors() {
  return (
    <Section bg="var(--sc-slushie-500)" z={6} dark>
      <SectionBody className="flex flex-col gap-14">
        <h3 className="sc-h1 max-w-[24ch]">{sponsors.title}</h3>

        <div className="flex flex-wrap items-center gap-6">
          {sponsors.logos.map((s, i) => (
            <a
              key={`${s.logo}-${i}`}
              href={s.href || "#"}
              className="group relative flex min-h-[9rem] min-w-[16rem] flex-1 items-center justify-center rounded-[2rem] border border-[var(--sc-paper)]/15 p-8 transition-colors hover:border-[var(--sc-paper)]/40"
            >
              <span className="sc-eyebrow absolute left-6 top-6 flex items-center gap-1 text-[0.7rem] text-[var(--sc-lavender)]">
                {s.tier}
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                >
                  <path d="M4.5 11.5 11.5 4.5" />
                  <path d="M5.5 4.5h6v6" />
                </svg>
              </span>

              <Image
                src={s.logo}
                alt={`${s.tier} sponsor`}
                width={200}
                height={56}
                className="h-auto w-full max-w-[12rem] object-contain"
              />
            </a>
          ))}
        </div>
      </SectionBody>
    </Section>
  );
}
