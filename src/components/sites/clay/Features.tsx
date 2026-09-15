import Image from "next/image";
import { features } from "./data";
import { Button, Container, Eyebrow } from "./primitives";

/**
 * Five alternating feature blocks. Each pairs a headline whose second line is
 * set in a lighter tone, a description, three customer call-outs, and a looping
 * product video on the right.
 */
export function Features() {
  return (
    <section className="cy-pt-regular cy-pb-small bg-[var(--cy-oat-50)]">
      <Container>
        {/* The original's `.home-feature_nav` intro — including the
            "Build, test, and scale…" heading — carries `.hide`
            (`display: none`), so the section opens straight into the cards. */}
        <div className="flex flex-col gap-4">
          {features.items.map((item) => (
            <article
              key={item.tag}
              className="grid items-stretch gap-6 overflow-hidden rounded-[var(--cy-radius-lg)] bg-[var(--cy-oat-200)] p-6 lg:min-h-[34rem] lg:grid-cols-2 lg:p-10"
            >
              <div className="flex flex-col justify-between gap-8">
                <div className="flex flex-col gap-5">
                  {/* the active pill plus three dormant ones, as on the site */}
                  <div className="flex items-center gap-1.5">
                    <Eyebrow className="bg-black text-[var(--cy-oat-50)]">
                      {item.tag}
                    </Eyebrow>
                    {[0, 1, 2].map((d) => (
                      <span
                        key={d}
                        className="h-1.5 w-1.5 rounded-full bg-black/20"
                      />
                    ))}
                  </div>

                  <h3 className="cy-h3 text-balance">
                    {item.titleTop}{" "}
                    <span className="text-[var(--cy-oat-700)]">
                      {item.titleSpan}
                    </span>
                  </h3>

                  <p className="cy-p max-w-[46ch] text-balance text-[var(--cy-oat-800)]">
                    {item.body}
                  </p>
                </div>

                <div className="flex flex-col gap-6">
                  <CallOut proof={item.proof} />

                  <div className="flex flex-wrap gap-3">
                    <Button href="#trial" variant="dark">
                      Start free trial
                    </Button>
                    <Button href={item.cta.href} variant="light">
                      {item.cta.label}
                    </Button>
                  </div>
                </div>
              </div>

              <div className="min-h-[16rem] overflow-hidden rounded-[var(--cy-radius)] bg-black/5">
                <video
                  className="h-full w-full object-cover"
                  src={item.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="none"
                />
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

/** Three customer marks above their result lines. */
function CallOut({
  proof,
}: {
  proof: { logo: string; name: string; text: string }[];
}) {
  return (
    <div className="rounded-[var(--cy-radius-sm)] bg-[var(--cy-oat-100)] p-4">
      <div className="flex items-center gap-2">
        {proof.map((entry) => (
          <span
            key={entry.name}
            className="grid h-8 w-8 place-items-center rounded-full bg-white"
          >
            <Image
              src={entry.logo}
              alt={`${entry.name} logo`}
              width={20}
              height={20}
              className="h-4 w-4 object-contain"
            />
          </span>
        ))}
      </div>

      <ul className="mt-3 space-y-2">
        {proof.map((entry) => (
          <li
            key={entry.name}
            className="cy-p-sm text-balance text-[var(--cy-oat-800)]"
          >
            <strong className="font-semibold text-black">{entry.name}</strong>{" "}
            {entry.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
