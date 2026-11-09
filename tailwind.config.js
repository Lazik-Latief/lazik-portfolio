/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      colors: {
        primary: "#10100F",
        secondary: "#151513",
        card: "#191917",
        accent: "#D2B779",
        "accent-soft": "#E4D2A2",
        muted: "#A5A39B",
      },
      boxShadow: {
        glow: "0 18px 60px rgba(0,0,0,0.2)",
      },
    },
  },
  plugins: [],
};
