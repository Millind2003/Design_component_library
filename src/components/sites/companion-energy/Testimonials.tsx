const testimonials = [
  {
    quote:
      "Companion.energy helps us make sure all energy assets work together intelligently.",
    name: "Wim Scheers",
    role: "Owner, Rozen Scheers",
  },
  {
    quote: "We really see flexibility as an opportunity, not a challenge.",
    name: "Elias Vandeputte",
    role: "Flexibility Manager, BEE",
  },
  {
    quote:
      "Thanks to the Companion.energy platform, we are now better able to manage our assets with additional data.",
    name: "Danny Lousberg",
    role: "Chief Product Officer, Smappee",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="px-6 pb-24 sm:pb-32">
      <div className="mx-auto max-w-[1200px]">
        <p className="ce-eyebrow">Problems we solve</p>
        <h2 className="ce-display mt-4 max-w-2xl text-[32px] text-[var(--ce-black)] sm:text-[44px]">
          Energy moves faster than a human-only team can handle.
        </h2>

        {/* marquee row of testimonials (Swiper on the original) */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col justify-between rounded-3xl border border-black/5 bg-[var(--ce-offwhite)] p-8"
            >
              <blockquote className="text-lg leading-snug text-[var(--ce-black)]">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-8">
                <div className="font-semibold text-[var(--ce-black)]">{t.name}</div>
                <div className="text-sm text-[var(--ce-muted)]">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
