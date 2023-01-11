import { Config } from 'jest';

// Any custom config you want to pass to Jest
const customJestConfig: Config = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  modulePathIgnorePatterns: [
    '<rootDir>/tests/__fixtures__',
    '<rootDir>/node_modules',
    '<rootDir>/dist',
  ],
  moduleNameMapper: {
    // must be "^.+\\.(svg)$" to override the default nextjs setting
    '^.+\\.(svg)$': 'shared-utils/__mocks__/svg.js',
    '^.+\\.(svg)\\?url$': 'shared-utils/__mocks__/svg.js',
  },
  // '/node_modules/', '/.next/',  added by nextjs
  transform: {
    '^.+\\.(svg\\?url)$': 'jest-transform-stub',
  },
  testEnvironment: 'jest-environment-jsdom',
  snapshotSerializers: ['@emotion/jest/serializer'],
};

export default customJestConfig;
