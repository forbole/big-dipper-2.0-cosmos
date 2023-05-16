import { ApolloClient, ApolloProvider, from, InMemoryCache } from '@apollo/client';
import { MockedProvider } from '@apollo/client/testing';
import renderer from 'react-test-renderer';
import {
  ActiveValidatorCountDocument,
  AverageBlockTimeDocument,
  LatestBlockHeightListenerDocument,
  TokenPriceListenerDocument,
  TopAccountsParamsDocument,
} from '@/graphql/types/general_types';
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

const mockTopAccountsParams = jest.fn().mockReturnValue({
  data: {
    top_accounts_params: [
      {
        total_accounts: 79106,
      },
    ],
  },
});

// ==================================
// unit tests
// ==================================
describe('screen: Home/DataBlocks', () => {
  it('matches snapshot', async () => {
    let component: renderer.ReactTestRenderer | undefined;

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
              {
                request: { query: TopAccountsParamsDocument },
                result: mockTopAccountsParams,
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
