/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "federal-blue": "#01010f",
        "timberwolf": "#DAD7CD",
        "sage":"#A3B18A",
        "fern-green":"#588157",
        "hunter-green":"#3A5A40",
        "brunswick-green":"#344E41",
      },
      backgroundImage: {
        'back-pattern': "url('/src/Components/Assets/background.jpg')",
      }
    },
  },
  plugins: [],
}

