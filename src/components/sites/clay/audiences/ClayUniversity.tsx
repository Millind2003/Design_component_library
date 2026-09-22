import Image from "next/image";
import { Button, Container } from "../primitives";
import { university } from "./data";

/** The closing "Get started on Clay University" card, above the site footer. */
export function ClayUniversity() {
  return (
    <section className="bg-white pb-16 pt-20 min-[992px]:pb-16 min-[992px]:pt-24">
      <Container className="overflow-hidden rounded-[30px] border border-[var(--cy-oat-300)] bg-white px-6 py-4 min-[992px]:px-8">
        <div className="flex flex-col items-stretch justify-between gap-8 min-[992px]:flex-row min-[992px]:gap-0">
          <div className="flex w-full flex-col justify-center pt-4 min-[992px]:w-1/2 min-[992px]:pr-6">
            <div className="mb-5">
              <Image
                src={university.icon}
                alt=""
                width={56}
                height={56}
                className="h-14 w-14 object-contain"
              />
            </div>
            <div className="flex flex-col items-start gap-4">
              <h2 className="cy-h3 text-balance">{university.heading}</h2>
              <Button href={university.cta.href} variant="dark">
                <strong className="font-semibold">{university.cta.label}</strong>
              </Button>
            </div>
          </div>

          <div className="w-full min-[992px]:w-1/2">
            <div className="relative aspect-square w-full overflow-hidden rounded-[30px] border border-[var(--cy-oat-300)]">
              <Image
                src={university.image}
                alt={university.alt}
                fill
                sizes="(max-width: 992px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
