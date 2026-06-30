import { ReactNode } from "react";

export type TimelineEntry = { year: string; age: string; body: ReactNode };
export type TimelineEra = { title: string; subtitle?: string; entries: TimelineEntry[] };

/**
 * A chronological biography rendered as a year-by-year timeline, grouped into
 * life eras. Each row keeps the year/age fixed on the left and the events on
 * the right, like the "Life and career" section of a Wikipedia biography.
 */
export default function Timeline({ eras }: { eras: TimelineEra[] }) {
  return (
    <div>
      {eras.map((era) => (
        <div key={era.title} className="mt-5">
          <h3 className="!mt-3">{era.title}</h3>
          {era.subtitle && (
            <p className="-mt-1 text-sm italic text-muted">{era.subtitle}</p>
          )}
          <dl className="border-l-2 border-rule pl-3 sm:pl-4">
            {era.entries.map((e) => (
              <div key={e.year} className="mb-3">
                <dt className="timeline-year">
                  {e.year}{" "}
                  <span className="font-sans text-xs font-normal text-muted-2">
                    (age {e.age})
                  </span>
                </dt>
                <dd className="!mb-0">{e.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      ))}
    </div>
  );
}
