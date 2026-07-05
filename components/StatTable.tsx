import { Fragment } from "react";
import Tooltip from "./Tooltip";

// A tabled standard shared across data pages (Health, Identity, …).
// Each table holds grouped sub-sections; a group is one accent header row
// (DOMAIN | instrument) followed by category rows (category | metrics).
// A metric is [term, value, supportive?, tooltip?]; the term is underlined.
// "supportive" marks a component of a composite primary (italic + indented).
// "tooltip" gives the term a dotted-underline hover definition.

export type Metric = [
  term: string,
  value: string,
  supportive?: boolean,
  tooltip?: string,
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

export function StatTable({ groups }: StatTableData) {
  return (
    <div className="-mx-5 overflow-x-auto px-5 sm:mx-0 sm:px-0">
      <table className="stat-table">
        <colgroup>
          <col className="stat-cat" />
          <col />
        </colgroup>
        <tbody>
          {groups.map((group) => (
            <Fragment key={group.domain}>
              <tr className="stat-group">
                <th scope="col">{group.domain}</th>
                <th scope="col">{group.label}</th>
              </tr>
              {group.rows.map((row) => (
                <tr key={row.category}>
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
                                <Tooltip content={tooltip}>{term}</Tooltip>
                              ) : (
                                <u>{term}</u>
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
            </Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}
