import Image from "next/image";
import { Container } from "../primitives";
import { runs } from "./data";

/**
 * The star band is 1.48× the container wide and absolutely fills the section,
 * so tiles show either side of the oat panel for its whole height. 25 columns
 * × 14 rows covers the tallest case; the rest is clipped.
 */
const STARS = 25 * 14;

/**
 * "Claygent runs and counting" — a near-black band tiled with dashed star
 * boxes, an oat panel carrying the run total, and the Claygent character
 * looking up over the top of it.
 */
export function RunsCounter() {
  return (
    <section className="-mt-[4.65rem] mb-[-3rem] overflow-visible pb-0 pt-0">
      <div className="relative flex flex-col items-center justify-center overflow-hidden bg-[#171614]">
        {/* dashed star grid */}
        <div
          aria-hidden="true"
          className="absolute inset-y-0 left-1/2 flex w-[calc(1.48*min(95vw,80rem))] -translate-x-1/2 flex-wrap content-start items-start justify-center overflow-hidden"
        >
          {Array.from({ length: STARS }).map((_, i) => (
            <div
              key={i}
              className="z-[1] flex aspect-square w-[calc(min(95vw,80rem)/11)] min-[480px]:w-[calc(min(95vw,80rem)/12)] min-[768px]:w-[calc(min(95vw,80rem)/17)]"
            >
              <div className="-m-px flex flex-1 items-center justify-center border-[0.5px] border-dashed border-[#363533] bg-[var(--cy-oat-950)]">
                {/* Clay's character-box drops a mark into a scattered few tiles;
                    a fixed stride keeps that look without a hydration mismatch. */}
                {i % 13 === 5 ? (
                  <Image src={runs.star} alt="" width={20} height={20} className="w-1/3" />
                ) : null}
              </div>
            </div>
          ))}
        </div>

        {/* the band fades to black at both edges */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-[10%] bg-[linear-gradient(270deg,transparent,#171614)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-[10%] bg-[linear-gradient(270deg,#171614,transparent)]"
        />

        <div className="flex w-full">
          <Container>
            <div className="relative z-[2] mx-auto mt-[38.45%] w-[89.2%] rounded-t-[2rem] bg-[var(--cy-oat-950)] pt-7 text-center text-[var(--cy-oat-100)] [container-type:inline-size] min-[480px]:mt-[35.2%] min-[480px]:w-[93.6%] min-[768px]:mt-[24.75%] min-[768px]:w-[90.85%] min-[992px]:mt-[17.6%] min-[992px]:w-full min-[992px]:pb-12 min-[992px]:pt-16">
              <div className="flex flex-col items-center justify-start gap-3 min-[992px]:gap-4">
                <p className="text-xl font-normal opacity-75 min-[992px]:text-[3rem] min-[992px]:leading-none">
                  {runs.label}
                </p>
                <p className="text-[13cqw] font-semibold leading-none tracking-[-0.025em] min-[992px]:text-[13.5cqw]">
                  {runs.count.toLocaleString("en-US")}
                </p>
              </div>

              <div className="relative z-10 mx-auto -mt-[10%] flex aspect-square w-[60%] flex-col justify-end min-[480px]:-mt-[9%] min-[480px]:w-1/2 min-[768px]:-mt-[8%] min-[768px]:w-[45%] min-[992px]:-mt-[8.5%] min-[992px]:w-[39%]">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-hidden="true"
                  className="h-full w-full object-contain"
                >
                  <source src={runs.video} type="video/webm" />
                </video>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
}
