/** @type {import('tailwindcss').Config} */
import fontFamily from "./style/base/fontFamily";
import colors from "./style/base/colors";
import screens from "./style/base/screens";
import fontSize from "./style/base/fontSize";
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: fontFamily,
    colors: colors,
    screens: screens,
    fontSize: fontSize,
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
