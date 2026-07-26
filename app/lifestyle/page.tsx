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
// personal/social). Definitions are pending. Time's daily schedule is filled;
// its weekly one and the whole Space branch are scaffolded.

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
            ["", "Knowledge depends on learning which problems matter, then solving them", false],
            ["Work (4 hrs)", [
              "I spend most of the day solving knowledge organization problems for myself and others — exercising my ",
              <WikiLink key="int" href="/identity#intellect">intelligence</WikiLink>,
              " and ",
              <WikiLink key="skl" href="/knowledge#skills">skills</WikiLink>,
              " to build ",
              <WikiLink key="wrk" href="/knowledge#works">works</WikiLink>,
              " of enduring value",
            ], true],
            ["Educate (1 hr)", [
              "If I’m not asleep, working, or exercising, you’ll find me studying — filling the many ",
              <WikiLink key="edu" href="/knowledge#education">education</WikiLink>,
              " and ",
              <WikiLink key="per" href="/identity#intellect">perspectival</WikiLink>,
              " gaps necessary for progress",
            ], true],
          ],
        },
        {
          category: "Physiologic (stress balance)",
          metrics: [
            ["", "Physical resilience depends on hard loading matched by full recovery", false],
            ["Exercise (1 hr)", [
              "Breaking for exercise at the same hour each day sharpens the work rather than stealing from it — preserving functional ",
              <WikiLink key="itg" href="/health#integrity">integrity</WikiLink>,
              " through improved ",
              <WikiLink key="prf" href="/health#capacity">performance</WikiLink>,
            ], true],
            ["Sleep (8 hrs)", [
              "Getting enough deep sleep at the same time each night makes the other habits possible — consolidating learnings from yesterday while restoring ",
              <WikiLink key="bal" href="/health#balance">balance</WikiLink>,
              " for tomorrow",
            ], true],
          ],
        },
        {
          category: "Personal (self care)",
          metrics: [
            ["", "Peace of mind depends on keeping my affairs in order and my attention my own", false],
            ["Maintain (1 hr)", [
              "Daily hygiene and ad-hoc (body, home, relationship, legal, and financial) maintenance-service management — balancing personal care with ",
              <WikiLink key="lfs" href="/lifestyle">lifestyle</WikiLink>,
              " efficiency",
            ], true],
            ["Entertain (1 hr)", [
              "I set aside an hour each evening to escape reality with a good show or indulge its extremes on YouTube — taking on others’ ",
              <WikiLink key="per2" href="/identity#intellect">perspective</WikiLink>,
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
            ["", "Wealth depends on serving people directly and coordinating resources at a distance", false],
            ["Serve (2 hrs)", [
              "Whether as employee, contractor, or coach, I set aside 10 hours weekly for client-facing activities — delivering the ",
              <WikiLink key="tec" href="/knowledge#skills">technical</WikiLink>,
              ", ",
              <WikiLink key="ped" href="/knowledge#skills">pedagogical</WikiLink>,
              ", or ",
              <WikiLink key="dir" href="/knowledge#skills">directorial</WikiLink>,
              " solutions they need most",
            ], true],
            ["Manage (1 hr)", [
              "Coordinating others to help us manage our responsibilities in one form or another is unavoidable; learning to do it well compounds our network- and ",
              <WikiLink key="wlt" href="/wealth">wealth</WikiLink>,
              "-building efforts",
            ], true],
          ],
        },
        {
          category: "Metabolic (energy balance)",
          metrics: [
            ["", "Physical vitality depends on balancing the energy I take in against what I spend", false],
            ["Walk (1 hr)", [
              "I walk twice daily — to the shops in the afternoon before exercising, and in the evening after dinner while studying — ",
              <WikiLink key="bal2" href="/health#balance">balancing</WikiLink>,
              " a PAL target of 1.7 times my BMR",
            ], true],
            ["Eat (2 hrs)", [
              "I eat 2800 kcal within a 9-hour window each day — breakfast at 11 (eggs and fruit), lunch at 4 (yogurt mix), and dinner at 8 (meat and veg) — maintaining an ",
              <WikiLink key="ins" href="/health#balance">insulin-sensitive</WikiLink>,
              ", ",
              <WikiLink key="lnm" href="/health#integrity">lean and muscular</WikiLink>,
              " physique year-round",
            ], true],
          ],
        },
        {
          category: "Social (shared experience)",
          metrics: [
            ["", "Emotional balance depends on hours that are shared and ask nothing in return", false],
            ["Play (1 hr)", [
              "While I love going to the theater or playing board or TV games, I enjoy engaging in physical ",
              <WikiLink key="chl" href="/health#capacity">challenges</WikiLink>,
              " with others the most — practicing gymnastics or playing squash with friends",
            ], true],
            ["Connect (1 hr)", [
              "The days I serve clients or share a walk or a meal with loved ones are by far the most rewarding — a continued source of joy and ",
              <WikiLink key="grw" href="/identity#character">growth</WikiLink>,
            ], true],
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
      domain: "Perfect Days",
      label: "",
      rows: [
        {
          category: "Morning (creative essentials)",
          metrics: [
            ["", "The freshest hours are reserved for recovery and the deepest solo work", false],
            ["23:30–07:30", "Sleep (8 hrs) — deep restoration alone at home", true],
            ["07:30–08:00", "Maintain (0.5 hr) — morning hygiene, coffee, and a few stretches", true],
            ["08:00–11:00", "Work (3 hrs) — uninterruptible deep work on personal or hired problems", true],
            ["11:00–12:00", "Eat (1 hr) — eggs and fruit alone at home", true],
          ],
        },
        {
          category: "Afternoon (active duty)",
          metrics: [
            ["", "Energy at its highest is spent on the body and on other people", false],
            ["12:00–14:00", "Work / Serve (2 hrs) — solo design or client-facing delivery", true],
            ["14:00–15:00", "Walk + Maintain / Manage (1 hr) — walking errands, quick admin, and phone calls", true],
            ["15:00–16:00", "Exercise (1 hr) — total-body MSP workout of the day (see weekly schedule)", true],
            ["16:00–17:00", "Eat + Educate (1 hr) — post-workout yogurt mix with pressing studies of the day", true],
          ],
        },
        {
          category: "Evening (loose ends)",
          metrics: [
            ["", "The flexible hours: finish what’s open, then eat, connect, and switch off", false],
            ["17:00–19:00", "Work / Serve (2 hrs) — solo design or client delivery loose ends", true],
            ["19:00–21:00", "Maintain + Eat (1–2 hrs) — solo or social sauna, evening hygiene, and dinner", true],
            ["21:00–22:00", "Walk + Educate (1 hr) — treadmill walking with the science lecture of the day", true],
            ["22:00–23:30", "Entertain / Connect (1–2 hrs) — social series or solo YouTube updates", true],
          ],
        },
      ],
    },
    {
      domain: "Ideal Weeks",
      label: "",
      rows: [
        {
          category: "Weekday (foundational events)",
          metrics: [
            ["", "The training split and standing commitments the daily blocks point to", false],
            ["Monday (1)", ["Exercise (the ", <WikiLink key="mo1" href="https://youtu.be/FHwTvBykfl4">balance</WikiLink>, " and ", <WikiLink key="mo2" href="https://youtu.be/RNMYSyHg1JA">row</WikiLink>, " tracks at home)"], true],
            ["Tuesday (1)", ["Exercise (the ", <WikiLink key="tu1" href="https://youtu.be/gxA9UdonEnM">push</WikiLink>, " and ", <WikiLink key="tu2" href="https://youtu.be/H-2wS9maf0o">bridge</WikiLink>, " tracks at home)"], true],
            ["Wednesday (2)", ["Exercise (the ", <WikiLink key="we1" href="https://youtu.be/udrP_TOv0Fk">run</WikiLink>, " complex outdoors); Maintain (periodic treatments or errands)"], true],
            ["Thursday (1)", ["Exercise (the ", <WikiLink key="th1" href="https://youtu.be/ECIMGIvqy2I">pull</WikiLink>, " and ", <WikiLink key="th2" href="https://youtu.be/xVKidipXY4Q">raise</WikiLink>, " tracks at home)"], true],
            ["Friday (2)", ["Exercise (the ", <WikiLink key="fr1" href="https://youtu.be/0mBmF0ZTY9o">cycle</WikiLink>, " complex and the ", <WikiLink key="fr2" href="https://youtu.be/YCTUivuaFvw">invert</WikiLink>, " track or weightlifting ", <WikiLink key="fr3" href="https://youtu.be/ubKcK5PwUUI">press</WikiLink>, " complex at the gym); Play (movie/games night) / Connect (favorite restaurants)"], true],
          ],
        },
        {
          category: "Weekend (elective ventures)",
          metrics: [
            ["", "Where variety, people, and next-week preparation get their room", false],
            ["Saturday (2)", ["Exercise (the ", <WikiLink key="sa1" href="https://youtu.be/QUCWNiijp0I">shift</WikiLink>, " and ", <WikiLink key="sa2" href="https://youtu.be/lpk_IIwmZAk">lean</WikiLink>, " tracks); Connect (new shared experiences)"], true],
            ["Sunday (2)", ["Play (squash, the ", <WikiLink key="su1" href="https://youtu.be/4pO8TvBPIZU">dip</WikiLink>, " track, or the ", <WikiLink key="su2" href="https://youtu.be/1-0EDBQK9WA">row</WikiLink>, " complex with friends); Maintain (preparatory administration and performance reviews)"], true],
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
