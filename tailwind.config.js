/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
        colors:{
          "my-gradient": [""],
        }
      },
      fontFamily:{
        Poppins: ["Poppins, sans-serif"],
      },
      container: {
        center: true,
        padding: "6rem",
      },
      screen: {
        lg:"1124px",
        xl:"1124px",
        "2xl":"1124px"
    },
  },
  plugins: [],
}