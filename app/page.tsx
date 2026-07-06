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
];

const { Ref, References } = makeCitations(refs);

export default function StartHerePage() {
  return (
    <>
      <PageHeading title="Lorenzo Delano" hatnote={<>Start here — about this site</>} />

      <h2 id="about">About</h2>
      <p className="lead">
        <strong>Lorenzo Delano</strong> (born 7 December 1987) is a South African{" "}
        <WikiLink href="/knowledge#skills">learning-systems designer</WikiLink>, health and
        behavioral coach, and taxonomist. He works at the intersection of three recurring
        roles — <em>designer</em>, <em>practitioner</em>, and <em>teacher</em> — designing
        systems to solve his own problems, testing them in practice, and then sharing them
        with others. He has done this continuously since leaving formal schooling at
        age&nbsp;13.
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
      <p>
        He designs <strong>taxonomies</strong> (knowledge maps) to learn and to solve
        personal problems, tests those designs in his own practice, and then shares them as
        content. His work profile does not fit the usual boxes: not a long-term employee and
        not a business owner by temperament, he is a project-based problem solver who goes
        all-in on a clear vision and moves on once the problem is solved. He thinks in terms
        of <strong>ASHEN</strong> — the artefacts, skills, habits and heuristics, experience,
        and natural talent that make up what a person can actually do.
      </p>

      <h3>Why a site like this</h3>
      <p>
        It is too easy to lie or hide one&rsquo;s true ontology and epistemology behind
        impressive aesthetics and conditioned social proof. An accurate, contextual timeline
        shows true causality — how a person actually came to think and act. This site is a
        living database of Delano, organized into four lenses: the{" "}
        <WikiLink href="/purpose">future</WikiLink> (where he is going), the{" "}
        <WikiLink href="/knowledge">present</WikiLink> (what he does, who he is, how he
        functions, what he has, and how he lives), and the{" "}
        <WikiLink href="/biography">past</WikiLink> (his story,
        education, and experience). The profile box summarizes what he is.
      </p>

      <h2 id="contact">Contact</h2>
      <p>
        Everything below is something Delano has <em>actually done</em> — for himself and
        for others. People do not hire for &ldquo;the best&rdquo;; they hire for
        consistency, predictability, proximity, and relatability. If any of it is useful to
        you, reach out — you can <strong>employ, contract, hire, invite, or simply
        contact</strong> him.
      </p>
      <ul>
        <li>Home interventions and personal optimization</li>
        <li>Wellness events, gym advisory, and fitness experiments</li>
        <li>Behavioral coaching — solo, couples, families, and organizational</li>
        <li>Education productions and learning experiences (theory and practice)</li>
        <li>Career counseling and knowledge frameworks</li>
      </ul>
      <p>
        <WikiLink href="mailto:lorenzo@lorenzodelano.com">
          lorenzo@lorenzodelano.com
        </WikiLink>
      </p>

      <References />
    </>
  );
}
