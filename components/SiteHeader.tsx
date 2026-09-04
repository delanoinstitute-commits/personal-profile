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
        <Link href="/" className="flex items-start gap-3 no-underline">
          <BrandSymbol size={26} className="shrink-0 self-center text-accent lg:hidden" />
          <BrandSymbol size={31} className="mt-[5px] hidden shrink-0 text-accent lg:block" />
          <span className="flex flex-col">
            <span className="block font-serif text-[var(--fs-wordmark)] font-semibold uppercase leading-[24px] tracking-[0.02em] text-text">
              {SITE.name}
            </span>
            <span className="hidden font-serif text-[0.875rem] italic leading-[18px] text-muted lg:block">
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
