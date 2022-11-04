/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "tw-white": "hsl(0, 0%, 100%)",
      "tw-light-grey": "hsl(217, 12%, 63%)",
      "tw-medium-grey": "hsl(216, 12%, 54%)",
      "tw-dark-blue": "hsl(213, 19%, 18%)",
      "tw-v-dark-blue": "hsl(216, 12%, 8%)",
      "tw-orange": "hsl(25, 97%, 53%)"
    },
    fontFamily: {
      "tw-overpass": ["Overpass", "sans-serif"]
    },
    extend: {}
  },
  plugins: []
}
