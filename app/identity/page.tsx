import type { Metadata } from "next";
import PageHeading from "@/components/PageHeading";
import WikiLink from "@/components/WikiLink";
import { StatTable, type StatTableData } from "@/components/StatTable";
import { References, type Reference } from "@/components/References";

export const metadata: Metadata = { title: "Identity" };

// The mind in the trilogy: Intellect (cognition), Character (affect), Drive
// (conation). Six sub-branches, one gold-standard instrument each; every leaf
// is a composite (roman) over its components (italic). The 4th element on a
// metric is a hover definition. "pending" / "—" = not yet taken.

const INTELLECT: StatTableData = {
  title: "Intellect",
  groups: [
    {
      domain: "Aptitude",
      label: "Full RIOT IQ (percentile)",
      rows: [
        {
          category: "Intelligence (processing power)",
          metrics: [
            ["PROFILE", "pending", false, "Full-Scale IQ — overall general cognitive ability, the g-loaded composite of the six abilities below."],
            ["Working memory", "—", true, "Holding and manipulating information in mind."],
            ["Processing speed", "—", true, "How quickly you take in and respond to information."],
            ["Fluid reasoning", "—", true, "Solving novel problems without relying on prior knowledge."],
            ["Spatial ability", "—", true, "Reasoning about shapes, space, and visual relationships."],
            ["Verbal reasoning", "—", true, "Reasoning with words, language, and meaning."],
            ["Reaction time", "—", true, "Speed of response to a stimulus."],
          ],
        },
      ],
    },
    {
      domain: "Perspective",
      label: "Funk's 7 Perspectives (categorical)",
      rows: [
        {
          category: "Worldview (interpretive lens)",
          metrics: [
            ["PROFILE", "Integral (naturalistic) humanist", false, "A naturalist who trusts reason and evidence, sees reality as one emergent process, and grounds purpose and value in humanity rather than the divine."],
            ["Knowing", "Explanatory fallibilist", true, "Epistemology — the nature and sources of knowledge; how we know."],
            ["Being", "Physical idealist", true, "Metaphysics — what is ultimately real; the fundamental nature of reality."],
            ["Origins", "Evolutionary emergentist", true, "Cosmology — the origin and nature of the universe and of life."],
            ["Purpose", "Self-authored", true, "Teleology — whether existence has an inherent purpose or direction."],
            ["Divinity", "Agnostic atheist", true, "Theology — the existence and nature of God or the divine."],
            ["Humanity", "Universalist", true, "Anthropology — the nature and purpose of human beings."],
            ["Value", "Amoral realist", true, "Axiology — the nature of value; what is good, bad, right, and wrong."],
          ],
        },
      ],
    },
  ],
};

const CHARACTER: StatTableData = {
  title: "Character",
  groups: [
    {
      domain: "Temperament",
      label: "HEXACO (PI-R 100 · percentile)",
      rows: [
        {
          category: "Personality (behavioral wiring)",
          metrics: [
            ["PROFILE", "Disciplined, unflappable, and independent", false, "Exceptionally conscientious and reliable, hard to rattle emotionally, and self-reliant — reserved rather than outgoing, and tough-minded enough to question consensus rather than smooth it over."],
            ["Honesty-Humility", "pending", true, "Sincerity, fairness, and modesty — the integrity factor, which OCEAN doesn't measure."],
            ["Emotionality", "1st (very low)", true, "Fearfulness, anxiety, sentimentality, and need for support; low means emotionally tough and independent."],
            ["eXtraversion", "29th", true, "Sociability, assertiveness, and energy drawn from others."],
            ["Agreeableness", "30th", true, "Patience, forgiveness, and cooperation versus temper and criticism."],
            ["Conscientiousness", "96th", true, "Diligence, organization, self-discipline, and reliability."],
            ["Openness", "49th", true, "Curiosity, imagination, and openness to new experience."],
          ],
        },
      ],
    },
    {
      domain: "Sentiment",
      label: "Primal World Beliefs (PI-99 · 0–5)",
      rows: [
        {
          category: "Beliefs (felt outlook)",
          metrics: [
            ["PROFILE", "Good and improving, but impersonal", false, "Fundamentally good (3.66) — safe, abundant, and improving — but not alive: impersonal and non-agentic, with no cosmic intention. Hierarchical yet interconnected — a secular optimist's world."],
            ["Safe", "3.69 with 'progressing' at 4.75", true, "Whether the world is safe and nurturing, or dangerous and threatening."],
            ["Enticing", "3.86 with 'abundant' at 4.5", true, "Whether the world is abundant, beautiful, and worth engaging, or dull and barren."],
            ["Alive", "2.21 with 'needs me' at 2.75", true, "Whether the world is a conscious, intentional agent aware of you, or impersonal and mechanistic."],
            ["Neutral", "hierarchical (3.8) and interconnected (3.5)", true, "Primals outside the Good hierarchy — orthogonal descriptors; these are my top two of the five."],
          ],
        },
      ],
    },
  ],
};

const DRIVE: StatTableData = {
  title: "Drive",
  groups: [
    {
      domain: "Motivation",
      label: "PVQ-40 (1–6)",
      rows: [
        {
          category: "Values (guiding priorities)",
          metrics: [
            ["PROFILE", "Openness over conservation, self-other balanced", false, "Autonomy and achievement, kept stable and caring — with little need for novelty, pleasure, tradition, or conformity."],
            ["Self-direction", "6.0 (openness)", true, "Independent thought and action — choosing, creating, exploring."],
            ["Achievement", "4.5 (self-enhancement)", true, "Personal success through demonstrating competence."],
            ["Security", "4.2 (conservation)", true, "Safety, harmony, and stability of self and society."],
            ["Benevolence", "4.0 (self-transcendence)", true, "Preserving and enhancing the welfare of those close to you."],
            ["Universalism", "3.3 (self-transcendence)", true, "Understanding, tolerance, and protection for all people and nature."],
            ["Power", "3.3 (self-enhancement)", true, "Social status, prestige, and control over people and resources."],
            ["Tradition", "2.8 (conservation)", true, "Respect for and commitment to cultural or religious customs."],
            ["Stimulation", "2.7 (openness)", true, "Novelty, excitement, and challenge in life."],
            ["Conformity", "2.5 (conservation)", true, "Restraint of actions likely to upset others or violate norms."],
            ["Hedonism", "2.3 (openness / self-enhancement)", true, "Pleasure and sensuous gratification for oneself."],
          ],
        },
      ],
    },
    {
      domain: "Vocation",
      label: "Holland RIASEC-18 (rank)",
      rows: [
        {
          category: "Interests (engagement fit)",
          metrics: [
            ["PROFILE", "IAS (inquiry, artistry, service)", false, "Drawn to ideas and to making things, in the service of people — the pattern of a designer-educator (Investigative, Artistic, Social)."],
            ["Investigative", "1st", true, "Drawn to ideas, analysis, and solving abstract problems."],
            ["Artistic", "2nd", true, "Drawn to creativity, self-expression, and unstructured work."],
            ["Social", "3rd", true, "Drawn to helping, teaching, and working with people."],
            ["Enterprising", "4th", true, "Drawn to leading, persuading, and enterprise."],
            ["Conventional", "5th", true, "Drawn to order, data, and structured tasks."],
            ["Realistic", "6th", true, "Drawn to hands-on, physical, and mechanical work."],
          ],
        },
      ],
    },
  ],
};

const IDENTITY_REFERENCES: Reference[] = [
  {
    id: "hilgard",
    cite: (
      <>
        Hilgard, E. R. (1980). The trilogy of mind: cognition, affection, and conation.{" "}
        <em>Journal of the History of the Behavioral Sciences</em>, 16(2).
      </>
    ),
    tag: "Trilogy of mind",
  },
  {
    id: "riot",
    cite: <>RIOT — an open, adaptive online IQ test.</>,
    url: "https://www.riotiq.com",
    urlLabel: "riotiq.com",
    tag: "Aptitude",
  },
  {
    id: "funk",
    cite: (
      <>
        Funk, K. What Is a Worldview? <em>Oregon State University</em>.
      </>
    ),
    url: "https://web.engr.oregonstate.edu/~funkk/Personal/worldview.html",
    urlLabel: "oregonstate.edu",
    tag: "Perspective",
  },
  {
    id: "deutsch",
    cite: (
      <>
        Deutsch, D. (2011). <em>The Beginning of Infinity: Explanations That Transform the World</em>. Allen Lane.
      </>
    ),
    tag: "Perspective",
  },
  {
    id: "hexaco",
    cite: <>Lee, K. and Ashton, M. C. The HEXACO Personality Inventory–Revised (HEXACO-PI-R).</>,
    url: "https://hexaco.org",
    urlLabel: "hexaco.org",
    tag: "Temperament",
  },
  {
    id: "primals",
    cite: (
      <>
        Clifton, J. D. W., et al. (2019). Primal world beliefs.{" "}
        <em>Psychological Assessment</em>, 31(1).
      </>
    ),
    url: "https://myprimals.com",
    urlLabel: "myprimals.com",
    tag: "Sentiment",
  },
  {
    id: "schwartz",
    cite: (
      <>
        Schwartz, S. H. (2012). An overview of the Schwartz theory of basic values.{" "}
        <em>Online Readings in Psychology and Culture</em>, 2(1).
      </>
    ),
    tag: "Motivation",
  },
  {
    id: "holland",
    cite: (
      <>
        Holland, J. L. (1997). <em>Making Vocational Choices</em> (3rd ed.). Assessed via the
        O*NET Interest Profiler.
      </>
    ),
    url: "https://www.onetonline.org",
    urlLabel: "onetonline.org",
    tag: "Vocation",
  },
];

export default function IdentityPage() {
  return (
    <>
      <PageHeading title="Identity" hatnote={<>The present — who I am</>} />

      <p className="lead">
        Who I am now — my mind in three lenses: how I think (intellect), how I&rsquo;m wired
        (character), and what moves me (drive). Current readings, not history.
      </p>
      <p>
        Each lens is read with its gold-standard instrument — a composite over its components,
        the same tabled form as my health status. In brief, I&rsquo;m intellectually curious and
        highly conscientious, emotionally steady, and independent-minded — a builder who
        questions consensus. For how these formed, see{" "}
        <WikiLink href="/biography">my story</WikiLink>.
      </p>

      <h2 id="intellect">Intellect</h2>
      <p>Cognition — how I think. The head.</p>
      <StatTable {...INTELLECT} />

      <h2 id="character">Character</h2>
      <p>
        Affect — how I&rsquo;m wired to feel and react, apart from what I think or pursue. I&rsquo;m
        disciplined and hard to rattle, reserved, self-reliant, and tough-minded rather than
        accommodating — and I meet a world I find fundamentally good, safe, and improving, yet
        impersonal: wonderful, but not watching.
      </p>
      <StatTable {...CHARACTER} />

      <h2 id="drive">Drive</h2>
      <p>
        Conation — the will that moves me to act, apart from how I think or feel. Mine runs
        on autonomy and mastery: self-directed achievement in a stable, caring frame,
        indifferent to status, tradition, or thrill — expressed as an investigator and maker
        serving people through ideas and craft.
      </p>
      <StatTable {...DRIVE} />

      <References
        items={IDENTITY_REFERENCES}
        intro="The instruments and frameworks behind these readings."
      />
    </>
  );
}
