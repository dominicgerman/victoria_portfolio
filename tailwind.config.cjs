/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      serif: ['Garamond', 'serif'],
    },
    extend: {
      gridTemplateRows: {
        // Simple 9 row grid
        9: 'repeat(9, minmax(0, 1fr))',
      },
      maxHeight: {
        128: '32rem',
      },
    },
  },
  plugins: [],
}
