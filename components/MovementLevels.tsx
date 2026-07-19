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
  male,
  female,
}: {
  summary: string;
  male: Ladder;
  female?: Ladder;
}) {
  return (
    <span className="block leading-snug">
      <span className="block">{summary}</span>
      {female ? (
        <>
          <span className="mt-1.5 block font-semibold text-text">Male</span>
          <Rungs rows={male} />
          <span className="mt-1.5 block font-semibold text-text">Female</span>
          <Rungs rows={female} />
        </>
      ) : (
        <>
          <span className="mt-1.5 block font-semibold text-text">Male / Female</span>
          <Rungs rows={male} />
        </>
      )}
    </span>
  );
}
