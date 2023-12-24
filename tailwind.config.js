/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        bg1: "url('/public/bg2.jpg')",
      },
    },
  },
  plugins: [],
}
