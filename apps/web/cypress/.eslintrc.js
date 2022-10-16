module.exports = {
  "plugins": [
    "cypress",
  ],
  rules: {
    "@typescript-eslint/no-unused-vars": "off",
    "no-unused-vars": "off",
  },
  env: {
    "cypress/globals": true,
  }
};
