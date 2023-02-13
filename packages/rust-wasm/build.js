/* eslint-disable @typescript-eslint/no-var-requires */
const { execSync } = require('child_process');
const { resolve } = require('path');

const [_node, _buildjs, arg, ...argRest] = process.argv;

if (arg === 'test') {
  execSync(`wasm-pack test --node ${argRest.join(' ')}`, {
    cwd: resolve(__dirname, '../..'),
  });
} else if (arg === 'build') {
  execSync(
    `wasm-pack build --target web --out-dir ${resolve(__dirname, 'pkg')} ${argRest.join(' ')}`,
    {
      cwd: resolve(__dirname, '../..'),
    }
  );
} else {
  execSync(`wasm-pack ${[arg, ...argRest].join(' ')}`, {
    cwd: resolve(__dirname, '../..'),
  });
}
