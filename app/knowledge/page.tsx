import type { Metadata } from "next";
import PageHeading from "@/components/PageHeading";
import { NestedTable } from "@/components/NestedTable";
import { References } from "@/components/References";
import {
  EDUCATION,
  SKILLS,
  WORKS,
  KNOWLEDGE_REFERENCE_SECTIONS,
} from "@/content/knowledge";

export const metadata: Metadata = { title: "Knowledge" };

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
        My full inventory of competence — the methodologies and designs I&rsquo;ve
        shipped, the skills behind them, and the self-directed curriculum they all stand
        on.
      </p>
      <p>
        This page reads one competence three ways: Works (what I have made), Skills
        (what I can do), and Education (what I know). It is a working system, not a
        trophy case — what I study becomes what I practice, and what I practice becomes
        what I ship, so trace any entry and you&rsquo;ll find the other two tables in it:
        the course behind the skill, the skill behind the work. The classroom ended at
        13; the curriculum never did. Skill claimed is skill shown — the references link
        to the designs, productions, and certificates themselves.
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
