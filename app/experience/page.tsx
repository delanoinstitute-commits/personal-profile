import type { Metadata } from "next";
import PageHeading from "@/components/PageHeading";
import WikiLink from "@/components/WikiLink";

export const metadata: Metadata = { title: "Experience" };

export default function ExperiencePage() {
  return (
    <>
      <PageHeading title="Experience" hatnote={<>The past — what he has done</>} />

      <p className="lead">
        A record of paid work, contracts, ventures, and creative output — the raw capacity
        behind the <WikiLink href="/skills">skills</WikiLink>.
      </p>

      <h2 id="employment">Employment</h2>
      <p>
        Early jobs ranged from mall magician and skate-shop assistant to DVD-store manager
        and English teacher in China. Delano waited tables and later managed Java café in
        Pretoria, instructed spinning at Virgin Active, and coached at Ballistix CrossFit,
        while lecturing part-time at ETA College. His one conventional salaried role was as a{" "}
        <strong>marketing specialist at Mindvalley</strong> (2016–17) before he moved to
        contract work.
      </p>

      <h2 id="self-employment">Self-employment</h2>
      <p>
        Since 2017 Delano has worked primarily on contract as a learning-systems designer and
        production director — most extensively with Mindvalley. Notable work includes
        designing and directing online courses for <strong>Ken Wilber, Alan Watts (estate),
        Neale Donald Walsch, Steven Kotler, Ben Greenfield, and John Demartini</strong>;
        running 10X fitness experiments and events across Malaysia, Italy, Estonia, and
        Croatia; speaking engagements; and private live-in interventions for Gerard Butler,
        Naveen Jain, and others.
      </p>

      <h2 id="business">Business</h2>
      <ul>
        <li>
          <strong>Quantum Physiques / Wi-move</strong> — Pretoria gym, co-founded 2011.
        </li>
        <li>
          <strong><WikiLink href="https://artrepreneurs.co.za/">Artrepreneurs</WikiLink></strong>{" "}
          — digital marketing agency, 2015.
        </li>
        <li>
          <strong>Eudaemonia, Inc.</strong> — US C-Corp, registered 1 August 2019.
        </li>
        <li>
          <strong>Erfaring (Pty) Ltd</strong> — real-estate venture, registered 24 October
          2024.
        </li>
        <li>
          <strong>Products co-created:</strong>{" "}
          <WikiLink href="https://www.mindvalley.com/10x/quest">10X Quest</WikiLink>,{" "}
          <WikiLink href="https://www.mindvalley.com/certs/10x">10X Coach Certification</WikiLink>,{" "}
          <WikiLink href="https://www.mindvalley.com/body-first">BodyFirst Quest</WikiLink>, and the SuperStudents and Mastery frameworks.
        </li>
      </ul>

      <h2 id="creative">Creative</h2>
      <p>
        Short kung-fu films (2006); the free YouTube{" "}
        <WikiLink href="https://youtube.com/playlist?list=PLkxFhm6Fhw9qCpUj7zoLbLQ4OvAQzRAYQ">10X method series</WikiLink>{" "}
        (2020); a recurring practice of building original taxonomies and frameworks (the RBG
        method, the LX-design model, a philosophy of health); and the 2026 series of five
        taxonomical video courses on training and life management.
      </p>
      <h4>Testimonials and artefacts</h4>
      <ul>
        <li>
          <WikiLink href="https://stories.mindvalley.com/product/mindvalley-certified-10x-coach">10X Coach stories</WikiLink>
        </li>
        <li>
          <WikiLink href="https://stories.mindvalley.com/product/10x-fitness">10X Quest stories</WikiLink>
        </li>
        <li>
          <WikiLink href="https://stories.mindvalley.com/product/body-first">BodyFirst stories</WikiLink>
        </li>
        <li>
          <WikiLink href="https://youtu.be/8p5pAPpmy1o">Norton family testimonial</WikiLink>
        </li>
        <li>
          <WikiLink href="https://youtu.be/WBfb7Trl3JY">Zenas &amp; Sandra video testimonial</WikiLink>
        </li>
      </ul>
    </>
  );
}
