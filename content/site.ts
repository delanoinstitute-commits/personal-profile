// Global site metadata and navigation structure.
// The navigation mirrors the "table of contents" of the wiki: each top-level
// entry is its own page, and each child is an in-page section (anchor).
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
    "A living, Wikipedia-style profile of Lorenzo Delano — learning-systems designer, health coach, and taxonomist. What I am, what I've done, where I'm going.",
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

export const NAV: NavPage[] = [
  {
    label: "Introduction",
    href: "/",
    gloss: "Home",
    sections: [
      { label: "About", anchor: "about" },
      { label: "Roles", anchor: "roles" },
      { label: "How he can help", anchor: "contact" },
      { label: "Why this site", anchor: "why" },
    ],
  },
  {
    label: "Current status",
    href: "/current-status",
    gloss: "Who he is now",
    sections: [
      { label: "Psychological", anchor: "psychological" },
      { label: "Physical", anchor: "physical" },
      { label: "Behavioural", anchor: "behavioural" },
      { label: "Creative", anchor: "creative" },
      { label: "Personal", anchor: "personal" },
    ],
  },
  {
    label: "Historical context",
    href: "/historical-context",
    gloss: "What he has done",
    sections: [
      { label: "Biography", anchor: "biography" },
      { label: "Education", anchor: "education" },
      { label: "Employment", anchor: "employment" },
      { label: "Self-employment", anchor: "self-employment" },
      { label: "Business", anchor: "business" },
      { label: "Creative works", anchor: "creative-works" },
    ],
  },
  {
    label: "Future trajectory",
    href: "/future-trajectory",
    gloss: "Where to next",
    sections: [
      { label: "Personal (growth)", anchor: "personal" },
      { label: "Social (impact)", anchor: "social" },
    ],
  },
];
