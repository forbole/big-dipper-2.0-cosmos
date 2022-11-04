const configFromPreset = require('jest-presets/jest/node/jest-preset');
const nextJest = require('next/jest');
const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig.json');
const { env } = require('./next.config');

/* Setting the environment variables for the test environment. */
Object.keys(env).forEach((key) => {
  process.env[key] = env[key];
});

/* Creating a jest configuration for nextjs. */
const createJestConfig = nextJest({
  dir: './',
})(configFromPreset);

const exportFunc = async () => {
  // Create Next.js jest configuration
  const configFromNext = await createJestConfig();
  // moduleNameMapper overrided by nextjs, so we need to add it here.
  return {
    ...configFromNext,
    moduleNameMapper: {
      ...configFromNext.moduleNameMapper,
      ...configFromPreset.moduleNameMapper,
      ...pathsToModuleNameMapper(compilerOptions.paths, {
        prefix: '<rootDir>/',
      }),
    },
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  };
};

module.exports = exportFunc;
