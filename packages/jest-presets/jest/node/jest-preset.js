const { readdirSync, readFileSync } = require('fs');
const { join, resolve } = require('path');
const { pathsToModuleNameMapper } = require('ts-jest');

const root = resolve(__dirname, '../../../../apps');
const paths = readdirSync(root, { withFileTypes: true }).
  filter(dirent => dirent.isDirectory()).
  reduce((acc, dirent) => {
    try {
      const file = readFileSync(join(root, dirent.name, 'tsconfig.json'), 'utf8');
      const json = JSON.parse(file);
      const {paths} = json.compilerOptions;
      return Object.assign(acc, pathsToModuleNameMapper(paths, {
        prefix: '<rootDir>/',
      }));
    } catch (error) {
      console.log({error});
      return acc;
    }
  }, {});

// Any custom config you want to pass to Jest
const customJestConfig = {
  testEnvironment: 'jsdom',
  preset: 'ts-jest',
  roots: ['<rootDir>'],
  moduleDirectories: [
    'node_modules',
    '<rootDir>',
  ],
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json'],
  testPathIgnorePatterns: ['/(node_modules|.next|cypress)/'],
  transformIgnorePatterns: ['/node_modules/.+\\.(ts|tsx)$'],
  transform: {
    '.+\\.(svg|css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.(ts|tsx)$': '@swc/jest',
  },
  setupFilesAfterEnv: [
    '<rootDir>/jest.setup.js',
  ],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '\\.svg(|\\?url)$': 'shared-utils/__mocks__/svg.js',
    'ui/dist': 'ui/src',
    'ui/dist/(.*)': 'ui/src/$1',
    ...paths,
  }
};

module.exports = customJestConfig
