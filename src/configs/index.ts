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
  const chainType = process.env.CHAIN_TYPE;
  const chainName = process.env.CHAIN_NAME;

  console.log("chain type is %s", chainType);
  console.log("chain name is %s", chainName);

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
