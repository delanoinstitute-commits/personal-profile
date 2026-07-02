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
        Delano&rsquo;s current physiology, measured both at rest and in action — the output
        of the way he <WikiLink href="/time">lives</WikiLink>. At 1.76 m and 72 kg, he is
        lean (7.9% body fat), efficient, and insulin-sensitive, with a broad base of
        physical capacity.
      </p>

      <h3>At rest</h3>

      <h4>Functional homeostasis</h4>
      <div className="-mx-5 overflow-x-auto px-5 sm:mx-0 sm:px-0">
        <table className="wiki-keytable">
          <tbody>
            <tr><th colSpan={2}>Biomolecular · labs</th></tr>
            <tr>
              <th scope="row">Cardiovascular (blood, heart)</th>
              <td>
                <div>Apolipoprotein B: 0.6 g/L</div>
                <div>Haemoglobin: 14.1 g/dL</div>
                <div>Ferritin: 166 µg/L</div>
              </td>
            </tr>
            <tr>
              <th scope="row">Endometabolic (pancreas, muscle)</th>
              <td>
                <div>HbA1c: 5.1%</div>
                <div>Fasting insulin: 4.1 IU/L</div>
              </td>
            </tr>
            <tr>
              <th scope="row">Hepatorenal (liver, kidney)</th>
              <td>
                <div>eGFR (cystatin C): 101</div>
                <div>ALT: 26 IU/L</div>
                <div>Uric acid: 0.28 mmol/L</div>
              </td>
            </tr>
            <tr><th colSpan={2}>Circulatory · haemodynamics</th></tr>
            <tr>
              <th scope="row">Workload (heart)</th>
              <td>
                <div>Rate-pressure product: 5,500 mmHg</div>
                <div>Blood pressure: 110/65 mmHg</div>
                <div>Resting HR: 50 bpm</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h4>Structural integrity</h4>
      <div className="-mx-5 overflow-x-auto px-5 sm:mx-0 sm:px-0">
        <table className="wiki-keytable">
          <tbody>
            <tr><th colSpan={2}>Compositional · DEXA</th></tr>
            <tr>
              <th scope="row">Muscularity (muscle)</th>
              <td>
                <div>ALMI: 9.4 kg/m² (&gt;80th centile)</div>
                <div>Appendicular lean mass: 29.1 kg</div>
                <div>Height²: 3.09 m²</div>
              </td>
            </tr>
            <tr>
              <th scope="row">Leanness (fat)</th>
              <td>
                <div>Body fat: 7.9% (&lt;5th centile)</div>
                <div>Visceral fat: 114 g</div>
              </td>
            </tr>
            <tr>
              <th scope="row">Density (bone)</th>
              <td>
                <div>Z-score: −0.3 (37th centile)</div>
                <div>BMD: 1.212 g/cm²</div>
              </td>
            </tr>
            <tr><th colSpan={2}>Geometric · anthropometrics</th></tr>
            <tr>
              <th scope="row">Adiposity (central)</th>
              <td>
                <div>Waist-to-height ratio: 0.45</div>
                <div>Height: 176 cm</div>
                <div>Waist: 80 cm</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>In action</h3>

      <h4>Functional capacity</h4>
      <div className="-mx-5 overflow-x-auto px-5 sm:mx-0 sm:px-0">
        <table className="wiki-keytable">
          <tbody>
            <tr><th colSpan={2}>Mechanical · movement</th></tr>
            <tr>
              <th scope="row">Hip (power)</th>
              <td>
                <div>6 pistol squats per leg</div>
                <div>Deadlift 2× bodyweight</div>
                <div>1 nordic curl</div>
              </td>
            </tr>
            <tr>
              <th scope="row">Core (stability)</th>
              <td>
                <div>15-second V-sit</div>
                <div>15-second back lever</div>
                <div>5-second front lever</div>
              </td>
            </tr>
            <tr>
              <th scope="row">Shoulder (strength)</th>
              <td>
                <div>20 pull-ups</div>
                <div>25 chest dips</div>
                <div>Overhead press 0.9× bodyweight</div>
              </td>
            </tr>
            <tr>
              <th scope="row">Global (power)</th>
              <td>
                <div>Overhead squat 1× bodyweight</div>
                <div>200 m sprint in 30 s; 3 km run in 12 min; 3 W/kg FTP</div>
                <div>2.4 m broad jump</div>
              </td>
            </tr>
            <tr><th colSpan={2}>Bioenergetic · efficiency</th></tr>
            <tr>
              <th scope="row">Global (efficiency)</th>
              <td>
                <div>VO₂max: 53 ml/kg/min</div>
                <div>Lactate threshold: 1.8 mmol/L @ 70% VO₂max (2.5 W/kg)</div>
                <div>Max fat oxidation: 0.45 g/min @ 60% VO₂max</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
