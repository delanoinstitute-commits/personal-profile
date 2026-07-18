import type { Metadata } from "next";
import PageHeading from "@/components/PageHeading";

export const metadata: Metadata = { title: "Lifestyle" };

export default function LifestylePage() {
  return (
    <>
      <PageHeading title="Lifestyle" hatnote={<>The present — how he lives</>} />

      <h2 id="behavioral">Behavioral</h2>
      <p className="lead">
        How Delano actually spends a day: a tightly structured schedule built around deep
        work, training, and study, with a clean diet and no stimulants beyond coffee.
      </p>
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
          Walks daily (~7,000 steps, 45–60 minutes); gymnastics 5×/week (mobility,
          stability, and strength); metabolic conditioning 1–2×/week.
        </dd>
        <dt>Education</dt>
        <dd>Studies science daily (YouTube, Khan Academy).</dd>
        <dt>Smoking and drinking</dt>
        <dd>Lifelong non-smoker; teetotaller (drunk perhaps five times ever).</dd>
      </dl>
    </>
  );
}
