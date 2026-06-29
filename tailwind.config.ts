import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Lightly-branded accent: deep teal used sparingly for chrome.
        accent: {
          DEFAULT: "#0f6e66",
          dark: "#0a534d",
        },
        wikilink: "#3366cc",
        wikilinkvisited: "#795cb2",
        wikired: "#ba0000",
        paper: "#ffffff",
        infobox: "#f8f9fa",
        infoboxborder: "#a2a9b1",
        rule: "#c8ccd1",
      },
      fontFamily: {
        serif: ["Georgia", "'Times New Roman'", "serif"],
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "'Segoe UI'",
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      maxWidth: {
        article: "62rem",
      },
    },
  },
  plugins: [],
};

export default config;
