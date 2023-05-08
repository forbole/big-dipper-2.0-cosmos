/* eslint-disable object-curly-newline */
import { TopAccountsDocument } from '@/graphql/types/general_types';
import List from '@/screens/accounts/components/list';
import MockTheme from '@/tests/mocks/MockTheme';
import { mockClient } from '@/tests/mocks/mockApollo';
import wait from '@/tests/utils/wait';
import { ApolloProvider } from '@apollo/client';
import { MockedProvider } from '@apollo/client/testing';
import renderer from 'react-test-renderer';

// ==================================
// mocks
// ==================================
const mockAccountBalancesDocument = jest.fn().mockReturnValue({
  data: {
    top_accounts: [
      {
        address: 'address1',
        available: 0,
        delegation: 0,
        redelegation: 0,
        reward: 0,
        sum: 0,
        unbonding: 0,
        type: '',
      },
      {
        address: 'address2',
        available: 0,
        delegation: 0,
        redelegation: 0,
        reward: 0,
        sum: 0,
        unbonding: 0,
        type: '',
      },
    ],
  },
});

// ==================================
// unit tests
// ==================================
describe('screen: Accounts/List', () => {
  it('matches snapshot', async () => {
    let component: renderer.ReactTestRenderer | undefined;

    renderer.act(() => {
      component = renderer.create(
        <ApolloProvider client={mockClient}>
          <MockedProvider
            mocks={[
              {
                request: {
                  query: TopAccountsDocument,
                  variables: {
                    limit: 100,
                    offset: 0,
                  },
                },
                result: mockAccountBalancesDocument,
              },
            ]}
          >
            <MockTheme>
              <List />
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
