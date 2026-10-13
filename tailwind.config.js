/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        kalpasar: {
          navy: "#0f2942",
          navyDark: "#0a1d30",
          blue: "#1a5f7a",
          cyan: "#159895",
          lightBlue: "#57c5b6",
          gold: "#c29b38",
          goldLight: "#e6ca65",
          saffron: "#f97316",
          cream: "#fdfbf7",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "Noto Sans Gujarati",
          "Noto Sans Devanagari",
          "system-ui",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
