import { ApolloClient, ApolloProvider, from, InMemoryCache } from '@apollo/client';
import { MockedProvider } from '@apollo/client/testing';
import renderer from 'react-test-renderer';
import { LatestBlockTimestampDocument } from '@/graphql/types/general_types';
import Home from '@/screens/home';
import MockTheme from '@/tests/mocks/MockTheme';
import wait from '@/tests/utils/wait';

// ==================================
// mocks
// ==================================
jest.mock('@/components/layout', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Layout" {...props} />
));

jest.mock('@/screens/home/components/data_blocks', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="DataBlocks" {...props} />
));
jest.mock('@/screens/home/components/hero', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Hero" {...props} />
));
jest.mock('@/screens/home/components/consensus', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Consensus" {...props} />
));
jest.mock('@/screens/home/components/tokenomics', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Tokenomics" {...props} />
));
jest.mock('@/screens/home/components/blocks', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Blocks" {...props} />
));
jest.mock('@/screens/home/components/transactions', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Transactions" {...props} />
));

const mockBlockTime = jest.fn().mockReturnValue({
  data: {
    block: [
      {
        timestamp: '2021-06-25T03:23:27.762512',
      },
    ],
  },
});

// ==================================
// unit tests
// ==================================
describe('screen: Home', () => {
  it('matches snapshot', async () => {
    let component: renderer.ReactTestRenderer | undefined;

    renderer.act(() => {
      component = renderer.create(
        <ApolloProvider client={new ApolloClient({ link: from([]), cache: new InMemoryCache() })}>
          <MockedProvider
            mocks={[{ request: { query: LatestBlockTimestampDocument }, result: mockBlockTime }]}
          >
            <MockTheme>
              <Home />
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
