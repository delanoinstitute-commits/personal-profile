import type { Metadata } from "next";
import PageHeading from "@/components/PageHeading";
import { NestedTable } from "@/components/NestedTable";
import { References } from "@/components/References";
import {
  EDUCATION,
  SKILLS,
  WORKS,
  KNOWLEDGE_REFERENCES,
} from "@/content/knowledge";

export const metadata: Metadata = { title: "Knowledge" };

// The knowledge trilogy (see KNOWLEDGE_SPEC.md): Education (theory —
// knowing), Skills (practice — doing), Works (production — making), each
// split by the individual/social locus axis. Data lives in content/knowledge.

export default function KnowledgePage() {
  return (
    <>
      <PageHeading title="Knowledge" hatnote={<>The present — what I know, do, and make</>} />

      <p className="lead">
        Knowledge is one competence read three ways: what I know (education),
        what I can do (skills), and what I have made (works). This page is my
        full inventory of it — claimed in theory, shown in practice, proven in
        production.
      </p>
      <p>
        This is a working system, not a trophy case: what I study becomes what
        I practice, and what I practice becomes what I ship. Trace any entry
        and you&rsquo;ll find the other two tables in it — the course behind
        the skill, the skill behind the work. One mind, fully accounted for, as
        of 2026.
      </p>

      <h2 id="education">Education <span className="heading-paren">(Theory)</span></h2>
      <p>
        The classroom ended at 13; the curriculum never did. Since then I
        enroll only when a domain demands it — guided when a teacher is the
        fastest path, independent when I am. Certificates where they count,
        practice where they don&rsquo;t: the theory behind everything the two
        sections below demonstrate.
      </p>
      <NestedTable {...EDUCATION} />

      <h2 id="skills">Skills <span className="heading-paren">(Practice)</span></h2>
      <p>
        One craft runs beneath every skill below: giving knowledge a working
        shape. Through tools, I shape it into taxonomies, systems, content, and
        spaces. Through people, I shape it into teachers, methods, and
        productions. Each is demonstrable on demand — skill claimed is skill
        shown.
      </p>
      <NestedTable {...SKILLS} />

      <h2 id="works">Works <span className="heading-paren">(Production)</span></h2>
      <p>
        Every work below began as a problem I solved for myself. I document,
        share, and productize only when demand begs
        or opportunity presents. Two decades of attempted self-mastery and the
        pursuit of excellence, shipped with and for others.
      </p>
      <NestedTable {...WORKS} defaultOpenCats={["Designs (published artifacts)"]} />

      <References
        items={KNOWLEDGE_REFERENCES}
        intro="The framework behind this page, and the traditions it draws on."
      />
    </>
  );
}
