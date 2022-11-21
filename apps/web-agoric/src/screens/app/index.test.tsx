import { ApolloClient, from, InMemoryCache } from '@apollo/client';
import React from 'react';
import renderer from 'react-test-renderer';
import App from '.';

const mockClient = new ApolloClient({ link: from([]), cache: new InMemoryCache() });

jest.mock('next-translate/useTranslation', () => () => ({
  lang: 'en',
}));
jest.mock('ui/graphql/useApollo', () => () => mockClient);

const mockI18n = {
  t: (key: string) => key,
  lang: 'en',
};

jest.mock('next-translate/useTranslation', () => () => mockI18n);

jest.mock('./hooks', () => ({
  useApp: () => jest.fn(),
}));

// ==================================
// unit tests
// ==================================
describe('screen: _app', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <App router={{} as any} Component={() => <div id="component" />} pageProps={{}} />
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
