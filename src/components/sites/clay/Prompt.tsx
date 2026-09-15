"use client";

import { useEffect, useState } from "react";
import { inputAction } from "./data";
import { ArrowRight, Container } from "./primitives";

/**
 * "What do you want to build?" — a prompt box whose placeholder cycles through
 * example queries, with quick-start chips underneath.
 */
export function Prompt() {
  const [value, setValue] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % inputAction.prompts.length),
      4000,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section className="cy-pt-small cy-pb-small relative z-[5] bg-[var(--cy-oat-50)]">
      <Container>
        <div className="mx-auto flex max-w-[46rem] flex-col items-center gap-6">
          <h3 className="cy-h3 text-center">{inputAction.heading}</h3>

          <form
            className="w-full"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="relative rounded-[var(--cy-radius)] border border-[var(--cy-oat-300)] bg-white p-4 shadow-[0_2px_24px_rgba(0,0,0,0.05)]">
              <textarea
                value={value}
                onChange={(e) => setValue(e.target.value)}
                rows={3}
                aria-label={inputAction.heading}
                className="cy-p w-full resize-none bg-transparent pr-12 outline-none"
              />

              {/* The placeholder is its own layer so it can cross-fade. */}
              {value === "" ? (
                <div className="pointer-events-none absolute inset-4 pr-12">
                  {inputAction.prompts.map((prompt, i) => (
                    <span
                      key={prompt}
                      className={`cy-p absolute inset-0 text-[var(--cy-oat-700)] transition-opacity duration-700 ${
                        i === index ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      {prompt}
                    </span>
                  ))}
                </div>
              ) : null}

              <button
                type="submit"
                className="absolute bottom-4 right-4 grid h-9 w-9 place-items-center rounded-full bg-black text-white transition-colors hover:bg-[var(--cy-oat-950)]"
              >
                <ArrowRight />
                <span className="sr-only">{inputAction.submit}</span>
              </button>
            </div>

            <div className="mt-3 flex flex-wrap justify-center gap-2">
              {inputAction.chips.map((chip) => (
                <button
                  key={chip}
                  type="button"
                  onClick={() => setValue(chip)}
                  className="cy-p-sm rounded-full border border-[var(--cy-oat-300)] bg-white px-4 py-2 transition-colors hover:bg-[var(--cy-oat-100)]"
                >
                  {chip}
                </button>
              ))}
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}
