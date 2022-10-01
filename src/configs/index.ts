import { getMainnetChainConfig } from './mainnet_configs';
import { getTestnetChainConfig } from './testnet_configs';
import baseChainConfig from './chain_configs/base-config.json';
import generalConfig from './general_config.json';

/**
 * Helper function to return different configs based on the same chain
 * @returns config
 */
const getChainConfig = () => {
  const chainType = process.env.CHAIN_TYPE;
  const chainName = process.env.CHAIN_NAME;

  switch (chainType) {
    case 'mainnet':
      return getMainnetChainConfig(chainName);
    case 'testnet':
      return getTestnetChainConfig(chainName);
    default:
      return baseChainConfig;
  }
};

const chainConfig = getChainConfig();

export {
  chainConfig,
  generalConfig,
};
