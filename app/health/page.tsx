import type { Metadata } from "next";
import PageHeading from "@/components/PageHeading";
import { NestedTable } from "@/components/NestedTable";
import type { StatTableData } from "@/components/StatTable";
import { References, type ReferenceSection } from "@/components/References";

export const metadata: Metadata = { title: "Health" };

// Data (pages 1–2 of the health-status source). Each table holds grouped
// sub-sections; a group is one accent header row (domain | instrument) with
// category rows underneath. supportive metrics render italic + indented.
// The 4th element on a metric is a hover definition (dotted underline).

const FUNCTIONAL_HOMEOSTASIS: StatTableData = {
  title: "Functional homeostasis",
  groups: [
    {
      domain: "Blood biochemistry",
      label: "",
      rows: [
        {
          category: "Cardiovascular (low-risk transport)",
          metrics: [
            ["", "My lipids sit at low-risk levels, with iron and oxygen transport in full supply", false],
            ["ApoB", "0.6 g/L (60 mg/dL)", true, "Apolipoprotein B — the count of atherogenic (artery-clogging) cholesterol particles. The strongest single lipid predictor of heart disease, and causal for it."],
            ["Hemoglobin", "14.1 g/dL", true, "The oxygen-carrying protein in red blood cells; the primary screen for anaemia."],
            ["Ferritin", "166 µg/L", true, "Stored iron, the reserve for making hemoglobin. It falls before anaemia appears and rises with inflammation."],
          ],
        },
        {
          category: "Endometabolic (sensitive disposal)",
          metrics: [
            ["", "My blood sugar and insulin run low — a metabolism efficient even under load", false],
            ["HbA1c", "5.1%", true, "Average blood sugar over the past ~3 months; the diabetes diagnostic and a predictor of vascular disease and mortality."],
            ["Fasting insulin", "4.1 IU/L", true, "Insulin at rest — it flags insulin resistance about five years before blood sugar begins to rise."],
            ["Lactate threshold", "1.8 mmol/L @ 70% VO₂max (2.5 W/kg)", true, "The intensity where lactate starts to accumulate — an endurance and metabolic-fitness marker, roughly co-equal with VO₂max and more trainable."],
          ],
        },
        {
          category: "Hepatorenal (low-stress clearance)",
          metrics: [
            ["", "My liver and kidneys clear at full function, unstressed", false],
            ["eGFR-CysC", "101 mL/min/1.73m²", true, "Kidney filtration rate from cystatin C, not muscle-biased like creatinine; declining filtration is an aging hallmark."],
            ["ALT", "26 IU/L", true, "A liver enzyme — high signals liver stress, but unusually low signals muscle loss and frailty."],
            ["Uric acid", "0.28 mmol/L (4.7 mg/dL)", true, "A purine waste product cleared by the kidneys; high levels cause gout and predict cardiovascular disease and mortality."],
          ],
        },
      ],
    },
    {
      domain: "Blood circulation",
      label: "",
      rows: [
        {
          category: "Cardiovascular (autonomic resilience)",
          metrics: [
            ["", "My heart idles low, opens a wide reserve, and recovers fast", false],
            ["Blood pressure", "110/65 mmHg", true, "Resting pressure of blood against the artery walls (systolic / diastolic); the graded driver of vascular mortality."],
            ["HR reserve", "126 bpm", true, "Max minus resting heart rate — the range the heart can call on; a wide reserve reflects cardiac fitness and autonomic range."],
            ["Max HR", "176 bpm (measured)", true, "Highest heart rate reached, measured directly during CPET with a chest strap — not age-estimated."],
            ["Resting HR", "50 bpm", true, "Heartbeats per minute at rest; lower reflects a more efficient heart and predicts lower mortality."],
            ["HR recovery", "36 bpm @ 1 min", true, "The fall in heart rate one minute after peak effort; ~30–40 bpm (about a beat every 2 seconds) signals strong parasympathetic rebound."],
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
      domain: "Body composition",
      label: "",
      rows: [
        {
          category: "Fat mass (metabolic protection)",
          metrics: [
            ["", "I run leaner than 19 in 20 men, with minimal visceral fat", false],
            ["Percent body fat", "7.9% (<5th percentile)", true, "The share of total weight that is fat; both too-high and too-low are adverse for health."],
            ["Total mass", "72 kg", true, undefined, undefined, true],
            ["Fat mass", "5.7 kg", true, undefined, undefined, true],
            ["Visceral adipose tissue", "114 g", true, "Fat packed around the internal organs — the most metabolically harmful kind, with a strong gradient to cardiometabolic disease."],
          ],
        },
        {
          category: "Muscle mass (force reserve)",
          metrics: [
            ["", "I carry more muscle than four in five men my age", false],
            ["ALMI", "9.4 kg/m² (>80th percentile)", true, "Appendicular lean mass index — arm and leg muscle relative to height. The strongest body-composition marker; low defines sarcopenia."],
            ["Height squared", "3.09 m²", true, undefined, undefined, true],
            ["Appendicular lean mass", "29.1 kg", true, undefined, undefined, true],
          ],
        },
        {
          category: "Bone density (skeletal strength)",
          metrics: [
            ["", "My whole-body bone density is sound, near the age-matched average", false],
            ["Whole-body BMD", "1.212 g/cm² (37th percentile)", true, "Bone mineral density — the mineral content and strength of bone, measured across the whole body; higher is better."],
          ],
        },
      ],
    },
    {
      domain: "Body geometry",
      label: "",
      rows: [
        {
          category: "Waistline (central adiposity)",
          metrics: [
            ["", "My waist is well under half my height — low central-fat risk", false],
            ["Waist-to-height ratio", "0.45", true, "Waist ÷ height — the best simple predictor of central-fat risk, beating BMI; under 0.5 is the target."],
            ["Height", "176 cm", true, undefined, undefined, true],
            ["Waist", "80 cm", true, undefined, undefined, true],
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
      domain: "Muscular biomechanics",
      label: "",
      rows: [
        {
          category: "Hip (locomotive power)",
          metrics: [
            ["", "I squat on one leg, pull double bodyweight, and curl my own hamstrings", false],
            ["Extension (balance)", "6 pistol squats per leg", true, "Single-leg squatting strength — knee extension under balance."],
            ["Extension (hinge)", "Deadlift 2× BW", true, "Hip-hinge pulling strength (the deadlift)."],
            ["Flexion (curl)", "1 nordic curl", true, "Hamstring and knee-flexion strength (the nordic curl)."],
          ],
        },
        {
          category: "Core (midline stability)",
          metrics: [
            ["", "I hold my trunk rigid through levers, front and back", false],
            ["Compression (raise)", "15-sec V-sit", true, "Trunk-flexion / anterior-chain compression hold (the V-sit)."],
            ["Tensegrity (press)", "15-sec back lever", true, "Straight-arm pressing tension through the trunk (the back lever)."],
            ["Tensegrity (pull)", "5-sec front lever", true, "Straight-arm pulling tension through the trunk (the front lever)."],
          ],
        },
        {
          category: "Shoulder (upper-body strength)",
          metrics: [
            ["", "I pull 20 reps, dip 25, and press 0.9× bodyweight overhead", false],
            ["Extension (pull)", "20 pull-ups", true, "Vertical pulling strength (pull-ups)."],
            ["Flexion (dip)", "25 chest dips", true, "Pressing strength at the shoulder and chest (dips)."],
            ["Flexion (press)", "OH press 0.9× BW", true, "Overhead pressing strength."],
          ],
        },
        {
          category: "Global (work capacity)",
          metrics: [
            ["", "I move my whole body fast, far, and under load", false],
            ["Flexion (squat)", "Overhead squat 1× BW", true, "Full-depth overhead squat — whole-body mobility and strength."],
            ["Extension (gait)", "30-sec 200 m sprint; 3 W/kg FTP (20 min)", true, "Locomotive power output — sprinting and sustained cycling."],
            ["Extension (jump)", "2.4 m broad jump", true, "Explosive lower-body power (the broad jump)."],
          ],
        },
      ],
    },
    {
      domain: "Metabolic bioenergetics",
      label: "",
      rows: [
        {
          category: "Global (energy efficiency)",
          metrics: [
            ["", "I take up oxygen in the top decile for my age, burning fat deep into effort", false],
            ["VO₂max (uptake)", "53 ml/kg/min", true, "Maximum rate of oxygen use during exercise — the headline aerobic-fitness metric; low fitness rivals smoking for mortality risk."],
            ["MFO (rate)", "0.45 g/min @ 60% VO₂max", true, "Maximal fat oxidation — the peak rate of burning fat for fuel; a marker of metabolic flexibility."],
          ],
        },
      ],
    },
  ],
};

const HEALTH_REFERENCE_SECTIONS: ReferenceSection[] = [
  {
    label: "Biochemistry",
    description: "blood panels — venous draw, wet chemistry",
    items: [
      {
        id: "blood-2026",
        cite: (
          <>
            <strong>Blood panel</strong>: <em>Biochemistry &amp; hematology (May 2026, fasted)</em>; Pathcare; ApoB, HbA1c, fasting insulin, ferritin, hemoglobin, eGFR, ALT, uric acid • <a className="wikilink external" href="/reports/blood-2026-05.pdf" target="_blank" rel="noopener noreferrer">report<span className="sr-only"> (opens in a new tab)</span></a>
          </>
        ),
      },
    ],
  },
  {
    label: "Densitometry",
    description: "DEXA — dual-energy X-ray absorptiometry",
    items: [
      {
        id: "dexa-2026",
        cite: (
          <>
            <strong>DEXA scan</strong>: <em>Whole-body composition (May 2026, rested)</em>; SSR; ALMI, percent body fat, visceral fat, bone density • <a className="wikilink external" href="/reports/dexa-2026-05.pdf" target="_blank" rel="noopener noreferrer">report<span className="sr-only"> (opens in a new tab)</span></a>
          </>
        ),
      },
    ],
  },
  {
    label: "Indirect calorimetry",
    description: "CPET — graded cycling test with a metabolic cart",
    items: [
      {
        id: "cpet-2024",
        cite: (
          <>
            <strong>CPET</strong>: <em>Cycling VO&#8322;max test (September 2024, maximal effort)</em>; S2S; VO&#8322;max, lactate threshold, maximal fat oxidation, max HR, HR recovery • <a className="wikilink external" href="/reports/cpet-2024-09.pdf" target="_blank" rel="noopener noreferrer">report<span className="sr-only"> (opens in a new tab)</span></a>
          </>
        ),
      },
    ],
  },
  {
    label: "Dynamometry",
    description: "performance demonstrations — filmed, strict-form reps",
    items: [
      {
        id: "movement-demos",
        cite: (
          <>
            <strong>Movement battery</strong>: <em>Strength &amp; power demonstrations</em>; self-filmed; hip, core, shoulder, and global tests {/* TODO: link per-movement demonstration videos */}
          </>
        ),
      },
    ],
  },
];

export default function HealthPage() {
  return (
    <>
      <PageHeading title="Health" hatnote={<>The present — how I function</>} />

      <p className="lead">
        Health is one body read at three levels: how soundly it&rsquo;s built (integrity),
        how steadily it holds — and returns to — rest (balance), and what it can do under
        load (capacity) — from full rest to all-out effort.
      </p>
      <p>
        At 1.76 m and 72 kg I sit high on all three: a lean and muscular frame over sound
        bone, clean blood and a heart that idles low yet opens a wide reserve, and broad
        strength with deep aerobic capacity. Below is my health status for 2026.
      </p>

      <h2 id="integrity">Integrity <span className="heading-paren">(Structure)</span></h2>
      <p>
        How my body is built and holds together, in two readings of one frame:
        its make-up of muscle, fat, and bone (compositional) and its proportion (geometric).
        Mine is lean and muscular over sound bone, carrying little central fat.
      </p>
      <NestedTable {...STRUCTURAL_INTEGRITY} />

      <h2 id="balance">Balance <span className="heading-paren">(Homeostasis)</span></h2>
      <p>
        How steadily my body holds a resting state, and how well it returns to one
        after load, in two readings of one system: its blood chemistry (biomolecular) and its
        circulation (hemodynamic). Mine sits low and calm at rest yet opens a wide cardiac
        reserve under effort, on low-risk lipids and a metabolism efficient even when stressed.
      </p>
      <NestedTable {...FUNCTIONAL_HOMEOSTASIS} />

      <h2 id="capacity">Capacity <span className="heading-paren">(Performance)</span></h2>
      <p>
        What my body can do under load, in two readings of one output: the force
        and movement it produces (biomechanical) and the energy that fuels it (bioenergetic).
        Mine is broad — strength and power head to toe, high aerobic capacity, and efficient
        fuel use.
      </p>
      <NestedTable {...FUNCTIONAL_CAPACITY} />

      <References
        sections={HEALTH_REFERENCE_SECTIONS}
        intro="Every reading above comes from one of four instruments — you can verify each against the source report."
      />
    </>
  );
}
