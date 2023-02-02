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
    'import/external-module-folders': ['node_modules', '.yarn'],
    'import/resolver': {
      typescript: {
        // use an array of glob patter
        project: ['tsconfig.json', 'apps/*/tsconfig.json', 'packages/*/tsconfig.json'],
      },
    },
  },
  rules: {
    /* https://typescript-eslint.io/rules/no-unused-vars/ */
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        ignoreRestSiblings: true,
        argsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    /* https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/anchor-is-valid.md */
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
    /* https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/click-events-have-key-events.md */
    'jsx-a11y/click-events-have-key-events': 'off',
    /* https://eslint.org/docs/latest/rules/camelcase */
    /* prefer not to migrate existing code to use default exports for now */
    camelcase: 'off',
    /* https://eslint.org/docs/latest/rules/no-param-reassign */
    'no-param-reassign': 'off',
    /* https://eslint.org/docs/latest/rules/no-use-before-define */
    'no-use-before-define': ['error', { classes: false, functions: false, variables: false }],
    /* https://eslint.org/docs/latest/rules/no-console */
    'no-console': ['error', { allow: ['warn', 'error'] }],
    /* https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md */
    'import/extensions': 'off',
    /* https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/named.md */
    /* doesn't work work in ide */
    'import/named': 'off',
    /* https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md */
    /* prefer not to migrate existing code to use default exports for now */
    'import/prefer-default-export': 'off',
    /* https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md */
    /* doesn't work well with monorepos in IDE */
    'import/no-extraneous-dependencies': 'off',
    /* https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md */
    'react/function-component-definition': [
      'warn',
      {
        namedComponents: ['function-declaration', 'arrow-function'],
        unnamedComponents: 'arrow-function',
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
    /* https://nextjs.org/docs/messages/no-html-link-for-pages */
    '@next/next/no-html-link-for-pages': 'off',
  },
  env: {
    es6: true,
    browser: true,
    jest: true,
    node: true,
  },
};
