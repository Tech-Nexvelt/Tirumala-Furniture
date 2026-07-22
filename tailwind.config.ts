import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#FAFAF8",
          surface: "#FFFFFF",
          card: "#FFFFFF",
          text: "#111827",
          muted: "#6B7280",
          cta: "#8B5E3C",
          "cta-hover": "#6E472B",
          accent: "#C19A6B",
          wood: "#C19A6B",
          "wood-dark": "#8B5E3C",
          border: "#E5E7EB",
          hover: "#F4F4F0",
          success: "#15803D",
          error: "#DC2626",
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Plus Jakarta Sans", "Montserrat", "Inter", "sans-serif"],
      },
      boxShadow: {
        card: "0 10px 30px -10px rgba(0, 0, 0, 0.05)",
        luxury: "0 20px 40px -15px rgba(139, 94, 60, 0.15)",
        gold: "0 10px 25px -5px rgba(139, 94, 60, 0.25)",
      },
    },
  },
  plugins: [],
};
export default config;
