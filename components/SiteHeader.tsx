import Link from "next/link";
import { SITE } from "@/content/site";

/**
 * Top chrome — a globe-ish wordmark on the left, the site title in the centre,
 * and a quiet contact action on the right. Evokes the Wikipedia top bar without
 * cloning it outright.
 */
export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-rule bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-[88rem] items-center gap-3 px-4 py-2">
        <Link href="/" className="flex items-center gap-2 no-underline">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-accent font-serif text-sm font-bold text-accent">
            LD
          </span>
          <span className="leading-tight">
            <span className="block font-serif text-[1.05rem] font-bold text-[#202122]">
              {SITE.name}
            </span>
            <span className="block text-[0.72rem] text-[#54595d]">
              The free encyclopedia of one person
            </span>
          </span>
        </Link>

        <div className="ml-auto flex items-center gap-4 text-[0.8rem]">
          <a href={`mailto:${SITE.email}`} className="wikilink">
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}
