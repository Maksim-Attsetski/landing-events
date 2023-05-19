/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        main: '#172C4F',
        titles: '#a4adba',
        secondary: '#DF2224',
        shadow: 'rgba(0,0,0,0.5)',
      },
      letterSpacing: {
        '2px': '2px',
        '4px': '4px',
      },
      width: {
        container: 'clamp(300px, 90vw, 1200px)',
        modal: 'clamp(300px, 90vw, 450px)',
      },
      translate: {
        fifty: '50%',
      },
      fontSize: {
        titleS: 'calc(6vmin + 10px)',
        text: 'calc(1.5vmin + 8px)',
      },
      rotate: {
        360: '360deg',
      },
      minHeight: {
        80: '80vh',
        90: '90vh',
      },
    },
  },
  plugins: [],
};
