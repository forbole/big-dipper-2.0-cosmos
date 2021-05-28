import axios from 'axios';
import { wait } from '@tests/utils';
import { ApolloProvider } from '@apollo/client';
import { createMockClient } from 'mock-apollo-client';
import renderer from 'react-test-renderer';
import {
  renderHook,
  cleanup,
} from '@testing-library/react-hooks';
import {
  ValidatorsAddressListDocument,
  MarketDataDocument,
} from '@graphql/types';

import {
  ChainProvider,
  useChainContext,
} from '.';

// ==================================
// mocks
// ==================================

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

export const mockNetworkData = {
  data: [
    {
      name: 'IRISnet',
      logo: 'https://gist.githubusercontent.com/kwunyeung/8be4598c77c61e497dfc7220a678b3ee/raw/8178b6bcce1d1563bac10f8a150c713724a742f1/irishub.svg?sanitize=true',
      links: [
        {
          name: 'Mainnet',
          chain_id: 'irishub',
          url: 'https://iris.bigdipper.live',
        },
      ],
    },
  ],
};

const mockChainId = jest.fn().mockResolvedValue({
  data: {
    genesis: [
      {
        chainId: 'morpheus-2021',
        time: '2021-01-20T07:00:00',
      },
    ],
  },
});

// ==================================
// unit tests
// ==================================
describe('context: NetworksContext', () => {
  it('Testing error handling', async () => {
    mockedAxios.get.mockImplementationOnce(() => Promise.resolve(mockNetworkData));
    const mockClient = createMockClient();

    mockClient.setRequestHandler(
      ValidatorsAddressListDocument,
      () => Promise.resolve({ errors: [{ message: 'GraphQL Error' }] }),
    );

    mockClient.setRequestHandler(
      MarketDataDocument,
      () => Promise.resolve({ errors: [{ message: 'GraphQL Error 2' }] }),
    );

    const Wrapper: React.FC = ({ children }) => {
      return (
        <ApolloProvider client={mockClient}>
          <ChainProvider>{children}</ChainProvider>
        </ApolloProvider>
      );
    };

    let hook;

    renderer.act(() => {
      hook = renderHook(() => useChainContext(), {
        wrapper: Wrapper,
      });
    });

    await wait(1000);

    // const { result } = hook;
    // expect(mockChainId).toBeCalledTimes(1);
    // expect(result.current.selected).toBe('morpheus-2021');
    // expect(result.current.networks).toHaveLength(1);
    // expect(result.current.networks[0].name).toBe('IRISnet');
  });
});

afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});
