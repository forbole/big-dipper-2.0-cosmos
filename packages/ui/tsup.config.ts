import { defineConfig, Options } from 'tsup';

const config: Options = {
  entry: ['src/**/index.{ts,tsx}'],
  target: 'es6',
  minify: true,
  clean: true,
  format: ['esm'],
  dts: true,
  silent: true,
};

export default defineConfig(config);
