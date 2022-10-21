module.exports = {
  root: true,
  extends: [
    // The most common rules list for ESLint
    // source: https://sourcegraph.com/search?q=context:global+repo:%5Egithub%5C.com/airbnb/javascript%24%40master+file:%5Epackages/eslint-config-airbnb-base+/%27%5B%5E%27%5D%2B%27:%28%5Cs*%7C%5Cs*%5C%5B%5Cs*%29%3F%28%3F:%27error%27%7C%27warn%27%7C%27off%27%7Ctrue%7Cfalse%7C1%7C0%29/&patternType=standard
    'airbnb',
    "airbnb/hooks",
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
  plugins: ['@typescript-eslint'],

  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    // TODO: disabled due to historical reason
    // error off
    "@typescript-eslint/no-loss-of-precision": "off",
    "@typescript-eslint/no-var-requires": "off",
    "arrow-body-style": "off",
    "camelcase": "off",
    "consistent-return": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/interactive-supports-focus": "off",
    "no-bitwise": "off",
    "no-param-reassign": "off",
    "no-use-before-define": "off",
    "no-shadow": "off",
    "import/extensions": "off",
    "import/prefer-default-export": "off",
    "lines-between-class-members": "off",
    "import/newline-after-import": "off",
    "import/no-extraneous-dependencies": "off",
    "import/no-unresolved": "off",
    "react/destructuring-assignment": "off",
    "react/jsx-filename-extension": "off",
    "react/jsx-props-no-spreading": "off",
    "react/no-array-index-key": "off",
    "react/no-unknown-property": "off",
    "react/no-unused-prop-types": "off",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "react/require-default-props": "off",
    "react-hooks/exhaustive-deps": "off",
    "react-hooks/rules-of-hooks": "off",
    // warn off
    "@next/next/no-img-element": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-unused-vars": ["off", { "argsIgnorePattern": "^_" }],
    "no-console": ["off", { allow: ["warn", "error"] }],
    // error
    '@next/next/no-html-link-for-pages': ['error', './src/pages'],
  },
  env: {
    es6: true,
    browser: true,
    jest: true,
    node: true,
  },
};
