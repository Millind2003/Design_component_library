import { Container } from "../primitives";
import { FrameLines } from "./FrameLines";
import { steps } from "./data";

/**
 * "How to create your first agent in Clay" — four numbered columns in a single
 * bordered card that runs off the bottom of the section behind a white fade.
 */
export function Steps() {
  // rounded top + z-5 so this section curves up over the dark runs band
  return (
    <section className="relative z-[5] rounded-t-[2rem] bg-[var(--cy-oat-50)] py-24">
      <Container className="relative">
        <div className="px-4 min-[768px]:px-9 min-[992px]:px-12">
          <div className="flex flex-col justify-between gap-5 pb-8 min-[992px]:flex-row min-[992px]:pb-12">
            <div className="max-w-[30rem]">
              <h2 className="cy-h3 text-balance">{steps.heading}</h2>
            </div>
            <div className="max-w-[22rem]">
              <p className="cy-p-md text-[var(--cy-oat-800)]">{steps.body}</p>
            </div>
          </div>
        </div>

        <div className="relative px-8 min-[768px]:px-[4.5rem] min-[992px]:px-24">
          <FrameLines className="mx-0" />

          <div className="relative mt-12 flex flex-col">
            <div className="relative z-[2] grid grid-cols-1 rounded-t-[2rem] border-[0.5px] border-b-0 border-[var(--cy-border)] bg-white min-[768px]:grid-cols-2 min-[992px]:grid-cols-4">
              {steps.items.map((step, i) => (
                <div
                  key={step.title}
                  className="-mr-px flex flex-col items-start justify-start gap-10 border-[var(--cy-border)] p-6 pb-8 min-[768px]:-mt-px min-[768px]:border-t-[0.5px] min-[992px]:mt-0 min-[992px]:border-t-0 min-[992px]:border-r-[0.5px] min-[992px]:pb-24"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border-[0.5px] border-[var(--cy-border)] bg-[var(--cy-oat-100)] font-medium text-[var(--cy-oat-800)]">
                    {i + 1}
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="cy-p-md font-medium">{step.title}</p>
                    <p className="cy-p text-[var(--cy-oat-700)]">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* .slab-fade.cc-height-6rem — the card dissolves into the page */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[3] h-24 bg-[linear-gradient(transparent,#fff_85%)]" />
          </div>
        </div>
      </Container>
    </section>
  );
}
