/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    colors: {
      'transparent': 'transparent',
      'white': '#fff',
      'green': '#007500',
      'grey': '#242526',
    },
    },
  },
  plugins: [],
}
