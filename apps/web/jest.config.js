const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig.json');

// Any custom config you want to pass to Jest
const customJestConfig = {
  preset: 'jest-presets/jest/node',
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '\\.svg(|\\?url)$': 'shared-utils/__mocks__/svg.js',
    'ui/dist': 'ui/src',
    'ui/dist/(.*)': 'ui/src/$1',
    ...pathsToModuleNameMapper(compilerOptions.paths, {
      prefix: '<rootDir>/',
    }),
  }
};

module.exports = customJestConfig
