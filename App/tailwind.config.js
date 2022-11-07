/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        black: {
          500: "#0D0D0D",
        },
        gray: {
          200: "#808080",
          400: "#262626",
          500: "#1A1A1A",
        },
        blue: {
          400: "#4EA8DE",
          500: "#1E6F9F",
        },
        purple: {
          500: "#5E60CE"
        }
      },
    },
  },
  plugins: [],
};
