import React from 'react';
import renderer, { ReactTestRendererJSON } from 'react-test-renderer';
import {
  MockTheme, wait,
} from '@tests/utils';
import { ApolloProvider } from '@apollo/client';
import { createMockClient } from 'mock-apollo-client';
import {
  TokenomicsDocument,
} from '@graphql/types/general_types';
import Tokenomics from '.';

// ==================================
// mocks
// ==================================
const mockI18n = {
  t: (key: string) => key,
  lang: 'en',
};
jest.mock('next-translate/useTranslation', () => () => mockI18n);
jest.mock('@components/box', () => ({
  __esModule: true,
  default: (props: JSX.IntrinsicElements['div']) => <div id="box" {...props} />,
}));
jest.mock('recharts', () => ({
  ...jest.requireActual('recharts'),
  Tooltip: () => <div id="tooltip" />,
}));

const mockTokenomics = jest.fn().mockResolvedValue({
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
    const mockClient = createMockClient();

    mockClient.setRequestHandler(
      TokenomicsDocument,
      mockTokenomics,
    );

    let tree: ReactTestRendererJSON | ReactTestRendererJSON[] | null = null;

    renderer.act(() => {
      tree = renderer.create(
        <ApolloProvider client={mockClient}>
          <MockTheme>
            <Tokenomics />
          </MockTheme>
        </ApolloProvider>,
      ).toJSON();
    });
    await wait();

    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
