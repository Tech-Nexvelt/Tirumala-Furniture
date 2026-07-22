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
          bg: "#0D0D0D",
          card: "#1C1C1C",
          surface: "#1C1C1C",
          gold: "#C59D5F",
          "gold-light": "#DFB978",
          "gold-dark": "#9A7336",
          text: "#E8E6E1",
          muted: "#9CA3AF",
          border: "#1C1C1C",
          // Mappings for dark theme consistency
          primary: "#C59D5F",
          secondary: "#DFB978",
          accent: "#DFB978",
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Montserrat", "Plus Jakarta Sans", "Inter", "sans-serif"],
      },
      boxShadow: {
        gold: "0 10px 30px -10px rgba(197, 157, 95, 0.35)",
        card: "0 10px 30px -10px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};
export default config;
