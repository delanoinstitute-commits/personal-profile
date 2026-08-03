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
            ["Genotype (4)", "APOE (\u03b53/\u03b53; baseline Alzheimer\u2019s risk), ACTN3 (R/X; mixed power-endurance), lactase (persistent), and alcohol metabolism (ALDH2 typical; no flush response)", true],
            ["Phenotype (5)", "Sex (male; XY), blood type (O negative), eyes (blue), hair (brown), and height (1.76 m)", true],
            ["Ancestry (2)", "Composition (94.8% European; 2.2% Sub-Saharan African; 1.9% Central and South Asian; 0.7% Melanesian), European detail (Belgian, Rhinelander and Southern Dutch 46.9%; Dutch and Northern German 34.5%; Austrian and Southern German 5.0%; French 4.0%)", true],
          ],
        },
        {
          category: "Descent (familial)",
          metrics: [
            ["", "Grouped by generation, named only where consent is mine to give", false],
            ["Parents (2)", "Mother (living; no cardiac, neurological, oncological, or metabolic history; major trauma at 17) and father (living; history not available)", true],
            ["Siblings (1)", "Brother (died at 18 of necrotising pneumonia with multiple lung abscesses; respiratory failure, septic shock, and DIC; Streptococcus milleri and Escherichia coli, both sensitive to the antibiotics given; recurrent tonsillitis; IgG and IgM below reference range)", true],
            ["Grandparents (3)", "Maternal grandfather (died at 73 of myocardial infarction; gout from 50; renal calculi; heavy smoker to 50, daily spirits until death), maternal grandmother (died at 57 of pulmonary fibrosis secondary to rheumatoid arthritis; type 2 diabetes; RA from 44; heavy smoker to 43, daily alcohol until death), and paternal grandparents (history unavailable)", true],
            ["Extended (3)", "Maternal uncle (died at 60 of bone cancer of the cervical spine; occupational pesticide exposure), maternal uncle (died at 4 of bronchopneumonia), and maternal aunt (living; type 2 diabetes; obstructive sleep apnoea from 54; neither smoker nor drinker)", true],
            ["Great-grandparents (2)", "Maternal great-grandfather (died at 85 of hepatosplenic disease; type 1 diabetes; smoker from 11 to 55) and maternal great-grandmother (died at 89; cause not recorded)", true],
          ],
        },
      ],
    },
    {
      domain: "Sociological Identity",
      label: "",
      rows: [
        {
          category: "Circumstance (social)",
          metrics: [
            ["", "I was handed a state, a people, and an era, and consulted about none of them", false],
            ["Civic (3)", "Born (7 December 1987; Krugersdorp, Gauteng), citizenship (South African), and name (Lorenzo Roos at birth; Maritz from 1996, a stepfather\u2019s)", true],
            ["Cultural (3)", "Ethnicity (Afrikaner), language (Afrikaans first; English second), and religion of origin (Dutch Reformed; the NG Kerk)", true],
            ["Historical (4)", "Political era (apartheid under a nationwide State of Emergency at birth; democracy from 1994, age six), geopolitical era (the Cold War ending; the Soviet collapse took apartheid\u2019s anti-communist justification with it), generation (Gen-Y; 1981\u20131996), and technological era (pre-internet childhood; no private mobile network in the country until I was six)", true],
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
          category: "Early childhood (age 0–6)",
          metrics: [
            ["", "I absorbed a world I had no means of evaluating", false],
            ["1987 (birth)", "Places (the household in Sunward Park); people (a mother of 21, a father of 19 managing at Joshua Doore, a brother two years ahead); events (born 7 December in Krugersdorp); activities (rocking rhythmically, since birth and still)", true],
            ["1990 (age 3)", "Places (four households — Little Falls, a flat in Kenmare, the farm, then Witpoortjie); people (my parents divorced on 21 September); events (started pre-primary with my brother)", true],
            ["1991–1993 (ages 4–6)", "Places (the Witpoortjie house sold; back to Kenmare); people (a new partner of my mother’s); events (she started a construction business; the farm dog bit my head open; a fall down a three-step drop broke my left arm)", true],
          ],
        },
        {
          category: "Middle-late childhood (age 7–13)",
          metrics: [
            ["", "I began testing the world against itself", false],
            ["1994–1996 (ages 7–9)", "Places (back to the farm; Muldersdrift Primary; Roodekrans from 1996); people (my grandmother, nursed by my mother, died at 57 in 1995); events (the Mortal Kombat film released in 1995); activities (a Super Nintendo, played daily)", true],
            ["1997 (age 10)", "Places (Evander; Laerskool Hoëveld); people (my mother met my stepfather in Standerton); events (a child killed running into the road in front of her car; a motorcycle accident cost her a finger; the construction business closed); activities (gymnastics for six months)", true],
            ["1998 (age 11)", "People (a first close school friend); events (a dog ran in front of my bicycle; the straddle injury led to an orchiectomy); activities (cycling everywhere; a SEGA console); responses (played Mortal Kombat 3 daily and took up skateboarding)", true],
            ["1999–2000 (ages 12–13)", "Places (the skateparks at Edenvale and Thrashers; a short spell at Secunda High); people (my mother and stepfather married on 3 August 1999); events (they adopted my brother and me; a skateboarding fall broke my right forearm, plated)", true],
          ],
        },
        {
          category: "Adolescence (age 14–19)",
          metrics: [
            ["", "I left formal schooling and started answering for myself", false],
            ["2001–2002 (ages 14–15)", ["Places (Sunward Park when my mother left my stepfather; briefly Evander; then Garsfontein, Pretoria); people (three friends met at Thrashers skatepark); events (9/11; homeschooling with ", <WikiLink key="intec" href="/knowledge#education">INTEC College</WikiLink>, "); responses (dropped formal schooling entirely in 2002)"], true],
            ["2003 (age 16)", "Places (Glen Park apartments, Waterkloof Glen); people (my mother working at Virgin Active Menlyn); events (first job performing magic at a kiosk in Menlyn Park Mall, then Sidewalk Surfer through my brother); activities (using her gym access to get online)", true],
            ["2004 (age 17)", ["Places (Kempton Park, then Tipperary Mews, Pretoria; Shijiazhuang, China, from October); people (my brother died on 9 March; Shi Fu Yang Long Fei, my first mentor, at Tang Lang Cuan Wushu); activities (", <WikiLink key="tefl04" href="/knowledge#works">teaching English in China</WikiLink>, "; running); responses (dropped skateboarding for kung fu; Warrior Within returned me to reading)"], true],
            ["2005 (age 18)", ["Places (in with a friend’s family; my mother to Rustenburg, then KwaZulu-Natal); people (my grandfather died in February; my kung-fu teacher left for New York); activities (waiting tables at Java; weekly ", <WikiLink key="mand" href="/knowledge#education">Mandarin at the Pretoria Chinese School</WikiLink>, "); responses (took on the Christian values of the household I lived in)"], true],
            ["2006 (age 19)", ["Places (Ballinderry in Garsfontein, where a break-in left my mother assaulted); people (my first girlfriend; Jaco van der Merwe of Bittereinder, who taught me to drive); activities (the Adidas outlet; gym, squash, races; ", <WikiLink key="tefl" href="/knowledge#education">TEFL certification</WikiLink>, "); responses (wrote and directed short kung-fu films after Tao of Jeet Kune Do)"], true],
          ],
        },
      ],
    },
    {
      domain: "Adult Years",
      label: "",
      rows: [
        {
          category: "Emerging adulthood (age 20–29)",
          metrics: [
            ["", "I traded instruction for trial and error at full cost", false],
            ["2007–2008 (ages 20–21)", ["Places (China twice more to teach English; in with a friend’s family in Pretoria); people (met ", <WikiLink key="brad" href="https://www.movefreely.co.za">Brad Openshaw</WikiLink>, ", who became my best friend and business partner); activities (managing ", <WikiLink key="java" href="/knowledge#works">Java</WikiLink>, "; sprinting at TUKS; yoga; a fitness-trainer certificate at ", <WikiLink key="eta" href="/knowledge#education">ETA College</WikiLink>, "); responses (Tony Robbins and NLP began unsettling my Christian faith)"], true],
            ["2009 (age 22)", ["Places (still with a friend’s family in Pretoria); events (placed first nationally at the ", <WikiLink key="cb" href="/knowledge#education">Chinese Bridge competition</WikiLink>, " in April, then represented South Africa among 130 countries in China in September; certified as a massage therapist; ", <WikiLink key="nm" href="/story#emergence">changed my surname from Maritz to Delano</WikiLink>, " on 1 December)"], true],
            ["2010 (age 23)", ["People (certified in NLP and life coaching under Robert Simic at Evolved Coaching); events (recruited to coach at ", <WikiLink key="bx" href="/knowledge#works">Ballistix</WikiLink>, "; competed at the CrossFit Africa regionals); responses (left the church as the dissonance became unbearable; began teaching CrossFit classes from a friend’s house)"], true],
            ["2011–2012 (ages 24–25)", ["Places (Quantum Physiques, a pop-up gym in Menlo Park); people (", <WikiLink key="jl" href="https://www.jelenalakic.com/">Jelena Lakic</WikiLink>, ", who became my partner, joined as a client); activities (running the gym from five to ten each morning; a year of vegetarianism); responses (Neale Donald Walsch’s Conversations with God, sent by my mother)"], true],
            ["2013–2014 (ages 26–27)", "Events (the gym became Wi-move, then I sold it back to my partner; two weeks in China sourcing equipment); responses (Mark Sisson’s Primal Blueprint ended the vegetarianism; Doug McGuff’s Body by Science moved me to minimum-effective-dose training; Ken Wilber redirected me toward education)", true],
            ["2015–2016 (ages 28–29)", ["Places (New York, Los Angeles and San Francisco from October 2015; Kuala Lumpur from May 2016); people (interviewed John Demartini and Tim Noakes; hired by ", <WikiLink key="mv" href="https://www.mindvalley.com/">Mindvalley</WikiLink>, "); events (sold my belongings and left South Africa; Jelena and I separated); responses (studied marketing and software after applications went nowhere)"], true],
          ],
        },
        {
          category: "Established adulthood (age 30–44)",
          metrics: [
            ["", "I stopped searching for a method and started running one", false],
            ["2017 (age 30)", ["Places (back to South Africa from Kuala Lumpur; Barcelona for a four-week trial); events (quit marketing at Mindvalley and was rehired as a learning designer; ", <WikiLink key="tenx" href="/knowledge#works">10X</WikiLink>, " named and born at Mindvalley-U); responses (built the first courses with Ken Wilber and Neale Donald Walsch)"], true],
            ["2018–2019 (ages 31–32)", "Places (Sardinia, Tallinn, Croatia, Denver, Spokane); people (designed courses with Ben Greenfield, Steven Kotler and Ken Wilber; a live-in training intervention for Gerard Butler); events (moved in with Jelena and her children as a family; registered my first US company); responses (started studying science in earnest)", true],
            ["2020–2021 (ages 33–34)", ["Places (Seattle, Costa Rica, then home days before the lockdown; Camps Bay from March 2021); events (codified the ", <WikiLink key="m10x" href="/knowledge#works">10X method</WikiLink>, " and published it free; the ", <WikiLink key="quest" href="/knowledge#works">10X Quest</WikiLink>, " launched, since completed by over 90,000 people); activities (certified in nutritional biochemistry, then blood chemistry analysis)"], true],
            ["2022–2023 (ages 35–36)", ["Places (Spokane to produce a course; a Camps Bay house from April 2023); events (launched the ", <WikiLink key="cert" href="/knowledge#works">10X coach certification</WikiLink>, " to 500 coaches; my highest-paying contract, as a learning systems designer); responses (Demartini’s five-day method, the most transformative training we had done)"], true],
            ["2024 (age 37)", ["Events (brokered, designed and directed the ", <WikiLink key="vf" href="/knowledge#works">Values Factor course</WikiLink>, " with John Demartini; produced the ", <WikiLink key="bf" href="/knowledge#works">BodyFirst Quest</WikiLink>, "; registered Erfaring, a property company; left Mindvalley and sold my 10X company shares); responses (studied Daniel Lieberman and lifespan development)"], true],
            ["2025–2026 (ages 38–39)", ["Places (Val de Vie, Paarl, from September 2025); people (Jelena and I ended the romance and stayed friends; my mother moved in, then nearby); activities (", <WikiLink key="tax" href="/knowledge#works">five taxonomy course series</WikiLink>, " published free; organic chemistry); responses (rebuilt my exercise taxonomy with the time)"], true],
          ],
        },
        {
          category: "Middle adulthood (age 45–65)",
          metrics: [
            ["", "The years I intend to spend compounding what already works", false],
            ["Intent", "Places, people, activities, and events I mean to answer for — pending", true],
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
              "Delano since 2009 — taken at 21, over a birth surname and a stepfather’s",
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
