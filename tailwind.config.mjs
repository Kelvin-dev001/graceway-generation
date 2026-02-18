/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/app/**/*.{js,jsx}", "./src/components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4B2E83",
        accent: "#B08D57"
      },
      boxShadow: {
        soft: "0 12px 40px rgba(0,0,0,0.06)"
      }
    }
  },
  plugins: []
};

export default config;