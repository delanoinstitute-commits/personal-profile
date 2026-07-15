import Tooltip from "@/components/Tooltip";
import WikiLink from "@/components/WikiLink";
import type { StatTableData } from "@/components/StatTable";
import type { Reference } from "@/components/References";

// Knowledge page data — consumed by /knowledge.
// See KNOWLEDGE_SPEC.md: Education (theory — knowing), Skills (practice —
// doing), Works (production — making), each split by the individual/social
// locus axis. Each cluster opens with an unlabelled composite lead (the
// italic summary line) over its component entries. "—" = to be cataloged.

export const EDUCATION: StatTableData = {
  title: "Education",
  groups: [
    {
      domain: "Guided education",
      label: "",
      rows: [
        {
          category: "Formal (in-person schooling)",
          metrics: [
            ["", "I took seven grades of schooling, then mastered Mandarin to international distinction", false],
            ["Muldersdrif Primary", "Grades 1–3, Muldersdrift, 3 years, 1994–1996 (age 6–8)", true],
            ["Hoeveld Primary", "Grades 4–7, Evander, 4 years, 1997–2000 (age 9–12)", true],
            [
              "Pretoria Chinese High",
              [
                <Tooltip
                  key="cert"
                  media={{
                    src: "/credentials/mandarin.jpg",
                    alt: "Pretoria Chinese School certificate of participation in adult Mandarin classes, 2005",
                    portrait: true,
                  }}
                  content="Adult Mandarin classes, Pretoria Chinese School (Feb–Aug 2005). Certified as Lorenzo Maritz, his name before 2009."
                >
                  Mandarin classes
                </Tooltip>,
                ", 4 years, 2005–2008 (age 17–20)",
              ],
              true,
            ],
            [
              "UWC",
              [
                <Tooltip
                  key="cert"
                  media={{
                    src: "/credentials/chinese-bridge.jpg",
                    alt: "8th Chinese Bridge award certificate from Hanban, 2009",
                  }}
                  content="1st in the South African round; then, among 130+ countries at the Beijing finals, awarded the Prize of Outstanding — 8th Chinese Bridge, Hanban (2009)."
                >
                  Outstanding prize
                </Tooltip>,
                ", ",
                <em key="n">8th Chinese Bridge</em>,
                " winner, 1 year, Bellville, 2009 (age 21)",
              ],
              true,
              "University of the Western Cape",
            ],
          ],
        },
        {
          category: "Non-formal (in-person training)",
          metrics: [
            ["", "I certify only in transmission roles — tutor, instructor, coach, and learning designer", false],
            [
              "Language Link",
              [
                <Tooltip
                  key="cert"
                  media={{
                    src: "/credentials/tefl.jpg",
                    alt: "Preliminary Certificate in Teaching English as a Foreign Language, Southern African TEFL Training Institute, 2006",
                    portrait: true,
                  }}
                  content="Preliminary Certificate in Teaching English as a Foreign Language — Southern African TEFL Training Institute, Pretoria (June 2006)."
                >
                  TEFL English tutor
                </Tooltip>,
                ", 6 weeks, Pretoria, 2006 (age 18)",
              ],
              true,
            ],
            [
              "ETA College",
              [
                <Tooltip
                  key="cert"
                  media={{
                    src: "/credentials/fitness.jpg",
                    alt: "National Certificate in Fitness, Level 5, Exercise Teachers Academy, 2008",
                  }}
                  content="National Certificate: Fitness (Level 5) — Personal Fitness Trainer and Spinning, Exercise Teachers Academy, Pretoria (2008)."
                >
                  Personal fitness trainer
                </Tooltip>,
                ", 1 year, Pretoria, 2008 (age 20)",
              ],
              true,
            ],
            ["Evolved Coaching", "NLP and life coach, 2 weeks, Pretoria, 2010 (age 22)", true],
            [
              "Shapers",
              [
                <Tooltip
                  key="cert"
                  media={{
                    src: "/credentials/lx-design.jpg",
                    alt: "Shapers certificate of participation for the learning experience design masterclass, photographed at the training, 2018",
                    portrait: true,
                  }}
                  content="Certificate of participation — learning-experience-design masterclass, Shapers, Netherlands (March 2018). Photographed at the two-day training; shapers.nl."
                >
                  Learning experience designer
                </Tooltip>,
                ", 2 days, Netherlands, 2018 (age 30)",
              ],
              true,
            ],
          ],
        },
      ],
    },
    {
      domain: "Independent learning",
      label: "",
      rows: [
        {
          category: "Non-formal (remote schooling)",
          metrics: [
            ["", "I finished school by correspondence, then enroll only when a domain demands it", false],
            ["INTEC College", "Grades 8–10, 2 years, correspondence, 2001–2002 (age 13–14)", true, "Distance secondary schooling — the last formal enrollment."],
            [
              "UoA",
              [
                <Tooltip
                  key="cert"
                  media={{
                    src: "/credentials/philosophy.jpg",
                    alt: "Certificate of Achievement in Logical and Critical Thinking, University of Auckland, 2018",
                    portrait: true,
                  }}
                  content="Certificate of Achievement — Logical and Critical Thinking, University of Auckland (FutureLearn, 2018)."
                >
                  Critical thinking
                </Tooltip>,
                ", 8 weeks, online, 2018 (age 30)",
              ],
              true,
              "University of Auckland",
            ],
            [
              "UoC",
              [
                <Tooltip
                  key="cert"
                  media={{
                    src: "/credentials/exercise.jpg",
                    alt: "Course Certificate in Science of Exercise, University of Colorado Boulder, 2019",
                  }}
                  content="Course Certificate — Science of Exercise, University of Colorado Boulder (Coursera, 2019)."
                >
                  Science of exercise
                </Tooltip>,
                ", 4 weeks, online, 2019 (age 31)",
              ],
              true,
              "University of Colorado Boulder",
            ],
            ["CFI", "Corporate finance training, 1 year, online, 2024 (age 36)", true, "Corporate Finance Institute"],
            ["Khan Academy", "AP/College sciences, ongoing, since 2022 (age 34)", true],
          ],
        },
        {
          category: "Informal (remote training)",
          metrics: [
            ["", "I train under named practitioners, validated in practice rather than on paper", false],
            [
              "Metabolic Fitness",
              [
                <Tooltip
                  key="cert"
                  media={{
                    src: "/credentials/nutrition.jpg",
                    alt: "Certificate of Training in Nutritional Biochemistry, Metabolic Fitness, 2021",
                  }}
                  content="Certificate of Training — 25 hours in Nutritional Biochemistry, Metabolic Fitness (Dr Bryan Walsh, 2021)."
                >
                  Nutrition biochemistry
                </Tooltip>,
                " (Dr. Bryan Walsh), 25 hours, online, 2021 (age 33)",
              ],
              true,
            ],
            [
              "ODX Academy",
              [
                <Tooltip
                  key="cert"
                  media={{
                    src: "/credentials/blood-chemistry.jpg",
                    alt: "Certification of Excellence in Functional Blood Chemistry Analysis Mastery, ODX Academy, 2021",
                  }}
                  content="Certification of Excellence — Functional Blood Chemistry Analysis Mastery (FBCA), ODX Academy (2021)."
                >
                  Blood chemistry analysis
                </Tooltip>,
                " (Dr. Dicken Weatherby), 16 weeks, online, 2021 (age 33)",
              ],
              true,
            ],
            ["Early Medical", "Longevity medicine (Dr. Peter Attia), 1 year, online, 2023 (age 35)", true],
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
      domain: "Technical skills",
      label: "",
      rows: [
        {
          category: "Structural (knowledge and system design)",
          metrics: [
            ["", "I organize, design, and strategize transformative outcomes", false],
            ["Classification", "Knowledge domain mapping, distillation, and standardization", true],
            ["Architecture", "Product, protocol, content, systems, and software design", true],
            ["Analysis", "Performance tracking, benchmarking, planning, programming, and reporting", true],
          ],
        },
        {
          category: "Material (content and spatial design)",
          metrics: [
            ["", "I produce educational content and design spaces that steer behavior", false],
            ["Production", "Content design, delivery, editing, and publishing", true],
            ["Planning", "Interior (home) and industrial (services) layout design and user-flow optimization", true],
          ],
        },
      ],
    },
    {
      domain: "Interpersonal skills",
      label: "",
      rows: [
        {
          category: "Pedagogical (teaching and training)",
          metrics: [
            ["", "I teach any subject, in any setting, and train others to do the same", false],
            ["Teaching", "Transmitting and assessing theoretical (presentations) and practical (instructions) knowledge, 1-on-1/duo (coaching) or 1-on-many (facilitation), virtual or in-person", true],
            ["Training", "Teaching students to become presenters, instructors, coaches, or facilitators", true],
          ],
        },
        {
          category: "Directorial (profiling and orchestration)",
          metrics: [
            ["", "I turn experts into methods and briefs into productions", false],
            ["Elicitation", "Identifying the primary algorithm unique to a living expert or printed body of knowledge, and codifying it into a program others can follow and teach", true],
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
      domain: "Personal works",
      label: "",
      rows: [
        {
          category: "Methodologies (design principles)",
          metrics: [
            ["", "I am the creator of two design methodologies, the philosophy behind all my designs", false],
            ["Taxonomical", "A universal information integration design (IID) process for efficient knowledge classification, retrieval, and referencing", true],
            ["Educational", "A universal product (instructional) design framework that sequences the fewest behavioral changes a prospect (student) must make to become a lifelong, self-sufficient user (practitioner) of any product (skill)", true],
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
                "A universal basic-fitness program co-authored with ",
                <WikiLink key="jelena" href="https://jelenalakic.com/">Jelena Lakic</WikiLink>,
                " using my educational design framework, available as a ",
                <WikiLink key="mv" href="https://www.mindvalley.com/body-first">Mindvalley quest</WikiLink>,
              ],
              true,
            ],
            [
              "ValuesFactor",
              [
                "The Values Factor program ",
                <WikiLink key="test" href="https://youtube.com/shorts/li3cYZKc9zw">co-authored</WikiLink>,
                " with Dr. John Demartini using my educational design framework, available on ",
                <WikiLink key="mv" href="https://www.mindvalley.com/values">Mindvalley</WikiLink>,
              ],
              true,
            ],
            [
              "MSP",
              [
                "A universal exercise-mastery system taught using my IID methodology, available as free YouTube (",
                <WikiLink key="map" href="https://youtube.com/playlist?list=PLkxFhm6Fhw9rBcU7Fwl6-eizseHRR50lI">map</WikiLink>,
                ", ",
                <WikiLink key="routines" href="https://youtube.com/playlist?list=PLkxFhm6Fhw9oejXvkzADRTChNUd1LB0lZ">routines</WikiLink>,
                ", ",
                <WikiLink key="space" href="https://youtube.com/playlist?list=PLkxFhm6Fhw9oypG0tLrOTNtnPtsGMUG2w">space</WikiLink>,
                ", and ",
                <WikiLink key="design" href="https://youtube.com/playlist?list=PLkxFhm6Fhw9pveFENc_sdY9wRT8JAjDlk">design</WikiLink>,
                ") courses and ",
                <WikiLink key="tax" href="https://drive.google.com/file/d/1DlHZfG5Nv2TS2Y4dMQwufA_5hnMGFqGC/view">taxonomies</WikiLink>,
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
      domain: "Professional experience",
      label: "",
      rows: [
        {
          category: "First jobs (part-time employee)",
          metrics: [
            ["", "I earned my independence young through retail, sales, and coaching work", false],
            ["Magician vendor", [<em key="n">The Magic Store</em>, ", Pretoria, 6 months, 2003 (age 15)"], true, "My first job, at 15: performing and selling magic tricks at a kiosk in Menlyn Park Mall. I left when my brother got me a steadier retail job at Sidewalk Surfer."],
            ["Sales assistant", [<em key="n">Sidewalk Surfer</em>, ", Pretoria, 1 year, 2003 (age 15)"], true, "Floor sales, front-desk service, and stock control at a skate shop in Menlyn under area manager Peter — a natural fit, since I skated myself. The wage paid my kung-fu tuition. I left to teach English in China."],
            ["Store operator", [<em key="n">DVD World</em>, ", Pretoria, 6 months, 2005 (age 17)"], true, "I ran the store single-handedly at 17 — rentals, returns, stock, and till, open to close. I left when I relocated, and moved on to waitering at Java Cafe."],
            ["Sales associate", [<em key="n">Adidas Outlet Store</em>, ", Pretoria, 1 year, 2006 (age 18)"], true, "Floor sales, customer service, and stock control of sportswear at Atterbury Value Mart under store manager Keith. I left for my second teaching stint in China."],
            ["Athletics coach", [<em key="n">Brooklyn Primary School</em>, ", Pretoria, 1 year, 2007 (age 19)"], true, "Coached track athletics at the school while sprinting competitively myself, training under a TUKS coach for the 200 m event. I stopped when studies, work, and my own training filled the calendar."],
          ],
        },
        {
          category: "Employment (full-time employee)",
          metrics: [
            ["", "I master any role, then outgrow it and move up or out", false],
            [
              "English tutor",
              [
                <em key="n"><WikiLink href="https://www.sjzfls.com/">St. John&rsquo;s FLS</WikiLink></em>,
                ", Shijiazhuang, China, 6 months, 2004 (age 16)",
              ],
              true,
              "Taught English from kindergarten to adult level — lesson planning, assignments, workshops, and evaluations — under manager Hilton, living alone in China at 16.",
            ],
            ["Cafe manager", [<em key="n">Java Cafe</em>, ", Pretoria, 2 years, 2007–2008 (age 19–20)"], true, "Started as a waiter and was promoted to manager by owner Memos — hiring, training, and running the floor, stock takes, and promotions (I gave my best friend Brad his first job there). I left to go full-time into fitness after earning my ETA certification."],
            [
              "Personal trainer",
              [
                <em key="n"><WikiLink href="https://www.ballistixfitness.co.za/">Ballistix CrossFit</WikiLink></em>,
                ", Pretoria, 2 years, 2009–2010 (age 21–22)",
              ],
              true,
              "Recruited personally by owner Neil Scholtz off the Virgin Active floor to coach at his new CrossFit box — programming, 1-on-1 and group instruction, and nutrition workshops.",
            ],
            [
              "Product specialist",
              [
                <em key="n"><WikiLink href="https://www.mindvalley.com/">Mindvalley</WikiLink></em>,
                ", Kuala Lumpur, 1 year, 2016–2017 (age 28–29)",
              ],
              true,
              "Hired off a video cover letter as a marketing specialist — campaigns and funnels, plus internal financial workshops I ran for colleagues. Promoted out of the org chart to a contractor role, working directly with the CEO, Vishen Lakhiani.",
            ],
          ],
        },
        {
          category: "Partnerships (full-time co-operator)",
          metrics: [
            ["", "I build ventures alongside partners I trust, and move on when (outgrown) visions diverge", false],
            [
              "Gym studio",
              [
                <em key="n">Quantum Physiques</em>,
                " (w/ ",
                <WikiLink key="brad" href="https://movefreely.co.za/">Brad Openshaw</WikiLink>,
                "), Pretoria, 3 years, 2011–2013 (age 23–25)",
              ],
              true,
              "A pop-up CrossFit-style gym Brad and I ran from a wrestling hall — 5 a.m. classes, ~50 clients, a rebrand to Wi-move. I bought Brad out, then sold it back to him when my interests shifted to education; it lives on as Move Freely.",
            ],
            [
              "Events company",
              [
                <em key="n">The PB Retreat</em>,
                " (w/ ",
                <WikiLink key="jelena" href="https://jelenalakic.com/">Jelena Lakic</WikiLink>,
                "), SA (nationwide), 1 year, 2014 (age 26)",
              ],
              true,
              "A fitness-education retreat company built on Primal Blueprint principles — we ran our first and only retreat in February 2014. Demand never materialized, and the failure pushed me into a serious marketing student role — which became ARTrepreneurs.",
            ],
            [
              "Coaching company",
              [
                <em key="n">10X Fitness</em>,
                " (w/ ",
                <WikiLink key="vishen" href="https://en.wikipedia.org/wiki/Vishen_Lakhiani">Vishen Lakhiani</WikiLink>,
                "), US, 5 years, 2020–2025 (age 32–37)",
              ],
              true,
              "Co-founded with Vishen Lakhiani (25% stake): he brought the clients and platforms, I ran everything else — experiments, workshops, and coaching. The 10X Quest has 90,000+ graduates. I sold my stake in 2025 over diverging visions.",
            ],
          ],
        },
        {
          category: "Self-employment (independent operator)",
          metrics: [
            ["", "I help build brands and take contracts where demand runs high, and move on when it runs out", false],
            [
              "Marketing agency",
              [
                <em key="n"><WikiLink href="https://artrepreneurs.co.za/">ARTrepreneurs</WikiLink></em>,
                ", Pretoria, 2 years, 2015–2016 (age 27–28)",
              ],
              true,
              "A digital agency with two contractors — funnels, SEO, sites, and video — carried by one anchor client. When demand plateaued I wound it down, flew to the US to test bigger markets, and took the Mindvalley job.",
            ],
            [
              "Design consulting",
              [
                <em key="n"><WikiLink href="https://eudaemonia-inc-zaqrpx.mailerpage.io/">Eudaemonia Inc</WikiLink></em>,
                ", worldwide (mostly US), since 2018 (age 30)",
              ],
              true,
              "Education (product) design, directing, and production for best-selling authors and educators; plus functional space design for wellness centers. Ongoing — I choose the projects where my taxonomical and educational design methodologies bite hardest.",
            ],
            [
              "Health interventions",
              [
                <em key="n">Eudaemonia Inc</em>,
                ", worldwide (mostly US), since 2019 (age 31)",
              ],
              true,
              {
                text: [
                  "Health interventions under my own name, in two forms: 1) corporate employee ",
                  <WikiLink key="appr" href="https://youtu.be/BYUzGC72SnQ">apprenticeships</WikiLink>,
                  " (training corporate teams to train themselves) and 2) private live-in interventions (lifestyle redesign for celebrities and entrepreneurs). Ongoing — I take the interventions I find interesting.",
                ],
              },
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
