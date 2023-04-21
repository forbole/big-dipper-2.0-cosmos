import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { ApolloClient, ApolloProvider, from, InMemoryCache } from '@apollo/client';
import { MockedProvider } from '@apollo/client/testing';
import renderer from 'react-test-renderer';
import {
  ActiveValidatorCountDocument,
  AverageBlockTimeDocument,
  LatestBlockHeightListenerDocument,
  TokenPriceListenerDocument,
} from '@/graphql/types/general_types';
import { CHEQD_WALLETS } from '@/api';
import DataBlocks from '@/screens/home/components/data_blocks';
import MockTheme from '@/tests/mocks/MockTheme';
import wait from '@/tests/utils/wait';

// ==================================
// mocks
// ==================================
beforeEach(() => {
  jest.mock(
    '@/screens/home/components/data_blocks/components/single_block',
    () => (props: JSX.IntrinsicElements['div']) => <div id="SingleBlock" {...props} />
  );
});

const mockLatestBlockHeight = jest.fn().mockReturnValue({
  data: {
    height: [
      {
        height: 953992,
      },
    ],
  },
});

const mockAverageBlockTime = jest.fn().mockReturnValue({
  data: {
    averageBlockTime: [
      {
        averageTime: 6.540624503709312,
      },
    ],
  },
});

const mockTokenPrice = jest.fn().mockReturnValue({
  data: {
    tokenPrice: [],
  },
});

const mockActiveValidatorsCount = jest.fn().mockReturnValue({
  data: {
    activeTotal: {
      aggregate: {
        count: 200,
      },
    },
    inactiveTotal: {
      aggregate: {
        count: 332,
      },
    },
    total: {
      aggregate: {
        count: 532,
      },
    },
  },
});

// ==================================
// unit tests
// ==================================
describe('screen: Home/DataBlocks', () => {
  it('matches snapshot', async () => {
    let component: renderer.ReactTestRenderer | undefined;
    const mock = new MockAdapter(axios);

    mock.onGet(CHEQD_WALLETS).reply(() => {
      return [
        200,
        {
          accounts: [
            {
              '@type': '/cosmos.auth.v1beta1.BaseAccount',
              address: 'cheqd1qp929gfcxhmt0pltgncwvsdl9u4arl0pafr8hj',
              pub_key: {
                '@type': '/cosmos.crypto.secp256k1.PubKey',
                key: 'AuB2tVVljLNtdnPglTv/zpVOPCOd4jU/X3imJ55yTe8X',
              },
              account_number: '65215',
              sequence: '1',
            },
          ],
          pagination: {
            next_key: 'key',
            total: '79094',
          },
        },
      ];
    });

    renderer.act(() => {
      component = renderer.create(
        <ApolloProvider client={new ApolloClient({ link: from([]), cache: new InMemoryCache() })}>
          <MockedProvider
            mocks={[
              {
                request: { query: LatestBlockHeightListenerDocument, variables: { offset: 0 } },
                result: mockLatestBlockHeight,
              },
              { request: { query: TokenPriceListenerDocument }, result: mockTokenPrice },
              { request: { query: AverageBlockTimeDocument }, result: mockAverageBlockTime },
              {
                request: { query: ActiveValidatorCountDocument },
                result: mockActiveValidatorsCount,
              },
            ]}
          >
            <MockTheme>
              <DataBlocks />
            </MockTheme>
          </MockedProvider>
        </ApolloProvider>
      );
    });
    await wait(renderer.act);
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
    expect(mockActiveValidatorsCount).toBeCalledTimes(1);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
