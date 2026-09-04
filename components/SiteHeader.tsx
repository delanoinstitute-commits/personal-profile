import Link from "next/link";
import { SITE } from "@/content/site";
import MobileNav from "./MobileNav";
import BrandSymbol from "./BrandSymbol";

/**
 * Sticky top chrome (z-30, height = --header-h). Hamburger (mobile only) +
 * wordmark + a single Contact escape hatch. Always visible — no hide-on-scroll.
 */
export default function SiteHeader() {
  return (
    <header
      className="sticky top-0 z-30 border-b border-rule bg-paper/95 backdrop-blur"
      style={{ height: "var(--header-h)" }}
    >
      <div className="mx-auto flex h-full max-w-[81.5rem] items-center gap-2 px-3 sm:px-4">
        <MobileNav />

        {/* Tagline lockup: the symbol spans from the wordmark's cap line to the
            tagline's baseline (BRAND_SPEC §1.3). Mobile drops the tagline, so
            the symbol drops to the horizontal-lockup size. */}
        {/* The tagline lockup (BRAND_SPEC §1.3) at a 31 px symbol: name N = side ÷
            1.613, tagline 0.587 N, gap = half a side; with line-height 1 the name's
            cap line sits 0.02 N below its box top and the tagline's box starts
            1.065 N below the name's, so symbol top = cap line and symbol bottom =
            the tagline's lowest descender. Mobile drops the tagline and centres a
            26 px symbol on the name. */}
        <Link href="/" className="flex items-start gap-3 no-underline lg:gap-[15.5px]">
          <BrandSymbol size={26} className="shrink-0 self-center text-accent lg:hidden" />
          <BrandSymbol size={31} className="mt-[0.4px] hidden shrink-0 text-accent lg:block" />
          <span className="flex flex-col">
            <span className="block font-serif text-[var(--fs-wordmark)] font-semibold uppercase leading-[24px] tracking-[0.02em] text-text lg:text-[19.2px] lg:leading-none lg:tracking-[0.055em]">
              {SITE.name}
            </span>
            <span className="mt-[1.25px] hidden font-serif text-[11.3px] italic leading-none text-text lg:block">
              {SITE.tagline}
            </span>
          </span>
        </Link>

        {/* The Email CTA returns to the header now that the SectionNav bar is
            retired — same gray action chip, far right, on every page. */}
        <a
          href={`mailto:${SITE.email}`}
          className="no-wiki ml-auto inline-flex items-center whitespace-nowrap rounded border border-rule bg-surface-subtle px-3 py-1 text-sm text-text transition-colors hover:border-accent hover:bg-accent hover:text-white"
        >
          Email Lorenzo
        </a>
      </div>
    </header>
  );
}
