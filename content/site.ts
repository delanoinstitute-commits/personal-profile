// Global site metadata and navigation structure.
// Navigation is grouped into three sections: Overview, then Constitution (the
// inputs — where he came from, who he is, how he lives) and Capital (what those
// produce — health, knowledge, wealth; the three canonical forms of personal
// capital). Each group holds one or more pages; each page's children are in-page
// sections (anchors) rendered as the horizontal SectionNav.
//
// CANONICAL NOMENCLATURE (house style — see DESIGN_SPEC.md §8). One spelling each:
//   learning-systems designer · 10X · single-set-to-failure · self-mastery ·
//   Mindvalley · CrossFit · taxonomical · the six domains, in fixed order:
//   train, eat, finance, learn, mind, plan.
// Voice: principled HYBRID. Third person is the default backbone (the record:
// infobox, home lead, bio, timeline, education, experience). First person for
// the personal layer (identity, health self-assessment, purpose, CTA). Switch
// by section, never mid-paragraph. US spelling; sentence case; Oxford comma.

export const SITE = {
  name: "Lorenzo Delano",
  tagline: "Designer · Practitioner · Teacher of self-mastery",
  description:
    "A living, Wikipedia-style profile of Lorenzo Delano — learning-systems designer, health coach, and taxonomist. What he is, what he has done, where he is going.",
  url: "https://lorenzodelano.com",
  email: "lorenzo@lorenzodelano.com",
};

// kind "refs" renders as the visually subordinate References chip in the
// SectionNav — the apparatus, distinguished from the three content branches.
export type NavSection = { label: string; anchor: string; kind?: "refs" };
export type NavPage = {
  label: string;
  href: string;
  sections: NavSection[];
};
export type NavGroup = { title: string; pages: NavPage[] };

export const NAV_GROUPS: NavGroup[] = [
  {
    title: "Constitution",
    pages: [
      {
        label: "About",
        href: "/",
        sections: [
          { label: "Lorenzo", anchor: "lorenzo" },
          { label: "Website", anchor: "website" },
          { label: "Contact", anchor: "contact" },
        ],
      },
      {
        label: "Story",
        href: "/story",
        sections: [
          { label: "Inheritance", anchor: "inheritance" },
          { label: "Development", anchor: "development" },
          { label: "Emergence", anchor: "emergence" },
          { label: "References", anchor: "references", kind: "refs" },
        ],
      },
      {
        label: "Nature",
        href: "/nature",
        sections: [
          { label: "Intellect", anchor: "intellect" },
          { label: "Character", anchor: "character" },
          { label: "Drive", anchor: "drive" },
          { label: "References", anchor: "references", kind: "refs" },
        ],
      },
      {
        label: "Lifestyle",
        href: "/lifestyle",
        sections: [
          { label: "Activity", anchor: "activity" },
          { label: "Time", anchor: "time" },
          { label: "Space", anchor: "space" },
          { label: "References", anchor: "references", kind: "refs" },
        ],
      },
    ],
  },
  {
    title: "Capital",
    pages: [
      {
        label: "Health",
        href: "/health",
        sections: [
          { label: "Integrity", anchor: "integrity" },
          { label: "Balance", anchor: "balance" },
          { label: "Capacity", anchor: "capacity" },
          { label: "References", anchor: "references", kind: "refs" },
        ],
      },
      {
        label: "Knowledge",
        href: "/knowledge",
        sections: [
          { label: "Works", anchor: "works" },
          { label: "Skills", anchor: "skills" },
          { label: "Education", anchor: "education" },
          { label: "References", anchor: "references", kind: "refs" },
        ],
      },
      {
        label: "Wealth",
        href: "/wealth",
        sections: [
          { label: "Security", anchor: "security" },
          { label: "Efficiency", anchor: "efficiency" },
          { label: "Growth", anchor: "growth" },
          { label: "References", anchor: "references", kind: "refs" },
        ],
      },
      {
        label: "Network",
        href: "/network",
        sections: [
          { label: "Nurture", anchor: "nurture" },
          { label: "Progress", anchor: "progress" },
          { label: "Contribution", anchor: "contribution" },
          { label: "References", anchor: "references", kind: "refs" },
        ],
      },
    ],
  },
];

// Flattened list for per-page section lookup (SectionNav) and the no-JS fallback.
export const NAV: NavPage[] = NAV_GROUPS.flatMap((g) => g.pages);
