/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#ec7046",
        secondary: {
          50: "#e9eaec",
          100: "#d3d4d8",
          200: "#a6a9b1",
          300: "#7a7f8b",
          400: "#4d5464",
          500: "#21293d",
          600: "#1a2131",
          700: "#141925",
          800: "#0d1018",
          900: "#07080c",
          DEFAULT: "#21293d",
        },
        accent: "#fddb33",
      },
    },
  },
  plugins: [],
};
