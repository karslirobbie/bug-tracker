module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        purple: {
          1000: '#DCDCF9',
          2000: '#F0F0FF',
          3000: '#6361FC'
        },
        lime: {
          400: '#4ADE80'
        },
        gray: {
          2000: '#FBFBFB',
          3000: '#595959'
        }
      },
      fontFamily: {
        "poppins": ['"Poppins"']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
