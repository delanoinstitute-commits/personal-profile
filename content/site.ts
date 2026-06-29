// Global site metadata and navigation structure.
// The navigation mirrors the "table of contents" of the wiki: each top-level
// entry is its own page, and each child is an in-page section (anchor).

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
      { label: "How I can help", anchor: "contact" },
      { label: "Why this site", anchor: "why" },
    ],
  },
  {
    label: "Inherited profile",
    href: "/inherited-profile",
    gloss: "What I am",
    sections: [
      { label: "Legal", anchor: "legal" },
      { label: "Cultural", anchor: "cultural" },
      { label: "Biological", anchor: "biological" },
    ],
  },
  {
    label: "Current status",
    href: "/current-status",
    gloss: "Who I am now",
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
    gloss: "What I've done",
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
