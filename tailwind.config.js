/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {

        'dark-blueish': '#0B0D17',
        'light-blue': '#D0D6F9',
        'white': '#FFFFFF',

      },
      fontFamily: {
        'barlow-condensed': ["Barlow Condensed", "sans-serif"],
        'barlow': ["Barlow", "sans-serif"],
        'bellefair': ["Bellefair", "serif"],
      },
    },
  },
  plugins: [],
}

