/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        main: '#172C4F',
        titles: '#a4adba',
      },
      letterSpacing: {
        '2px': '2px',
        '4px': '4px',
      },
      width: {
        container: 'clamp(300px, 90vw, 1200px)',
      },
      translate: {
        fifty: '50%',
      },
    },
  },
  plugins: [],
};
