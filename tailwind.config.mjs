/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/app/**/*.{js,jsx}", "./src/components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0B1C6D",   // deep blue
        accent: "#F36B21",    // orange
        highlight: "#3BBF4A"  // green
      },
      boxShadow: {
        soft: "0 12px 40px rgba(11,28,109,0.12)"
      }
    }
  },
  plugins: []
};

export default config;