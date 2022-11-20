module.exports = {
  root: true,
  extends: ['custom', 'plugin:cypress/recommended'],
  plugins: ['cypress', '@typescript-eslint', 'import'],
  parser: '@typescript-eslint/parser',

  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
        // use an array of glob patterns
        project: ['./**/tsconfig.json'],
      },
    },
  },
  env: {
    'cypress/globals': true,
  },
};
