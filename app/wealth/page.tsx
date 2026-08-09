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
            ["Investment", "Coverage ratio \u22652.0 — returns covering expenses twice over; leverages capital", true, "Total investment returns \u00f7 expenses. At 1.0 the bills are paid but inflation eats the principal; at 2.0 I spend half and reinvest half, so capital keeps its real value — roughly 29\u00d7 annual expenses. On a die-with-zero plan the requirement falls as the horizon shortens."],
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
            ["Fixed", "Gross margin >70% (income surviving the recurring burn)", true, "Read the corporate way: the share of gross income kept after fixed costs — everything that arrives monthly whether or not anything happens, held under 30%. With variable spending under 5%, total expenses hold under 35% of gross; tax takes under 15%; at least half of every dollar flows on to payments, savings, and investment."],
            ["Home", "Facilities (rent; utilities; services) and consumables (groceries; detergents; toiletries)", true, undefined, undefined, true],
            ["Health", "Care (fitness; beauty; therapy; childcare; eldercare; pet care)", true, undefined, undefined, true],
            ["Mobility", "Transit (rideshare; public transit) and vehicle (lease; fuel; charging)", true, undefined, undefined, true],
            ["Finance", "Insurance (health; disability; property; umbrella; life) and services (fees)", true, undefined, undefined, true],
            ["Personal", "Experiences (dining; entertainment; education) and goods (software subscriptions)", true, undefined, undefined, true],
          ],
        },
        {
          category: "Capital (once-off costs)",
          metrics: [
            ["", "The lumpy costs, capped so they never set the pace", false],
            ["Variable", "Operating margin >65% (income surviving all burn)", true, "What remains of gross once fixed and variable costs are both paid. The variable line itself — irregular and once-off spending, averaged annually — is capped under 5%, because lumpy costs are where budgets quietly die."],
            ["Home", "Equipment (furniture; appliances) and repairs (services)", true, undefined, undefined, true],
            ["Health", "Medical (out-of-pocket; diagnostics)", true, undefined, undefined, true],
            ["Mobility", "Vehicle (repairs)", true, undefined, undefined, true],
            ["Finance", "Services (professional fees)", true, undefined, undefined, true],
            ["Personal", "Goods (devices; clothing; toys) and experiences (travel)", true, undefined, undefined, true],
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
            ["Credit", "FICO >800 (the top scoring tier)", true, "The US credit score (300–850); above 800 is the tier where every lender's best rate is on the table. Built from five weighted factors."],
            ["Payment history", "35% (never a missed payment)", true, undefined, undefined, true],
            ["Utilization", "30% (balances under 10% of limits)", true, undefined, undefined, true],
            ["Credit history", "15% (average account age, kept long)", true, undefined, undefined, true],
            ["New credit", "10% (inquiries kept rare)", true, undefined, undefined, true],
            ["Credit mix", "10% (revolving and installment both held)", true, undefined, undefined, true],
            ["Interest", "Blended cost of debt <5% APR", true, "The weighted average rate across everything owed, kept below what invested capital conservatively returns so debt never outruns assets. Cards and personal loans are unsecured — extended on credit alone; the rest is secured on the asset it bought."],
            ["Credit cards", "Paid in full monthly (0% effective)", true, undefined, undefined, true],
            ["Unsecured", "Personal, student, and business loans (none held)", true, undefined, undefined, true],
            ["Auto loan", "None preferred; <7% APR if held", true, undefined, undefined, true],
            ["Mortgage", "Market rate; refinanced when it pays", true, undefined, undefined, true],
            ["HELOC", "Revolving credit secured on home equity", true, undefined, undefined, true],
            ["SBLOC", "<6% APR (borrowing against the portfolio)", true, undefined, undefined, true],
            ["Load", "Debt service \u226436% of gross (the lenders\u2019 own ceiling)", true, "The 28/36 rule, the standard US underwriting ceiling: housing debt service within 28% of gross income, all debt service within 36%. Access and price mean nothing without a cap on quantity."],
            ["Housing", "\u226428% of gross", true, undefined, undefined, true],
            ["Total", "\u226436% of gross, counting every obligation", true, undefined, undefined, true],
          ],
        },
        {
          category: "Tax (civic dues)",
          metrics: [
            ["", "Paid in full, on time, and never a percent more than the law asks", false],
            ["Income", "Effective rate <15% (money arriving)", true, "The levers, by mechanism — deferrals: 401(k) and HSA. Deductions: standard or itemized (charitable), QBI, self-employed health insurance, half of self-employment tax, and Schedule C business costs (home office at business-use %, mileage, equipment, software). Credits: foreign tax, saver’s, education, premium. Exclusions: employer-paid benefits and Roth growth."],
            ["Federal", "Income (progressive); self-employment (15.3% — Social Security and Medicare)", true, undefined, undefined, true],
            ["State", "Income (0–13% by state; a relocation criterion)", true, undefined, undefined, true],
            ["Deductions", "Standard or itemized (charitable giving); QBI (pass-through income)", true, undefined, undefined, true],
            ["Consumption", "Effective rate <5% (money leaving)", true, "Thin levers: most states exempt groceries and medicine; rates vary by where you buy; and every unspent dollar is untaxed — the savings margin is the real consumption shelter."],
            ["Sales", "State and local, by jurisdiction", true, undefined, undefined, true],
            ["Excise", "Fuel, tires, and specific goods", true, undefined, undefined, true],
            ["Fees", "Tolls, permits, and licenses", true, undefined, undefined, true],
            ["Ownership", "Effective rate <2% (assets held)", true, "Levers: the homestead exemption on an owned primary residence, protesting the appraisal, and renting — the tax rides inside rent but the liability stays the landlord’s. Municipal bond interest is the classic tax-exempt holding income."],
            ["Property", "Local rates on real estate held", true, undefined, undefined, true],
            ["Transfer", "Effective rate <15% (assets transferred)", true, "Levers: hold past one year for long-term rates, harvest losses against gains, realize in low-income years (the 0% bracket), the home-sale exclusion, the annual gift exclusion, and step-up at death under the estate exemption — though dying with zero retires most of this."],
            ["Capital gains", "Long-term rates (0/15/20%) by holding past one year", true, undefined, undefined, true],
            ["Gift", "Annual exclusion per recipient; unified with the estate exemption above it", true, undefined, undefined, true],
            ["Estate", "Federal exemption; none owed below it", true, undefined, undefined, true],
          ],
        },
        {
          category: "Profits (free cash flow)",
          metrics: [
            ["", "I run myself as a firm — free cash has three uses, each with a rule", false],
            ["Financing", "Repayment margin ≥15% (principal retired first)", true, "The financing decision holds the right mix of debt and equity: every dollar of principal retired is a guaranteed return at the loan’s own rate, so the highest rate goes first. While no debt is held, the margin has nothing to retire and folds into investing — the floor binds only when a balance exists."],
            ["Unsecured", "Maximum pace (the highest rate, retired first)", true, undefined, undefined, true],
            ["Secured", "Minimum schedule (the lowest rate, held longest)", true, undefined, undefined, true],
            ["Dividends", "Payout margin ≤15% (the owner’s draw and the giving)", true, "The dividend decision: cash that cannot beat the hurdle rate is returned to the owners — and the owner is me. The Personal rows in Expenses are the operating baseline; the draw is consumption and giving beyond it — upgrades, indulgences, donations. The cap does the quiet work: lifestyle is held to growing slower than capital, whatever income does."],
            ["Investing", "Savings margin ≥70% (the compounding engine)", true, "The investment decision: allocate only to assets returning above the minimum acceptable hurdle rate. The margin is a firm of one’s retained earnings — the share of free cash that becomes capital — and the single ratio the whole page exists to protect."],
            ["Investments", "The standing portfolio (cash, funds, and shares)", true, undefined, undefined, true],
            ["Ventures", "The active positions (real, equity, and currency)", true, undefined, undefined, true],
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
            ["Liquidity", "Current ratio ≥3.0 (cash covering obligations three times over)", true, "Current assets over current liabilities — the lender’s first read on solvency. Three months of burn against one month of obligations holds the ratio at three; below it the buffer thins, far above it cash sits idle."],
            ["Checking", "Working capital (one month of expenses)", true, "The operating account: enough to clear one month's obligations, no more, since idle cash loses to inflation.", undefined, true],
            ["Savings", "Reserve capital (two months of expenses, in high-yield savings)", true, "The buffer for capital expenses, debt, taxes, and the health plan’s out-of-pocket maximum — sized to the largest single claim, not their sum — held where it earns a market rate while staying a day away.", undefined, true],
          ],
        },
        {
          category: "Funds (passive management)",
          metrics: [
            ["", "Future me funded first, dreams funded on a date — both before the market gets a dollar", false],
            ["Retirement", "Contribution ratio 100% (every shell filled to its annual limit)", true, "The self-employed stack, in funding order. Maximum contribution is the benchmark because the space expires each year it goes unused — a year skipped never comes back."],
            ["Solo 401(k)", "Employee and employer contributions (both sides maxed)", true, "One person plays both roles: the employee elective deferral plus an employer profit-share of ~25% of compensation, stacking to the highest annual limit of any retirement shell.", undefined, true],
            ["HSA", "Triple-tax-advantaged (deductible in, untaxed growth, untaxed out)", true, "The only shell untaxed at all three gates when spent on medical costs, now or reimbursed decades later. Eligibility comes from the HSA-qualified plan in Security — insurance opens the shell, allocation fills it.", undefined, true],
            ["Roth IRA", "Post-tax in, untaxed forever", true, "Funded with taxed dollars, then never taxed again — growth and withdrawals both. Income limits push high earners through the backdoor conversion; contributions, though not growth, stay accessible without penalty — a quiet second reserve.", undefined, true],
            ["Rewards", "Every dream priced, dated, and funded (the system pays its owner)", true, "The level where the waterfall pays its owner: weddings, holidays, homes, a child’s education — the big purchases, planned rather than impulsed. Funded only once retirement is filled; the reward follows the security."],
            ["Deposits", "Goal-dated Treasuries and CDs (maturing when the purchase arrives)", true, "Money with a date on it — matched to the purchase it funds rather than to a return target.", undefined, true],
          ],
        },
        {
          category: "Shares (active brokerage)",
          metrics: [
            ["", "The market bought whole, with a small budget for opinions", false],
            ["Hedge", "Maximum allocation (a hedge against retirement shortfalls)", true, "Capital grown past what the retirement shells can hold — insurance against needing more than they offer. Diversified indices are stock ownership in its beginner-safe form: the market’s return without requiring anyone to be right."],
            ["ETFs", "Broad index funds (blend, value, and growth; held for decades)", true, undefined, undefined, true],
            ["Education", "<20% of the portfolio (tuition capped)", true, "Market education paid at market prices: positions sized so being wrong is affordable tuition. The apprenticeship for ventures — judging businesses with money at stake before running one.", undefined, false],
            ["Stocks", "Individual positions (micro to mega caps)", true, undefined, undefined, true],
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
            ["Shelter", "A primary residence at minimum viable (a use asset, not an investment)", true, "The roof is bought for use — it pays imputed rent, never income — so minimum viable keeps capital in the levels that compound. No purchase is planned anytime soon; the homeowners benchmark in Security waits on the same decision."],
            ["Residence", "Owner-occupied (pending purchase)", true, undefined, undefined, true],
            ["Yield", "Positive leverage (cap rate above the cost of debt)", true, "An income property earns its place only when its capitalization rate clears the mortgage rate behind it — otherwise the lender keeps the return and I keep the work. Run as a business, never as a hope."],
            ["Rentals", "Income property (pending)", true, undefined, undefined, true],
            ["Haven", "Pending (a hedge, not a bet)", true, "The safe-haven position — a store of value against debasement, sized as insurance rather than conviction. The benchmark waits on the first position."],
            ["Gold", "Precious metals (physical or allocated)", true, undefined, undefined, true],
            ["Passion", "Pending (the return includes the owning)", true, "Assets that pay in enjoyment while they appreciate — the one level where holding is part of the yield. Unbenchmarked until the first acquisition."],
            ["Collectibles", "Element specimens, antique furniture, and historical artifacts", true, undefined, undefined, true],
          ],
        },
        {
          category: "Equity (active ownership)",
          metrics: [
            ["", "Ownership in businesses, mine before anyone else’s", false],
            ["Business", "Eudaemonia, Inc. — US C-Corp, registered 1 August 2019", true, "The operating company: learning systems, productions, and coaching run through it."],
            ["Venture", "Early-stage positions (pending)", true],
            ["Private", "Private placements (pending)", true],
          ],
        },
        {
          category: "Currency (active trading)",
          metrics: [
            ["", "The speculative edge, sized so its failure is a lesson and not an event", false],
            ["FOREX", "Pending", true],
            ["Crypto", "Held as an allocation, never a thesis", true],
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
        (payments). The cascade is fixed — expenses under 35% of gross, tax under
        15%, so at least half of every dollar flows on to payments, savings, and
        investment. The savings margin is the number the rest exist to protect.
      </p>
      <NestedTable {...EFFICIENCY} />

      <h2 id="growth">
        Growth <span className="heading-paren">(Allocation)</span>
      </h2>
      <p>
        Where the savings margin goes, in two registers: the standing portfolio filled
        as a waterfall — liquidity, then retirement, then rewards, then the hedge, then
        education (investments) — and the active positions taken only once every level
        is full (ventures). Each level is a grade of financial development, and the
        hierarchy is the discipline: nothing ventures until everything is invested.
      </p>
      <NestedTable {...GROWTH} />
    </>
  );
}
