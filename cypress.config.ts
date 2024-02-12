import { defineConfig } from "cypress";

module.exports = defineConfig({
  reporter: 'junit',
  reporterOptions: {
    mochaFile: 'cypress/results/results-[hash].xml',
  },
  video: true,
  e2e: {
    setupNodeEvents(on, config) {
    },
    specPattern: ['**/e2e/*.cy.ts'],
  },
});
