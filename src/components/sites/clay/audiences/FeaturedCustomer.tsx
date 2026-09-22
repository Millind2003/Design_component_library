import Image from "next/image";
import { Button, Container } from "../primitives";
import { featuredCustomer as c } from "./data";

/**
 * The Figma pull-quote card between the logo wall and the capabilities scroll.
 *
 * In the source this is a Webflow tabs widget with its tab menu rendered empty,
 * so it is a plain two-column card here.
 */
export function FeaturedCustomer() {
  return (
    <section className="bg-[var(--cy-oat-100)] pb-0 pt-0">
      <Container>
        <div className="overflow-hidden rounded-[30px] border border-[var(--cy-oat-300)] bg-white">
          <div className="flex flex-col items-stretch justify-between min-[992px]:flex-row">
            <div className="w-full min-[992px]:w-1/2">
              <div className="relative aspect-square w-full overflow-hidden rounded-[30px] border border-[var(--cy-oat-300)] max-[992px]:max-h-[310px]">
                <Image
                  src={c.image}
                  alt=""
                  fill
                  sizes="(max-width: 992px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="flex w-full flex-col items-start justify-center gap-2 p-6 min-[992px]:w-1/2 min-[992px]:py-4 min-[992px]:pl-10 min-[992px]:pr-8">
              <span className="text-[0.75em] font-semibold uppercase leading-[1.2] tracking-[0.09em]">
                {c.eyebrow}
              </span>
              <p className="cy-p-lg pb-6 font-medium text-pretty">{c.quote}</p>
              <h2 className="text-base font-medium leading-[1.2]">{c.name}</h2>
              <span className="mb-6 text-[0.75em] font-semibold uppercase leading-[1.2] tracking-[0.09em]">
                {c.role}
              </span>
              <Button href={c.cta.href} variant="dark">
                {c.cta.label}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
