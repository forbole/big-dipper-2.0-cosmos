import React from 'react';
import { RecoilRoot } from 'recoil';
import renderer from 'react-test-renderer';
import {
  createMockClient, createMockSubscription,
} from 'mock-apollo-client';
import { ApolloProvider } from '@apollo/client';
import {
  MockTheme, wait,
} from '@tests/utils';
import {
  TransactionsListenerDocument,
  TransactionsDocument,
} from '@graphql/types';
import Transactions from '.';

// ==================================
// mocks
// ==================================
jest.mock('@components', () => ({
  Layout: (props) => <div id="Layout" {...props} />,
  TransactionsList: (props) => <div id="TransactionsList" {...props} />,
  TransactionListDetails: (props) => <div id="TransactionListDetails" {...props} />,
  Box: (props) => <div id="Box" {...props} />,
  LoadAndExist: (props) => <div id="LoadAndExist" {...props} />,
}));

const mockTransactionsListenerDocument = {
  data: {
    transactions: [
      {
        height: 432022,
        hash: 'D223E2E4E4FD29868D1034EFE5FB162EAB78B4CCE1D53EFD4F34A40608FB6C4B',
        success: true,
        block: {
          timestamp: '2021-05-28T00:08:33.700487',
        },
        logs: [],
        messages: [
          {
            '@type': '/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward',
            delegator_address: 'desmos18kvwy5hzcu3ss08lcfcnx0eajuecg69ujmkwjr',
            validator_address: 'desmosvaloper18kvwy5hzcu3ss08lcfcnx0eajuecg69uvk76c3',
          },
          {
            '@type': '/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission',
            validator_address: 'desmosvaloper18kvwy5hzcu3ss08lcfcnx0eajuecg69uvk76c3',
          },
        ],
      },
    ],
  },
};

const mockTransactionsDocument = jest.fn().mockResolvedValue({
  data: {
    transactions: [
      {
        height: 432022,
        hash: 'D223E2E4E4FD29868D1034EFE5FB162EAB78B4CCE1D53EFD4F34A40608FB6C4B',
        success: true,
        block: {
          timestamp: '2021-05-28T00:08:33.700487',
        },
        logs: [],
        messages: [
          {
            '@type': '/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward',
            delegator_address: 'desmos18kvwy5hzcu3ss08lcfcnx0eajuecg69ujmkwjr',
            validator_address: 'desmosvaloper18kvwy5hzcu3ss08lcfcnx0eajuecg69uvk76c3',
          },
          {
            '@type': '/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission',
            validator_address: 'desmosvaloper18kvwy5hzcu3ss08lcfcnx0eajuecg69uvk76c3',
          },
        ],
      },
    ],
    total: {
      aggregate: {
        count: 609406,
      },
    },
  },
});

// ==================================
// unit tests
// ==================================
describe('screen: Transactions', () => {
  it('matches snapshot', async () => {
    const mockClient = createMockClient();
    const mockSubscription = createMockSubscription();

    mockClient.setRequestHandler(
      TransactionsListenerDocument,
      () => mockSubscription,
    );

    mockClient.setRequestHandler(
      TransactionsDocument,
      mockTransactionsDocument,
    );

    let component;

    renderer.act(() => {
      component = renderer.create(
        <RecoilRoot>
          <ApolloProvider client={mockClient}>
            <MockTheme>
              <Transactions />
            </MockTheme>
          </ApolloProvider>
        </RecoilRoot>,
      );
    });
    await wait();

    renderer.act(() => {
      mockSubscription.next(mockTransactionsListenerDocument);
    });

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
