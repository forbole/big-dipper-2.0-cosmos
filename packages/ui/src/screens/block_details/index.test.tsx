import { ApolloClient, ApolloProvider, from, InMemoryCache } from '@apollo/client';
import { MockedProvider } from '@apollo/client/testing';
import renderer from 'react-test-renderer';
import { BlockDetailsDocument } from '@/graphql/types/general_types';
import BlockDetails from '@/screens/block_details';
import MockTheme from '@/tests/mocks/MockTheme';
import wait from '@/tests/utils/wait';

// ==================================
// mocks
// ==================================
jest.mock('next/router', () => ({
  ...jest.requireActual('next/router'),
  useRouter: () => ({
    query: {
      height: 300,
    },
  }),
}));
jest.mock('@/components/layout', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Layout" {...props} />
));
jest.mock('@/components/load_and_exist', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="LoadAndExist" {...props} />
));

jest.mock(
  '@/screens/block_details/components/overview',
  () => (props: JSX.IntrinsicElements['div']) => <div id="Overview" {...props} />
);
jest.mock(
  '@/screens/block_details/components/transactions',
  () => (props: JSX.IntrinsicElements['div']) => <div id="Transactions" {...props} />
);
jest.mock(
  '@/screens/block_details/components/signatures',
  () => (props: JSX.IntrinsicElements['div']) => <div id="Signatures" {...props} />
);

const mockAverageBlockTime = jest.fn().mockReturnValue({
  data: {
    transaction: [
      {
        height: 999,
        hash: '393310C681CB39E09CD3AC16C600DBFDACB2DF5085277DA81E52698620C06136',
        logs: [],
        messages: [
          {
            '@type': '/cosmos.staking.v1beta1.MsgDelegate',
            amount: {
              denom: 'udaric',
              amount: '27466368',
            },
            delegator_address: 'desmos18kvwy5hzcu3ss08lcfcnx0eajuecg69ujmkwjr',
            validator_address: 'desmosvaloper18kvwy5hzcu3ss08lcfcnx0eajuecg69uvk76c3',
          },
        ],
        success: true,
      },
    ],
    block: [
      {
        height: 999,
        hash: 'E568ACFE5717F79A44979563410FF7F6C3043A07307E541EF21E15FC478C3DF0',
        timestamp: '2021-04-27T16:27:34.331769',
        txs: 1,
        validator: {
          validatorInfo: {
            operatorAddress: 'desmosvaloper18kvwy5hzcu3ss08lcfcnx0eajuecg69uvk76c3',
          },
        },
      },
    ],
    preCommitsAggregate: {
      aggregate: {
        sum: {
          votingPower: 7304,
        },
      },
    },
    preCommits: [
      {
        validator: {
          validatorInfo: {
            operatorAddress: 'desmosvaloper1qlh47ty9ah2d5e0xq6gsvqjvfulljl9602k7f9',
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
    let component: renderer.ReactTestRenderer | undefined;

    renderer.act(() => {
      component = renderer.create(
        <ApolloProvider client={new ApolloClient({ link: from([]), cache: new InMemoryCache() })}>
          <MockedProvider
            mocks={[
              {
                request: {
                  query: BlockDetailsDocument,
                  variables: { height: 300, signatureHeight: 301 },
                },
                result: mockAverageBlockTime,
              },
            ]}
          >
            <MockTheme>
              <BlockDetails />
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
