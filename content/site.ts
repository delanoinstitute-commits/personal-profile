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
  sections: NavSection[];
};
export type NavGroup = { title: string; pages: NavPage[] };

export const NAV_GROUPS: NavGroup[] = [
  {
    title: "Overview (home)",
    pages: [
      {
        label: "Start here",
        href: "/",
        sections: [
          { label: "About", anchor: "about" },
          { label: "Contact", anchor: "contact" },
        ],
      },
    ],
  },
  {
    title: "Future (vision)",
    pages: [
      {
        label: "Purpose",
        href: "/purpose",
        sections: [
          { label: "Individual", anchor: "individual" },
          { label: "Social", anchor: "social" },
        ],
      },
    ],
  },
  {
    title: "Present (resources)",
    pages: [
      {
        label: "Skills",
        href: "/skills",
        sections: [
          { label: "Architectural", anchor: "architectural" },
          { label: "Production", anchor: "production" },
          { label: "Coaching", anchor: "coaching" },
        ],
      },
      {
        label: "Identity",
        href: "/identity",
        sections: [
          { label: "Psychological", anchor: "psychological" },
          { label: "Interests", anchor: "interests" },
        ],
      },
      {
        label: "Health",
        href: "/health",
        sections: [
          { label: "Health", anchor: "health" },
          { label: "Fitness", anchor: "fitness" },
        ],
      },
      {
        label: "Assets",
        href: "/assets",
        sections: [{ label: "Socioeconomic", anchor: "socioeconomic" }],
      },
      {
        label: "Time",
        href: "/time",
        sections: [{ label: "Behavioural", anchor: "behavioural" }],
      },
    ],
  },
  {
    title: "Past (experience)",
    pages: [
      {
        label: "Biography",
        href: "/biography",
        sections: [
          { label: "Biography", anchor: "biography" },
          { label: "Timeline", anchor: "timeline" },
        ],
      },
      {
        label: "Education",
        href: "/education",
        sections: [{ label: "Academics", anchor: "academics" }],
      },
      {
        label: "Experience",
        href: "/experience",
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
