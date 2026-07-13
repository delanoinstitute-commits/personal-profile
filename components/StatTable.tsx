"use client";

import { Fragment, ReactNode, useState } from "react";
import Chevron from "./Chevron";
import MetricList from "./MetricList";

// A tabled standard shared across data pages (Health, Identity, …).
// Each table holds grouped sub-sections; a group is one accent header row
// (DOMAIN | instrument) followed by category rows (category | metrics).
// A metric is [term, value, supportive?, tooltip?, href?].
// "supportive" marks a component of a composite primary (italic + indented).
// Term signaling follows DESIGN_SPEC §4.7: every term is bold for legibility;
// a tooltip adds a dotted underline (hover for a definition); an href makes the
// term a blue link. The value may be a string or a rich node (inline links).
// Group bands are disclosure buttons (ARIA pattern — <details> is invalid
// inside tables): click collapses/expands the group, chevron mirrors the
// infobox. Default expanded — collapsing is the reader's optimization.

// A tooltip is either a plain gloss or a rich card (credential image + caption).
export type MetricTooltip =
  | string
  | { text?: ReactNode; image?: string; alt?: string; portrait?: boolean };
// A value is a string or rich node. For inline links, pass an array of nodes
// with an explicit key on each element (strings are exempt) — a bare multi-child
// fragment would trip React's key validation once serialized across the RSC
// boundary, which strips the compiler's "validated" flag.
export type Metric = [
  term: string,
  value: ReactNode,
  supportive?: boolean,
  tooltip?: MetricTooltip,
  href?: string,
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
                    <MetricList metrics={row.metrics} />
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
