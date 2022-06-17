// @type {Cypress.PluginConfig}

module.exports = (on, config) => {
  on('task', {
    log(message) {
      console.log(`Soy el console log del task ${message}`);
    },
  });
};
