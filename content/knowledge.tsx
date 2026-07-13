import WikiLink from "@/components/WikiLink";
import type { StatTableData } from "@/components/StatTable";
import type { Reference } from "@/components/References";

// Shared knowledge data — consumed by both the tabled page (/knowledge) and the
// outline experiment (/knowledge-alt), so the two stay verbatim in sync.
// See KNOWLEDGE_SPEC.md: Education (theory — knowing), Skills (practice —
// doing), Works (production — making), each split by the individual/social
// locus axis. The composite lead of each cluster is labelled per section —
// Student / Practitioner / Creator / Roles. "—" = to be cataloged.

export const EDUCATION: StatTableData = {
  title: "Education",
  groups: [
    {
      domain: "Guided",
      label: "Standardized (Tests)",
      rows: [
        {
          category: "Formal (in-person schooling)",
          metrics: [
            ["Student", "Primary education with tertiary language distinctions", false, "The composite of my guided schooling — seven primary grades in public school, then privately tutored Mandarin to international distinction."],
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
            ["Student", "Teacher-centric tertiary vocational education", false, "All four qualifications are transmission roles — tutor, instructor, coach, learning designer — the teaching thread running through everything since."],
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
            ["Student", "Secondary education with specialist electives", false, "Self-elected remote study — correspondence secondary schooling, then university, institute, and open-platform coursework as each domain demanded."],
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
            ["Student", "Practitioner-led health training", false, "Uncredentialed by design — specialist courses under named practitioners, validated in practice rather than by accreditation."],
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

export const SKILLS: StatTableData = {
  title: "Skills",
  groups: [
    {
      domain: "Technical",
      label: "Demonstration (Performance)",
      rows: [
        {
          category: "Artifactual (structural design)",
          metrics: [
            ["Practitioner", "Applied taxonomist, designer, and strategist", false, "The composite of my structural design skill — mapping domains into taxonomies, architecting products and systems from them, and analyzing performance against them."],
            ["Classification", "Knowledge domain mapping, distillation, and standardization", true],
            ["Architecture", "Product, protocol, content, and systems design", true],
            ["Analysis", "Performance tracking, benchmarking, planning, and programming", true],
          ],
        },
        {
          category: "Digital (multi-modal publishing)",
          metrics: [
            ["Practitioner", "On-demand educational content creator", false, "The composite of my publishing skill — designing, producing, editing, and shipping educational content across media."],
            ["Production", "Content design, delivery, editing, and publishing", true],
          ],
        },
        {
          category: "Spatial (functional design)",
          metrics: [
            ["Practitioner", "Behavior-led spatial designer", false, "The composite of my spatial skill — laying out homes and service facilities so the environment itself steers behavior."],
            ["Planning", "Interior (home) and industrial (services) layout design and user-flow optimization", true],
          ],
        },
      ],
    },
    {
      domain: "Interpersonal",
      label: "Testimony (Reputation)",
      rows: [
        {
          category: "Pedagogical (live transmission)",
          metrics: [
            ["Practitioner", "Situational teacher, instructor, facilitator, and trainer", false, "The composite of my live transmission skill — teaching theory and instructing practice, one-on-one to many, and raising students into teachers and instructors."],
            ["Teaching", "Theoretical knowledge transmission and assessment in 1-on-1/many (virtual and in-person) settings to students/clients", true],
            ["Instruction", "Practical knowledge transmission and assessment in 1-on-1/many (virtual and in-person) settings to students/clients", true],
            ["Facilitation", "Teaching students/clients to become teachers", true],
            ["Training", "Instructing students/clients to become instructors", true],
          ],
        },
        {
          category: "Editorial (educational profiling)",
          metrics: [
            ["Practitioner", "Expert profiler and method producer", false, "The composite of my profiling skill — sitting with living experts, or reading printed bodies of knowledge, to surface the knowledge unique to them and produce it into methods they can teach."],
            ["Elicitation", "Identifying the primary algorithm unique to a living expert or printed body of knowledge, and codifying it into a program others can follow and teach", true],
          ],
        },
        {
          category: "Organizational (project orchestration)",
          metrics: [
            ["Practitioner", "Project-based events director", false, "The composite of my orchestration skill — planning, staffing, and running large-scale productions, experiments, and interventions from brief to report."],
            ["Management", "Planning, recruiting, coordinating, and reporting on large-scale education productions, research experiments, and lifestyle interventions", true],
          ],
        },
      ],
    },
  ],
};

export const WORKS: StatTableData = {
  title: "Works",
  groups: [
    {
      domain: "Personal",
      label: "Creative Works",
      rows: [
        {
          category: "Methodologies (design principles)",
          metrics: [
            ["", "I am the creator of two design methodologies, my secret sauce", false],
            ["Taxonomy", "A universal information integration design (IID) process for efficient knowledge classification, retrieval, and referencing", true],
            ["RBG", "A universal (marketing, product, and learning) design framework that transforms prospects into educated, self-sufficient users of any value proposition", true],
          ],
        },
        {
          category: "Designs (published artifacts)",
          metrics: [
            ["", "I am the creator of the below published programs, systems, and models", false],
            [
              "10X",
              [
                "A short, low-frequency muscle-centric total fitness exercise protocol, available as a free ",
                <WikiLink key="yt" href="https://youtube.com/playlist?list=PLkxFhm6Fhw9qCpUj7zoLbLQ4OvAQzRAYQ">YouTube course</WikiLink>,
                ", ",
                <WikiLink key="quest" href="https://www.mindvalley.com/10x/quest">Mindvalley quest</WikiLink>,
                ", and ",
                <WikiLink key="cert" href="https://www.mindvalley.com/certs/10x">coaching certification</WikiLink>,
              ],
              true,
            ],
            [
              "BodyFirst",
              [
                "A universal basic-fitness program taught using my RBG framework, available as a ",
                <WikiLink key="mv" href="https://www.mindvalley.com/body-first">Mindvalley quest</WikiLink>,
              ],
              true,
            ],
            [
              "ValuesFactor",
              [
                "The Values Factor program ",
                <WikiLink key="test" href="https://youtube.com/shorts/li3cYZKc9zw">co-authored</WikiLink>,
                " with Dr. John Demartini using my RBG framework, available on ",
                <WikiLink key="mv" href="https://www.mindvalley.com/values">Mindvalley</WikiLink>,
              ],
              true,
            ],
            [
              "MSP",
              [
                "A universal exercise-mastery (mobility, stability, and power) system taught using my IID design process, available as ",
                <WikiLink key="yt" href="https://www.youtube.com/@LorenzoDelano">YouTube courses</WikiLink>,
                " and ",
                <WikiLink key="pdf" href="https://drive.google.com/file/d/1DlHZfG5Nv2TS2Y4dMQwufA_5hnMGFqGC/view">PDFs</WikiLink>,
              ],
              true,
            ],
            [
              "Profiler",
              [
                "A universal personal-profiling framework built using IID principles, available as a website (",
                <WikiLink key="site" href="/">like this one</WikiLink>,
                ") or PDF",
              ],
              true,
            ],
          ],
        },
      ],
    },
    {
      domain: "Professional",
      label: "Work Roles",
      rows: [
        {
          category: "First jobs (part-time employee)",
          metrics: [
            ["", "I earned my independence young through retail, sales, and coaching work", false],
            ["Magician vendor", "The Magic Store, Pretoria, 6 months, 2003 (age 15)", true],
            ["Sales assistant", "Sidewalk Surfer, Pretoria, 6 months, 2003 (age 15)", true],
            ["Store operator", "DVD World, Pretoria, 6 months, 2005 (age 17)", true],
            ["Sales associate", "Adidas Outlet Store, Pretoria, 1 year, 2006 (age 18)", true],
            ["Athletics coach", "Brooklyn primary, Pretoria, 1 year, 2007 (age 19)", true],
          ],
        },
        {
          category: "Employment (full-time employee)",
          metrics: [
            ["", "I master any role, then outgrow it and move up or out", false],
            [
              "English tutor",
              [
                <WikiLink key="sjz" href="https://www.sjzfls.com/">St. John&rsquo;s FLS</WikiLink>,
                ", Shijiazhuang, China, 6 months, 2004 (age 16)",
              ],
              true,
            ],
            ["Cafe manager", "Java Cafe, Pretoria, 2 years, 2007–2008 (age 19)", true],
            [
              "Personal trainer",
              [
                <WikiLink key="bx" href="https://www.ballistixfitness.co.za/">Ballistix CrossFit</WikiLink>,
                ", Pretoria, 2 years, 2009–2010 (age 21)",
              ],
              true,
            ],
            [
              "Product specialist",
              [
                <WikiLink key="mv" href="https://www.mindvalley.com/">Mindvalley</WikiLink>,
                ", Kuala Lumpur, 1 year, 2016–2017 (age 28)",
              ],
              true,
            ],
          ],
        },
        {
          category: "Partnerships (full-time co-operator)",
          metrics: [
            ["", "I build ventures alongside partners I trust, sharing the ownership", false],
            ["Gym studio", "Quantum Physiques (w/ Brad Openshaw), Pretoria, 3 years, 2011–2013 (age 23)", true],
            ["Events company", "The Physical Breakthrough Retreat (w/ Jelena Lakic), South Africa (nationwide), 1 year, 2014 (age 26)", true],
            ["Coaching company", "10X Fitness (w/ Vishen Lakhiani), global, 5 years, 2020–2025 (age 32)", true],
          ],
        },
        {
          category: "Sole ventures (full-time operator)",
          metrics: [
            ["", "I build and run my own agencies single-handedly, owning every part", false],
            [
              "Marketing agency",
              [
                <WikiLink key="art" href="https://artrepreneurs.co.za/">ARTrepreneurs</WikiLink>,
                ", Pretoria, 2 years, 2015–2016 (age 27)",
              ],
              true,
            ],
            [
              "Design agency",
              [
                <WikiLink key="bd" href="https://eudaemonia-inc-zaqrpx.mailerpage.io/">Benchmark Designs</WikiLink>,
                ", US (mostly), 7 years, 2018–2024 (age 30)",
              ],
              true,
            ],
          ],
        },
        {
          category: "Self-employment (project-based contractor)",
          metrics: [
            ["", "I contract independently under my own name, on projects I choose", false],
            [
              "Lifestyle interventions",
              [
                <WikiLink key="ld" href="/">Lorenzo Delano</WikiLink>,
                ", global (mostly US), 6 years, 2019– (age 31)",
              ],
              true,
            ],
            [
              "Design consulting",
              [
                <WikiLink key="ld" href="/">Lorenzo Delano</WikiLink>,
                ", global (mostly US), 2 years, 2024– (age 36)",
              ],
              true,
            ],
          ],
        },
      ],
    },
  ],
};

export const KNOWLEDGE_REFERENCES: Reference[] = [
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
