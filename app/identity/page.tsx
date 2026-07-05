import type { Metadata } from "next";
import PageHeading from "@/components/PageHeading";
import WikiLink from "@/components/WikiLink";
import { StatTable, type StatTableData } from "@/components/StatTable";

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
      label: "Full RIOT IQ",
      rows: [
        {
          category: "Intelligence (processing power)",
          metrics: [
            ["Full-scale IQ", "pending", false, "Overall general cognitive ability — the composite of the six subtests below."],
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
      label: "Funk's 7 Perspectives",
      rows: [
        {
          category: "Worldview (sense-making)",
          metrics: [
            ["Composite stance", "Integral (naturalistic) humanist", false, "The overall worldview synthesized from the seven positions below."],
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
      label: "HEXACO (PI-R 100)",
      rows: [
        {
          category: "Personality (behavioral wiring)",
          metrics: [
            ["Profile", "High conscientiousness, integrity, and independence", false, "A one-line read of the six factor scores below."],
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
      label: "Primal World Beliefs (PI-99)",
      rows: [
        {
          category: "Beliefs (felt outlook)",
          metrics: [
            ["Profile", "pending — the world is Good", false, "Your overall Primal — how Good the world fundamentally seems — over the three beliefs below."],
            ["Safe", "—", true, "Whether the world feels safe or dangerous."],
            ["Enticing", "—", true, "Whether the world feels enticing and abundant or dull and barren."],
            ["Alive", "—", true, "Whether the world feels alive and intentional or mechanistic."],
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
      label: "PVQ-40",
      rows: [
        {
          category: "Values (stated priorities)",
          metrics: [
            ["Profile", "Autonomy, achievement, security, and care", false, "A one-line read of the ten values below, led by the top four."],
            ["Orientation", "Openness over conservation; individually focused", false, "The higher-order lean of Schwartz's model — the openness–conservation axis, and a personal (vs. social) focus."],
            ["Self-direction", "6.0", true, "Independent thought and action — choosing, creating, exploring."],
            ["Achievement", "4.5", true, "Personal success through demonstrating competence."],
            ["Security", "4.2", true, "Safety, harmony, and stability of self and society."],
            ["Benevolence", "4.0", true, "Preserving and enhancing the welfare of those close to you."],
            ["Universalism", "3.3", true, "Understanding, tolerance, and protection for all people and nature."],
            ["Power", "3.3", true, "Social status, prestige, and control over people and resources."],
            ["Tradition", "2.8", true, "Respect for and commitment to cultural or religious customs."],
            ["Stimulation", "2.7", true, "Novelty, excitement, and challenge in life."],
            ["Conformity", "2.5", true, "Restraint of actions likely to upset others or violate norms."],
            ["Hedonism", "2.3", true, "Pleasure and sensuous gratification for oneself."],
          ],
        },
      ],
    },
    {
      domain: "Vocation",
      label: "Holland RIASEC-18",
      rows: [
        {
          category: "Interests (engagement patterns)",
          metrics: [
            ["Holland hierarchy", "IAS (inquiry, artistry, service)", false, "The top three interest types, in order (Investigative, Artistic, Social)."],
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
