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
            ["", "I was issued a body before anything was done with it", false],
            ["Sex", "Male (XY)", true],
            ["Blood type", "O negative", true],
            ["Haplogroups", "Y-DNA and mtDNA pending", true],
            ["Eyes", "Blue", true],
            ["Hair", "Brown", true],
            ["Height", "1.76 m", true],
          ],
        },
        {
          category: "Genotype (molecular)",
          metrics: [
            ["", "I carry variants I did not select and cannot return", false],
            [
              "APOE",
              "\u03b53/\u03b53 (rs429358 TT; rs7412 CC) \u2014 the most common genotype; neither the \u03b54 risk allele nor the \u03b52 protective one",
              true,
            ],
            [
              "ACTN3",
              "R/X (rs1815739 CT) \u2014 one working copy of the fast-twitch protein; the mixed power-endurance genotype",
              true,
            ],
            [
              "Lactase",
              "Persistent (rs4988235 AG) \u2014 dairy digestible into adulthood",
              true,
            ],
            [
              "Alcohol metabolism",
              "Typical (rs671 GG) \u2014 no aldehyde flush response",
              true,
            ],
            [
              "Ancestry composition",
              "European 94.8%; Sub-Saharan African 2.2%; Central and South Asian 1.9%; Melanesian 0.7%",
              true,
            ],
            [
              "European detail",
              "Belgian, Rhinelander and Southern Dutch 46.9%; Dutch and Northern German 34.5%; Austrian and Southern German 5.0%; French 4.0%; Nordic 1.8%; Iberian 1.7%",
              true,
            ],
            [
              "Admixture timing",
              "The non-European segments date to roughly 1750\u20131840 \u2014 the Cape pattern, and within a half-percent of the Afrikaner population mean",
              true,
            ],
            ["Source", "23andMe v5; 631,991 markers; February 2022", true],
          ],
        },
        {
          category: "Descent (familial)",
          metrics: [
            ["", "Each relative is one entry, named only where consent is mine to give", false],
            [
              "Mother",
              "Riz\u00e9l Delano (born 1966). Living; no cardiac, neurological, oncological, or metabolic history. Major trauma at 17",
              true,
            ],
            [
              "Father",
              "Cornelius Coenraad Roos (born 1965). Living; history not available",
              true,
            ],
            [
              "Brother",
              "Died at 18 of septic shock following neutropenia",
              true,
            ],
            ["Birth order", "Second of two", true],
            [
              "Maternal grandfather",
              "Died at 73 of myocardial infarction; gout from 50; renal calculi. Heavy smoker to 50; daily spirits until death",
              true,
            ],
            [
              "Maternal grandmother",
              "Died at 57 of pulmonary fibrosis secondary to rheumatoid arthritis (RA-ILD); type 2 diabetes; RA from 44. Heavy smoker to 43; daily alcohol until death",
              true,
            ],
            [
              "Maternal uncle",
              "Died at 60 of bone cancer of the cervical spine; occupational pesticide exposure",
              true,
            ],
            [
              "Maternal uncle",
              "Died at 4 of bronchopneumonia",
              true,
            ],
            [
              "Maternal aunt",
              "Living; type 2 diabetes; obstructive sleep apnoea from 54. Neither smoker nor drinker",
              true,
            ],
            [
              "Maternal great-grandfather",
              "Died at 85 of hepatosplenic disease; type 1 diabetes. Smoker from 11 to 55",
              true,
            ],
            [
              "Maternal great-grandmother",
              "Died at 89; cause not recorded",
              true,
            ],
            [
              "Paternal grandparents",
              "History pending",
              true,
            ],
            [
              "Pattern",
              "Two generations of heavy tobacco and alcohol on the maternal line; type 2 diabetes in three relatives; no cardiac or neurodegenerative disease before 70",
              true,
            ],
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
            ["Name at birth", "Lorenzo Roos", true],
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
