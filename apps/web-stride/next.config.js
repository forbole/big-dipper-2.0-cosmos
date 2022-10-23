const nextTranslate = require('next-translate');
// for turborepo
const withTM = require('next-transpile-modules')(['ui']);
const withSentry = require('shared-utils/withSentry');
const nextConfig = require('shared-utils/nextConfig');
const { chainName } = require('./src/configs/general_config.json');

module.exports = withSentry(withTM(nextTranslate(nextConfig(`/${chainName}`))));
