import { Fragment, ReactNode } from "react";
import Tooltip from "./Tooltip";
import WikiLink from "./WikiLink";
import type { Metric, MetricTooltip, StatTableData } from "./StatTable";

// An outline rendering of the same StatTableData the tables use: nested
// headings instead of a grid (band → H3, category → H4, composite → lead line,
// components → bullets). No collapse state, so this stays a server component —
// which also sidesteps the RSC key-validation quirk with rich values.
// Term signaling matches the tables: bold term; +dotted with a tooltip; blue
// as a link. See DESIGN_SPEC §4.7.

const ROMAN = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"];

/** Split a label so any parenthetical drops to muted weight. */
function labelParts(text: string) {
  return text
    .split(/(\([^)]*\))/g)
    .filter(Boolean)
    .map((part, i) =>
      part.startsWith("(") ? (
        <span key={i} className="heading-paren">
          {part}
        </span>
      ) : (
        <Fragment key={i}>{part}</Fragment>
      ),
    );
}

function Term({
  term,
  supportive,
  tooltip,
  href,
}: {
  term: string;
  supportive?: boolean;
  tooltip?: MetricTooltip;
  href?: string;
}) {
  if (tooltip) {
    return typeof tooltip === "string" ? (
      <Tooltip content={tooltip} variant={supportive ? "dotted" : "bold"}>
        {term}
      </Tooltip>
    ) : (
      <Tooltip
        content={tooltip.text}
        variant={supportive ? "dotted" : "bold"}
        media={
          tooltip.image
            ? { src: tooltip.image, alt: tooltip.alt ?? term, portrait: tooltip.portrait }
            : undefined
        }
      >
        {term}
      </Tooltip>
    );
  }
  if (href) {
    return (
      <strong>
        <WikiLink href={href}>{term}</WikiLink>
      </strong>
    );
  }
  return <strong>{term}</strong>;
}

function MetricLine({ metric }: { metric: Metric }): ReactNode {
  const [term, value, supportive, tooltip, href] = metric;
  return (
    <>
      <Term term={term} supportive={supportive} tooltip={tooltip} href={href} />
      {": "}
      {value}
    </>
  );
}

export function StatOutline({ groups }: StatTableData) {
  return (
    <div className="stat-outline">
      {groups.map((group) => (
        <section key={group.domain} className="outline-group">
          <h3>
            {group.domain} <span className="heading-paren">· {group.label}</span>
          </h3>
          {group.rows.map((row, i) => {
            const lead = row.metrics.find((m) => m[0] === "Profile");
            const items = row.metrics.filter((m) => m[0] !== "Profile");
            return (
              <div key={row.category} className="outline-row">
                <h4>
                  <span className="outline-numeral">{ROMAN[i]})</span>{" "}
                  {labelParts(row.category)}
                </h4>
                {lead && (
                  <p className="outline-lead">
                    <MetricLine metric={lead} />
                  </p>
                )}
                <ul className="outline-items">
                  {items.map((m, j) => (
                    <li key={m[0] || j}>
                      <MetricLine metric={m} />
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </section>
      ))}
    </div>
  );
}
