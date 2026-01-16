/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'xxl': '2000px',
        'xxxl': '2500px' // Custom breakpoint for very large screens
      },
      maxWidth: {
        'container': '2000px', // Max container width
      },
    },
  },
  plugins: [],
};
