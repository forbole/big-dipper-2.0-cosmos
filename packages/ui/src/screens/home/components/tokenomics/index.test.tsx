import { TokenomicsDocument } from '@/graphql/types/general_types';
import Tokenomics from '@/screens/home/components/tokenomics';
import { mockClient } from '@/tests/mocks/mockApollo';
import MockTheme from '@/tests/mocks/MockTheme';
import wait from '@/tests/utils/wait';
import { ApolloProvider } from '@apollo/client';
import { MockedProvider } from '@apollo/client/testing';
import renderer from 'react-test-renderer';

// ==================================
// mocks
// ==================================
jest.mock('@/components/box', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="box" {...props} />
));
// to fix error, this.wrapperNode is null node_modules/recharts/src/component/Tooltip.tsx:143
jest.mock('recharts', () => ({
  ...jest.requireActual('recharts'),
  Tooltip: () => <div id="test-tooltip" />,
}));

const mockTokenomics = jest.fn().mockReturnValue({
  data: {
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
describe('screen: Home/Tokenomics', () => {
  it('matches snapshot', async () => {
    let component: renderer.ReactTestRenderer | undefined;

    renderer.act(() => {
      component = renderer.create(
        <ApolloProvider client={mockClient}>
          <MockedProvider
            mocks={[{ request: { query: TokenomicsDocument }, result: mockTokenomics }]}
          >
            <MockTheme>
              <Tokenomics />
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
