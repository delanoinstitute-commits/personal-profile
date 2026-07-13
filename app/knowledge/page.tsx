import type { Metadata } from "next";
import PageHeading from "@/components/PageHeading";
import WikiLink from "@/components/WikiLink";
import { StatTable } from "@/components/StatTable";
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
      <NestedTable {...WORKS} hint="Click a band to expand, then a section within it." />

      <References
        items={KNOWLEDGE_REFERENCES}
        intro="The framework behind this page, and the traditions it draws on."
      />
    </>
  );
}
