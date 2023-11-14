/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF5722',
        blue: {
          500: '#191D88', // Update this line with your desired color code
        }
      },
      fontFamily: {
        sans: ['Roboto', 'Arial', 'sans'],
      },
    },
  },
  // Other Tailwind CSS configuration options...
};


