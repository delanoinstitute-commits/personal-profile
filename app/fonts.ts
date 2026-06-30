import { Newsreader, Inter, JetBrains_Mono } from "next/font/google";

// Research-backed type system (see DESIGN_SPEC.md §1):
// Newsreader — variable serif with an optical-size axis, commissioned for
// on-screen long-form reading; carries the encyclopedic register on headings.
export const serif = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  display: "swap",
  variable: "--font-serif",
});

// Inter — variable grotesque tuned for UI legibility at 14–16px; all body/chrome.
export const sans = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

// JetBrains Mono — disambiguates 0/O, 1/l/I; scoped to IDs/hashes/code tokens.
export const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-mono",
});
