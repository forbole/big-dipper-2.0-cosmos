import Mobile from '@/components/nav/components/mobile';
import { mockChainId, mockQuery } from '@/hooks/useBigDipperNetworks/mocks';
import { mockClient } from '@/tests/mocks/mockApollo';
import MockTheme from '@/tests/mocks/MockTheme';
import wait from '@/tests/utils/wait';
import { ApolloProvider } from '@apollo/client';
import { MockedProvider } from '@apollo/client/testing';
import renderer from 'react-test-renderer';
// ==================================
// global setup
// ==================================
let component: renderer.ReactTestRenderer;

// ==================================
// global setup
// ==================================
jest.mock(
  '@/components/nav/components/mobile/components/menu',
  () => (props: JSX.IntrinsicElements['div']) => <div id="menu" {...props} />
);
jest.mock(
  '@/components/nav/components/mobile/components/navbar',
  () => (props: JSX.IntrinsicElements['div']) => <div id="navbar" {...props} />
);
jest.mock('@/components/nav/components/search_bar', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="searchBar" {...props} />
));

// ==================================
// unit tests
// ==================================
describe('screen: Nav/Mobile', () => {
  beforeEach(async () => {
    component = renderer.create(
      <ApolloProvider client={mockClient}>
        <MockedProvider mocks={[mockQuery, mockChainId]}>
          <MockTheme>
            <Mobile title="hello world" />
          </MockTheme>
        </MockedProvider>
      </ApolloProvider>
    );
    await wait(renderer.act);
  });

  it('it renders', async () => {
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
