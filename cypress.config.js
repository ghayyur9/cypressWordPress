const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    watchForFileChanges : false ,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      URL: 'https://businext-temp-develop.go-vip.net/wp-login.php?redirect_to=https%3A%2F%2Fbusinext-temp-develop.go-vip.net%2Fwp-admin%2F&reauth=1',
    },
  },
});
