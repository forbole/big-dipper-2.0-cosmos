const nextTranslate = require('next-translate');

// for turborepo
const withTM = require('next-transpile-modules');
const withSentry = require('shared-utils/configs/withSentry.js');
const nextConfig = require('shared-utils/configs/next.js');

// each chain has its own chains/<chainName>.json
const { readFileSync } = require('fs');
const { resolve } = require('path');
const config = JSON.parse(
  readFileSync(resolve('../../packages/shared-utils/configs/chains/rizon.json'))
);

module.exports = withTM(['ui'])(withSentry(nextTranslate(nextConfig(config))));
