import { ChainIdDocument } from '@/graphql/types/general_types';
import { query } from '@/hooks/useBigDipperNetworks';

const mockQueryResult = jest.fn().mockReturnValue({
  data: {
    networks: [
      {
        name: 'Desmos',
        logo: 'https://raw.githubusercontent.com/forbole/big-dipper-networks/main/logos/desmos.svg?sanitize=true',
        cover:
          'https://raw.githubusercontent.com/forbole/big-dipper-networks/main/covers/desmos.png?sanitize=true',
        links: [
          {
            name: 'Testnet',
            chain_id: 'morpheus-apollo-3',
            url: 'https://morpheus.desmos.network',
          },
          {
            name: 'Mainnet',
            chain_id: 'desmos-mainnet',
            url: 'https://explorer.desmos.network',
          },
        ],
      },
    ],
  },
});

export const mockQuery = { request: { query }, result: mockQueryResult };

const mockChainIdResult = jest.fn().mockReturnValue({
  data: {
    genesis: [
      {
        chainId: 'desmos-mainnet',
        time: '',
      },
    ],
  },
});

export const mockChainId = { request: { query: ChainIdDocument }, result: mockChainIdResult };
