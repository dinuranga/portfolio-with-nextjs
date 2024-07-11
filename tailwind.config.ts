/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: false,
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        //primary: "#3b28cc",2667ff //#56E1E1
        primary: "#2667ff",
        secondary: "#add7f6",
        highlight: "#84cc16", //lime- #84cc16 yellow- #facc15
        dark: "#020617",
        light: "#fafafa"
      },
      fontFamily: {
        primary: ["Poppins"],
        secondary: ["Quicksand"],
      },
      boxShadow:{
        'glow':"0px 0px 30px rgba(255,255,255,0)"
      }
    },
  },
  plugins: [],
}