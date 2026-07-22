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
          accent: "#00D9D9",
          wood: "#C19A6B",
          "wood-dark": "#A37C4C",
          border: "#EFEFEA",
          hover: "#F4F4F0",
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Plus Jakarta Sans", "Montserrat", "Inter", "sans-serif"],
      },
      boxShadow: {
        card: "0 10px 30px -10px rgba(0, 0, 0, 0.05)",
        luxury: "0 20px 40px -15px rgba(193, 154, 107, 0.15)",
        gold: "0 10px 25px -5px rgba(0, 217, 217, 0.25)",
      },
    },
  },
  plugins: [],
};
export default config;
