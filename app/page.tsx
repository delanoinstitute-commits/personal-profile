import PageHeading from "@/components/PageHeading";
import WikiLink from "@/components/WikiLink";
import { makeCitations, Citation } from "@/components/citations";

const refs: Citation[] = [
  {
    id: "10x-quest",
    text: "10X Fitness Quest, Mindvalley — completed by 90,000+ people since 2021.",
    href: "https://www.mindvalley.com/10x/quest",
  },
  {
    id: "chinese-bridge",
    text: "8th “Chinese Bridge” Chinese Proficiency Competition — Delano represented South Africa, 2009.",
    href: "https://www.mfa.gov.cn/zwbd_673032/200904/t20090422_410360.shtml",
  },
  {
    id: "bodyfirst",
    text: "BodyFirst Quest, Mindvalley — beginner total-fitness program (mobility, prehab, and fitness).",
    href: "https://www.mindvalley.com/body-first",
  },
];

const { Ref, References } = makeCitations(refs);

export default function HomePage() {
  return (
    <>
      <PageHeading title="Lorenzo Delano" />

      <p className="lead">
        <strong>Lorenzo Delano</strong> (born 7 December 1987) is a South African{" "}
        <WikiLink href="/historical-context#employment">learning-systems designer</WikiLink>,
        health and behavioural coach, and taxonomist. He works at the intersection of
        three recurring roles — <em>designer</em>, <em>practitioner</em>, and{" "}
        <em>teacher</em> — designing systems to solve his own problems, testing them in
        practice, and then sharing them with others. He has done this continuously since
        leaving formal schooling at age&nbsp;13.
      </p>

      <p>
        Delano is best known for co-creating the{" "}
        <WikiLink href="https://www.mindvalley.com/10x/quest">10X Fitness</WikiLink> method
        and Quest, a single-set-to-failure training protocol completed by more than
        90,000&nbsp;people<Ref id="10x-quest" />, and for designing online courses and
        learning frameworks for thinkers including Ken Wilber, Alan Watts (estate), Neale
        Donald Walsch, Steven Kotler, and Ben Greenfield. In 2009 he represented South
        Africa in the international &ldquo;Chinese Bridge&rdquo; language competition
        <Ref id="chinese-bridge" />.
      </p>

      <h2 id="about">About</h2>
      <p>
        Delano is a perpetual student of self-mastery. He designs{" "}
        <strong>taxonomies</strong> (knowledge maps) to learn and to solve personal
        problems, tests those designs in his own practice, and then shares them as content.
        His work profile does not fit the usual boxes: not a long-term employee and not a
        business owner by temperament, he is a project-based problem solver who goes all-in
        on a clear vision and moves on once the problem is solved.
      </p>
      <p>
        He thinks in terms of <strong>ASHEN</strong> — the artefacts, skills, habits and
        heuristics, experience, and natural talent that make up what a person can actually
        do. This site is organised that way: not impressive aesthetics and social proof,
        but an accurate, contextual timeline that shows true causality. See{" "}
        <WikiLink href="#why">why this site exists</WikiLink>.
      </p>

      <h2 id="roles">Roles</h2>
      <p>Delano moves between a handful of dominant roles:</p>
      <ul>
        <li>
          <strong>Designer</strong> — learning systems (taxonomies, apprenticeships,
          instructional and enterprise education products), lifestyle, and exercise.
        </li>
        <li>
          <strong>Taxonomist</strong> — building knowledge maps that organise a domain
          into something teachable.
        </li>
        <li>
          <strong>Director</strong> — productions and events (online courses, filmed
          curricula, and live experiences).
        </li>
        <li>
          <strong>Coach</strong> — athletics, life, and health, solo through to
          organisational.
        </li>
        <li>
          <strong>Instructor and facilitator</strong> — private and group classes,
          workshops, and apprenticeships.
        </li>
      </ul>

      <h2 id="contact">How Delano can help you</h2>
      <p>
        Everything below is something Delano has <em>actually done</em> — for himself and
        for others. People do not hire for &ldquo;the best&rdquo;; they hire for
        consistency, predictability, proximity, and relatability. If any of it is useful to
        you, reach out — you can <strong>employ, contract, hire, invite, or simply
        contact</strong> him.
      </p>
      <ul>
        <li>Home interventions and personal optimisation</li>
        <li>
          Wellness events, gym advisory, and fitness experiments<Ref id="bodyfirst" />
        </li>
        <li>Behavioural coaching — solo, couples, families, and organisational</li>
        <li>Education productions and learning experiences (theory and practice)</li>
        <li>Career counselling and knowledge frameworks</li>
      </ul>
      <p>
        <WikiLink href="mailto:lorenzo@lorenzodelano.com">
          lorenzo@lorenzodelano.com
        </WikiLink>
      </p>

      <h2 id="why">Why a site like this</h2>
      <p>
        It is too easy to lie or hide one&rsquo;s true ontology and epistemology behind
        impressive aesthetics and conditioned social proof. An accurate, contextual
        timeline shows true causality — how a person actually came to think and act.
        Delano is building this as a living database of himself: what he is, what he has
        done, and where he is going. The profile box summarises what he is; from there, see
        the <WikiLink href="/current-status">current status</WikiLink>, the{" "}
        <WikiLink href="/historical-context">historical context</WikiLink>, or the{" "}
        <WikiLink href="/future-trajectory">future trajectory</WikiLink>.
      </p>

      <References />
    </>
  );
}
