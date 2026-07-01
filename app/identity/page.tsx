import type { Metadata } from "next";
import PageHeading from "@/components/PageHeading";
import WikiLink from "@/components/WikiLink";

export const metadata: Metadata = { title: "Identity" };

export default function IdentityPage() {
  return (
    <>
      <PageHeading title="Identity" hatnote={<>The present — who he is</>} />

      <h2 id="psychological">Psychological</h2>
      <p className="lead">
        The present self, psychologically: personality, values, worldview, and the way he
        works. These are current readings, not history — for how they came to be, see{" "}
        <WikiLink href="/biography">his story</WikiLink>.
      </p>
      <h4>Personality (Big Five percentiles)</h4>
      <p>
        Openness 49 · Conscientiousness 96 · Extraversion 29 · Agreeableness 30 ·
        Neuroticism 1. In short: extremely conscientious and emotionally steady,
        introverted, and low on agreeableness — a builder who questions consensus.
      </p>
      <h4>Values hierarchy (top five)</h4>
      <p>Design, wellness, education, resource allocation, and music.</p>
      <h4>Worldview (the &ldquo;Big Seven&rdquo;)</h4>
      <div className="-mx-5 overflow-x-auto px-5 sm:mx-0 sm:px-0">
        <table className="wiki-keytable">
          <tbody>
            <tr><th>Epistemology</th><td>Critical rationalist</td></tr>
            <tr><th>Metaphysics</th><td>Physical idealist</td></tr>
            <tr><th>Axiology</th><td>Amoral realist</td></tr>
            <tr><th>Theology</th><td>Agnostic atheist</td></tr>
            <tr><th>Teleology / cosmology</th><td>Evolutionary emergentist</td></tr>
            <tr><th>Anthropology</th><td>Universal theorist</td></tr>
          </tbody>
        </table>
      </div>
      <h4>Work identity</h4>
      <p>
        A project-based problem solver, Delano commits fully to a clear vision and stays
        consistent until it is done — but caps himself at roughly one year in the same role,
        because once a problem is solved he loses interest in re-selling the solution.
      </p>
      <h4>Words he lives by</h4>
      <ul>
        <li>&ldquo;How you do anything is how you do everything.&rdquo;</li>
        <li>
          &ldquo;We&rsquo;re here to convert our experiences into the highest advantage for
          others.&rdquo;
        </li>
        <li>&ldquo;Success is consistent, high-integrity effort — not a destination.&rdquo;</li>
        <li>&ldquo;Make the most with where you are, who you know, and what you have.&rdquo;</li>
      </ul>
    </>
  );
}
