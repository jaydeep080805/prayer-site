/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  darkMode: "media",

  theme: {
    fontFamily: {
      main: ["Roboto", "sans-serif"],
      heading: ["Montserrat", "serif"],
    },
    extend: {
      spacing: {
        160: "60rem",
        180: "70rem",
        200: "80rem",
        220: "90rem",
      },
    },
  },
  plugins: [],
};
