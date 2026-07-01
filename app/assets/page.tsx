import type { Metadata } from "next";
import PageHeading from "@/components/PageHeading";

export const metadata: Metadata = { title: "Assets" };

export default function AssetsPage() {
  return (
    <>
      <PageHeading title="Assets" hatnote={<>The present — what he has</>} />

      <h2 id="socioeconomic">Socioeconomic</h2>
      <p className="lead">
        Delano&rsquo;s socioeconomic standing — the entities he owns and the way his work
        earns.
      </p>
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
    </>
  );
}
