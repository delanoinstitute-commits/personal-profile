"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { NAV } from "@/content/site";

/**
 * Horizontal, sticky in-page section navigation under each page title. On
 * mobile it is a single-row scroll-snap strip; on >= sm it wraps. The active
 * section (scroll-spy) is highlighted and scrolled into view. See §4.4.
 */
export default function SectionNav() {
  const pathname = usePathname();
  const page = NAV.find((p) => p.href === pathname);
  const sections = page?.sections ?? [];
  const [active, setActive] = useState<string>("");
  const navRef = useRef<HTMLElement>(null);

  // Scroll-spy: active = the last section whose heading has crossed the sticky
  // chrome. Offset derives from one source (header height + this bar height).
  useEffect(() => {
    if (sections.length === 0) return;
    const els = sections
      .map((s) => document.getElementById(s.anchor))
      .filter((el): el is HTMLElement => Boolean(el));
    if (els.length === 0) return;

    const headerH =
      parseInt(
        getComputedStyle(document.documentElement).getPropertyValue("--header-h"),
        10
      ) || 48;

    const onScroll = () => {
      const offset = headerH + (navRef.current?.offsetHeight ?? 40) + 12;
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // Keep the active chip centred on the mobile strip — scrolling ONLY the strip
  // horizontally (never scrollIntoView, which also scrolls the page vertically
  // and causes a jitter loop at the bottom of the page).
  useEffect(() => {
    if (!active || !navRef.current) return;
    const strip = navRef.current.querySelector<HTMLElement>(".section-scroll");
    const chip = navRef.current.querySelector<HTMLElement>(`[data-anchor="${active}"]`);
    if (!strip || !chip) return;
    if (strip.scrollWidth <= strip.clientWidth) return; // not scrollable (desktop wrap)

    const stripRect = strip.getBoundingClientRect();
    const chipRect = chip.getBoundingClientRect();
    const target =
      strip.scrollLeft +
      (chipRect.left - stripRect.left) -
      (stripRect.width - chipRect.width) / 2;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    strip.scrollTo({ left: Math.max(0, target), behavior: reduce ? "auto" : "smooth" });
  }, [active]);

  // A single-section page needs no in-page nav bar.
  if (sections.length < 2) return null;

  return (
    <nav
      ref={navRef}
      aria-label="Sections on this page"
      className="section-nav sticky z-20 -mx-5 mb-5 border-y border-rule bg-paper/95 px-5 py-1.5 backdrop-blur sm:-mx-7 sm:px-7"
      style={{ top: "var(--header-h)" }}
    >
      <ul className="section-scroll flex snap-x snap-mandatory flex-nowrap gap-1 overflow-x-auto text-sm sm:flex-wrap sm:overflow-visible">
        {sections.map((s) => {
          const isActive = active === s.anchor;
          return (
            <li key={s.anchor} className="shrink-0 snap-start">
              <a
                href={`#${s.anchor}`}
                data-anchor={s.anchor}
                aria-current={isActive ? "true" : undefined}
                onClick={() => setActive(s.anchor)}
                className={`no-wiki inline-flex min-h-11 items-center whitespace-nowrap rounded px-3 py-2 transition-colors sm:min-h-0 sm:px-2.5 sm:py-1 ${
                  isActive
                    ? "bg-accent font-medium text-white focus-visible:outline-white focus-visible:[outline-offset:-2px]"
                    : "text-link hover:bg-surface-band"
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
