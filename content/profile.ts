// The infobox data — the right-column profile that sits beside the article,
// like the summary box on a Wikipedia biography. Organised into four lenses:
// Personal · Biological · Legal · Cultural. Financial/economic data is
// intentionally excluded from the public site.

export type InfoboxValue = {
  text: string;
  href?: string; // optional external link or internal route
  note?: string; // optional tooltip/reference text
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
    heading: "Personal",
    rows: [
      {
        label: "Born",
        values: [
          {
            text: `Lorenzo Roos · 7 Dec 1987 (age ${AGE}) · Krugersdorp, South Africa`,
          },
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
        label: "Known for",
        values: [
          { text: "Learning design — for organisations" },
          {
            text: "10X — for individuals",
            href: "https://www.mindvalley.com/10x/quest",
            note: "10X Fitness — the single-set-to-failure training method and Mindvalley Quest co-created by Delano, completed by 90,000+ people.",
          },
        ],
      },
      { label: "Archetype", values: [{ text: "Rick Rubin meets Tim Ferriss" }] },
      {
        label: "Education",
        values: [{ text: "High-school dropout (age 13) · self-taught" }],
      },
      {
        label: "Influences",
        values: [{ text: "Bruce Lee · Ken Wilber · David Deutsch" }],
      },
      { label: "Worldview", values: [{ text: "Rational optimist" }] },
    ],
  },
  {
    heading: "Biological",
    rows: [
      { label: "Sex", values: [{ text: "Male" }] },
      { label: "Race", values: [{ text: "Caucasian" }] },
      { label: "Traits", values: [{ text: "Blue eyes · brown hair · medium build" }] },
      { label: "Height", values: [{ text: "1.76 m (5′9″)" }] },
      { label: "Weight", values: [{ text: "72 kg (158 lb)" }] },
    ],
  },
  {
    heading: "Legal",
    rows: [
      { label: "Full name", values: [{ text: "Lorenzo Delano (since 2009)" }] },
      { label: "Citizenship", values: [{ text: "South African (since 1987)" }] },
      { label: "Residency", values: [{ text: "United States (since 2026)" }] },
      {
        label: "Family",
        values: [
          { text: "Rizel van den Berg (mother)" },
          { text: "Cornelius Roos (father)" },
          {
            text: "Jean Piere Maritz (brother, d. 2004)",
            note: "Brother. Deceased 10 March 2004.",
          },
        ],
      },
      { label: "Partner", values: [{ text: "Jelena Warren (since 2012)" }] },
      { label: "Children", values: [{ text: "None" }] },
    ],
  },
  {
    heading: "Cultural",
    rows: [
      { label: "Generation", values: [{ text: "Y (Millennial)" }] },
      {
        label: "Ancestry",
        values: [{ text: "Western European (Belgian, Dutch, German)" }],
      },
      { label: "Ethnicity", values: [{ text: "Afrikaans" }] },
      {
        label: "Languages",
        values: [
          { text: "English (1st)" },
          { text: "Afrikaans (native)" },
          { text: "Mandarin Chinese" },
        ],
      },
      { label: "Religion", values: [{ text: "None (secular humanist)" }] },
      { label: "Politics", values: [{ text: "Independent" }] },
    ],
  },
];
