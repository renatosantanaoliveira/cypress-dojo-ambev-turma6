const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://conexaoqa.herokuapp.com',
    setupNodeEvents(on, config) {
    },
  },
});
