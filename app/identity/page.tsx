import type { Metadata } from "next";
import PageHeading from "@/components/PageHeading";
import WikiLink from "@/components/WikiLink";
import { NestedTable } from "@/components/NestedTable";
import type { StatTableData } from "@/components/StatTable";
import { References, type ReferenceSection } from "@/components/References";

export const metadata: Metadata = { title: "Identity" };

// The mind in the trilogy: Intellect (cognition), Character (affect), Drive
// (conation). Six sub-branches; Temperament, Sentiment, and Motivation carry
// two instruments each. Only irreducible dimensions and composite scores are
// counted — a component is flagged sub (index 5) and hangs indented and
// uncounted under the composite it feeds. The 4th element on a metric is a
// hover definition. "pending" / "—" = not yet taken.

const INTELLECT: StatTableData = {
  title: "Intellect",
  groups: [
    {
      domain: "Aptitude",
      label: "",
      rows: [
        {
          category: "Intelligence (processing power)",
          metrics: [
            ["", "I measure my general ability with the full RIOT battery — results pending", false],
            ["Full-scale IQ", "—", true, "General cognitive ability (g) — the composite the six abilities below load onto."],
            ["Working memory", "—", true, "Holding and manipulating information in mind.", undefined, true],
            ["Processing speed", "—", true, "How quickly you take in and respond to information.", undefined, true],
            ["Fluid reasoning", "—", true, "Solving novel problems without relying on prior knowledge.", undefined, true],
            ["Spatial ability", "—", true, "Reasoning about shapes, space, and visual relationships.", undefined, true],
            ["Verbal reasoning", "—", true, "Reasoning with words, language, and meaning.", undefined, true],
            ["Reaction time", "—", true, "Speed of response to a stimulus.", undefined, true],
          ],
        },
        {
          category: "Rationality (second-thought reflex)",
          metrics: [
            ["", "I test whether I override a wrong gut answer with deliberate reasoning — results pending", false],
            ["CRT score", "—", true, "How often I set aside the intuitive-but-wrong answer and reason to the right one — a disposition that predicts decision quality independently of IQ."],
          ],
        },
      ],
    },
    {
      domain: "Perspective",
      label: "",
      rows: [
        {
          category: "Worldview (interpretive lens)",
          metrics: [
            ["", "I am an integral (naturalistic) humanist — reason-grounded, humanity-centered", false],
            ["Worldview", "Integral naturalistic humanist", true, "The composite stance the seven perspectives below resolve into."],
            ["Knowing", "Explanatory fallibilist", true, "Epistemology — the nature and sources of knowledge; how we know.", undefined, true],
            ["Being", "Physical idealist", true, "Metaphysics — what is ultimately real; the fundamental nature of reality.", undefined, true],
            ["Origins", "Evolutionary emergentist", true, "Cosmology — the origin and nature of the universe and of life.", undefined, true],
            ["Purpose", "Self-authored", true, "Teleology — whether existence has an inherent purpose or direction.", undefined, true],
            ["Divinity", "Agnostic atheist", true, "Theology — the existence and nature of God or the divine.", undefined, true],
            ["Humanity", "Universalist", true, "Anthropology — the nature and purpose of human beings.", undefined, true],
            ["Value", "Amoral realist", true, "Axiology — the nature of value; what is good, bad, right, and wrong.", undefined, true],
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
      label: "",
      rows: [
        {
          category: "Personality (default dispositions)",
          metrics: [
            ["", "I am disciplined, unflappable, and independent", false],
            ["Honesty-Humility", "pending", true, "Sincerity, fairness, and modesty — the integrity factor, which OCEAN doesn’t measure."],
            ["Emotionality", "1st (very low)", true, "Fearfulness, anxiety, sentimentality, and need for support; low means emotionally tough and independent."],
            ["eXtraversion", "29th", true, "Sociability, assertiveness, and energy drawn from others."],
            ["Agreeableness", "30th", true, "Patience, forgiveness, and cooperation versus temper and criticism."],
            ["Conscientiousness", "96th", true, "Diligence, organization, self-discipline, and reliability."],
            ["Openness", "49th", true, "Curiosity, imagination, and openness to new experience."],
          ],
        },
        {
          category: "Risk tolerance (financial nerve)",
          metrics: [
            ["", "I take financial risk more readily than 96 in 100 adults (scored 0–100)", false],
            ["Risk score", "68 (96th percentile)", true, "Overall financial risk tolerance against a representative adult sample; 68 is a very high score."],
            ["Risk group", "6 of 7", true, "The band my score falls in — group 6 reads risk as opportunity and takes a medium-to-large degree of it.", undefined, true],
            ["Self-estimate", "80 (actual 68)", true, "What I predicted I would score. Most people under-estimate their tolerance; I over-estimated mine.", undefined, true],
            ["Loss tolerance", "> 50% fall", true, "How far the total value of my investments would have to drop before I began to feel uncomfortable.", undefined, true],
          ],
        },
      ],
    },
    {
      domain: "Sentiment",
      label: "",
      rows: [
        {
          category: "Primal beliefs (felt assumptions)",
          metrics: [
            ["", "I meet a world that is good, safe, and improving, with a mechanistic bent (scored 0–5)", false],
            ["Good", "3.66 (with neutral primals ‘acceptable’ at 1.25 and ‘hierarchical’ at 3.8)", true, "The top-order primal — how good the world is overall, composed of the three below. Five neutral primals sit outside it, orthogonal to Good: acceptable, changing, hierarchical, interconnected, understandable."],
            ["Safe", "3.69 (with ‘progressing’ at 4.75)", true, "Whether the world is safe and nurturing, or dangerous and threatening.", undefined, true],
            ["Enticing", "3.86 (with ‘abundant’ at 4.5)", true, "Whether the world is abundant, beautiful, and worth engaging, or dull and barren.", undefined, true],
            ["Alive", "2.21 (with ‘needs me’ at 2.75)", true, "Whether the world is a conscious, intentional agent aware of you, or impersonal and mechanistic.", undefined, true],
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
      label: "",
      rows: [
        {
          category: "Portrait values (stated drives)",
          metrics: [
            ["", "I run on autonomy and achievement, kept stable and caring (scored 1–6)", false],
            ["Self-enhancement", "3.90 (with ‘achievement’ at 4.5 and ‘power’ at 3.3)", true, "Pursuing your own success and standing — the mean of achievement (success through demonstrated competence) and power (status, prestige, and control over people and resources)."],
            ["Openness to change", "3.67 (with ‘self-direction’ at 6.0, ‘stimulation’ at 2.7, and ‘hedonism’ at 2.3)", true, "Readiness for new thought and experience — the mean of self-direction (independent thought and action), stimulation (novelty, excitement, and challenge), and hedonism (pleasure and sensuous gratification)."],
            ["Self-transcendence", "3.65 (with ‘benevolence’ at 4.0 and ‘universalism’ at 3.3)", true, "Looking beyond yourself — the mean of benevolence (the welfare of those close to you) and universalism (understanding, tolerance, and protection for all people and nature)."],
            ["Conservation", "3.17 (with ‘security’ at 4.2, ‘tradition’ at 2.8, and ‘conformity’ at 2.5)", true, "Preserving order and continuity — the mean of security (safety, harmony, and stability), tradition (respect for cultural or religious custom), and conformity (restraint of actions likely to upset others)."],
          ],
        },
        {
          category: "Behavioural values (revealed drives)",
          metrics: [
            ["", "My time, energy, and money go first to design (with music), the body, then daily studying", false],
            ["Value hierarchy", "Design · Wellness · Education", true, "My top three revealed values; the full ranked five sit below."],
            ["Design", "1st", true, undefined, undefined, true],
            ["Wellness", "2nd", true, undefined, undefined, true],
            ["Education", "3rd", true, undefined, undefined, true],
            ["Resource allocation", "4th", true, undefined, undefined, true],
            ["Music", "5th", true, undefined, undefined, true],
          ],
        },
      ],
    },
    {
      domain: "Vocation",
      label: "",
      rows: [
        {
          category: "Interests (work attractions)",
          metrics: [
            ["", "I am drawn to ideas and to making things, in the service of people", false],
            ["Holland code", "IAS (investigative first, artistic second, then social)", true, "The three-letter code from my top three types — the standard summary of a RIASEC profile."],
            ["Investigative", "1st", true, "Drawn to ideas, analysis, and solving abstract problems.", undefined, true],
            ["Artistic", "2nd", true, "Drawn to creativity, self-expression, and unstructured work.", undefined, true],
            ["Social", "3rd", true, "Drawn to helping, teaching, and working with people.", undefined, true],
            ["Enterprising", "4th", true, "Drawn to leading, persuading, and enterprise.", undefined, true],
            ["Conventional", "5th", true, "Drawn to order, data, and structured tasks.", undefined, true],
            ["Realistic", "6th", true, "Drawn to hands-on, physical, and mechanical work.", undefined, true],
          ],
        },
      ],
    },
  ],
};

const IDENTITY_DATA: ReferenceSection[] = [
  {
    label: "My data derived from instruments scored against population norms",
    items: [
      {
        id: "aptitude-data",
        cite: (
          <>
            <strong>Aptitude</strong>: <em>Adaptive IQ battery (pending)</em>; tests for working memory, processing speed, fluid reasoning, spatial ability, verbal reasoning, and reaction time (RIOT) • report (RIOT IQ)
          </>
        ),
      },
      {
        id: "rationality-data",
        cite: (
          <>
            <strong>Aptitude</strong>: <em>Cognitive reflection test (pending)</em>; tests for reflective override of intuitive error (CRT) • report (self-scored)
          </>
        ),
      },
      {
        id: "temperament-personality-data",
        cite: (
          <>
            <strong>Temperament</strong>: <em>Personality inventory (pending)</em>; tests for honesty-humility, emotionality, extraversion, agreeableness, conscientiousness, and openness (HEXACO-PI-R) • report (hexaco.org)
          </>
        ),
      },
      {
        id: "temperament-risk-data",
        cite: (
          <>
            <strong>Temperament</strong>: <em>Risk profiling (Jun 2022)</em>; tests for financial risk tolerance (25-item questionnaire) • report (FinaMetrica)
          </>
        ),
      },
      {
        id: "sentiment-primals-data",
        cite: (
          <>
            <strong>Sentiment</strong>: <em>Primals survey (Jun 2022)</em>; tests for 26 primal world beliefs (99-item PWB) • report (UPenn Primals Project)
          </>
        ),
      },
      {
        id: "motivation-pvq-data",
        cite: (
          <>
            <strong>Motivation</strong>: <em>Portrait values questionnaire (pending)</em>; tests for the ten basic values (PVQ-40) • report (self-scored)
          </>
        ),
      },
      {
        id: "vocation-data",
        cite: (
          <>
            <strong>Vocation</strong>: <em>Interest profiler (pending)</em>; tests for the six RIASEC types (O*NET Interest Profiler) • report (O*NET)
          </>
        ),
      },
    ],
  },
  {
    label: "My data derived from frameworks I position myself against",
    items: [
      {
        id: "perspective-data",
        cite: (
          <>
            <strong>Perspective</strong>: <em>Worldview positioning (pending)</em>; places seven philosophical stances (Funk&rsquo;s 7 perspectives) • reading (self-assessed)
          </>
        ),
      },
      {
        id: "motivation-demartini-data",
        cite: (
          <>
            <strong>Motivation</strong>: <em>Value determination (pending)</em>; ranks lived values by where time, energy, and money actually go (Demartini process) • reading (self-assessed)
          </>
        ),
      },
    ],
  },
];

const IDENTITY_EVIDENCE: ReferenceSection[] = [
  {
    label: "The studies validating the instruments behind my scores, best-established first",
    items: [
      {
        id: "riot",
        cite: <><strong>Intelligence</strong>: RIOT &mdash; an open, adaptive online IQ test.</>,
        url: "https://www.riotiq.com",
        urlLabel: "riotiq.com",
      },
      {
        id: "hexaco",
        cite: <><strong>Personality</strong>: Lee, K. and Ashton, M. C. The HEXACO Personality Inventory&ndash;Revised (HEXACO-PI-R).</>,
        url: "https://hexaco.org",
        urlLabel: "hexaco.org",
      },
      {
        id: "holland",
        cite: (
          <>
            <strong>Interests</strong>: Holland, J. L. (1997). <em>Making Vocational Choices</em> (3rd ed.). Assessed via the O*NET Interest Profiler.
          </>
        ),
        url: "https://www.onetonline.org",
        urlLabel: "onetonline.org",
      },
      {
        id: "crt",
        cite: (
          <>
            <strong>Rationality</strong>: Frederick, S. (2005). Cognitive reflection and decision making.{" "}
            <em>Journal of Economic Perspectives</em>, 19(4).
          </>
        ),
        url: "https://doi.org/10.1257/089533005775196732",
        urlLabel: "DOI",
      },
      {
        id: "schwartz",
        cite: (
          <>
            <strong>Portrait values</strong>: Schwartz, S. H. (2012). An overview of the Schwartz theory of basic values.{" "}
            <em>Online Readings in Psychology and Culture</em>, 2(1).
          </>
        ),
        url: "https://doi.org/10.9707/2307-0919.1116",
        urlLabel: "DOI",
      },
      {
        id: "finametrica",
        cite: (
          <>
            <strong>Risk tolerance</strong>: FinaMetrica. <em>Personal Financial Risk Tolerance Report</em> (June 2022). Assessed via the FinaMetrica Risk Profiling system.
          </>
        ),
      },
      {
        id: "primals",
        cite: (
          <>
            <strong>Primal beliefs</strong>: Clifton, J. D. W., et al. (2019). Primal world beliefs.{" "}
            <em>Psychological Assessment</em>, 31(1).
          </>
        ),
        url: "https://pubmed.ncbi.nlm.nih.gov/30299119/",
        urlLabel: "PubMed",
      },
      {
        id: "funk",
        cite: (
          <>
            <strong>Worldview</strong>: Funk, K. What Is a Worldview? <em>Oregon State University</em>.
          </>
        ),
        url: "https://web.engr.oregonstate.edu/~funkk/Personal/worldview.html",
        urlLabel: "oregonstate.edu",
      },
      {
        id: "demartini",
        cite: (
          <>
            <strong>Behavioural values</strong>: Demartini, J. F. (2013). <em>The Values Factor</em>. Assessed via the Demartini Value Determination Process.
          </>
        ),
      },
    ],
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
        Each lens is read with its gold-standard instrument — a composite profile over its components. In brief, I&rsquo;m intellectually curious and
        highly conscientious, emotionally steady, and independent-minded — a builder who
        questions consensus. For how these formed, see{" "}
        <WikiLink href="/biography">my story</WikiLink>.
      </p>

      <h2 id="intellect">Intellect <span className="heading-paren">(Cognition)</span></h2>
      <p>How I think. The head.</p>
      <NestedTable {...INTELLECT} />

      <h2 id="character">Character <span className="heading-paren">(Affect)</span></h2>
      <p>
        How I&rsquo;m wired to feel and react, apart from what I think or pursue. I&rsquo;m
        disciplined and hard to rattle, reserved, self-reliant, and tough-minded rather than
        accommodating — and I meet a world I find fundamentally good, safe, and improving, yet
        impersonal: wonderful, but not watching.
      </p>
      <NestedTable {...CHARACTER} />

      <h2 id="drive">Drive <span className="heading-paren">(Conation)</span></h2>
      <p>
        The will that moves me to act, apart from how I think or feel. Mine runs
        on autonomy and mastery: self-directed achievement in a stable, caring frame,
        indifferent to status, tradition, or thrill — expressed as an investigator and maker
        serving people through ideas and craft.
      </p>
      <NestedTable {...DRIVE} />

      <References
        title={<>References <span className="heading-paren">(Data)</span></>}
        sections={IDENTITY_DATA}
      />

      <References
        id="evidence"
        title={<>References <span className="heading-paren">(Evidence)</span></>}
        sections={IDENTITY_EVIDENCE}
      />
    </>
  );
}
