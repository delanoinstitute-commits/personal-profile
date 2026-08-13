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
// child. Two statuses: "Pending" marks a role whose holder will be published
// and linked once the contact is made; "Private" marks a role held or to be
// held whose details stay unpublished by design — private individuals,
// protected relationships, confidential rooms. Kept deliberately minimal: standing relationships only —
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
            ["Family (blood)", "The best families stay available, capable, and affective long after the raising", true],
            ["Mother", "Rizél Delano", true, "The best parents remain the first call — no appointment, no invoice, no judgment.", undefined, true],
            ["Maternal grandfather", "Louis van den Berg (Deceased)", true, "The care two generations up, held now in memory — present when it counted.", undefined, true],
            ["Community (place)", "The best communities are close, warm, and watchful", true],
            ["Neighbors", "Private", true, "The best neighbors are close, warm, and watchful. One of the map’s six connectors — the local world’s map of who shows up and who to trust.", undefined, true],
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
            ["", "My hours bought back, my home kept, my body groomed", false],
            ["Agents (time)", "The best agents are always available, consistent, and fast", true],
            ["Artificial intelligence", "LLMs (Claude; Gemini)", true, "The one role AI holds outright — always available, never inconsistent, and instant.", undefined, true],
            ["Personal assistant", "Private", true, "The last hire of the ladder: a human agent, arriving only when the calendar is worth more than the salary.", undefined, true],
            ["Keepers (home)", "The best keepers are capable, consistent, and likable (trusted alone at home)", true],
            ["Housekeeper", "Sonja Mightywoman", true, "The first hire of the buying-back-time ladder — the next arrives whenever life gets busier or income gets larger.", undefined, true],
            ["Handyman", "Pending", true, "The best handymen close the gap between the landlord’s contract and daily life — everything smaller than a major break.", undefined, true],
            ["Groomers (body)", "The best groomers are consistent, likable, and close by", true],
            ["Hairdresser", "Pending", true, "The best hairdressers are consistent, likable, and close by — kept for years, they know the head they are working on.", undefined, true],
            ["Esthetician", "Pending", true, "The best estheticians keep the skin on schedule — quarterly, clinical, and honest about what works.", undefined, true],
          ],
        },
        {
          category: "Knowledge (instructors)",
          metrics: [
            ["", "The teachers I take instruction from — knowledge fed to the organism, not traded", false],
            ["Educators (mind)", "The best educators are capable, current, and clear", true],
            ["Artificial intelligence", "LLMs (Claude; Gemini)", true, "The best tutors are clear, patient, and paced to the student — and the LLM is all three at once, on demand.", undefined, true],
            ["Virtual teachers", "Creators (YouTube); Authors (Kindle; Audible); Podcasters (Apple)", true, "Instruction at broadcast distance — a faculty assembled shelf by shelf, one subscription at a time.", undefined, true],
          ],
        },
        {
          category: "Health (examiners)",
          metrics: [
            ["", "My clinicians, from the first call to the annual scan", false],
            ["Clinicians (care)", "The best clinicians are available, capable, and know exactly who to call next", true],
            ["Pharmacist", "Pending", true, "The best pharmacists are available, consistent, and current on every script. The most frequent health touchpoint in American life — roughly thirty-five pharmacy visits for every four provider visits.", undefined, true],
            ["Dentist", "Dr. JJ Serfontein", true, "The best dentists diagnose, clean, and operate under one current roof — every additional service is one fewer relationship the network has to carry.", undefined, true],
            ["Doctor", "Dr. Darren Levin", true, "The best doctors are available, capable, and know exactly who to call next. One of the map’s six connectors — the medical world reached through a single relationship.", undefined, true],
            ["Psychologist", "Private", true, "The best psychologists treat below health and refer beyond it — therapy as treatment is nurture; as development it sits under Growth, with the practitioners.", undefined, true],
            ["Veterinarian", "Pending (waits on pets)", true, "The best veterinarians are available, capable, and gentle.", undefined, true],
            ["Diagnosticians (data)", "The best diagnosticians measure the same way using the latest tech", true],
            ["Optometrist", "Dr. Johann Kruger", true, "The best optometrists are consistent and current, one prescription to the next.", undefined, true],
            ["Physiologist", "Tim Klein; Reece McDonald", true, "The best physiologists test consistently and on the latest protocols — the product is the trend line, not the reading.", undefined, true],
            ["Radiologist", "Cape Radiology", true, "The best radiologists scan on the same current machine year after year.", undefined, true],
          ],
        },
        {
          category: "Wealth (advisors)",
          metrics: [
            ["", "One firm reads the whole balance sheet — personal and corporate in a single conversation", false],
            ["Counselors (money)", "The best counselors read the whole position and sell nothing", true],
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
            ["Household (hearth)", "The best households share the values, the direction, and the load", true],
            ["Partner", "Private", true, "The best partners share the values, the direction, and the load — chosen once, kept daily.", undefined, true],
            ["Pets", "Pending", true, "The best pets keep no ledger (affection without account).", undefined, true],
            ["Friends (chosen)", "The best friends are present, honest, and glad when you win", true],
            ["Confidants", "Private (the closest five)", true, "The closest five — the ones who hear the news before it is good.", undefined, true],
            ["Circle", "Private (the wider fifteen)", true, "The wider fifteen — the friendships that survive on monthly attention.", undefined, true],
            ["Family (blood)", "The best families turn shared history into chosen friendship", true],
            ["Siblings", "Brother", true, "The best siblings turn shared history into chosen friendship — the relationship that starts unchosen and earns its re-choosing.", undefined, true],
            ["Cousins", "Private", true, "The best cousins pick up mid-conversation after years apart.", undefined, true],
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
            ["Elders (ahead)", "The best elders are a decade ahead and still ask more than they tell", true],
            ["Mentors", "Pending", true, "The best mentors are a decade ahead and still ask more than they tell. One of the map’s six connectors — the rooms ahead, entered by introduction.", undefined, true],
            ["Peers (beside)", "The best peers are candid and slightly out of your league", true],
            ["Masterminds", "Private", true, "The best masterminds are small, candid, and sworn to confidence. One of the map’s six connectors — every member a gateway to their own cluster.", undefined, true],
            ["Language partner", "Private", true, "The best language partners trade tongues evenly and correct in the moment.", undefined, true],
          ],
        },
        {
          category: "Health (practitioners)",
          metrics: [
            ["", "The professionals I train with, week in and week out — collaboration, not diagnosis", false],
            ["Developers (performance)", "The best developers build capacity before I need it", true],
            ["Coach", "Pending", true, "The best coaches see what I cannot and say it before I want to hear it.", undefined, true],
            ["Trainer", "Pending", true, "The best trainers program for the decade, not the session.", undefined, true],
            ["Therapist", "Private", true, "The best therapists ask the question I have been avoiding.", undefined, true],
          ],
        },
        {
          category: "Wealth (managers)",
          metrics: [
            ["", "The people building alongside me, stakes aligned", false],
            ["Builders (inside)", "The best builders are opposite in skill, identical in values", true],
            ["Cofounders", "Pending", true, "The best cofounders are opposite in skill, identical in values — mismatched skills compound, mismatched values detonate.", undefined, true],
            ["Managers", "Pending", true, "The best managers need the goal, not the method.", undefined, true],
            ["Backers (outside)", "The best backers bring the network and the patience, not just the check", true],
            ["Investors", "Pending", true, "The best investors bring the network and the patience, not just the check. One of the map’s six connectors — the deal world behind the check.", undefined, true],
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
            ["Family (blood)", "The best families inherit the time before the money", true],
            ["Parents", "Mother (Rizél Delano)", true, "The first claim runs upstream: the warm-hand inheritance — time and experiences given while they can still be shared.", undefined, true],
            ["Children", "None", true, "The claim that does not exist yet — the map holds the slot.", undefined, true],
            ["Nephews and nieces", "Private", true, "The best nephews and nieces know you as a presence, not a legend — the mentor they get before they know to look for one.", undefined, true],
          ],
        },
        {
          category: "Health (advocates)",
          metrics: [
            ["", "The health I hold for others — proxy, navigator, and advocate when they cannot be", false],
            ["Wards (care)", "The best wards sign the proxy before it is needed", true],
            ["Parents", "Mother (Rizél Delano)", true, "The proxy held for the person who once held mine — advocacy granted in advance, used only on the day it must be.", undefined, true],
            ["Partner", "Private", true, "The mutual grant: each holds the other’s directives before either needs them.", undefined, true],
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
            ["Learners (taught)", "The best learners outgrow the teacher", true],
            ["Students", "Pending", true, "The best students outgrow the teacher — the teaching’s point is its own obsolescence.", undefined, true],
            ["Audience", "Pending", true, "The learners at broadcast distance — taught without being met.", undefined, true],
          ],
        },
        {
          category: "Wealth (multipliers)",
          metrics: [
            ["", "The people who turn my output into income — theirs and mine", false],
            ["Patrons (demand)", "The best patrons pay for the value, not the hours", true],
            ["Employers", "Pending", true, "The patron at zero distance: one buyer of all the hours.", undefined, true],
            ["Clients", "Pending", true, "The patron at arm’s length: they buy outcomes, and the rate prices the value rather than the time.", undefined, true],
            ["Customers", "Pending", true, "The patron at scale: they buy the product, never the person — the only demand that compounds.", undefined, true],
            ["Stakeholders (supply)", "The best stakeholders treat the venture as their own", true],
            ["Employees", "Pending", true, "The stake paid in labor: the best employees treat the venture as their own, and are given reason to.", undefined, true],
            ["Shareholders", "Pending", true, "The stake paid in capital: fortunes shared both ways.", undefined, true],
            ["Causes (gift)", "The best causes need the money less each year", true],
            ["Charities", "Pending", true, "The best charities retire their own necessity — effectiveness as the benchmark, need falling year over year.", undefined, true],
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
