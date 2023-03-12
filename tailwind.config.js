/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
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
