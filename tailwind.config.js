/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/***/**/*.{html,js,ts,jsx,tsx}"],

  theme: {
    extend: {
      screens: {
        '2xl': "2000px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};