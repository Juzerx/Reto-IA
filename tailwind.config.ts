import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        forest: "#176B4D",
        "forest-dark": "#104B37",
        mint: "#E7F4EC",
        cream: "#FBFAF6",
        ink: "#1D2A24",
        muted: "#66736B"
      },
      boxShadow: {
        soft: "0 18px 50px rgba(23, 61, 43, 0.09)"
      },
      fontFamily: {
        sans: ["Arial", "Helvetica", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
