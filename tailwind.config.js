/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins:['poppins'],
      },
      backgroundImage: {
        'img': "url('../src/assets/bg-6.png')",
      }
    },
  },
  plugins: [],
}
