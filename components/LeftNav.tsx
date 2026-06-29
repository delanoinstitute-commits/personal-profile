"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV } from "@/content/site";

/**
 * Left sidebar: the global wiki navigation (every top-level page) plus the
 * current page's "Contents" (its sections) — the classic Wikipedia TOC.
 */
export default function LeftNav() {
  const pathname = usePathname();
  const current = NAV.find((p) => p.href === pathname);

  return (
    <nav className="text-[0.84rem]" aria-label="Site navigation">
      {/* Contents of the current page */}
      {current && current.sections.length > 0 && (
        <div className="mb-5">
          <div className="mb-1 border-b border-rule pb-1 font-bold text-[#54595d]">
            Contents
          </div>
          <ol className="ml-1 list-none space-y-1">
            {current.sections.map((s, i) => (
              <li key={s.anchor} className="flex gap-2">
                <span className="text-[#54595d]">{i + 1}</span>
                <a href={`#${s.anchor}`} className="wikilink">
                  {s.label}
                </a>
              </li>
            ))}
          </ol>
        </div>
      )}

      {/* Global navigation */}
      <div>
        <div className="mb-1 border-b border-rule pb-1 font-bold text-[#54595d]">
          Pages
        </div>
        <ul className="list-none space-y-1.5">
          {NAV.map((p) => {
            const active = p.href === pathname;
            return (
              <li key={p.href}>
                <Link
                  href={p.href}
                  className={`block ${active ? "font-bold text-[#202122]" : "wikilink"}`}
                >
                  {p.label}
                </Link>
                <span className="block text-[0.74rem] italic text-[#72777d]">
                  {p.gloss}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
