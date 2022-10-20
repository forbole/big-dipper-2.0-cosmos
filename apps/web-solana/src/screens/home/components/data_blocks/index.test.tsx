import React from 'react';
import renderer from 'react-test-renderer';
import {
  MockTheme, wait,
} from '@tests/utils';
import { ApolloProvider } from '@apollo/client';
import {
  createMockClient, createMockSubscription,
} from 'mock-apollo-client';
import {
  LatestBlockHeightListenerDocument,
  AverageBlockTimeDocument,
  TokenPriceListenerDocument,
  ActiveValidatorCountDocument,
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

const mockLatestBlockHeight = {
  data: {
    height: [
      {
        slot: 953992,
      },
    ],
  },
};

const mockAverageBlockTime = jest.fn().mockResolvedValue({
  data: {
    averageSlotTimePerHour: [
      {
        averageTime: 0.5512172714745062,
      },
    ],
  },
});

const mockTokenPrice = {
  data: {
    tokenPrice: [
      {
        price: 223.65,
        timestamp: '2021-12-02T06:23:51.967',
        marketCap: 68371260917,
        unitName: 'sol',
      },
    ],
  },
};

const mockActiveValidatorsCount = jest.fn().mockResolvedValue({
  data: {
    activeTotal: {
      aggregate: {
        count: 200,
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
    const mockSubscription = createMockSubscription();
    const mockSubscriptionTwo = createMockSubscription();

    mockClient.setRequestHandler(
      LatestBlockHeightListenerDocument,
      () => mockSubscription,
    );

    mockClient.setRequestHandler(
      TokenPriceListenerDocument,
      () => mockSubscriptionTwo,
    );

    mockClient.setRequestHandler(
      AverageBlockTimeDocument,
      mockAverageBlockTime,
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

    renderer.act(() => {
      mockSubscription.next(mockLatestBlockHeight);
    });

    await wait();

    renderer.act(() => {
      mockSubscriptionTwo.next(mockTokenPrice);
    });

    await wait();

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    expect(mockActiveValidatorsCount).toBeCalledTimes(1);
    expect(component.root.findByProps({ label: 'averageSlotTime' }).props.value).toEqual('0.55 s');
    expect(component.root.findByProps({ label: 'latestSlot' }).props.value).toEqual('953,992');
    expect(component.root.findByProps({ label: 'price' }).props.value).toEqual('$223.65');
    expect(component.root.findByProps({ description: 'outOfValidators' }).props.value).toEqual('200');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
