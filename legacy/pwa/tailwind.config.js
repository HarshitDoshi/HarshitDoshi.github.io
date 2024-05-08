// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      backgroundSize: {
        '60%': '60%',
      },
      fontSize: {
        'mdh6': '1.000rem',
        'mdh5': '1.105rem',
        'mdh4': '1.210rem',
        'mdh3': '1.315rem',
        'mdh2': '1.420rem',
        'mdh1': '1.525rem',
      },
      colors: {
        'material-grey': {
          '9': '#212121',
          '8': '#424242',
          '7': '#616161',
          '6': '#757575',
          '5': '#9e9e9e',
          '4': '#bdbdbd',
          '3': '#e0e0e0',
          '2': '#eeeeee',
          '1': '#f5f5f5',
          '0': '#fafafa',
        },
        'color-primary': '#0F7B92',
      },
    },
  },
  variants: {
    animation: ['responsive', 'motion-safe', 'motion-reduce'],
    extend: {},
  },
  plugins: [],
}