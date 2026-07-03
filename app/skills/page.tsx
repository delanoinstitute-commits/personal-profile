import type { Metadata } from "next";
import PageHeading from "@/components/PageHeading";
import WikiLink from "@/components/WikiLink";

export const metadata: Metadata = { title: "Skills" };

export default function SkillsPage() {
  return (
    <>
      <PageHeading title="Skills" hatnote={<>The present — what he does</>} />

      <p className="lead">
        Delano&rsquo;s capabilities cluster into three: he <strong>architects</strong>{" "}
        solutions, <strong>produces</strong> the assets that carry them, and{" "}
        <strong>coaches</strong> the people who use them — design, production, and
        transmission.
      </p>

      <h2 id="architectural">Architectural</h2>
      <p>
        As a learning-systems designer and taxonomist, Delano distils a domain into its
        underlying structure and designs the system that makes it teachable. This spans:
      </p>
      <ul>
        <li>
          <strong>Taxonomies</strong> — knowledge maps that organize a field (fitness,
          learning design, content classification, life management).
        </li>
        <li>
          <strong>Apprenticeships and instruction</strong> — live learning models, online
          courses, and enterprise education-product design.
        </li>
        <li>
          <strong>Physical and lifestyle systems</strong> — exercise programs, daily
          routines, and the design of spaces (home gyms and studios).
        </li>
      </ul>
      <p>
        His signature methods include the <strong>RBG (Rapid Benchmark Graduate)</strong>{" "}
        method for mastering a discipline quickly and an evolving learning-experience design
        model refined since 2018.
      </p>

      <h2 id="production">Production</h2>
      <p>
        Delano directs and produces the assets that deliver a system — designing the
        curriculum, hiring and running camera crews, directing on set, and handling post
        production. Notable productions include online courses with{" "}
        <strong>Ken Wilber, Alan Watts (estate), Neale Donald Walsch, Steven Kotler, Ben
        Greenfield, and John Demartini</strong>, the{" "}
        <WikiLink href="https://www.mindvalley.com/values">Values Factor Quest</WikiLink>,
        the <WikiLink href="https://www.mindvalley.com/10x/quest">10X Quest</WikiLink>, and
        the <WikiLink href="https://www.mindvalley.com/body-first">BodyFirst Quest</WikiLink>.
      </p>

      <h2 id="coaching">Coaching</h2>
      <p>
        Delano transmits performance directly — as a coach, instructor, and facilitator —
        across athletics, health, and life. Formats range from private and group classes to
        live-in lifestyle interventions and organizational workshops. He co-created the{" "}
        <WikiLink href="https://www.mindvalley.com/10x/quest">10X method</WikiLink> and has
        coached individuals from entrepreneurs and actors to billionaires and their
        families.
      </p>
    </>
  );
}
