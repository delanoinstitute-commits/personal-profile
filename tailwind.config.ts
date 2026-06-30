import type { Config } from "tailwindcss";

// Colour tokens mirror the CSS custom properties in app/globals.css (the single
// source of truth). Reference them by name in JSX; never write a raw hex inline.
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        text: "var(--text)",
        muted: "var(--muted)",
        "muted-2": "var(--muted-2)",
        link: "var(--link)",
        "link-hover": "var(--link-hover)",
        "link-visited": "var(--link-visited)",
        "link-red": "var(--link-red)",
        accent: {
          DEFAULT: "var(--accent)",
          light: "var(--accent-light)",
        },
        focus: "var(--focus)",
        paper: "var(--surface-paper)",
        "surface-app": "var(--surface-app)",
        "surface-subtle": "var(--surface-subtle)",
        "surface-band": "var(--surface-band)",
        "border-strong": "var(--border-strong)",
        rule: "var(--rule)",
        "rule-soft": "var(--rule-soft)",
        mark: "var(--mark)",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        overlay: "var(--shadow-overlay)",
      },
      maxWidth: {
        article: "68ch",
      },
    },
  },
  plugins: [],
};

export default config;
