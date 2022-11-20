import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme, wait } from 'ui/tests/utils';
import { ApolloClient, ApolloProvider, from, InMemoryCache } from '@apollo/client';
import { TokenomicsDocument } from '@graphql/types/general_types';
import { MockedProvider } from '@apollo/client/testing';
import Tokenomics from '.';

// ==================================
// mocks
// ==================================
const mockI18n = {
  t: (key: string) => key,
  lang: 'en',
};
jest.mock('next-translate/useTranslation', () => () => mockI18n);
jest.mock('ui/components/box', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="box" {...props} />
));
// to fix error, this.wrapperNode is null node_modules/recharts/src/component/Tooltip.tsx:143
jest.mock('recharts', () => ({
  ...jest.requireActual('recharts'),
  Tooltip: () => <div id="test-tooltip" />,
}));

const mockTokenomics = jest.fn().mockReturnValue({
  data: {
    stakingParams: [
      {
        params: {},
      },
    ],
    stakingPool: [
      {
        bonded: 254578529800,
        unbonded: 204887435198,
      },
    ],
    supply: [
      {
        coins: [
          {
            denom: 'udaric',
            amount: '7987725829900',
          },
          {
            denom: 'upotin',
            amount: '80000000000000',
          },
        ],
      },
    ],
  },
});

// ==================================
// unit tests
// ==================================
describe('screen: Home/Tokenomics', () => {
  it('matches snapshot', async () => {
    const mockClient = new ApolloClient({ link: from([]), cache: new InMemoryCache() });
    let component: renderer.ReactTestRenderer | undefined;

    renderer.act(() => {
      component = renderer.create(
        <ApolloProvider client={mockClient}>
          <MockedProvider
            mocks={[{ request: { query: TokenomicsDocument }, result: mockTokenomics }]}
          >
            <MockTheme>
              <Tokenomics />
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
