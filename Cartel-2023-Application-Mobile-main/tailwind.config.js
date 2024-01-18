/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#812121',
        'secondary': '#94414e',
        'thirdary': '#812121',
        'grey': '#ababab',
        'blue': '#636bf3',
      }

    },
  },
  plugins: [],
}
