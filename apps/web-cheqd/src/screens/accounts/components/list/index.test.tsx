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
jest.mock('@/screens/accounts/components/list/components/mobile', () => ({
  Mobile: (props: JSX.IntrinsicElements['div']) => <div id="Mobile" {...props} />,
}));

jest.mock('@/screens/accounts/components/list/components/desktop', () => ({
  Desktop: (props: JSX.IntrinsicElements['div']) => <div id="Desktop" {...props} />,
}));

jest.mock('@/components/box', () => ({
  Box: (props: JSX.IntrinsicElements['div']) => <div id="Box" {...props} />,
}));

jest.mock('@/components/no_data', () => ({
  NoData: (props: JSX.IntrinsicElements['div']) => <div id="NoData" {...props} />,
}));

jest.mock('@/components/load_and_exist', () => ({
  LoadAndExist: (props: JSX.IntrinsicElements['div']) => <div id="LoadAndExist" {...props} />,
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
