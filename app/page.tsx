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
            ["Taxonomist", "A specialist in classifying all things according to their functions and natural relationships", true, undefined, undefined, true],
            ["Applied", "Testing every model against reality and revising until it produces the outcome", true, undefined, undefined, true],
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
              "I accumulate and allocate my life capital where it benefits others most",
              true,
            ],
            ["Personal", "I solve my own problems first, then publish the solutions free for anyone", true, undefined, undefined, true],
            ["Social", "I then help individuals apply the same solutions to their lives, partners, or families", true, undefined, undefined, true],
            ["Organizational", "And then help companies productize the same solutions for their users", true, undefined, undefined, true],
            [
              "Principles",
              "I live my life by a set of principles that have served me best over the years",
              true,
            ],
            ["Attention", "The quality of your life is based on the quality of your attention", true, "“How you do anything is how you do everything” — win the moment and you win the past (nothing to regret) and the future (nothing to fear).", undefined, true],
            ["Essentialism", "Progress depends on knowledge of the necessary and sufficient", true, undefined, undefined, true],
            ["Configuration", "It’s not about the quantity of resources, but the quality of their configuration", true, undefined, undefined, true],
          ],
        },
        {
          category: "Story (what I’ve done)",
          metrics: [
            ["", "I solved these problems for myself first; now I help others solve them", false],
            ["Meta-learning", "I left school at 13 and taught myself ever since; learning to learn became my trade, and applied taxonomy its highest form", true],
            ["Time management", "Early autonomy made every hour mine to allocate; I’ve designed my days ever since (the schedule lives on Lifestyle)", true, undefined, "/lifestyle#time"],
            ["Spatial design", "I’ve moved more than thirty times, so I can rebuild an optimal environment anywhere (the studio and home gym designs show my current answer)", true, undefined, "https://www.youtube.com/playlist?list=PLkxFhm6Fhw9oypG0tLrOTNtnPtsGMUG2w"],
            ["Physical exercise", "I started with gymnastics at 12 and kung fu at 16 (following Bruce Lee into the gym), then added running, CrossFit, and McGuff, integrated for complete development", true, undefined, "/health#capacity"],
            ["Sustainable dieting", "I’ve experimented with diets since 20 (paleo, primal, vegetarian, fasting) and settled into a calorically informed, whole-food pattern: sub-10% body fat, high muscle, insulin sensitive", true, undefined, "/health#balance"],
            ["Asset allocation", "I’ve worked since 15 and managed my own money from the start, seriously from 30; the structures now in place make financial freedom a matter of time", true, undefined, "/wealth"],
            ["Educational productions", "I’ve made films since childhood (mostly kung fu movies); now I design, produce, and ship digital products end to end", true, undefined, "/knowledge#works"],
            ["Teacher’s training", "I’ve taught since 17 (English in China, finance in Malaysia, fitness in Barcelona); my teacher’s training manual is in progress", true, undefined, "/knowledge#skills"],
            ["Technophilia", "I master each generation of tools, from gym equipment to studio gear to AI (I designed and wrote this site with Claude as my coding and editorial assistant)", true],
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
              "I’m building a self-guided, universal, lifelong curriculum made personal; this site is my first prototype of the structure",
              true,
              "Subjects studied according to one’s own constitution and capital: math for wealth, philosophy and psychology for nature, history from your own life outward to your country and the universe, biology for your inheritance and health. Knowledge made personal is more meaningful and more memorable, and converts into self-efficacy rather than mere acquisition.",
            ],
            [
              "Market",
              "I relocated permanently to the US (who you know and where you live beat what you know); I’m rebuilding from scratch in search of product-market fit for my intellectual capital",
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
            ["Location", "I live in Austin, Texas, the best fit on my city scorecard (see Space on Lifestyle); my mother came along, and I’m helping her build the same", true, undefined, "/lifestyle#space"],
            ["Activities", "I work, exercise, and study, as I always have (my exact schedule lives on Lifestyle)", true, undefined, "/lifestyle#time"],
            ["Personal", "I’m single and not looking; I default to progressive trance; I keep no social media except LinkedIn (reluctantly, for networking) and YouTube (for publishing); my perfect day ends in a sauna and a long walk after serving someone well", true],
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
            ["Database", "It’s the single source of truth on my life, with references (TLDR? Paste this site into your LLM and ask it anything about me)", true, undefined, undefined, true],
            ["Media", "It’s my social journal; I keep the public record (history, lifestyle, and capital status) current as life unfolds", true, undefined, undefined, true],
            ["Commercial", "It’s also my primary point of contact for collaborations", true],
            ["Resume", "The infobox, this page, and Knowledge together carry my career record", true, undefined, undefined, true],
            ["Portfolio", "My works with references live on Knowledge, this website included (itself a project born of my US move)", true, undefined, undefined, true],
            ["Taxonomy", "It maps what it means to fulfill one’s potential (constitution and capital); the structure doubles as a complete self-education curriculum", true, undefined, undefined, true],
          ],
        },
        {
          category: "Structure (how it’s built)",
          metrics: [
            ["", "I drew one map and laid it out across eight identical pages", false],
            ["Map", "I map what makes a person, demonstrated on me", true],
            ["Constitution", "Every individual has a story, a nature, and a way of living that builds or drains their capital", true, undefined, undefined, true],
            ["Capital", "Every individual holds four kinds: physical (health), intellectual (knowledge), financial (wealth), and social (network)", true, undefined, undefined, true],
            ["Pages", "I keep all eight pages on one identical layout", true],
            ["Introduction", "Each page opens with a headline, the section bar, and an introduction", true, undefined, undefined, true],
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
          category: "Browser (journeys)",
          metrics: [
            ["", "I’ve laid four paths in, ordered by how much time you have", false],
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
