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