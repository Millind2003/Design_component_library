import Image from "next/image";

/**
 * The Sculpt promo strip that sits above the nav.
 *
 * Hidden below 768px in the source (`.nav-banner { display: none }` at
 * ≤767px), and the whole bar shifts from aubergine to ube on hover.
 */
export function AnnouncementBar() {
  return (
    <a
      href="https://www.sculpt.clay.com"
      className="group relative block w-full text-[#fefdfb] max-[768px]:hidden"
    >
      <div className="mx-auto flex w-[95%] max-w-[125rem] items-stretch justify-between bg-[#45012e] px-5 py-2 text-[#c8bbfb] transition-[background-color,color] duration-[400ms] group-hover:bg-[var(--cy-ube)] group-hover:text-[var(--cy-lime-200)]">
        <div className="flex w-full justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/sites/clay/sculpt-default.svg"
              alt="Sculpt"
              width={24}
              height={24}
              className="block h-6 w-auto object-contain"
            />
            <span className="text-[1.25rem] leading-[1.4]">
              The most creative minds in GTM. October 8, San Francisco
            </span>
          </div>

          <div className="flex items-center justify-start text-[0.75em] font-semibold uppercase leading-[1.2] tracking-[0.09em] text-[#fae188]">
            <span>Get tickets</span>
            <span className="mb-[3px] ml-1.5">→</span>
          </div>
        </div>
      </div>
    </a>
  );
}
