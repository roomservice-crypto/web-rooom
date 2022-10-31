/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
        unbounded: ["Unbounded", ...defaultTheme.fontFamily.sans],
        fontspring: ["Fontspring", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
