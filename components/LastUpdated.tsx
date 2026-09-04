"use client";

import { usePathname } from "next/navigation";
import UPDATED from "@/content/updated.json";

/**
 * "This page was last edited on …" in the footer, the wiki convention for a
 * record that claims to be maintained. Dates come from content/updated.json,
 * stamped from git by `npm run stamp` before content commits.
 */
export default function LastUpdated() {
  const pathname = usePathname();
  const iso = (UPDATED as Record<string, string>)[pathname];
  if (!iso) return null;
  const date = new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
  return (
    <p>
      This page was last edited on <time dateTime={iso}>{date}</time>.
    </p>
  );
}
