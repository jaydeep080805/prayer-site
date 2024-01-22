/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        main: ["Roboto", "sans-serif"],
        heading: ["Montserrat", "serif"],
      },
    },
  },
  plugins: [],
};
