/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Bebas: ["Bebas Neue", "serif"],
        Poppins: ["Poppins", "sans-serif"],
      }
    },
  },
  plugins: [],
}