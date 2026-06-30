import type { Metadata } from "next";
import PageHeading from "@/components/PageHeading";
import WikiLink from "@/components/WikiLink";

export const metadata: Metadata = { title: "Current status" };

export default function CurrentStatusPage() {
  return (
    <>
      <PageHeading
        title="Current status"
        hatnote={<>Who he is now — what he has and what he is doing</>}
      />

      <p className="lead">
        A snapshot of the present: psychology, physiology, daily behaviour, and the work
        Delano is doing right now. These are current readings, not history — for how they
        came to be, see <WikiLink href="/historical-context">historical context</WikiLink>.
      </p>

      <h2 id="psychological">Psychological</h2>
      <h4>Values hierarchy (top five)</h4>
      <p>Design, wellness, education, asset allocation, and music.</p>
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
        consistent until it is done — but caps himself at roughly one year in the same
        role, because once a problem is solved he loses interest in re-selling the solution.
      </p>

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

      <h2 id="behavioural">Behavioural</h2>
      <dl>
        <dt>Daily schedule</dt>
        <dd>
          Sleep 11pm–7am; work 8–11am, 12–2pm, and 5–7pm; eat 11am, 4pm, and 8pm;
          exercise 2–4pm; walk and shop in the late afternoon and evening; sauna and rest
          7–8pm; study at 4:30pm and 9:30pm; news 10–11pm.
        </dd>
        <dt>Work mode</dt>
        <dd>Design and code (laptop); coach (virtual).</dd>
        <dt>Diet</dt>
        <dd>
          Primal-Mediterranean — paleo with dairy, low-carb, and no processed foods; three
          cups of coffee a day.
        </dd>
        <dt>Supplements</dt>
        <dd>Omega-3, creatine, magnesium, and vitamin D3. No medication.</dd>
        <dt>Exercise</dt>
        <dd>
          Walks daily (~7,000 steps); gymnastics 5×/week (mobility, stability, and
          strength); metabolic conditioning 1–2×/week.
        </dd>
        <dt>Education</dt>
        <dd>Studies science daily (YouTube, Khan Academy).</dd>
        <dt>Smoking and drinking</dt>
        <dd>Lifelong non-smoker; teetotaller (drunk perhaps five times ever).</dd>
      </dl>

      <h2 id="creative">Creative</h2>
      <p>
        Delano&rsquo;s current creative output centres on taxonomical video series and
        courses. In early 2026 he designed and published five video series free on YouTube
        — four on training (maps, routines, space, and design) and one on life management
        and planning — producing one every day for three months. The four training courses
        illustrate complete systems design for mastering a behaviour; he has identified six
        such domains for self-mastery: <strong>train, eat, finance, learn, mind, and plan
        </strong>.
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
        Wilber, Peter Attia, Naval Ravikant, Dave Snowden, and David Deutsch. Success and
        craft: Bruce Lee, Tony Robbins, and Elon Musk.
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
