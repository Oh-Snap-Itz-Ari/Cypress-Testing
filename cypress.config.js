const { defineConfig } = require("cypress");

module.exports = defineConfig({
  retries: {"runMode":2, "openMode":0}, // Configuración de los Reintentos en cada modo
  video: false, // Configuración de los videos (Si se generan o no videos al hacer pruebas)
  screenshotOnRunFailure: true, // Configuración de los Screenshots
  //viewportWidth: 1200, // Configuración del ancho de la pantalla
  defaultCommandTimeout: 5000, // Timeout de 5 segundos en los comandos de Cypress
  pageLoadTimeout: 1000, //Timeout de 10 segundos para el cargue de las páginas
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
