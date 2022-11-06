import configFromPreset from 'jest-presets/jest/node/jest-preset';
import nextJest from 'next/jest';
import { pathsToModuleNameMapper } from 'ts-jest';
import tsconfig from './tsconfig.json';
import nextConfig from './next.config.mjs';

/* Setting the environment variables for the test environment. */
Object.keys(nextConfig.env).forEach((key) => {
  process.env[key] = nextConfig.env[key];
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
      ...pathsToModuleNameMapper(tsconfig.compilerOptions.paths, {
        prefix: '<rootDir>/',
      }),
    },
  };
};

export default exportFunc;
