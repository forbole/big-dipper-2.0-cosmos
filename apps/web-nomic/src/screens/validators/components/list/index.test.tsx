import { ValidatorsDocument } from '@/graphql/types/general_types';
import List from '@/screens/validators/components/list';
import { mockClient } from '@/tests/mocks/mockApollo';
import MockTheme from '@/tests/mocks/MockTheme';
import wait from '@/tests/utils/wait';
import { ApolloProvider } from '@apollo/client';
import { MockedProvider } from '@apollo/client/testing';
import renderer from 'react-test-renderer';

// ==================================
// mocks
// ==================================
jest.mock(
  '@/screens/validators/components/list/components/mobile',
  () => (props: JSX.IntrinsicElements['div']) => <div id="Mobile" {...props} />
);
jest.mock(
  '@/screens/validators/components/list/components/desktop',
  () => (props: JSX.IntrinsicElements['div']) => <div id="Desktop" {...props} />
);
jest.mock(
  '@/screens/validators/components/list/components/tabs',
  () => (props: JSX.IntrinsicElements['div']) => <div id="Tabs" {...props} />
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
            inActiveSet: 'true',
            jailed: 'false',
            height: 437042,
          },
        ],
        validatorSigningInfos: [
          {
            missedBlocksCounter: 1,
            tombstoned: 'false',
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
  it.skip('matches snapshot', async () => {
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
