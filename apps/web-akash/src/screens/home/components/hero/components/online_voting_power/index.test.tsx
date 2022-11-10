import React from 'react';
import renderer from 'react-test-renderer';
import { ApolloProvider } from '@apollo/client';
import { createMockClient } from 'mock-apollo-client';
import { OnlineVotingPowerDocument } from '@graphql/types/general_types';
import { MockTheme, wait } from 'ui/tests/utils';
import OnlineVotingPower from '.';

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

const mockOnlineVotingPower = jest.fn().mockResolvedValue({
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
    const mockClient = createMockClient();

    mockClient.setRequestHandler(OnlineVotingPowerDocument, mockOnlineVotingPower);

    let component;

    renderer.act(() => {
      component = renderer.create(
        <ApolloProvider client={mockClient}>
          <MockTheme>
            <OnlineVotingPower />
          </MockTheme>
          ,
        </ApolloProvider>
      );
    });
    await wait(renderer.act);

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
