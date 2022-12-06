import InnerApp from '@/screens/app/components/inner_app';
import { ApolloClient, from, InMemoryCache } from '@apollo/client';
import type { Router } from 'next/router';
import renderer from 'react-test-renderer';

// ==================================
// global setup
// ==================================
let component: renderer.ReactTestRenderer;

// ==================================
// mocks
// ==================================
const mockClient = new ApolloClient({ link: from([]), cache: new InMemoryCache() });

jest.mock('@/screens/app/components/inner_app/hooks', () => ({
  useChainHealthCheck: () => mockClient,
}));

// ==================================
// unit tests
// ==================================
describe('screen: _app/InnerApp', () => {
  it('matches snapshot', () => {
    renderer.act(() => {
      component = renderer.create(
        <InnerApp
          router={{} as Router}
          Component={() => <div id="component" />}
          pageProps={{
            props: 'props',
          }}
        />
      );
    });

    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
