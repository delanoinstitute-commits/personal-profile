import type { Metadata } from "next";
import PageHeading from "@/components/PageHeading";
import { StatTable, type StatTableData } from "@/components/StatTable";

export const metadata: Metadata = { title: "Health" };

// Data (pages 1–2 of the health-status source). Each table holds grouped
// sub-sections; a group is one accent header row (domain | instrument) with
// category rows underneath. supportive metrics render italic + indented.

const FUNCTIONAL_HOMEOSTASIS: StatTableData = {
  title: "Functional homeostasis",
  groups: [
    {
      domain: "Biomolecular",
      label: "Labs (Top 8)",
      rows: [
        {
          category: "Cardiovascular (low-risk transport)",
          metrics: [
            ["ApoB", "0.6 g/L (60 mg/dL)"],
            ["Hemoglobin", "14.1 g/dL"],
            ["Ferritin", "166 µg/L"],
          ],
        },
        {
          category: "Endometabolic (sensitive disposal)",
          metrics: [
            ["HbA1c", "5.1%"],
            ["Fasting insulin", "4.1 IU/L"],
          ],
        },
        {
          category: "Hepatorenal (low-stress clearance)",
          metrics: [
            ["eGFR-CysC", "101 mL/min/1.73m²"],
            ["ALT", "26 IU/L"],
            ["Uric acid", "0.28 mmol/L (4.7 mg/dL)"],
          ],
        },
      ],
    },
    {
      domain: "Circulatory",
      label: "Hemodynamics (Top 1)",
      rows: [
        {
          category: "Cardiovascular (low-effort circulation)",
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
      label: "DEXA (Top 4)",
      rows: [
        {
          category: "Muscle mass (force reserve)",
          metrics: [
            ["ALMI", "9.4 kg/m² (>80th percentile)"],
            ["Height²", "3.09 m²", true],
            ["ALM", "29.1 kg", true],
          ],
        },
        {
          category: "Fat mass (metabolic protection)",
          metrics: [
            ["VAT", "114 g"],
            ["Body fat", "7.9% (<5th percentile)"],
          ],
        },
        {
          category: "Bone density (skeletal strength)",
          metrics: [
            ["Z-score", "−0.3 (37th percentile)"],
            ["BMD", "1.212 g/cm²", true],
          ],
        },
      ],
    },
    {
      domain: "Geometric",
      label: "Anthropometrics (Top 1)",
      rows: [
        {
          category: "Waistline (central adiposity)",
          metrics: [
            ["Waist-to-height ratio", "0.45"],
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
      label: "Movement (Top 12)",
      rows: [
        {
          category: "Hip (locomotive power)",
          metrics: [
            ["Extension (balance)", "6 pistol squats per leg"],
            ["Extension (hinge)", "Deadlift 2× BW"],
            ["Flexion (curl)", "1 nordic curl"],
          ],
        },
        {
          category: "Core (force transfer)",
          metrics: [
            ["Compression (raise)", "15-sec V-sit"],
            ["Tensegrity (press)", "15-sec back lever"],
            ["Tensegrity (pull)", "5-sec front lever"],
          ],
        },
        {
          category: "Shoulder (upper-body strength)",
          metrics: [
            ["Extension (pull)", "20 pull-ups"],
            ["Flexion (dip)", "25 chest dips"],
            ["Flexion (press)", "OH press 0.9× BW"],
          ],
        },
        {
          category: "Global (work capacity)",
          metrics: [
            ["Flexion (squat)", "Overhead squat 1× BW"],
            ["Extension (gait)", "30-sec 200 m sprint; 3 W/kg FTP (20 min)"],
            ["Extension (jump)", "2.4 m broad jump"],
          ],
        },
      ],
    },
    {
      domain: "Bioenergetic",
      label: "CTEP (Top 1)",
      rows: [
        {
          category: "Global (energy efficiency)",
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

export default function HealthPage() {
  return (
    <>
      <PageHeading title="Health" hatnote={<>The present — how I function</>} />

      <p className="lead">
        Health and fitness are one — how well the body works and holds together (functional
        integrity), from fully rested to all-out effort, tracked over time.
      </p>
      <p>
        At 1.76 m and 72 kg, I sit high on that continuum: metabolically flexible
        (balance), lean and muscular (integrity), with a broad performance reserve
        (capacity). Below is a summary of my health status for 2026.
      </p>

      <h2 id="balance">Balance</h2>
      <p>Homeostasis at rest — blood chemistry and circulatory load.</p>
      <StatTable {...FUNCTIONAL_HOMEOSTASIS} />

      <h2 id="integrity">Integrity</h2>
      <p>Composition and proportion — muscle, fat, and bone, by DEXA and anthropometrics.</p>
      <StatTable {...STRUCTURAL_INTEGRITY} />

      <h2 id="capacity">Capacity</h2>
      <p>Output in action — movement strength and bioenergetic efficiency.</p>
      <StatTable {...FUNCTIONAL_CAPACITY} />
    </>
  );
}
