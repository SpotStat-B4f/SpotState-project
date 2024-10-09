/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'scrollbar-thumb': '#00D084', // Green for the scrollbar thumb
        'scrollbar-track': '#3a0e73', // Dark purple for the scrollbar track
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

