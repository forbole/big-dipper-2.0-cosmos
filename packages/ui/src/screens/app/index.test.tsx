import { ApolloClient, from, InMemoryCache } from '@apollo/client';
import type { Router } from 'next/router';
import renderer from 'react-test-renderer';
import MyApp from '@/screens/app';

// ==================================
// mocks
// ==================================
const mockClient = new ApolloClient({ link: from([]), cache: new InMemoryCache() });

jest.mock('next-i18next', () => ({
  ...jest.requireActual('next-i18next'),
  useTranslation() {
    return { lang: 'en' };
  },
}));
jest.mock('@/graphql/useApollo', () => () => mockClient);

const mockI18n = {
  t: (key: string) => key,
  lang: 'en',
};

jest.mock('next-i18next', () => ({
  ...jest.requireActual('next-i18next'),
  useTranslation() {
    return mockI18n;
  },
}));

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
