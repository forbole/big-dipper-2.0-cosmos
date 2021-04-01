import React from 'react';
import renderer from 'react-test-renderer';
import {
  MockTheme, wait,
} from '@tests/utils';
import { ApolloProvider } from '@apollo/client';
import { createMockClient } from 'mock-apollo-client';
import {
  LatestBlockHeightListenerDocument,
  AverageBlockTimeDocument,
  TokenPriceDocument,
  ActiveValidatorCountDocument,
  LatestBlockHeightOffsetDocument,
} from '@graphql/types';
import DataBlocks from '.';

// ==================================
// mocks
// ==================================
const mockI18n = {
  t: (key: string) => key,
  lang: 'en',
};
jest.mock('next-translate/useTranslation', () => () => mockI18n);
jest.mock('./components', () => ({
  SingleBlock: (props) => <div id="SingleBlock" {...props} />,
}));

const mockLatestBlockHeight = jest.fn().mockResolvedValue({
  data: {
    height: [
      {
        height: 953992,
      },
    ],
  },
});

const mockAverageBlockTime = jest.fn().mockResolvedValue({
  data: {
    averageBlockTimePerDay: [
      {
        averageTime: 6.540624503709312,
      },
    ],
  },
});

const mockTokenPrice = jest.fn().mockResolvedValue({
  data: {
    tokenPrice: [],
  },
});

const mockActiveValidatorsCount = jest.fn().mockResolvedValue({
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
    const mockClient = createMockClient();

    mockClient.setRequestHandler(
      LatestBlockHeightListenerDocument,
      mockLatestBlockHeight,
    );

    mockClient.setRequestHandler(
      AverageBlockTimeDocument,
      mockAverageBlockTime,
    );

    mockClient.setRequestHandler(
      TokenPriceDocument,
      mockTokenPrice,
    );

    mockClient.setRequestHandler(
      LatestBlockHeightOffsetDocument,
      mockLatestBlockHeight,
    );

    mockClient.setRequestHandler(
      ActiveValidatorCountDocument,
      mockActiveValidatorsCount,
    );

    let component;

    renderer.act(() => {
      component = renderer.create(
        <ApolloProvider client={mockClient}>
          <MockTheme>
            <DataBlocks />
          </MockTheme>
        </ApolloProvider>,
      );
    });
    await wait();

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    expect(mockActiveValidatorsCount).toBeCalledTimes(1);
    expect(mockActiveValidatorsCount).toBeCalledWith({ height: 953992 });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
