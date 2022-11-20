module.exports = {
  root: true,
  extends: [
    // The most common rules list for ESLint
    // source: https://sourcegraph.com/search?q=context:global+repo:%5Egithub%5C.com/airbnb/javascript%24%40master+file:%5Epackages/eslint-config-airbnb-base+/%27%5B%5E%27%5D%2B%27:%28%5Cs*%7C%5Cs*%5C%5B%5Cs*%29%3F%28%3F:%27error%27%7C%27warn%27%7C%27off%27%7Ctrue%7Cfalse%7C1%7C0%29/&patternType=standard
    'airbnb',
    'airbnb/hooks',
    // Since version 11.0.0, Next.js provides an integrated ESLint experience out of the box.(https://nextjs.org/docs/basic-features/eslint)
    // source: https://sourcegraph.com/github.com/vercel/next.js@8545fd1/-/blob/packages/eslint-plugin-next/lib/index.js
    'plugin:@next/next/recommended',
    // source: https://sourcegraph.com/github.com/typescript-eslint/typescript-eslint/-/blob/packages/eslint-plugin/src/configs/recommended.ts
    'plugin:@typescript-eslint/recommended',
    // The high-performance build system for JavaScript & TypeScript codebases. (by Vercel)
    // source: https://sourcegraph.com/github.com/vercel/turborepo@main/-/blob/packages/eslint-plugin-turbo/lib/rules/no-undeclared-env-vars.ts?L1
    'turbo',
    // Putting prettier last so it can override other configs
    // source: https://sourcegraph.com/github.com/prettier/eslint-config-prettier@main/-/blob/index.js
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import'],

  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
        // use an array of glob patterns
        project: ['./tsconfig.json'],
      },
    },
  },
  rules: {
    // TODO: disabled due to historical reason
    '@next/next/no-img-element': 'off',
    '@next/next/no-html-link-for-pages': 'off',
    '@typescript-eslint/no-loss-of-precision': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unused-vars': ['off', { argsIgnorePattern: '^_' }],
    'arrow-body-style': 'off',
    camelcase: 'off',
    'consistent-return': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/interactive-supports-focus': 'off',
    'lines-between-class-members': 'off',
    'no-bitwise': 'off',
    'no-param-reassign': 'off',
    'no-use-before-define': 'off',
    'no-shadow': 'off',
    'no-underscore-dangle': 'off',
    'no-console': ['off', { allow: ['warn', 'error'] }],
    // turn on errors for missing imports
    'import/no-cycle': 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    /* https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md */
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.test.js',
          '**/*.spec.js',
          '**/*.test.ts',
          '**/*.spec.ts',
          '**/*.test.tsx',
          '**/*.spec.tsx',
        ],
      },
    ],
    /* https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md */
    'react/destructuring-assignment': 'off',
    /* https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md */
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.jsx'] }],
    /* https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md */
    'react/jsx-props-no-spreading': 'off',
    /* https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md */
    /* nextjs has its own jsx transform */
    'react/react-in-jsx-scope': 'off',
    /* https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/require-default-props.md */
    /* as per https://twitter.com/dan_abramov/status/1133878326358171650 this will eventually get deprecated. */
    'react/require-default-props': 'off',
    /* Https://github.com/facebook/react/issues/14920 */
    'react-hooks/exhaustive-deps': 'warn',
  },
  env: {
    es6: true,
    browser: true,
    jest: true,
    node: true,
  },
  ignorePatterns: [
    '**/node_modules/*',
    '**/out/*',
    '**/.next/*',
    '**/dist/*',
    '**/cypress/support/*',
    '**/cypress/plugins/*',
    '**/cypress/fixtures/*',
    '**/src/graphql/types/*',
  ],
};
