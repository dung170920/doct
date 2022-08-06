module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Inter', 'sans-serif'],
      },
      colors: {
        gray: {
          400: '#B2B3BD',
          500: '#808191',
          600: '#4B5264',
          700: '#171725',
        },
        indigo: {
          DEFAULT: '#605BFF',
        },
        blue: {
          DEFAULT: '#23A9F9',
        },
        red: {
          DEFAULT: '#FF5263',
        },
        black: '#1B2432',
      },
      spacing: {
        4.5: '1.125rem',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
