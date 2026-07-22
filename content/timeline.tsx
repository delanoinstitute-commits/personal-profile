import WikiLink from "@/components/WikiLink";
import { TimelineEra } from "@/components/Timeline";

// The year-by-year biography, grouped into life eras. Rendered by the History
// page via the <Timeline> component.
export const eras: TimelineEra[] = [
  {
    title: "Spring — childhood (1987–2000)",
    subtitle: "Krugersdorp, farm life, and the West Rand of Gauteng",
    entries: [
      { year: "1987", age: "0", body: "Born in Krugersdorp to a 21-year-old mother and 19-year-old father; older brother JP was 2. The family lived in Sunward Park." },
      { year: "1989", age: "2", body: "Moved to the grandparents' farm amid financial hardship. Developed a lifelong rocking habit; behaviors at kindergarten were misreported as abuse." },
      { year: "1990–91", age: "3–4", body: "A run of moves around Little Falls, Kenmare, and Witpoortjie; parents divorced (1990). Mother started a construction business." },
      { year: "1993–94", age: "6–7", body: "Bitten by the farm dog and broke an arm in a fall. Got a Super Nintendo (Mortal Kombat) and started school at Muldersdrift Primary." },
      { year: "1995", age: "8", body: "South Africa won the Rugby World Cup; grandmother died. Became obsessed with the Mortal Kombat film and its soundtrack — still a workout staple decades later." },
      { year: "1997", age: "10", body: "Family moved to Evander. Tried gymnastics for six months. Mother lost a finger in a bike accident and closed her business." },
      { year: "1998", age: "11", body: "A bicycle accident led to a traumatic injury and surgery. Took up skateboarding with best friend Charl Steyn and discovered a love of music." },
      { year: "1999", age: "12", body: "Mother married step-father Manie, who adopted both boys. Frequent trips to Johannesburg and Pretoria skateparks; punk rock and rap (MxPx, Blink-182, Eminem)." },
      { year: "2000", age: "13", body: "Compound fracture while skateboarding. Briefly attended Secunda high school. Linkin Park's Hybrid Theory on repeat — still." },
    ],
  },
  {
    title: "Spring — adolescence (2001–2005)",
    subtitle: "Leaving school, Pretoria, kung fu, and the first trip to China",
    entries: [
      { year: "2001", age: "14", body: "Mother left the step-father; the brothers began homeschooling with INTEC College. Heavy street skating." },
      { year: "2002", age: "15", body: "Moved to Garsfontein, Pretoria; made new friends at Thrashers skatepark (Andani Thakhathi, Caleb Georgiades, Jacques Cronje). Dropped formal schooling entirely." },
      { year: "2003", age: "16", body: "First jobs — performing magic at a Menlyn mall kiosk and at Sidewalk Surfer. Used a gym membership mainly to watch Dragon Ball Z online." },
      {
        year: "2004",
        age: "17",
        body: (
          <>
            Joined the{" "}
            <WikiLink href="https://xwmkungfu.com/">Tang Lang Cuan Wushu school</WikiLink>{" "}
            under Shi Fu Yang Long Fei — his first real mentor — and became obsessed with
            physical training. Brother JP died on 10 March. Traveled to Shijiazhuang,
            China, to teach English for three months.
          </>
        ),
      },
      { year: "2005", age: "18", body: "Managed a DVD store; waited tables at Java; began weekly Mandarin classes at the Pretoria Chinese School. John Little's writing on Bruce Lee became a training bible." },
    ],
  },
  {
    title: "Summer — emerging adulthood (2006–2016)",
    subtitle: "Fitness, coaching, the gym years, and the first leap abroad",
    entries: [
      { year: "2006", age: "19", body: "Earned a TEFL certification; began running and structured gym training; wrote and directed short kung-fu films. Learned to drive (taught by Jaco van der Merwe of Bittereinder)." },
      { year: "2007", age: "20", body: "Two more teaching trips to China. Met Brad Openshaw, who would become a lifelong best friend." },
      { year: "2008", age: "21", body: "Promoted to manager at Java. Certified as a personal trainer and spinning instructor (ETA College). Discovered Tony Robbins, NLP, and life-coaching — which began to unsettle his Christian faith." },
      {
        year: "2009",
        age: "22",
        body: (
          <>
            Placed first representing South Africa at the 8th{" "}
            <WikiLink href="https://www.mfa.gov.cn/zwbd_673032/200904/t20090422_410360.shtml">
              &ldquo;Chinese Bridge&rdquo;
            </WikiLink>{" "}
            competition. Began coaching at Ballistix CrossFit; certified as a massage
            therapist; changed his surname to Delano.
          </>
        ),
      },
      { year: "2010", age: "23", body: "Certified as an NLP / life-coaching practitioner. Left the church — a difficult but defining shift. Began running small CrossFit-style classes with Brad." },
      { year: "2011", age: "24", body: "Co-founded the pop-up gym Quantum Physiques (QP) with Brad. Met Jelena, who would become his closest friend and partner; they began dating by year's end." },
      { year: "2012", age: "25", body: "QP grew to ~50 clients. Discovered Squarespace and design; became a father figure to Jelena's two children." },
      { year: "2013", age: "26", body: "QP evolved into Wi-move; interest shifted toward education and curriculum design. Traveled to China (Shaolin, the Great Wall) to source gym equipment." },
      { year: "2014", age: "27", body: "Discovered Ken Wilber, Tim Ferriss, and the SaaS world; transitioned to minimal-effective-dose strength training (Body by Science). Began organizing knowledge into life-mastery categories." },
      {
        year: "2015",
        age: "28",
        body: (
          <>
            Launched the digital marketing agency{" "}
            <WikiLink href="https://artrepreneurs.co.za/">Artrepreneurs</WikiLink>. Made a
            first trip to the US seeking opportunities, working with painter{" "}
            <WikiLink href="https://laurataylorpainter.com/about">Laura Taylor</WikiLink>{" "}
            in NYC and chef James Graham of{" "}
            <WikiLink href="https://restaurantba.com/home/about-restaurant-ba/">restaurant Ba</WikiLink>{" "}
            in LA.
          </>
        ),
      },
      { year: "2016", age: "29", body: "Hired by Mindvalley as a marketing specialist; moved to Kuala Lumpur, Malaysia. Went deep into personal finance and the Big-5 training protocol." },
    ],
  },
  {
    title: "Summer — established adulthood (2017–present)",
    subtitle: "Learning design, the 10X method, and a body of course productions",
    entries: [
      { year: "2017", age: "30", body: "Pivoted from employee to contractor at Mindvalley — landing four contracts at once and 5×-ing his income. The first 10X fitness event was born; began directing online course productions (Neale Donald Walsch)." },
      { year: "2018", age: "31", body: "Designed and directed courses for Ben Greenfield, Steven Kotler, and Ken Wilber; ran 10X events across Malaysia, Italy, and Estonia, training hundreds of people." },
      { year: "2019", age: "32", body: "Moved in with Jelena and the kids as a family. Registered his first US company, Eudaemonia, Inc. Live-in training interventions for Gerard Butler (LA) and a client in Sydney." },
      {
        year: "2020",
        age: "33",
        body: (
          <>
            Codified and published the{" "}
            <WikiLink href="https://youtube.com/playlist?list=PLkxFhm6Fhw9qCpUj7zoLbLQ4OvAQzRAYQ">
              10X method
            </WikiLink>{" "}
            (bodyweight and machine protocols) free on YouTube. Trained billionaire Naveen
            Jain and his family; returned to South Africa just before the COVID lockdown.
          </>
        ),
      },
      {
        year: "2021",
        age: "34",
        body: (
          <>
            The{" "}
            <WikiLink href="https://www.mindvalley.com/10x/quest">10X Quest</WikiLink>{" "}
            launched — since completed by 90,000+ people. Certified in nutritional
            biochemistry and functional blood-chemistry analysis. Worked 1.5 years with the{" "}
            <WikiLink href="https://youtu.be/8p5pAPpmy1o">Norton family</WikiLink>.
          </>
        ),
      },
      {
        year: "2022",
        age: "35",
        body: (
          <>
            Launched the{" "}
            <WikiLink href="https://www.mindvalley.com/certs/10x">10X Coach Certification</WikiLink>{" "}
            (500 coaches). Spoke at A-Fest (Jordan) and Mindvalley-U (Estonia); produced a
            new flagship course for Ben Greenfield.
          </>
        ),
      },
      { year: "2023", age: "36", body: "Refined his LX-design model; shot educational content for Spren; completed Peter Attia's year-long longevity program. Designed Mindvalley's six-month \"Mastery\" micro-degree framework and did the transformative Demartini Method training." },
      {
        year: "2024",
        age: "37",
        body: (
          <>
            Brokered, designed, and directed the{" "}
            <WikiLink href="https://www.mindvalley.com/values">Values Factor Quest</WikiLink>{" "}
            with John Demartini and the{" "}
            <WikiLink href="https://www.mindvalley.com/body-first">BodyFirst Quest</WikiLink>.
            Went deep into finance and valuation; registered the real-estate company
            Erfaring (Pty) Ltd.
          </>
        ),
      },
      { year: "2025", age: "38", body: "Consulted on Federico Volio's wellness start-up; refined the RBG method across business types; moved into his first solo home at Val de Vie. Began redesigning his most integrated fitness taxonomy." },
      {
        year: "2026",
        age: "39",
        body: (
          <>
            Designed and published five taxonomical course series free on YouTube —{" "}
            <WikiLink href="https://youtube.com/playlist?list=PLkxFhm6Fhw9rBcU7Fwl6-eizseHRR50lI">maps</WikiLink>,{" "}
            <WikiLink href="https://youtube.com/playlist?list=PLkxFhm6Fhw9oejXvkzADRTChNUd1LB0lZ">routines</WikiLink>,{" "}
            <WikiLink href="https://youtube.com/playlist?list=PLkxFhm6Fhw9oypG0tLrOTNtnPtsGMUG2w">space</WikiLink>, and design — one a day for three months.
            Preparing to immigrate to the US and building this database of himself.
          </>
        ),
      },
    ],
  },
];
