/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    colors: {
      'green': '#007500',
      'grey': '#242526',
      'yellow' : '#ffc116',
      'gray' : '#2f2f2f',
    },
    },
  },
  plugins: [],
}
