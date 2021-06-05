module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx,vue}', './public/index.html', './public/**/*.html',],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '60%': '60%',
    },
    extend: {
      colors: {
        'hdblue': '#0F7B92',
      },
      backgroundImage: theme => ({
        'developer-isometric': "url('../assets/illustrations/dev-iso.svg')",
        'developer-3d': "url('../assets/illustrations/developer.svg')",
        'black-art': "url('../assets/illustrations/black-art.svg')",
        'graph-paper': "url('../assets/illustrations/graph-paper.svg')",
      })
    },
  },
  variants: {
    animation: ['responsive', 'motion-safe', 'motion-reduce'],
    extend: {},
  },
  plugins: [],
}
