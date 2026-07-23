import type { Metadata } from "next";
import PageHeading from "@/components/PageHeading";
import { NestedTable } from "@/components/NestedTable";
import type { StatTableData } from "@/components/StatTable";
import WikiLink from "@/components/WikiLink";

export const metadata: Metadata = { title: "Lifestyle" };

// Life as designed, in three branches: Activity (what I do), Space (where I do
// it), Time (when). The twelve activity habits are a complete partition of a
// day — they sum to 24 hours exactly, which doubles as the page's integrity
// check. Three structures run through it at once: each category pairs an active
// habit with a passive one; each habit is growth, maintenance, or leisure; and the
// individual categories mirror the relational ones (creative/collaborative,
// physiologic/metabolic, personal/social). Space and Time are scaffolded.

const ACTIVITY: StatTableData = {
  title: "Activity",
  groups: [
    {
      domain: "Individual",
      label: "",
      rows: [
        {
          category: "Creative (problem solving)",
          metrics: [
            ["", "Solving the problems you care most about in an informed way is purpose and security enough", false],
            ["Solve", [
              "I spend most of the day solving knowledge organisation problems for myself and others; exercising my ",
              <WikiLink key="int" href="/identity#intellect">intelligence</WikiLink>,
              " and ",
              <WikiLink key="skl" href="/knowledge#skills">skills</WikiLink>,
              " to build ",
              <WikiLink key="wrk" href="/knowledge#works">works</WikiLink>,
              " of enduring value",
            ], true, "Active · 4 hrs/day. Working meaningful problems, personal or professional, on my own."],
            ["Learn", [
              "If I’m not working, exercising, or sleeping, you’ll find me studying; filling the many ",
              <WikiLink key="edu" href="/knowledge#education">education</WikiLink>,
              " gaps necessary for progress",
            ], true, "Passive · 1 hr/day. Studying, reflecting on, or writing something meaningful."],
          ],
        },
        {
          category: "Physiologic (stress balance)",
          metrics: [
            ["", "Load and recovery in ratio: enough stress to force growth, not merely to hold the line", false],
            ["Sleep", "I hold eight hours, eleven to seven, and track what it returns", true, "Passive · 8 hrs/day. The primary recovery block, and the single largest claim on the day."],
            ["Train", "I run a six-day gymnastic split against twelve benchmark movements", true, "Active · 2 hrs/day. Mobility, stability, strength, speed, or endurance work."],
          ],
        },
        {
          category: "Personal (self care)",
          metrics: [
            ["", "Maintenance and leisure in equal measure — the upkeep that prevents decline, the idleness that restores", false],
            ["Maintain", "I keep hygiene, treatments, home, and admin on a fixed weekly rota", true, "Active · 1 hr/day. Hygiene, treatments, finances, home, and the admin that keeps them running."],
            ["Entertain", "I take an undirected hour — news, books, or games — before sleep", true, "Passive · 1 hr/day. Games, books, or media — time with nothing asked of it."],
          ],
        },
      ],
    },
    {
      domain: "Relational",
      label: "",
      rows: [
        {
          category: "Collaborative (professional service)",
          metrics: [
            ["", "Working directly alongside people, then coordinating them at a distance — presence, then leverage", false],
            ["Serve", "I run corporate apprenticeships and private live-in interventions under my own name", true, "Active · 1 hr/day. Formally helping others — clients, colleagues, family, or friends."],
            ["Manage", "I direct people and capital, including a registered real-estate company", true, "Passive · 1 hr/day. Directing resources, human and financial."],
          ],
        },
        {
          category: "Metabolic (energy balance)",
          metrics: [
            ["", "Catabolic against anabolic: what I burn moving, set against what I take in to rebuild", false],
            ["Eat", "I eat primal-Mediterranean: three unprocessed meals, low carbohydrate, three coffees", true, "Passive · 2 hrs/day. Meals, preparation included."],
            ["Walk", "I walk seven thousand steps daily, mostly late afternoon and evening", true, "Active · 1 hr/day. Daily walking, counted separately from training."],
          ],
        },
        {
          category: "Social (shared experience)",
          metrics: [
            ["", "Both leisure, both shared: unstructured company on one side, structured play on the other", false],
            ["Connect", "I give an unhurried hour to family and a few close friends", true, "Passive · 1 hr/day. Quality time with someone close to me."],
            ["Play", "I keep Sunday afternoons for structured play — sport, games, or travel", true, "Active · 1 hr/day. Structured play — sports, games, events, or travel."],
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
