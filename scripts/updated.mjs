// Stamps content/updated.json with each page's last content commit (its page
// file plus the shared content it renders). Run before committing content:
//   npm run stamp
// Vercel clones shallowly, so the dates are computed here and committed, not
// derived at build time.
import { execSync } from "node:child_process";
import { writeFileSync } from "node:fs";

const SHARED = ["content/profile.ts", "content/site.ts"];
const PAGES = {
  "/": ["app/page.tsx"],
  "/story": ["app/story/page.tsx"],
  "/nature": ["app/nature/page.tsx"],
  "/lifestyle": ["app/lifestyle/page.tsx"],
  "/health": ["app/health/page.tsx", "components/MovementLevels.tsx"],
  "/knowledge": ["app/knowledge/page.tsx", "content/knowledge.tsx"],
  "/wealth": ["app/wealth/page.tsx"],
  "/network": ["app/network/page.tsx"],
};

const out = {};
for (const [href, files] of Object.entries(PAGES)) {
  const date = execSync(`git log -1 --format=%cs -- ${[...files, ...SHARED].join(" ")}`).toString().trim();
  out[href] = date;
}
writeFileSync("content/updated.json", JSON.stringify(out, null, 2) + "\n");
console.log(out);
