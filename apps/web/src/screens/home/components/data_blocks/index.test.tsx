import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme, wait } from 'ui/tests/utils';
import { ApolloClient, ApolloProvider, from, InMemoryCache } from '@apollo/client';
import { MockedProvider } from '@apollo/client/testing';
import {
  LatestBlockHeightListenerDocument,
  AverageBlockTimeDocument,
  TokenPriceListenerDocument,
  ActiveValidatorCountDocument,
} from '@graphql/types/general_types';
import DataBlocks from '.';

// ==================================
// mocks
// ==================================
const mockI18n = {
  t: (key: string) => key,
  lang: 'en',
};

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

beforeEach(() => {
  jest.mock('next-translate/useTranslation', () => () => mockI18n);
  jest.mock('./components', () => ({
    SingleBlock: (props: JSX.IntrinsicElements['div']) => <div id="SingleBlock" {...props} />,
  }));
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
                request: { query: LatestBlockHeightListenerDocument },
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
