/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        boldi : ['Bolder', 'sans-serif'],
        medi : ['Medium', 'san-serif'],
        regi : ['Regular', 'san-serif'],
        lighti : ['Lightt', 'san-serif']
      }
    },
  },
  plugins: [],
}