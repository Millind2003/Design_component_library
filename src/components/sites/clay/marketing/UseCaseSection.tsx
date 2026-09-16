import Image from "next/image";
import { Button, Container } from "../primitives";
import { cn } from "@/lib/utils";
import type { MarketingUseCase } from "./types";

/**
 * One of the four alternating use-case bands (inbound, prospecting, PLG, ABM).
 *
 * `mediaFirst` mirrors Webflow's source order. Those variants also carry
 * `.u-md-first`, which flips the text column above the media at ≤991px — so the
 * copy always leads on tablet and phone regardless of the desktop side.
 */
export function UseCaseSection({ useCase }: { useCase: MarketingUseCase }) {
  const media = (
    <div
      className={cn(
        "mb-0 flex basis-full flex-col px-3 max-[992px]:max-w-full",
        "min-[992px]:basis-1/2 min-[992px]:max-w-[50%]",
        useCase.mediaFirst && "max-[992px]:order-1",
      )}
    >
      <div
        className={cn(
          "relative aspect-square w-full flex-none overflow-hidden rounded-[30px]",
          useCase.mediaBorder && "border-[0.5px] border-[var(--cy-oat-400)]",
        )}
      >
        {useCase.video ? (
          <video
            src={useCase.video}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : useCase.image ? (
          <Image
            src={useCase.image}
            alt=""
            fill
            sizes="(max-width: 991px) 100vw, 50vw"
            className="object-cover"
          />
        ) : null}
      </div>
    </div>
  );

  const copy = (
    <div
      className={cn(
        "mb-6 flex basis-full flex-col items-start justify-center max-[992px]:max-w-full",
        "min-[992px]:basis-1/2 min-[992px]:max-w-[50%]",
        useCase.mediaFirst
          ? "px-3 py-6 max-[992px]:order-[-9999] max-[480px]:py-4"
          : "mt-4 pl-3 pr-6",
      )}
    >
      <h2 className="mb-[0.3em] text-[1.7rem] font-medium leading-[1.1em] tracking-[-0.03em] max-[992px]:mb-[0.4em] min-[480px]:text-[2.75rem]">
        {useCase.heading}
      </h2>
      <p className="mb-4 text-balance pr-6 leading-[1.4]">{useCase.body}</p>
      <Button href={useCase.cta.href} variant="dark">
        {useCase.cta.label}
      </Button>
    </div>
  );

  return (
    <section className="relative overflow-clip pt-0 pb-24">
      <Container className="overflow-hidden rounded-[30px] bg-white px-8 py-4">
        <div className="-mx-3 flex flex-wrap content-stretch justify-between">
          {useCase.mediaFirst ? (
            <>
              {media}
              {copy}
            </>
          ) : (
            <>
              {copy}
              {media}
            </>
          )}
        </div>
      </Container>
    </section>
  );
}
