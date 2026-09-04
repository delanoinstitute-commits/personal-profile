import type { MetadataRoute } from "next";
import { NAV, SITE } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return NAV.map((page) => ({
    url: `${SITE.url}${page.href === "/" ? "" : page.href}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: page.href === "/" ? 1 : 0.8,
  }));
}
