const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('tsconfig/nextjs.json');

module.exports = {
  testEnvironment: 'jsdom',
  preset: 'ts-jest',
  roots: ['<rootDir>'],
  moduleDirectories: [
    'node_modules',
    '<rootDir>',
  ],
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json'],
  testPathIgnorePatterns: ['[/\\\\](node_modules|.next|cypress)[/\\\\]'],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
  transform: {
    '.+\\.(svg|css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.(ts|tsx)$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    ...pathsToModuleNameMapper(compilerOptions.paths, {
      prefix: '<rootDir>/',
    }),
  },
  setupFilesAfterEnv: [
    '<rootDir>/jest.setup.js',
  ],
};
