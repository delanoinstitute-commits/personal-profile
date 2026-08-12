import type { Metadata } from "next";
import PageHeading from "@/components/PageHeading";
import { NestedTable } from "@/components/NestedTable";
import type { StatTableData } from "@/components/StatTable";

export const metadata: Metadata = { title: "Network" };

// Network in three branches — the three vectors of every human relationship:
// Maintenance (take — the people I depend on), Growth (share — the people
// beside me), Contribution (give — the people who depend on me). Two bands per
// branch, per the site standard: personal and professional. Categories are
// named for the page each relationship serves (Story, Lifestyle, Health,
// Knowledge, Wealth) with the role class in the gloss. Within Maintenance,
// primary rows run by encounter frequency — frequency sets intimacy — and each
// carries the qualities that make that tier's relationship good: the four A's
// for people (available, able, affective, advocating) shading into the three
// C's for services (consistent, comprehensive, current) as encounters thin.
// Named people appear only in professional capacity or with standing consent;
// "Pending" marks a role either unfilled or not yet worth recommending.

const MAINTENANCE: StatTableData = {
  title: "Maintenance",
  groups: [
    {
      domain: "Personal nurturers",
      label: "",
      rows: [
        {
          category: "Story (caretakers)",
          metrics: [
            ["", "The care I call on rather than schedule — the people who raised me still steady me", false],
            ["On-demand", "Available, capable, and affective", true, "The closest tier of the whole map: no appointment, no invoice, no judgment. The benchmark is the person, not the service — availability first, because care that cannot be reached is not care."],
            ["Parents", "Rizél Delano", true, undefined, undefined, true],
          ],
        },
      ],
    },
    {
      domain: "Professional nurturers",
      label: "",
      rows: [
        {
          category: "Lifestyle (attendants)",
          metrics: [
            ["", "I buy back my hours from people worth keeping in my home and week", false],
            ["On-demand", "Available, consistent, and fast", true],
            ["Assistant", "AI", true, undefined, undefined, true],
            ["Weekly", "Capable, consistent, and likable", true],
            ["Housekeeper", "Sonja", true, undefined, undefined, true],
            ["Au pair", "Pending", true, undefined, undefined, true],
            ["Every 4–8 weeks", "Consistent and likable", true],
            ["Hairdresser", "Pending", true, undefined, undefined, true],
            ["Beautician", "Pending", true, undefined, undefined, true],
            ["Aesthetician", "Pending", true, undefined, undefined, true],
          ],
        },
        {
          category: "Health (examiners)",
          metrics: [
            ["", "My clinicians run on the body's calendar, from on-call to annual", false],
            ["On-demand", "Available, capable, and well-connected", true, "The doctor's tier runs on advocacy: if he cannot help, he must know who can. Well-connected is the fourth quality of a valuable person — the network behind the person."],
            ["Doctor", "Dr. Darren Levin", true, undefined, undefined, true],
            ["Every 4–6 months", "Consistent, one-stop, and current", true, "As encounters thin, the service outweighs the person: diagnosis, cleaning, and surgery under one roof, on the newest equipment. Every additional service a provider offers is one fewer relationship the network has to carry."],
            ["Dentist", "Dr. JJ Serfontein", true, undefined, undefined, true],
            ["Every 1–2 years", "Consistent and current", true],
            ["Physiologist", "Tim Klein; Reece McDonald", true, undefined, undefined, true],
            ["Radiologist", "Cape Radiology", true, undefined, undefined, true],
            ["Optometrist", "Dr. Johann Kruger", true, undefined, undefined, true],
            ["Dermatologist", "Pending", true, undefined, undefined, true],
          ],
        },
        {
          category: "Wealth (advisors)",
          metrics: [
            ["", "One firm reads the whole balance sheet — personal and corporate in a single conversation", false],
            ["Yearly", "Same-firm personal and corporate services", true, "The rarest tier, so comprehensiveness is nearly everything: one firm holding both the person and the business means the two ledgers never contradict each other."],
            ["CPA", "Eugene Park (Baker Tilly)", true, undefined, undefined, true],
            ["Fiduciary", "Pending", true, undefined, undefined, true],
          ],
        },
      ],
    },
  ],
};

const GROWTH: StatTableData = {
  title: "Growth",
  groups: [
    {
      domain: "Personal partners",
      label: "",
      rows: [
        {
          category: "Story (companions)",
          metrics: [
            ["", "The people I share life with — the one tier of the map that is the point, not a means", false],
            ["Spouse", "Pending", true],
            ["Friends", "Pending", true],
            ["Siblings", "Pending", true],
            ["Nephews and nieces", "Pending", true],
            ["Pets", "Pending", true],
          ],
        },
      ],
    },
    {
      domain: "Professional partners",
      label: "",
      rows: [
        {
          category: "Knowledge (guides)",
          metrics: [
            ["", "The minds I think alongside, from lessons bought to wisdom traded", false],
            ["Tutors", "Pending", true],
            ["Teachers", "Pending", true],
            ["Mentors", "Pending", true],
          ],
        },
        {
          category: "Health (practitioners)",
          metrics: [
            ["", "The professionals I train with, week in and week out — collaboration, not diagnosis", false],
            ["Weekly", "Pending (capable, consistent, and aligned)", true],
            ["Physician", "Pending", true, undefined, undefined, true],
            ["Coach", "Pending", true, undefined, undefined, true],
            ["Therapist", "Pending", true, undefined, undefined, true],
            ["Trainer", "Pending", true, undefined, undefined, true],
          ],
        },
        {
          category: "Wealth (managers)",
          metrics: [
            ["", "The people building alongside me, stakes aligned", false],
            ["Cofounders", "Pending", true],
            ["Investors", "Pending", true],
            ["Managers", "Pending", true],
            ["Affiliates", "Pending", true],
          ],
        },
      ],
    },
  ],
};

const CONTRIBUTION: StatTableData = {
  title: "Contribution",
  groups: [
    {
      domain: "Personal dependents",
      label: "",
      rows: [
        {
          category: "Story (beneficiaries)",
          metrics: [
            ["", "The people my work is finally for — those with first claim on what I build", false],
            ["Children", "None", true],
            ["Parents", "Pending", true],
          ],
        },
      ],
    },
    {
      domain: "Professional dependents",
      label: "",
      rows: [
        {
          category: "Knowledge (explorers)",
          metrics: [
            ["", "The learners downstream of what I know", false],
            ["Students", "Pending", true],
          ],
        },
        {
          category: "Wealth (multipliers)",
          metrics: [
            ["", "The people who turn my output into income — theirs and mine", false],
            ["Employers", "Pending", true],
            ["Employees", "Pending", true],
            ["Clients", "Pending", true],
            ["Customers", "Pending", true],
            ["Shareholders", "Pending", true],
          ],
        },
      ],
    },
  ],
};

export default function NetworkPage() {
  return (
    <>
      <PageHeading
        title="Network"
        hatnote={<>Relationships — who I take from, share with, and give to</>}
      />

      <p className="lead">
        My network is the team my life runs on. Every human relationship points one of
        three ways: toward the people I depend on (maintenance), beside the people I
        share with (growth), and toward the people who depend on me (contribution). We
        are always one of these three to someone — every role classifies along the
        vectors take, share, give.
      </p>
      <p>
        This page is the site&rsquo;s dependent variable: health, knowledge, and wealth
        mean little until they are spent with and on people. The map doubles as index
        and benchmark — who holds each role, what makes each relationship good, and
        which roles stand open. The aim is not the biggest network but the right one
        for this stage of life; the more capable its people, the fewer it needs.
      </p>

      <h2 id="maintenance">
        Maintenance <span className="heading-paren">(Support)</span>
      </h2>
      <p>
        The relationships I take from — the people my life depends on, in two
        registers: family (personal) and services (professional). Rows run by
        frequency of encounter, because frequency sets intimacy: the more often we
        meet, the more the person matters; the rarer the visit, the more the service
        must carry — consistent, comprehensive, and current.
      </p>
      <NestedTable {...MAINTENANCE} />

      <h2 id="growth">
        Growth <span className="heading-paren">(Collaboration)</span>
      </h2>
      <p>
        The relationships I share with — peers beside me rather than above or below,
        in two registers: the companions life is spent with (personal) and the
        collaborators work is built with (professional). The one branch valued for
        itself: these relationships are not a means to the others; they are what the
        others are for.
      </p>
      <NestedTable {...GROWTH} />

      <h2 id="contribution">
        Contribution <span className="heading-paren">(Service)</span>
      </h2>
      <p>
        The relationships I give to — the people who depend on me, in two registers:
        those I provide for (personal) and those my work serves (professional). The
        vector that points downstream, where the other three capitals are finally
        spent.
      </p>
      <NestedTable {...CONTRIBUTION} />
    </>
  );
}
