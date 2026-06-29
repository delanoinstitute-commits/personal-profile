import type { Metadata } from "next";
import "./globals.css";
import { SITE } from "@/content/site";
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
    <html lang="en">
      <body>
        <SiteHeader />

        <div className="mx-auto flex max-w-[88rem] gap-0 px-0 sm:px-4">
          {/* Left rail: navigation + contents */}
          <div className="hidden shrink-0 basis-44 border-r border-rule px-3 py-5 lg:block">
            <div className="sticky top-16">
              <LeftNav />
            </div>
          </div>

          {/* Centre: the article, with the infobox floated to its right */}
          <main className="min-w-0 flex-1 bg-paper px-5 py-5 sm:px-7">
            <div className="lg:flex lg:gap-6">
              <article className="wiki-article min-w-0 flex-1">{children}</article>
              <div className="mt-6 shrink-0 lg:mt-0 lg:w-[20rem]">
                <div className="sticky top-16">
                  <Infobox />
                </div>
              </div>
            </div>
          </main>
        </div>

        <footer className="mx-auto max-w-[88rem] px-5 py-8 text-[0.78rem] text-[#54595d]">
          <div className="border-t border-rule pt-4">
            <p>
              This is a personal encyclopedia — a structured, honest record of one
              life, modelled on Wikipedia. Content authored by {SITE.name}.
            </p>
            <p className="mt-1">
              <a href={`mailto:${SITE.email}`} className="wikilink">
                {SITE.email}
              </a>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
