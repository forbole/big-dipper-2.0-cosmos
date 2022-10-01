import generalConfig from './general_config.json';
import { Config } from './types';

/**
 * Helper function to return different configs based on the same chain
 * @returns config
 */
const getChainConfig = async (): Promise<Config> => {
  // TO-DO: find a proper way to pass in chainType's & chainName's values as npm arguments
  const chainType = process.env.CHAIN_TYPE;
  const chainName = process.env.CHAIN_NAME;

  return await import(`./chain_configs/${chainName}-${chainType}.json`) as Config;
};

const chainConfig = await getChainConfig();

export {
  chainConfig,
  generalConfig,
};
