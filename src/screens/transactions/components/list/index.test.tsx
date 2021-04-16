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
  TransactionsDocument,
  TransactionsListenerDocument,
} from '@graphql/types';
import List from '.';

// ==================================
// mocks
// ==================================
jest.mock('@components', () => ({
  Box: (props) => <div id="Box" {...props} />,
  TransactionsList: (props) => <div id="TransactionsList" {...props} />,
}));

const mockTransactions = jest.fn().mockResolvedValue({
  data: {
    transactions: [
      {
        height: 1177924,
        hash: '1E9232E8F8D450B32367698AB9DFD814A4570A3C95B4309B8E1D4B9D9F3629CB',
        success: true,
        block: {
          timestamp: '2021-04-15T22:50:22.324996',
        },
        messages: [
          {
            '@type': '/cosmos.slashing.v1beta1.MsgUnjail',
            validator_addr: 'desmosvaloper17xf8f0ly5evhawvfz2q9u4pvpjq3spfmmr4xaz',
          },
        ],
      },
    ],
    total: {
      aggregate: {
        count: 1926,
      },
    },
  },
});

const mockTransactionListener = {
  data: {
    transactions: [
      {
        height: 1177925,
        hash: '1E9232E8F8D450B32367698AB9DFD814A4570A3C95B4309B8E1D4B9D9F3629CB',
        success: false,
        block: {
          timestamp: '2021-04-15T22:50:22.324996',
        },
        messages: [
          {
            '@type': '/cosmos.slashing.v1beta1.MsgUnjail',
            validator_addr: 'desmosvaloper17xf8f0ly5evhawvfz2q9u4pvpjq3spfmmr4xaz',
          },
        ],
      },
    ],
  },
};

// ==================================
// unit tests
// ==================================
describe('screen: Transactions/List', () => {
  it('matches snapshot', async () => {
    const mockClient = createMockClient();
    const mockSubscription = createMockSubscription();

    mockClient.setRequestHandler(
      TransactionsDocument,
      mockTransactions,
    );

    mockClient.setRequestHandler(
      TransactionsListenerDocument,
      () => mockSubscription,
    );

    let component;

    renderer.act(() => {
      component = renderer.create(
        <ApolloProvider client={mockClient}>
          <MockTheme>
            <List />
          </MockTheme>
          ,
        </ApolloProvider>,
      );
    });

    await wait();

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    renderer.act(() => {
      mockSubscription.next(mockTransactionListener);
    });
    await wait();

    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
