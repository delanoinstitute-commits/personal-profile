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
      label: "Credentials (Transcript)",
      rows: [
        {
          category: "Schooling (foundational instruction)",
          metrics: [
            ["Homeschooling", "INTEC College (2001)", false, "Correspondence homeschooling — the last of his formal schooling before he left it entirely by 15."],
            ["Mandarin", "Pretoria Chinese School (2005)", false, "Weekly group, then self-funded private, Mandarin classes."],
            ["Distinction", "1st place, 8th Chinese Bridge (2009)", true, "The international Mandarin-proficiency competition for non-native speakers — entered by exception, without matric."],
          ],
        },
        {
          category: "Certification (licensed practice)",
          metrics: [
            ["TEFL", "English teaching, Language Link (2006)", false, "Teaching English as a Foreign Language."],
            ["Fitness", "Trainer & spinning instructor, ETA College (2008)", false, "Personal-training and group-cycling certification."],
            ["Bodywork", "Massage therapist, multiple modalities (2009)", false, "Hands-on soft-tissue therapy."],
            ["Coaching", "NLP / life-coaching practitioner (2010)", false, "Neuro-linguistic programming and life-coaching certification."],
            ["Blood chemistry", "Functional analyst, ODX Academy (2021)", false, "Interpreting blood panels for function, not just disease."],
          ],
        },
        {
          category: "Coursework (guided study)",
          metrics: [
            ["Critical thinking", "University of Auckland (2018)", false, "Formal reasoning and argument evaluation."],
            ["Exercise & philosophy", "Coursera (2019)", false, "Science of Exercise; Introduction to Philosophy."],
            ["Nutritional biochemistry", "Dr Bryan Walsh (2021)", false, "Metabolic pathways behind nutrition."],
            ["Longevity", "Peter Attia's Early program (2023)", false, "Evidence-based longevity medicine."],
            ["Finance", "15 courses, Corporate Finance Institute (2024)", false, "Accounting, modeling, and corporate finance."],
          ],
        },
      ],
    },
    {
      domain: "Self-directed",
      label: "Curricula (Library)",
      rows: [
        {
          category: "Domains (propositional breadth)",
          metrics: [
            ["Learning science", "instructional & experience design (2013–)", false, "How people learn, and how to design for it."],
            ["Health science", "exercise physiology, nutrition, longevity (2010s–)", false, "The science base behind the health practice."],
            ["Philosophy", "integral theory to fallibilism — Wilber, Deutsch (2014–)", false, "How we know, and how knowledge integrates."],
            ["Chemistry", "foundations to organic chemistry (2022–2026)", false, "Built from a general foundation toward organic chemistry."],
            ["Finance", "valuation & markets — Damodaran (2016–)", false, "Company valuation, markets, and capital allocation."],
            ["Complexity", "systems thinking, Cynefin — Snowden (2025)", false, "Sense-making in complex systems."],
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
          category: "Design (learning systems)",
          metrics: [
            ["Taxonomy", "knowledge maps — fitness, learning, life (2010s–)", false, "Distilling a domain into its underlying structure."],
            ["Learning experience", "curricula, courses, apprenticeships (2018–)", false, "Designing the path from novice to practitioner."],
            ["Environment", "gyms, studios, daily routines (2010s–)", false, "Designing the spaces and schedules that carry practice."],
          ],
        },
        {
          category: "Production (media direction)",
          metrics: [
            ["Directing", "on-set course direction (2017–2025)", false, "Running the set: talent, story, and take."],
            ["Producing", "crews, budgets, post-production (2017–2025)", false, "Hiring and running the machinery around the shoot."],
          ],
        },
        {
          category: "Language (spoken Mandarin)",
          metrics: [
            ["Fluency", "Chinese Bridge champion (2009)", false, "Demonstrated live — the skill behind the education entry."],
          ],
        },
      ],
    },
    {
      domain: "Interpersonal",
      label: "Testimony (Reputation)",
      rows: [
        {
          category: "Coaching (behavior change)",
          metrics: [
            ["Private", "entrepreneurs, actors, billionaires (2010s–)", false, "One-on-one performance and lifestyle coaching."],
            ["Live-in", "family lifestyle interventions (2019–2020)", false, "Embedded, whole-household behavior change."],
          ],
        },
        {
          category: "Facilitation (group instruction)",
          metrics: [
            ["Classes", "athletics & fitness instruction (2008–)", false, "From spinning studios to CrossFit floors."],
            ["Workshops", "organizational & retreat facilitation (2017–)", false, "Multi-day group programs and corporate sessions."],
          ],
        },
        {
          category: "Instruction (transmission at scale)",
          metrics: [
            ["Lecturing", "ETA College, part-time (2010s)", false, "Teaching trainers — instruction one level up."],
            ["Speaking", "conferences & events (2017–)", false, "Stage teaching at industry events."],
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
      domain: "Authored",
      label: "Portfolio (Artifacts)",
      rows: [
        {
          category: "Methods (procedures)",
          metrics: [
            ["RBG method", "Rapid Benchmark Graduate — rapid mastery (2017–)", false, "A system for mastering a discipline quickly by benchmarking its graduates."],
            ["Taxonomy design", "a system for designing taxonomies (2026)", false, "His method for building knowledge taxonomies, informed by Lambe's Organising Knowledge."],
          ],
        },
        {
          category: "Models (frameworks)",
          metrics: [
            ["Health model", "balance · integrity · capacity (2020–)", false, "Health as functional integrity across a stress–recovery continuum — the framework behind the Health page."],
            ["LX-design model", "learning-experience design (2018–)", false, "An evolving model for designing learning experiences."],
            ["Self-mastery map", "train · eat · finance · learn · mind · plan (2026)", false, "The six domains of self-mastery his 2026 course series is built around."],
            ["Knowledge model", "knowing · doing · making (2026)", false, "The tripartite framework this page demonstrates — theory, practice, production, each individual and social."],
          ],
        },
        {
          category: "Writing (long-form)",
          metrics: [
            ["Health Development", "book-length framework (forthcoming)", false, "Defining health as functional integrity."],
          ],
        },
      ],
    },
    {
      domain: "Produced",
      label: "Credits (Productions)",
      rows: [
        {
          category: "Courses (education products)",
          metrics: [
            ["Author courses", "Walsch, Wilber, Kotler, Watts (estate), Greenfield, Demartini (2017–2024)", false, "Online courses designed and directed with named authors."],
            ["Quests", "10X (2021), Values Factor & BodyFirst (2024) — Mindvalley", false, "Co-created flagship programs; the 10X Quest has been completed by 90,000+ people."],
            ["Certification", "10X Coach Certification — 500 coaches (2022)", false, "Training and certifying coaches in the 10X method."],
            ["Micro-degree", "Mastery framework — Mindvalley (2023)", true, "A six-month live, online micro-degree framework."],
          ],
        },
        {
          category: "Media (film & video)",
          metrics: [
            ["Shorts", "kung-fu films (2006)", true, "Early self-produced short films."],
            ["Series", "10X method, free YouTube series (2020)", false, "The 10X method taught in the open."],
            ["Courses", "five taxonomical video courses (2026)", false, "Training and life management, taxonomically organized."],
          ],
        },
        {
          category: "Events (live programs)",
          metrics: [
            ["10X programs", "experiments & events — Barcelona, Italy, Estonia, Croatia, Malaysia (2017–2020)", false, "Live fitness experiments and multi-day events, including one that trained 200+ people in Sardinia."],
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
        Each activity is read in two loci, individual and social: study self-directed or
        transmitted, skill technical or interpersonal, works authored or produced. Largely
        self-taught since 13, my strongest evidence sits rightward — in the works. Below is
        my knowledge status for 2026.
      </p>

      <h2 id="education">Education</h2>
      <p>
        Theory — what I know, in two readings of one understanding: instruction transmitted
        by institutions and mentors (credentialed) and study I direct myself (curricular). I
        left conventional schooling at 13; most of my education is autodidactic, certified
        where practice demanded it.
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
