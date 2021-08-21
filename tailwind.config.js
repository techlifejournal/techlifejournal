

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        techlife: "#edf2fb",
        sidenav: "#edf2fb",
        content: "#dedede",
        sidehover : "#d7e3fc",
        navhover : "#abc4ff"
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

  ],
}
