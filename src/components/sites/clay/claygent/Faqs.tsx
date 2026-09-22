"use client";

import { useState } from "react";
import { Container } from "../primitives";
import { cn } from "@/lib/utils";
import { faqs } from "./data";
import type { ClaygentFaq, FaqBlock, FaqRun } from "./types";

/**
 * "FAQs about agents in Clay" — a sticky title beside a list of accordions.
 * Clay opens one at a time; the answers mix prose, lists and one comparison
 * table, so `FaqBlock` carries each shape.
 */
export function Faqs() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section className="bg-[linear-gradient(180deg,var(--cy-oat-50),white)] pb-24 pt-8">
      <Container className="relative">
        <div className="px-4 min-[768px]:px-9 min-[992px]:px-12">
          <div className="flex flex-col justify-between gap-5 min-[992px]:flex-row min-[992px]:gap-6">
            <div className="flex flex-col items-start min-[992px]:w-[35%]">
              <div className="max-w-[20rem] min-[992px]:sticky min-[992px]:top-32">
                <h2 className="cy-h3 text-balance">{faqs.heading}</h2>
              </div>
            </div>

            <div className="flex flex-1 flex-col border-b-[0.5px] border-[var(--cy-border)]">
              {faqs.items.map((faq) => (
                <AccordionItem
                  key={faq.question}
                  faq={faq}
                  open={open === faq.question}
                  onToggle={() =>
                    setOpen((cur) => (cur === faq.question ? null : faq.question))
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function AccordionItem({
  faq,
  open,
  onToggle,
}: {
  faq: ClaygentFaq;
  open: boolean;
  onToggle: () => void;
}) {
  const id = faq.question.replace(/\W+/g, "-").toLowerCase();

  return (
    <div className="border-t-[0.5px] border-[var(--cy-border)]">
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          className="flex w-full cursor-pointer items-center justify-between gap-4 py-6 text-left"
        >
          <span className="cy-p-lg text-balance">{faq.question}</span>
          <span className="shrink-0">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-6 w-6">
              <path
                d="M12 5V19M5 12H19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                className={cn("origin-center transition-transform duration-300", open && "rotate-45")}
              />
            </svg>
          </span>
        </button>
      </h3>

      <div
        id={`${id}-panel`}
        hidden={!open}
        className="flex flex-col items-start justify-start overflow-hidden"
      >
        <div className="max-w-[40rem] pb-8">
          {faq.answer.map((block, i) => (
            <Block key={i} block={block} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Block({ block }: { block: FaqBlock }) {
  if (block.kind === "p") {
    return (
      <p className="cy-p mb-4 text-[var(--cy-oat-800)] last:mb-0">
        <Runs runs={block.runs} />
      </p>
    );
  }

  if (block.kind === "ul") {
    return (
      <ul className="mb-4 list-disc pl-5 last:mb-0">
        {block.items.map((item, i) => (
          <li key={i} className="cy-p mb-2 text-[var(--cy-oat-800)] last:mb-0">
            <Runs runs={item} />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className="mb-4 overflow-x-auto last:mb-0">
      <table className="w-full border-collapse border border-[var(--cy-oat-300)] text-left">
        <thead>
          <tr>
            {block.head.map((cell, i) => (
              <th
                key={i}
                scope="col"
                className="border border-[var(--cy-oat-300)] bg-[var(--cy-oat-200)] p-3 text-sm font-semibold align-top"
                style={{ width: i === 0 ? "31.25%" : "34.375%" }}
              >
                {cell}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {block.rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td
                  key={j}
                  className={cn(
                    "border border-[var(--cy-oat-300)] p-3 text-sm align-top",
                    j === 0 && "bg-[var(--cy-oat-200)] font-semibold",
                  )}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Runs({ runs }: { runs: FaqRun[] }) {
  return (
    <>
      {runs.map((run, i) => {
        if (run.href) {
          return (
            <a
              key={i}
              href={run.href}
              className="underline underline-offset-2 hover:no-underline"
            >
              {run.text}
            </a>
          );
        }
        return run.bold ? (
          <strong key={i} className="font-semibold">
            {run.text}
          </strong>
        ) : (
          <span key={i}>{run.text}</span>
        );
      })}
    </>
  );
}
