module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff3366",
        accent: "#23c483",
        deep: "#6a0572"
      },
      fontFamily: {
        playfair: ["'Playfair Display'", "serif"],
        poppins: ["Poppins", "sans-serif"]
      }
    }
  },
  plugins: []
};