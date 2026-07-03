// The infobox data — the right-column profile that sits beside the article,
// like the summary box on a Wikipedia biography. Organised into three lenses,
// ordered for a first-time visitor scanning "who is this, and should I engage
// them?": Personal → Cultural → Legal. Within each group, entries
// are ordered by descending engagement-signal. Financial/economic data is
// intentionally excluded from the public site.

export type InfoboxValue = {
  text: string;
  href?: string; // optional external link or internal route
  note?: string; // optional tooltip/reference text
  italic?: boolean; // render as an elegant serif-italic quote
};

export type InfoboxRow = {
  label: string;
  values: InfoboxValue[];
};

export type InfoboxGroup = {
  heading: string;
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
    objectPosition: "46% 50%",
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
    objectPosition: "25% 50%",
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
    // Positioning first (archetype), then origin, then what he does and stands
    // for, closing on formation and the motto he lives by.
    heading: "Personal",
    rows: [
      {
        label: "Born",
        values: [
          { text: "Lorenzo Roos" },
          { text: `7 December 1987 (age ${AGE})` },
          { text: "Krugersdorp, South Africa" },
        ],
      },
      {
        label: "Occupation",
        values: [
          { text: "Learning-systems architect" },
          { text: "Education producer" },
          { text: "Performance coach" },
        ],
      },
      {
        label: "Education",
        values: [
          { text: "Pretoria Chinese High (2006)" },
          { text: "ETA College (2008)" },
          { text: "Self-education (since 2009)" },
        ],
      },
      { label: "Worldview", values: [{ text: "Integral (rational) optimist" }] },
      {
        label: "Appearance",
        values: [
          { text: "Blue eyes · brown hair · average height (176 cm)" },
        ],
      },
      {
        label: "Quote",
        values: [
          {
            text: "“How you do anything is how you do everything.”",
            italic: true,
          },
        ],
      },
    ],
  },
  {
    // Collaboration-fit signal — languages lead, belief disclosures sit in the
    // cold tail so a differing viewer doesn't filter on them.
    heading: "Cultural",
    rows: [
      {
        label: "Languages",
        values: [
          { text: "English (primary)" },
          { text: "Afrikaans (mother tongue)" },
          { text: "Mandarin Chinese" },
        ],
      },
      { label: "Ethnicity", values: [{ text: "Afrikaner" }] },
      {
        label: "Ancestry",
        values: [{ text: "Western European (Belgian, Dutch, German)" }],
      },
      { label: "Generation", values: [{ text: "Y (Millennial)" }] },
      { label: "Religion", values: [{ text: "None (secular humanist)" }] },
    ],
  },
  {
    // Engagement-decisive facts up top (work-eligibility), personal context
    // last.
    heading: "Legal",
    rows: [
      { label: "Residency", values: [{ text: "United States (since 2026)" }] },
      { label: "Citizenship", values: [{ text: "South African" }] },
      { label: "Full name", values: [{ text: "Lorenzo Delano (since 2009)" }] },
      { label: "Children", values: [{ text: "None" }] },
      {
        label: "Family",
        values: [
          { text: "Rizel van den Berg (mother)" },
          { text: "Cornelius Roos (father)" },
          {
            text: "Jean Pierre (brother)",
            note: "Deceased 10 March 2004.",
          },
        ],
      },
    ],
  },
];
