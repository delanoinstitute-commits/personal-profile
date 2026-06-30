import type { Metadata } from "next";
import PageHeading from "@/components/PageHeading";

export const metadata: Metadata = { title: "Purpose" };

export default function PurposePage() {
  return (
    <>
      <PageHeading
        title="Purpose"
        hatnote={<>The future — the problems he cares about</>}
      />

      <p className="lead">
        Delano is immigrating to the United States and looking for the next company,
        partner, or investor who can make the most of what he does. This page states where
        he is headed — individually, and in terms of the social impact he wants to have.
      </p>

      <h2 id="individual">Individual</h2>
      <h4>Vision</h4>
      <p>
        To become one of the most knowledgeable people in the world — and to use that to
        build the ultimate, universal curriculum: the minimum, most comprehensive body of
        knowledge every human should study and know.
      </p>
      <h4>Active threads</h4>
      <ul>
        <li>
          Codifying a system for <strong>taxonomical design</strong> — how to organise any
          body of knowledge into something teachable.
        </li>
        <li>
          Completing an integrated <strong>exercise and fitness taxonomy</strong> and a
          complete bodyweight physical-development program.
        </li>
        <li>
          Going deep into <strong>organic chemistry</strong> to round out a scientific
          foundation built up over several years.
        </li>
        <li>
          The six domains of self-mastery — <strong>train, eat, finance, learn, mind, and
          plan</strong> — as a single, coherent operating system for a life.
        </li>
      </ul>

      <h2 id="social">Social</h2>
      <p>
        Delano wants to help expand consciousness — directly, or by helping people do it
        for themselves. It is a tragedy for a high-potential individual to be held back by
        the drudgery of maintenance; good systems should free people for higher work.
      </p>
      <p>
        More concretely: to be part of solving the <strong>meaning crisis</strong> by
        offering the best personal-development education and experiences — rigorous, honest,
        and genuinely useful rather than aesthetic and performative.
      </p>
    </>
  );
}
