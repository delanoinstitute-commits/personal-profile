import type { Metadata } from "next";
import PageHeading from "@/components/PageHeading";
import WikiLink from "@/components/WikiLink";

export const metadata: Metadata = { title: "Constituents" };

export default function ConstituentsPage() {
  return (
    <>
      <PageHeading
        title="Constituents"
        hatnote={<>The present — what makes him up</>}
      />

      <p className="lead">
        A snapshot of the present self: psychology, physiology, socioeconomic standing, and
        personal interests. These are current readings, not history — for how they came to
        be, see <WikiLink href="/biography">his story</WikiLink>.
      </p>

      <h2 id="psychological">Psychological</h2>
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

      <h2 id="physical">Physical</h2>
      <div className="-mx-5 overflow-x-auto px-5 sm:mx-0 sm:px-0">
        <table className="wiki-keytable">
          <tbody>
            <tr><th>Height</th><td>1.76 m (5′9″)</td></tr>
            <tr><th>Weight</th><td>72 kg (158 lb)</td></tr>
            <tr>
              <th>Body composition</th>
              <td>Lean (8.2% body fat) and muscular (9.4 kg/m² ALMI)</td>
            </tr>
            <tr>
              <th>Health markers</th>
              <td>
                Efficient (105/60 BP, 50 bpm resting HR) and insulin-sensitive
                (5.1% HbA1c, ~4 IU/L fasting insulin)
              </td>
            </tr>
            <tr>
              <th>Capacity</th>
              <td>
                53 ml/kg/min VO₂max; 6 pistol squats; 60-second L-sit; 20 pull-ups;
                25 dips
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="socioeconomic">Socioeconomic</h2>
      <h4>Companies</h4>
      <ul>
        <li>
          <strong>Eudaemonia, Inc.</strong> — US C-Corp, registered 1 August 2019.
        </li>
        <li>
          <strong>Erfaring (Pty) Ltd</strong> — real-estate venture (South Africa),
          registered 24 October 2024.
        </li>
      </ul>
      <h4>Work and income</h4>
      <p>
        Delano works primarily as an independent, project-based contractor — designing
        learning systems, directing productions, and coaching — rather than as a salaried
        employee or a fixed-product business owner. Income follows the work: contracts,
        events, interventions, and coaching engagements.
      </p>

      <h2 id="personal">Personal</h2>
      <h4>Activities</h4>
      <p>
        Coffee and healthy-food experiences; walking, hiking, and exploring new places on
        foot; wellness experiences involving saunas; wildlife; and music and cinema.
      </p>
      <h4>Tendencies</h4>
      <p>
        Organising (concepts and objects) and cleaning — a constant drive to find the
        underlying structure of things and to arrange life for more effective living.
      </p>
      <h4>Interests</h4>
      <p>
        Science, philosophy, finance, and self-mastery — the non-outsourceable activities:
        time, food, movement, hygiene, education, and stillness. Delano translates almost
        everything into practical frameworks for daily living.
      </p>
      <h4>Influences</h4>
      <p>
        Intellectual and spiritual: John Demartini, Alan Watts, Neale Donald Walsch, Ken
        Wilber, Peter Attia, Jordan Peterson, Naval Ravikant, Dave Snowden, and David
        Deutsch. Success and craft: Bruce Lee, Tony Robbins, and Elon Musk. Fictional
        touchstones: Liu Kang, Goku, the Last Samurai&rsquo;s Nathan Algren, and Tony Stark.
      </p>
    </>
  );
}
