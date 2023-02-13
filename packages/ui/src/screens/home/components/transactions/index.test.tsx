import { TransactionsListenerDocument } from '@/graphql/types/general_types';
import Transactions from '@/screens/home/components/transactions';
import { mockClient } from '@/tests/mocks/mockApollo';
import MockTheme from '@/tests/mocks/MockTheme';
import wait from '@/tests/utils/wait';
import { ApolloProvider } from '@apollo/client';
import { MockedProvider } from '@apollo/client/testing';
import renderer from 'react-test-renderer';

// ==================================
// mocks
// ==================================
jest.mock('@/components/box', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Box" {...props} />
));
jest.mock('@/components/no_data', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="NoData" {...props} />
));

jest.mock(
  '@/screens/home/components/transactions/components/mobile',
  () => (props: JSX.IntrinsicElements['div']) => <div id="Mobile" {...props} />
);
jest.mock(
  '@/screens/home/components/transactions/components/desktop',
  () => (props: JSX.IntrinsicElements['div']) => <div id="Desktop" {...props} />
);
jest.mock('@/components/box', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Box" {...props} />
));

const mockTxsListenerDocument = jest.fn().mockReturnValue({
  data: {
    transactions: [
      {
        height: 2000,
        block: {
          timestamp: '2021-05-28T00:08:33.700487',
        },
        hash: '76nwV8zz8tLz97SBRXH6uwHvgHXtqJDLQfF66jZhQ857',
        messages: [],
        success: true,
        logs: [],
      },
    ],
  },
});

// ==================================
// unit tests
// ==================================
describe('screen: Home/Blocks/Mobile', () => {
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
                  variables: { limit: 7, offset: 0 },
                },
                result: mockTxsListenerDocument,
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
