import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        health: {
          primary: "#10B981",
          primaryDark: "#059669",
          primaryLight: "#A7F3D0",
          bg: "#F0FDF4",
          surface: "#FFFFFF",
          textMain: "#111827",
          textMuted: "#6B7280",
          border: "#D1FAE5",
          danger: "#EF4444",
          accent: "#0D9488",
        },
      },
      fontFamily: {
        heading: ["var(--font-nunito)", "sans-serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 20px -2px rgba(16, 185, 129, 0.08), 0 2px 6px -1px rgba(0, 0, 0, 0.04)",
        card: "0 10px 30px -5px rgba(16, 185, 129, 0.1), 0 4px 12px -2px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
};

export default config;
