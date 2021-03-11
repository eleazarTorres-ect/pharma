module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'port-white-A': '#eef7fe',
        'port-white-B': '#d3e2ee',
        'port-neon-A': '#c3f74f',
        'port-neon-B': '#a6e51f',
        'port-neon-C': '#7da220',
        'port-neon-D': '#4f631d',
        'port-royal-A': '#465a6d',
        'port-royal-B': '#001529'
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
