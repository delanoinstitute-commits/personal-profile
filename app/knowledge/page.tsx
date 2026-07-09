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
      domain: "Guided",
      label: "Standardized (Tests)",
      rows: [
        {
          category: "Formal (in-person schooling)",
          metrics: [
            ["Profile", "Primary education with tertiary language distinctions", false, "The composite of my guided schooling — seven primary grades in public school, then privately tutored Mandarin to international distinction."],
            ["Grades (1–3)", "Laerskool Muldersdrif (1994–1996)", true, "Lower primary."],
            ["Grades (4–7)", "Laerskool Hoeveld, Evander (1997–2000)", true, "Upper primary — the last of continuous schooling."],
            ["Mandarin", "Pretoria Chinese School (2005–2008)", true, {
              image: "/credentials/mandarin.jpg",
              alt: "Pretoria Chinese School certificate of participation in adult Mandarin classes, 2005",
              portrait: true,
              text: "Adult Mandarin classes, Pretoria Chinese School (Feb–Aug 2005). Certified as Lorenzo Maritz, his name before 2009.",
            }],
            ["Awards", "1st place, 8th Chinese Bridge (2009)", true, {
              image: "/credentials/chinese-bridge.jpg",
              alt: "8th Chinese Bridge award certificate from Hanban, 2009",
              text: "1st in the South African round; then, among 130+ countries at the Beijing finals, awarded the Prize of Outstanding — 8th Chinese Bridge, Hanban (2009).",
            }],
          ],
        },
        {
          category: "Non-formal (in-person training)",
          metrics: [
            ["Profile", "Teacher-centric tertiary vocational education", false, "All four qualifications are transmission roles — tutor, instructor, coach, learning designer — the teaching thread running through everything since."],
            ["Tutor", "TEFL, Language Link (2006)", true, {
              image: "/credentials/tefl.jpg",
              alt: "Preliminary Certificate in Teaching English as a Foreign Language, Southern African TEFL Training Institute, 2006",
              portrait: true,
              text: "Preliminary Certificate in Teaching English as a Foreign Language — Southern African TEFL Training Institute, Pretoria (June 2006).",
            }],
            ["Instructor", "Personal fitness trainer, ETA (2008)", true, {
              image: "/credentials/fitness.jpg",
              alt: "National Certificate in Fitness, Level 5, Exercise Teachers Academy, 2008",
              text: "National Certificate: Fitness (Level 5) — Personal Fitness Trainer and Spinning, Exercise Teachers Academy, Pretoria (2008).",
            }],
            ["Coach", "NLP and life coaching, COMENSA (2010)", true, "Neuro-linguistic-programming and life-coaching practitioner certification."],
            ["Designer", "Learning experience design, Shapers (2018)", true, {
              image: "/credentials/lx-design.jpg",
              alt: "Shapers certificate of participation for the learning experience design masterclass, photographed at the training, 2018",
              portrait: true,
              text: "Certificate of participation — learning-experience-design masterclass, Shapers, Netherlands (March 2018). Photographed at the two-day training; shapers.nl.",
            }],
          ],
        },
      ],
    },
    {
      domain: "Independent",
      label: "Elective (Tests)",
      rows: [
        {
          category: "Non-formal (remote schooling)",
          metrics: [
            ["Profile", "Secondary education with specialist electives", false, "Self-elected remote study — correspondence secondary schooling, then university, institute, and open-platform coursework as each domain demanded."],
            ["Grades (8–10)", "INTEC College (2001–2002)", true, "Distance secondary schooling — the last formal enrolment."],
            ["Philosophy", "Critical thinking, U. of Auckland (2018)", true, {
              image: "/credentials/philosophy.jpg",
              alt: "Certificate of Achievement in Logical and Critical Thinking, University of Auckland, 2018",
              portrait: true,
              text: "Certificate of Achievement — Logical and Critical Thinking, University of Auckland (FutureLearn, 2018).",
            }],
            ["Exercise", "Science of exercise, U. of Colorado (2019)", true, {
              image: "/credentials/exercise.jpg",
              alt: "Course Certificate in Science of Exercise, University of Colorado Boulder, 2019",
              text: "Course Certificate — Science of Exercise, University of Colorado Boulder (Coursera, 2019).",
            }],
            ["Finance", "Analysis and valuation, CFI (2024)", true, "Accounting, modeling, and corporate finance — fifteen courses."],
            ["Science", "AP/College, Khan Academy (2022–present)", true, "Self-paced study, mastery-tested — foundation to organic chemistry; structured but uncredentialed."],
          ],
        },
        {
          category: "Informal (remote training)",
          metrics: [
            ["Profile", "Practitioner-led health training", false, "Uncredentialed by design — specialist courses under named practitioners, validated in practice rather than by accreditation."],
            ["Nutrition", "Nutrition biochemistry, Dr Bryan Walsh (2021)", true, {
              image: "/credentials/nutrition.jpg",
              alt: "Certificate of Training in Nutritional Biochemistry, Metabolic Fitness, 2021",
              text: "Certificate of Training — 25 hours in Nutritional Biochemistry, Metabolic Fitness (Dr Bryan Walsh, 2021).",
            }],
            ["Blood chemistry", "Functional analysis, ODX Academy (2021)", true, {
              image: "/credentials/blood-chemistry.jpg",
              alt: "Certification of Excellence in Functional Blood Chemistry Analysis Mastery, ODX Academy, 2021",
              text: "Certification of Excellence — Functional Blood Chemistry Analysis Mastery (FBCA), ODX Academy (2021).",
            }],
            ["Longevity", "Early medical, Dr Peter Attia (2023)", true, "Evidence-based longevity medicine."],
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
          category: "Symbolic (structural design)",
          metrics: [
            ["Taxonomy", "knowledge maps — fitness, learning, life (2010s–)", false, "Distilling a domain into its underlying structure."],
            ["Learning experience", "curricula, courses, apprenticeships (2018–)", false, "Designing the path from novice to practitioner."],
            ["Environment", "gyms, studios, daily routines (2010s–)", false, "Designing the spaces and schedules that carry practice."],
          ],
        },
        {
          category: "Somatic (movement mastery)",
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
          category: "Relational (live transmission)",
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
          category: "Originals (proven in use)",
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
          category: "Commissions (delivered to standard)",
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
    id: "coombs",
    cite: (
      <>
        Coombs, P. H. and Ahmed, M. (1974). <em>Attacking Rural Poverty: How Nonformal Education Can Help</em>. Johns Hopkins University Press — the formal / non-formal / informal registers of education.
      </>
    ),
    tag: "Education",
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
        Each activity is read in two loci, individual and social: study independent or
        guided, skill technical or interpersonal, works authored or produced. And each
        cluster is named by its kind and by how it is validated — tests and certificates for
        theory, demonstration and testimony for practice, working artifacts and accepted
        deliveries for production. Largely self-taught since 13, my strongest evidence sits
        rightward — in the works. Below is my knowledge status for 2026.
      </p>

      <h2 id="education">Education <span className="heading-paren">(Theory)</span></h2>
      <p>
        What I know, in two readings of one understanding: instruction guided by
        others and study I pursue independently. Its clusters follow the formal, non-formal, and
        informal registers of education, each validated its own way — the exam, the
        certificate, the problem that yields. The classroom ended at 13; nearly everything
        since has been independent.
      </p>
      <StatTable {...EDUCATION} hint="Click a row below to explore my education profile in more detail." />

      <h2 id="skills">Skills <span className="heading-paren">(Practice)</span></h2>
      <p>
        What I can do, in two readings of one competence: technical skill with
        tools and symbols, and interpersonal skill with people. I design learning systems,
        direct productions, and coach — and each is demonstrable on demand.
      </p>
      <StatTable {...SKILLS} hint="Click a row below to explore my skills profile in more detail." />
      <p>
        Testimony:{" "}
        <WikiLink href="https://stories.mindvalley.com/product/mindvalley-certified-10x-coach">10X Coach stories</WikiLink>,{" "}
        <WikiLink href="https://stories.mindvalley.com/product/10x-fitness">10X Quest stories</WikiLink>,{" "}
        <WikiLink href="https://stories.mindvalley.com/product/body-first">BodyFirst stories</WikiLink>,{" "}
        <WikiLink href="https://youtu.be/8p5pAPpmy1o">the Norton family</WikiLink>, and{" "}
        <WikiLink href="https://youtu.be/WBfb7Trl3JY">Zenas &amp; Sandra</WikiLink>.
      </p>

      <h2 id="works">Works <span className="heading-paren">(Production)</span></h2>
      <p>
        What I have made, in two readings of one output: works authored alone
        and works produced with others. The artifact is the strongest evidence of knowledge;
        this catalog is the proof layer of the two sections above.
      </p>
      <StatTable {...WORKS} hint="Click a row below to explore my works profile in more detail." />

      <References
        items={KNOWLEDGE_REFERENCES}
        intro="The framework behind this page, and the traditions it draws on."
      />
    </>
  );
}
