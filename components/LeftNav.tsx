"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_GROUPS } from "@/content/site";

/**
 * Left sidebar (desktop): the global navigation grouped into Constitution and
 * Capital, with the active page's table of contents (introduction, its three
 * branches, references) indented beneath it. On mobile this list lives in the
 * drawer.
 */
export default function LeftNav() {
  const pathname = usePathname();

  return (
    <nav className="text-sm" aria-label="Site navigation">
      {NAV_GROUPS.map((group) => (
        <div key={group.title} className="mb-4">
          {group.title && (
            <div className="mb-1 border-b border-rule pb-1 text-xs font-semibold uppercase tracking-[0.04em] text-muted">
              {group.title}
            </div>
          )}
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
                  </Link>
                  {active && (
                    <ul
                      className="mb-1 ml-3 list-none border-l border-rule pl-3 text-[0.8125rem]"
                      aria-label={`${p.label} contents`}
                    >
                      {p.sections.map((s) => (
                        <li key={s.anchor}>
                          <a
                            href={`#${s.anchor}`}
                            className={`block py-0.5 ${s.kind === "refs" ? "text-muted hover:text-text" : "wikilink"}`}
                          >
                            {s.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}
