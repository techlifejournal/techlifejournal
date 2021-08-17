module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        techlife: "#141414"
      },
      borderWidth: {
        '1': '0.5px'
      }
    },
  },
  variants: {

    extend: {},
  },
  plugins: [

  ],
}
