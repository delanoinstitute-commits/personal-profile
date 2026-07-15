import { ReactNode } from "react";
import Tooltip from "./Tooltip";
import WikiLink from "./WikiLink";
import type { Metric } from "./StatTable";

// Shared metric rendering. Two shapes:
//  - default: a flat bulleted list (the stat tables).
//  - numbered: the composite lead sits flush (italic "Profile:" line) over a
//    muted numbered list of its components, styled like the References list
//    (the Works accordion). Term signaling (DESIGN_SPEC §4.7): every term is
//    bold; a tooltip adds a dotted underline; an href makes it a blue link.

function MetricInline({
  metric,
  boldTooltip = false,
}: {
  metric: Metric;
  boldTooltip?: boolean;
}): ReactNode {
  const [term, value, supportive, tooltip, href] = metric;
  if (!term) return value;
  // A tooltipped term is bold+dotted when not supportive, or when boldTooltip
  // is set (the accordion, where every entry term is bold); otherwise dotted.
  const variant = !supportive || boldTooltip ? "bold" : "dotted";
  return (
    <>
      {tooltip ? (
        typeof tooltip === "string" ? (
          <Tooltip content={tooltip} variant={variant}>
            {term}
          </Tooltip>
        ) : (
          <Tooltip
            content={tooltip.text}
            variant={variant}
            media={
              tooltip.image
                ? { src: tooltip.image, alt: tooltip.alt ?? term, portrait: tooltip.portrait }
                : undefined
            }
          >
            {term}
          </Tooltip>
        )
      ) : href ? (
        <strong>
          <WikiLink href={href}>{term}</WikiLink>
        </strong>
      ) : (
        <strong>{term}</strong>
      )}
      {": "}
      {value}
    </>
  );
}

export default function MetricList({
  metrics,
  numbered = false,
}: {
  metrics: Metric[];
  numbered?: boolean;
}) {
  if (numbered) {
    const lead = metrics.find((m) => !m[2]);
    const components = metrics.filter((m) => m[2]);
    return (
      <div>
        {lead && (
          <div className="metric-lead">
            <MetricInline metric={lead} boldTooltip />
          </div>
        )}
        {components.length > 0 && (
          <ol className="references-list metric-numbered">
            {components.map((m, i) => (
              <li key={`${m[0]}-${i}`}>
                <MetricInline metric={m} boldTooltip />
              </li>
            ))}
          </ol>
        )}
      </div>
    );
  }

  return (
    <ul className="stat-metrics">
      {metrics.map((m, i) => (
        <li key={m[0] || i} className={m[2] ? "stat-supportive" : undefined}>
          <MetricInline metric={m} />
        </li>
      ))}
    </ul>
  );
}
