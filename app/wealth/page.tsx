import type { Metadata } from "next";
import PageHeading from "@/components/PageHeading";
import { NestedTable } from "@/components/NestedTable";
import type { StatTableData } from "@/components/StatTable";

export const metadata: Metadata = { title: "Wealth" };

// Wealth in three branches, hierarchical as well as independent: Security
// (insure the downside, then earn), Efficiency (spend and settle like an income
// statement), Growth (allocate what remains, investments before ventures).
// Two bands per branch, per the site standard. Actual figures — balances, net
// worth, holdings — are deliberately excluded site-wide; this page publishes
// the system and the benchmarks it runs against, not the account values.
// Primary metrics carry the benchmark; constituents hang indented beneath
// (the ALMI pattern from /health). Benchmarks marked "pending" are unset.

const SECURITY: StatTableData = {
  title: "Security",
  groups: [
    {
      domain: "Insurance",
      label: "",
      rows: [
        {
          category: "Personal (first-party cover)",
          metrics: [
            ["", "I insure my capacity and possessions before chasing any upside", false],
            ["Health", "HSA-qualified high-deductible plan; out-of-pocket maximum held within cash reserves", true, "In the US, an HSA-qualified plan pairs lower premiums with a Health Savings Account — the only triple-tax-advantaged account (deductible in, growing untaxed, untaxed out for medical costs). The benchmark: the plan's worst-case annual cost never exceeds the cash reserve."],
            ["Disability", "Own-occupation cover replacing ~60% of income", true, "The insurance on earning capacity itself — statistically likelier to be needed before 65 than life cover. Own-occupation pays if I cannot do my work, not merely any work."],
            ["Property", "Coverage ratio >1.0 — insured at or above replacement cost", true, "Insured value ÷ replacement cost. Below 1.0 a loss is partly mine; at or above it the asset is made whole."],
            ["Renters", "Liability-first at $300k+ with replacement-cost contents", true, undefined, undefined, true],
            ["Auto", "None owned — non-owner liability while carless; 250/500/100 when owned", true, undefined, undefined, true],
            ["Homeowners", "No purchase planned anytime soon — the benchmark waits on ownership", true, undefined, undefined, true],
          ],
        },
        {
          category: "Social (third-party cover)",
          metrics: [
            ["", "I cover what my life or liability could cost other people", false],
            ["Umbrella", "$1M+ excess liability, layered above renters and non-owner auto cover", true, "A personal umbrella policy sits on top of the liability limits in the underlying policies — renters, and auto or non-owner auto while carless — and is priced in the low hundreds per year per million. The standard sizing: at least net worth, rounded up to the next million."],
            ["Life", "Coverage ratio >1.0 of obligations — term only; minimal while no dependants", true, "Term life pays others when I cannot. Sized to obligations left behind (debts, dependants, commitments), not to income; whole-life products are an investment and an insurance doing both jobs badly."],
          ],
        },
      ],
    },
    {
      domain: "Income",
      label: "",
      rows: [
        {
          category: "Active (earning capacity)",
          metrics: [
            ["", "Income bought with my hours — the assets it leverages do not scale", false],
            ["Service", "Hourly rate ($500); leverages time", true, "Time exchanged directly for money. The rate is the single lever: it prices every engagement, whether billed as professional fees, salary, or wage."],
            ["Professional", "Consulting and design engagements", true, undefined, undefined, true],
            ["Salary", "Employment — none held", true, undefined, undefined, true],
            ["Wage", "Hourly work — none held", true, undefined, undefined, true],
            ["Prizes", "Performance awards", true, undefined, undefined, true],
            ["Product", "Sales margin (higher is better); leverages materials and technology", true, "Things sold rather than hours billed; margin is the fraction of each sale kept after its costs."],
            ["Commission", "Sales of others’ products", true, undefined, undefined, true],
            ["Capital gains", "Assets sold above basis", true, undefined, undefined, true],
          ],
        },
        {
          category: "Passive (ownership performance)",
          metrics: [
            ["", "Income my assets earn — people, capital, and technology scale where hours cannot", false],
            ["Partnership", "Percentage share (higher is better); leverages people and technology", true, "Income from association rather than labour or capital: a share of someone else's sales or audience."],
            ["Royalty", "Intellectual property licensed out", true, undefined, undefined, true],
            ["Sponsorship", "Audience access sold", true, undefined, undefined, true],
            ["Affiliate", "Referral percentages", true, undefined, undefined, true],
            ["Platform", "Content, subscriptions, and ad revenue", true, undefined, undefined, true],
            ["Investment", "Coverage ratio \u22652.0 — returns covering expenses twice over; leverages capital", true, "Total investment returns \u00f7 expenses: the financial-freedom ratio. At 1.0 the returns pay the bills but inflation eats the principal; sustainability means spending only the real return and reinvesting the inflation share, so the required ratio is nominal \u00f7 real return — about 1.75 at 7% returns and 3% inflation, rounded to 2.0 for sequence-of-returns margin over a long horizon. Spend one half, reinvest the other; equivalently, capital of roughly 29\u00d7 annual expenses. The ratio is the freedom trigger, not a forever rule: on a die-with-zero plan the requirement glides down as the horizon shortens — principal is spent on schedule in the final decades, with an annuity floor carrying the years past the plan."],
            ["Interest", "Debt instruments and cash", true, undefined, undefined, true],
            ["Dividends", "Equity distributions", true, undefined, undefined, true],
            ["Rental", "Property lease income", true, undefined, undefined, true],
            ["Insurance", "Policy payouts and annuities", true, undefined, undefined, true],
            ["Gifts", "Share of income (lower is better); leverages nothing", true, "Unearned inflows — the null case: income with no exchange and no leverage behind it, which is why this is the one benchmark that runs lower-is-better. Welcome, never planned on — a rising share signals dependence rather than fortune."],
            ["Bonuses", "Discretionary awards", true, undefined, undefined, true],
            ["Grants", "Institutional awards and scholarships", true, undefined, undefined, true],
            ["Donations", "Personal gifts", true, undefined, undefined, true],
            ["Inheritance", "Estate transfers", true, undefined, undefined, true],
          ],
        },
      ],
    },
  ],
};

const EFFICIENCY: StatTableData = {
  title: "Efficiency",
  groups: [
    {
      domain: "Expenses",
      label: "",
      rows: [
        {
          category: "Operational (monthly burn)",
          metrics: [
            ["", "The recurring cost of running my life, held under a third of income", false],
            ["Fixed", "Gross margin <30% — recurring burn as a share of gross income", true, "Every cost that arrives monthly whether or not anything happens. Held under 30% so that no month's income is spoken for before it lands."],
            ["Home", "Facilities (rent; utilities); consumables (groceries; toiletries)", true, undefined, undefined, true],
            ["Health", "Wellness (fitness; beauty)", true, undefined, undefined, true],
            ["Finance", "Insurance (health; property; life; liability); services (fees)", true, undefined, undefined, true],
            ["Personal", "Experiences (education; entertainment; restaurants; travel); goods (clothing; stationery)", true, undefined, undefined, true],
          ],
        },
        {
          category: "Capital (once-off costs)",
          metrics: [
            ["", "The lumpy costs, capped so they never set the pace", false],
            ["Variable", "Operating margin <5% — once-off outlays as a share of gross income", true, "Irregular and once-off spending, averaged annually. Capped low because lumpy costs are where budgets quietly die."],
            ["Home", "Facilities (services; repairs)", true, undefined, undefined, true],
            ["Health", "Medical (diagnostics; copays)", true, undefined, undefined, true],
            ["Finance", "Insurance (excess); services (professional fees)", true, undefined, undefined, true],
            ["Personal", "Goods (technology; capital items); experiences (education; travel)", true, undefined, undefined, true],
          ],
        },
      ],
    },
    {
      domain: "Payments",
      label: "",
      rows: [
        {
          category: "Debt (interest repayments)",
          metrics: [
            ["", "Credit kept expensive to lose and cheap to use", false],
            ["Credit", "FICO >800 — the top scoring tier", true, "The US credit score (300–850); above 800 is the tier where every lender's best rate is on the table. Built from five weighted factors."],
            ["Payment history", "35% — never a missed payment", true, undefined, undefined, true],
            ["Utilization", "30% — balances under 10% of limits", true, undefined, undefined, true],
            ["Credit history", "15% — average account age, kept long", true, undefined, undefined, true],
            ["New credit", "10% — inquiries kept rare", true, undefined, undefined, true],
            ["Credit mix", "10% — revolving and installment both held", true, undefined, undefined, true],
            ["Interest", "Blended cost of debt <5% APR", true, "The weighted average rate across everything owed. Kept below what invested capital conservatively returns, so debt never outruns assets."],
            ["Credit cards", "Paid in full monthly — 0% effective", true, undefined, undefined, true],
            ["Auto loan", "None preferred; <7% APR if held", true, undefined, undefined, true],
            ["Mortgage", "Market rate; refinanced when it pays", true, undefined, undefined, true],
            ["SBLOC", "<6% APR — borrowing against the portfolio", true, undefined, undefined, true],
          ],
        },
        {
          category: "Tax (governmental rights)",
          metrics: [
            ["", "Paid in full, on time, and never a percent more than the law asks", false],
            ["Income", "Effective rate <15%", true, "Total income tax paid ÷ gross income. As a self-employed filer the levers are entity structure, retirement contributions, and the QBI deduction."],
            ["Federal", "Income (progressive); self-employment (15.3% — both halves of Social Security and Medicare)", true, undefined, undefined, true],
            ["State", "Income (0–13% by state; a relocation criterion)", true, undefined, undefined, true],
            ["Consumption", "Effective rate <5%", true, "Taxes on spending rather than earning — mostly set by where I live and how much I buy."],
            ["Sales", "State and local, by jurisdiction", true, undefined, undefined, true],
            ["Excise", "Fuel, tires, and specific goods", true, undefined, undefined, true],
            ["Fees", "Tolls, permits, and licenses", true, undefined, undefined, true],
            ["Ownership", "Effective rate <2%", true, "Taxes on holding and transferring assets rather than earning or spending."],
            ["Property", "Local rates on real estate held", true, undefined, undefined, true],
            ["Capital gains", "Long-term rates (0/15/20%) by holding past one year", true, undefined, undefined, true],
            ["Estate", "Federal exemption; state by domicile", true, undefined, undefined, true],
          ],
        },
        {
          category: "Profits (cash distribution)",
          metrics: [
            ["", "What is left is allocated by rule, not by mood", false],
            ["Financing", "Repayment margin ≥15% — principal retired first", true, "The share of net profit that retires debt principal: unsecured debt at maximum pace, secured debt at minimum, since its rate is lowest."],
            ["Unsecured", "Maximum pace", true, undefined, undefined, true],
            ["Secured", "Minimum schedule", true, undefined, undefined, true],
            ["Dividends", "Payout margin ≤15% — the lifestyle draw", true, "What profit is allowed to become consumption. Capped so lifestyle never grows as fast as income."],
            ["Investing", "Savings margin ≥70% — the compounding engine", true, "The share of net profit that becomes capital. The single ratio the whole page exists to protect."],
            ["Investments", "The standing portfolio", true, undefined, undefined, true],
            ["Ventures", "The active positions", true, undefined, undefined, true],
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
      domain: "Investments",
      label: "",
      rows: [
        {
          category: "Cash (active banking)",
          metrics: [
            ["", "Three months of burn in cash — enough to be calm, too little to be lazy", false],
            ["Checking", "Working capital — one month of expenses", true, "The operating account: enough to clear one month's obligations, no more, since idle cash loses to inflation."],
            ["Savings", "Reserve capital — two months of expenses, in high-yield savings", true, "The buffer for capital expenses, debt, and taxes, held where it earns a market rate while staying a day away."],
          ],
        },
        {
          category: "Funds (passive management)",
          metrics: [
            ["", "The tax-advantaged shells filled first, every year they can be", false],
            ["Retirement", "Solo 401(k), HSA, and Roth IRA at maximum contribution", true, "The self-employed stack, in funding order: a Solo 401(k) takes both employee and employer contributions, the HSA is the only account untaxed in, growing, and out, and a Roth IRA compounds untaxed forever. Maximum contribution is the benchmark because the space expires each year it goes unused. The HSA's eligibility comes from the health plan in Security — insurance opens the shell, allocation fills it."],
            ["Deposits", "Goal-dated Treasuries and CDs for planned purchases", true, "Money with a date on it — matched to the purchase it funds rather than to a return target."],
          ],
        },
        {
          category: "Shares (active brokerage)",
          metrics: [
            ["", "The market bought whole, with a small budget for opinions", false],
            ["ETFs", "The core — broad index funds at maximum allocation", true, "Blend, value, or growth indices held for decades. The position that makes the retirement math work without requiring anyone to be right."],
            ["Stocks", "<20% of the portfolio — market education money", true, "Individual positions, capped where being wrong is affordable tuition; micro to mega caps."],
          ],
        },
      ],
    },
    {
      domain: "Ventures",
      label: "",
      rows: [
        {
          category: "Real (active custody)",
          metrics: [
            ["", "Assets I can stand on, hold, or hand over", false],
            ["Property", "A primary residence at minimum viable; income property through Erfaring", true, "Erfaring (Pty) Ltd — the real-estate venture registered 24 October 2024, holding title where deals justify custody."],
            ["Gold", "Pending — a hedge, not a bet", true, undefined, undefined, true],
            ["Collectibles", "Pending", true, undefined, undefined, true],
          ],
        },
        {
          category: "Equity (active management)",
          metrics: [
            ["", "Ownership in businesses, mine before anyone else’s", false],
            ["Business", "Eudaemonia, Inc. — US C-Corp, registered 1 August 2019", true, "The operating company: learning systems, productions, and coaching run through it."],
            ["Venture", "Early-stage positions — pending", true, undefined, undefined, true],
            ["Private", "Private placements — pending", true, undefined, undefined, true],
          ],
        },
        {
          category: "Currency (active trading)",
          metrics: [
            ["", "The speculative edge, sized so its failure is a lesson and not an event", false],
            ["FOREX", "Pending", true, undefined, undefined, true],
            ["Crypto", "Held as an allocation, never a thesis", true, undefined, undefined, true],
          ],
        },
      ],
    },
  ],
};

export default function WealthPage() {
  return (
    <>
      <PageHeading
        title="Wealth"
        hatnote={<>Capital — how I protect it, spend it, and compound it</>}
      />

      <p className="lead">
        Wealth is one balance sheet read three ways: what protects it (security), what
        leaves it (efficiency), and what compounds it (growth). The branches are also a
        sequence — insure first, then earn; spend and settle cleanly; invest what
        remains, and venture only past sufficiency.
      </p>
      <p>
        Unlike the other status pages, this one publishes no readings. Balances, net
        worth, and holdings are excluded from the site by design; what is public is the
        system itself — every account the money moves through, and the benchmark each is
        held to. The structure is auditable even where the numbers are private.
      </p>

      <h2 id="security">
        Security <span className="heading-paren">(Protection)</span>
      </h2>
      <p>
        The floor under everything else, in two registers: the losses I have transferred
        to insurers (insurance) and the earning that funds the whole system (income).
        Cover is bought against capacity first and possessions second, and income is
        priced actively by the hour until ownership can pay instead.
      </p>
      <NestedTable {...SECURITY} />

      <h2 id="efficiency">
        Efficiency <span className="heading-paren">(Leverage)</span>
      </h2>
      <p>
        The income statement of a life, in two registers: what running it costs
        (expenses) and what must be settled with lenders, the state, and the future
        (payments). Every line is a margin against gross income, and the last one —
        the savings margin — is the number the rest exist to protect.
      </p>
      <NestedTable {...EFFICIENCY} />

      <h2 id="growth">
        Growth <span className="heading-paren">(Allocation)</span>
      </h2>
      <p>
        Where the savings margin goes, in two registers: the standing portfolio built in
        strict order — cash, funds, shares (investments) — and the active positions
        taken only once the passive base is funded (ventures). The hierarchy is the
        discipline: nothing ventures until everything is invested.
      </p>
      <NestedTable {...GROWTH} />
    </>
  );
}
