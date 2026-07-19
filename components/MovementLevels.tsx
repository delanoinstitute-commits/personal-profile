"use client";

/**
 * Tooltip body for a muscular-biomechanics movement: a one-line summary of what
 * it tests, then the L1–L5 level ladder from the scoring spec. Sex-specific
 * movements show Male + Female ladders; sex-neutral ones show one ladder under a
 * "Male / Female" label. Rendered client-side (host markup) so it crosses the
 * RSC boundary cleanly.
 */
type Ladder = string[];

function Rungs({ rows }: { rows: Ladder }) {
  return (
    <span className="mt-0.5 block">
      {rows.map((r, i) => (
        <span key={i} className="block">
          L{i + 1} = {r}
        </span>
      ))}
    </span>
  );
}

export default function MovementLevels({
  summary,
  measure,
  male,
  female,
}: {
  summary: string;
  /** Measure type shown after the sex label, e.g. "1 Rep Max", "Max Skill Hold". */
  measure: string;
  male: Ladder;
  female?: Ladder;
}) {
  return (
    <span className="block leading-snug">
      <span className="block">{summary}</span>
      {female ? (
        <>
          <span className="mt-1.5 block font-semibold text-text">Male ({measure})</span>
          <Rungs rows={male} />
          <span className="mt-1.5 block font-semibold text-text">Female ({measure})</span>
          <Rungs rows={female} />
        </>
      ) : (
        <>
          <span className="mt-1.5 block font-semibold text-text">Male / Female ({measure})</span>
          <Rungs rows={male} />
        </>
      )}
    </span>
  );
}
