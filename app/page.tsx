import PageHeading from "@/components/PageHeading";
import { NestedTable } from "@/components/NestedTable";
import type { StatTableData } from "@/components/StatTable";
import WikiLink from "@/components/WikiLink";

// The About page — the site's preamble and integration, written last. Three
// branches per the site standard: Lorenzo (Introduction — the person in
// brief), Website (Guide — why the site exists and how to use it), Contact
// (Offers — every way to use the work or hire the maker). Two bands per
// branch. First person throughout: this is the personal layer, and the page
// is the one place the whole site speaks directly to the visitor. Every claim
// here compresses a page that proves it — links point inward, not sideways.

const LORENZO: StatTableData = {
  title: "Lorenzo",
  groups: [
    {
      domain: "About Me",
      label: "",
      rows: [
        {
          category: "Profile (what I’m about)",
          metrics: [
            ["", "I have one specialization, one mission, and a set of principles, all tested on myself first", false],
            [
              "Specialization",
              "I am an applied taxonomist of personal transformation",
              true,
              "Taxonomy, from the Greek: taxis (arrangement) and nomos (law) — the laws of arrangement. The trade: design the representative model of a domain as it is and as it could be, then close the gap.",
            ],
            ["Taxonomist", "A specialist in classifying phenomena according to their functions and natural relationships for the purpose of understanding, navigating, and transforming them", true, undefined, undefined, true],
            ["Applied", "Testing and revising those classifications against reality", true, undefined, undefined, true],
            [
              "Transformation",
              [
                "The behavioral (cognitive, physiological, psychosocial, and environmental) changes associated with capital (",
                <WikiLink key="h" href="/health">physical</WikiLink>,
                ", ",
                <WikiLink key="k" href="/knowledge">intellectual</WikiLink>,
                ", ",
                <WikiLink key="w" href="/wealth">financial</WikiLink>,
                ", and ",
                <WikiLink key="n" href="/network">social</WikiLink>,
                ") progress",
              ],
              true,
              undefined,
              undefined,
              true,
            ],
            [
              "Mission",
              "I help expand consciousness for all, starting with myself",
              true,
            ],
            ["Personal", "I solve my own problems first, then publish the solutions free for anyone", true, undefined, undefined, true],
            ["Social", "I then help individuals apply the same solutions to their lives, partners, or families", true, undefined, undefined, true],
            ["Organizational", "And then help companies productize the same solutions for their users", true, undefined, undefined, true],
            [
              "Principles",
              "I run my life on three principles, distilled from everything that’s worked",
              true,
            ],
            ["Attention", "The quality of your life is based on the quality of your attention", true, "“How you do anything is how you do everything” — win the moment and you win the past (nothing to regret) and the future (nothing to fear).", undefined, true],
            ["Essentialism", "Progress depends on knowledge of the necessary and sufficient", true, undefined, undefined, true],
            ["Configuration", "It’s not about the quantity of resources, but the quality of their configuration", true, undefined, undefined, true],
          ],
        },
        {
          category: "Background (what I’ve done)",
          metrics: [
            ["", "I solved these problems for myself first and continue to help others do the same", false],
            ["Meta-learning", "I left school at 13 and taught myself ever since; learning to learn became my trade, and applied taxonomy its highest form (including but not limited to the skills below)", true],
            [
              "Time",
              [
                "Early autonomy made every hour mine to allocate; I’ve designed my days ever since (see the ",
                <WikiLink key="lf" href="/lifestyle">Lifestyle</WikiLink>,
                " page or take my ",
                <WikiLink key="lfd" href="https://www.youtube.com/playlist?list=PLkxFhm6Fhw9q6XAQg-BMKvFWNqs_AmXWh">lifestyle design</WikiLink>,
                " course to learn more)",
              ],
              true,
            ],
            [
              "Space",
              [
                "I’ve moved more than thirty times, so I can rebuild an optimal environment anywhere (see my latest ",
                <WikiLink key="std" href="https://youtube.com/shorts/miniCkaRHTQ">studio design</WikiLink>,
                " or take my free ",
                <WikiLink key="gym" href="https://www.youtube.com/playlist?list=PLkxFhm6Fhw9oypG0tLrOTNtnPtsGMUG2w">home-gym design</WikiLink>,
                " course)",
              ],
              true,
            ],
            [
              "Exercise",
              [
                "I started exercising at 16 and never stopped, spending multiple years on various disciplines, from martial arts to sprinting to CrossFit to the ",
                <WikiLink key="tx" href="https://www.youtube.com/playlist?list=PLkxFhm6Fhw9qCpUj7zoLbLQ4OvAQzRAYQ">10X method</WikiLink>,
                " and today’s ",
                <WikiLink key="msp" href="https://www.youtube.com/playlist?list=PLkxFhm6Fhw9pveFENc_sdY9wRT8JAjDlk">MSP system</WikiLink>,
                " (review my ",
                <WikiLink key="fit" href="/health#capacity">fitness results</WikiLink>,
                ")",
              ],
              true,
            ],
            [
              "Nutrition",
              [
                "I’ve experimented with diets since 20 (paleo, primal, vegetarian, fasting) and settled into a calorically informed, whole-food pattern that keeps me lean, muscular, and metabolically flexible year-round (review my ",
                <WikiLink key="bc" href="/health#integrity">body composition results</WikiLink>,
                ")",
              ],
              true,
            ],
            [
              "Mind",
              [
                "I’ve worked on my inner game since 22 (waking, growing, cleaning, and showing up); today my psyche is profiled, measured, and published (review my ",
                <WikiLink key="nt" href="/nature">Nature</WikiLink>,
                " results)",
              ],
              true,
            ],
            [
              "Finance",
              [
                "I’ve worked since 15 and managed my own money from the start, seriously from 30; the structures now in place make financial freedom a matter of time (see my ",
                <WikiLink key="w" href="/wealth">Wealth</WikiLink>,
                " map)",
              ],
              true,
            ],
            [
              "Production",
              [
                "I’ve made films since childhood (kung-fu-inspired at first); now I design, produce, and ship digital products end to end (review my ",
                <WikiLink key="dsn" href="/knowledge#works">designs</WikiLink>,
                ")",
              ],
              true,
            ],
            [
              "Training",
              [
                "I’ve been teaching since 17 (English in China, finance in Malaysia, fitness all over the world); I continue to coach, teach, and train others in various disciplines (see ",
                <WikiLink key="ex" href="/knowledge#references">examples</WikiLink>,
                " here)",
              ],
              true,
            ],
            [
              "Technology",
              [
                "I master each generation of tools, from gym equipment to studio gear to AI (this ",
                <WikiLink key="ws" href="/">website</WikiLink>,
                ", authored by me and coded and edited by Claude, is no exception)",
              ],
              true,
            ],
          ],
        },
      ],
    },
    {
      domain: "My Status",
      label: "",
      rows: [
        {
          category: "Work (my current preoccupation)",
          metrics: [
            ["", "Two problems hold my attention; you’re welcome to join either", false],
            [
              "Market",
              [
                "I’m choosing my next long-term work chapter in the US, employment to equity: the one ",
                <WikiLink key="pt" href="#contact">commitment</WikiLink>,
                " where my leverage creates the largest impact",
              ],
              true,
            ],
            [
              "Education",
              "I envision creating the world’s first lifelong, self-directed education curriculum, built and consumed according to a taxonomy of the self; this site is my first prototype of the structure",
              true,
              "Subjects studied according to one’s own constitution and capital: math for wealth, philosophy and psychology for nature, history from your own life outward to your country and the universe, biology for your inheritance and health. Knowledge made personal is more meaningful and more memorable, and converts into self-efficacy rather than mere acquisition.",
            ],
          ],
        },
        {
          category: "Life (my current conditions)",
          metrics: [
            ["", "Where I live, how the days run, and what I’m like off duty", false],
            [
              "Location",
              [
                "I recently moved to Austin, Texas, the top recommended city based on my environmental scorecard (see ",
                <WikiLink key="sp" href="/lifestyle#space">Space</WikiLink>,
                ")",
              ],
              true,
            ],
            [
              "Activities",
              [
                "Barring maintenance activities, I do only three things: I work, exercise, and study, and have for most of my life (see ",
                <WikiLink key="sch" href="/lifestyle#time">schedule</WikiLink>,
                ")",
              ],
              true,
            ],
            [
              "Quirks",
              [
                "I keep no social media, except ",
                <WikiLink key="li" href="https://www.linkedin.com/in/lorenzo-delano-7b6143364/">LinkedIn</WikiLink>,
                " and ",
                <WikiLink key="yt" href="https://youtube.com/@LorenzoDelano">YouTube</WikiLink>,
                "; I like my coffee the way I enjoy my Trance, progressive; I sleep alone, in and out of relationships; I start reciting the periodic table of elements when I get bored; my all-time favorite movie, album, and game: Mortal Kombat; I have an annoying habit of ",
                <WikiLink key="rk" href="/story#development">rocking</WikiLink>,
                " while I work (it’s how I think)",
              ],
              true,
            ],
          ],
        },
      ],
    },
  ],
};

const WEBSITE: StatTableData = {
  title: "Website",
  groups: [
    {
      domain: "Site Purpose",
      label: "",
      rows: [
        {
          category: "Function (what it does)",
          metrics: [
            ["", "I built one site to do two jobs: my personal record and my public storefront", false],
            ["Personal", "I keep this site as the digital blueprint of my entire life", true],
            ["Website", "It’s a wiki of interlinked pages; navigate the map that is me", true, undefined, undefined, true],
            ["Database", "It’s the single source of truth on my life, formatted for AI", true, undefined, undefined, true],
            [
              "Journal",
              [
                "I keep the public record (",
                <WikiLink key="hs" href="/story">history</WikiLink>,
                ", ",
                <WikiLink key="ls" href="/lifestyle">lifestyle</WikiLink>,
                ", and capital status) current as life unfolds",
              ],
              true,
              undefined,
              undefined,
              true,
            ],
            ["Commercial", "It’s also my primary point of contact for collaborations", true],
            [
              "Resume",
              [
                "The infobox, this page, and ",
                <WikiLink key="kn" href="/knowledge">Knowledge</WikiLink>,
                " together carry my career record",
              ],
              true,
              undefined,
              undefined,
              true,
            ],
            [
              "Portfolio",
              [
                "My works with references live on ",
                <WikiLink key="kn2" href="/knowledge">Knowledge</WikiLink>,
                ", this website included",
              ],
              true,
              undefined,
              undefined,
              true,
            ],
            ["Curriculum", "The taxonomy of what it means to fulfill one’s potential (constitution and capital) doubles as a complete self-education curriculum", true, undefined, undefined, true],
          ],
        },
        {
          category: "Structure (how it’s built)",
          metrics: [
            ["", "I drew one map and laid it out across eight identical pages", false],
            ["Map", "I map what makes a person, demonstrated on me", true],
            [
              "Constitution",
              [
                "Every individual has a ",
                <WikiLink key="st" href="/story">story</WikiLink>,
                ", a ",
                <WikiLink key="na" href="/nature">nature</WikiLink>,
                ", and a ",
                <WikiLink key="li" href="/lifestyle">way of living</WikiLink>,
                " that builds or drains their capital",
              ],
              true,
              undefined,
              undefined,
              true,
            ],
            [
              "Capital",
              [
                "Every individual holds four kinds: physical (",
                <WikiLink key="he" href="/health">health</WikiLink>,
                "), intellectual (",
                <WikiLink key="kn3" href="/knowledge">knowledge</WikiLink>,
                "), financial (",
                <WikiLink key="we" href="/wealth">wealth</WikiLink>,
                "), and social (",
                <WikiLink key="ne" href="/network">network</WikiLink>,
                ")",
              ],
              true,
              undefined,
              undefined,
              true,
            ],
            ["Pages", "I keep all eight pages on one identical layout", true],
            ["Taxonomy", "Each page holds three branches of two bands each, in accordions for maximal compression", true, undefined, undefined, true],
            ["References", "Each page closes with the data, guidelines, and studies behind it", true, undefined, undefined, true],
          ],
        },
      ],
    },
    {
      domain: "Site Navigation",
      label: "",
      rows: [
        {
          category: "Visitor (journeys)",
          metrics: [
            ["", "I’ve laid four paths in, ordered by how much time you have", false],
            ["Search", "In a hurry? Paste this URL into your favorite LLM and ask it anything you’d like to know about me", true],
            [
              "Qualify",
              [
                "Considering me for a role? Read the infobox quick facts (identity, professional, and psychological), then the ",
                <WikiLink key="kn4" href="/knowledge">Knowledge</WikiLink>,
                " page",
              ],
              true,
            ],
            [
              "Learn",
              [
                "Curious about me? Read parts of ",
                <WikiLink key="st2" href="/story">Story</WikiLink>,
                ", ",
                <WikiLink key="na2" href="/nature">Nature</WikiLink>,
                ", and ",
                <WikiLink key="li2" href="/lifestyle">Lifestyle</WikiLink>,
                " until I feel familiar",
              ],
              true,
            ],
            [
              "Contact",
              [
                "Have an inquiry? Read my capital pages then contact me through the ",
                <WikiLink key="of" href="#contact">offers below</WikiLink>,
                "",
              ],
              true,
            ],
          ],
        },
      ],
    },
  ],
};

const CONTACT: StatTableData = {
  title: "Contact",
  groups: [
    {
      domain: "Published Works",
      label: "",
      rows: [
        {
          category: "Learners (viewers and readers)",
          metrics: [
            ["", "I’ve published everything below; use it free on your own, or join in with me inside", false],
            ["Content", "Public and free: master your time, exercise, and profile by yourself", true],
            ["10X", "Build muscle and stay fit in under an hour a week (free 26-video course)", true, undefined, "https://youtube.com/playlist?list=PLkxFhm6Fhw9qCpUj7zoLbLQ4OvAQzRAYQ", true],
            ["Lifestyle", "Design an organized life (free 14-video course)", true, undefined, undefined, true],
            ["Exercise", "Design balanced, integrated exercise programs for yourself and others (free 17-video course)", true, undefined, undefined, true],
            ["Profiling", "Build the taxonomy of your own life (the spec and worked example: this site)", true, undefined, undefined, true],
            ["Membership", "Private and paid: master your fitness and values alongside other members", true],
            ["BodyFirst", "Achieve and maintain universal basic fitness with Jelena Lakic and me (Mindvalley Quest)", true, undefined, "https://www.mindvalley.com/body-first", true],
            ["ValuesFactor", "Identify, own, and modify your highest values with Dr. John Demartini (Mindvalley Quest)", true, undefined, "https://www.mindvalley.com/values", true],
          ],
        },
        {
          category: "Counterparties (distributors and affiliates)",
          metrics: [
            ["", "My content on your platform, your stage, or your floor", false],
            ["Commercial", "Public: put my content in front of your clients or users", true],
            ["Content", "License any of my free courses for a more structured experience on your platform", true, undefined, undefined, true],
            ["Speaking", "Hire me to present any of my published works at your event", true, undefined, undefined, true],
            ["Corporate", "Private: train your employees on my content", true],
            ["Training", "Hire me to train your employees in time, exercise, and work performance mastery", true, undefined, undefined, true],
            ["Speaking (private)", "Hire me for a closed presentation to your team on any of my published works", true, undefined, undefined, true],
          ],
        },
      ],
    },
    {
      domain: "Hired Ventures",
      label: "",
      rows: [
        {
          category: "Patrons (clients and employers)",
          metrics: [
            ["", "I take one commitment at a time and serve it fully until the problem is solved", false],
            ["Individuals", "Private: hire me to transform yourself, your partner, or your family", true],
            ["Design", "I’ll design you a personalized lifestyle, exercise, nutrition, or self-study program to run on your own", true, undefined, undefined, true],
            ["Profiling", "I’ll build a taxonomy of your life as profile, portfolio, resume, or AI database (like this site)", true, undefined, undefined, true],
            ["Coaching", "I’ll run tiny lifestyle, exercise, nutrition, or self-study experiments with you until you’ve reached your goal", true, undefined, undefined, true],
            ["Interventions", "I’ll rearrange your environment and train you in person, for accelerated, guaranteed change", true, undefined, undefined, true],
            ["Companies", "Private: hire me as employee or contractor to transform your employees or customers", true],
            ["Design (product)", "I’ll design a transformative product, protocol, content, assessment, or software experience", true, undefined, undefined, true],
            ["Production", "I’ll produce transformative educational content end to end for your staff or users", true, undefined, undefined, true],
            ["Consulting", "I’ll clarify, analyze, and plan your next best product design move", true, undefined, undefined, true],
            ["Training", "I’ll help HR onboard your employees, or coach management toward end-user product fulfillment", true, undefined, undefined, true],
          ],
        },
        {
          category: "Owners (cofounders and investors)",
          metrics: [
            ["", "Bring the market or the capital; I’ll bring the build", false],
            ["Individuals", "Public: I partner with operators in need of a builder", true],
            ["Services", "I build, sell, and fulfill the product offer; you acquire the customers and manage the resources", true, undefined, undefined, true],
            ["Startups", "Private: give me equity and I’ll take your product to the next level", true],
            ["Product", "I allocate and manage product development for maximal impact; you manage the rest", true, undefined, undefined, true],
          ],
        },
      ],
    },
  ],
};

export default function AboutPage() {
  return (
    <>
      <PageHeading title="About" />

      <p className="lead">
        What makes a person? This site is my answer, demonstrated on the only subject I
        can fully access: myself. This page is the preamble — one branch introduces me,
        one explains the site, and one lays out every way to work with me. The other
        seven pages hold the record.
      </p>

      <h2 id="lorenzo">
        Lorenzo <span className="heading-paren">(Introduction)</span>
      </h2>
      <p>
        The person in brief: what I&rsquo;m about, what I&rsquo;ve done, and where life
        stands now. Every claim below compresses a page that proves it — follow the
        links inward when a line earns your doubt.
      </p>
      <NestedTable {...LORENZO} />

      <h2 id="website">
        Website <span className="heading-paren">(Guide)</span>
      </h2>
      <p>
        Why the site exists and how to use it fast. It runs on one conviction: it is too
        easy to hide behind aesthetics and social proof, and an interlinked, referenced
        record is harder to fake than a feed. Read it yourself or hand it to your AI —
        it was built for both.
      </p>
      <NestedTable {...WEBSITE} />

      <h2 id="contact">
        Contact <span className="heading-paren">(Offers)</span>
      </h2>
      <p>
        Every way to use my work or hire my hands, from free courses to equity
        partnerships. One rule governs all of it: <strong>one commitment at a
        time</strong>. If I take an employed or embedded role, I&rsquo;m fully committed
        and take nothing else on; while I&rsquo;m engaged, new work queues until the
        current problem is solved. If any offer below fits, write to{" "}
        <WikiLink href="mailto:lorenzo@lorenzodelano.com">
          lorenzo@lorenzodelano.com
        </WikiLink>
        .
      </p>
      <NestedTable {...CONTACT} />
    </>
  );
}
