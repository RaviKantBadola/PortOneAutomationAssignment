const { defineConfig } = require("cypress");

async function setupNodeEvents(on, config) {
  return config;
}
module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    specPattern: "cypress/PortOne/*.js",
  },
  chromeWebSecurity:false
});
