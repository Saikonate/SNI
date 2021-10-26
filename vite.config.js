const { resolve } = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        ProductosProteinas: resolve(__dirname, 'Productos-Proteinas/index.html'),
        ProductosPlayeras: resolve(__dirname, 'Productos-Playeras/index.html'),
        ProductosShorts: resolve(__dirname, 'Productos-Shorts/index.html'),
        ProductosOtros: resolve(__dirname, 'Productos-Otros/index.html'),
        Promociones: resolve(__dirname, 'Promociones/index.html'),
        IMC: resolve(__dirname, 'IMC/index.html'),
        Comunidad: resolve(__dirname, 'Comunidad/index.html'),
        Contacto: resolve(__dirname, 'Contacto/index.html'),
        mainjs: resolve(__dirname, 'main.js')
      }
    }
  }
})