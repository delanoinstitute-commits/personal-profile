import Tooltip from "./Tooltip";
import WikiLink from "./WikiLink";
import type { Metric } from "./StatTable";

// The bulleted metric list shared by the stat table and the Works accordion.
// Term signaling (DESIGN_SPEC §4.7): every term is bold; a tooltip adds a
// dotted underline (hover for a definition); an href makes the term a blue link.
export default function MetricList({ metrics }: { metrics: Metric[] }) {
  return (
    <ul className="stat-metrics">
      {metrics.map(([term, value, supportive, tooltip, href], i) => (
        <li key={term || i} className={supportive ? "stat-supportive" : undefined}>
          {term ? (
            <>
              {tooltip ? (
                typeof tooltip === "string" ? (
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
          ) : (
            value
          )}
        </li>
      ))}
    </ul>
  );
}
