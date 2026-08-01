import type { Metadata } from "next";
import PageHeading from "@/components/PageHeading";
import { NestedTable } from "@/components/NestedTable";
import type { StatTableData } from "@/components/StatTable";
import WikiLink from "@/components/WikiLink";
import { References, type ReferenceSection } from "@/components/References";

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
          category: "Geographic (natural conditions)",
          metrics: [
            ["", "The land’s givens — chosen once, then lived with daily", false],
            ["Climate (4)", "Temperature (18–25°C), humidity (40–60%), sunshine (2,500+ hrs/yr), and seasons (mild winters)", true],
            ["Air (3)", "Quality (AQI ≤50; PM2.5 ≤10 µg/m³), pollen (low counts), and wind (light; ≤20 km/h)", true],
            ["Hazards (5)", "Storms (low tornado and hurricane risk), wildfires (low risk; smoke-free seasons), heat (limited 38°C+ days), pests (low mosquito and tick pressure), and grid (reliable; backed up)", true],
            ["Terrain (5)", "Landscape (hills; water views), water bodies (lakes; rivers), green space (within 300 m), nature access (wildlife; reserves), and elevation (low to moderate)", true],
            ["Position (3)", "Centrality (mid-country), time zone (coast-bridging; family-overlapping), and flight reach (direct hubs)", true],
          ],
        },
        {
          category: "Economic (market conditions)",
          metrics: [
            ["", "What the market charges and offers at city scale", false],
            ["Opportunity (4)", "Industries (health; education; tech), employers (HQ density), startups (top-10 VC metro), and wages (above national median)", true],
            ["Costs (5)", "Housing (≤30% of income), property (price-to-income ≤5), living index (<100; US average = 100), purchasing power (local index ≥140), and insurance (competitive market)", true],
            ["Taxes (3)", "Income (0% state ideal), property (≤1.5%), and sales (≤8.5%)", true],
            ["Growth (4)", "Output (metro GDP +3%/yr), population (net inflow), investment (rising), and construction (supply keeping rents flat)", true],
            ["Talent (3)", "Universities (research-tier), skilled inflow (net positive), and retention (graduates who stay)", true],
          ],
        },
        {
          category: "Societal (human conditions)",
          metrics: [
            ["", "The people of a place — who lives here, and how", false],
            ["Safety (3)", "Crime (index ≤40/100), policing (responsive), and emergency care (Level I trauma center)", true],
            ["Quality of life (4)", "Healthcare (US News–ranked hospital in metro), walkability (neighborhood Walk Score ≥80), traffic (short average commutes), and community (founder and fitness scenes)", true],
            ["Culture (5)", "Mindset (builders; health-conscious), friendliness (warm but direct), language (English-first), diversity (international mix), and cuisine (rich culinary influences; chef scene)", true],
            ["Politics (3)", "State (business-friendly), city (competently run), and stability (predictable policy)", true],
            ["Architecture (4)", "Character (a city that looks like itself), heritage (preserved districts), styles (layered eras), and streetscape (human-scale blocks)", true],
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

const LIFESTYLE_PERSONAL: ReferenceSection[] = [
  {
    label: "My lifestyle guidelines derived from codified experience",
    items: [
      {
        id: "p-lifestyle",
        cite: (
          <>
            <strong>Lifestyle</strong>: <em><WikiLink href="https://youtube.com/playlist?list=PLkxFhm6Fhw9q6XAQg-BMKvFWNqs_AmXWh">Life Management Design</WikiLink> (2026)</em>; guidelines for designing the perfect day and ideal week • course (YouTube)
          </>
        ),
      },
      {
        id: "p-exercise",
        cite: (
          <>
            <strong>Exercise</strong>: <em><WikiLink href="https://youtube.com/playlist?list=PLkxFhm6Fhw9pveFENc_sdY9wRT8JAjDlk">Training Program Design</WikiLink> (2025)</em>; guidelines for designing balanced, integrated exercise programs • course (YouTube)
          </>
        ),
      },
      {
        id: "p-education",
        cite: (
          <>
            <strong>Education</strong>: <em><WikiLink href="https://youtu.be/h8FYdFHeDtg">Top-60 YouTube Resources</WikiLink> (2025)</em>; guidelines for continuous self-education • presentation (YouTube)
          </>
        ),
      },
    ],
  },
  {
    label: "My lifestyle data derived from continuous and event-based tracking",
    items: [
      {
        id: "p-sleep",
        cite: (
          <>
            <strong>Sleep</strong>: <em>PPG, thermometry, and accelerometry (continuous)</em>; tracks overall sleep quality using heart rate, HRV, SpO&#8322;, respiratory rate, skin temperature, and movement (OURA) • report (app)
          </>
        ),
      },
      {
        id: "p-activity",
        cite: (
          <>
            <strong>Activity</strong>: <em>Accelerometry and ECG (continuous)</em>; tracks overall physical activity levels using heart rate and movement frequency, intensity, duration, and direction (Apple Watch) • report (app)
          </>
        ),
      },
      {
        id: "p-nutrition",
        cite: (
          <>
            <strong>Nutrition</strong>: <em>Weighted food records (events)</em>; estimates overall energy and nutrient intake using food measurements against nutrition databases (Cronometer) • report (app)
          </>
        ),
      },
      {
        id: "p-attention",
        cite: (
          <>
            <strong>Attention</strong>: <em>Digital behavioral chronometry (continuous)</em>; tracks overall screen time for work, education, management, and entertainment using HCI informatics (Apple devices) • report (app)
          </>
        ),
      },
    ],
  },
  {
    label: "My lifestyle\u2019s impact on key measures of life capital",
    items: [
      {
        id: "p-health",
        cite: (
          <>
            <strong>Health</strong>: <em>Functional integrity status (2026)</em>; the effects of sleep, exercise, nutrition, walking, and maintenance activities on measures of integrity, balance, and capacity • <WikiLink href="/health">health</WikiLink> (page)
          </>
        ),
      },
      {
        id: "p-knowledge",
        cite: (
          <>
            <strong>Knowledge</strong>: <em>Applied intelligence status (2026)</em>; the effects of work, studying, service, management, and maintenance on measures of education, skills, and works • <WikiLink href="/knowledge">knowledge</WikiLink> (page)
          </>
        ),
      },
      {
        id: "p-wealth",
        cite: (
          <>
            <strong>Wealth</strong>: <em>Financial asset status (2026)</em>; the effects of service and maintenance on measures of asset ownership • <WikiLink href="/wealth">wealth</WikiLink> (page)
          </>
        ),
      },
      {
        id: "p-network",
        cite: (
          <>
            <strong>Network</strong>: <em>Social influence status (2026)</em>; the effects of service, management, play, and connection activities on measures of access, impact, and love • network (page pending)
          </>
        ),
      },
    ],
  },
];

const LIFESTYLE_SOCIAL: ReferenceSection[] = [
  {
    label: "Public guidelines for human wellbeing",
    items: [
      {
        id: "s-sleep",
        cite: (
          <>
            <strong>Sleep</strong>: Watson, N. F., et al. (2015). Recommended amount of sleep for a healthy adult. <em>Sleep</em>, 38(6). Seven or more hours.
          </>
        ),
        url: "https://pubmed.ncbi.nlm.nih.gov/26039963/",
        urlLabel: "PubMed",
      },
      {
        id: "s-activity",
        cite: (
          <>
            <strong>Activity</strong>: World Health Organization (2020). <em>WHO guidelines on physical activity and sedentary behaviour</em>. 150–300 minutes moderate weekly.
          </>
        ),
        url: "https://www.who.int/publications/i/item/9789240015128",
        urlLabel: "who.int",
      },
      {
        id: "s-nutrition",
        cite: (
          <>
            <strong>Nutrition</strong>: USDA and HHS. <em>Dietary Guidelines for Americans, 2025–2030</em>.
          </>
        ),
        url: "https://www.dietaryguidelines.gov/",
        urlLabel: "dietaryguidelines.gov",
      },
      {
        id: "s-alcohol",
        cite: (
          <>
            <strong>Alcohol</strong>: World Health Organization (2023). <em>No level of alcohol consumption is safe for our health</em>. No safe amount; less is better.
          </>
        ),
        url: "https://www.who.int/europe/news/item/04-01-2023-no-level-of-alcohol-consumption-is-safe-for-our-health",
        urlLabel: "who.int",
      },
      {
        id: "s-education",
        cite: (
          <>
            <strong>Education</strong>: UNESCO (2015). <em>Recommendation on Adult Learning and Education</em>. Lifelong learning across literacy, professional development, and citizenship.
          </>
        ),
        url: "https://www.unesco.org/en/legal-affairs/recommendation-adult-learning-and-education",
        urlLabel: "unesco.org",
      },
      {
        id: "s-air",
        cite: (
          <>
            <strong>Air</strong>: World Health Organization (2021). <em>WHO global air quality guidelines</em>. PM2.5 and related thresholds.
          </>
        ),
        url: "https://www.who.int/publications/i/item/9789240034228",
        urlLabel: "who.int",
      },
      {
        id: "s-radiation",
        cite: (
          <>
            <strong>Radiation</strong>: International Commission on Radiological Protection (2007). <em>ICRP Publication 103</em>. Occupational exposure 20 mSv per year averaged over five years, never above 50 mSv in one; public exposure 1 mSv per year.
          </>
        ),
        url: "https://www.icrp.org/publication.asp?id=ICRP%20Publication%20103",
        urlLabel: "icrp.org",
      },
      {
        id: "s-green",
        cite: (
          <>
            <strong>Green space</strong>: World Health Organization Europe (2016). <em>Urban green spaces and health</em>. The 300 m access recommendation.
          </>
        ),
      },
      {
        id: "s-temp",
        cite: (
          <>
            <strong>Temperature</strong>: ANSI/ASHRAE Standard 55. <em>Thermal environmental conditions for human occupancy</em>.
          </>
        ),
      },
      {
        id: "s-housing",
        cite: (
          <>
            <strong>Housing</strong>: US Department of Housing and Urban Development. The 30%-of-income cost-burden threshold.
          </>
        ),
        url: "https://www.huduser.gov/",
        urlLabel: "huduser.gov",
      },
      {
        id: "s-energy",
        cite: (
          <>
            <strong>Energy</strong>: FAO/WHO/UNU (2004). <em>Human energy requirements</em>. Physical activity level bands; 1.7 marks an active lifestyle.
          </>
        ),
      },
    ],
  },
  {
    label: "Public data derived from population surveys and public indices",
    items: [
      {
        id: "s-gallup",
        cite: (
          <>
            <strong>Wellbeing</strong>: <em>Gallup World Poll</em> (annual); life evaluation on the Cantril ladder across 140+ countries — the base for the <em>World Happiness Report</em> and the income-to-happiness literature • <WikiLink href="https://worldhappiness.report/">worldhappiness.report</WikiLink>
          </>
        ),
      },
      {
        id: "s-atus",
        cite: (
          <>
            <strong>Time allocation</strong>: <em>American Time Use Survey</em> (annual since 2003); how a national sample spends the twenty-four hours, by activity (BLS/Census) • <WikiLink href="https://www.bls.gov/tus/">bls.gov</WikiLink>
          </>
        ),
      },
      {
        id: "s-nhanes",
        cite: (
          <>
            <strong>Health and nutrition</strong>: <em>NHANES</em> (continuous); interviews, physical examination, and laboratory work on a national sample; its <em>What We Eat in America</em> component is the intake base for the dietary guidelines (CDC/NCHS) • <WikiLink href="https://www.cdc.gov/nchs/nhanes/">cdc.gov</WikiLink>
          </>
        ),
      },
      {
        id: "s-ukbiobank",
        cite: (
          <>
            <strong>Cohort biology</strong>: <em>UK Biobank</em> (2006–, ongoing); 500,000 participants with genomics, imaging, and wrist accelerometry — the source behind most step-count and sleep dose-response findings • <WikiLink href="https://www.ukbiobank.ac.uk/">ukbiobank.ac.uk</WikiLink>
          </>
        ),
      },
      {
        id: "s-lss",
        cite: (
          <>
            <strong>Radiation</strong>: <em>Life Span Study</em> (1950–, ongoing); ~120,000 Hiroshima and Nagasaki survivors with individual dose estimates — the primary source informing every international dose limit (RERF) • <WikiLink href="https://www.rerf.or.jp/en/">rerf.or.jp</WikiLink>
          </>
        ),
      },
      {
        id: "s-piaac",
        cite: (
          <>
            <strong>Adult skills</strong>: <em>OECD PIAAC Survey of Adult Skills</em> (decennial); literacy, numeracy, and problem solving among adults aged 16–65 across member countries • <WikiLink href="https://www.oecd.org/en/about/programmes/piaac.html">oecd.org</WikiLink>
          </>
        ),
      },
      {
        id: "s-scf",
        cite: (
          <>
            <strong>Household wealth</strong>: <em>Survey of Consumer Finances</em> (triennial); family balance sheets — income, assets, debt, and net worth (US Federal Reserve) • <WikiLink href="https://www.federalreserve.gov/econres/scfindex.htm">federalreserve.gov</WikiLink>
          </>
        ),
      },
      {
        id: "s-fbi",
        cite: (
          <>
            <strong>Crime</strong>: <em>FBI Crime Data Explorer</em> (annual); offence and arrest counts reported by agency through the national incident-based system • <WikiLink href="https://cde.ucr.cjis.gov/">cde.ucr.cjis.gov</WikiLink>
          </>
        ),
      },
      {
        id: "s-noaa",
        cite: (
          <>
            <strong>Climate</strong>: <em>NOAA 30-year normals</em>; temperature, humidity, and sunshine • <WikiLink href="https://www.ncei.noaa.gov/">ncei.noaa.gov</WikiLink>
          </>
        ),
      },
      {
        id: "s-airnow",
        cite: (
          <>
            <strong>Air</strong>: <em>EPA AirNow</em> (daily); AQI and PM2.5 • <WikiLink href="https://www.airnow.gov/">airnow.gov</WikiLink>
          </>
        ),
      },
      {
        id: "s-c2er",
        cite: (
          <>
            <strong>Cost of living</strong>: <em>C2ER index</em> (quarterly); US average = 100 • <WikiLink href="https://www.coli.org/">coli.org</WikiLink>
          </>
        ),
      },
      {
        id: "s-walk",
        cite: (
          <>
            <strong>Walkability</strong>: <em>Walk Score</em> (live); 0–100 by amenity distance • <WikiLink href="https://www.walkscore.com/">walkscore.com</WikiLink>
          </>
        ),
      },
      {
        id: "s-cms",
        cite: (
          <>
            <strong>Hospitals</strong>: <em>CMS Care Compare</em> (quarterly); mortality, readmission, safety, and patient-experience measures reported by every Medicare-certified hospital • <WikiLink href="https://www.medicare.gov/care-compare/">medicare.gov</WikiLink>
          </>
        ),
      },
      {
        id: "s-bea",
        cite: (
          <>
            <strong>Metro economy</strong>: <em>BEA GDP by metro</em> (annual); with BLS wages and Census population • <WikiLink href="https://www.bea.gov/">bea.gov</WikiLink>
          </>
        ),
      },
    ],
  },
  {
    label: "Public evidence of lifestyle’s impact on longevity and wellbeing",
    items: [
      {
        id: "s-li",
        cite: (
          <>
            <strong>Lifestyle (combined)</strong>: Li, Y., et al. (2018). Impact of healthy lifestyle factors on life expectancies in the US population. <em>Circulation</em>, 138(4). Five low-risk factors; 14.0 years for women, 12.2 for men.
          </>
        ),
        url: "https://pubmed.ncbi.nlm.nih.gov/29712712/",
        urlLabel: "PubMed",
      },
      {
        id: "s-cappuccio",
        cite: (
          <>
            <strong>Sleep</strong>: Cappuccio, F. P., et al. (2010). Sleep duration and all-cause mortality: a systematic review and meta-analysis. <em>Sleep</em>, 33(5).
          </>
        ),
        url: "https://pubmed.ncbi.nlm.nih.gov/20469800/",
        urlLabel: "PubMed",
      },
      {
        id: "s-arem",
        cite: (
          <>
            <strong>Activity</strong>: Arem, H., et al. (2015). Leisure time physical activity and mortality: a detailed pooled analysis of the dose-response relationship. <em>JAMA Internal Medicine</em>, 175(6). 661,000 adults; benefit plateaus at three to five times the guideline minimum.
          </>
        ),
        url: "https://pubmed.ncbi.nlm.nih.gov/25844730/",
        urlLabel: "PubMed",
      },
      {
        id: "s-estruch",
        cite: (
          <>
            <strong>Nutrition</strong>: Estruch, R., et al. (2018). Primary prevention of cardiovascular disease with a Mediterranean diet supplemented with extra-virgin olive oil or nuts. <em>New England Journal of Medicine</em>, 378(25). PREDIMED; 7,447 randomised — a rare dietary trial rather than a cohort.
          </>
        ),
        url: "https://pubmed.ncbi.nlm.nih.gov/29897866/",
        urlLabel: "PubMed",
      },
      {
        id: "s-gbdalcohol",
        cite: (
          <>
            <strong>Alcohol</strong>: GBD 2016 Alcohol Collaborators (2018). Alcohol use and burden for 195 countries and territories, 1990–2016. <em>The Lancet</em>, 392(10152). 694 surveys and 592 studies; risk rises monotonically from zero.
          </>
        ),
        url: "https://pubmed.ncbi.nlm.nih.gov/30146330/",
        urlLabel: "PubMed",
      },
      {
        id: "s-doll",
        cite: (
          <>
            <strong>Smoking</strong>: Doll, R., Peto, R., Boreham, J., &amp; Sutherland, I. (2004). Mortality in relation to smoking: 50 years&rsquo; observations on male British doctors. <em>BMJ</em>, 328(7455). Smokers died about ten years younger; quitting at 30 recovered nearly all of it.
          </>
        ),
        url: "https://pubmed.ncbi.nlm.nih.gov/15213107/",
        urlLabel: "PubMed",
      },
      {
        id: "s-casedeaton",
        cite: (
          <>
            <strong>Education</strong>: Case, A., &amp; Deaton, A. (2021). Life expectancy in adulthood is falling for those without a BA degree. <em>PNAS</em>, 118(11). The educational divide in mortality more than doubled between 1990 and 2018.
          </>
        ),
        url: "https://www.pnas.org/doi/full/10.1073/pnas.2024777118",
        urlLabel: "PNAS",
      },
      {
        id: "s-marmot",
        cite: (
          <>
            <strong>Work</strong>: Marmot, M. G., et al. (1991). Health inequalities among British civil servants: the Whitehall II study. <em>The Lancet</em>, 337(8754). 10,314 civil servants; health tracks job control, not just income.
          </>
        ),
        url: "https://pubmed.ncbi.nlm.nih.gov/1674771/",
        urlLabel: "PubMed",
      },
      {
        id: "s-chetty",
        cite: (
          <>
            <strong>Wealth</strong>: Chetty, R., et al. (2016). The association between income and life expectancy in the United States, 2001–2014. <em>JAMA</em>, 315(16). 1.4 billion tax records; 14.6 years between the richest and poorest one percent.
          </>
        ),
        url: "https://pubmed.ncbi.nlm.nih.gov/27063997/",
        urlLabel: "PubMed",
      },
      {
        id: "s-holtlunstad",
        cite: (
          <>
            <strong>Connection</strong>: Holt-Lunstad, J., Smith, T. B., &amp; Layton, J. B. (2010). Social relationships and mortality risk: a meta-analytic review. <em>PLoS Medicine</em>, 7(7). 308,849 participants; strong relationships raise survival odds by half.
          </>
        ),
        url: "https://pubmed.ncbi.nlm.nih.gov/20668659/",
        urlLabel: "PubMed",
      },
      {
        id: "s-dockery",
        cite: (
          <>
            <strong>Air</strong>: Dockery, D. W., et al. (1993). An association between air pollution and mortality in six US cities. <em>New England Journal of Medicine</em>, 329(24). The Harvard Six Cities study; the basis of the American fine-particle standard.
          </>
        ),
        url: "https://pubmed.ncbi.nlm.nih.gov/8179653/",
        urlLabel: "PubMed",
      },
      {
        id: "s-james",
        cite: (
          <>
            <strong>Green space</strong>: James, P., et al. (2016). Exposure to greenness and mortality in a nationwide prospective cohort of women. <em>Environmental Health Perspectives</em>, 124(9).
          </>
        ),
        url: "https://pubmed.ncbi.nlm.nih.gov/27074702/",
        urlLabel: "PubMed",
      },
      {
        id: "s-ozasa",
        cite: (
          <>
            <strong>Radiation</strong>: Ozasa, K., et al. (2012). Studies of the mortality of atomic bomb survivors, Report 14, 1950–2003. <em>Radiation Research</em>, 177(3). The dose-response that sets the limits.
          </>
        ),
        url: "https://pubmed.ncbi.nlm.nih.gov/22171960/",
        urlLabel: "PubMed",
      },
      {
        id: "s-richardson",
        cite: (
          <>
            <strong>Radiation (occupational)</strong>: Richardson, D. B., et al. (2015). Risk of cancer from occupational exposure to ionising radiation (INWORKS). <em>BMJ</em>, 351. 309,932 nuclear workers; risk persists at low dose rates.
          </>
        ),
        url: "https://pubmed.ncbi.nlm.nih.gov/26487649/",
        urlLabel: "PubMed",
      },
      {
        id: "s-sterling",
        cite: (
          <>
            <strong>Humidity</strong>: Sterling, E. M., et al. (1985). Criteria for human exposure to humidity in occupied buildings. <em>ASHRAE Transactions</em>, 91(1). The 40–60% band.
          </>
        ),
      },
      {
        id: "s-tversky",
        cite: (
          <>
            <strong>Decision order</strong>: Tversky, A. (1972). Elimination by aspects: a theory of choice. <em>Psychological Review</em>, 79(4). Veto criteria before preference criteria.
          </>
        ),
      },
    ],
  },
];

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

      <References
        title={<>References <span className="heading-paren">(Personal)</span></>}
        sections={LIFESTYLE_PERSONAL}
      />

      <References
        id="social"
        title={<>References <span className="heading-paren">(Social)</span></>}
        sections={LIFESTYLE_SOCIAL}
      />
    </>
  );
}
