/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        paleBlue: {
          100: "hsl(225, 100%, 98%)",
          200: "hsl(225, 100%, 94%)",
        },

        desaturatedBlue: "hsl(224, 23%, 55%)",
        darkBlue: "hsl(223, 47%, 23%)",
        brightBlue: "hsl(245, 75%, 52%)",
      },

      fontFamily: {
        redHat: ["Red Hat Display", "sans-serif"],
      },
    },
  },
  plugins: [],
};
