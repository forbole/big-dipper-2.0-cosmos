const configFromPreset = require('jest-presets/jest/node/jest-preset');
const nextJest = require('next/jest');
const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig.json');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
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
    }
  };
};

module.exports = exportFunc;
