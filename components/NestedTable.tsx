"use client";

import { Fragment, useState } from "react";
import Chevron from "./Chevron";
import MetricList from "./MetricList";
import type { StatTableData } from "./StatTable";

// A two-level, row-based accordion — no left column. Each band (Personal,
// Professional) is a centered teal header row that collapses; inside it, each
// category (Methodologies, Designs …) is a gray header row with its own
// chevron, over a full-width content row. Bands default collapsed; once a band
// is open, its categories default open. Used for the Works branch only.

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
  // Default: bands open (their sections visible), sections collapsed.
  const [openBands, setOpenBands] = useState<Set<string>>(
    () => new Set(groups.map((g) => g.domain)),
  );
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

  return (
    <div className="-mx-5 overflow-x-auto px-5 sm:mx-0 sm:px-0">
      {hint && <p className="stat-hint">{hint}</p>}
      <table className="stat-table nested-table">
        {groups.map((group) => {
          const bandOpen = openBands.has(group.domain);
          return (
            <tbody key={group.domain}>
              <tr className="nested-band" onClick={() => toggleBand(group.domain)}>
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
                      )}
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
