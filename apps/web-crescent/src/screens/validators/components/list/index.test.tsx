import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme, wait } from 'ui/tests/utils';
import { ApolloClient, ApolloProvider, from, InMemoryCache } from '@apollo/client';
import { ValidatorsDocument } from '@graphql/types/general_types';
import { MockedProvider } from '@apollo/client/testing';
import List from '.';

// ==================================
// mocks
// ==================================
jest.mock('./components/mobile', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Mobile" {...props} />
));
jest.mock('./components/desktop', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Desktop" {...props} />
));
jest.mock('./components/tabs', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Tabs" {...props} />
));
jest.mock('ui/components/box', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Box" {...props} />
));
jest.mock('ui/components/no_data', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="NoData" {...props} />
));
jest.mock('ui/components/load_and_exist', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="LoadAndExist" {...props} />
));

const mockValidatorsDocument = jest.fn().mockReturnValue({
  data: {
    stakingParams: [
      {
        params: {},
      },
    ],
    stakingPool: [
      {
        bondedTokens: 3932987528498,
      },
    ],
    validator: [
      {
        validatorStatuses: [
          {
            status: 3,
            jailed: false,
            height: 437042,
          },
        ],
        validatorSigningInfos: [
          {
            missedBlocksCounter: 1,
            tombstoned: false,
          },
        ],
        validatorInfo: {
          operatorAddress: 'desmosvaloper1njm853h4h9vh8xge3v9mf7nnukzhgt6z6dwsr3',
          selfDelegateAddress: 'desmos1njm853h4h9vh8xge3v9mf7nnukzhgt6zyqxyfr',
        },
        validatorVotingPowers: [
          {
            votingPower: 22,
          },
        ],
        validatorLiquidStaking: [
          {
            liquidStaking: 'Y',
          },
        ],
        validatorCommissions: [
          {
            commission: 0.1,
          },
        ],
        delegations: [
          {
            amount: {
              denom: 'udaric',
              amount: '1704000',
            },
            delegatorAddress: 'desmos12mu43g2qvdddfc3tpgr3pekkrdx23jgv36jlta',
          },
          {
            amount: {
              denom: 'udaric',
              amount: '21000000',
            },
            delegatorAddress: 'desmos1njm853h4h9vh8xge3v9mf7nnukzhgt6zyqxyfr',
          },
        ],
      },
    ],
    slashingParams: [
      {
        params: {},
      },
    ],
  },
});

// ==================================
// unit tests
// ==================================
describe('screen: Validators/List', () => {
  it('matches snapshot', async () => {
    const mockClient = new ApolloClient({ link: from([]), cache: new InMemoryCache() });
    let component: renderer.ReactTestRenderer | undefined;

    renderer.act(() => {
      component = renderer.create(
        <ApolloProvider client={mockClient}>
          <MockedProvider
            mocks={[{ request: { query: ValidatorsDocument }, result: mockValidatorsDocument }]}
          >
            <MockTheme>
              <List />
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
