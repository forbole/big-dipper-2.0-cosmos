import React from 'react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createMockClient } from 'mock-apollo-client';
import { ApolloProvider } from '@apollo/client';
import renderer from 'react-test-renderer';
import {
  MockTheme, wait,
} from '@tests/utils';
import {
  AccountDocument,
  GetMessagesByAddressDocument,
} from '@graphql/types';
import AccountDetails from '.';

// ==================================
// mocks
// ==================================
jest.mock('next/router', () => ({
  useRouter: () => ({
    query: {
      address: 'address',
    },
  }),
}));

jest.mock('@components', () => ({
  Layout: (props) => <div id="Layout" {...props} />,
  LoadAndExist: (props) => <div id="LoadAndExist" {...props} />,
  DesmosProfile: (props) => <div id="DesmosProfile" {...props} />,
}));

jest.mock('./components', () => ({
  Overview: (props) => <div id="Overview" {...props} />,
  Balance: (props) => <div id="Balance" {...props} />,
  Staking: (props) => <div id="Staking" {...props} />,
  Transactions: (props) => <div id="Transactions" {...props} />,
  OtherTokens: (props) => <div id="OtherTokens" {...props} />,
}));

const mockAccount = jest.fn().mockResolvedValue({
  data: {
    stakingParams: [
      {
        params: {},
      },
    ],
    account: [
      {
        address: 'desmos18kvwy5hzcu3ss08lcfcnx0eajuecg69ujmkwjr',
        accountBalances: [
          {
            coins: [
              {
                denom: 'udaric',
                amount: '21280246',
              },
              {
                denom: 'someotherbalance',
                amount: '21280246',
              },
            ],
          },
        ],
        delegations: [
          {
            amount: {
              denom: 'udaric',
              amount: '1632425218854',
            },
            validator: {
              validatorInfo: {
                operatorAddress: 'desmosvaloper1u0dae8r8hay6r2gvccegg2fz6ryftf2wfnj5ft',
              },
              validatorCommissions: [
                {
                  commission: 0.0999,
                },
              ],
              validatorStatuses: [
                {
                  status: 3,
                  jailed: false,
                },
              ],
            },
          },
        ],
        unbonding: [],
        redelegations: [],
        delegationRewards: [
          {
            amount: [
              {
                denom: 'udaric',
                amount: '58219061338.275262315000000000',
              },
              {
                denom: 'ufootoken',
                amount: '58219061338',
              },
            ],
            withdrawAddress: 'desmos18kvwy5hzcu3ss08lcfcnx0eajuecg69ujmkwjr',
            validator: {
              validatorInfo: {
                operatorAddress: 'desmosvaloper1u0dae8r8hay6r2gvccegg2fz6ryftf2wfnj5ft',
              },
            },
          },
        ],
      },
    ],
    validator: [
      {
        commission: [
          {
            amount: [
              {
                denom: 'udaric',
                amount: '725602.207464031936652132',
              },
            ],
          },
        ],
      },
    ],
  },
});

const mockAccountMessages = jest.fn().mockResolvedValue({
  data: {
    messagesByAddress: [
      {
        transaction: {
          height: 793314,
          hash: '6BC372069E41B5493B785002FD795746384A07C3F373FF6E2CAD6ABDE29860BA',
          success: true,
          logs: [],
          messages: [
            {
              '@type': '/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward',
              delegator_address: 'desmos18kvwy5hzcu3ss08lcfcnx0eajuecg69ujmkwjr',
              validator_address: 'desmosvaloper18kvwy5hzcu3ss08lcfcnx0eajuecg69uvk76c3',
            },
            {
              '@type': '/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission',
              validator_address: 'desmosvaloper18kvwy5hzcu3ss08lcfcnx0eajuecg69uvk76c3',
            },
          ],
          block: {
            height: 793314,
            timestamp: '2021-06-22T03:40:33.804715',
          },
        },
      },
    ],
  },
});

// ==================================
// unit tests
// ==================================
describe('screen: BlockDetails', () => {
  it('matches snapshot', async () => {
    const mockAxios = new MockAdapter(axios);
    mockAxios.onPost('https://gql.mainnet.desmos.network/v1/graphql').reply(200, {
      data: {
        profile: [
          {
            address: 'desmos1kmw9et4e99ascgdw0mmkt63mggjuu0xuqjx30w',
            bio: '',
            dtag: 'RiccardoMontagnin',
            nickname: '',
            profilePic: '',
            chainLinks: [],
            applicationLinks: [],
            creationTime: '2021-10-06T00:10:45.761731',
          },
        ],
      },
    });

    const mockClient = createMockClient();
    mockClient.setRequestHandler(
      AccountDocument,
      mockAccount,
    );

    mockClient.setRequestHandler(
      GetMessagesByAddressDocument,
      mockAccountMessages,
    );

    let component;
    renderer.act(() => {
      component = renderer.create(
        <ApolloProvider client={mockClient}>
          <MockTheme>
            <AccountDetails />
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
