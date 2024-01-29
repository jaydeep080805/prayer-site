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
        200: "80rem",
      },
    },
  },
  plugins: [],
};
