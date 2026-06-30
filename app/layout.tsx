import type { Metadata } from "next";
import "./globals.css";
import { serif, sans, mono } from "./fonts";
import { SITE, NAV } from "@/content/site";
import SiteHeader from "@/components/SiteHeader";
import LeftNav from "@/components/LeftNav";
import Infobox from "@/components/Infobox";

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} — personal wiki`,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.description,
  metadataBase: new URL(SITE.url),
  openGraph: {
    title: `${SITE.name} — personal wiki`,
    description: SITE.description,
    url: SITE.url,
    type: "profile",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${serif.variable} ${sans.variable} ${mono.variable}`}
    >
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>

        <SiteHeader />

        <div className="mx-auto grid max-w-[88rem] grid-cols-1 gap-0 px-0 sm:px-4 lg:grid-cols-[11rem_minmax(0,1fr)_20rem] lg:gap-6">
          {/* Left rail: global Pages navigation (desktop only) */}
          <div className="hidden border-r border-rule px-3 py-5 lg:block">
            <div className="sticky top-[calc(var(--header-h)+0.5rem)]">
              <LeftNav />
            </div>
          </div>

          {/* Centre: the article */}
          <main
            id="main"
            tabIndex={-1}
            className="min-w-0 bg-paper px-5 py-5 outline-none sm:px-7"
          >
            <article className="wiki-article">{children}</article>
          </main>

          {/* Right rail: the infobox (desktop only; mobile copy is inline) */}
          <div className="hidden py-5 lg:block">
            <div className="sticky top-[calc(var(--header-h)+0.5rem)]">
              <Infobox priority />
            </div>
          </div>
        </div>

        <footer className="mx-auto max-w-[88rem] px-5 py-8 text-xs text-muted sm:px-7">
          <div className="border-t border-rule pt-4">
            <p>
              A personal encyclopedia — a structured, honest record of one life,
              modelled on Wikipedia. Content authored by {SITE.name}.
            </p>
            <p className="mt-1">
              <a href={`mailto:${SITE.email}`} className="wikilink">
                {SITE.email}
              </a>
            </p>
          </div>
        </footer>

        {/* No-JS fallback navigation */}
        <noscript>
          <nav aria-label="Pages" className="mx-auto max-w-[88rem] px-5 pb-8 text-sm">
            <ul className="flex flex-wrap gap-x-4 gap-y-1">
              {NAV.map((p) => (
                <li key={p.href}>
                  <a href={p.href} className="wikilink">
                    {p.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </noscript>
      </body>
    </html>
  );
}
