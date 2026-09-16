"use client";

import Image from "next/image";
import { useId, useState } from "react";
import { caseStudies } from "./data";
import { Button, Container } from "../primitives";
import { cn } from "@/lib/utils";

/**
 * Sendoso / Verkada case studies.
 *
 * INTERACTION MODEL: click-driven. This is a Webflow `w-tabs` widget — the
 * logo strip switches panes on click, nothing here is scroll-driven. The active
 * tab takes Clay's lime-200 fill against oat-200 for the inactive one.
 */
export function CaseStudies() {
  const [active, setActive] = useState(0);
  const id = useId();

  return (
    <section className="relative overflow-clip pt-0 pb-24">
      <Container>
        <div className="relative w-full">
          <div
            role="tablist"
            aria-label="Customer case studies"
            className="relative mb-4 flex overflow-hidden rounded-[30px] border-[0.5px] border-[var(--cy-oat-400)] max-[480px]:flex-col"
          >
            {caseStudies.map((cs, i) => (
              <button
                key={cs.name}
                type="button"
                role="tab"
                id={`${id}-tab-${i}`}
                aria-selected={i === active}
                aria-controls={`${id}-panel-${i}`}
                onClick={() => setActive(i)}
                className={cn(
                  "flex min-h-[90px] flex-1 cursor-pointer items-center justify-center px-[30px] py-[9px]",
                  "transition-colors duration-200",
                  i === active
                    ? "bg-[var(--cy-lime-200)]"
                    : "bg-[var(--cy-oat-200)] hover:bg-[var(--cy-oat-300)]",
                )}
              >
                <Image
                  src={cs.tabLogo}
                  alt={cs.tabAlt}
                  width={160}
                  height={40}
                  className="h-8 w-auto max-w-full object-contain"
                />
              </button>
            ))}
          </div>

          <div className="relative overflow-hidden rounded-[30px] border-[0.5px] border-[var(--cy-oat-400)] bg-white p-6 max-[480px]:p-4">
            {caseStudies.map((cs, i) => (
              <div
                key={cs.name}
                role="tabpanel"
                id={`${id}-panel-${i}`}
                aria-labelledby={`${id}-tab-${i}`}
                hidden={i !== active}
              >
                <div className="-mx-3 flex flex-wrap content-stretch justify-between">
                  <div className="mb-0 flex basis-full flex-col px-3 max-[992px]:max-w-full min-[992px]:basis-1/2 min-[992px]:max-w-[50%]">
                    <div className="relative aspect-square w-full flex-none overflow-hidden rounded-[30px] border-[0.5px] border-[var(--cy-oat-400)]">
                      <Image
                        src={cs.image}
                        alt=""
                        fill
                        sizes="(max-width: 991px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <div className="mb-0 flex basis-full flex-col items-start justify-center pl-10 pr-3 max-[992px]:max-w-full max-[480px]:order-[-1] max-[480px]:pl-4 min-[992px]:basis-1/2 min-[992px]:max-w-[50%]">
                    <span className="mb-[1.5em] text-[0.75em] font-semibold uppercase leading-[1.2] tracking-[0.09em]">
                      {cs.eyebrow}
                    </span>
                    <h2 className="mb-[0.3em] text-[1.8rem] font-semibold leading-[1.1em] tracking-[-0.04em] min-[480px]:text-[3.75rem] min-[480px]:leading-[1em]">
                      {cs.name}
                    </h2>
                    <p className="mb-4 text-[1.25rem] leading-[1.4]">{cs.body}</p>
                    <Button href={cs.cta.href} variant="dark">
                      {cs.cta.label}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
