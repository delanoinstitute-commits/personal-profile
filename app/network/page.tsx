import type { Metadata } from "next";
import PageHeading from "@/components/PageHeading";
import { NestedTable } from "@/components/NestedTable";
import type { StatTableData } from "@/components/StatTable";
import { References, type ReferenceSection } from "@/components/References";

export const metadata: Metadata = { title: "Network" };

// Network in three branches — the three vectors of every human relationship:
// Nurture (take — the people who give the organism what it needs, when it
// needs it), Growth (share — the people beside me), Contribution (give — the
// people who depend on me). Two bands per branch, per the site standard:
// personal and professional. Categories are named for the page each
// relationship serves (Story, Lifestyle, Knowledge, Health, Wealth) with the
// role class in the gloss. Every category organizes its roles by encounter
// frequency — frequency sets intimacy — and each tier carries the qualities
// that make its relationships good: the four A's for people (available, able,
// affective, advocating) shading into the three C's for services (consistent,
// comprehensive, current) as encounters thin. Named people appear only in
// professional capacity or with standing consent; "Pending" marks a role
// unfilled, not yet worth recommending, or waiting on a stage of life.
// Frequency-tier assignments outside Nurture are scaffold defaults, refined
// band by band.

const NURTURE: StatTableData = {
  title: "Nurture",
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
            ["Parents", "Mother (Rizél Delano)", true, undefined, undefined, true],
            ["Neighbors", "Pending", true, undefined, undefined, true],
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
            ["Mechanic", "Pending (waits on a vehicle)", true, undefined, undefined, true],
            ["Weekly", "Capable, consistent, and likable", true],
            ["Housekeeper", "Sonja", true, undefined, undefined, true],
            ["Au pair", "Pending", true, undefined, undefined, true],
            ["Monthly", "Consistent and responsive", true],
            ["Landlord", "Pending", true, undefined, undefined, true],
            ["Every 4–8 weeks", "Consistent and likable", true],
            ["Hairdresser", "Pending", true, undefined, undefined, true],
            ["Beautician", "Pending", true, undefined, undefined, true],
            ["Aesthetician", "Pending", true, undefined, undefined, true],
            ["Tailor", "Pending", true, undefined, undefined, true],
          ],
        },
        {
          category: "Knowledge (instructors)",
          metrics: [
            ["", "The teachers I take instruction from — knowledge fed to the organism, not traded", false],
            ["Weekly", "Capable, current, and clear", true, "Paid instruction is nurture, not collaboration: input the growing organism takes. What makes it collaboration is reciprocity — and that tier lives under Growth, with the mentors."],
            ["Tutors", "Pending", true, undefined, undefined, true],
            ["Teachers", "Pending", true, undefined, undefined, true],
          ],
        },
        {
          category: "Health (examiners)",
          metrics: [
            ["", "My clinicians run on the body's calendar, from on-call to annual", false],
            ["On-demand", "Available, capable, and well-connected", true, "The doctor's tier runs on advocacy: if he cannot help, he must know who can. Well-connected is the fourth quality of a valuable person — the network behind the person."],
            ["Doctor", "Dr. Darren Levin", true, undefined, undefined, true],
            ["Pharmacist", "Pending", true, undefined, undefined, true],
            ["Physical therapist", "Pending", true, undefined, undefined, true],
            ["Veterinarian", "Pending (waits on pets)", true, undefined, undefined, true],
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
            ["Monthly", "Consistent and accountable", true],
            ["Property manager", "Pending (waits on rentals)", true, undefined, undefined, true],
            ["Yearly", "Same-firm personal and corporate services", true, "The rarest recurring tier, so comprehensiveness is nearly everything: one firm holding both the person and the business means the two ledgers never contradict each other."],
            ["CPA", "Eugene Park (Baker Tilly)", true, undefined, undefined, true],
            ["Fiduciary", "Pending", true, undefined, undefined, true],
            ["Estate attorney", "Pending", true, undefined, undefined, true],
            ["Per project", "Capable, connected, and conflict-free", true, "The episodic experts hired for a transaction rather than a season: capability first, the network behind them second, and no incentive that competes with mine — commissions disclosed, fees only where possible."],
            ["Immigration attorney", "Pending", true, undefined, undefined, true],
            ["Insurance broker", "Pending", true, undefined, undefined, true],
            ["Forex specialist", "Pending", true, undefined, undefined, true],
            ["Realtor", "Pending", true, undefined, undefined, true],
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
            ["Daily", "Pending", true],
            ["Spouse", "Pending", true, undefined, undefined, true],
            ["Pets", "Pending", true, undefined, undefined, true],
            ["Weekly", "Pending", true],
            ["Friends", "Pending", true, undefined, undefined, true],
            ["Monthly", "Pending", true],
            ["Siblings", "Pending", true, undefined, undefined, true],
            ["Nephews and nieces", "Pending", true, undefined, undefined, true],
            ["Cousins", "Pending", true, undefined, undefined, true],
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
            ["", "The minds I trade with — wisdom shared, not bought", false],
            ["Weekly", "Pending", true],
            ["Language partner", "Pending", true, undefined, undefined, true],
            ["Monthly", "Pending", true],
            ["Mentors", "Pending", true, undefined, undefined, true],
            ["Masterminds", "Pending", true, undefined, undefined, true],
          ],
        },
        {
          category: "Health (practitioners)",
          metrics: [
            ["", "The professionals I train with, week in and week out — collaboration, not diagnosis", false],
            ["Weekly", "Pending (capable, consistent, and aligned)", true],
            ["Coach", "Pending", true, undefined, undefined, true],
            ["Therapist", "Pending", true, undefined, undefined, true],
            ["Trainer", "Pending", true, undefined, undefined, true],
          ],
        },
        {
          category: "Wealth (managers)",
          metrics: [
            ["", "The people building alongside me, stakes aligned", false],
            ["Daily", "Pending", true],
            ["Cofounders", "Pending", true, undefined, undefined, true],
            ["Weekly", "Pending", true],
            ["Managers", "Pending", true, undefined, undefined, true],
            ["Affiliates", "Pending", true, undefined, undefined, true],
            ["Quarterly", "Pending", true],
            ["Investors", "Pending", true, undefined, undefined, true],
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
            ["Daily", "Pending", true],
            ["Children", "None", true, undefined, undefined, true],
            ["Parents", "Pending", true, undefined, undefined, true],
          ],
        },
        {
          category: "Health (advocates)",
          metrics: [
            ["", "The health I hold for others — proxy, navigator, and advocate when they cannot be", false],
            ["On-demand", "Pending", true],
            ["Family", "Pending", true, undefined, undefined, true],
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
            ["Weekly", "Pending", true],
            ["Students", "Pending", true, undefined, undefined, true],
            ["Monthly", "Pending", true],
            ["Audience", "Pending", true, undefined, undefined, true],
          ],
        },
        {
          category: "Wealth (multipliers)",
          metrics: [
            ["", "The people who turn my output into income — theirs and mine", false],
            ["Daily", "Pending", true],
            ["Employers", "Pending", true, undefined, undefined, true],
            ["Employees", "Pending", true, undefined, undefined, true],
            ["Weekly", "Pending", true],
            ["Clients", "Pending", true, undefined, undefined, true],
            ["Monthly", "Pending", true],
            ["Customers", "Pending", true, undefined, undefined, true],
            ["Quarterly", "Pending", true],
            ["Shareholders", "Pending", true, undefined, undefined, true],
            ["Yearly", "Pending", true],
            ["Causes", "Pending", true, undefined, undefined, true],
          ],
        },
      ],
    },
  ],
};

const NETWORK_GUIDELINES: ReferenceSection[] = [
  {
    label: "The meta-analyses informing my benchmarks",
    items: [
      {
        id: "survival",
        cite: (
          <>
            <strong>Survival</strong>: Holt-Lunstad, J., Smith, T. B., and Layton, J. B. (2010). Social relationships and mortality risk: a meta-analytic review. <em>PLoS Medicine</em>, 7(7).
          </>
        ),
        url: "https://doi.org/10.1371/journal.pmed.1000316",
        urlLabel: "DOI",
      },
    ],
  },
  {
    label: "The randomized experiments informing my benchmarks",
    items: [
      {
        id: "neighborhoods",
        cite: (
          <>
            <strong>Neighborhoods</strong>: Chetty, R., Hendren, N., and Katz, L. F. (2016). The effects of exposure to better neighborhoods on children: new evidence from the Moving to Opportunity experiment. <em>American Economic Review</em>, 106(4).
          </>
        ),
        url: "https://www.aeaweb.org/articles?id=10.1257/aer.20150572",
        urlLabel: "AEA",
      },
      {
        id: "time",
        cite: (
          <>
            <strong>Time</strong>: Whillans, A. V., et al. (2017). Buying time promotes happiness. <em>Proceedings of the National Academy of Sciences</em>, 114(32).
          </>
        ),
        url: "https://doi.org/10.1073/pnas.1706541114",
        urlLabel: "DOI",
      },
    ],
  },
  {
    label: "The administrative and historical records informing my benchmarks",
    items: [
      {
        id: "place",
        cite: (
          <>
            <strong>Place</strong>: Chetty, R., et al. (2014). Where is the land of opportunity? The geography of intergenerational mobility in the United States. <em>Quarterly Journal of Economics</em>, 129(4).
          </>
        ),
        url: "https://www.nber.org/papers/w19843",
        urlLabel: "NBER",
      },
      {
        id: "connection",
        cite: (
          <>
            <strong>Connection</strong>: Chetty, R., et al. (2022). Social capital I: measurement and associations with economic mobility. <em>Nature</em>, 608(7921).
          </>
        ),
        url: "https://doi.org/10.1038/s41586-022-04996-4",
        urlLabel: "DOI",
      },
    ],
  },
  {
    label: "The cohorts and field studies informing my benchmarks",
    items: [
      {
        id: "status",
        cite: (
          <>
            <strong>Status</strong>: Marmot, M. G., et al. (1991). Health inequalities among British civil servants: the Whitehall II study. <em>Lancet</em>, 337(8754).
          </>
        ),
        url: "https://pubmed.ncbi.nlm.nih.gov/1674771/",
        urlLabel: "PubMed",
      },
      {
        id: "ties",
        cite: (
          <>
            <strong>Ties</strong>: Granovetter, M. S. (1973). The strength of weak ties. <em>American Journal of Sociology</em>, 78(6).
          </>
        ),
        url: "https://doi.org/10.1086/225469",
        urlLabel: "DOI",
      },
      {
        id: "size",
        cite: (
          <>
            <strong>Size</strong>: Hill, R. A., and Dunbar, R. I. M. (2003). Social network size in humans. <em>Human Nature</em>, 14(1).
          </>
        ),
        url: "https://doi.org/10.1007/s12110-003-1016-y",
        urlLabel: "DOI",
      },
      {
        id: "capacity",
        cite: (
          <>
            <strong>Capacity</strong>: Dunbar, R. I. M. (1992). Neocortex size as a constraint on group size in primates. <em>Journal of Human Evolution</em>, 22(6).
          </>
        ),
        url: "https://doi.org/10.1016/0047-2484(92)90081-J",
        urlLabel: "DOI",
      },
    ],
  },
];

export default function NetworkPage() {
  return (
    <>
      <PageHeading
        title="Network"
        hatnote={<>Relationships — who I take from, share with, and give to</>}
      />

      <p className="lead">
        My network is the team my life runs on. Every human relationship points one of
        three ways: toward the people I depend on (nurture), beside the people I share
        with (growth), and toward the people who depend on me (contribution). We are
        always one of these three to someone — every role classifies along the vectors
        take, share, give.
      </p>
      <p>
        This page is the site&rsquo;s dependent variable: health, knowledge, and wealth
        mean little until they are spent with and on people. The map doubles as index
        and benchmark — who holds each role, what makes each relationship good, and
        which roles stand open. The aim is not the biggest network but the right one
        for this stage of life; the more capable its people, the fewer it needs.
      </p>

      <h2 id="nurture">
        Nurture <span className="heading-paren">(Support)</span>
      </h2>
      <p>
        The relationships I take from — the people who give the organism what it
        needs, when it needs it: healing when below health, sustenance at health,
        inputs to build on, in two registers — family (personal) and services
        (professional). Rows run by frequency of encounter, because frequency sets
        intimacy: the more often we meet, the more the person matters; the rarer the
        visit, the more the service must carry — consistent, comprehensive, and
        current.
      </p>
      <NestedTable {...NURTURE} />

      <h2 id="growth">
        Growth <span className="heading-paren">(Collaboration)</span>
      </h2>
      <p>
        The relationships I share with — peers beside me rather than above or below,
        building on top of health, in two registers: the companions life is spent with
        (personal) and the collaborators work is built with (professional). The one
        branch valued for itself: these relationships are not a means to the others;
        they are what the others are for.
      </p>
      <NestedTable {...GROWTH} />

      <h2 id="contribution">
        Contribution <span className="heading-paren">(Service)</span>
      </h2>
      <p>
        The relationships I give to — the people who depend on me, in two registers:
        those I provide for (personal) and those my work serves (professional). The
        vector that points downstream, where the excess of the other three capitals is
        finally shared.
      </p>
      <NestedTable {...CONTRIBUTION} />

      <References
        id="guidelines"
        title={<>References <span className="heading-paren">(Guidelines)</span></>}
        sections={NETWORK_GUIDELINES}
      />
    </>
  );
}
