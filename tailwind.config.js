/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Cormorant Garamond'", 'serif'],
        serif: ["'Playfair Display'", 'serif'],
        cormorant: ["'Cormorant Garamond'", 'serif'],
      },
    },
  },
  plugins: [],
};
