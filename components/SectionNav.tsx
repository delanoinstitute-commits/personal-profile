"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV } from "@/content/site";

/**
 * Horizontal, sticky in-page section navigation rendered beneath each page
 * title. Replaces the old left-rail "Contents" list: the current page's
 * sections appear as a row of links, and the section currently in view is
 * highlighted via a scroll-spy.
 */
export default function SectionNav() {
  const pathname = usePathname();
  const page = NAV.find((p) => p.href === pathname);
  const sections = page?.sections ?? [];
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    if (sections.length === 0) return;
    const els = sections
      .map((s) => document.getElementById(s.anchor))
      .filter((el): el is HTMLElement => Boolean(el));
    if (els.length === 0) return;

    // Active = the last section whose heading has scrolled above the sticky
    // chrome. This always yields exactly one active item (no flicker gaps).
    const onScroll = () => {
      const offset = 140; // sticky header (~52px) + section bar (~40px) + buffer
      let current = els[0].id;
      for (const el of els) {
        if (el.getBoundingClientRect().top <= offset) current = el.id;
        else break;
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
    // Re-bind when the route changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  if (sections.length === 0) return null;

  return (
    <nav
      aria-label="Sections on this page"
      className="section-nav sticky top-[52px] z-10 -mx-5 mb-5 border-y border-rule bg-white/95 px-5 py-1.5 backdrop-blur sm:-mx-7 sm:px-7"
    >
      <ul className="flex flex-wrap gap-1 text-[0.84rem]">
        {sections.map((s) => {
          const isActive = active === s.anchor;
          return (
            <li key={s.anchor}>
              <a
                href={`#${s.anchor}`}
                onClick={() => setActive(s.anchor)}
                className={`no-wiki inline-block rounded px-2.5 py-1 transition-colors ${
                  isActive
                    ? "bg-accent font-medium text-white"
                    : "text-wikilink hover:bg-[#eaf3ff]"
                }`}
              >
                {s.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
