/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#050208", // global background
        card: "#111118", // glass cards / widgets
        border: "#1f1f2b", // subtle borders
        text: "#e5e7eb", // primary text
        muted: "#9ca3af", // secondary text
        accent: "rgba(160, 100, 255, 0.6)", // violet glow
      },
      fontFamily: {
        sans: [
          "Roboto",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
        serif: ['"Playfair Display"', "serif"],
        mono: ['"Roboto Mono"', "monospace"],
      },
      backdropBlur: {
        glass: "24px",
      },
      borderRadius: {
        glass: "20px",
      },
    },
  },
  plugins: [],
};
