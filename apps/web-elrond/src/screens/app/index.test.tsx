import type { Router } from 'next/router';
import renderer from 'react-test-renderer';
import App from '@/screens/app';

// ==================================
// unit tests
// ==================================
describe('screen: _app', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <App router={{} as Router} Component={() => <div id="component" />} pageProps={{}} />
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
