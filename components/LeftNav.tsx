"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_GROUPS } from "@/content/site";

/**
 * Left sidebar (desktop): the global navigation, grouped into the four sections
 * (overview / future / present / past). Per-page sections live in the
 * horizontal SectionNav; on mobile this list lives in the drawer.
 */
export default function LeftNav() {
  const pathname = usePathname();

  return (
    <nav className="text-sm" aria-label="Site navigation">
      {NAV_GROUPS.map((group) => (
        <div key={group.title} className="mb-4">
          <div className="mb-1 border-b border-rule pb-1 text-xs font-semibold uppercase tracking-[0.04em] text-muted">
            {group.title}
          </div>
          <ul className="list-none">
            {group.pages.map((p) => {
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
        </div>
      ))}
    </nav>
  );
}
