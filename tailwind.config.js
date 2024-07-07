/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      width: {
        '27': '6.75rem', // Define la clase w-27
      },
      fontFamily: {
        'gill-sans': ['Gill Sans', 'Gill Sans MT', 'Calibri', 'Trebuchet MS', 'sans-serif'],
      },
      maxHeight: {
        '42vh': '42vh', // Define la altura máxima personalizada
      },
      colors: {
        customBlue: 'rgba(59, 73, 223, 0.1)', // Define el color personalizado aquí
      },
    },
  },
  plugins: [],
};
