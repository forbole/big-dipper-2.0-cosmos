const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig.json');

// Any custom config you want to pass to Jest
const customJestConfig = {
  preset: 'jest-presets/jest/node',
  moduleNameMapper: {
    ...pathsToModuleNameMapper(compilerOptions.paths, {
      prefix: '<rootDir>/',
    }),
  }
};

module.exports = customJestConfig
