import type { Metadata } from "next";
import PageHeading from "@/components/PageHeading";
import WikiLink from "@/components/WikiLink";

export const metadata: Metadata = { title: "Identity" };

export default function IdentityPage() {
  return (
    <>
      <PageHeading title="Identity" hatnote={<>The present — who he is</>} />

      <p className="lead">
        Who Delano is now — the mind in three lenses: intellect (how he thinks), character
        (how he&rsquo;s wired), and drive (what moves him). Current readings, not history.
      </p>
      <p>
        In brief: intellectually curious and highly conscientious, emotionally steady, and
        independent-minded — a builder who questions consensus. Each lens is read against the
        field&rsquo;s gold-standard instrument; for how they formed, see{" "}
        <WikiLink href="/biography">his story</WikiLink>.
      </p>

      {/* ── Intellect ─────────────────────────────────────────────────── */}
      <h2 id="intellect">Intellect</h2>
      <p>Cognition — how he reasons and how he sees the world. The head.</p>

      <h4>Cognitive ability</h4>
      <p>
        Full-scale IQ and index scores — <em>pending</em> (RIOT or a proctored WAIS-5). A
        related signal from the 2018 personality test: intellectual-curiosity in the 100th
        percentile.
      </p>

      <h4>Worldview (Funk&rsquo;s seven components)</h4>
      <div className="-mx-5 overflow-x-auto px-5 sm:mx-0 sm:px-0">
        <table className="wiki-keytable">
          <tbody>
            <tr><th>Epistemology</th><td>Critical rationalist</td></tr>
            <tr><th>Metaphysics</th><td>Physical idealist</td></tr>
            <tr><th>Cosmology</th><td>Evolutionary emergentist</td></tr>
            <tr><th>Teleology</th><td><em>Pending</em></td></tr>
            <tr><th>Theology</th><td>Agnostic atheist</td></tr>
            <tr><th>Anthropology</th><td>Universal theorist</td></tr>
            <tr><th>Axiology</th><td>Amoral realist</td></tr>
          </tbody>
        </table>
      </div>

      {/* ── Character ─────────────────────────────────────────────────── */}
      <h2 id="character">Character</h2>
      <p>Temperament — how he is characteristically wired. The heart.</p>

      <h4>Personality (Big Five percentiles)</h4>
      <p>
        Openness 49 · Conscientiousness 96 · Extraversion 29 · Agreeableness 30 · Neuroticism
        1. Standout facets: intellectual curiosity 100, assertiveness 90. In short: extremely
        conscientious and emotionally steady, introverted, and low on agreeableness — a builder
        who questions consensus.{" "}
        <span className="text-muted">(123test / IPIP, 2018; HEXACO re-test pending.)</span>
      </p>

      <h4>Honesty-Humility</h4>
      <p>
        The sixth HEXACO factor — the integrity / fair-dealing dimension, and the strongest
        single predictor of who will and won&rsquo;t cut corners. <em>Pending</em> (HEXACO-PI-R).
      </p>

      <h4>Working style</h4>
      <p>
        A project-based problem solver: he commits fully to a clear vision and stays consistent
        until it is done, but caps himself at roughly one year in a role — once a problem is
        solved he loses interest in re-selling the solution. A compulsive organizer, forever
        arranging the physical, digital, and conceptual into cleaner structure.
      </p>

      {/* ── Drive ─────────────────────────────────────────────────────── */}
      <h2 id="drive">Drive</h2>
      <p>Conation — what he wants and moves toward. The gut.</p>

      <h4>Values (Demartini, top five)</h4>
      <p>Design, wellness, education, resource allocation, and music.</p>

      <h4>Motivation (Self-Determination Theory)</h4>
      <p>
        Intrinsic-versus-extrinsic orientation, supporting the values above — <em>pending</em>{" "}
        (SDT Aspirations Index).
      </p>

      <h4>Interests (Holland RIASEC)</h4>
      <p>
        <strong>Investigative · Artistic · Social</strong> (code IAS) — a thinker-creator-helper
        profile, lowest on Realistic and Conventional.{" "}
        <span className="text-muted">(O*NET Interest Profiler, 2026.)</span> In practice: coffee
        and healthy-food experiences; walking, hiking, and exploring new places on foot; saunas
        and wellness; wildlife; and music and cinema. He translates almost everything —
        science, philosophy, finance, self-mastery — into practical frameworks for daily living.
      </p>

      <h4>Risk tolerance</h4>
      <p>
        68 / 100 — risk group 6 of 7, higher than 96% of the population.{" "}
        <span className="text-muted">(FinaMetrica-style report, 2022.)</span> He reads risk as
        opportunity and is comfortable with a medium-to-large degree of it.
      </p>

      <h4>Influences</h4>
      <p>
        Intellectual and spiritual: John Demartini, Alan Watts, Neale Donald Walsch, Ken Wilber,
        Peter Attia, Jordan Peterson, Naval Ravikant, Dave Snowden, and David Deutsch. Success
        and craft: Bruce Lee, Tony Robbins, and Elon Musk. Fictional touchstones: Liu Kang,
        Goku, the Last Samurai&rsquo;s Nathan Algren, and Tony Stark.
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
