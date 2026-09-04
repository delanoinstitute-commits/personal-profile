"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import Chevron from "./Chevron";
import MetricList from "./MetricList";
import type { StatTableData } from "./StatTable";

// A two-level, row-based accordion — no left column. Each band is a colored
// header row that collapses; inside it, each category is a gray header row
// with its own chevron, over a full-width content row. Everything defaults
// closed: pages load compressed to their band titles. Used by the taxonomy
// branches on every page.

/** Split a label so any parenthetical drops to muted weight. */
function labelParts(text: string) {
  return text
    .split(/(\([^)]*\))/g)
    .filter(Boolean)
    .map((part, i) =>
      part.startsWith("(") ? (
        <span key={i} className="stat-paren">
          {part}
        </span>
      ) : (
        <Fragment key={i}>{part}</Fragment>
      ),
    );
}

export function NestedTable({
  groups,
  hint,
}: StatTableData & { hint?: string }) {
  // Default: everything closed — the page loads compressed to its band
  // titles, and the reader explores branch by branch. Categories inside a
  // band stay collapsed too, so each level opens by choice.
  const [openBands, setOpenBands] = useState<Set<string>>(() => new Set());
  const [closedCats, setClosedCats] = useState<Set<string>>(
    () => new Set(groups.flatMap((g) => g.rows.map((r) => `${g.domain}:${r.category}`))),
  );

  const toggleBand = (key: string) =>
    setOpenBands((prev) => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  const toggleCat = (key: string) =>
    setClosedCats((prev) => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });

  // Arrival by hash opens the door: when the URL targets this branch's heading
  // (the nearest h2 above the table), every band expands and the first
  // category opens, so a link into a branch lands on its evidence rather than
  // on a row of closed bands. Plain page loads stay compressed.
  const rootRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const reveal = () => {
      const id = decodeURIComponent(window.location.hash.slice(1));
      if (!id) return;
      const target = document.getElementById(id);
      if (!target || target.tagName !== "H2") return;
      let el: Element | null = rootRef.current;
      while (el && (el = el.previousElementSibling) && el.tagName !== "H2");
      if (el !== target) return;
      setOpenBands(new Set(groups.map((g) => g.domain)));
      const first = groups[0]?.rows[0];
      if (first) {
        setClosedCats((prev) => {
          const next = new Set(prev);
          next.delete(`${groups[0].domain}:${first.category}`);
          return next;
        });
      }
    };
    reveal();
    window.addEventListener("hashchange", reveal);
    return () => window.removeEventListener("hashchange", reveal);
  }, [groups]);

  return (
    <div ref={rootRef} className="-mx-5 overflow-x-auto px-5 sm:mx-0 sm:px-0">
      {hint && <p className="stat-hint">{hint}</p>}
      <table className="stat-table nested-table">
        {groups.map((group) => {
          const bandOpen = openBands.has(group.domain);
          // Band count = its supportive entries (the numbered items), so the
          // header advertises how much evidence sits inside.
          const count = group.rows.reduce(
            (n, r) => n + r.metrics.filter((m) => m[2] && !m[5]).length,
            0,
          );
          return (
            <tbody key={group.domain}>
              <tr className="nested-band" data-hue={group.hue} onClick={() => toggleBand(group.domain)}>
                <th>
                  <button
                    type="button"
                    className="nested-band-toggle"
                    aria-expanded={bandOpen}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleBand(group.domain);
                    }}
                  >
                    <span>
                      <span className="nested-domain">{group.domain}</span>
                      {group.label && (
                        <>
                          {" "}
                          <span className="nested-gloss">({group.label})</span>
                        </>
                      )}{" "}
                      <span className="nested-gloss">({count})</span>
                    </span>
                    <Chevron className={`stat-chevron${bandOpen ? " is-open" : ""}`} />
                  </button>
                </th>
              </tr>
              {group.rows.map((row) => {
                  const catKey = `${group.domain}:${row.category}`;
                  const catOpen = !closedCats.has(catKey);
                  // Collapsed rows stay in the DOM (hidden) so find-in-page
                  // and crawlers still see the content.
                  return (
                    <Fragment key={catKey}>
                      <tr
                        className="nested-cat"
                        hidden={!bandOpen}
                        onClick={() => toggleCat(catKey)}
                      >
                        <th>
                          <button
                            type="button"
                            className="nested-cat-toggle"
                            aria-expanded={catOpen}
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleCat(catKey);
                            }}
                          >
                            <span>{labelParts(row.category)}</span>
                            <Chevron
                              className={`stat-chevron${catOpen ? " is-open" : ""}`}
                            />
                          </button>
                        </th>
                      </tr>
                      <tr className="nested-content" hidden={!bandOpen || !catOpen}>
                        <td>
                          <MetricList metrics={row.metrics} numbered />
                        </td>
                      </tr>
                    </Fragment>
                  );
                })}
            </tbody>
          );
        })}
      </table>
    </div>
  );
}
