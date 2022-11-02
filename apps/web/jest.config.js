const preset = require('jest-presets/jest/node/jest-preset');
const nextJest = require('next/jest')
const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig.json');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

const { moduleNameMapper, ...config } = preset;

// Add any custom config to be passed to Jest
const customJestConfig = {
  ...config,
  moduleNameMapper: {
    ...moduleNameMapper,
    ...pathsToModuleNameMapper(compilerOptions.paths, {
      prefix: '<rootDir>/',
    }),
  }
}

  // createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
