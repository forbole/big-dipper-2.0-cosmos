import React from 'react';
import renderer from 'react-test-renderer';
import App from '@/screens/app';

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
      <App router={{}} Component={() => <div id="component" />} pageProps={{}} />
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
