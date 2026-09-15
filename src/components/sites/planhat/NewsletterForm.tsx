"use client";

import { footer } from "./data";

/** Split out of the footer so the rest of it can stay a server component. */
export function NewsletterForm() {
  return (
    <form
      className="mt-3 flex border-b border-black"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="email"
        aria-label="Email address"
        placeholder="you@company.com"
        className="ph-body-sm w-full bg-transparent py-2 outline-none placeholder:text-[var(--ph-muted)]"
      />
      <button type="submit" aria-label={footer.newsletter.label} className="ph-label px-2 py-2">
        &rarr;
      </button>
    </form>
  );
}
