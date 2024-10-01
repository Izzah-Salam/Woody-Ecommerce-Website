/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        lightgreen: "#d2ee7f",
        lightGray: "#f7f7f7",
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
      },
    },
    plugins: [],
  },
};
