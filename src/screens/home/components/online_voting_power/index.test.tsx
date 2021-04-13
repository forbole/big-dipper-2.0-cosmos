import React from 'react';
import renderer from 'react-test-renderer';
import { ApolloProvider } from '@apollo/client';
import {
  createMockClient, createMockSubscription,
} from 'mock-apollo-client';
import {
  OnlineVotingPowerListenerDocument,
  TokenomicsDocument,
} from '@graphql/types';
import {
  MockTheme, wait,
} from '@tests/utils';
import OnlineVotingPower from '.';

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
}));

const mockOnlineVotingPower = {
  data: {
    block: [
      {
        height: 1143207,
        preCommitsAggregate: {
          aggregate: {
            sum: {
              votingPower: 257518,
            },
          },
        },
      },
    ],
  },
};

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
describe('screen: Home/OnlineVotingPower', () => {
  it('matches snapshot', async () => {
    const mockClient = createMockClient();
    const mockSubscription = createMockSubscription();

    mockClient.setRequestHandler(
      OnlineVotingPowerListenerDocument,
      () => mockSubscription,
    );

    mockClient.setRequestHandler(
      TokenomicsDocument,
      mockTokenomics,
    );

    let component;

    renderer.act(() => {
      component = renderer.create(
        <ApolloProvider client={mockClient}>
          <MockTheme>
            <OnlineVotingPower />
          </MockTheme>
          ,
        </ApolloProvider>,
      );
    });
    await wait();

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    renderer.act(() => {
      mockSubscription.next(mockOnlineVotingPower);
    });
    await wait();

    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
