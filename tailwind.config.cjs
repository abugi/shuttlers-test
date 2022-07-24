/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        'primary-color': '#1277ff',
        'dark-theme': '#1C1C1C',
        'secondary-color': '#B9B9BB'
      }
    },
  },
  plugins: [],
}
