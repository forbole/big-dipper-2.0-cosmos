import type { ChainConfig } from '@/chainConfig/types';

if (!process.env.CHAIN_CONFIG) {
  throw new Error('CHAIN_CONFIG is not defined.');
}

const chainConfig = JSON.parse(process.env.CHAIN_CONFIG) as ChainConfig;

export default chainConfig;
