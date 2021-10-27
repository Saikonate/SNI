const { resolve } = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        ProductosProteinas: resolve(__dirname, 'Productos-Proteinas/index.html'),
        ProductosSuplementos: resolve(__dirname, 'Productos-Suplementos/index.html'),
        ProductosGanadores: resolve(__dirname, 'Productos-Ganadores/index.html'),
        ProductosAminoacidos: resolve(__dirname, 'Productos-Aminoacidos/index.html'),
        ProductosPreentreno: resolve(__dirname, 'Productos-Preentreno/index.html'),
        ProductosPrecursores: resolve(__dirname, 'Productos-Precursores/index.html'),
        ProductosTermogenicos: resolve(__dirname, 'Productos-Termogenicos/index.html'),
        ProductosGlutaminas: resolve(__dirname, 'Productos-Glutaminas/index.html'),
        ProductosOtros: resolve(__dirname, 'Productos-Otros/index.html'),
        Promociones: resolve(__dirname, 'Promociones/index.html'),
        IMC: resolve(__dirname, 'IMC/index.html'),
        Comunidad: resolve(__dirname, 'Comunidad/index.html'),
        Contacto: resolve(__dirname, 'Contacto/index.html'),
      }
    }
  }
})