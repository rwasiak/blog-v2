const { configureAxe } = require('jest-axe');

const axe = configureAxe({
  rules: {
    region: { enabled: false },
  },
});

module.exports = axe;
