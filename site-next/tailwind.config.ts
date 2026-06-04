import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

// Tokens: identidade Mídia de Qualidade (dark-first, azul protagonista)
// aplicada sobre a estrutura/motion decodificados de easygrowth.com.br.
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#07080E",
        surface: "#0B0D15",
        "surface-2": "#11141F",
        "fg-primary": "#F4F6FF",
        "fg-muted": "#9AA3BF",
        "fg-subtle": "#5B6480",
        accent: "#2E6BFF",
        "accent-light": "#5B8DFF",
        "accent-hover": "#2456D6",
        purple: "#6E56F0",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-inter-tight)", "var(--font-inter)", "sans-serif"],
      },
      fontSize: {
        eyebrow: ["13px", { lineHeight: "1", letterSpacing: "0.22em" }],
        h1: ["clamp(40px, 6vw, 64px)", { lineHeight: "1.02", letterSpacing: "-0.03em" }],
        h2: ["clamp(30px, 4vw, 42px)", { lineHeight: "1.08", letterSpacing: "-0.025em" }],
        h3: ["20px", { lineHeight: "1.3", letterSpacing: "-0.01em" }],
        lead: ["19px", { lineHeight: "1.55" }],
        body: ["17px", { lineHeight: "1.6" }],
      },
      borderRadius: {
        button: "12px",
        card: "16px",
        pill: "99px",
      },
      maxWidth: {
        container: "1200px",
      },
      typography: {
        DEFAULT: {
          css: {
            "--tw-prose-invert-body": "#9AA3BF",
            "--tw-prose-invert-headings": "#F4F6FF",
            "--tw-prose-invert-lead": "#9AA3BF",
            "--tw-prose-invert-bold": "#F4F6FF",
            "--tw-prose-invert-links": "#5B8DFF",
            "--tw-prose-invert-bullets": "#2E6BFF",
            "--tw-prose-invert-hr": "rgba(244,246,255,0.1)",
            "--tw-prose-invert-quotes": "#F4F6FF",
            "--tw-prose-invert-quote-borders": "#2E6BFF",
            "--tw-prose-invert-counters": "#5B6480",
          },
        },
      },
      transitionDuration: {
        fast: "200ms",
        base: "350ms",
        slow: "400ms",
      },
      transitionTimingFunction: {
        // easing-signature decodificado da referência
        brand: "cubic-bezier(0.16, 1, 0.3, 1)",
        enter: "cubic-bezier(0, 0, 0.2, 1)",
        exit: "cubic-bezier(0.4, 0, 1, 1)",
      },
      keyframes: {
        "pulse-glow": {
          "0%, 100%": { opacity: "0.5", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.12)" },
        },
        breathe: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.85", transform: "scale(1.18)" },
        },
        drift: {
          "0%, 100%": { transform: "translate(0px, 0px)" },
          "50%": { transform: "translate(28px, -22px)" },
        },
        aurora: {
          "0%, 100%": { transform: "translateX(-8%) translateY(0)", opacity: "0.55" },
          "50%": { transform: "translateX(8%) translateY(-4%)", opacity: "0.9" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "scroll-cue": {
          "0%": { transform: "translateY(0)", opacity: "0" },
          "40%": { opacity: "1" },
          "100%": { transform: "translateY(10px)", opacity: "0" },
        },
      },
      animation: {
        "pulse-glow": "pulse-glow 6s ease-in-out infinite",
        breathe: "breathe 8s ease-in-out infinite",
        drift: "drift 16s ease-in-out infinite",
        aurora: "aurora 20s ease-in-out infinite",
        marquee: "marquee 32s linear infinite",
        "scroll-cue": "scroll-cue 1.8s ease-in-out infinite",
      },
    },
  },
  plugins: [typography],
};

export default config;
