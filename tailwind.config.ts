import type { Config } from "tailwindcss";

export default {
  theme: {
    extend: {
      colors: {
        primary: "#9333ea",
        secondary: "#e11d48",
        accent: "#f97316",
        dark: "#000000",
        surface: "#0a0a0a",
      },
      fontFamily: {
        sans: ["Outfit", "sans-serif"],
        display: ["Space Grotesk", "sans-serif"],
      },
      backgroundImage: {
        "hero-glow":
          "conic-gradient(from 180deg at 50% 50%, #9333ea 0deg, #f97316 180deg, #e11d48 360deg)",
      },
    },
  },
} satisfies Config;
