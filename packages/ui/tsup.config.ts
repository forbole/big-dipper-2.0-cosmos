/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig, Options } from 'tsup';

const config: Options = {
  entry: ['src/**/*.{ts,tsx}'],
  target: 'es6',
  minify: true,
  clean: true,
  format: ['esm'],
  dts: true,
  silent: true,
  sourcemap: true,
};

export default defineConfig(config);
