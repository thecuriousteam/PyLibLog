/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: "Montserrat",
      },
      colors:{
        'custom-purple' : '#9004FC'
      }
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
