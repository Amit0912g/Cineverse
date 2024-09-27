/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
     
      "sm":"375px",

      'md': '650px',

      'lg': '970px',
       
      "xl":"1280px",
   
    },

    extend: {},
  },
  plugins: [],
}