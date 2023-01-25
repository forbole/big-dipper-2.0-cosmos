import MyApp from '@/screens/app';
import { mockClient } from '@/tests/mocks/mockApollo';
import type { Router } from 'next/router';
import renderer from 'react-test-renderer';

// ==================================
// mocks
// ==================================
jest.mock('@/graphql/useApollo', () => () => mockClient);

jest.mock('@/screens/app/hooks', () => ({
  useApp: () => jest.fn(),
}));

// ==================================
// unit tests
// ==================================
describe('screen: _app', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MyApp router={{} as Router} Component={() => <div id="component" />} pageProps={{}} />
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
