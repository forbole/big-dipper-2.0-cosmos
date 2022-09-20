import { getMainnetChainConfig } from './mainnet_configs';
import { getTestnetChainConfig } from './testnet_configs';
import chainConfigDesmosMainnet from './chain_configs/desmos-mainnet.json';
import generalConfig from './general_config.json';

/**
 * Helper function to return different configs based on the same chain
 * @returns config
 */
const getChainConfig = () => {
  // chainType's & chainName's value will be passed in as npm argument
  const chainType = process.env.CHAIN_TYPE;
  const chainName = process.env.CHAIN_NAME;

  switch (chainType) {
    case 'mainnet':
      return getMainnetChainConfig(chainName);
    case 'testnet':
      return getTestnetChainConfig(chainName);
    default:
      return chainConfigDesmosMainnet;
  }
};

const chainConfig = getChainConfig();

export {
  chainConfig,
  generalConfig,
};
