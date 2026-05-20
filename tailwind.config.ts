import type { Config } from "tailwindcss";

/**
 * Fuse.kiwi design tokens — mirrors design-tokens-fuse-kiwi.json & DESIGN-fuse-kiwi.md
 * Primary theme wiring lives in src/app/globals.css (@theme inline).
 */
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        primary: "var(--color-primary)",
        "text-primary": "var(--color-text)",
        "text-secondary": "var(--color-text-secondary)",
        border: "var(--color-border)",
        black: "var(--black)",
        line: "var(--line)",
        visited: "var(--visited)",
        white: "var(--white)",
        blue: "var(--blue)",
        yellow: "var(--yellow)",
        loading: "var(--loading)",
        purple: "var(--purple)",
        green: "var(--green)",
        graphic: "var(--graphic)",
        photo: "var(--photo)",
        illustration: "var(--illustration)",
        threed: "var(--threed)",
        art: "var(--art)",
        type: "var(--type)",
        video: "var(--video)",
        music: "var(--music)",
        reading: "var(--reading)",
        website: "var(--website)",
      },
      fontFamily: {
        heading: ["var(--font-syne)", "sans-serif"],
        body: ["var(--font-syne-mono)", "monospace"],
      },
      fontSize: {
        display: ["240px", { lineHeight: "240px", letterSpacing: "-12px" }],
        h1: ["32px", { lineHeight: "1.1" }],
        h2: ["28px", { lineHeight: "1.15" }],
        h3: ["24px", { lineHeight: "1.2" }],
        h4: ["16px", { lineHeight: "1.25" }],
        "body-l": ["14px", { lineHeight: "16px" }],
        "hero-h3": ["48px", { lineHeight: "56px" }],
        "hero-h4": ["32px", { lineHeight: "34px" }],
        "btn": ["24px", { lineHeight: "1" }],
      },
      borderRadius: {
        subtle: "2px",
        button: "6px",
        card: "24px",
        pill: "50px",
        filled: "24px",
      },
      boxShadow: {
        low: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px",
      },
      maxWidth: {
        container: "1440px",
      },
      spacing: {
        unit: "2px",
      },
    },
  },
};

export default config;
