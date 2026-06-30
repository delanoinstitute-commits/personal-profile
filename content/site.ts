// Global site metadata and navigation structure.
// Navigation is grouped into four sections (overview → future → present → past).
// Each group holds one or more pages; each page's children are in-page sections
// (anchors) rendered as the horizontal SectionNav.
//
// CANONICAL NOMENCLATURE (house style — see DESIGN_SPEC.md §8). One spelling each:
//   learning-systems designer · 10X · single-set-to-failure · self-mastery ·
//   Mindvalley · CrossFit · taxonomical · the six domains, in fixed order:
//   train, eat, finance, learn, mind, plan.
// Voice: body is third person ("Delano", "he"); CTA is second person; first
// person "I" only inside attributed quotations. British spelling, except
// "program" (US) for named products. Sentence case; Oxford comma; D Month YYYY.

export const SITE = {
  name: "Lorenzo Delano",
  tagline: "Designer · Practitioner · Teacher of self-mastery",
  description:
    "A living, Wikipedia-style profile of Lorenzo Delano — learning-systems designer, health coach, and taxonomist. What he is, what he has done, where he is going.",
  url: "https://lorenzodelano.com",
  email: "lorenzo@lorenzodelano.com",
};

export type NavSection = { label: string; anchor: string };
export type NavPage = {
  label: string;
  href: string;
  gloss: string;
  sections: NavSection[];
};
export type NavGroup = { title: string; pages: NavPage[] };

export const NAV_GROUPS: NavGroup[] = [
  {
    title: "The overview",
    pages: [
      {
        label: "Start here",
        href: "/",
        gloss: "About this site",
        sections: [
          { label: "About", anchor: "about" },
          { label: "Contact", anchor: "contact" },
        ],
      },
    ],
  },
  {
    title: "The future",
    pages: [
      {
        label: "Purpose",
        href: "/purpose",
        gloss: "Problems he cares about",
        sections: [
          { label: "Individual", anchor: "individual" },
          { label: "Social", anchor: "social" },
        ],
      },
    ],
  },
  {
    title: "The present",
    pages: [
      {
        label: "Constituents",
        href: "/constituents",
        gloss: "What makes him up",
        sections: [
          { label: "Psychological", anchor: "psychological" },
          { label: "Physical", anchor: "physical" },
          { label: "Socioeconomic", anchor: "socioeconomic" },
          { label: "Personal", anchor: "personal" },
        ],
      },
      {
        label: "Lifestyle",
        href: "/lifestyle",
        gloss: "How he lives",
        sections: [{ label: "Behavioural", anchor: "behavioural" }],
      },
      {
        label: "Skills",
        href: "/skills",
        gloss: "What he does",
        sections: [
          { label: "Architectural", anchor: "architectural" },
          { label: "Production", anchor: "production" },
          { label: "Coaching", anchor: "coaching" },
        ],
      },
    ],
  },
  {
    title: "The past",
    pages: [
      {
        label: "Biography",
        href: "/biography",
        gloss: "His story",
        sections: [
          { label: "Biography", anchor: "biography" },
          { label: "Timeline", anchor: "timeline" },
        ],
      },
      {
        label: "Education",
        href: "/education",
        gloss: "What he studied",
        sections: [{ label: "Academics", anchor: "academics" }],
      },
      {
        label: "Experience",
        href: "/experience",
        gloss: "What he has done",
        sections: [
          { label: "Employment", anchor: "employment" },
          { label: "Self-employment", anchor: "self-employment" },
          { label: "Business", anchor: "business" },
          { label: "Creative", anchor: "creative" },
        ],
      },
    ],
  },
];

// Flattened list for per-page section lookup (SectionNav) and the no-JS fallback.
export const NAV: NavPage[] = NAV_GROUPS.flatMap((g) => g.pages);
