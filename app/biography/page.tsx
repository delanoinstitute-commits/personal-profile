import type { Metadata } from "next";
import PageHeading from "@/components/PageHeading";
import Timeline from "@/components/Timeline";
import { eras } from "@/content/timeline";

export const metadata: Metadata = { title: "Biography" };

export default function BiographyPage() {
  return (
    <>
      <PageHeading title="Biography" hatnote={<>The past — his story</>} />

      <p className="lead">
        The premise of this site is that an accurate chronology shows true causality — how a
        person actually came to think and work the way they do. This page gives the shaping
        environment first, then the year-by-year development.
      </p>

      <h2 id="biography">Biography</h2>
      <p>
        Delano grew up across the West Rand of Gauteng, South Africa — a childhood of
        frequent moves, financial hardship, farm life, injuries, and a fatherless,
        unschooled household that taught him self-reliance early. He left formal schooling at
        13 and has been largely self-taught since, moving through martial arts, fitness,
        coaching, learning design, and finance.
      </p>
      <p>
        A few patterns recur throughout the record and explain much of his trajectory:
      </p>
      <ul>
        <li>
          He questions authority — if he cannot see why something is done, he will not do it
          (or will improve it). His one bias is &ldquo;better&rdquo;: a more accurate truth
          or a better way is adopted immediately.
        </li>
        <li>
          He is a double-edged sword: all-in and consistent on a clear vision, but he stops
          the moment a problem is solved — which is why he tends to build for others rather
          than run one product for years.
        </li>
        <li>
          He compulsively organizes everything — physical, digital, and conceptual — as if
          searching for the underlying structure of reality, and uses every move as a chance
          to reorganize his life.
        </li>
        <li>
          He has been philosophically inclined his whole life, moving through distinct
          worldviews — Chinese philosophy, Christianity, Neale Donald Walsch, Ken Wilber, and
          David Deutsch — which is why he resonates with stages-of-consciousness models.
        </li>
      </ul>

      <h2 id="timeline">Timeline</h2>
      <Timeline eras={eras} />
    </>
  );
}
