import React from 'react';
import renderer from 'react-test-renderer';
import App from '.';

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
      <App
        router={{} as any}
        Component={() => <div id="component" />}
        pageProps={{
          props: 'props',
        }}
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
