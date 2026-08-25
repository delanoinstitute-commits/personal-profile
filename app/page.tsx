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
            ["", "I have one specialization, one mission, and one principle, all tested on myself first", false],
            [
              "Specialization",
              "I am an applied taxonomist of personal transformation",
              true,
              "Taxonomy, from the Greek: taxis (arrangement) and nomos (law) — the laws of arrangement. The trade: design the representative model of a domain as it is and as it could be, then close the gap.",
            ],
            ["Taxonomist", "I model what is, what could be, and the transformations that close the gap (this site holds 20+ taxonomies)", true, undefined, undefined, true],
            ["Applied", "I test every model against reality and revise until it produces the outcome", true, undefined, undefined, true],
            [
              "Transformation",
              [
                "I change behavior (cognitive, physiological, psychosocial, and environmental) to grow a person’s capital (",
                <WikiLink key="h" href="/health">health</WikiLink>,
                ", ",
                <WikiLink key="k" href="/knowledge">knowledge</WikiLink>,
                ", ",
                <WikiLink key="w" href="/wealth">wealth</WikiLink>,
                ", and ",
                <WikiLink key="n" href="/network">network</WikiLink>,
                ")",
              ],
              true,
              undefined,
              undefined,
              true,
            ],
            [
              "Mission",
              "I accumulate and allocate my life capital where it benefits others most",
              true,
            ],
            ["Self", "I solve my own problems first, then publish the solutions free for anyone", true, undefined, undefined, true],
            ["Individuals", "I help individuals apply the same solutions to their lives, partners, and families, for a fee", true, undefined, undefined, true],
            ["Companies", "I help companies build the same solutions into products for their employees and customers, for a fee", true, undefined, undefined, true],
            [
              "Principle",
              "“How you do anything is how you do everything”",
              true,
              "The one aphorism I run on: the small tasks are auditions for the large ones, and quality is a habit, not an occasion.",
            ],
          ],
        },
        {
          category: "Story (what I’ve done)",
          metrics: [
            ["", "The problems I solved for myself first and now help others solve", false],
            ["Meta-learning", "Homeschooled from age 13; learning to learn became the trade itself, and applied taxonomy its highest form", true],
            ["Time management", "Early autonomy made every hour mine to allocate; the schedule on Lifestyle is the result", true, undefined, "/lifestyle#time"],
            ["Spatial design", "Thirty-plus relocations taught me to rebuild an optimal environment anywhere (the studio and home gym designs show the current answer)", true, undefined, "https://www.youtube.com/playlist?list=PLkxFhm6Fhw9oypG0tLrOTNtnPtsGMUG2w"],
            ["Physical exercise", "Gymnastics at 12, kung fu at 16 (following Bruce Lee into the gym), then running, CrossFit, and McGuff, integrated for complete development", true, undefined, "/health#capacity"],
            ["Sustainable dieting", "Diet experiments since 20 (paleo, primal, vegetarian, fasting) settled into a calorically informed, whole-food pattern: sub-10% body fat, high muscle, insulin sensitive", true, undefined, "/health#balance"],
            ["Asset allocation", "Working from 15 forced early money management, serious from 30; the structures now in place make financial freedom a matter of time", true, undefined, "/wealth"],
            ["Educational productions", "Films since childhood (mostly kung fu movies); now digital products designed, produced, and shipped end to end", true, undefined, "/knowledge#works"],
            ["Teacher’s training", "Teaching since 17 (English in China, finance in Malaysia, fitness in Barcelona); a teacher’s training manual in progress", true, undefined, "/knowledge#skills"],
            ["Technophilia", "Mastering each generation of tools, from gym equipment to studio gear to AI (this site was designed and written with Claude as my coding and editorial assistant)", true],
          ],
        },
      ],
    },
    {
      domain: "My Status",
      label: "",
      rows: [
        {
          category: "Work (my current focus)",
          metrics: [
            ["", "Two problems hold my attention; you’re welcome to join either", false],
            [
              "Education",
              "A self-guided, universal, lifelong curriculum made personal; this site is the first prototype of the structure",
              true,
              "Subjects studied according to one’s own constitution and capital: math for wealth, philosophy and psychology for nature, history from your own life outward to your country and the universe, biology for your inheritance and health. Knowledge made personal is more meaningful and more memorable, and converts into self-efficacy rather than mere acquisition.",
            ],
            [
              "Market",
              "Relocated permanently to the US (who you know and where you live beat what you know); rebuilding from scratch in search of product-market fit for my intellectual capital",
              true,
              undefined,
              "/network#guidelines",
            ],
          ],
        },
        {
          category: "Life (my current conditions)",
          metrics: [
            ["", "Where I live, how the days run, and what I’m like off duty", false],
            ["Location", "Austin, Texas, the best fit on my city scorecard (see Space on Lifestyle); my mother came along, and I’m helping her build the same", true, undefined, "/lifestyle#space"],
            ["Activities", "Work, exercise, and study, as I always have (the exact schedule lives on Lifestyle)", true, undefined, "/lifestyle#time"],
            ["Personal", "Single and not looking; progressive trance by default; no social media except LinkedIn (reluctantly, for networking) and YouTube (for publishing); the perfect day ends in a sauna and a long walk after serving someone well", true],
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
            ["", "One site doing two jobs: the personal record and the public storefront", false],
            ["Personal", "A digital blueprint of my entire life", true],
            ["Website", "A wiki of interlinked pages; navigate the map that is me", true, undefined, undefined, true],
            ["Database", "The single source of truth on my life, with references (TLDR? Paste this site into your LLM and ask it anything about me)", true, undefined, undefined, true],
            ["Media", "My social journal; the public record (history, lifestyle, and capital status) kept current as life unfolds", true, undefined, undefined, true],
            ["Commercial", "The primary point of contact for collaborations", true],
            ["Resume", "The infobox, this page, and Knowledge together carry the career record", true, undefined, undefined, true],
            ["Portfolio", "The works with references on Knowledge, this website included (itself a project born of the US move)", true, undefined, undefined, true],
            ["Taxonomy", "A map of what it means to fulfill one’s potential (constitution and capital); the structure doubles as a complete self-education curriculum", true, undefined, undefined, true],
          ],
        },
        {
          category: "Structure (how it’s built)",
          metrics: [
            ["", "One map, eight pages, one layout", false],
            ["Map", "A knowledge map of what makes a person, demonstrated on me", true],
            ["Constitution", "Every individual has a story, a nature, and a way of living that builds or drains their capital", true, undefined, undefined, true],
            ["Capital", "Every individual holds four kinds: physical (health), intellectual (knowledge), financial (wealth), and social (network)", true, undefined, undefined, true],
            ["Pages", "Eight pages following an identical layout", true],
            ["Introduction", "A headline, the section bar, and an opening section", true, undefined, undefined, true],
            ["Taxonomy", "Three branches of two bands each, in accordions for maximal compression", true, undefined, undefined, true],
            ["References", "Data, guidelines, and studies supporting every page", true, undefined, undefined, true],
          ],
        },
      ],
    },
    {
      domain: "Site Navigation",
      label: "",
      rows: [
        {
          category: "Browser (journeys)",
          metrics: [
            ["", "Four paths in, ordered by how much time you have", false],
            ["AI me", "Paste this URL into your favorite LLM and ask it anything you’d like to know about me", true],
            ["Qualify me", "Considering me for a role? Read the infobox quick facts (identity, professional, and psychological), then the Knowledge page", true, undefined, "/knowledge"],
            ["Get to know me", "Qualified? Read parts of Story, Nature, and Lifestyle until I feel familiar", true, undefined, "/story"],
            ["Work with me", "Finish with the capital pages for my current status, then contact me through the offers below", true, undefined, "#contact"],
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
            ["", "Everything published, free to use alone or joined with me inside", false],
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
            ["Content", "License any free course for a more structured experience on your platform", true, undefined, undefined, true],
            ["Speaking", "A presentation of any published work at your event", true, undefined, undefined, true],
            ["Corporate", "Private: train your employees on my content", true],
            ["Training", "Employee mastery of time, exercise strategies, and work performance", true, undefined, undefined, true],
            ["Speaking (private)", "A closed presentation for your team on any published work", true, undefined, undefined, true],
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
            ["", "One commitment at a time, fully served until the problem is solved", false],
            ["Individuals", "Private: hire me to transform yourself, your partner, or your family", true],
            ["Design", "A personalized lifestyle, exercise, nutrition, or self-study program to run on your own", true, undefined, undefined, true],
            ["Profiling", "A taxonomy of your life as profile, portfolio, resume, or AI database (like this site)", true, undefined, undefined, true],
            ["Coaching", "Tiny lifestyle, exercise, nutrition, or self-study experiments until the goal is reached", true, undefined, undefined, true],
            ["Interventions", "Your environment rearranged and you trained in person, for accelerated, guaranteed change", true, undefined, undefined, true],
            ["Companies", "Private: hire me as employee or contractor to transform your employees or customers", true],
            ["Design (product)", "A transformative product, protocol, content, assessment, or software experience", true, undefined, undefined, true],
            ["Production", "Transformative educational content produced end to end for staff or users", true, undefined, undefined, true],
            ["Consulting", "Your next best product design move clarified, analyzed, and planned", true, undefined, undefined, true],
            ["Training", "HR onboarding for employees, or management coached toward end-user product fulfillment", true, undefined, undefined, true],
          ],
        },
        {
          category: "Owners (cofounders and investors)",
          metrics: [
            ["", "Bring the market or the capital; I’ll bring the build", false],
            ["Individuals", "Public: for operators in need of a builder", true],
            ["Services", "I build, sell, and fulfill the product offer; you acquire the customers and manage the resources", true, undefined, undefined, true],
            ["Startups", "Private: equity in exchange for product leadership", true],
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
