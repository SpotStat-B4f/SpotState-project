/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'scrollbar-thumb': '#00D084', 
        'scrollbar-track': '#3a0e73', 
      },
      backgroundImage:{
        'background':"url('./Img/bg-9.jpg')"
      }
    }
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

