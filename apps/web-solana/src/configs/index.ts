import chainConfigMainnet from './chain_config.mainnet.json';
import generalConfig from './general_config.json';

/**
 * Helper function to return different configs based on the same chain
 * @returns config
 */
const getChainConfig = () => {
  return chainConfigMainnet;
};

const chainConfig = getChainConfig();

export {
  chainConfig,
  generalConfig,
};
