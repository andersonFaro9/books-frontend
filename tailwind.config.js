/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
   
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        Butterfly: ["Butterfly Kids", "kids", "cursive"]
      },
      
    },
  },
  plugins: [],
}
