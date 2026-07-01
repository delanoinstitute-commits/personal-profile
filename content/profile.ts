// The infobox data — the right-column profile that sits beside the article,
// like the summary box on a Wikipedia biography. Organised into four lenses,
// ordered for a first-time visitor scanning "who is this, and should I engage
// them?": Personal → Cultural → Biological → Legal. Within each group, entries
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
  // Place an image at /public/portrait.jpg to show a photo.
  image: "/portrait.jpg",
  imageCaption: "Delano in 2020",
  dob: DOB,
};

export const INFOBOX: InfoboxGroup[] = [
  {
    // Birth facts first, then how he was formed, then what he does and stands
    // for, closing on the motto he lives by.
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
        label: "Education",
        values: [
          { text: "Pretoria Chinese High" },
          { text: "ETA College (2008)" },
          { text: "Self-education (since 2009)" },
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
      { label: "Archetype", values: [{ text: "Rick Rubin meets Tim Ferriss" }] },
      {
        label: "Known for",
        values: [
          {
            text: "The RBG Method",
            note: "Rapid Benchmark Graduate — Delano's method for rapidly mastering a discipline to a benchmark standard.",
          },
          {
            text: "The 10X Method",
            href: "https://www.mindvalley.com/10x/quest",
            note: "10X Fitness — the single-set-to-failure training method and Mindvalley Quest co-created by Delano, completed by 90,000+ people.",
          },
        ],
      },
      { label: "Worldview", values: [{ text: "Rational optimist" }] },
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
          { text: "English (1st)" },
          { text: "Afrikaans (native)" },
          { text: "Mandarin Chinese" },
        ],
      },
      { label: "Ethnicity", values: [{ text: "Afrikaans" }] },
      {
        label: "Ancestry",
        values: [{ text: "Western European (Belgian, Dutch, German)" }],
      },
      { label: "Generation", values: [{ text: "Y (Millennial)" }] },
      { label: "Religion", values: [{ text: "None (secular humanist)" }] },
    ],
  },
  {
    // Coach-relevant physical descriptors.
    heading: "Biological",
    rows: [
      { label: "Traits", values: [{ text: "Blue eyes · brown hair · medium build" }] },
      { label: "Height", values: [{ text: "1.76 m (5′9″)" }] },
      { label: "Weight", values: [{ text: "72 kg (158 lb)" }] },
    ],
  },
  {
    // Engagement-decisive facts up top (work-eligibility), personal context
    // last.
    heading: "Legal",
    rows: [
      { label: "Residency", values: [{ text: "United States (since 2026)" }] },
      { label: "Citizenship", values: [{ text: "South African (since 1987)" }] },
      { label: "Full name", values: [{ text: "Lorenzo Delano (since 2009)" }] },
      { label: "Partner", values: [{ text: "Jelena Warren (since 2012)" }] },
      { label: "Children", values: [{ text: "None" }] },
      {
        label: "Family",
        values: [
          { text: "Rizel van den Berg (mother)" },
          { text: "Cornelius Roos (father)" },
          {
            text: "Jean Piere Maritz (brother)",
            note: "Deceased 10 March 2004.",
          },
        ],
      },
    ],
  },
];
