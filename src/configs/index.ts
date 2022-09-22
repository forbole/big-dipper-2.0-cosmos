import { getMainnetChainConfig } from './mainnet_configs';
import { getTestnetChainConfig } from './testnet_configs';
import chainConfigDesmosMainnet from './chain_configs/desmos-mainnet.json';
import generalConfig from './general_config.json';

/**
 * Helper function to return different configs based on the same chain
 * @returns config
 */
const getChainConfig = () => {
  // TO-DO: find a proper way to pass in chainType's & chainName's values as npm arguments
  let chainType = process.env.CHAIN_TYPE;
  let chainName = process.env.CHAIN_NAME;

  chainType = 'mainnet';
  chainName = 'agoric';

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
