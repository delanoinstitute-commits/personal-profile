import { pageMeta } from "@/content/site";
import PageHeading from "@/components/PageHeading";
import WikiLink from "@/components/WikiLink";
import { NestedTable } from "@/components/NestedTable";
import { References } from "@/components/References";
import {
  EDUCATION,
  SKILLS,
  WORKS,
  KNOWLEDGE_REFERENCE_SECTIONS,
} from "@/content/knowledge";

export const metadata = pageMeta(
  "Knowledge",
  "What Lorenzo Delano knows and makes: published works, benchmarked skills, and a self-designed education, including Functional Taxonomy and Benchmark Apprenticeship.",
  "/knowledge",
);

// The knowledge trilogy (see KNOWLEDGE_SPEC.md): Works (production — making),
// Skills (practice — doing), Education (theory — knowing) — ordered evidence
// first for the skimming reader; each split by the individual/social locus
// axis. Data lives in content/knowledge.

export default function KnowledgePage() {
  return (
    <div className="zoned">
      <PageHeading title="Knowledge" />

      <p id="introduction" className="page-hook">I don&rsquo;t take degrees, I design them.</p>
      <p className="page-promise">
        My full inventory of competence: the methods and designs I&rsquo;ve shipped,
        the skills behind them, and the self-directed curriculum that everything else
        stands on.
      </p>
      <p>
        It reads one competence three ways: <WikiLink href="#works">works</WikiLink>{" "}
        (what I&rsquo;ve made), <WikiLink href="#skills">skills</WikiLink> (what I can
        do), and <WikiLink href="#education">education</WikiLink> (what I know). A
        working system, not a trophy case: study becomes practice, and practice
        becomes shipped work.
      </p>
      <p>
        Trace any entry and you&rsquo;ll find the other two tables inside it — the
        course behind the skill, the skill behind the work. My classroom ended at
        thirteen; the curriculum never did, and this page is where it lives.
      </p>

      <hr className="zone-rule" />

      <h2 id="works">Works <span className="heading-paren">(Production)</span></h2>
      <NestedTable {...WORKS} />

      <h2 id="skills">Skills <span className="heading-paren">(Practice)</span></h2>
      <NestedTable {...SKILLS} />

      <h2 id="education">Education <span className="heading-paren">(Theory)</span></h2>
      <NestedTable {...EDUCATION} />

      <hr className="zone-rule" />

      <References
        title={<>References <span className="heading-paren">(Evidence)</span></>}
        sections={KNOWLEDGE_REFERENCE_SECTIONS}
      />
    </div>
  );
}
