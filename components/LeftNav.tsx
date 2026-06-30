"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV } from "@/content/site";

/**
 * Left sidebar (desktop): the global "Pages" navigation. Per-page sections live
 * in the horizontal SectionNav; on mobile this list lives in the drawer.
 */
export default function LeftNav() {
  const pathname = usePathname();

  return (
    <nav className="text-sm" aria-label="Site navigation">
      <div className="mb-1 border-b border-rule pb-1 font-semibold text-muted">
        Pages
      </div>
      <ul className="list-none">
        {NAV.map((p) => {
          const active = p.href === pathname;
          return (
            <li key={p.href}>
              <Link
                href={p.href}
                aria-current={active ? "page" : undefined}
                className={`block py-1 ${
                  active ? "font-semibold text-text" : "wikilink"
                }`}
              >
                {p.label}
                <span className="block text-xs font-normal italic text-muted-2">
                  {p.gloss}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
