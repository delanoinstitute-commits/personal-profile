import type { Metadata } from "next";
import PageHeading from "@/components/PageHeading";

export const metadata: Metadata = { title: "Future trajectory" };

export default function FutureTrajectoryPage() {
  return (
    <>
      <PageHeading
        title="Future trajectory"
        hatnote={<>Where to next — growth and intended impact</>}
      />

      <p>
        I&rsquo;m currently immigrating to the United States and looking for the next
        company, partner, or investor who can make the most of what I do. This page states
        where I&rsquo;m headed — personally and in terms of the impact I want to have.
      </p>

      <h2 id="personal">Personal (growth)</h2>
      <h4>Vision</h4>
      <p>
        Become one of the most knowledgeable people in the world — and use that to build
        the ultimate, universal curriculum: the minimum, most comprehensive body of
        knowledge every human should study and know.
      </p>
      <h4>Active threads</h4>
      <ul>
        <li>
          Codifying a system for <strong>taxonomical design</strong> — how to organise any
          body of knowledge into something teachable.
        </li>
        <li>
          Completing an integrated <strong>exercise/fitness taxonomy</strong> and a
          complete bodyweight physical-development program.
        </li>
        <li>
          Going deep into <strong>chemistry</strong> (organic chemistry) to round out a
          scientific foundation built up over several years.
        </li>
        <li>
          The six domains of self-mastery — <strong>train, eat, finance, learn, mind,
          plan</strong> — as a single, coherent operating system for a life.
        </li>
      </ul>

      <h2 id="social">Social (impact)</h2>
      <p>
        I want to help expand consciousness — directly, or by helping people do it for
        themselves. It&rsquo;s a tragedy for a high-potential individual to be held back by
        the drudgery of maintenance; good systems should free people for higher work.
      </p>
      <p>
        More concretely: to be part of solving the <strong>meaning crisis</strong> by
        offering the best personal-development education and experiences — rigorous,
        honest, and genuinely useful rather than aesthetic and performative.
      </p>
    </>
  );
}
