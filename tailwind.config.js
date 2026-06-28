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
        primary: "#090E1A",
        secondary: "#0F172A",
        card: "#111827",
        accent: "#6366F1",
        "accent-soft": "#818CF8",
        muted: "#94A3B8",
      },
      boxShadow: {
        glow: "0 18px 70px rgba(99,102,241,0.18)",
      },
    },
  },
  plugins: [],
};
