import type { Metadata } from "next";
import PageHeading from "@/components/PageHeading";
import WikiLink from "@/components/WikiLink";
import { StatTable, type StatTableData } from "@/components/StatTable";

export const metadata: Metadata = { title: "Identity" };

// The mind in the trilogy: Intellect (cognition), Character (affect), Drive
// (conation). Six sub-branches, one gold-standard instrument each; every leaf
// is a composite (roman) over its components (italic). "pending" = not yet
// taken; a few readings are placeholders until the tests are done.

const INTELLECT: StatTableData = {
  title: "Intellect",
  groups: [
    {
      domain: "Aptitude",
      label: "Full RIOT IQ",
      rows: [
        {
          category: "Intelligence (processing power)",
          metrics: [
            ["Full-scale IQ", "pending", false],
            ["Working memory", "—", true],
            ["Processing speed", "—", true],
            ["Fluid reasoning", "—", true],
            ["Spatial ability", "—", true],
            ["Verbal reasoning", "—", true],
            ["Reaction time", "—", true],
          ],
        },
      ],
    },
    {
      domain: "Perspective",
      label: "Funk's seven",
      rows: [
        {
          category: "Worldview (sense-making)",
          metrics: [
            ["Composite stance", "Integral (naturalistic) humanist", false],
            ["Epistemology", "Critical rationalist", true, "How we know — the nature and sources of knowledge."],
            ["Metaphysics", "Physical idealist", true, "What is ultimately real — the fundamental nature of reality."],
            ["Cosmology", "Evolutionary emergentist", true, "The origin and nature of the universe and of life."],
            ["Teleology", "Self-authored", true, "Whether existence has an inherent purpose or direction."],
            ["Theology", "Agnostic atheist", true, "The existence and nature of God or the divine."],
            ["Anthropology", "Universalist", true, "The nature and purpose of human beings."],
            ["Axiology", "Amoral realist", true, "The nature of value — what is good, bad, right, and wrong."],
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
      label: "Big Five (2018)",
      rows: [
        {
          category: "Personality (behavioral wiring)",
          metrics: [
            ["Profile", "highly conscientious and steady, introverted, independent-minded", false],
            ["Conscientiousness", "96th", true],
            ["Neuroticism", "1st (very stable)", true],
            ["Openness", "49th", true],
            ["Extraversion", "29th", true],
            ["Agreeableness", "30th", true],
            ["Honesty-Humility", "pending (HEXACO)", true],
          ],
        },
      ],
    },
    {
      domain: "Sentiment",
      label: "Belief surveys",
      rows: [
        {
          category: "Primal beliefs (felt outlook)",
          metrics: [
            ["Primal", "pending — the world is Good? (PWB)", false],
            ["Safe", "—", true],
            ["Enticing", "—", true],
            ["Alive", "—", true],
          ],
        },
        {
          category: "Moral foundations (moral compass)",
          metrics: [
            ["Moral profile", "pending (MFQ)", false],
            ["Care", "—", true],
            ["Equality", "—", true],
            ["Proportionality", "—", true],
            ["Loyalty", "—", true],
            ["Authority", "—", true],
            ["Purity", "—", true],
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
      label: "PVQ · VDP",
      rows: [
        {
          category: "Values (stated priorities)",
          metrics: [
            ["Self-direction", "6.0", false],
            ["Achievement", "4.5", false],
            ["Security", "4.2", false],
            ["Benevolence", "4.0", false],
            ["Universalism", "3.3", true],
            ["Power", "3.3", true],
            ["Tradition", "2.8", true],
            ["Stimulation", "2.7", true],
            ["Conformity", "2.5", true],
            ["Hedonism", "2.3", true],
          ],
        },
        {
          category: "Values (revealed priorities)",
          metrics: [
            ["", "1) design, 2) wellness, 3) education, 4) resource allocation, 5) music"],
          ],
        },
      ],
    },
    {
      domain: "Vocation",
      label: "Holland RIASEC",
      rows: [
        {
          category: "Interests (engagement patterns)",
          metrics: [
            ["Holland code", "IAS", false],
            ["Investigative", "1st", true],
            ["Artistic", "2nd", true],
            ["Social", "3rd", true],
            ["Enterprising", "4th", true],
            ["Conventional", "5th", true],
            ["Realistic", "6th", true],
          ],
        },
      ],
    },
  ],
};

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
      <p>Affect — how I&rsquo;m wired. The heart.</p>
      <StatTable {...CHARACTER} />

      <h2 id="drive">Drive</h2>
      <p>Conation — what moves me. The gut.</p>
      <StatTable {...DRIVE} />
    </>
  );
}
