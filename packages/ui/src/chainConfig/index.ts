import type { ChainConfig } from './types';

if (!process.env.NEXT_PUBLIC_CHAIN_CONFIG) {
  throw new Error('NEXT_PUBLIC_CHAIN_CONFIG is not defined.');
}

const chainConfig = JSON.parse(process.env.NEXT_PUBLIC_CHAIN_CONFIG) as ChainConfig;

export default chainConfig;
