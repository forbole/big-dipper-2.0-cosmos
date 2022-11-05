const nextTranslate = require('next-translate');

// for turborepo
const withTM = require('next-transpile-modules')(['ui']);
const withSentry = require('shared-utils/configs/withSentry');
const nextConfig = require('shared-utils/configs/next');

// each chain has its own chains/<chainName>.json
const config = require('shared-utils/configs/chains/rizon.json');

module.exports = withTM(withSentry(nextTranslate(nextConfig(config))));
