/** @type {import('tailwindcss').Config} */
export default {
  prefix: 'vdo-',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "450px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1400px",
      "3xl": "1600px",
      "4xl": "1700px",
      "5xl": "1800px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "15px",
        "2xl": "0px",
      },
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
      sarina: ['Sarina', 'cursive'],
    },
    fontSize: {
      xs: '12px',
      sm: '14px',
      base: '15px',
      lg: '17px',
      xl: '27px',
      '2xl': '29px',
      '3xl': '32px',
      '4xl': '40px',
      '5xl': '50px',
      '6xl': '55px',
    },
    extend: {
      colors: {
        brand: '#FF385C',
        orange: '#FF8038',
      }
    }
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen xs': {
            maxWidth: '400px',
          },
          '@screen sm': {
            maxWidth: '540px',
          },
          '@screen md': {
            maxWidth: '720px',
          },
          '@screen lg': {
            maxWidth: '960px',
          },
          '@screen xl': {
            maxWidth: '1140px',
          },
          '@screen 2xl': {
            maxWidth: '1280px',
          },
        }
      })
    }
  ]
}