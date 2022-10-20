import React from 'react';
import renderer from 'react-test-renderer';
import { ApolloProvider } from '@apollo/client';
import {
  createMockClient, createMockSubscription,
} from 'mock-apollo-client';
import {
  OnlineVotingPowerListenerDocument,
  TotalVotingPowerListenerDocument,
  StakingParamsDocument,
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

const mockTotalVotingPower = {
  data: {
    stakingPool: [
      {
        bonded: 254578529800,
      },
    ],
  },
};

const mockStakingParams = jest.fn().mockResolvedValue({
  data: {
    stakingParams: [
      {
        bondDenom: 'utoken',
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
    const mockSubscription2 = createMockSubscription();

    mockClient.setRequestHandler(
      StakingParamsDocument,
      mockStakingParams,
    );

    mockClient.setRequestHandler(
      OnlineVotingPowerListenerDocument,
      () => mockSubscription,
    );

    mockClient.setRequestHandler(
      TotalVotingPowerListenerDocument,
      () => mockSubscription2,
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
      mockSubscription2.next(mockTotalVotingPower);
    });
    await wait();

    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
