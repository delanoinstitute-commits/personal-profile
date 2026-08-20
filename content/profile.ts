// The infobox data — the right-column profile that sits beside the article,
// like the summary box on a Wikipedia biography. Organized into four lenses
// mirroring the site's arc from given to chosen: Identity (the givens) →
// Professional (the doing) → Psychological (the mind) → Personal (the pages,
// one line each). Group headings carry a "See …" link into the page holding
// the full record. Financial/economic data beyond the one-line Wealth status
// is intentionally excluded from the public site.

export type InfoboxValue = {
  text: string;
  href?: string; // optional external link or internal route
  note?: string; // optional tooltip/reference text
  italic?: boolean; // render as an elegant serif-italic quote
};

export type InfoboxRow = {
  label: string;
  labelHref?: string; // link the label itself (e.g. Skills → /knowledge#skills)
  values: InfoboxValue[];
};

export type InfoboxGroup = {
  heading: string;
  headingLink?: { text: string; href: string }; // "(See Story)" beside the heading
  headingNote?: string; // unlinked heading suffix, e.g. "(See Pages)"
  rows: InfoboxRow[];
};

/** Age computed from the birthdate so it never goes stale. */
export function ageFrom(dobISO: string): number {
  const dob = new Date(dobISO);
  const now = new Date();
  let age = now.getFullYear() - dob.getFullYear();
  const monthDelta = now.getMonth() - dob.getMonth();
  if (monthDelta < 0 || (monthDelta === 0 && now.getDate() < dob.getDate())) {
    age--;
  }
  return age;
}

const DOB = "1987-12-07";
const AGE = ageFrom(DOB);

export const PROFILE = {
  name: "Lorenzo Delano",
  dob: DOB,
};

// Portrait carousel — Delano across contexts. Each shown in a fixed 4:3 box
// (object-cover); objectPosition frames the crop per image.
export type CarouselImage = {
  src: string;
  alt: string;
  context: string; // what the photo shows, e.g. "Speaking"
  location: string;
  year: string;
  photographer?: string; // credit line, when known
  objectPosition?: string;
};

export const CAROUSEL: CarouselImage[] = [
  {
    src: "/carousel/portrait.jpg",
    alt: "Studio portrait of Lorenzo Delano, arms crossed",
    context: "Portrait",
    location: "Joburg",
    year: "2020",
    objectPosition: "50% 32%",
  },
  {
    src: "/carousel/promotion.jpg",
    alt: "Delano gesturing while speaking on a panel stage in Dubai",
    context: "Promotion",
    location: "Dubai",
    year: "2025",
    photographer: "Mardo Männimägi",
    objectPosition: "35% 50%",
  },
  {
    src: "/carousel/production.jpg",
    alt: "Delano directing a MasterClass film shoot, holding a clapperboard",
    context: "Production",
    location: "Colorado",
    year: "2019",
    objectPosition: "64% 38%",
  },
  {
    src: "/carousel/speaking.jpg",
    alt: "Delano presenting on a blue-lit stage, headset mic and clicker in hand",
    context: "Speaking",
    location: "Jordan",
    year: "2022",
    photographer: "Karen Harms",
    objectPosition: "50% 45%",
  },
  {
    src: "/carousel/washington.jpg",
    alt: "Camera-monitor view of Delano directing a kitchen scene, reviewing a laptop with an actor",
    context: "Production",
    location: "Washington",
    year: "2022",
    photographer: "Bruno Cortes",
    objectPosition: "48% 42%",
  },
  {
    src: "/carousel/coaching.jpg",
    alt: "Delano coaching a group in a gym",
    context: "Workshop",
    location: "Italy",
    year: "2018",
    photographer: "Mardo Männimägi",
    objectPosition: "72% 48%",
  },
  {
    src: "/carousel/kotler.jpg",
    alt: "Delano crouching with a laptop beside Steven Kotler at a shoot",
    context: "Production",
    location: "Estonia",
    year: "2018",
    objectPosition: "0% 50%",
  },
  {
    src: "/carousel/calgary.jpg",
    alt: "Delano coaching a family seated around a living-room table",
    context: "Coaching",
    location: "Calgary",
    year: "2020",
    objectPosition: "50% 40%",
  },
  {
    src: "/carousel/training.jpg",
    alt: "Delano leading a training workshop around a table",
    context: "Workshop",
    location: "Barcelona",
    year: "2017",
    photographer: "Paulius Staniunas",
    objectPosition: "50% 45%",
  },
];

export const INFOBOX: InfoboxGroup[] = [
  {
    // The givens — birth, body, blood, culture, tongue; the legal row closes
    // (same shape as Professional's status pair). The full record is Story.
    heading: "Identity",
    headingLink: { text: "See Story", href: "/story" },
    rows: [
      {
        label: "Born",
        values: [
          { text: "Lorenzo Delano" },
          { text: `7 December 1987 (age ${AGE})` },
          { text: "Krugersdorp, South Africa" },
        ],
      },
      {
        label: "Phenotype",
        values: [
          { text: "Caucasian, male" },
          { text: "Blue eyes and brown hair" },
          { text: "Average height (176 cm)" },
        ],
      },
      { label: "Ancestry", values: [{ text: "Western European (Dutch)" }] },
      { label: "Ethnicity", values: [{ text: "Afrikaner" }] },
      { label: "Language", values: [{ text: "Afrikaans; English; Mandarin" }] },
      { label: "Citizenship", values: [{ text: "South African" }] },
    ],
  },
  {
    // The doing — occupation up top, then the Knowledge trio in the page's
    // own order (Works > Skills > Education, linked into their sections),
    // closing on the status pair.
    heading: "Professional",
    headingLink: { text: "See Knowledge", href: "/knowledge" },
    rows: [
      {
        label: "Occupation",
        values: [{ text: "Designer, producer, and coach" }],
      },
      {
        label: "Works",
        labelHref: "/knowledge#works",
        values: [
          { text: "Design methodologies" },
          { text: "Published designs" },
        ],
      },
      {
        label: "Skills",
        labelHref: "/knowledge#skills",
        values: [
          { text: "Knowledge organization" },
          { text: "Pedagogy" },
          { text: "Production" },
        ],
      },
      {
        label: "Education",
        labelHref: "/knowledge#education",
        values: [{ text: "Self-taught (age 13)" }],
      },
      { label: "Employment", values: [{ text: "Self-employed" }] },
      { label: "Residency", values: [{ text: "United States (since 2026)" }] },
    ],
  },
  {
    // The mind — the Nature page's headline outputs, one composite per row.
    heading: "Psychological",
    headingLink: { text: "See Nature", href: "/nature" },
    // Intelligence (full-scale IQ) joins once the RIOT result is wired on
    // Nature — the infobox never cites a number its source page lacks.
    rows: [
      { label: "Worldview", values: [{ text: "Rational optimist" }] },
      {
        label: "Personality",
        values: [{ text: "Disciplined, unflappable, and independent" }],
      },
      {
        label: "Values",
        values: [{ text: "Autonomy, achievement, and universal care" }],
      },
      {
        label: "Interests",
        values: [{ text: "Holland code: Investigative, artistic, and social" }],
      },
    ],
  },
  {
    // The pages — one status line per remaining page, labels linked; the
    // infobox doubles as the site index.
    heading: "Personal",
    headingNote: "See Pages",
    rows: [
      {
        label: "About",
        labelHref: "/",
        values: [{ text: "Personal mastery broker" }],
      },
      {
        label: "Lifestyle",
        labelHref: "/lifestyle",
        values: [{ text: "Design, teach, and exercise" }],
      },
      {
        label: "Health",
        labelHref: "/health",
        values: [{ text: "Lean, muscular, and fit" }],
      },
      {
        label: "Wealth",
        labelHref: "/wealth",
        values: [{ text: "Debt free with high credit score" }],
      },
      {
        label: "Network",
        labelHref: "/network",
        values: [{ text: "Unmarried and no children" }],
      },
    ],
  },
];
