import Image from "next/image";
import { Section, SectionBody } from "./Section";
import { cn } from "@/lib/utils";
import type { SculptSpeaker, SculptSpeakerGroup } from "./types";

/**
 * The speaker rails — "Last year" and "Meet the speakers".
 *
 * A sticky title column on the left, and on the right two vertical marquee
 * tracks of speaker cards clipped to 50rem. Below 768px Webflow flips the
 * tracks to horizontal rows that bleed past the gutter.
 *
 * Card tint comes from an inline `color` on the source's `.card-theme` wrapper,
 * which `.last_card { background-color: currentColor }` then picks up — so the
 * "Last year" cards are pastel and the 2026 cards take the default paper fill.
 */
export function SpeakerRail({
  group,
  bg,
  z,
  id,
  variant,
}: {
  group: SculptSpeakerGroup;
  bg: string;
  z: number;
  id?: string;
  variant: "lastYear" | "current";
}) {
  // Two interleaved tracks, offset so the columns drift against each other.
  const columns = [
    group.cards.filter((_, i) => i % 2 === 0),
    group.cards.filter((_, i) => i % 2 === 1),
  ];

  return (
    <Section id={id} bg={bg} z={z} dark={variant === "lastYear"}>
      <SectionBody className="grid grid-cols-1 gap-0 pb-0 min-[992px]:grid-cols-[1fr_1.25fr] min-[992px]:pb-24">
        <div className="sticky top-0 self-start">
          <h2 className="sc-h1 max-w-[14ch]">{group.title}</h2>
          {group.descriptions.map((line, i) => (
            <p key={line} className="sc-text-rg mt-6 max-w-[34rem]">
              {line}
              {/* the first sentence paints three partner logos inline */}
              {i === 0 && group.inlineLogos.length ? (
                <span className="ml-2 inline-flex items-center gap-2 align-middle">
                  {group.inlineLogos.map((logo) => (
                    <img
                      key={logo}
                      src={logo}
                      alt=""
                      aria-hidden="true"
                      className="inline-block h-[1em] w-auto"
                    />
                  ))}
                </span>
              ) : null}
            </p>
          ))}
        </div>

        {/* desktop: two vertical marquee tracks, clipped */}
        <div className="sc-marquee-pause mt-10 hidden max-h-[50rem] grid-cols-2 gap-4 overflow-hidden min-[992px]:mt-0 min-[992px]:grid">
          {columns.map((col, ci) => (
            <div key={ci} className="flex h-full flex-col overflow-hidden">
              <div
                className="sc-marquee-y flex flex-col gap-4 pt-4"
                style={{ ["--sc-marquee-duration" as string]: `${50 + ci * 14}s` }}
              >
                {[...col, ...col].map((s, i) => (
                  <SpeakerCard key={`${s.name}-${i}`} speaker={s} variant={variant} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* mobile: one horizontal row that scrolls */}
        <div className="-mx-5 mt-10 overflow-x-auto pb-10 min-[992px]:hidden">
          <div className="flex gap-4 px-5">
            {group.cards.map((s) => (
              <div key={s.name} className="w-[20rem] min-w-[20rem] max-w-[20rem]">
                <SpeakerCard speaker={s} variant={variant} />
              </div>
            ))}
          </div>
        </div>
      </SectionBody>
    </Section>
  );
}

function SpeakerCard({
  speaker,
  variant,
}: {
  speaker: SculptSpeaker;
  variant: "lastYear" | "current";
}) {
  const tint = speaker.tint || undefined;

  return (
    <article
      style={tint ? { backgroundColor: tint } : undefined}
      className={cn(
        "group flex min-h-full flex-col items-center justify-between gap-4 rounded-[4rem] p-8 text-center",
        "transition-colors duration-300",
        !tint && "bg-[var(--sc-paper)] hover:bg-[var(--sc-ink)]",
        "text-[var(--sc-ink)]",
        !tint && "hover:text-[var(--sc-paper)]",
        variant === "current" && "cursor-default",
      )}
    >
      <div className="flex flex-col items-center gap-4">
        {speaker.avatar ? (
          <Image
            src={speaker.avatar}
            alt=""
            width={280}
            height={280}
            className="pointer-events-none h-auto w-full max-w-full"
          />
        ) : null}
        <div className="relative">
          <h3 className="sc-h3">{speaker.name}</h3>
          <p className="sc-text-sm mt-2 opacity-80">{speaker.role}</p>
        </div>
      </div>

      {speaker.logo ? (
        <Image
          src={speaker.logo}
          alt=""
          width={224}
          height={48}
          className="pointer-events-none h-auto w-56 max-w-none opacity-50"
        />
      ) : null}

      {/* The source keeps the bio in the DOM but hidden, revealing it with the
          card's active state. Kept in the DOM here too, collapsed until hover. */}
      {speaker.bio ? (
        <p
          className={cn(
            "sc-text-sm grid grid-rows-[0fr] text-left transition-[grid-template-rows,opacity] duration-300",
            "opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100",
          )}
        >
          <span className="overflow-hidden">{speaker.bio}</span>
        </p>
      ) : null}
    </article>
  );
}
