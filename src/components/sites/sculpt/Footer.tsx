import Image from "next/image";
import { footer } from "./data";
import { Container, Gutter } from "./primitives";
import { SculptWordmark } from "./SculptWordmark";

/** Dark footer: the wordmark again, the strapline, and the credits row. */
export function Footer() {
  const clayLogo = footer.images[0];
  const menu = footer.links.filter((l) => l.label);

  return (
    <footer className="relative z-10 bg-[var(--sc-ink)] text-[var(--sc-paper)]">
      <Gutter>
        <Container>
          <div className="sc-pad-y flex flex-col gap-16">
            <div className="flex flex-col gap-8">
              <SculptWordmark className="h-auto w-full" />

              <div className="flex flex-col justify-between gap-4 min-[768px]:flex-row">
                <span className="sc-eyebrow text-[var(--sc-lavender)]">
                  the go-to-market conference by clay
                </span>
                <span className="sc-eyebrow text-[var(--sc-lavender)] min-[768px]:text-right">
                  <span className="block">october 8, 2026</span>
                  <span className="block">pier 48, san francisco</span>
                </span>
              </div>
            </div>

            <div className="flex flex-col items-start justify-between gap-6 min-[768px]:flex-row min-[768px]:items-center">
              <a href="https://www.clay.com/" className="inline-flex">
                {clayLogo ? (
                  <Image
                    src={clayLogo}
                    alt="Clay"
                    width={120}
                    height={36}
                    className="h-8 w-auto"
                  />
                ) : null}
              </a>

              <nav className="flex flex-wrap items-center gap-6">
                {menu.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="sc-text-rg underline-offset-4 hover:underline"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </Container>
      </Gutter>
    </footer>
  );
}
