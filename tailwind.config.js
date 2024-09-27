/** @type {import('tailwindcss').Config} */
export default {
  content: [".index.html", "./src/**/*.{vue,js,ts,jsx,ts}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"], // Tambahkan Montserrat
      },
      colors: {
        primary: "#075EFD",
      },
    },
  },
  plugins: [],
};
