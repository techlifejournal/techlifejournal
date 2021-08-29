
const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        nav_lt: "#edf2fb",
        sidenav_lt: "#edf2fb",
        light: "#edf2fb",
        dark: "#1E1E1E",
        content_lt: "#dedede",
        sidehover_lt: "#d7e3fc",
        adark: "#D4D4D4"
      },
      borderWidth: {
        '1': '0.5px'
      },
      gridTemplateRows: {
        // Simple 8 row grid
        '7': 'repeat(7, minmax(0, 1fr))',
        '8': 'repeat(8, minmax(0, 1fr))',
        '9': 'repeat(9, minmax(0, 1fr))',
        '10': 'repeat(10, minmax(0, 1fr))',
        '11': 'repeat(11, minmax(0, 1fr))',
        '12': 'repeat(12, minmax(0, 1fr))',
        '24': 'repeat(24, minmax(0, 1fr))',
        '15': 'repeat(15, minmax(0, 1fr))',
      }
    },
  },
  variants: {

    extend: {},
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        'h1': { fontSize: theme('fontSize.3xl') },
        'h2': { fontSize: theme('fontSize.2xl') },
        'h3': { fontSize: theme('fontSize.xl') },
        'h4': { fontSize: theme('fontSize.lg') },
      })
    })
  ],
}
