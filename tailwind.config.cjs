/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        main: 'rgb(240, 239, 237)',
      },
      maxHeight: {
        128: '32rem',
      },
      fontFamily: {
        body: ['ORPHEUS', 'serif'],
        accent: ['EB Garamond', 'serif'],
      },
    },
  },
  plugins: [],
}
