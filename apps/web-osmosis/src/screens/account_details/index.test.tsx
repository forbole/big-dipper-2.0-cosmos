import React from 'react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { ApolloClient, ApolloProvider, from, InMemoryCache } from '@apollo/client';
import renderer from 'react-test-renderer';
import { MockTheme, wait } from 'ui/tests/utils';
import {
  // AccountDocument,
  GetMessagesByAddressDocument,
} from '@graphql/types/general_types';
import { MockedProvider } from '@apollo/client/testing';
import AccountDetails from '.';

// ==================================
// mocks
// ==================================
jest.mock('next/router', () => ({
  useRouter: () => ({
    query: {
      address: 'desmos1ltpgdupjgtpqzsznltcptmfh6gfu5d8uehxggj',
    },
  }),
}));
jest.mock('@components/layout', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Layout" {...props} />
));
jest.mock('ui/components/load_and_exist', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="LoadAndExist" {...props} />
));
jest.mock('ui/components/desmos_profile', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="DesmosProfile" {...props} />
));

jest.mock(
  'ui/screens/account_details/components/overview',
  () => (props: JSX.IntrinsicElements['div']) => <div id="Overview" {...props} />
);
jest.mock('./components/balance', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Balance" {...props} />
));
jest.mock(
  'ui/screens/account_details/components/staking',
  () => (props: JSX.IntrinsicElements['div']) => <div id="Staking" {...props} />
);
jest.mock('./components/transactions', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Transactions" {...props} />
));
jest.mock(
  'ui/screens/account_details/components/other_tokens',
  () => (props: JSX.IntrinsicElements['div']) => <div id="OtherTokens" {...props} />
);

// const mockAccount = jest.fn().mockReturnValue({
//   data: {
//     commission: {
//       coins: [
//         {
//           amount: '935371507.295045102561007305',
//           denom: 'udsm',
//         },
//       ],
//     },
//     withdrawalAddress: {
//       address: 'desmos1ltpgdupjgtpqzsznltcptmfh6gfu5d8uehxggj',
//     },
//     accountBalances: {
//       coins: [
//         {
//           amount: '116306',
//           denom: 'udsm',
//         },
//       ],
//     },
//     delegationBalance: {
//       coins: [
//         {
//           amount: '1530000000',
//           denom: 'udsm',
//         },
//       ],
//     },
//     unbondingBalance: {
//       coins: [
//         {
//           amount: '0',
//           denom: 'udsm',
//         },
//       ],
//     },
//     delegationRewards: [
//       {
//         validatorAddress: 'desmosvaloper1gwr9l765vfxv4l4zz8glsxwkkphj2084xjwc68',
//         coins: [
//           {
//             amount: '1983411.761512021000000000',
//             denom: 'udsm',
//           },
//         ],
//       },
//       {
//         validatorAddress: 'desmosvaloper1mqfr567kvp659z0zjvpqudw3wx7hh3s7u9a8g9',
//         coins: [
//           {
//             amount: '1029160.218282986240000000',
//             denom: 'udsm',
//           },
//         ],
//       },
//     ],
//   },
// });

const mockAccountMessages = jest.fn().mockReturnValue({
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
  xit('matches snapshot', async () => {
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

    const mockClient = new ApolloClient({ link: from([]), cache: new InMemoryCache() });
    let component: renderer.ReactTestRenderer | undefined;

    renderer.act(() => {
      component = renderer.create(
        <ApolloProvider client={mockClient}>
          <MockedProvider
            mocks={[
              // {request: { query: AccountDocument }, result: mockAccount},
              { request: { query: GetMessagesByAddressDocument }, result: mockAccountMessages },
            ]}
          >
            <MockTheme>
              <AccountDetails />
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
