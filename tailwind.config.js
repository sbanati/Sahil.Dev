/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      },
      colors: {
        'head-blue': '#147efb',
        'black-font': '#2d2e32',
        'accent-color': '#0351AB',
        'background-color': '#f9f9f9',
        'text-color': '#555',
        'border-color': '#ddd',
        'whiteground-color': '#fff',
        'about-text': '#767676',
        'access-portfolio': '#545454',
      },
    },
  },
  plugins: [],
};
