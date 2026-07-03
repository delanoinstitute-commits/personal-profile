import type { Metadata } from "next";
import PageHeading from "@/components/PageHeading";

export const metadata: Metadata = { title: "Works" };

export default function WorksPage() {
  return (
    <>
      <PageHeading title="Works" hatnote={<>The present — what he has made</>} />

      <p className="lead">
        The methods, models, and writing Delano has authored — the intellectual output behind
        the skills, and the evidence for them. A catalog in progress.
      </p>

      <h2 id="methods">Methods</h2>
      <p>Repeatable protocols and systems he created.</p>
      <ul>
        <li>
          <strong>The 10X Method</strong> — a whole-life optimization protocol (co-created).
        </li>
        <li>
          <strong>The RBG (Rapid Benchmark Graduate) method</strong> — a system for mastering
          a discipline quickly.
        </li>
        <li>
          <em>More to catalog.</em>
        </li>
      </ul>

      <h2 id="models">Models</h2>
      <p>Frameworks and taxonomies that structure a domain.</p>
      <ul>
        <li>
          <strong>Taxonomical design</strong> — knowledge maps that organize a field (fitness,
          learning design, life management).
        </li>
        <li>
          <strong>The health model</strong> — functional integrity across a stress&ndash;recovery
          continuum: balance, integrity, capacity.
        </li>
        <li>
          <em>More to catalog.</em>
        </li>
      </ul>

      <h2 id="writing">Writing</h2>
      <p>Books, essays, and long-form frameworks.</p>
      <ul>
        <li>
          <strong>Health Development</strong> — a book-length framework defining health as
          functional integrity.
        </li>
        <li>
          <em>More to catalog.</em>
        </li>
      </ul>
    </>
  );
}
