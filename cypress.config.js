const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  e2e: {
    specPattern: "**/*.feature",
    chromeWebSecurity: false,
    baseUrl: "https://www.saucedemo.com/",
    viewportHeight: 1000,
    viewportWidth: 1800,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("file:preprocessor", cucumber());
    },
  },
});
