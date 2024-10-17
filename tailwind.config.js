/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'logo': ['Pacifico', 'cursive'],
      },
      colors: {
        'blue-violet': '#8A2BE2', 
      },
    },
  },
  plugins: [],
}
