const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/*.{js,feature}",
    baseUrl: 'https://pushing-it.vercel.app/',
    viewportWidth: 1920,
    viewportHeight: 1080,
    defaultCommandTimeout: 21000,
    chromeWebSecurity: false,
    watchForFileChanges: false,
    retries: 1
  },
  env: {
    user: 'pushingit',
    pass: '123456!'
  }
});
