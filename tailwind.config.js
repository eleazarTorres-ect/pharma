module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'pharma-A-400': '#235196',
        'pharma-A-300': '#4DD0E1',
        'pharma-A-200': '#D1DDE8',
        'pharma-A-100': '#E2FDFF',
        'pharma-B-400': '#242626',
        'pharma-B-300': '#3F5151',
        'pharma-B-200': '#40605F',
        'pharma-B-100': '#457775',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-debug-screens'),
  ],
}
