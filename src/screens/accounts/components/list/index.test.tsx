/* eslint-disable object-curly-newline */
import { ApolloProvider } from '@apollo/client';
import { TopAccountsDocument } from '@graphql/types/general_types';
import { MockTheme, wait } from '@tests/utils';
import { createMockClient } from 'mock-apollo-client';
import renderer from 'react-test-renderer';
import { RecoilRoot } from 'recoil';
import List from '.';

// ==================================
// mocks
// ==================================
jest.mock('./components', () => ({
  Mobile: (props) => <div id="Mobile" {...props} />,
  Desktop: (props) => <div id="Desktop" {...props} />,
  Tabs: (props) => <div id="Tabs" {...props} />,
}));

jest.mock('@components', () => ({
  Box: (props) => <div id="Box" {...props} />,
  NoData: (props) => <div id="NoData" {...props} />,
  LoadAndExist: (props) => <div id="LoadAndExist" {...props} />,
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
    const mockClient = createMockClient();
    mockClient.setRequestHandler(
      TopAccountsDocument,
      mockAccountBalancesDocument,
    );

    let component;

    renderer.act(() => {
      component = renderer.create(
        <RecoilRoot>
          <ApolloProvider client={mockClient}>
            <MockTheme>
              <List />
            </MockTheme>
          </ApolloProvider>
        </RecoilRoot>,
      );
    });
    await wait();

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
