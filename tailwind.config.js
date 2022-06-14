/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

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
        'dark-color': '#2a2e35',
        'main-color': '#b2becd',
        'bg-color': '#12181b'
      },
      animation: {
        fade: 'fade 1s ease-in-out',
        'fade-up': 'fade-up 1s ease-in-out',
        'spin-gradient': 'spin-gradient 1s linear infinite'
      },
      keyframes: {
        fade: {
          from: {
            opacity: 0
          },
          to: {
            opacity: 1
          }
        },
        'fade-up': {
          from: {
            opacity: 0,
            transform: 'translateY(20px)'
          },
          to: {
            opacity: 1,
            transform: 'translateY(0)'
          }
        },
        'spin-gradient': {
          from: {
            transform: 'rotate(0deg)',
            color: colors.orange['400']
          },
          to: {
            transform: 'rotate(360deg)',
            color: colors.pink['400']
          }
        }
      }
    }
  },
  plugins: []
};
