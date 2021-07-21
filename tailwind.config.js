module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
       height: {
        112: "448px",
      },
      width: {
        112: "448px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
