module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-custom`
  extends: ['custom'],
  ignorePatterns: [
    '**/node_modules/*',
    '**/out/*',
    '**/.next/*',
    '**/dist/*',
    '**/cypress/support/*',
    '**/cypress/plugins/*',
    '**/cypress/fixtures/*',
    '**/src/graphql/*',
  ],
  settings: {
    next: {
      rootDir: ['apps/*/'],
    },
  },
};
