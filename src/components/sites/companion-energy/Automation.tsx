import { img } from "./assets";

export function Automation() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto grid max-w-[1200px] gap-6 md:grid-cols-2">
        <div className="flex items-center gap-6 rounded-3xl border border-black/5 bg-[var(--ce-offwhite)] p-8">
          <img src={img.aperture} alt="Prism" className="h-10 w-10 shrink-0" />
          <div>
            <div className="ce-eyebrow">Prism</div>
            <div className="ce-display mt-1 text-2xl text-[var(--ce-black)] sm:text-3xl">
              50% to 80% less manual work
            </div>
          </div>
        </div>
        <div className="flex items-center gap-6 rounded-3xl border border-black/5 bg-[var(--ce-offwhite)] p-8">
          <img src={img.windmill} alt="Propel" className="h-10 w-10 shrink-0" />
          <div>
            <div className="ce-eyebrow">Propel</div>
            <div className="ce-display mt-1 text-2xl text-[var(--ce-black)] sm:text-3xl">
              10% to 30% lower energy costs
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
