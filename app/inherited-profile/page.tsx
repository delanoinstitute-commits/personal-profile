import type { Metadata } from "next";
import PageHeading from "@/components/PageHeading";
import Tooltip from "@/components/Tooltip";

export const metadata: Metadata = { title: "Inherited profile" };

export default function InheritedProfilePage() {
  return (
    <>
      <PageHeading
        title="Inherited profile"
        hatnote={<>What I am — the given facts I did not choose</>}
      />

      <p>
        This page records the inherited layer of identity: the legal, cultural, and
        biological facts that were given rather than chosen. The same data is summarised
        in the infobox to the right. For what I&rsquo;ve made of these starting
        conditions, see <a href="/current-status" className="wikilink">current status</a>{" "}
        and <a href="/historical-context" className="wikilink">historical context</a>.
      </p>

      <h2 id="legal">Legal</h2>
      <dl>
        <dt>Full name</dt>
        <dd>
          Lorenzo Delano — changed from &ldquo;Maritz&rdquo; to &ldquo;Delano&rdquo;,
          effective 1 December 2009.
        </dd>
        <dt>Date of birth</dt>
        <dd>7 December 1987 (age 39), born in Krugersdorp, South Africa.</dd>
        <dt>Citizenship &amp; residency</dt>
        <dd>South African citizen; resident in the United States.</dd>
        <dt>Parents</dt>
        <dd>Rizel Delano (mother) and Neels Roos (father).</dd>
        <dt>Sibling</dt>
        <dd>
          Jean Piere van den Berg (brother), deceased 10 March 2004.
        </dd>
        <dt>Partner</dt>
        <dd>Jelena Lakic.</dd>
        <dt>Children</dt>
        <dd>None.</dd>
      </dl>

      <h2 id="cultural">Cultural</h2>
      <dl>
        <dt>Ancestry</dt>
        <dd>Western European — Belgian, Dutch, and German.</dd>
        <dt>Ethnicity</dt>
        <dd>Afrikaans.</dd>
        <dt>Languages</dt>
        <dd>
          English (first language), Afrikaans (native), and Mandarin Chinese — the last
          studied formally and competed in internationally.
        </dd>
      </dl>

      <h2 id="biological">Biological</h2>
      <dl>
        <dt>Sex</dt>
        <dd>Male.</dd>
        <dt>Phenotype</dt>
        <dd>Caucasian; blue eyes, brown hair, medium build.</dd>
        <dt>Genetic markers</dt>
        <dd>
          Blood type O negative;{" "}
          <Tooltip content="Apolipoprotein E genotype — the ε3/ε3 pairing is the most common and is considered neutral for Alzheimer's risk.">
            <span className="cursor-help border-b border-dotted border-[#72777d]">
              APOE ε3/ε3
            </span>
          </Tooltip>
          ;{" "}
          <Tooltip content="Lipoprotein(a) — a largely genetic cardiovascular risk marker. 10 nmol/L is very low (low risk).">
            <span className="cursor-help border-b border-dotted border-[#72777d]">
              Lp(a) 10 nmol/L
            </span>
          </Tooltip>
          .
        </dd>
        <dt>Personality (Big Five percentiles)</dt>
        <dd>
          Openness 49 · Conscientiousness 96 · Extraversion 29 · Agreeableness 30 ·
          Neuroticism 1. In short: extremely conscientious and emotionally steady,
          introverted, and low on agreeableness — a builder who questions consensus.
        </dd>
        <dt>Cognitive</dt>
        <dd>Measured IQ 110.</dd>
        <dt>Worldview</dt>
        <dd>Rational optimist.</dd>
      </dl>
    </>
  );
}
