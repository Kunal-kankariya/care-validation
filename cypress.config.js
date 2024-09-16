const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  defaultCommandTimeout: 20000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://careglp-staging.carevalidate.com/",
    specPattern: "cypress/e2e/**/*.{js, jsx, ts, tsx}"
  },
});
