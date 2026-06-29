// The infobox data — the "inherited profile" that sits on the right rail,
// exactly like the summary box on a Wikipedia biography. Financial/economic
// data is intentionally excluded from the public site.

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

export const PROFILE = {
  name: "Lorenzo Delano",
  // Place an image at /public/portrait.jpg to show a photo; otherwise the
  // monogram placeholder renders.
  image: "/portrait.jpg",
  imageCaption: "Lorenzo Delano",
  born: "7 December 1987 (age 39)",
  bornPlace: "Krugersdorp, South Africa",
  occupations: [
    "Learning-systems designer",
    "Health & behavioural coach",
    "Taxonomist",
    "Production director",
  ],
};

export const INFOBOX: InfoboxGroup[] = [
  {
    heading: "Legal",
    rows: [
      { label: "Full name", values: [{ text: "Lorenzo Delano" }] },
      { label: "Born", values: [{ text: "7 December 1987 (age 39)" }] },
      { label: "Citizenship", values: [{ text: "South African" }] },
      { label: "Residency", values: [{ text: "United States" }] },
      {
        label: "Parents",
        values: [
          { text: "Rizel Delano (mother)" },
          { text: "Neels Roos (father)" },
        ],
      },
      {
        label: "Sibling",
        values: [
          {
            text: "Jean Piere van den Berg",
            note: "Brother. Deceased 10 March 2004.",
          },
        ],
      },
      { label: "Partner", values: [{ text: "Jelena Lakic" }] },
      { label: "Children", values: [{ text: "None" }] },
    ],
  },
  {
    heading: "Cultural",
    rows: [
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
    ],
  },
  {
    heading: "Biological",
    rows: [
      { label: "Sex", values: [{ text: "Male" }] },
      { label: "Traits", values: [{ text: "Blue eyes · brown hair · medium build" }] },
      {
        label: "Genetic",
        values: [
          {
            text: "Blood O−, APOE ε3/ε3, Lp(a) 10 nmol/L",
            note: "Blood type O negative; APOE ε3/ε3 genotype; lipoprotein(a) of 10 nmol/L.",
          },
        ],
      },
      {
        label: "Personality",
        values: [
          {
            text: "O 49 · C 96 · E 29 · A 30 · N 1",
            note: "Big Five percentiles — Openness 49, Conscientiousness 96, Extraversion 29, Agreeableness 30, Neuroticism (natural reactions) 1.",
          },
        ],
      },
      { label: "Cognitive", values: [{ text: "IQ 110" }] },
      { label: "Worldview", values: [{ text: "Rational optimist" }] },
    ],
  },
];
