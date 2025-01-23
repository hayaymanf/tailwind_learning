/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
   "./src/**/*.{html,js}"
    ],
  theme: {
    screens: {
      xs: '320px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1140px',
    },
    extend: {
      colors: {
        react: '#61DAFB',
      },
      spacing: {
        '1': '1rem',
        '2': '2rem',
        '3': '3rem',
        '4' : '1rem',
      },
    },
  },
  plugins: [],
}

