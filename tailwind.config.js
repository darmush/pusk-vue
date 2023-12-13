/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      colors:{
        'bg': '#000000',
        'bg-card': 'rgba(19, 19, 19, 0.6)',
        'bg-label': 'rgba(37, 37, 37, 0.6)',
        'bg-header': 'rgba(18, 18, 18, 0.2)',
        'bg-header-full': 'rgba(19, 19, 19, 0.8)',
        'gradient-blue': '#174AFF',
        'gradient-pink': '#FF29C3',
        'gradient-blue-opacity': 'rgba(0, 194, 255, 0.1)',
        'gradient-bg': 'rgba(24, 75, 255, 0)',
        'accent': '#40FFE4',
        'hover': '#15F3D4',
        'active': '#19DABE',
        'white': '#FFFFFF',
        'text-light': '#D1D1D1',
        'text-dark': '#121212',
        '': '',
      },
      fontSize: {
        xxs: ['12px', '20px'],
        xs: ['14px', '20px'],
        sm: ['16px', '20px'],
        'sm-wide': ['16px', '24px'],
        base: ['18px', '24px'],
        md: ['20px', '24px'],
        lg: ['24px', '26px'],
        xl: ['28px', '32px'],
        '2xl': ['32px', '35px'],
        '3xl': ['60px', '64px'],
        '4xl': ['80px', '88px'],
      },
      screens: {
        'xs': '420px',
        'sm': '576px',
        'md': '780px',
        'lg': '1020px',
        'xl': '1128px',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      dropShadow: {
        'xs': '-2px -2px 4px rgba(0, 224, 255, 0.2)',
        'md': '-2px -2px 4px rgba(0, 224, 255, 0.4)',
        'lg': '-2px -2px 4px rgba(0, 224, 255, 0.8)',
      },
      boxShadow: {
        'card': 'inset -3px -3px 5px rgba(0, 224, 255, 0.4), inset 3px 3px 5px rgba(0, 224, 255, 0.4)',
      },
      // keyframes: {
      //   'rotation-big': {
      //     '0%': { transform: 'rotate(0deg)' },
      //     '50%': { transform: 'rotate(20deg)' },
      //     '100%': { transform: 'rotate(0deg)' },
      //   },
      //   'rotation-small': {
      //     '0%': { transform: 'rotate(0deg)' },
      //     '25%': { transform: 'rotate(30deg)' },
      //     '75%': { transform: 'rotate(-30deg)' },
      //     '100%': { transform: 'rotate(0deg)' },
      //   }
      // },
      // animation: {
      //   'rotation-big': 'rotation-big 10s infinite alternate ease-in-out;',
      //   'rotation-small': 'rotation-small 5s infinite alternate ease-in-out',
      // },
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}

