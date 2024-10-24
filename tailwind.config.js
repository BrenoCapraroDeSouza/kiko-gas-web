/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      height: {
        15: '3.75rem',
      },

      colors: {
        primary: '#FF6C25',
        primary50: 'rgba(255, 108, 37, 0.5)',

        secondary: '#FFF',
        secondary70: 'rgba(255, 255, 255, 0.7)',

        background: '#000',
        overlay40: 'rgba(0, 0, 0, 0.4)',
        content: '#151515',
      },

      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },

      boxShadow: {
        default:
          '0px 0px 16px 0px rgba(255, 108, 37, 0.5), 0px 0px 16px 0px rgba(255, 108, 37, 0.5)',
      },

      width: {
        25: '6.25rem',
        128: '32rem',
        144: '36rem',
        189: '47.25rem',
      },

      maxWidth: {
        144: '36rem',
      },

      minWidth: {
        128: '32rem',
      },

      maxHeight: {
        75: '18.75rem',
        121: '30.25rem',
        148: '37rem',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
};
