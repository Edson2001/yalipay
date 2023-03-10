/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/index.tsx", "./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing:{
        height:{
          card: "250px"
        }
      }
    },
    colors:{
      card: "#edefea",
      background: "#131313",
      white: "#FFF",
      itemlist: "#181818",
      buttonColor: "#FCEE21",
      inputColor: "#161616"
    }
  },
  plugins: ["nativewind/babel"],
}
