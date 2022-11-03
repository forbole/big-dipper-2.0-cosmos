const { join } = require('path');

// Any custom config you want to pass to Jest
const customJestConfig = {
  setupFilesAfterEnv: [join(__dirname, 'jest.setup.js')],
  modulePathIgnorePatterns: ['<rootDir>/test/__fixtures__', '<rootDir>/node_modules', '<rootDir>/dist'],
  moduleNameMapper: {
    // must be "^.+\\.(svg)$" to override the default nextjs setting
    '^.+\\.(svg)$': join(__dirname, 'svg.js'),
    '^.+\\.(svg)\\?url$': join(__dirname, 'svg.js'),
  },
  // '/node_modules/', '/.next/',  added by nextjs
  testPathIgnorePatterns: ['/cypress/'],
  transform: {
    '^.+\\.svg\\?url$': 'jest-transform-stub',
  },
  testEnvironment: 'jest-environment-jsdom',
};

module.exports = customJestConfig;
