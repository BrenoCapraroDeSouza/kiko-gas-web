/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
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
        sans: ['Poppins', 'sans-serif'],
      },

      boxShadow: {
        default:
          '0px 0px 24px 0px rgba(255, 108, 37, 0.5), 0px 0px 24px 0px rgba(255, 108, 37, 0.5)',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
