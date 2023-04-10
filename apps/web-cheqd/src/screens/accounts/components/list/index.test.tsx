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

jest.mock(
  '@/screens/accounts/components/list/components/mobile',
  () => (props: JSX.IntrinsicElements['div']) => <div id="Mobile" {...props} />
);
jest.mock(
  '@/screens/accounts/components/list/components/desktop',
  () => (props: JSX.IntrinsicElements['div']) => <div id="Desktop" {...props} />
);

jest.mock('@/components/box', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Box" {...props} />
));
jest.mock('@/components/no_data', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="NoData" {...props} />
));
jest.mock('@/components/load_and_exist', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="LoadAndExist" {...props} />
));

jest.mock('@/screens/accounts/components/list/hooks', () => ({
  ...jest.requireActual('@/screens/accounts/components/list/hooks'),
  useAccounts: () => ({
    items: [
      {
        rank: 1,
        address: 'cheqd1qqzg80l0x0vyrpvk2kwwahu0x7908tvvehjj0n',
        balance: 2900000,
        percentage: 1.59,
      },
      {
        rank: 2,
        address: 'cheqd1pymspzgv507tku8xj6xajrr94p7cfusfe4agtw',
        balance: 0,
        percentage: 0,
      },
    ],
    loading: false,
    exists: true,
    page: 1,
    setPage: (_page: number) => jest.fn(),
    rowsPerPage: 8,
    setRowsPerPage: (_rowsPerPage: number) => jest.fn(),
  }),
}));

jest.mock('@/recoil/profiles/hooks', () => ({
  ...jest.requireActual<object>('@/recoil/profiles/hooks'),
  useProfileRecoil: jest.fn((address) => ({
    address,
    name:
      address === 'cheqd1qqzg80l0x0vyrpvk2kwwahu0x7908tvvehjj0n'
        ? 'cheqd1qqzg80l0x0vyrpvk2kwwahu0x7908tvvehjj0n'
        : address,
    imageUrl: '',
  })),
  useProfilesRecoil: jest.fn((addresses) =>
    addresses.map((address: string) => ({
      address,
      name:
        address === 'cheqd1pymspzgv507tku8xj6xajrr94p7cfusfe4agtw'
          ? 'cheqd1pymspzgv507tku8xj6xajrr94p7cfusfe4agtw'
          : address,
      imageUrl: '',
    }))
  ),
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
