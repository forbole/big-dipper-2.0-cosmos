/* eslint-disable object-curly-newline */
import { TopAccountsDocument } from '@/graphql/types/general_types';
import MockTheme from '@/tests/mocks/MockTheme';
import wait from '@/tests/utils/wait';
import { mockClient } from '@/tests/mocks/mockApollo';
import { ApolloProvider } from '@apollo/client';
import { MockedProvider } from '@apollo/client/testing';
import renderer from 'react-test-renderer';
import { RecoilRoot } from 'recoil';
import List from '@/screens/accounts/components/list';

// ==================================
// mocks
// ==================================
jest.mock('next/router', () => ({
  ...jest.requireActual('next/router'),
  useRouter: () => ({
    query: {
      id: 4,
    },
  }),
}));

const mockAccountBalancesDocument = jest.fn().mockResolvedValue({
  data: {
    top_accounts: [
      {
        address: 'address',
        available: 0,
        delegation: 0,
        redelegation: 0,
        reward: 0,
        sum: 0,
        unbonding: 0,
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
        <RecoilRoot>
          <ApolloProvider client={mockClient}>
            <MockedProvider
              mocks={[
                {
                  request: {
                    query: TopAccountsDocument,
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
        </RecoilRoot>
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
