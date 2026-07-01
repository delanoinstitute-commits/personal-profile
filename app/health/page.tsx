import type { Metadata } from "next";
import PageHeading from "@/components/PageHeading";
import WikiLink from "@/components/WikiLink";

export const metadata: Metadata = { title: "Health" };

export default function HealthPage() {
  return (
    <>
      <PageHeading title="Health" hatnote={<>The present — how he functions</>} />

      <h2 id="physical">Physical</h2>
      <p className="lead">
        Delano&rsquo;s current physiology — the output of the way he{" "}
        <WikiLink href="/time">lives</WikiLink>: lean, efficient, and insulin-sensitive, with
        a broad base of physical capacity.
      </p>
      <div className="-mx-5 overflow-x-auto px-5 sm:mx-0 sm:px-0">
        <table className="wiki-keytable">
          <tbody>
            <tr><th>Height</th><td>1.76 m (5′9″)</td></tr>
            <tr><th>Weight</th><td>72 kg (158 lb)</td></tr>
            <tr>
              <th>Body composition</th>
              <td>Lean (8.2% body fat) and muscular (9.4 kg/m² ALMI)</td>
            </tr>
            <tr>
              <th>Health markers</th>
              <td>
                Efficient (105/60 BP, 50 bpm resting HR) and insulin-sensitive
                (5.1% HbA1c, ~4 IU/L fasting insulin)
              </td>
            </tr>
            <tr>
              <th>Capacity</th>
              <td>
                53 ml/kg/min VO₂max; 6 pistol squats; 60-second L-sit; 20 pull-ups;
                25 dips
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
