const nextTranslate = require('next-translate');

// for turborepo
const withTM = require('next-transpile-modules')(['shared-utils', 'ui']);
const withSentry = require('shared-utils/src/withSentry');
const nextConfig = require('shared-utils/src/next');

// each chain has its own chains/<chainName>.json
const config = require('shared-utils/configs/chains/nomic.json');

module.exports = withTM(withSentry(nextTranslate(nextConfig(config))));
