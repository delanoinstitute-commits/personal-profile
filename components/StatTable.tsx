"use client";

import { Fragment, useState } from "react";
import Chevron from "./Chevron";
import Tooltip from "./Tooltip";

// A tabled standard shared across data pages (Health, Identity, …).
// Each table holds grouped sub-sections; a group is one accent header row
// (DOMAIN | instrument) followed by category rows (category | metrics).
// A metric is [term, value, supportive?, tooltip?].
// "supportive" marks a component of a composite primary (italic + indented).
// Term signaling follows DESIGN_SPEC §4.7: primary = bold (dotted when it
// carries a description); supportive = dotted definition; artifact = cardlink.
// Group bands are disclosure buttons (ARIA pattern — <details> is invalid
// inside tables): click collapses/expands the group, chevron mirrors the
// infobox. Default expanded — collapsing is the reader's optimization.

// A tooltip is either a plain gloss or a rich card (credential image + caption).
export type MetricTooltip =
  | string
  | { text?: string; image?: string; alt?: string; portrait?: boolean };
export type Metric = [
  term: string,
  value: string,
  supportive?: boolean,
  tooltip?: MetricTooltip,
];
export type Row = { category: string; metrics: Metric[] };
export type Group = { domain: string; label: string; rows: Row[] };
export type StatTableData = { title: string; groups: Group[] };

/** Render a label with any parenthetical portions dropped to normal weight. */
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

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-");

export function StatTable({
  title,
  groups,
  hint = "Click a row below for the info.",
}: StatTableData & { hint?: string }) {
  // Default collapsed: the section intro carries the summary; the table is
  // the expandable record beneath it.
  const [collapsed, setCollapsed] = useState<Set<string>>(
    () => new Set(groups.map((g) => g.domain)),
  );
  const toggle = (domain: string) =>
    setCollapsed((prev) => {
      const next = new Set(prev);
      next.has(domain) ? next.delete(domain) : next.add(domain);
      return next;
    });

  return (
    <div className="-mx-5 overflow-x-auto px-5 sm:mx-0 sm:px-0">
      <p className="stat-hint">{hint}</p>
      <table className="stat-table">
        <colgroup>
          <col className="stat-cat" />
          <col />
        </colgroup>
        {groups.map((group) => {
          const isCollapsed = collapsed.has(group.domain);
          const bodyId = `${slug(title)}-${slug(group.domain)}`;
          return (
            <tbody key={group.domain} id={bodyId}>
              <tr
                className="stat-group"
                onClick={() => toggle(group.domain)}
              >
                <th scope="col">{group.domain}</th>
                <th scope="col">
                  <button
                    type="button"
                    className="stat-toggle"
                    aria-expanded={!isCollapsed}
                    aria-controls={bodyId}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggle(group.domain);
                    }}
                  >
                    <span>{group.label}</span>
                    <Chevron
                      className={`stat-chevron${isCollapsed ? "" : " is-open"}`}
                    />
                  </button>
                </th>
              </tr>
              {group.rows.map((row) => (
                <tr key={row.category} hidden={isCollapsed}>
                  <th scope="row">{labelParts(row.category)}</th>
                  <td>
                    <ul className="stat-metrics">
                      {row.metrics.map(([term, value, supportive, tooltip]) => (
                        <li
                          key={term || value}
                          className={supportive ? "stat-supportive" : undefined}
                        >
                          {term ? (
                            <>
                              {tooltip ? (
                                typeof tooltip === "string" ? (
                                  <Tooltip
                                    content={tooltip}
                                    variant={supportive ? "dotted" : "bold"}
                                  >
                                    {term}
                                  </Tooltip>
                                ) : (
                                  <Tooltip
                                    content={tooltip.text}
                                    variant={supportive ? "dotted" : "bold"}
                                    media={
                                      tooltip.image
                                        ? {
                                            src: tooltip.image,
                                            alt: tooltip.alt ?? term,
                                            portrait: tooltip.portrait,
                                          }
                                        : undefined
                                    }
                                  >
                                    {term}
                                  </Tooltip>
                                )
                              ) : supportive ? (
                                <u>{term}</u>
                              ) : (
                                <strong>{term}</strong>
                              )}
                              {": "}
                              {value}
                            </>
                          ) : (
                            value
                          )}
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          );
        })}
      </table>
    </div>
  );
}
