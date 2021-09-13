module.exports = {
   mode: 'jit',
  purge:{ 
    enabled: true,
    content:['./**/*.html']
  }, 
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}
