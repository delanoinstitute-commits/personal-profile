import { Fragment } from "react";
import type { Metadata } from "next";
import PageHeading from "@/components/PageHeading";
import WikiLink from "@/components/WikiLink";

export const metadata: Metadata = { title: "Health" };

// ── Data (pages 1–2 of the health-status source) ─────────────────────────────
// Each table holds grouped sub-sections; each group is one accent header row
// (domain | metric group) followed by category rows (category | metrics).
// A metric is [term, value, supportive?]; the term is underlined. "supportive"
// marks a component of a composite primary (e.g. blood pressure feeds RPP) —
// these are italicised, which is why a group of three can read "(top 1)".

type Metric = [term: string, value: string, supportive?: boolean];
type Row = { category: string; metrics: Metric[] };
type Group = { domain: string; label: string; rows: Row[] };
type StatTableData = { title: string; groups: Group[] };

const FUNCTIONAL_HOMEOSTASIS: StatTableData = {
  title: "Functional homeostasis",
  groups: [
    {
      domain: "Biomolecular",
      label: "Labs (top 8)",
      rows: [
        {
          category: "Cardiovascular (blood; heart)",
          metrics: [
            ["Apolipoprotein B", "0.6 g/L"],
            ["Haemoglobin", "14.1 g/dL"],
            ["Ferritin", "166 µg/L"],
          ],
        },
        {
          category: "Endometabolic (pancreas; muscle)",
          metrics: [
            ["HbA1c", "5.1%"],
            ["Fasting insulin", "4.1 IU/L"],
          ],
        },
        {
          category: "Hepatorenal (liver; kidney)",
          metrics: [
            ["eGFR-CysC", "101"],
            ["ALT", "26 IU/L"],
            ["Uric acid", "0.28 mmol/L"],
          ],
        },
      ],
    },
    {
      domain: "Circulatory",
      label: "Haemodynamics (top 1)",
      rows: [
        {
          category: "Workload (heart)",
          metrics: [
            ["RPP", "5,500 mmHg"],
            ["Blood pressure", "110/65 mmHg", true],
            ["Resting HR", "50 bpm", true],
          ],
        },
      ],
    },
  ],
};

const STRUCTURAL_INTEGRITY: StatTableData = {
  title: "Structural integrity",
  groups: [
    {
      domain: "Compositional",
      label: "DEXA (top 4)",
      rows: [
        {
          category: "Muscularity (muscle)",
          metrics: [
            ["ALMI", "9.4 kg/m² (>80th centile)"],
            ["Height", "1.76 m squared (3.09)", true],
            ["ALM", "29.1 kg", true],
          ],
        },
        {
          category: "Leanness (fat)",
          metrics: [
            ["VAT", "114 g"],
            ["Body fat", "7.9% (<5th centile)"],
          ],
        },
        {
          category: "Density (bone)",
          metrics: [
            ["Z-score", "−0.3 (37th centile)"],
            ["BMD", "1.212 g/cm²", true],
          ],
        },
      ],
    },
    {
      domain: "Geometric",
      label: "Anthropometrics (top 1)",
      rows: [
        {
          category: "Adiposity (central)",
          metrics: [
            ["W-H ratio", "0.45"],
            ["Height", "176 cm", true],
            ["Waist", "80 cm", true],
          ],
        },
      ],
    },
  ],
};

const FUNCTIONAL_CAPACITY: StatTableData = {
  title: "Functional capacity",
  groups: [
    {
      domain: "Mechanical",
      label: "Movement (top 12)",
      rows: [
        {
          category: "Hip (power)",
          metrics: [
            ["Extension (squat-UL)", "6 pistol squats per leg"],
            ["Extension (hinge)", "Deadlift 2× BW"],
            ["Flexion (curl)", "1 nordic curl"],
          ],
        },
        {
          category: "Core (stability)",
          metrics: [
            ["Compression (raise)", "15-sec V-sit"],
            ["Tensegrity (press)", "15-sec back lever"],
            ["Tensegrity (pull)", "5-sec front lever"],
          ],
        },
        {
          category: "Shoulder (strength)",
          metrics: [
            ["Extension (pull)", "20 pull-ups"],
            ["Flexion (dip)", "25 chest dips"],
            ["Flexion (press)", "OH press 0.9× BW"],
          ],
        },
        {
          category: "Global (power)",
          metrics: [
            ["Flexion (squat)", "Overhead squat 1× BW"],
            ["Extension (gait)", "30-sec 200 m sprint; 12-min 3 km run; 3 W/kg FTP"],
            ["Extension (jump)", "2.4 m broad"],
          ],
        },
      ],
    },
    {
      domain: "Bioenergetic",
      label: "CTEP (top 1)",
      rows: [
        {
          category: "Global (efficiency)",
          metrics: [
            ["VO₂max (uptake)", "53 ml/kg/min"],
            ["Lactate (threshold)", "1.8 mmol/L @ 70% VO₂max (2.5 W/kg)", true],
            ["MFO (rate)", "0.45 g/min @ 60% VO₂max", true],
          ],
        },
      ],
    },
  ],
};

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

function StatTable({ title, groups }: StatTableData) {
  return (
    <>
      <h3>{title}</h3>
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
                  <th scope="col">{labelParts(group.label)}</th>
                </tr>
                {group.rows.map((row) => (
                  <tr key={row.category}>
                    <th scope="row">{labelParts(row.category)}</th>
                    <td>
                      {row.metrics.map(([term, value, supportive]) => (
                        <div key={term} className={supportive ? "stat-supportive" : undefined}>
                          <u>{term}</u>: {value}
                        </div>
                      ))}
                    </td>
                  </tr>
                ))}
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default function HealthPage() {
  return (
    <>
      <PageHeading title="Health" hatnote={<>The present — how he functions</>} />

      <h2 id="health">Health</h2>
      <p className="lead">
        Delano&rsquo;s physiology at rest — the body&rsquo;s homeostatic baseline and
        structure, and the output of the way he <WikiLink href="/time">lives</WikiLink>. At
        1.76 m and 72 kg, he is lean (7.9% body fat), efficient, and insulin-sensitive.
      </p>
      <StatTable {...FUNCTIONAL_HOMEOSTASIS} />
      <StatTable {...STRUCTURAL_INTEGRITY} />

      <h2 id="fitness">Fitness</h2>
      <p className="lead">
        The same body in action — what it produces across strength, power, and endurance.
      </p>
      <StatTable {...FUNCTIONAL_CAPACITY} />
    </>
  );
}
