/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    screens: {
      sm: "576px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "992px",
      // => @media (min-width: 1024px) { ... }

      xl: "1200px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1400px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
      animation: {
        "bounce-slow": "bounce 3s ease linear infinite",
      },
      fontFamily: {
        courier: "Courier Prime",
        pacifisto: "Pacifico",
        barlow: "Barlow Condensed",
      },
    },
  },
  plugins: [require("tailwindcss-textshadow")],
};
