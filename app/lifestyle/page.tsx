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
// personal/social). Definitions are pending. Space runs two scales — Living
// (micro: residential, commercial, public) and Environment (macro: geography,
// socioeconomics, still taking shape). Time is filled.

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
      domain: "Environmental Conditions",
      label: "",
      rows: [
        {
          category: "Geography (natural givens)",
          metrics: [
            ["", "The land’s givens — chosen once, then lived with daily", false],
            ["Climate (4)", "Temperature (18–25°C), humidity (40–60%), sunshine (2,500+ hrs/yr), and seasons (mild winters)", true],
            ["Air (3)", "Quality (AQI ≤50; PM2.5 ≤10 µg/m³), pollen (low counts), and wind (light; ≤20 km/h)", true],
            ["Terrain (4)", "Landscape (hills; water views), water bodies (lakes; rivers), green space (within 300 m), and elevation (low to moderate)", true],
            ["Position (3)", "Centrality (mid-country), time zone (coast-bridging; family-overlapping), and flight reach (direct hubs)", true],
            ["Hazards (4)", "Storms (low tornado and hurricane risk), wildfires (low risk; smoke-free seasons), heat (limited 38°C+ days), and grid (reliable; backed up)", true],
          ],
        },
        {
          category: "Economy (market conditions)",
          metrics: [
            ["", "What the market charges and offers at city scale", false],
            ["Taxes (3)", "Income (0% state ideal), property (≤1.5%), and sales (≤8.5%)", true],
            ["Costs (3)", "Housing (≤30% of income), living index (<100; US average = 100), and insurance (competitive market)", true],
            ["Opportunity (4)", "Industries (health; education; tech), employers (HQ density), startups (top-10 VC metro), and wages (above national median)", true],
            ["Growth (4)", "Output (metro GDP +3%/yr), population (net inflow), investment (rising), and construction (supply keeping rents flat)", true],
          ],
        },
        {
          category: "Society (human climate)",
          metrics: [
            ["", "The people of a place — who lives here, and how", false],
            ["Culture (5)", "Mindset (builders; health-conscious), friendliness (warm but direct), language (English-first), diversity (international mix), and architecture (distinct character; preserved heritage)", true],
            ["Politics (3)", "State (business-friendly), city (competently run), and stability (predictable policy)", true],
            ["Safety (3)", "Crime (index ≤40/100), policing (responsive), and emergency care (Level I trauma center)", true],
            ["Quality of life (4)", "Healthcare (ranked systems), walkability (neighborhood Walk Score ≥80), traffic (short average commutes), and community (founder and fitness scenes)", true],
          ],
        },
      ],
    },
    {
      domain: "Living Conditions",
      label: "",
      rows: [
        {
          category: "Residential (private services)",
          metrics: [
            ["", "Five layers by provider — the building\u2019s shell down to my bag", false],
            ["Infrastructure (6)", "Noise (neighbors; construction; traffic; nightlife), light (exposure; views; streetlights; curtains), air (windows; smokers; damp; HVAC), water (pressure; hot supply; washer), power (outlets; electric stovetop; backup), and internet (fiber; cell signal; routers)", true],
            ["Spaces (6)", [
              "Bedroom (closet; blackout curtains), bathroom (shower), kitchen (fridge; storage; bin; washer), dining/office (open area), living/gym (",
              <WikiLink key="wf" href="https://www.youtube.com/playlist?list=PLkxFhm6Fhw9oypG0tLrOTNtnPtsGMUG2w">wall and floor</WikiLink>,
              "), and parking (bay)",
            ], true],
            ["Furnishings (6)", [
              "Furniture (",
              <WikiLink key="bed" href="https://www.avocadogreenmattress.com/">Avocado</WikiLink>,
              "; ",
              <WikiLink key="dsk" href="https://www.flexispot.com/comhar-all-in-one-standing-desk-wooden-top-48-w">FlexiSpot</WikiLink>,
              "; ",
              <WikiLink key="chr" href="https://varierfurniture.com/">Varier</WikiLink>,
              "; ",
              <WikiLink key="lng" href="https://burrow.com/">Burrow</WikiLink>,
              "), electronics (",
              <WikiLink key="tv" href="https://www.lg.com/us/oled-tvs">LG</WikiLink>,
              "; ",
              <WikiLink key="atv" href="https://www.apple.com/apple-tv-4k/">Apple</WikiLink>,
              "; ",
              <WikiLink key="snd" href="https://www.sonos.com/en-us/shop/beam">Sonos</WikiLink>,
              "; ",
              <WikiLink key="hue" href="https://www.philips-hue.com/">Hue</WikiLink>,
              "), appliances (",
              <WikiLink key="air" href="https://levoit.com/products/core-600s-smart-true-hepa-air-purifier">Levoit</WikiLink>,
              "; ",
              <WikiLink key="h2o" href="https://aquatruwater.com/">AquaTru</WikiLink>,
              "; ",
              <WikiLink key="ath" href="https://www.airthings.com/">Airthings</WikiLink>,
              "), fitness (",
              <WikiLink key="stb" href="https://beyond-balance.net/products/personal-training-stations-custom?variant=51283870646554">Beyond Balance</WikiLink>,
              "; ",
              <WikiLink key="rog" href="https://www.roguefitness.com/rogue-individual-mat">Rogue</WikiLink>,
              "), kitchenware (",
              <WikiLink key="kit" href="https://fromourplace.com/">Our Place</WikiLink>,
              "; ",
              <WikiLink key="mdi" href="https://madeincookware.com/">Made In</WikiLink>,
              "), and textiles (",
              <WikiLink key="bdg" href="https://www.coyuchi.com/">Coyuchi</WikiLink>,
              ")",
            ], true],
            ["Belongings (6)", [
              "Apparel (",
              <WikiLink key="clo" href="https://vuoriclothing.com/">Vuori</WikiLink>,
              "; ",
              <WikiLink key="ftw" href="https://www.inov8.com/us/gym/shoes/barefoot/mens">inov8</WikiLink>,
              "), toiletries (",
              <WikiLink key="hyg" href="https://www.saltandstone.com/">Salt &amp; Stone</WikiLink>,
              "; ",
              <WikiLink key="grm" href="https://hensonshaving.com/">Henson</WikiLink>,
              "), devices (",
              <WikiLink key="dev" href="https://www.apple.com/store">Apple</WikiLink>,
              "; ",
              <WikiLink key="rad" href="https://www.radiacode.com/">RadiaCode</WikiLink>,
              "), documents, training kit (",
              <WikiLink key="grn" href="https://www.gornation.com/">GORNATION</WikiLink>,
              "; ",
              <WikiLink key="cro" href="https://timelessjump.com/products/timeless-jump-rope">Timeless</WikiLink>,
              "; ",
              <WikiLink key="kk" href="https://www.knkg.com/collections/all/products/plus-duffel-mini-charcoal">King Kong</WikiLink>,
              "), and everyday-carry (",
              <WikiLink key="bag" href="https://bellroy.com/">Bellroy</WikiLink>,
              "; ",
              <WikiLink key="slv" href="https://www.orbitkey.com/">Orbitkey</WikiLink>,
              "; ",
              <WikiLink key="acc" href="https://ridge.com/">Ridge</WikiLink>,
              ")",
            ], true],
            ["Services (6)", "Security (access), cleaning (housekeeping; laundry), waste (recycling), concierge (delivery), maintenance (plumbing; HVAC), and amenities (fitness center; sauna; pool)", true],
          ],
        },
        {
          category: "Commercial (market services)",
          metrics: [
            ["", "The market’s five deliverables, each answered with a brand", false],
            ["Provisions (5)", [
              "Grocery (",
              <WikiLink key="wf" href="https://www.wholefoodsmarket.com/">Whole Foods</WikiLink>,
              "; ",
              <WikiLink key="tj" href="https://www.traderjoes.com/">Trader Joe&rsquo;s</WikiLink>,
              "; ",
              <WikiLink key="sp" href="https://www.sprouts.com/">Sprouts</WikiLink>,
              "), coffee (",
              <WikiLink key="onx" href="https://onyxcoffeelab.com/">Onyx</WikiLink>,
              "; ",
              <WikiLink key="cmt" href="https://cometeer.com/">Cometeer</WikiLink>,
              "), department (",
              <WikiLink key="tg" href="https://www.target.com/">Target</WikiLink>,
              "; ",
              <WikiLink key="cv" href="https://www.cvs.com/">CVS</WikiLink>,
              "), online (",
              <WikiLink key="amz" href="https://www.amazon.com/">Amazon</WikiLink>,
              "), and hardware (",
              <WikiLink key="ac" href="https://www.acehardware.com/">Ace</WikiLink>,
              "; ",
              <WikiLink key="hd" href="https://www.homedepot.com/">Home Depot</WikiLink>,
              ")",
            ], true],
            ["Facilities (3)", [
              "Clubs (",
              <WikiLink key="lt" href="https://www.lifetime.life/">Life Time</WikiLink>,
              "), gyms (",
              <WikiLink key="ch" href="https://www.anytimefitness.com/">Anytime Fitness</WikiLink>,
              "), and studios (",
              <WikiLink key="ps" href="https://www.peerspace.com/">Peerspace</WikiLink>,
              ")",
            ], true],
            ["Services (4)", [
              "Financial (",
              <WikiLink key="chs" href="https://www.chase.com/">Chase</WikiLink>,
              "; ",
              <WikiLink key="sch" href="https://www.schwab.com/">Schwab</WikiLink>,
              "; ",
              <WikiLink key="lem" href="https://www.lemonade.com/">Lemonade</WikiLink>,
              "), technology (",
              <WikiLink key="ggl" href="https://www.google.com/">Google</WikiLink>,
              "; ",
              <WikiLink key="ant" href="https://www.anthropic.com/">Anthropic</WikiLink>,
              "; ",
              <WikiLink key="met" href="https://www.meta.com/">Meta</WikiLink>,
              "), telecoms (",
              <WikiLink key="vzn" href="https://www.verizon.com/">Verizon</WikiLink>,
              "; ",
              <WikiLink key="mnt" href="https://www.mintmobile.com/">Mint</WikiLink>,
              "), and health (",
              <WikiLink key="om" href="https://www.onemedical.com/">One Medical</WikiLink>,
              "; ",
              <WikiLink key="qd" href="https://www.questhealth.com/">Quest</WikiLink>,
              ")",
            ], true],
            ["Outings (4)", [
              "Eateries (",
              <WikiLink key="bbc" href="https://bluebottlecoffee.com/">Blue Bottle</WikiLink>,
              "; ",
              <WikiLink key="itg2" href="https://www.intelligentsia.com/">Intelligentsia</WikiLink>,
              "; ",
              <WikiLink key="tfk" href="https://www.truefoodkitchen.com/">True Food Kitchen</WikiLink>,
              "; ",
              <WikiLink key="dig" href="https://www.diginn.com/">DIG</WikiLink>,
              "), markets (farmers), entertainment (",
              <WikiLink key="alm" href="https://drafthouse.com/">Alamo Drafthouse</WikiLink>,
              "), and events (concerts; festivals)",
            ], true],
            ["Travel (3)", [
              "Accommodation (",
              <WikiLink key="ab" href="https://www.airbnb.com/">Airbnb</WikiLink>,
              "; ",
              <WikiLink key="bg" href="https://www.theblueground.com/">Blueground</WikiLink>,
              "; ",
              <WikiLink key="ht" href="https://www.hoteltonight.com/">HotelTonight</WikiLink>,
              "), transport (",
              <WikiLink key="ubr" href="https://www.uber.com/">Uber</WikiLink>,
              "; ",
              <WikiLink key="tur" href="https://turo.com/">Turo</WikiLink>,
              "; ",
              <WikiLink key="dl" href="https://www.delta.com/">Delta</WikiLink>,
              "), and connectivity (",
              <WikiLink key="arl" href="https://www.airalo.com/">Airalo</WikiLink>,
              ")",
            ], true],
          ],
        },
        {
          category: "Public (civic services)",
          metrics: [
            ["", "What only the city provides: paperwork, power, movement, institutions, and the outdoors", false],
            ["Administration (6)", [
              "Identification (",
              <WikiLink key="ssa" href="https://www.ssa.gov/">Social Security Administration</WikiLink>,
              "), immigration (",
              <WikiLink key="usc" href="https://www.uscis.gov/">USCIS</WikiLink>,
              "), taxation (",
              <WikiLink key="irs" href="https://www.irs.gov/">IRS</WikiLink>,
              "), driving (DMV), records (county clerk), and business (secretary of state)",
            ], true],
            ["Utilities (4)", "Power (city electric utility), water (city water utility), gas (gas company), and waste (sanitation department)", true],
            ["Transport (3)", [
              "Local transit (city transit authority), intercity rail (",
              <WikiLink key="amt" href="https://www.amtrak.com/">Amtrak</WikiLink>,
              "), and flights (airport authority)",
            ], true],
            ["Institutions (6)", [
              "Health (county hospitals), education (school district), police (city department), fire (fire department), libraries (library district), and mail (",
              <WikiLink key="usp" href="https://www.usps.com/">USPS</WikiLink>,
              ")",
            ], true],
            ["Outdoor (3)", "Parks (national; state; city), trails (hiking; greenways), and waters (pools; lakes; beaches)", true],
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
            ["16:00–17:00", "Eat + Educate (1 hr) — yogurt mix with the most relevant lecture of the day", true],
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
      <PageHeading title="Lifestyle" hatnote={<>Practice — how I allocate my activity, time, and space</>} />

      <p className="lead">
        Lifestyle is one life read three ways: what I do (activity), when I do it
        (time), and where I do it (space). Together they are the design I actually live
        by, rather than the one I would report.
      </p>
      <p>
        The twelve habits below account for a full twenty-four hours. That is the point
        of the taxonomy: it is a partition of the day, not a list of good intentions — if
        the hours don&rsquo;t sum, something is mis-stated. Each habit&rsquo;s daily
        allocation sits in its definition; the schedule that places them follows under
        time, and where they happen under space.
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

      <h2 id="time">Time <span className="heading-paren">(Routines)</span></h2>
      <p>
        When the habits happen, in two registers: the shape of a single day (daily) and
        the shape of a week (weekly). Hours are fixed to blocks so the allocation above
        survives contact with an actual calendar.
      </p>
      <NestedTable {...TIME} />

      <h2 id="space">Space <span className="heading-paren">(Resources)</span></h2>
      <p>
        Where the habits happen, at two scales, outermost first. The macro scale weighs
        the place itself — nature, market, and people at city size. The micro scale is
        where I live, read from my own four walls outward — residential, then the market
        and civic amenities within reach; it doubles as a relocation checklist.
      </p>
      <NestedTable {...SPACE} />
    </>
  );
}
