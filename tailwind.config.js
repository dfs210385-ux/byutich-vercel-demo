/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: "#7B61FF" },
        secondary: { DEFAULT: "#00E0FF" }
      }
    },
  },
  plugins: [],
};
