/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig, Options } from 'tsup';

const config: Options = {
  entry: ['src/**/index.{ts,tsx}'],
  target: 'es6',
  format: ['esm'],
  dts: true,
  silent: true,
};

export default defineConfig(config);
