/** @type {import('tailwindcss').Config} */
// import withMT from "@material-tailwind/html/utils/withMT";
module.exports ={
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    require("daisyui",'@tailwindcss/forms',"tw-elements/dist/plugin.cjs"),
  ],
}
