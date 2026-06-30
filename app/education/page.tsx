import type { Metadata } from "next";
import PageHeading from "@/components/PageHeading";

export const metadata: Metadata = { title: "Education" };

export default function EducationPage() {
  return (
    <>
      <PageHeading title="Education" hatnote={<>The past — what he studied</>} />

      <h2 id="academics">Academics</h2>
      <p className="lead">
        Delano left formal schooling at 13 and is largely self-taught, acquiring formal
        certifications as each new discipline demanded one.
      </p>
      <ul>
        <li>TEFL — English teaching (Language Link, 2006)</li>
        <li>Personal fitness trainer and spinning instructor (ETA College, 2008)</li>
        <li>Massage therapist, multiple modalities (2009)</li>
        <li>1st place, 8th &ldquo;Chinese Bridge&rdquo; international competition (2009)</li>
        <li>NLP / life-coaching practitioner (Evolved Coaching, 2010)</li>
        <li>Critical thinking (University of Auckland, 2018)</li>
        <li>Science of Exercise; Introduction to Philosophy (Coursera, 2019)</li>
        <li>Nutritional biochemistry (Dr Bryan Walsh, 2021)</li>
        <li>Functional blood-chemistry analyst (ODX Academy, 2021)</li>
        <li>Peter Attia&rsquo;s &ldquo;Early&rdquo; longevity program (2023)</li>
        <li>15 courses, Corporate Finance Institute (2024)</li>
      </ul>
      <p>
        Alongside the certifications, Delano studies continuously — chemistry, lifespan
        development, finance and valuation (Aswath Damodaran), and the science underlying
        his health and learning work.
      </p>
    </>
  );
}
