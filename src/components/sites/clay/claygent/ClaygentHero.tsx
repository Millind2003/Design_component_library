"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Container } from "../primitives";
import { FrameLines, SlabTextures } from "./FrameLines";
import { hero } from "./data";

/**
 * "Build agents for any GTM task" — headline, the Sculptor prompt box, then the
 * blueberry slab carrying the product screenshot.
 *
 * The prompt box posts to Clay's agent builder, and its placeholder cycles
 * through `hero.prompts` the way the live site's `input-action_loop` does.
 */
export function ClaygentHero() {
  return (
    <>
      <section className="pt-28 min-[768px]:pt-32">
        <Container>
          <div className="relative px-4 min-[768px]:px-9 min-[992px]:px-12">
            <div className="relative z-[2] flex flex-col gap-6">
              <div className="mx-auto max-w-[35rem] min-[992px]:max-w-[60rem]">
                <h1 className="cy-h1 text-balance text-center">{hero.heading}</h1>
              </div>
              <div className="relative mx-auto max-w-[40rem] pb-8 min-[992px]:mb-10 min-[992px]:pb-10">
                <p className="cy-p-lg text-balance text-center text-[var(--cy-oat-800)]">
                  {hero.body}
                </p>
              </div>

              {/* .claygent-hero_grid-lines — desktop only in the source */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[3] hidden h-1/2 min-[992px]:block">
                <FrameLines sides={["left", "right"]} className="mx-0" />
              </div>
            </div>

            <PromptBox />
          </div>
        </Container>
      </section>

      <section className="relative pt-0">
        <Container className="relative">
          <div className="flex flex-col py-5 min-[992px]:py-0">
            <div className="relative -my-8 overflow-hidden rounded-[2rem] min-[992px]:-my-12">
              <div className="absolute inset-0 z-[1] bg-[var(--cy-blueberry-300)]">
                <SlabTextures />
              </div>

              <div className="relative z-[2] flex w-full">
                <Image
                  src={hero.image}
                  alt={hero.imageAlt}
                  width={1600}
                  height={659}
                  priority
                  className="hidden w-full min-[768px]:block"
                />
                <Image
                  src={hero.imageMobile}
                  alt={hero.imageMobileAlt}
                  width={1217}
                  height={1251}
                  priority
                  className="w-full min-[768px]:hidden"
                />
              </div>

              {/* .slab_fade — the panel melts into the page at its foot */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[3] h-[40%]">
                <div className="absolute inset-0 z-[2] bg-gradient-to-b from-transparent to-[var(--cy-blueberry-300)] opacity-30" />
                <div className="absolute inset-0 z-[1] bg-[linear-gradient(transparent,#fff_85%)]" />
              </div>
            </div>
          </div>

          <FrameLines className="hidden min-[992px]:flex" />
        </Container>
      </section>
    </>
  );
}

function PromptBox() {
  const [index, setIndex] = useState(0);
  const [typed, setTyped] = useState("");

  // Cycle the placeholder while the field is untouched.
  useEffect(() => {
    if (typed) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % (hero.prompts.length + 1)), 4000);
    return () => clearInterval(id);
  }, [typed]);

  const placeholder = index === 0 ? hero.placeholder : hero.prompts[index - 1];

  return (
    <form
      action={hero.action}
      method="get"
      className="relative z-[5] mx-auto mb-12 max-w-[35rem] rounded-[1.55rem] border-[0.5px] border-[var(--cy-border)] bg-[var(--cy-oat-200)] p-[0.3rem] min-[992px]:-mt-10 min-[992px]:mb-[-0.4rem]"
    >
      <div className="relative flex flex-col gap-2.5 rounded-[1.25rem] border-[0.5px] border-[var(--cy-border)] bg-white p-[0.8rem]">
        <div className="flex items-start justify-start gap-[0.4rem]">
          <div className="flex items-center justify-center rounded-lg">
            <Image
              src={hero.icon}
              alt=""
              width={32}
              height={32}
              className="w-8"
              priority
            />
          </div>
          <label htmlFor="claygent-prompt" className="sr-only">
            Describe the agent you want to build
          </label>
          <textarea
            id="claygent-prompt"
            name="prompt"
            rows={2}
            value={typed}
            onChange={(e) => setTyped(e.target.value)}
            placeholder={placeholder}
            className="min-h-[4.25rem] flex-1 resize-none px-2 pb-2 pt-0.5 leading-[1.5] text-[var(--cy-oat-800)] outline-none placeholder:text-[var(--cy-oat-600)]"
          />
        </div>

        <div className="flex items-center justify-end">
          <button
            type="submit"
            className="group flex items-center justify-center gap-[0.4rem] rounded-xl bg-[var(--cy-oat-950)] px-4 py-2.5 font-medium text-[var(--cy-oat-100)] transition-colors hover:bg-[var(--cy-oat-900)]"
          >
            <span className="text-[0.875rem]">{hero.submit}</span>
            <span className="relative block h-[1em] w-[1em] overflow-hidden">
              <ArrowRight className="absolute inset-0 transition-transform duration-300 group-hover:translate-x-full" />
              <ArrowRight className="absolute inset-0 -translate-x-full transition-transform duration-300 group-hover:translate-x-0" />
            </span>
          </button>
        </div>
      </div>
    </form>
  );
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path
        d="M4 12H20M14 18L20 12L14 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
