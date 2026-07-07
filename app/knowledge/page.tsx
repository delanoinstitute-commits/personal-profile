import type { Metadata } from "next";
import PageHeading from "@/components/PageHeading";
import WikiLink from "@/components/WikiLink";
import { StatTable, type StatTableData } from "@/components/StatTable";
import { References, type Reference } from "@/components/References";

export const metadata: Metadata = { title: "Knowledge" };

// The knowledge trilogy (see KNOWLEDGE_SPEC.md): Education (theory —
// knowing), Skills (practice — doing), Works (production — making), each
// split by the individual/social locus axis. Right column names the
// validation methodology (enactment): credentials, demonstrations, artifacts.
// Evidence ascends across the page: claims → demonstrations → artifacts.
// Entries carry period tags; "—" = to be cataloged.

const EDUCATION: StatTableData = {
  title: "Education",
  groups: [
    {
      domain: "Transmitted",
      label: "Instruction (Transcript)",
      rows: [
        {
          category: "Creative (socialized literacy)",
          metrics: [
            ["Schooling", "grades 1–7 (1994–2000)", false, "Primary schooling — Muldersdrift and Laerskool Hoëveld; the classroom ended for good at 13."],
            ["Tutoring", "private Mandarin — Pretoria Chinese School (2005–2008)", false, "Weekly group, then self-funded private, Mandarin classes."],
            ["Distinction", "1st place, 8th Chinese Bridge (2009)", true, "The international Mandarin-proficiency competition for non-native speakers — entered by exception, without matric."],
          ],
        },
      ],
    },
    {
      domain: "Self-guided",
      label: "Curricula (Library)",
      rows: [
        {
          category: "Creative (exploratory literacy)",
          metrics: [
            ["Homeschooling", "INTEC College — grade 10 (2001)", false, "Correspondence homeschooling — the last formal enrolment; all schooling ended by 15."],
            ["Certifications", "TEFL (2006) · fitness (2008) · bodywork (2009) · NLP coaching (2010) · blood chemistry (2021)", false, "Credentials sought as each discipline demanded one — practice-driven, not institutional."],
            ["Coursework", "critical thinking (2018) · exercise & philosophy (2019) · nutritional biochemistry (2021) · longevity (2023) · finance ×15 (2024)", false, "Guided study chosen and completed on his own initiative — Auckland, Coursera, Walsh, Attia, CFI."],
            ["Ad hoc", "learning science · health science · philosophy · chemistry · finance · complexity (2010s–)", false, "Open-ended domain study — use-inspired understanding, Pasteur-quadrant style; Wilber to Deutsch, Damodaran to Snowden."],
          ],
        },
      ],
    },
  ],
};

const SKILLS: StatTableData = {
  title: "Skills",
  groups: [
    {
      domain: "Technical",
      label: "Demonstrations (Performance)",
      rows: [
        {
          category: "Creative (structural design)",
          metrics: [
            ["Taxonomy", "knowledge maps — fitness, learning, life (2010s–)", false, "Distilling a domain into its underlying structure."],
            ["Learning experience", "curricula, courses, apprenticeships (2018–)", false, "Designing the path from novice to practitioner."],
            ["Environment", "gyms, studios, daily routines (2010s–)", false, "Designing the spaces and schedules that carry practice."],
          ],
        },
        {
          category: "Physical (movement mastery)",
          metrics: [
            ["Gymnastics", "strength training — rings, levers, handstands (2016–)", false, "Bodyweight strength practice, lately deconstructed into a complete physical-development program."],
          ],
        },
      ],
    },
    {
      domain: "Interpersonal",
      label: "Testimony (Reputation)",
      rows: [
        {
          category: "Social (live transmission)",
          metrics: [
            ["Coaching", "private & live-in — entrepreneurs, actors, billionaires (2010s–)", false, "One-on-one and embedded whole-household behavior change."],
            ["Instruction", "classes & lecturing — spinning, CrossFit, ETA College (2008–)", false, "Teaching practice directly, and teaching trainers one level up."],
            ["Facilitation", "workshops & retreats (2017–)", false, "Multi-day group programs and corporate sessions."],
            ["Speaking", "conferences & events (2017–)", false, "Stage teaching at industry events."],
          ],
        },
        {
          category: "Organisational (project orchestration)",
          metrics: [
            ["Production", "crews, budgets, post-production (2017–2025)", false, "Hiring and running the machinery around a shoot — directing on set when the project demands it."],
            ["Events", "10X programs — Barcelona, Italy, Estonia, Croatia, Malaysia (2017–2020)", false, "Live fitness experiments and multi-day events, including one that trained 200+ people in Sardinia."],
          ],
        },
      ],
    },
  ],
};

const WORKS: StatTableData = {
  title: "Works",
  groups: [
    {
      domain: "Authoring",
      label: "Portfolio (Artifacts)",
      rows: [
        {
          category: "Creative (codified originals)",
          metrics: [
            ["Methods", "RBG — rapid mastery (2017–) · taxonomy design (2026)", false, "Repeatable procedures: benchmarking a discipline's graduates; a system for designing taxonomies, informed by Lambe's Organising Knowledge."],
            ["Models", "health (2020–) · LX design (2018–) · self-mastery (2026) · knowledge (2026)", false, "Frameworks that structure a domain — balance/integrity/capacity; learning-experience design; train/eat/finance/learn/mind/plan; and the knowing/doing/making framework this page demonstrates."],
            ["Books", "Health Development (forthcoming)", false, "A book-length framework defining health as functional integrity."],
            ["Media", "kung-fu shorts (2006) · 10X series, YouTube (2020) · five taxonomical courses (2026)", false, "Self-authored productions — from first films to open-published course series."],
          ],
        },
      ],
    },
    {
      domain: "Production",
      label: "Credits (Productions)",
      rows: [
        {
          category: "Organisational (collaborative artifacts)",
          metrics: [
            ["Author courses", "Walsch, Wilber, Kotler, Watts (estate), Greenfield, Demartini (2017–2024)", false, "Online courses designed and directed with named authors."],
            ["Quests", "10X (2021) · Values Factor & BodyFirst (2024) — Mindvalley", false, "Co-created flagship programs; the 10X Quest has been completed by 90,000+ people."],
            ["Curricula", "10X Coach Certification — 500 coaches (2022) · Mastery micro-degree (2023)", false, "Certification and micro-degree frameworks built with and for institutions."],
          ],
        },
      ],
    },
  ],
};

const KNOWLEDGE_REFERENCES: Reference[] = [
  {
    id: "framework",
    cite: (
      <>
        Delano, L. Knowing, doing, making: a tripartite framework for knowledge. (Forthcoming.)
      </>
    ),
    tag: "Framework",
  },
  {
    id: "aristotle",
    cite: (
      <>
        Aristotle. <em>Nicomachean Ethics</em>, Book VI — episteme, techne, and phronesis; theoria, praxis, and poiesis.
      </>
    ),
    tag: "Framework",
  },
  {
    id: "sep",
    cite: (
      <>
        Parry, R. Episteme and Techne. <em>Stanford Encyclopedia of Philosophy</em>.
      </>
    ),
    url: "https://plato.stanford.edu/entries/episteme-techne/",
    urlLabel: "plato.stanford.edu",
    tag: "Framework",
  },
  {
    id: "ryle",
    cite: (
      <>
        Ryle, G. (1949). <em>The Concept of Mind</em>. Hutchinson — knowing-that versus knowing-how.
      </>
    ),
    tag: "Skills",
  },
  {
    id: "bloom",
    cite: (
      <>
        Anderson, L. W. and Krathwohl, D. R., eds. (2001). <em>A Taxonomy for Learning, Teaching, and Assessing: A Revision of Bloom&rsquo;s Taxonomy of Educational Objectives</em>. Longman.
      </>
    ),
    tag: "Education",
  },
  {
    id: "polanyi",
    cite: (
      <>
        Polanyi, M. (1966). <em>The Tacit Dimension</em>. Doubleday — tacit versus explicit knowledge.
      </>
    ),
    tag: "Skills",
  },
  {
    id: "vervaeke",
    cite: (
      <>
        Vervaeke, J. (2019). <em>Awakening from the Meaning Crisis</em> (lecture series). University of Toronto — the four kinds of knowing.
      </>
    ),
    tag: "Framework",
  },
  {
    id: "holland",
    cite: (
      <>
        Holland, J. L. (1997). <em>Making Vocational Choices</em> (3rd ed.) — the RIASEC types the activity facets derive from.
      </>
    ),
    tag: "Facets",
  },
  {
    id: "ranganathan",
    cite: (
      <>
        Ranganathan, S. R. (1933). <em>Colon Classification</em>. Madras Library Association — faceted classification.
      </>
    ),
    tag: "Framework",
  },
  {
    id: "stokes",
    cite: (
      <>
        Stokes, D. E. (1997). <em>Pasteur&rsquo;s Quadrant: Basic Science and Technological Innovation</em>. Brookings Institution Press — dissolving the pure/applied divide.
      </>
    ),
    tag: "Framework",
  },
];

export default function KnowledgePage() {
  return (
    <>
      <PageHeading title="Knowledge" hatnote={<>The present — what I know, do, and make</>} />

      <p className="lead">
        Knowledge is one competence read at three activities: what I know (education —
        theory), what I can do (skills — practice), and what I have made (works —
        production).
      </p>
      <p>
        Each activity is read in two loci, individual and social: study self-guided or
        transmitted, skill technical or interpersonal, works authored or produced — and each
        cluster carries an activity facet (creative, physical, social, organisational)
        adapted from Holland&rsquo;s RIASEC types. Largely self-taught since 13, my strongest
        evidence sits rightward — in the works. Below is my knowledge status for 2026.
      </p>

      <h2 id="education">Education</h2>
      <p>
        Theory — what I know, in two readings of one understanding: instruction transmitted
        to me (socialized literacy) and study I guide myself (exploratory literacy). The
        classroom ended at 13; nearly everything since — certifications, coursework, and
        open-ended domain study — has been self-guided, credentialed where practice demanded
        it.
      </p>
      <StatTable {...EDUCATION} />

      <h2 id="skills">Skills</h2>
      <p>
        Practice — what I can do, in two readings of one competence: technical skill with
        tools and symbols, and interpersonal skill with people. I design learning systems,
        direct productions, and coach — and each is demonstrable on demand.
      </p>
      <StatTable {...SKILLS} />
      <p>
        Testimony:{" "}
        <WikiLink href="https://stories.mindvalley.com/product/mindvalley-certified-10x-coach">10X Coach stories</WikiLink>,{" "}
        <WikiLink href="https://stories.mindvalley.com/product/10x-fitness">10X Quest stories</WikiLink>,{" "}
        <WikiLink href="https://stories.mindvalley.com/product/body-first">BodyFirst stories</WikiLink>,{" "}
        <WikiLink href="https://youtu.be/8p5pAPpmy1o">the Norton family</WikiLink>, and{" "}
        <WikiLink href="https://youtu.be/WBfb7Trl3JY">Zenas &amp; Sandra</WikiLink>.
      </p>

      <h2 id="works">Works</h2>
      <p>
        Production — what I have made, in two readings of one output: works authored alone
        and works produced with others. The artifact is the strongest evidence of knowledge;
        this catalog is the proof layer of the two sections above.
      </p>
      <StatTable {...WORKS} />

      <References
        items={KNOWLEDGE_REFERENCES}
        intro="The framework behind this page, and the traditions it draws on."
      />
    </>
  );
}
