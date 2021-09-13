const { resolve } = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        Productos: resolve(__dirname, 'Productos/index.html'),
        Promociones: resolve(__dirname, 'Promociones/index.html'),
        IMC: resolve(__dirname, 'IMC/index.html'),
        Comunidad: resolve(__dirname, 'Comunidad/index.html'),
        Contacto: resolve(__dirname, 'Contacto/index.html')
      }
    }
  }
})