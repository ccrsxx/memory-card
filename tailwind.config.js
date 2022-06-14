/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx', './public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif']
      },
      colors: {
        'accent-color': '#b2becd',
        'input-color': '#292929',
        'gray-color': '#a6a6a6',
        'dark-color': '#2e2e2e',
        'main-color': '#b2becd',
        'btn-color': '#242424',
        'bg-color': '#12181b'
      },
      animation: {
        fade: 'fade 500ms ease-in-out'
      },
      keyframes: {
        fade: {
          from: {
            opacity: 0
          },
          to: {
            opacity: 1
          }
        }
      }
    }
  },
  plugins: []
};
