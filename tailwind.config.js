/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ], theme: {
    extend: {
      colors: {
        "primary": "#16243D",
        "secondary":"#015FC9",
        "light-blue":"#0CE0FF",
        "dark":"#16243D",
        "white": "#FFFFFF",
        'dark-gray': "#696E77",
        'light-gray':"#97A2B7",
        "off-white":"#F2F5F9",
        "card-bg":"#1C2A44"
      }
    },
  },
  plugins: [],
}
