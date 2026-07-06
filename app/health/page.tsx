import type { Metadata } from "next";
import PageHeading from "@/components/PageHeading";
import { StatTable, type StatTableData } from "@/components/StatTable";
import { References, type Reference } from "@/components/References";

export const metadata: Metadata = { title: "Health" };

// Data (pages 1–2 of the health-status source). Each table holds grouped
// sub-sections; a group is one accent header row (domain | instrument) with
// category rows underneath. supportive metrics render italic + indented.
// The 4th element on a metric is a hover definition (dotted underline).

const FUNCTIONAL_HOMEOSTASIS: StatTableData = {
  title: "Functional homeostasis",
  groups: [
    {
      domain: "Biomolecular",
      label: "Biochemistry (Blood)",
      rows: [
        {
          category: "Cardiovascular (low-risk transport)",
          metrics: [
            ["ApoB", "0.6 g/L (60 mg/dL)", false, "Apolipoprotein B — the particle count of artery-clogging cholesterol; the strongest single lipid predictor of heart disease."],
            ["Hemoglobin", "14.1 g/dL", false, "The oxygen-carrying protein in red blood cells."],
            ["Ferritin", "166 µg/L", false, "Stored iron — the body's reserve for making hemoglobin."],
          ],
        },
        {
          category: "Endometabolic (sensitive disposal)",
          metrics: [
            ["HbA1c", "5.1%", false, "Average blood sugar over the past ~3 months (glycated hemoglobin)."],
            ["Fasting insulin", "4.1 IU/L", false, "Insulin at rest — a marker of insulin sensitivity and metabolic health."],
          ],
        },
        {
          category: "Hepatorenal (low-stress clearance)",
          metrics: [
            ["eGFR-CysC", "101 mL/min/1.73m²", false, "Estimated kidney filtration rate, derived from cystatin C (not muscle-biased)."],
            ["ALT", "26 IU/L", false, "A liver enzyme; elevated levels signal liver stress or injury."],
            ["Uric acid", "0.28 mmol/L (4.7 mg/dL)", false, "A metabolic waste product cleared by the kidneys; high levels strain them."],
          ],
        },
      ],
    },
    {
      domain: "Circulatory",
      label: "Hemodynamics (Vitals)",
      rows: [
        {
          category: "Cardiovascular (low-effort circulation)",
          metrics: [
            ["RPP", "5,500 mmHg", false, "Rate-pressure product (heart rate × systolic BP) — the heart's workload and oxygen demand."],
            ["Blood pressure", "110/65 mmHg", true, "The pressure of blood against the artery walls (systolic / diastolic)."],
            ["Resting HR", "50 bpm", true, "Heartbeats per minute at rest; lower reflects a more efficient heart."],
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
      label: "Densitometry (DEXA)",
      rows: [
        {
          category: "Muscle mass (force reserve)",
          metrics: [
            ["ALMI", "9.4 kg/m² (>80th percentile)", false, "Appendicular lean mass index — arm and leg muscle relative to height; the key muscularity metric."],
            ["Height²", "3.09 m²", true, "Height squared — the denominator that normalizes lean mass for body size."],
            ["ALM", "29.1 kg", true, "Appendicular lean mass — total muscle in the arms and legs."],
          ],
        },
        {
          category: "Fat mass (metabolic protection)",
          metrics: [
            ["VAT", "114 g", false, "Visceral adipose tissue — fat stored around the internal organs, the most metabolically harmful kind."],
            ["Body fat", "7.9% (<5th percentile)", false, "The percentage of total body weight that is fat."],
          ],
        },
        {
          category: "Bone density (skeletal strength)",
          metrics: [
            ["Z-score", "−0.3 (37th percentile)", false, "Bone density compared with an age- and sex-matched average."],
            ["BMD", "1.212 g/cm²", true, "Bone mineral density — the mineral content and strength of bone."],
          ],
        },
      ],
    },
    {
      domain: "Geometric",
      label: "Anthropometry (Tape)",
      rows: [
        {
          category: "Waistline (central adiposity)",
          metrics: [
            ["Waist-to-height ratio", "0.45", false, "Waist circumference ÷ height — the best simple predictor of central-fat risk."],
            ["Height", "176 cm", true, "Standing height."],
            ["Waist", "80 cm", true, "Waist circumference."],
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
      domain: "Biomechanical",
      label: "Integrated Battery (Performance)",
      rows: [
        {
          category: "Hip (locomotive power)",
          metrics: [
            ["Extension (balance)", "6 pistol squats per leg", false, "Single-leg squatting strength — knee extension under balance."],
            ["Extension (hinge)", "Deadlift 2× BW", false, "Hip-hinge pulling strength (the deadlift)."],
            ["Flexion (curl)", "1 nordic curl", false, "Hamstring and knee-flexion strength (the nordic curl)."],
          ],
        },
        {
          category: "Core (midline stability)",
          metrics: [
            ["Compression (raise)", "15-sec V-sit", false, "Trunk-flexion / anterior-chain compression hold (the V-sit)."],
            ["Tensegrity (press)", "15-sec back lever", false, "Straight-arm pressing tension through the trunk (the back lever)."],
            ["Tensegrity (pull)", "5-sec front lever", false, "Straight-arm pulling tension through the trunk (the front lever)."],
          ],
        },
        {
          category: "Shoulder (upper-body strength)",
          metrics: [
            ["Extension (pull)", "20 pull-ups", false, "Vertical pulling strength (pull-ups)."],
            ["Flexion (dip)", "25 chest dips", false, "Pressing strength at the shoulder and chest (dips)."],
            ["Flexion (press)", "OH press 0.9× BW", false, "Overhead pressing strength."],
          ],
        },
        {
          category: "Global (work capacity)",
          metrics: [
            ["Flexion (squat)", "Overhead squat 1× BW", false, "Full-depth overhead squat — whole-body mobility and strength."],
            ["Extension (gait)", "30-sec 200 m sprint; 3 W/kg FTP (20 min)", false, "Locomotive power output — sprinting and sustained cycling."],
            ["Extension (jump)", "2.4 m broad jump", false, "Explosive lower-body power (the broad jump)."],
          ],
        },
      ],
    },
    {
      domain: "Bioenergetic",
      label: "Calorimetry (CTEP)",
      rows: [
        {
          category: "Global (energy efficiency)",
          metrics: [
            ["VO₂max (uptake)", "53 ml/kg/min", false, "Maximum rate of oxygen use during exercise — the headline aerobic-fitness metric."],
            ["Lactate (threshold)", "1.8 mmol/L @ 70% VO₂max (2.5 W/kg)", true, "The intensity at which lactate begins to accumulate — a measure of endurance efficiency."],
            ["MFO (rate)", "0.45 g/min @ 60% VO₂max", true, "Maximal fat oxidation — the peak rate of burning fat for fuel."],
          ],
        },
      ],
    },
  ],
};

const HEALTH_REFERENCES: Reference[] = [
  {
    id: "framework",
    cite: (
      <>
        Delano, L. Balance, integrity, and capacity: a functional framework for health status. (Forthcoming.)
      </>
    ),
    tag: "Framework",
  },
  {
    id: "apob",
    cite: (
      <>
        Sniderman, A. D., et al. (2019). Apolipoprotein B particles and cardiovascular disease: a narrative review. <em>JAMA Cardiology</em>, 4(12).
      </>
    ),
    url: "https://pubmed.ncbi.nlm.nih.gov/31642874/",
    urlLabel: "PubMed",
    tag: "Balance",
  },
  {
    id: "hba1c",
    cite: (
      <>
        Khaw, K. T., et al. (2001). Glycated haemoglobin, diabetes, and mortality in men in Norfolk cohort of the European Prospective Investigation of Cancer and Nutrition (EPIC-Norfolk). <em>BMJ</em>, 322(7277).
      </>
    ),
    url: "https://pubmed.ncbi.nlm.nih.gov/11141143/",
    urlLabel: "PubMed",
    tag: "Balance",
  },
  {
    id: "cystatinc",
    cite: (
      <>
        Shlipak, M. G., et al. (2013). Cystatin C versus creatinine in determining risk based on kidney function. <em>New England Journal of Medicine</em>, 369(10).
      </>
    ),
    url: "https://pubmed.ncbi.nlm.nih.gov/24004120/",
    urlLabel: "PubMed",
    tag: "Balance",
  },
  {
    id: "restinghr",
    cite: (
      <>
        Zhang, D., Shen, X., and Qi, X. (2016). Resting heart rate and all-cause and cardiovascular mortality in the general population: a meta-analysis. <em>CMAJ</em>, 188(3).
      </>
    ),
    url: "https://pubmed.ncbi.nlm.nih.gov/26598376/",
    urlLabel: "PubMed",
    tag: "Balance",
  },
  {
    id: "bloodpressure",
    cite: (
      <>
        Lewington, S., et al. (2002). Age-specific relevance of usual blood pressure to vascular mortality: a meta-analysis of individual data for one million adults in 61 prospective studies. <em>Lancet</em>, 360(9349).
      </>
    ),
    url: "https://pubmed.ncbi.nlm.nih.gov/12493255/",
    urlLabel: "PubMed",
    tag: "Balance",
  },
  {
    id: "sarcopenia",
    cite: (
      <>
        Cruz-Jentoft, A. J., et al. (2019). Sarcopenia: revised European consensus on definition and diagnosis (EWGSOP2). <em>Age and Ageing</em>, 48(1).
      </>
    ),
    url: "https://pubmed.ncbi.nlm.nih.gov/30312372/",
    urlLabel: "PubMed",
    tag: "Integrity",
  },
  {
    id: "bmd",
    cite: (
      <>
        Marshall, D., Johnell, O., and Wedel, H. (1996). Meta-analysis of how well measures of bone mineral density predict occurrence of osteoporotic fractures. <em>BMJ</em>, 312(7041).
      </>
    ),
    url: "https://pubmed.ncbi.nlm.nih.gov/8634613/",
    urlLabel: "PubMed",
    tag: "Integrity",
  },
  {
    id: "whtr",
    cite: (
      <>
        Ashwell, M., Gunn, P., and Gibson, S. (2012). Waist-to-height ratio is a better screening tool than waist circumference and BMI for adult cardiometabolic risk factors: systematic review and meta-analysis. <em>Obesity Reviews</em>, 13(3).
      </>
    ),
    url: "https://pubmed.ncbi.nlm.nih.gov/22106927/",
    urlLabel: "PubMed",
    tag: "Integrity",
  },
  {
    id: "vo2max",
    cite: (
      <>
        Kaminsky, L. A., et al. (2022). Updated reference standards for cardiorespiratory fitness measured with cardiopulmonary exercise testing (the FRIEND Registry). <em>Mayo Clinic Proceedings</em>, 97(2).
      </>
    ),
    url: "https://pubmed.ncbi.nlm.nih.gov/34809986/",
    urlLabel: "PubMed",
    tag: "Capacity",
  },
];

export default function HealthPage() {
  return (
    <>
      <PageHeading title="Health" hatnote={<>The present — how I function</>} />

      <p className="lead">
        Health is one body read at three levels: how steadily it holds at rest (balance),
        how soundly it&rsquo;s built (integrity), and what it can do under load (capacity) —
        from full rest to all-out effort.
      </p>
      <p>
        At 1.76 m and 72 kg I sit high on all three: clean blood and an unhurried
        circulation, a lean and muscular frame over sound bone, and broad strength with deep
        aerobic reserve. Below is my health status for 2026.
      </p>

      <h2 id="balance">Balance</h2>
      <p>
        Balance — how steadily my body holds a resting state, in two readings of one system:
        its blood chemistry (biomolecular) and its circulation (hemodynamic). Mine holds well
        — low-risk lipids, flexible glucose and insulin, and a calm, low-rate, low-pressure
        flow.
      </p>
      <StatTable {...FUNCTIONAL_HOMEOSTASIS} />

      <h2 id="integrity">Integrity</h2>
      <p>
        Integrity — how my body is built and holds together, in two readings of one frame:
        its make-up of muscle, fat, and bone (compositional) and its proportion (geometric).
        Mine is lean and muscular over sound bone, carrying little central fat.
      </p>
      <StatTable {...STRUCTURAL_INTEGRITY} />

      <h2 id="capacity">Capacity</h2>
      <p>
        Capacity — what my body can do under load, in two readings of one output: the force
        and movement it produces (biomechanical) and the energy that fuels it (bioenergetic).
        Mine is broad — strength and power head to toe, high aerobic capacity, and efficient
        fuel use.
      </p>
      <StatTable {...FUNCTIONAL_CAPACITY} />

      <References
        items={HEALTH_REFERENCES}
        intro="The framework and evidence behind these readings."
      />
    </>
  );
}
