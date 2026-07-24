import type { Metadata } from "next";
import PageHeading from "@/components/PageHeading";
import { NestedTable } from "@/components/NestedTable";
import type { StatTableData } from "@/components/StatTable";
import WikiLink from "@/components/WikiLink";

export const metadata: Metadata = { title: "Lifestyle" };

// Life as designed, in three branches: Activity (what I do), Space (where I do
// it), Time (when). The twelve activity habits are a complete partition of a
// day — they sum to 24 hours exactly, which doubles as the page's integrity
// check — each habit carries its daily allocation in its label. Three structures
// run through it at once: each category pairs an active habit with a passive one;
// each habit is growth, maintenance, or leisure; and the personal categories
// mirror the relational ones (creative/collaborative, physiologic/metabolic,
// personal/social). Definitions are pending. Space and Time are scaffolded.

const ACTIVITY: StatTableData = {
  title: "Activity",
  groups: [
    {
      domain: "Personal Habits",
      label: "",
      rows: [
        {
          category: "Creative (problem solving)",
          metrics: [
            ["", "Knowledge and wealth mastery depends on solving meaningful problems in an informed way", false],
            ["Solve (4 hrs)", [
              "I spend most of the day solving knowledge organisation problems for myself and others; exercising my ",
              <WikiLink key="int" href="/identity#intellect">intelligence</WikiLink>,
              " and ",
              <WikiLink key="skl" href="/knowledge#skills">skills</WikiLink>,
              " to build ",
              <WikiLink key="wrk" href="/knowledge#works">works</WikiLink>,
              " of enduring value",
            ], true],
            ["Learn (1 hr)", [
              "If I\u2019m not asleep, working, or exercising, you\u2019ll find me studying; filling the many ",
              <WikiLink key="edu" href="/knowledge#education">education</WikiLink>,
              " and ",
              <WikiLink key="wvw" href="/identity#intellect">worldview</WikiLink>,
              " gaps necessary for progress",
            ], true],
          ],
        },
        {
          category: "Physiologic (stress balance)",
          metrics: [
            ["", "Health mastery depends on well-timed cycles of strategic overload and recovery", false],
            ["Train (2 hrs)", [
              "Breaking to train at the same hour each day sharpens the work; improving functional ",
              <WikiLink key="itg" href="/health#integrity">integrity</WikiLink>,
              " against 12 universal ",
              <WikiLink key="prf" href="/health#capacity">performance</WikiLink>,
              " benchmarks",
            ], true],
            ["Sleep (8 hrs)", [
              "Eight hours at the same time each night makes the other eleven habits possible; consolidating learnings from yesterday while restoring ",
              <WikiLink key="bal" href="/health#balance">balance</WikiLink>,
              " for tomorrow",
            ], true],
          ],
        },
        {
          category: "Personal (self care)",
          metrics: [
            ["", "Sustained mastery depends on keeping my affairs in order and my attention unclaimed", false],
            ["Maintain (1 hr)", [
              "Daily hygiene and ad-hoc (body, home, relationship, legal, and financial) maintenance-service management; balancing personal care with ",
              <WikiLink key="lfs" href="/lifestyle">lifestyle</WikiLink>,
              " efficiency",
            ], true],
            ["Entertain (1 hr)", [
              "I set aside an hour each evening to escape reality with a good show or indulge its extremes on YouTube; taking on others\u2019 ",
              <WikiLink key="wvw2" href="/identity#intellect">worldviews</WikiLink>,
              " to own and expand my own",
            ], true],
          ],
        },
      ],
    },
    {
      domain: "Relational Habits",
      label: "",
      rows: [
        {
          category: "Collaborative (professional service)",
          metrics: [
            ["", "Wealth mastery depends on serving people directly and coordinating resources at a distance", false],
            ["Serve (1 hr)", [
              "I run corporate apprenticeships and private live-in interventions under my own name; putting hard-won ",
              <WikiLink key="skl2" href="/knowledge#skills">skills</WikiLink>,
              " to work on other people\u2019s problems",
            ], true],
            ["Manage (1 hr)", [
              "I direct people and capital, including a registered real-estate company; the passive half that compounds ",
              <WikiLink key="wlt" href="/wealth">wealth</WikiLink>,
              " while my attention is elsewhere",
            ], true],
          ],
        },
        {
          category: "Metabolic (energy balance)",
          metrics: [
            ["", "Health follows the daily balance between the energy I take in and the energy I spend", false],
            ["Eat (2 hrs)", [
              "Primal-Mediterranean \u2014 three unprocessed meals, low carbohydrate, three coffees; the anabolic input my body ",
              <WikiLink key="cmp" href="/health#integrity">composition</WikiLink>,
              " is built from",
            ], true],
            ["Walk (1 hr)", "Seven thousand steps daily, mostly late afternoon and evening; the catabolic base that costs little and underwrites everything", true],
          ],
        },
        {
          category: "Social (shared experience)",
          metrics: [
            ["", "Emotional balance depends on hours that are shared and ask nothing in return", false],
            ["Connect (1 hr)", "An unhurried hour with family and a few close friends; the relationships that outlast every project on this site", true],
            ["Play (1 hr)", "Sundays kept for structured play \u2014 sport, games, or travel; the only habit I keep with no productive justification", true],
          ],
        },
      ],
    },
  ],
};

const SPACE: StatTableData = {
  title: "Space",
  groups: [
    {
      domain: "Private",
      label: "",
      rows: [
        {
          category: "Mobile (belongings)",
          metrics: [
            ["", "What I carry with me — pending", false],
            ["Clothing", "—", true, "The working wardrobe, and what it is chosen for."],
            ["Technology", "—", true, "The devices the work actually runs on."],
            ["Everyday carry", "—", true, "What leaves the house with me every day."],
          ],
        },
        {
          category: "Home (fixtures)",
          metrics: [
            ["", "The rooms I live and work in — pending", false],
            ["Bedroom", "—", true, "Where the eight hours of sleep are spent."],
            ["Bathroom", "—", true, "Where the maintenance habits happen."],
            ["Kitchen", "—", true, "Where the eating habit is supplied."],
            ["Office", "—", true, "Where the solving and serving happen."],
            ["Gym", "—", true, "Where the training happens."],
          ],
        },
        {
          category: "Stored (resources)",
          metrics: [
            ["", "What is kept but not in daily use — pending", false],
            ["Storage", "—", true, "Held resources: equipment, archives, and reserves."],
          ],
        },
      ],
    },
    {
      domain: "Public",
      label: "",
      rows: [
        {
          category: "Economical (private sector)",
          metrics: [
            ["", "The private amenities I actually use — pending", false],
            ["Restaurants", "—", true, "Where meals happen outside the kitchen."],
            ["Shops", "—", true, "Where supply comes from."],
            ["Gyms", "—", true, "Training facilities beyond the home gym."],
            ["Co-working", "—", true, "Workspaces outside the office."],
          ],
        },
        {
          category: "Governmental (public sector)",
          metrics: [
            ["", "The public provision I depend on — pending", false],
            ["Healthcare", "—", true, "Hospitals and clinics within reach."],
            ["Safety", "—", true, "Policing and personal security."],
            ["Food supply", "—", true, "Agriculture and the food system upstream of the kitchen."],
          ],
        },
        {
          category: "Geographic (environmental)",
          metrics: [
            ["", "The measured conditions of where I live — pending", false],
            ["Air quality", "—", true, "Particulate load in the air I breathe daily."],
            ["Climate", "—", true, "Temperature, humidity, and daylight across the year."],
            ["Landscape", "—", true, "Terrain, green space, and what it affords."],
            ["Demographics", "—", true, "Density, age profile, and cost of living."],
            ["Culture", "—", true, "The norms and language of the place."],
          ],
        },
      ],
    },
  ],
};

const TIME: StatTableData = {
  title: "Time",
  groups: [
    {
      domain: "Daily",
      label: "",
      rows: [
        {
          category: "Morning",
          metrics: [
            ["", "How the first block of the day is scheduled — pending", false],
            ["Blocks", "—", true, "The activities fixed to the morning, and their hours."],
          ],
        },
        {
          category: "Afternoon",
          metrics: [
            ["", "How the middle block of the day is scheduled — pending", false],
            ["Blocks", "—", true, "The activities fixed to the afternoon, and their hours."],
          ],
        },
        {
          category: "Evening",
          metrics: [
            ["", "How the last block of the day is scheduled — pending", false],
            ["Blocks", "—", true, "The activities fixed to the evening, and their hours."],
          ],
        },
      ],
    },
    {
      domain: "Weekly",
      label: "",
      rows: [
        {
          category: "Weekday",
          metrics: [
            ["", "What recurs Monday to Friday — pending", false],
            ["Blocks", "—", true, "The activities fixed to particular weekdays."],
          ],
        },
        {
          category: "Weekend",
          metrics: [
            ["", "What recurs Saturday and Sunday — pending", false],
            ["Blocks", "—", true, "The activities fixed to the weekend."],
          ],
        },
      ],
    },
  ],
};

export default function LifestylePage() {
  return (
    <>
      <PageHeading title="Lifestyle" hatnote={<>Practice — how I allocate my activity, space, and time</>} />

      <p className="lead">
        Lifestyle is one life read three ways: what I do (activity), where I do it
        (space), and when I do it (time). Together they are the design I actually live
        by, rather than the one I would report.
      </p>
      <p>
        The twelve habits below account for a full twenty-four hours. That is the point
        of the taxonomy: it is a partition of the day, not a list of good intentions — if
        the hours don&rsquo;t sum, something is mis-stated. Each habit&rsquo;s daily
        allocation sits in its definition; the schedule that places them is under time,
        scaffolded here and filled in next.
      </p>

      <h2 id="activity">Activity <span className="heading-paren">(Habits)</span></h2>
      <p>
        What I do, in two registers that mirror each other — alone (individual) and with
        others (relational): creative solving against collaborative service, physiologic
        stress against metabolic energy, private care against shared experience. Each
        category pairs one active habit with one passive, and every habit is one of three
        kinds — growth, maintenance, or leisure.
      </p>
      <NestedTable {...ACTIVITY} />

      <h2 id="space">Space <span className="heading-paren">(Resources)</span></h2>
      <p>
        Where the habits happen, in two registers: what I own and control (private) and
        what I draw on but share (public). The private half is an inventory; the public
        half is measurable — air, climate, amenity, and cost.
      </p>
      <NestedTable {...SPACE} />

      <h2 id="time">Time <span className="heading-paren">(Routines)</span></h2>
      <p>
        When the habits happen, in two registers: the shape of a single day (daily) and
        the shape of a week (weekly). Hours are fixed to blocks so the allocation above
        survives contact with an actual calendar.
      </p>
      <NestedTable {...TIME} />
    </>
  );
}
