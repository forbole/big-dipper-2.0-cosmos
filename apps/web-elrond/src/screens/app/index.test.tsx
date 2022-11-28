import App from '@/screens/app';
import type { Router } from 'next/router';
import renderer from 'react-test-renderer';

jest.mock('next-translate/useTranslation', () => () => ({
  lang: 'en',
}));

const mockI18n = {
  t: (key: string) => key,
  lang: 'en',
};

jest.mock('next-translate/useTranslation', () => () => mockI18n);

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
