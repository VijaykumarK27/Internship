/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7F1742",
        cyan: colors.cyan,
        lime: colors.lime,
        violet: colors.violet,
        orange: colors.orange,
        fuchsia: colors.fuchsia,
        amber: colors.amber,
        red: colors.red,
        yellow: colors.yellow,
        blue: colors.blue,
        stone: colors.stone,
      },
    },
  },
  plugins: [],
};
