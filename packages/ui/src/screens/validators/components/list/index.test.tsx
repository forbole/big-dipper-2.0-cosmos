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

jest.mock('@/screens/validators/components/list/hooks', () => ({
  useValidators: () => ({
    state: {
      loading: true,
      exists: true,
      tab: 1,
      sortKey: 'height',
      sortDirection: 'asc',
      votingPowerOverall: 1123323e231,
      items: [
        {
          validator: 'val',
          votingPower: 323243,
          votingPowerPercent: 11,
          commission: 5,
          condition: 1,
          status: 3,
          jailed: false,
          tombstoned: false,
        },
        {
          validator: 'val-2',
          votingPower: 223243,
          votingPowerPercent: 8,
          commission: 4,
          condition: 1,
          status: 3,
          jailed: false,
          tombstoned: false,
        },
      ],
    },
    handleTabChange: () => jest.fn(),
    handleSort: () => jest.fn(),
    handleSearch: () => jest.fn(),
    sortItems: () => jest.fn(),
  }),
}));

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
            missedBlocksCounter: 12,
            tombstoned: false,
          },
        ],
        validatorInfo: {
          operatorAddress: 'desmosvaloper1zm3l7p8n5dxqeadsfxy3rd0j3c2knnx3chg77a',
          selfDelegateAddress: 'desmos1zm3l7p8n5dxqeadsfxy3rd0j3c2knnx3x6q250',
        },
        validatorVotingPowers: [
          {
            votingPower: 44,
          },
        ],
        validatorCommissions: [
          {
            commission: 0.14,
          },
        ],
        delegations: [
          {
            amount: {
              denom: 'udaric',
              amount: '14000000',
            },
            delegatorAddress: 'desmos18kvwy5hzcu3ss08lcfcnx0eajuecg69ujmkwjr',
          },
          {
            amount: {
              denom: 'udaric',
              amount: '30000000',
            },
            delegatorAddress: 'desmos18kvwy5hzcu3ss08lcfcnx0eajuecg69ujmkwjr',
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
