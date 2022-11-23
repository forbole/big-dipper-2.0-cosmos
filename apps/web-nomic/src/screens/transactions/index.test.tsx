import React from 'react';
import renderer from 'react-test-renderer';
import { ApolloClient, ApolloProvider, from, InMemoryCache } from '@apollo/client';
import { MockTheme, wait } from '@/tests/utils';
import { TransactionsListenerDocument, TransactionsDocument } from '@/graphql/types/general_types';
import { MockedProvider } from '@apollo/client/testing';
import Transactions from '@/screens/transactions';

// ==================================
// mocks
// ==================================
jest.mock('@/components/layout', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Layout" {...props} />
));
jest.mock('@/components/transactions_list', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="TransactionsList" {...props} />
));
jest.mock('@/components/transactions_list_details', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="TransactionsListDetails" {...props} />
));
jest.mock('@/components/box', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Box" {...props} />
));
jest.mock('@/components/load_and_exist', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="LoadAndExist" {...props} />
));

const mockTransactionsListenerDocument = jest.fn().mockReturnValue({
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
});

const mockTransactionsDocument = jest.fn().mockReturnValue({
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
  it.skip('matches snapshot', async () => {
    const mockClient = new ApolloClient({ link: from([]), cache: new InMemoryCache() });
    let component: renderer.ReactTestRenderer | undefined;

    renderer.act(() => {
      component = renderer.create(
        <ApolloProvider client={mockClient}>
          <MockedProvider
            mocks={[
              {
                request: { query: TransactionsListenerDocument },
                result: mockTransactionsListenerDocument,
              },
              { request: { query: TransactionsDocument }, result: mockTransactionsDocument },
            ]}
          >
            <MockTheme>
              <Transactions />
            </MockTheme>
          </MockedProvider>
        </ApolloProvider>
      );
    });
    await wait(renderer.act);
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
