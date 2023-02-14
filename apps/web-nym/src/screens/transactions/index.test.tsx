import { TransactionsDocument, TransactionsListenerDocument } from '@/graphql/types/general_types';
import Transactions from '@/screens/transactions';
import { mockClient } from '@/tests/mocks/mockApollo';
import MockTheme from '@/tests/mocks/MockTheme';
import wait from '@/tests/utils/wait';
import { ApolloProvider } from '@apollo/client';
import { MockedProvider } from '@apollo/client/testing';
import renderer from 'react-test-renderer';

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
  it('matches snapshot', async () => {
    let component: renderer.ReactTestRenderer | undefined;

    renderer.act(() => {
      component = renderer.create(
        <ApolloProvider client={mockClient}>
          <MockedProvider
            mocks={[
              {
                request: {
                  query: TransactionsListenerDocument,
                  variables: { limit: 1, offset: 0 },
                },
                result: mockTransactionsListenerDocument,
              },
              {
                request: { query: TransactionsDocument, variables: { limit: 51, offset: 1 } },
                result: mockTransactionsDocument,
              },
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
