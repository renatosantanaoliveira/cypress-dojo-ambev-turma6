const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'iubfrs',
  e2e: {
    baseUrl: 'https://conexaoqa.herokuapp.com',
    setupNodeEvents(on, config) {
    },
  },
});
