/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        darkBlue:"#1b4965",
        buttonBlue:"#62b6cb",
        textBlue:"#cae9ff",
        hoverBlue:"#bee9e8",
        grayBlue:"#5fa8d3",
        cobalto:"#004F78",
        paris:"#118384",
        azurita:"#3a6f99",
        tiro:"#4f0041"
      }
    },
  },
  plugins: [],
}

