import React from 'react';
import renderer from 'react-test-renderer';
import { ApolloClient, ApolloProvider, from, InMemoryCache } from '@apollo/client';
import { OnlineVotingPowerDocument } from '@/graphql/types/general_types';
import { MockTheme, wait } from '@/tests/utils';
import { MockedProvider } from '@apollo/client/testing';
import OnlineVotingPower from '@/screens/home/components/hero/components/online_voting_power';

// ==================================
// mocks
// ==================================
const mockI18n = {
  t: (key: string) => key,
  lang: 'en',
};
jest.mock('next-translate/useTranslation', () => () => mockI18n);
jest.mock('@/components/box', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="box" {...props} />
));

const mockOnlineVotingPower = jest.fn().mockReturnValue({
  data: {
    activeTotal: {
      aggregate: {
        count: 109,
      },
    },
    validatorVotingPowerAggregate: {
      aggregate: {
        sum: {
          votingPower: 76341043,
        },
      },
    },
    stakingPool: [
      {
        bonded: 76341043,
      },
    ],
    stakingParams: [
      {
        params: {
          bond_denom: 'udsm',
          max_entries: 7,
          max_validators: 125,
          unbonding_time: 1209600000000000,
          historical_entries: 10000,
        },
      },
    ],
  },
});

// ==================================
// unit tests
// ==================================
describe('screen: Home/OnlineVotingPower', () => {
  it('matches snapshot', async () => {
    const mockClient = new ApolloClient({ link: from([]), cache: new InMemoryCache() });
    let component: renderer.ReactTestRenderer | undefined;

    renderer.act(() => {
      component = renderer.create(
        <ApolloProvider client={mockClient}>
          <MockedProvider
            mocks={[
              { request: { query: OnlineVotingPowerDocument }, result: mockOnlineVotingPower },
            ]}
          >
            <MockTheme>
              <OnlineVotingPower />
            </MockTheme>
          </MockedProvider>
        </ApolloProvider>
      );
    });
    await wait(renderer.act);

    let tree = component?.toJSON();
    expect(tree).toMatchSnapshot();

    tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
