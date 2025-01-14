const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('before:run', () => {
        require('cypress-mochawesome-reporter/plugin')(on);
      });
    },
    specPattern: "cypress/e2e/*.{js,feature}",
    baseUrl: 'https://pushing-it.vercel.app/',
    viewportWidth: 1920,
    viewportHeight: 1080,
    defaultCommandTimeout: 21000,
    chromeWebSecurity: false,
    watchForFileChanges: false,
    retries: 1,
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: 'cypress/reports/mochawesome-report',
      overwrite: false,
      html: true,
      json: true,
    },
    env: {
      user: 'pushingit',
      pass: '123456!',
    },
  },
});
