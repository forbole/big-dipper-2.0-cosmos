/* eslint-disable @typescript-eslint/no-var-requires */
const { execSync } = require('child_process');
const { resolve } = require('path');

const [_node, _buildjs, ...argRest] = process.argv;

if (argRest[0] === 'test') {
  execSync(`wasm-pack test --node`, {
    cwd: resolve(__dirname, '../..'),
  });
} else if (argRest[0] === 'build') {
  execSync(`wasm-pack build --target web --out-dir ${resolve(__dirname, 'pkg')}}`, {
    cwd: resolve(__dirname, '../..'),
  });
} else {
  execSync(`wasm-pack ${argRest.join(' ')}`, {
    cwd: resolve(__dirname, '../..'),
  });
}
