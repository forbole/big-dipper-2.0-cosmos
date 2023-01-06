import MyApp from '@/screens/app';
import { ApolloClient, from, InMemoryCache } from '@apollo/client';
import type { Router } from 'next/router';
import renderer from 'react-test-renderer';

// ==================================
// mocks
// ==================================
const mockClient = new ApolloClient({ link: from([]), cache: new InMemoryCache() });

jest.mock('next-translate/useTranslation', () => () => ({
  lang: 'en',
}));
jest.mock('@/graphql/useApollo', () => () => mockClient);

const mockI18n = {
  t: (key: string) => key,
  lang: 'en',
};

jest.mock('next-translate/useTranslation', () => () => mockI18n);

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
