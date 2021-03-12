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
      },
      
       keyframes: {
        bounce_idle: {
          '0%, 100%': { 
            transform: 'translateY(-5%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'
           },
          '50%': { 
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
           },
        }
       }

    },
  },
  variants: {
    extend: {
      animation: ['hover', 'focus'],
    },
  },
  plugins: [
    require('tailwindcss-debug-screens'),
  ],
}
