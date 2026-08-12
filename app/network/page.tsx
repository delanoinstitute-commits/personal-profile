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
// role class in the gloss. Rows are ROLES ordered by need — each appears in
// the order life requires it, the next hire triggered by getting busier or
// richer — so band counts count relationship types. Each role's value is its
// benchmark: the four A's for people (available, able, affective, advocating)
// shading into the three C's for services (consistent, comprehensive,
// current) as encounters thin. The holder hangs beneath as an unlabelled
// child ("Pending" = unfilled, no one worth recommending yet, or waiting on
// a stage of life). Kept deliberately minimal: standing relationships only —
// once-off and referral-reachable experts live in the private plans, not the
// map. Named people appear only in professional capacity or with standing
// consent. Benchmarks marked "Pending" refine band by band.

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
            ["", "The care I call on rather than schedule", false],
            ["Family (blood)", "The best families stay available, capable, and affective long after the raising", true, "The closest tier of the whole map: no appointment, no invoice, no judgment. The benchmark is the person, not the service — availability first, because care that cannot be reached is not care."],
            ["Parents", "Mother (Rizél Delano)", true, undefined, undefined, true],
            ["Grandparents", "Deceased", true, undefined, undefined, true],
            ["Community (place)", "The best communities are close, warm, and watchful", true, "The closest strangers: near enough to help before anyone else can, warm enough to want to, connected enough to know who to call when they cannot. The one tier of the support network that money never touches — free help, freely returned."],
            ["Neighbors", "Pending", true, "One of the map’s six connectors — the local world’s map of who shows up and who to trust.", undefined, true],
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
            ["", "My body groomed, my home kept, my hours bought back — in that order of need", false],
            ["Groomers (body)", "The best groomers are consistent, likable, and close by", true, "The body's attendants — hair, nails, skin. Seen often enough that likability matters: a groomer kept for years knows the head they are working on."],
            ["Hairdresser", "Pending", true, undefined, undefined, true],
            ["Esthetician", "Pending", true, undefined, undefined, true],
            ["Keepers (home)", "The best keepers are capable, consistent, and likable (trusted alone at home)", true, "The home's attendants, and the first hire of the buying-back-time ladder — the next arrives whenever life gets busier or income gets larger. Major breaks belong to the landlord by contract; the handyman keeps everything smaller working."],
            ["Housekeeper", "Sonja", true, undefined, undefined, true],
            ["Handyman", "Pending", true, undefined, undefined, true],
            ["Domestic robot", "Pending (vacuums today, humanoids later)", true, undefined, undefined, true],
            ["Agents (time)", "The best agents are always available, consistent, and fast", true, "The calendar's attendants — those empowered to act in my stead, which is what buying back time means. The digital agent already holds the role outright: always available, never inconsistent, and instant."],
            ["Digital", "AI", true, undefined, undefined, true],
            ["Personal", "Pending", true, undefined, undefined, true],
          ],
        },
        {
          category: "Knowledge (instructors)",
          metrics: [
            ["", "The teachers I take instruction from — knowledge fed to the organism, not traded", false],
            ["Educators (mind)", "The best educators are capable, current, and clear", true, "Paid instruction is nurture, not collaboration: input the growing organism takes, from childhood classroom to private lesson. What makes it collaboration is reciprocity — and that tier lives under Growth, with the mentors."],
            ["Teachers", "Pending", true, undefined, undefined, true],
            ["Tutors", "Pending", true, "The best tutors are clear, patient, and paced to the student.", undefined, true],
          ],
        },
        {
          category: "Health (examiners)",
          metrics: [
            ["", "My clinicians, from the first call to the annual scan", false],
            ["Clinicians (care)", "The best clinicians are available, capable, and know exactly who to call next", true, "The treating half of the health network. The benchmark runs on advocacy: if they cannot help, they must know who can — well-connected is the fourth quality of a valuable person, the network behind the person."],
            ["Pharmacist", "Pending", true, "The best pharmacists are available, consistent, and current on every script. The most frequent health touchpoint in American life — roughly thirty-five pharmacy visits for every four provider visits.", undefined, true],
            ["Dentist", "Dr. JJ Serfontein", true, "The best dentists diagnose, clean, and operate under one current roof — every additional service is one fewer relationship the network has to carry.", undefined, true],
            ["Doctor", "Dr. Darren Levin", true, "One of the map’s six connectors — the medical world reached through a single relationship.", undefined, true],
            ["Psychologist", "Pending", true, "The best psychologists treat below health and refer beyond it — therapy as treatment is nurture; as development it sits under Growth, with the practitioners.", undefined, true],
            ["Veterinarian", "Pending (waits on pets)", true, "The best veterinarians are available, capable, and gentle.", undefined, true],
            ["Diagnosticians (data)", "The best diagnosticians measure the same way using the latest tech", true, "The measuring half: their product is the trend line, so consistency of method is the benchmark — a reading is only comparable to readings taken the same way."],
            ["Optometrist", "Dr. Johann Kruger", true, "The best optometrists are consistent and current, one prescription to the next.", undefined, true],
            ["Physiologist", "Tim Klein; Reece McDonald", true, "The best physiologists test consistently and on the latest protocols.", undefined, true],
            ["Radiologist", "Cape Radiology", true, "The best radiologists scan on the same current machine year after year.", undefined, true],
          ],
        },
        {
          category: "Wealth (advisors)",
          metrics: [
            ["", "One firm reads the whole balance sheet — personal and corporate in a single conversation", false],
            ["Counselors (money)", "The best counselors read the whole position and sell nothing", true, "They advise, I decide — advice priced so the advisor wins only when I do: no commissions, no products, no incentive competing with mine."],
            ["CPA", "Eugene Park (Baker Tilly)", true, "The best CPAs hold the person and the business at one firm — two ledgers that never contradict each other.", undefined, true],
            ["Fiduciary", "Pending", true, "The best fiduciaries are fee-only, capable, and conflict-free. The episodic experts — attorneys, brokers, agents — are reached through this tier’s advocacy, not kept on retainer. One of the map’s six connectors — the money world behind one fee-only relationship.", undefined, true],
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
            ["Household (hearth)", "The best households share the values, the direction, and the load", true, "The family assembled rather than inherited: whoever shares the roof, the routines, and the load. Chosen once, kept daily."],
            ["Partner", "Pending", true, undefined, undefined, true],
            ["Pets", "Pending", true, "The best pets keep no ledger (affection without account).", undefined, true],
            ["Friends (chosen)", "The best friends are present, honest, and glad when you win", true, "The layers have numbers — about five confidants and fifteen close friends is what human attention actually carries (Dunbar, in the references). The last clause is the filter: genuine celebration of your wins is the rarest quality in a friendship."],
            ["Confidants", "Pending (the closest five)", true, undefined, undefined, true],
            ["Circle", "Pending (the wider fifteen)", true, undefined, undefined, true],
            ["Family (blood)", "The best families turn shared history into chosen friendship", true, "The companions I did not choose and would choose anyway — the sibling test: the relationship that starts unchosen and earns its re-choosing in adulthood."],
            ["Siblings", "Brother", true, undefined, undefined, true],
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
            ["Elders (ahead)", "The best elders are a decade ahead and still ask more than they tell", true, "The vertical exchange: they have walked the path I am on, and the asking is the teaching — an elder who lectures is just a teacher you cannot pay."],
            ["Mentors", "Pending", true, "One of the map’s six connectors — the rooms ahead, entered by introduction.", undefined, true],
            ["Peers (beside)", "The best peers are candid and slightly out of your league", true, "The lateral exchange: a room you are the smartest person in is a room that is done with you."],
            ["Masterminds", "Pending", true, "The best masterminds are small, candid, and sworn to confidence. One of the map’s six connectors — every member a gateway to their own cluster.", undefined, true],
            ["Language partner", "Pending", true, "The best language partners trade tongues evenly and correct in the moment.", undefined, true],
          ],
        },
        {
          category: "Health (practitioners)",
          metrics: [
            ["", "The professionals I train with, week in and week out — collaboration, not diagnosis", false],
            ["Developers (performance)", "The best developers build capacity before I need it", true, "The people in my corner — prehab, not rehab: they develop what the clinicians would otherwise one day treat."],
            ["Coach", "Pending", true, "The best coaches see what I cannot and say it before I want to hear it.", undefined, true],
            ["Trainer", "Pending", true, "The best trainers program for the decade, not the session.", undefined, true],
            ["Therapist", "Pending", true, "The best therapists ask the question I have been avoiding.", undefined, true],
          ],
        },
        {
          category: "Wealth (managers)",
          metrics: [
            ["", "The people building alongside me, stakes aligned", false],
            ["Builders (inside)", "The best builders are opposite in skill, identical in values", true, "The ones inside the venture: mismatched skills compound, mismatched values detonate."],
            ["Cofounders", "Pending", true, undefined, undefined, true],
            ["Managers", "Pending", true, "The best managers need the goal, not the method.", undefined, true],
            ["Backers (outside)", "The best backers bring the network and the patience, not just the check", true, "The ones outside the venture whose incentives point in: capital, distribution, and belief."],
            ["Investors", "Pending", true, "One of the map’s six connectors — the deal world behind the check.", undefined, true],
            ["Affiliates", "Pending", true, "The best affiliates sell what they already use.", undefined, true],
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
            ["Family (blood)", "The best families inherit the time before the money", true, "Giving with a warm hand: experiences funded while the giver is alive to share them — the inheritance that beats the estate."],
            ["Parents", "Pending", true, undefined, undefined, true],
            ["Children", "None", true, undefined, undefined, true],
            ["Nephews and nieces", "Pending", true, "The best nephews and nieces know you as a presence, not a legend — the mentor they get before they know to look for one.", undefined, true],
            ["Cousins", "Pending", true, "The best cousins pick up mid-conversation after years apart.", undefined, true],
          ],
        },
        {
          category: "Health (advocates)",
          metrics: [
            ["", "The health I hold for others — proxy, navigator, and advocate when they cannot be", false],
            ["Wards (care)", "The best wards sign the proxy before it is needed", true, "Advocacy granted in advance: the proxy, the directives, the passwords — held quietly until the day they are not."],
            ["Parents", "Pending", true, undefined, undefined, true],
            ["Partner", "Pending", true, undefined, undefined, true],
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
            ["Learners (taught)", "The best learners outgrow the teacher", true, "The point of the teaching is its own obsolescence — self-mastery means the student graduates from needing me."],
            ["Students", "Pending", true, undefined, undefined, true],
            ["Audience", "Pending", true, undefined, undefined, true],
          ],
        },
        {
          category: "Wealth (multipliers)",
          metrics: [
            ["", "The people who turn my output into income — theirs and mine", false],
            ["Patrons (demand)", "The best patrons pay for the value, not the hours", true, "Employers, clients, and customers are one economy at three distances: they buy the output, and the best of them price what it does rather than what it took."],
            ["Employers", "Pending", true, undefined, undefined, true],
            ["Clients", "Pending", true, undefined, undefined, true],
            ["Customers", "Pending", true, undefined, undefined, true],
            ["Stakeholders (supply)", "The best stakeholders treat the venture as their own", true, "The ones who supply the venture what it runs on — labor and capital — and share its fortunes both ways."],
            ["Employees", "Pending", true, undefined, undefined, true],
            ["Shareholders", "Pending", true, undefined, undefined, true],
            ["Causes (gift)", "The best causes need the money less each year", true, "Effectiveness as the benchmark: the best giving retires its own necessity."],
            ["Charities", "Pending", true, undefined, undefined, true],
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
        for this stage of life; the more capable its people, the fewer it needs —
        the best-connected members carry whole networks behind them.
      </p>

      <h2 id="nurture">
        Nurture <span className="heading-paren">(Support)</span>
      </h2>
      <p>
        The relationships I take from — the people who give the organism what it
        needs, when it needs it: healing when below health, sustenance at health,
        inputs to build on, in two registers — family (personal) and services
        (professional). Roles run by need — each appears in the order life requires
        it, the next hire triggered by getting busier or richer — and each carries
        its benchmark: the person’s qualities (available, able, affective,
        advocating) where encounters are close, the service’s (consistent,
        comprehensive, current) where they thin.
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
