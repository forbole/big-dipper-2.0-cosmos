import React from 'react';
import renderer from 'react-test-renderer';
import {
  MockTheme, wait,
} from '@tests/utils';
import { ApolloProvider } from '@apollo/client';
import { createMockClient } from 'mock-apollo-client';
import {
  TokenomicsDocument,
} from '@graphql/types';
import Tokenomics from '.';

// ==================================
// mocks
// ==================================
const mockI18n = {
  t: (key: string) => key,
  lang: 'en',
};
jest.mock('next-translate/useTranslation', () => () => mockI18n);
jest.mock('@components', () => ({
  Box: (props) => <div id="box" {...props} />,
  CustomToolTip: (props) => <div id="CustomToolTip" {...props} />,
}));

const mockTokenomics = jest.fn().mockResolvedValue({
  data: {
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

    let component;

    renderer.act(() => {
      component = renderer.create(
        <ApolloProvider client={mockClient}>
          <MockTheme>
            <Tokenomics />
          </MockTheme>
        </ApolloProvider>,
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
