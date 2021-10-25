module.exports = {
   mode: 'jit',
  purge:{ 
    enabled: true,
    content:['./**/*.html']
  }, 
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        amarillocrema: '#FFF5AE',
        amarilloselec: '#F9ED01',
        amarilloselec2: '#FDF102',
        rojodescripcion: '#F80000',
        amarillocurva: '#e8ea10',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}
