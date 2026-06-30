import Link from "next/link";
import { SITE } from "@/content/site";
import MobileNav from "./MobileNav";

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

        <Link href="/" className="flex items-center gap-2 no-underline">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-accent font-serif text-sm font-semibold text-accent">
            LD
          </span>
          <span className="leading-tight">
            <span className="block font-serif text-[var(--fs-wordmark)] font-semibold tracking-[-0.005em] text-text">
              {SITE.name}
            </span>
            <span className="hidden text-[0.8125rem] text-muted sm:block">
              The free encyclopedia of one person
            </span>
          </span>
        </Link>

        <div className="ml-auto flex items-center">
          <a
            href={`mailto:${SITE.email}`}
            className="inline-flex min-h-11 items-center px-2 text-sm text-link hover:underline"
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}
