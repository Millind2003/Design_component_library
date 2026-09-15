"use client";

import { useState } from "react";
import Image from "next/image";
import { agents, analysisQuery, checklist, report } from "./data";
import { Container, Heading } from "./primitives";
import { cn } from "@/lib/utils";

/**
 * Three agent columns inside one bordered box. Each column is a full-bleed
 * product screenshot with the agent's name centred over it in white; hovering
 * swaps that name for the description. A white "app window" is inset at the
 * bottom of each column showing what the agent actually produces.
 */
export function Agents() {
  const [analysis, campaign, measurement] = agents.items;

  return (
    <Container className="border-[var(--mv-gridline)] xl:border-x xl:border-t">
      <section className="bg-white pb-20 pt-20 text-black md:pb-28 md:pt-28">
        <Heading text={agents.heading} className="text-center" />

        <div className="mt-12 grid grid-cols-1 overflow-hidden border border-[var(--mv-gridline)] lg:grid-cols-3">
          <AgentColumn item={analysis}>
            <PromptWindow />
          </AgentColumn>
          <AgentColumn item={campaign}>
            <ChecklistWindow />
          </AgentColumn>
          <AgentColumn item={measurement} last>
            <ReportWindow />
          </AgentColumn>
        </div>
      </section>
    </Container>
  );
}

function AgentColumn({
  item,
  last,
  children,
}: {
  item: (typeof agents.items)[number];
  last?: boolean;
  children: React.ReactNode;
}) {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={cn(
        "relative flex flex-col border-[var(--mv-gridline)]",
        !last && "lg:border-r",
      )}
    >
      <Image
        src={item.image}
        alt={item.title}
        fill
        className="z-[1] object-cover object-top"
      />

      <div className="relative z-[2] flex flex-1 flex-col justify-between text-center">
        <div className="relative flex min-h-[200px] items-center justify-center px-8 py-10 md:min-h-[170px]">
          {/* desktop: title, swapping to the description on hover */}
          <div
            className={cn(
              "absolute inset-0 hidden items-center justify-center px-8 py-10 transition-[opacity,transform] duration-300 ease-out lg:flex",
              hover ? "translate-y-3 opacity-0" : "translate-y-0 opacity-100",
            )}
          >
            <div className="mv-body text-balance text-[18px] text-white lg:text-[24px]">
              {item.title}
            </div>
          </div>
          <div
            className={cn(
              "absolute inset-0 hidden items-center justify-center px-8 py-10 transition-[opacity,transform] duration-300 ease-out lg:flex",
              hover ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
            )}
          >
            <div className="mv-body max-w-[380px] text-pretty text-left text-[16px] text-white">
              {item.body}
            </div>
          </div>

          {/* mobile: both, stacked */}
          <div className="absolute inset-0 flex flex-col items-start justify-center gap-3 px-8 lg:hidden">
            <div className="mv-body text-balance text-left text-[24px] text-white">
              {item.title}
            </div>
            <div className="mv-body text-pretty text-left text-[14px] text-white">
              {item.body}
            </div>
          </div>
        </div>

        <div className="z-[2] mx-2 mb-2 h-[240px] overflow-hidden rounded-sm bg-white xl:h-[380px]">
          {children}
        </div>
      </div>
    </div>
  );
}

/** A chat bubble carrying the example question. */
function PromptWindow() {
  return (
    <div className="flex h-full select-none flex-col px-5 pb-6 text-left">
      <WindowChrome />
      <div className="flex flex-1 flex-col gap-3">
        <div className="max-w-[88%] self-end">
          <div className="rounded-2xl rounded-tr-sm bg-[#efefef] px-4 py-3">
            <p className="text-[11px] leading-[1.5] text-black/75">
              {analysisQuery}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/** The scrolling pre-launch checklist. */
function ChecklistWindow() {
  return (
    <div className="flex h-full min-h-0 select-none flex-col overflow-hidden text-left">
      <WindowChrome />
      <div className="relative min-h-0 flex-1 overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-6 bg-gradient-to-b from-white to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-10 bg-gradient-to-t from-white to-transparent" />
        <div className="flex flex-col gap-4 px-4 pb-6">
          {checklist.map((group) => (
            <div key={group.group}>
              <div className="text-[11px] font-medium text-black">
                {group.group}
              </div>
              <ul className="mt-1.5 space-y-1.5">
                {group.items.map((entry) => (
                  <li
                    key={entry}
                    className="flex items-start gap-2 text-[10px] leading-[1.45] text-black/60"
                  >
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 12 12"
                      fill="none"
                      aria-hidden="true"
                      className="mt-[3px] shrink-0"
                    >
                      <path
                        d="M2.5 6.2 5 8.7l4.5-5"
                        stroke="var(--mv-blue)"
                        strokeWidth="1.4"
                      />
                    </svg>
                    <span>{entry}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/** The generated daily performance report. */
function ReportWindow() {
  return (
    <div className="flex h-full min-h-0 select-none flex-col overflow-hidden text-left">
      <WindowChrome />
      <div className="relative min-h-0 flex-1 overflow-hidden px-4 pb-6">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-10 bg-gradient-to-t from-white to-transparent" />

        <div className="text-[10px] uppercase text-black/40">{report.day}</div>
        <div className="mt-0.5 text-[11px] font-medium text-black">
          {report.title}
        </div>
        <div className="text-[10px] text-black/40">{report.date}</div>

        <div className="mt-3 grid grid-cols-3 gap-x-3 gap-y-2.5">
          {report.metrics.map((metric) => (
            <div key={metric.label}>
              <div className="text-[8px] uppercase leading-[1.2] text-black/40">
                {metric.label}
              </div>
              <div className="mv-figure mt-0.5 text-[13px] text-black">
                {metric.value}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-3 border-t border-black/10 pt-2 text-[9px] leading-[1.5] text-black/55">
          {report.summary}
        </p>
      </div>
    </div>
  );
}

/** The small Minerva mark each inner window is topped with. */
function WindowChrome() {
  return (
    <div className="flex shrink-0 justify-center pb-3 pt-5">
      <svg width="14" height="14" viewBox="0 0 15 15" aria-hidden="true">
        <rect width="15" height="15" fill="var(--mv-blue)" />
        <rect x="4" y="4" width="7" height="7" fill="white" />
      </svg>
    </div>
  );
}
