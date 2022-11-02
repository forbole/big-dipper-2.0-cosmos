const { join } = require('path');

// Any custom config you want to pass to Jest
const customJestConfig = {
  setupFilesAfterEnv: [
    join(__dirname, 'jest.setup.js')
  ],
  moduleDirectories: ['node_modules', '<rootDir>'],
  modulePathIgnorePatterns: ['<rootDir>/test/__fixtures__', '<rootDir>/node_modules', '<rootDir>/dist'],
  moduleNameMapper: {
    '\\.(svg\\?url|css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '\\.svg$': '<rootDir>/__mocks__/svg.js',
  },
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/', '<rootDir>/cypress/'],
  transform: {
    '^.+\\.[jt]sx?$': 'ts-jest',
    '^.+\\.(svg\\?url|css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
};

module.exports = customJestConfig;
