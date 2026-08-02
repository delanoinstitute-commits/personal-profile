import type { Metadata } from "next";
import PageHeading from "@/components/PageHeading";
import { NestedTable } from "@/components/NestedTable";
import type { StatTableData } from "@/components/StatTable";
import WikiLink from "@/components/WikiLink";

export const metadata: Metadata = { title: "Story" };

// A life read as a causal chain in three branches, assigned by when a fact
// became true: Inheritance (true at the instant of birth, no response possible),
// Development (administered over time, a response possible), Emergence (chosen
// against what the first two predicted). Every table runs exactly two bands,
// the site-wide taxonomy standard; Inheritance splits on transmission — down a
// germline (biological) or with a birth certificate (social). Development marks
// lived stages "Record" and unlived ones "Intent" so a plan is never mistaken
// for a fact. Genotype values are read from the raw 23andMe v5 export
// (631,991 markers, February 2022); ancestry from the 23andMe composition
// report (November 2025). The retired prose and era timeline live in git
// history and content/timeline.tsx.

const INHERITANCE: StatTableData = {
  title: "Inheritance",
  groups: [
    {
      domain: "Biological Identity",
      label: "",
      rows: [
        {
          category: "Constitution (individual)",
          metrics: [
            ["", "I was issued a body, and the code that wrote it, before anything was done with either", false],
            ["Genotype (4)", "APOE (\u03b53/\u03b53; the common genotype, baseline Alzheimer\u2019s risk), ACTN3 (R/X; one working fast-twitch copy, the mixed power-endurance genotype), lactase (persistent; dairy digestible into adulthood), and alcohol metabolism (ALDH2 typical; no flush response)", true],
            ["Phenotype (5)", "Sex (male; XY), blood type (O negative), eyes (blue), hair (brown), and height (1.76 m)", true],
            ["Ancestry (4)", "Composition (94.8% European; 2.2% Sub-Saharan African; 1.9% Central and South Asian; 0.7% Melanesian), European detail (Belgian, Rhinelander and Southern Dutch 46.9%; Dutch and Northern German 34.5%; Austrian and Southern German 5.0%; French 4.0%), admixture timing (non-European segments c. 1750\u20131840 \u2014 the Cape pattern, within a half-percent of the Afrikaner mean), and haplogroups (Y-DNA and mtDNA pending)", true],
          ],
        },
        {
          category: "Descent (familial)",
          metrics: [
            ["", "Grouped by generation, named only where consent is mine to give", false],
            ["Parents (2)", "Mother (living; no cardiac, neurological, oncological, or metabolic history; major trauma at 17) and father (living; history not available)", true],
            ["Siblings (1)", "Brother (died at 18 of necrotising pneumonia with multiple lung abscesses, progressing to respiratory failure, septic shock, and disseminated intravascular coagulation; cultures grew Streptococcus milleri and Escherichia coli, both sensitive to the antibiotics given; history of recurrent tonsillitis; serum IgG and IgM below reference range \u2014 autopsy, 2004). I was second of two", true],
            ["Grandparents (3)", "Maternal grandfather (died at 73 of myocardial infarction; gout from 50; renal calculi; heavy smoker to 50, daily spirits until death), maternal grandmother (died at 57 of pulmonary fibrosis secondary to rheumatoid arthritis; type 2 diabetes; RA from 44; heavy smoker to 43, daily alcohol until death), and paternal grandparents (history pending)", true],
            ["Extended (3)", "Maternal uncle (died at 60 of bone cancer of the cervical spine; occupational pesticide exposure), maternal uncle (died at 4 of bronchopneumonia), and maternal aunt (living; type 2 diabetes; obstructive sleep apnoea from 54; neither smoker nor drinker)", true],
            ["Great-grandparents (2)", "Maternal great-grandfather (died at 85 of hepatosplenic disease; type 1 diabetes; smoker from 11 to 55) and maternal great-grandmother (died at 89; cause not recorded)", true],
            ["Pattern", "Two generations of heavy tobacco and alcohol on the maternal line; type 2 diabetes in three relatives; no cardiac or neurodegenerative disease before 70. The one first-degree signal is immunological \u2014 a sibling lost at 18 to an infection that stayed ahead of treatment it should have answered", true],
          ],
        },
      ],
    },
    {
      domain: "Sociological Identity",
      label: "",
      rows: [
        {
          category: "Civic (state)",
          metrics: [
            ["", "I was assigned a state, a date, and a legal status at birth", false],
            ["Born", "7 December 1987, Krugersdorp, Gauteng", true],
            ["Citizenship", "South African", true],
            [
              "Name",
              "Lorenzo Roos at birth; Maritz from 1996, with a stepfather — neither of them chosen",
              true,
            ],
          ],
        },
        {
          category: "Cultural (people)",
          metrics: [
            ["", "I was handed a people before I could evaluate them", false],
            ["Ethnicity", "Afrikaner", true],
            ["Language", "Afrikaans (first); English (second)", true],
            ["Religion of origin", "Pending", true],
          ],
        },
        {
          category: "Historical (era)",
          metrics: [
            ["", "I was born into a state that changed while I was in primary school", false],
            ["Political era", "Apartheid at birth; transition to democracy at age six (1994)", true],
            ["Generation", "Gen-Y (1981\u20131996)", true],
            ["Technological era", "A childhood before household internet; online from adolescence", true],
          ],
        },
      ],
    },
  ],
};

const DEVELOPMENT: StatTableData = {
  title: "Development",
  groups: [
    {
      domain: "Early Years",
      label: "",
      rows: [
        {
          category: "Early childhood (0–6)",
          metrics: [
            ["", "I absorbed a world I had no means of evaluating", false],
            ["Record", "Pending", true],
          ],
        },
        {
          category: "Middle-late childhood (7–13)",
          metrics: [
            ["", "I began testing the world against itself", false],
            ["Record", "Pending", true],
          ],
        },
        {
          category: "Adolescence (14–19)",
          metrics: [
            ["", "I left formal schooling and started answering for myself", false],
            ["Record", "Pending", true],
          ],
        },
        {
          category: "Emerging adulthood (20–29)",
          metrics: [
            ["", "I traded instruction for trial and error at full cost", false],
            ["Record", "Pending", true],
          ],
        },
      ],
    },
    {
      domain: "Adult Years",
      label: "",
      rows: [
        {
          category: "Established adulthood (30–44)",
          metrics: [
            ["", "I stopped searching for a method and started running one", false],
            ["Record", "Pending — in progress", true],
          ],
        },
        {
          category: "Middle adulthood (45–65)",
          metrics: [
            ["", "The years I intend to spend compounding what already works", false],
            ["Intent", "Pending", true],
          ],
        },
        {
          category: "Late adulthood (66–84)",
          metrics: [
            ["", "The years I intend to spend handing the work over", false],
            ["Intent", "Pending", true],
          ],
        },
        {
          category: "Old adulthood (85+)",
          metrics: [
            ["", "The years I intend to spend having been right about the rest", false],
            ["Intent", "Reach 120 in good health — the year 2107", true],
          ],
        },
      ],
    },
  ],
};

const EMERGENCE: StatTableData = {
  title: "Emergence",
  groups: [
    {
      domain: "Convictions",
      label: "",
      rows: [
        {
          category: "Positions (emergence)",
          metrics: [
            ["", "I hold what survived my own scrutiny, not what I was handed", false],
            [
              "Name",
              "Delano since 2009 — taken at 21, over a birth surname and a stepfather’s, neither of which I had picked",
              true,
            ],
            ["Record", "Pending", true],
          ],
        },
      ],
    },
    {
      domain: "Ventures",
      label: "",
      rows: [
        {
          category: "Undertakings (emergence)",
          metrics: [
            ["", "I built what nobody asked me to build", false],
            ["Record", "Pending", true],
          ],
        },
      ],
    },
  ],
};

export default function StoryPage() {
  return (
    <>
      <PageHeading
        title="Story"
        hatnote={<>The record — what I was given, what shaped me, and what I chose</>}
      />

      <p className="lead">
        A story is one life read three ways: what arrived without my consent
        (inheritance), what I was placed in and answered (development), and what I chose
        against both (emergence). Together they separate what happened to me from what I
        did about it.
      </p>
      <p>
        The order is causal rather than chronological, and a fact belongs to whichever
        branch its <em>timing</em> assigns it. Inheritance was true at the instant of
        birth, when no response was possible. Development was administered over years, so
        a response was possible but the terms were not mine. Emergence is what is left:
        the choices that neither the genome nor the upbringing predicts. Most of a life
        is the first two, which is the point — the interesting part is how little is
        genuinely the third, and how much it matters.
      </p>

      <h2 id="inheritance">
        Inheritance <span className="heading-paren">(Identity)</span>
      </h2>
      <p>
        What arrived without consent, in two registers divided by how it reached me:
        what came down a germline (biological) and what came with a birth certificate
        (sociological). None of it was chosen; all of it is load-bearing. Genotype and
        ancestry are read from raw sequencing rather than asserted, and the family health
        history is arranged as a clinical pedigree.
      </p>
      <NestedTable {...INHERITANCE} />

      <h2 id="development">
        Development <span className="heading-paren">(Timeline)</span>
      </h2>
      <p>
        The years themselves, in two halves — the ones that formed me (early) and the
        ones I spend as a formed adult (adult). Lived stages carry a{" "}
        <strong>record</strong>; stages I have not reached carry an{" "}
        <strong>intent</strong>, so that a plan is never mistaken for a fact.
      </p>
      <NestedTable {...DEVELOPMENT} />

      <h2 id="emergence">
        Emergence <span className="heading-paren">(Personal)</span>
      </h2>
      <p>
        What is left once inheritance and development are subtracted: the choices no
        circumstance accounts for, in two registers — what I decided was true
        (convictions) and what I decided to build (ventures). The test is whether the
        first two branches would have predicted it. Where they would, it is not here; it
        sits under the branch that explains it, or under{" "}
        <WikiLink href="/lifestyle">lifestyle</WikiLink> as a habit.
      </p>
      <NestedTable {...EMERGENCE} />
    </>
  );
}
