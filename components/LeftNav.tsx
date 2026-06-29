"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV } from "@/content/site";

/**
 * Left sidebar: the global wiki navigation (every top-level page). Per-page
 * sections now live in the horizontal SectionNav within the article.
 */
export default function LeftNav() {
  const pathname = usePathname();

  return (
    <nav className="text-[0.84rem]" aria-label="Site navigation">
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
