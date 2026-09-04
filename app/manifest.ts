import type { MetadataRoute } from "next";
import { SITE } from "@/content/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE.name} | ${SITE.role}`,
    short_name: SITE.name,
    description: SITE.tagline,
    start_url: "/",
    display: "browser",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    icons: [
      { src: "/brand/symbol-192.png", sizes: "192x192", type: "image/png" },
      { src: "/brand/symbol-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
