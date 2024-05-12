/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      height: {
        hero: 'calc(100vh - 4rem)',
      },
      maxWidth: {
        grid: 'calc(1280px - 32px)',
      },
      colors: {
        gray100: '#F8F9FA',
        gray150: '#F2F4F7',
        gray200: '#EAECEF',
        gray300: '#DFE2E6',
        gray400: '#CFD4D9',
        gray500: '#AEB5BC',
        gray600: '#878E95',
        gray700: '#4A5056',
        gray800: '#353A3F',
        gray900: '#222529',
      },
    },
  },
  plugins: [],
};
