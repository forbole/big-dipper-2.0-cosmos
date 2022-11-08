module.exports = {
  root: true,
  extends: ['custom', 'plugin:cypress/recommended'],
  plugins: ['cypress'],
  env: {
    'cypress/globals': true,
  },
};
