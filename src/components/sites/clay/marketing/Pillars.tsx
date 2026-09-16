import Image from "next/image";
import { pillars } from "./data";
import { Container } from "../primitives";

/**
 * "Unlock 1:1 personalization at scale in any channel" — a white rounded panel
 * holding the section intro and three feature cards.
 *
 * The cards carry Webflow's `.card` class but no `.card` rule exists in the
 * bundle, so every value below comes from the utility classes on the element.
 */
export function Pillars() {
  return (
    <section className="relative overflow-clip py-24">
      <Container className="relative z-[2] overflow-hidden rounded-[30px] bg-white p-6">
        <div className="-mx-3 flex flex-wrap content-stretch justify-center">
          <div className="mx-3 mb-6 mt-8 flex basis-full flex-col max-[992px]:max-w-full min-[992px]:basis-[83.33%] min-[992px]:max-w-[83.3333%]">
            <div className="mx-auto block text-center">
              <h2 className="mb-[0.4em] text-[1.7rem] font-medium leading-[1.1em] tracking-[-0.02em] min-[480px]:text-[2.75rem]">
                {pillars.heading}
              </h2>
              <p className="mb-0 leading-[1.4]">{pillars.body}</p>
            </div>
          </div>
        </div>

        <div className="-mx-3 flex flex-wrap content-stretch max-[992px]:gap-2">
          {pillars.cards.map((card) => (
            <div
              key={card.title}
              className="mb-0 flex basis-full flex-col px-3 max-[992px]:max-w-full min-[992px]:basis-1/3 min-[992px]:max-w-[33.3333%]"
            >
              <article className="h-full overflow-hidden rounded-[30px] border-[0.5px] border-[var(--cy-oat-400)] bg-[var(--cy-oat-100)] p-6">
                <div className="relative mb-4 aspect-square h-12 w-12 overflow-hidden">
                  <Image
                    src={card.icon}
                    alt=""
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <h3 className="mb-[0.75em] text-[1.5rem] font-semibold leading-[1.2em] tracking-[-0.02em]">
                  {card.title}
                </h3>
                <p className="mb-0 leading-[1.4]">{card.body}</p>
              </article>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
